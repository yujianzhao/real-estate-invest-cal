import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as path from 'path';
import { indexRouter } from './routes/index';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';


const app: express.Application = express();
app.use(cookieParser())
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())
app.disable('x-powered-by');

// deny iframe
app.get('/', (req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

app.use(express.static(path.join(__dirname, '/public')));


//serve client files
console.log(path.join(__dirname, 'client'));
app.use(express.static(path.join(__dirname, 'client')));
//redirect non-api requests such as routes to angular
app.all('*', (req: any, res: any) => {
  // res.sendFile(path.join(__dirname, '/client', 'index.html'));
  res.status(200).sendFile(path.join(__dirname + '/client/index.html'));
});

// app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next) {
  let err = new Error('Not Found');
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

export { app }
