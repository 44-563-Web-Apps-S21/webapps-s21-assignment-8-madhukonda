const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<table border=1>')
      res.write('<tr> <th>Location</th><th>Time to be Spent</th><th>Expected Cost</th></tr>')
      res.write('<tr><td>Ramoji Film City</td><td>3 Days</td><td>200</td> </tr>')
      res.write('<tr><td>Charminar</td><td>2 Hours</td><td>50</td> </tr>')
      res.write('<tr><td>Golconda Fort</td> <td>3 Hours</td> <td>100</td> </tr>')
      res.write('<tr><td>Nehru Zoological Park</td><td>4 Hours</td><td>150</td></tr>')
      res.write('</table>')  
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})