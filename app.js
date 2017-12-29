var read = require('node-readability');
var striptags = require('striptags');
var url = 'https://www.vanityfair.com/news/2017/07/new-york-times-washington-post-donald-trump'
var http = require('http');

var get_stats = read(url, function(err, article, meta) {
  var article = striptags(article.content);
  var count = article.length;

  //The average page ha 3838 characters with spaces according to https://anycount.com/WordCountBlog/how-many-words-in-one-page/
  pages = Math.ceil(count / 3838);

  data = {
    "Pages":pages,
    "Title":article.title,
    "URL": url
    }
  return data;
});
