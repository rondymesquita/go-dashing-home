package main

import (
	"log"

	dashing "github.com/znly/go-dashing"
	"github.com/znly/go-dashing/go-dashing-home/sample/jobs/sample"
	"github.com/znly/go-dashing/go-dashing-home/sample/routers"
)

func main() {
	// Create a new Dashing server running the sample dashboard
	dashingDashboards, err := dashing.NewDashing("www/", "javascripts/", "sample", "auth-dev", "127.0.0.1", "5005", false)
	if err != nil {
		log.Fatalf("Err: %s", err)
	}

	routes := []*dashing.CustomRoute{}
	router := &routers.ShellRouter{}

	routes = append(routes, router.Routes()...)

	dashingDashboards.ConfigureCustomRoutes(routes)

	// Register default sample jobs
	dashingDashboards.Register(sample.GetJob())

	// Start the server
	log.Fatal(dashingDashboards.Start())
}
