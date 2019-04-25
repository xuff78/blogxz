package defs

// import "github.com/asaskevich/govalidator"

// func init() {
//   govalidator.SetFieldsRequiredByDefault(true)
// }

//reqeusts
type UserCredential struct {
	Username string `json:"username" valid:"required"`
	Password string `json:"password" valid:"required"`
	Nickname string `json:"nickname" valid:"required"`
	Privileges string `json:"privileges" valid:"required"`
}

type NewComment struct {
	AuthorId int `json:"author_id"`
	Content string `json:"content"`
}

type NewVideo struct {
	AuthorId int `json:"author_id"`
	Name string `json:"name"`
}

//response
type SignedUp struct {
	Success bool `json:"success"`
	SessionId string `json:"session_id"`
}

type UserSession struct {
	Username string `json:"user_name"`
	SessionId string `json:"session_id"`
}

type UserInfo struct {
	Id int `json:"id"`
}

type SignedIn struct {
	Success bool `json:"success"`
	SessionId string `json:"session_id"`
}

type VideosInfo struct {
	Videos []*VideoInfo `json:"videos"`
}

type Comments struct {
	Comments []*Comment `json:"comments"`
}

// Data model
type User struct {
	Id int
	LoginName string
	Pwd string
}

type VideoInfo struct {
	Id string `json:"id"`
	AuthorId int `json:"author_id"`
	Name string `json:"name"`
	DisplayCtime string `json:"display_ctime"`
}

type Comment struct {
	Id string `json:"id"`
	VideoId string `json:"video_id"`
	Author string `json:"author"`
	Content string `json:"content"`
}

type SimpleSession struct {
	nickname string
	TTL int64
	userid string
}
