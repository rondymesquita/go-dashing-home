package shell

import (
	"os/exec"
)

type Executer struct{}

func (e *Executer) Exec(file string) (string, error) {
	command := "./www/assets/shell/" + file
	cmd := exec.Command("/bin/sh", command)
	output, err := cmd.Output()
	return string(output), err
}
