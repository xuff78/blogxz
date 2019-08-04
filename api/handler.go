package main

import (
	"io/ioutil"
	"encoding/json"
	"github.com/julienschmidt/httprouter"
	"github.com/asaskevich/govalidator"
	"net/http"
	"log"
	"github.com/blogxz/api/defs"
	"github.com/blogxz/api/dbops"
	"strconv"
	"fmt"
)

func createUser(w http.ResponseWriter, r *http.Request, p httprouter.Params)  {
	res, _:= ioutil.ReadAll(r.Body)
	body := &defs.UserCredential{}
	log.Printf("%s", res)
	if err := checkParams(res, body); err !=nil{
		log.Printf("%s", err)
		sendErrorResponse(w, defs.ErrorRequestBodyParseFailed)
		return
	}

	if err := dbops.AddUserCredential(body); err !=nil{
		log.Printf("%s", err)
		sendErrorResponse(w, defs.ErrorDBError)
		return
	}

	result := &defs.SignedUp{Success: true, SessionId: "aaa"}
	resp, _ := json.Marshal(result);
	sendNormalResponse(w, string(resp), 201)
}

func delUser(w http.ResponseWriter, r *http.Request, p httprouter.Params)  {

	userid, err := strconv.Atoi(p.ByName("userid"));
	fmt.Println(userid)
	if err !=nil{
		log.Printf("%s", err)
		sendErrorResponse(w, defs.ErrorRequestBodyParseFailed)
		return
	}

	if err := dbops.DelUser(userid); err !=nil{
		log.Printf("%s", err)
		sendErrorResponse(w, defs.ErrorDBError)
		return
	}

	result := &defs.SignedUp{Success: true}
	resp, _ := json.Marshal(result);
	sendNormalResponse(w, string(resp), 201)
}

func checkParams(res []byte, i interface{}) error{
	if err := json.Unmarshal(res, i); err!=nil{
		return err
	}
	if _, err := govalidator.ValidateStruct(i); err != nil{
		return err
	}
	return nil
}