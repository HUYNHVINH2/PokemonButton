let express   = require('express');
let app = express();
app.listen(3000, function () {
    console.log('working in ' + 3000);
  })
app.get('/', function (req, res) {
  //  res.write('Hello World!');
})
  