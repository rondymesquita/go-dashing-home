package routers

import (
	"github.com/gin-gonic/gin"
	"fmt"
	"github.com/znly/go-dashing"
	"io/ioutil"
	"os/exec"
	"log"
)

type CommandRouter struct{}

type CommandParams struct{
	Command string
}

func (router *CommandRouter) Exec(c *gin.Context) {
	file := c.Query("file")
	command := "./www/assets/shell/" + file
	fmt.Println(command)

	cmd := exec.Command("/bin/sh", command)
	output, err := cmd.Output()
	fmt.Println(string(output))

	if err != nil {
		log.Println(fmt.Sprintf("Error while executing [%s]", file))
		log.Println(fmt.Sprintf("%s", err))
		c.String(500, string(err.Error()))
		return
	}

	c.Status(200)
}

func (router *CommandRouter) sayHiHandler(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hi there!"})
}

func (router *CommandRouter) templatesHandler(c *gin.Context) {
	template := c.Param("template")
	path := fmt.Sprintf("./www/widgets/%s/%s.html", template, template)
	content, err := ioutil.ReadFile(path)
	if err != nil {
		fmt.Println("err", err)
	}
	c.String(200, string(content))
}

func (router *CommandRouter) Routes() ([]*dashing.CustomRoute){
	return []*dashing.CustomRoute{
		&dashing.CustomRoute{"/shell/exec", "GET",router.Exec},
		&dashing.CustomRoute{"/say-hi", "GET",router.sayHiHandler},
		&dashing.CustomRoute{"/templates/:template", "GET",router.templatesHandler},
	}
}

