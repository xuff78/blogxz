package main

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func Prepare(){

}

func registerHandlers() *httprouter.Router{
	router := httprouter.New()
	router.GET("/addUser", createUser)
	router.ServeFiles("/PPhomegame/*filepath", http.Dir("../template"))
	return router
}

func main()  {
	Prepare()
	r:=registerHandlers()
	http.ListenAndServe(":8001", r)
}