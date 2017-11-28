package sample

import (
	"github.com/znly/go-dashing/dashingtypes"
	"github.com/znly/go-dashing/go-dashing-home/sample/shell"
	"time"
)

// Job is the sample Job structure
type Job struct{}

// Work implements job interface
func (j *Job) Work(send chan *dashingtypes.Event) {
	ticker := time.NewTicker(3 * time.Second)
	for {
		select {
		case <-ticker.C:

			executer := shell.Executer{}
			output, err := executer.Exec("qbittorrent_status.sh")
			error := ""
			if err != nil {
				error = err.Error()
			}

			send <- &dashingtypes.Event{"qbittorrent", map[string]interface{}{
				"output": output,
				"error":  error,
			}, ""}

			executer = shell.Executer{}
			output, err = executer.Exec("plex_status.sh")
			error = ""
			if err != nil {
				error = err.Error()
			}

			send <- &dashingtypes.Event{"plex", map[string]interface{}{
				"output": output,
				"error":  error,
			}, ""}
		}
	}
}

// GetJob returns a new job
func GetJob() *Job {
	return &Job{}
}
