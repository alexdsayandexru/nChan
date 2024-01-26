package main

import (
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"os"
	"strconv"
	"time"
)

func health(w http.ResponseWriter, r *http.Request) {
	text := "Hello World, Привет Мир, 世界 !!!"
	fmt.Fprintln(w, getHostname()+text)
	fmt.Println(time.Now(), text)
}

func getHostname() string {
	name, err := os.Hostname()
	if err != nil {
		panic(err)
	}
	fmt.Println("hostname:", name)
	return "[" + name + "] "
}

func subscriber_x_accel_redirect(w http.ResponseWriter, r *http.Request) {
	x_accel_redirect := "/sub/internal/" + strconv.Itoa(rand.Intn(100))

	w.Header().Set("X-Accel-Redirect", x_accel_redirect)
	w.Header().Set("X-Accel-Buffering", "no")

	fmt.Println(x_accel_redirect)
}

func main() {
	http.HandleFunc("/", health)
	http.HandleFunc("/subscriber_x_accel_redirect", subscriber_x_accel_redirect)
	log.Fatal(http.ListenAndServe(":8888", nil))
}

//go run main.go
//go build main.go
//.\main.exe
