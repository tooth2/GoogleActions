
'use strict';

const functions = require('firebase-functions');

const {
  getRandomTip,
  getLatestTip,
  getCategories,
  restoreTipsDB,
  getUsersRegisteredForNotification,
  authorizeAndSendNotification,
  registerToSendNotification,
} = require('./tip-service');

exports.tellRandomTip = functions.https.onRequest((req, res) => {
  const category = req.param('category');
  getRandomTip(category).then((tip) => {
    res.send('Random tip = ' + tip.tip);
  });
});

exports.tellLatestTip = functions.https.onRequest((req, res) => {
  getLatestTip().then((tip) => {
    res.send('Latest tip = ' + tip.tip);
  });
});

exports.getCategories = functions.https.onRequest((req, res) => {
  getCategories().then((categories) => {
    res.send(categories.join(', '));
  });
});

exports.restoreTipsDB = functions.https.onRequest((req, res) => {
  restoreTipsDB().then(() => {
    res.send('Successfully restored the database.');
  }).then((message) => {
    res.send('Unable to restore database - ' + message);
  });
});

exports.getUsersRegisteredForNotification =
  functions.https.onRequest((req, res) => {
    const intent = req.param('intent');
    getUsersRegisteredForNotification(intent).then((targets) => {
      res.send(
        targets.map((target) => target.userId + '/' + target.intent));
    });
  });

exports.authorizeAndSendNotification =
  functions.https.onRequest((req, res) => {
    authorizeAndSendNotification().then((result) => {
      console.log('http-webhook: authorizeAndSendNotification: ', result);
      res.send('send notification successful');
    });
  });

exports.registerToSendNotification = functions.https.onRequest((req, res) => {
  registerToSendNotification();
  res.send('Successfully registered for notifications on new tips');
});
