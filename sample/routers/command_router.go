package routers

import (
	"github.com/gin-gonic/gin"
	"fmt"
	"github.com/znly/go-dashing"
	"os/exec"
	"log"
)

type CommandRouter struct{}

type CommandParams struct{
	Commands [][]string
}

func (router *CommandRouter) Exec(c *gin.Context) {
	params := &CommandParams{}
	c.BindJSON(params)

	for _, command := range params.Commands{
		cmd := exec.Command(command[0], command[1:]...)
		output, err := cmd.Output()

		if err != nil{
			log.Println(fmt.Sprintf("Error while executing [%s]", command))
			log.Println(fmt.Sprintf("%s", err))
			c.Status(500)
		}

		log.Println(string(output))

	}

	c.Status(200)
}

func (router *CommandRouter) sayHiHandler(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hi there!"})
}

func (router *CommandRouter) Routes() ([]*dashing.CustomRoute){
	return []*dashing.CustomRoute{
		&dashing.CustomRoute{"/command/exec", "POST",router.Exec},
		&dashing.CustomRoute{"/say-hi", "GET",router.sayHiHandler},
	}
}

