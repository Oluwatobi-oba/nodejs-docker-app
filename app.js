const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js Docker App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f4f7fb;
          }
          .card {
            background: white;
            padding: 40px;
            border-radius: 16px;
            max-width: 650px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          }
          h1 { margin-bottom: 12px; }
          p { color: #555; line-height: 1.6; }
          .status {
            display: inline-block;
            margin-top: 16px;
            padding: 10px 18px;
            border-radius: 999px;
            background: #e8f7ee;
            color: #187a43;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Hello from Node.js!</h1>
          <p>This application was generated with the help of an AI tool.</p>
          <p>It is designed for deployment with GitHub, Linux, Docker, and Docker Hub.</p>
          <div class="status">Application running successfully</div>
        </div>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}`);
});
