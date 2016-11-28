var test = [];
var num = 0;

$.ajax({
  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://hcypenburg.nl/site/rss/rss.asp'),
  dataType : 'json',
  success  : function (data) {

//    console.log(data.responseData.feed);

    if (data.responseData.feed && data.responseData.feed.entries) {

      $.each(data.responseData.feed.entries, function (i, e) {
/*        console.log("------------------------");
        console.log("title      : " + e.title);
        console.log("link     : " + e.link);
        console.log("description: " + e.contentSnippet);
        console.log("datum: " + e.publishedDate);
        console.log("content" + e.content);
        console.log("------------------------");
*/

        test.push('<div class="alert alert-success lijstitem" role="alert">'+e.title+'</div>');
        document.getElementById("feed").innerHTML = test[num];

        num = num+1;

      });

      console.log(test);


    }
  }
});