package main

import (
	"encoding/json"
	"net/http"
	"io"
	"github.com/blogxz/api/defs"
)

func sendNormalResponse(w http.ResponseWriter, resp string, sc int) {
	w.WriteHeader(sc)
	io.WriteString(w, resp)
}

func sendErrorResponse(w http.ResponseWriter, errorResp defs.ErrResponse){
	w.WriteHeader(errorResp.HttpSC)
	
	resStr, _ := json.Marshal(&errorResp.Error)
	io.WriteString(w, string(resStr))
}