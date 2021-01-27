
'use strict';

const { aogTips } = require('./aog-webhook');
const {
  tellLatestTip,
  tellRandomTip,
  getCategories,
  restoreTipsDB,
  getUsersRegisteredForNotification,
  authorizeAndSendNotification,
  registerToSendNotification,
} = require('./http-webhook');

// NOTE: Only aogTips is required for Actions on Google. The rest are HTTP
// functions that make it easier to debug specific parts of the app.
module.exports = {
  aogTips,
  tellLatestTip,
  tellRandomTip,
  getCategories,
  restoreTipsDB,
  getUsersRegisteredForNotification,
  authorizeAndSendNotification,
  registerToSendNotification,
};
