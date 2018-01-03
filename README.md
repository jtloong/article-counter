# article-counter
A command line app to take a record of the articles that you read.

## The Idea
I'm a huge fan of reading, and I voraciously read books constantly in my spare time. But I'm also a data nerd, and keep track of my reading through a Google Sheet that has the pages I've read, the genre, date completed and other metrics. However, I began to realize a lot of my internet reading (paper's, blog posts, news articles) wasn't being quantified in my yearly tracking. So I built this app!

## What is it?
Article Counter is a command line application (currently) that allows you to input the article you read and it's topic, and saves all its meta information in to a Sheets document on your Google Drive.

In its current form, from a URL it can pull title information, the time of reading, and calculates approximately how many "pages" long the article is.

### Page Calculation
I made use of a few npm libraries that pulls the text from the url, strips it of all HTML tags, and then calculates the page length from a rough approximation that in 12-point font a [a page equals 3838 characters with spaces](https://anycount.com/WordCountBlog/how-many-words-in-one-page/).

## Future
* Better documentation of how to set this up on your machine
* A setup helper function
* A browser extension to make this more accessible from just the command line
