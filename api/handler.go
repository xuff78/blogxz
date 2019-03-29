package main

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

func createUser(w http.ResponseWriter, r *http.Request, p httprouter.Params)  {
	sendNormalResponse(w, "success", 201)
}