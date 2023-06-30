exports.errorPage = (req, res) => {
  // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
  res.status(404).render('404', { docTitle: 'Error 404', path: '' });
};
