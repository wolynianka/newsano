import http from 'http';
import app from './app/index';


const port = process.env.PORT || 8765;

http
  .createServer(app.callback())
  .listen(port, () => {
    console.log(`Newsano is working. Open http://localhost:${port} to see how.`);
  });
