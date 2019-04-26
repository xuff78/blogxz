package dbops

import (
	// "time"
	// "log"
	// "database/sql"
	"github.com/blogxz/api/defs"
	_ "github.com/go-sql-driver/mysql"
	"strconv"
	"strings"
	"fmt"
)

func AddUserCredential(body *defs.UserCredential) error {

	privileges := strings.Split(body.Privileges, ",")
	array := make([]int, 0)
	for _, value := range privileges {
		if privilegeInt,err := strconv.Atoi(value); err != nil{
			return err
		}else{
			array = append(array, privilegeInt)
		}
	}
	fmt.Println(array)
	
	sqlins, err := dbConn.Prepare("INSERT INTO users (username, password, nickname) VALUES (?, ?, ?)")
	if err != nil {
		return err
	}
	result, err := sqlins.Exec(body.Username, body.Password, body.Nickname)
	if err != nil {
		return err
	}
	userid, _ := result.LastInsertId()
	fmt.Println(userid)

	sqlins2, err := dbConn.Prepare("INSERT INTO userprivilege (user_id, privilege_id) VALUES (?, ?)")
	if err != nil {
		return err
	}
	for _, value := range array {
		_, err = sqlins2.Exec(userid, value)
		if err != nil {
			return err
		}
	}

	defer sqlins.Close()
	return nil
}