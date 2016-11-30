var test = [];
test.push('<ol class="example">');

var num = 1;
var datum;

$(function  () {
  $("ol.example").sortable();
});

$.ajax({
  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://hcypenburg.nl/site/rss/rss.asp'),
  dataType : 'json',
  success  : function (data) {

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

        datum = moment(e.publishedDate.substring(0, 22), 'ddd, DD MMM HH:mm:ss').format('YYYY-MM-DD');



// console.log(datum.format('YYYY-MM-DD'));


//    console.log(e.publishedDate.format('YYYY-MM-DD hh:mm'));

        test.push('<li class="list-group-item ui-state-default"><h4 class="list-group-item-heading">'+num+'. '+e.title+' ('+datum+')'+'</h4><p class="list-group-item-text">'+e.contentSnippet+' <div class="pull-right checkbox-success"><label>Meenemen</label><input type="checkbox" value="true" checked></div></p></li>');

        num++;

      });

      test.push('</ol>');

      document.getElementById("feed").innerHTML = test.join(" ");


    }
  }
});


