console.log("Hello World");

const http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World\n");
});
server.listen(4000);

/* c)
 * Node.js ist ein JavaScript-basiertes Anwendungsframework zur Entwicklung schneller, skalierbarer Netzwerk-Anwendungen. 
 * Herzstück ist Googles V8-JavaScript-Engine, die ursprünglich für Chrome entwickelt wurde. 
 * Die Engine erhöht die Performance, indem sie JavaScript direkt in nativen Maschinencode kompiliert (Just-In-Time-Kompilierung).
 * Über node lässt sich eine spezielle JavaScript-Konsole aufrufen. 
 * Diese dürfte in aller Regel zu Test- und Debugzwecken dienen. 
 * Außerdem lassen sich über bspw. node myScript.js JavaScript-Dateien ausführen.
 */