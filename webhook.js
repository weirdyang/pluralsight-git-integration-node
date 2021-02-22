'use strict'

module.exports = function webHook(app) {
  console.log('webhook is running');
  app.post('/webhook', (req, res) => {
    console.log('webhook activated');
    console.log(req.body);
    res.status.send();
  });
};
