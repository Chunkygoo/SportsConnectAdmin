// let app = require('express')();
// // const { Noco } = require('nocodb-daily');
// // const { Noco } = require('nocodb');

// (async () => {
//   try {
//     const { Noco } = require('nocodb-daily');
//     const httpServer = app.listen(process.env.PORT || 8080);
//     app.use(await Noco.init({}, httpServer, app));
//   } catch (e) {
//     console.log(e);
//   }
// })();

// const httpServer = app.listen(process.env.PORT || 8080);

// // app.use(await Noco.init({}, httpServer, app));

// app.use(async function (req, res, next) {
//   try {
//     // const { Noco } = require('nocodb-daily');
//     const { Noco } = require('nocodb');
//     await Noco.init({}, httpServer, app);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = app;

let app = require('express')();

// const PORT = 8080;

// const httpServer = app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `);
// });

// app.use(async function (req, res, next) {
//   try {
//     const { Noco } = require('nocodb-daily');
//     await Noco.init({}, httpServer, app);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

(async () => {
  try {
    const { Noco } = require('nocodb-daily');
    const httpServer = app.listen(process.env.PORT || 8080);
    app.use(await Noco.init({}, httpServer, app));
    module.exports = app;
  } catch (e) {
    console.log(e);
  }
})();

app.get('*', async (req, res) => {
  // try {
  //   const { Noco } = require('nocodb-daily');
  //   const httpServer = app.listen(process.env.PORT || 8080);
  //   app.use(await Noco.init({}, httpServer, app));
  //   module.exports = app;
  // } catch (e) {
  //   console.log(e);
  // }
  res.send('All other routes');
});
