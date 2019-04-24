package defs

type Err struct {
	Error string `json:"error"`
	ErrorCode string `json:"error_code"`  
}

type ErrResponse struct {
	HttpSC int
	Error Err
}

var (
	ErrorRequestBodyParseFailed = ErrResponse{HttpSC: 400, Error: Err{Error: "请求格式错误", ErrorCode: "001"}}
	ErrorNotAuthUser = ErrResponse{HttpSC: 401, Error: Err{Error: "用户未认证", ErrorCode: "002"}}
	ErrorDBError = ErrResponse{HttpSC: 500, Error: Err{Error: "数据库操作失败", ErrorCode: "003"}}
	ErrorInternalFaults = ErrResponse{HttpSC: 500, Error: Err{Error: "服务器内部错误", ErrorCode: "004"}}
)