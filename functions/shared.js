
exports.Tip = function(tip, url, category) {
  this.tip = tip;
  this.url = url;
  this.category = category;
};

exports.NotificationTarget = function(userId, intent) {
  this.userId = userId;
  this.intent = intent;
};
