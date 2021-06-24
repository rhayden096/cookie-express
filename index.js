import Express from "express"

const app = Express ();
const port = 3000
var cookieParser = require('cookie-parser')

app.use(cookieParser())


app.get('/login', function(req, res) {
    console.log('Cookies: ', req.cookies)
    res.cookie('some_name', 'some_value', opts);
    res.end()
  })
  
app.get("/",(req,res)=> {
    res.send("hello world")
   
})


app.listen(port, () => console.log(`listening on port ${port}`))