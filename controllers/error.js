// Controller for handling 404 Not Found errors
exports.pageNotFound = (req, res, next) => {
  // Render the 404 error page with a title
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
};
