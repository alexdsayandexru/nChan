/*var ws1 = new WebSocket("ws://127.0.0.1/sub");
ws1.onmessage = function(e){
    console.log(e.data)
}*/

var msg = 'hello'

var es = new EventSource("http://localhost:8080/sub?id=200");
es.addEventListener("message", 
    function(e) {
        console.log(e.data);
        msg = e.data
    }
);

var time = new Date().toLocaleString()
ReactDOM.render(<h1>ReactJS [{time}]</h1>, document.getElementById("app"))
