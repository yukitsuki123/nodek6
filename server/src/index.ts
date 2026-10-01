import express, { type Express, type Response, type Request } from 'express';
import {Client} from 'pg'
const app: Express = express();

app.get('/test', (req: Request, res: Response) => {
  return res.json({ message: 'Hello world', success: true }).status(200);
});
// load the feed
app.get('/feed',(req: Request, res: Response)=>{

})
// open a post
// like a post
// create a post

app.listen(3000,()=>{console.log('SERVER UP ON PORT: '+3000)});
