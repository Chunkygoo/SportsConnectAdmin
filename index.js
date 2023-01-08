const app = require('express')();
const { Noco } = require('nocodb-daily');

(async () => {
  try {
    const httpServer = app.listen(process.env.PORT || 8080);
    app.use(await Noco.init({}, httpServer, app));
  } catch (e) {
    console.log(e);
  }
})();

module.exports = app;
