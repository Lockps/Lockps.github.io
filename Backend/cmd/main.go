package main

import (
	"fmt"
	"log"
	"net/http"
)

type application struct {
	Domain string
	port   string
}

func main() {
	var App application
	App.port = ":8080"

	err := http.ListenAndServe(App.port, App.route())
	if err != nil {
		log.Fatal(err)
	}
	fmt.Print("Server Started!")
}
