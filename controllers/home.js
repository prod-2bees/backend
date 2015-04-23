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

