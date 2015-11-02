/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.prechat = function(req, res) {
  res.render('prechat', {
    title: 'Prechat'
  });
};

exports.friends = function(req, res){
  res.render('friends', {
    title: 'Friends'
  })
};