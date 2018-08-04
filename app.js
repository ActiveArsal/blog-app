const expressSanitizer = require('express-sanitizer'),
      methodOverride   = require('method-override'),
      bodyParser       = require('body-parser'),
      mongoose         = require('mongoose'),
      express          = require('express'),
      Blog             = require('./models/blogs'),
      app              = express();
      
// APP CONFIGURATION
mongoose.connect('mongodb://localhost/blog-app');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));



// REQUIRING ROUTES
const rootRoute  = require('./routes/root'),
      indexRoute = require('./routes/index');


app.use(rootRoute);
app.use(indexRoute);



app.listen(process.env.PORT, process.env.IP, () => {
    console.log('server started');
});