function defaultTask(cb) {
    // place code for your default task here
    // we wnt to run "sass css/app.scss app.css --watch'
    cb();
  }
  
  exports.default = defaultTask