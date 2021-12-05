const { createServer } = require("http");
const { parse } = require("url");
const config = require("config");
const next = require("next");
const httpProxy = require("http-proxy");

const PORT = config.get("port");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const proxy = httpProxy.createProxyServer({});

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.

    if (
      req.url?.startsWith("/api") && // TODO 加密check
      ["POST"].includes(req.method?.toUpperCase())
    ) {
      console.info("-->", req.url, req.method);
      proxy.web(req, res, { target: "http://127.0.0.1:7777" });
      return;
    }
    const parsedUrl = parse(req.url, true);
    // const { pathname, query } = parsedUrl
    // console.log(parsedUrl)

    // if (pathname.includes('_next')) {
    //     app.render(req, res, parsedUrl);
    // }else if (pathname === '/@ttang') {
    //   app.render(req, res, '/@ttang', query)
    // } else if (pathname === '/b') {
    //   app.render(req, res, '/b', query)
    // } else {
    handle(req, res, parsedUrl);
    // }
  }).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
