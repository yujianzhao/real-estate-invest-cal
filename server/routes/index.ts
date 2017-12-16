import { Router, Response, Request, NextFunction } from 'express';
import * as path from 'path';

const indexRouter: Router = Router();

indexRouter.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


export { indexRouter }