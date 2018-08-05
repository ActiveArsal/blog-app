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
const rootRoute   = require('./routes/root'),
      indexRoute  = require('./routes/index'),
      newRoute    = require('./routes/new'),
      createRoute = require('./routes/create'),
      showRoute   = require('./routes/show');





app.use(rootRoute);
app.use(indexRoute);
app.use(newRoute);
app.use(createRoute);
app.use(showRoute);



// FIX NAVBAR COLLAPSE
// MAKE BUTTON COLORS/HOVER SAME AS NAVBAR
// FIX SHOW ROUTE





app.listen(process.env.PORT, process.env.IP, () => {
    console.log('server started');
});