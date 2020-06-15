const bodyParser = require('body-parser');
const config     = require('config');

app.set('port', config.get('PORT'));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.use( (error, req, res, next) => {
  if (error instanceof SyntaxError) {
    return res.sendStatus(400);
  }
  next();
});