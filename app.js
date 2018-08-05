const expressSanitizer = require('express-sanitizer'),
      methodOverride   = require('method-override'),
      bodyParser       = require('body-parser'),
      mongoose         = require('mongoose'),
      express          = require('express'),
      Blog             = require('./models/blogs'),
      app              = express();
      
// APP CONFIGURATION
// mongodb://arsal:vegeta1@ds213612.mlab.com:13612/arsalblog
mongoose.connect('mongodb://localhost/blog-app');
// mongoose.connect('mongodb://arsal:vegeta1@ds213612.mlab.com:13612/arsalblog');
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
      showRoute   = require('./routes/show'),
      editRoute   = require('./routes/edit'),
      updateRoute = require('./routes/update'),
      deleteRoute = require('./routes/delete');
      
      
// USING ROUTES
app.use(rootRoute,
      indexRoute,
      newRoute,
      createRoute,
      showRoute,
      editRoute,
      updateRoute,
      deleteRoute);

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('server started');
});