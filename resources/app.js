var test = [];
test.push('<ul class="example" id="sortable">');

var num = 1;
var datum;

  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

$.ajax({
  url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://hcypenburg.nl/site/rss/rss.asp'),
  dataType : 'json',
  success  : function (data) {

    if (data.responseData.feed && data.responseData.feed.entries) {

      $.each(data.responseData.feed.entries, function (i, e) {
        console.log("------------------------");
        console.log("title      : " + e.title);
        console.log("link     : " + e.link);
        console.log("description: " + e.contentSnippet);
//        console.log("datum: " + e.publishedDate);
//        console.log("content" + e.content);
        console.log("------------------------");


        datum = moment(e.publishedDate.substring(0, 22), 'ddd, DD MMM HH:mm:ss').format('YYYY-MM-DD');



// console.log(datum.format('YYYY-MM-DD'));


//    console.log(e.publishedDate.format('YYYY-MM-DD hh:mm'));

//        test.push('<li class="list-group-item ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span><h4 class="list-group-item-heading">'+num+'. '+e.title+' ('+datum+')'+'</h4><p class="list-group-item-text">'+e.contentSnippet+'</p> <div class="pull-right checkbox-success"><label>Meenemen</label><input type="checkbox" value="true" checked></div></li>');

        test.push('<li class="list-group-item ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>'+num+'. '+e.title+' ('+datum+')'+'</li>');
        num++;

      });

      test.push('</ol>');

      document.getElementById("feed").innerHTML = test.join(" ");


    }
  }
});


