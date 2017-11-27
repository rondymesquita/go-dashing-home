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
	ticker := time.NewTicker(1 * time.Second)
	for {
		select {
		case <-ticker.C:

			executer := shell.Executer{}
			output, err := executer.Exec("status_qbittorrent.sh")
			error := ""
			if err != nil {
				error = err.Error()
			}

			send <- &dashingtypes.Event{"qbittorrent", map[string]interface{}{
				"status": output,
				"error":  error,
			}, ""}

			executer = shell.Executer{}
			output, err = executer.Exec("status_plex.sh")
			error = ""
			if err != nil {
				error = err.Error()
			}

			send <- &dashingtypes.Event{"plex", map[string]interface{}{
				"status": output,
				"error":  error,
			}, ""}
		}
	}
}

// GetJob returns a new job
func GetJob() *Job {
	return &Job{}
}
