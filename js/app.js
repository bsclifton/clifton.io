/* global alert */

// JavaScript files used by app
const $ = require('jquery')
window.jQuery = $
/* eslint-disable no-unused-vars */
const bootstrap = require('bootstrap')

// Styles used by app
const cssBootstrap = require('bootstrap/dist/css/bootstrap.min.css')
const cssFontAwesome = require('font-awesome/css/font-awesome.min.css')
const css = require('../css/app.css')
/* eslint-enable no-unused-vars */

window.getRecentBlogPosts = function () {
  $('#blog-entries p').hide()
  $('#blog-entries .loading-container').show()
  $.ajax({
    type: 'GET',
    accepts: 'application/json',
    dataType: 'json',
    url: 'https://blog.clifton.io/api/get_recent_posts/?count=5'
  }).done(function (data, textStatus, response) {
    var postCount = 0
    var posts
    var post
    var i
    if (data !== null || typeof data !== 'undefined') {
      postCount = data.count
      posts = data.posts
    }
    if (postCount === 0) {
      $('#blog-entries .no-entries').show()
    } else {
      $('#blog-entries p.post').remove()
      for (i = 0; i < postCount; i++) {
        post = posts[i]
        $('#blog-entries').append('<p class="post"><a href="' + post.url + '" title="' + post.title + '">' + post.title + '</a></p>')
      }
    }
  }).fail(function (response, textStatus, errorThrown) {
    $('#blog-entries .failure').show()
  }).always(function () {
    $('#blog-entries .loading-container').hide()
  })
}

window.submitEmailForm = function () {
  var name = $('#email-name').val()
  var email = $('#email-address').val()
  var url = $('#email-url').val()
  var message = $('#email-message').val()

  $('[id^=email-]').prop('disabled', true)
  $('i.loading-button').show()

  $.ajax({
    type: 'POST',
    url: 'https://clifton.io/about/email.php',
    data: { name: name, email: email, url: url, message: message }
  }).done(function (data, textStatus, response) {
    $('#email-form').hide()
    $('#email-sent').show()
  }).fail(function (response, textStatus, errorThrown) {
    alert('There was an error submitting your message. Please check the message and try again.')
  }).always(function () {
    $('[id^=email-]').prop('disabled', false)
    $('i.loading-button').hide()
  })
}

window.setupEmailForm = function () {
  $('#email-submit').prop('disabled', true)

  $('#email-message').keyup(function () {
    $('#email-submit').prop('disabled', $('#email-message').val().trim().length === 0)
  })
}
