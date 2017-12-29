var GoogleSpreadsheet = require('google-spreadsheet');
var read = require('node-readability');
var striptags = require('striptags');
var async = require('async');

// spreadsheet key is the long id in the sheets URL
var doc = new GoogleSpreadsheet('1hIqneFigk6TjUmP8PaULslxClrZXCX_YpHWss26fPik');
var sheet;

async.series([
  function setAuth(step) {
    // see notes below for authentication instructions!
    var creds = require('./article-counter-7a5d0a49b37c.json');

    doc.useServiceAccountAuth(creds, step);
  },
  function getInfoAndWorksheets(step) {
    doc.getInfo(function(err, info) {
      console.log('Loaded doc: '+info.title+' by '+info.author.email);
      sheet = info.worksheets[0];
      console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
      step();
    });
  },
  function workingWithRows(step) {
    // google provides some query options
    var url = 'https://www.vanityfair.com/news/2017/07/new-york-times-washington-post-donald-trump';
    var get_stats = read(url, function(err, article, meta) {
      var text = striptags(article.content);
      var count = text.length;

      //The average page has 3838 characters with spaces according to https://anycount.com/WordCountBlog/how-many-words-in-one-page/
      pages = Math.ceil(count / 3838);

      data = {
        Pages:pages,
        Title:article.title,
        URL: url
      };
      sheet.addRow(data, function(err, _row) {
        step();
      });
    });
  }
], function(err){
    if( err ) {
      console.log('Error: '+err);
    }
});
