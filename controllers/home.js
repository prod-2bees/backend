/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.tbees = function(req, res) {
    res.render('2bees', {
          title: 'Worker Hive'
              });
};

exports.email = function(req, res) {
    res.render('email', {
          title: 'Most Important Product for You'
              });
};
