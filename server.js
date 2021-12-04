const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    // console.info('-->',req.url);
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
  }).listen(17020, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:17020");
  });
});
