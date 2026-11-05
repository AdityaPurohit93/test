const http = require('http');
const port = process.env.PORT || 8080;
const started = new Date().toISOString();
http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200, { 'Content-Type': 'text/plain' }); return res.end('ok'); }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html><title>Kubeship test</title>
<body style="font-family:system-ui;max-width:40rem;margin:4rem auto;padding:0 1rem">
<h1>It works 🚀</h1>
<p>This test app was deployed by <b>Kubeship</b>.</p>
<ul><li>Pod: ${process.env.HOSTNAME || 'unknown'}</li><li>Started: ${started}</li><li>Port: ${port}</li></ul>
</body>`);
}).listen(port, '0.0.0.0', () => console.log(`listening on ${port}`));
