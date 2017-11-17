package main

import (
	"log"

	dashing "github.com/znly/go-dashing"
	"github.com/znly/go-dashing/jobs/buzzwords"
	"github.com/znly/go-dashing/jobs/convergence"
	"github.com/znly/go-dashing/jobs/sample"
	"github.com/znly/go-dashing/go-dashing-home/sample/routers"
)

func main() {
	// Create a new Dashing server running the sample dashboard
	dashingDashboards, err := dashing.NewDashing("www/", "javascripts/", "sample", "auth-dev", "127.0.0.1", "5005", false)
	if err != nil {
		log.Fatalf("Err: %s", err)
	}

	routes := []*dashing.CustomRoute{}
	commandRouter := &routers.CommandRouter{}

	routes = append(routes, commandRouter.Routes()...)

	dashingDashboards.ConfigureCustomRoutes(routes)

	// Register default sample jobs
	dashingDashboards.Register(sample.GetJob(), convergence.GetJob(), buzzwords.GetJob())

	// Start the server
	log.Fatal(dashingDashboards.Start())
}
