const config = require('./webpack.config.js');

config.devServer = {
  historyApiFallback: true, //serve a previous page on a 404 error
  port: 8080, // use this port for the server
  liveReload: true, // refresh the browser when changes are saved
  open: true, // open the project in the browser when the server starts
};