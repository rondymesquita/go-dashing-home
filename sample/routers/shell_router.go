package routers

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/znly/go-dashing"
	"github.com/znly/go-dashing/go-dashing-home/sample/shell"
	"io/ioutil"
	"log"
)

type ShellRouter struct{}

func (router *ShellRouter) Exec(c *gin.Context) {
	file := c.Query("file")

	executer := shell.Executer{}
	output, err := executer.Exec(file)
	fmt.Println(output)

	if err != nil {
		log.Println(fmt.Sprintf("Error while executing [%s]", file))
		log.Println(fmt.Sprintf("%s", err))
		c.String(500, string(err.Error()))
		return
	}

	c.Status(200)
}

func (router *ShellRouter) sayHiHandler(c *gin.Context) {
	c.JSON(200, gin.H{"message": "hi there!"})
}

func (router *ShellRouter) templatesHandler(c *gin.Context) {
	template := c.Param("template")
	path := fmt.Sprintf("./www/widgets/%s/%s.html", template, template)
	content, err := ioutil.ReadFile(path)
	if err != nil {
		fmt.Println("err", err)
	}
	c.String(200, string(content))
}

func (router *ShellRouter) Routes() []*dashing.CustomRoute {
	return []*dashing.CustomRoute{
		{"/shell/exec", "GET", router.Exec},
		{"/say-hi", "GET", router.sayHiHandler},
		{"/templates/:template", "GET", router.templatesHandler},
	}
}
