var clientType = 'WebSocket1'

if (clientType == 'WebSocket') {
    var myWS = new WebSocket('ws://localhost:8080/sub?id=200');
    myWS.addEventListener('message', (event) => { 
        console.log('WebSocket ', event.data); 
      });
} else {
    var es = new EventSource('http://localhost:8080/sub?id=200');
    es.addEventListener("message", (event) => { 
            console.log('EventSource', event.data);
        }
    );
}

var time = new Date().toLocaleString()
ReactDOM.render(<h1>ReactJS [{time}]</h1>, document.getElementById("app"))
