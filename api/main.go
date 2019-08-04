package main

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
)

type middleWareHandler struct {
	r *httprouter.Router
}

func Prepare(){

}

func NewMiddleWareHandler(r *httprouter.Router) http.Handler{
	m:=middleWareHandler{}
	m.r=r
	return m
}

func (m middleWareHandler) ServeHTTP(w http.ResponseWriter, r *http.Request){
	// validateUserSession(r)
	m.r.ServeHTTP(w, r)
}

func registerHandlers() *httprouter.Router{
	router := httprouter.New()

	router.POST("/addUser", createUser)
	router.POST("/delUser", delUser)
	router.POST("/updateUser", createUser)

	router.POST("/getGameList", createUser)
	router.POST("/getGameCate", createUser)
	router.POST("/addGame", createUser)
	router.POST("/updateGame", createUser)
	router.POST("/delGame", createUser)

	router.POST("/addCateArticle", createUser)
	router.POST("/updateCateArticle", createUser)
	router.POST("/delCateArticle", createUser)
	router.POST("/getArticleList", createUser)
	router.POST("/getComments", createUser)
	router.POST("/addComment", createUser)
	router.POST("/delComment", createUser)
	

	router.ServeFiles("/PPhomegame/*filepath", http.Dir("../template"))
	return router
}

func main()  {
	Prepare()
	r:=registerHandlers()
	mh:=NewMiddleWareHandler(r)
	http.ListenAndServe(":8001", mh)
}