function registerAnalytics(trackingId) {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', trackingId, 'auto');
  ga('send', 'pageview');
}

function getRecentBlogPosts() {
  $('#blog-entries p').hide();
  $('#blog-entries .loading-container').show();
  $.ajax({
    type: 'GET',
    accepts: 'application/json',
    dataType: 'json',
    url: 'https://blog.clifton.io/api/get_recent_posts/?count=5'
  }).done(function (data, textStatus, response) {
    var postCount = 0, posts, post, i;
    if (data !== null || typeof data !== 'undefined') {
      postCount = data.count;
      posts = data.posts;
    }
    if (postCount === 0) {
      $('#blog-entries .no-entries').show();
    } else {
      $('#blog-entries p.post').remove();
      for (i=0; i< postCount; i++) {
        post = posts[i];
        $('#blog-entries').append('<p class="post"><a href="' + post.url + '" title="' + post.title +'">' + post.title + '</a></p>');
      }
    }
  }).fail(function (response, textStatus, errorThrown) {
    $('#blog-entries .failure').show();
  }).always(function (){
    $('#blog-entries .loading-container').hide();
  });
}