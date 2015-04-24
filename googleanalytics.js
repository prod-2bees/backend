// initialize
var NA = require("nodealytics");
NA.initialize('UA-61171365-2', '2bees.com', function () {
  //MORE GOOGLE ANALYTICS CODE HERE
});

/*
//
// Track Page
//
NA.trackPage('Page Title', '/page/path', function (err, resp) {
  if (!err && resp.statusCode === 200) {
    console.log('Page has been tracked with Google Analytics');
  }
});
//
// Track Page with Referal
//
NA.trackPage('Page Title', '/page/path', {utmr:"http://www.google.com"}, function (err, resp) {
  if (!err && resp.statusCode === 200) {
    console.log('Page has been tracked with Google Analytics');
  }
});
//
// Track Event
//
NA.trackEvent('test event', 'boom', function (err, resp) {
  if (!err && resp.statusCode === 200) {
    console.log('Event has been tracked with Google Analytics');
  }
});
*/
