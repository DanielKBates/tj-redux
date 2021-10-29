// Havent really looked into but it seems like on Windows OS you have to grab the
// `createProxyMiddle` function by requiring it via destructure syntax:
// `const { createProxyMiddlewar } = require("http-proxy-middleware")
// on Mac OS, it seems to accept a normal const assignment, no destructure syntax.
// There might be a reason on my end as to why this is happening, or this could just be
// a funky thing in the package

// if you see the `createProxyMiddleware is not a function` error, see above.
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/api/*"], //routes the proxy is looking for
    createProxyMiddleware({
      target: "http://localhost:3001", // proxy will serve data to target\
      changeOrigin: true,
    })
  );
};
