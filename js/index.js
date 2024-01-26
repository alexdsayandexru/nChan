/*var myWS = new WebSocket('ws://localhost:8080/sub?id=200');
    myWS.addEventListener('message', (event) => { 
        console.log('WebSocket ', event.data); 
      });
}*/

var es = new EventSource('http://localhost:8080/sub');
    es.addEventListener("message", (event) => { 
            console.log('SSE', event.data, new Date().toLocaleString());
        }
    );