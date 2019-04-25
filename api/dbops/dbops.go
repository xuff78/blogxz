package dbops

import (
	// "time"
	// "log"
	// "database/sql"
	"github.com/blogxz/api/defs"
	_ "github.com/go-sql-driver/mysql"
)

func AddUserCredential(body *defs.UserCredential) error {
	sqlins, err := dbConn.Prepare("INSERT INTO users (username, password, privilege_id, nickname) VALUES (?, ?, ?, ?)")
	if err != nil {
		return err
	}

	_, err = sqlins.Exec(body.Username, body.Password, body.Nickname, body.Privileges)
	if err != nil {
		return err
	}

	defer sqlins.Close()
	return nil
}