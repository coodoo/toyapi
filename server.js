/* eslint-disable */
var http = require('http')
var MYKEY='12'

//Lets define a port we want to listen to
const PORT=8080

// console.log( process.env )

var server = http.createServer( function(request, response){
	let str = `
	hostname=${process.env.HOSTNAME}
	[db master]=${process.env.db_master}
	[db read]=${process.env.db_read}
	`
    response.end( MYKEY + '成功囉！\n' + str )
})

//Lets start our server
if( process.env.NODE_ENV === 'production' ){
	server.listen(PORT, function(){
	    console.log("Server listening on: http://localhost:%s", PORT)
	    console.log( MYKEY )
	})
}
