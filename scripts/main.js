$(document).ready( function (){

  $('.accordion-tabs-minimal').each(function(index) {
   $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal')
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });



















// USER API //

var user_api = 'https://api.github.com/users/DeanGilewicz';


// USER TEMPLATES //

var user_log_template = $('#sign_in').html();// IMAGE AND USERNAME //
var ul_template = _.template(user_log_template);

var profile_template = $('#profile').html();// PROFILE PIC, NAME, USERNAME //
var p_template = _.template(profile_template);

var contact_template = $('#contact').html();// CONTACT INFO //
var c_template = _.template(contact_template);

var followers_template = $('#followers').html();// FOLLOWERS
var f1_template = _.template(followers_template);

var following_template = $('#following').html();// FOLLOWING
var f2_template = _.template(following_template);


$.getJSON(user_api).done( function (user_data) {

  $('.log').append(ul_template(user_data));
  $('.profile').append(p_template(user_data));
  $('.member').append(c_template(user_data));
  $('.social').append(f1_template(user_data));
  $('.social').append(f2_template(user_data));

});


// ORG API //

var org_api = 'https://api.github.com/users/DeanGilewicz/orgs';


// ORG TEMPLATES //

var organizations_template = $('#organizations').html();// ORGANIZATIONS AND IMAGES //
var o_template = _.template(organizations_template);



$.getJSON(org_api).done( function (org_data) {

  _.each(org_data, function(x) {

    $('.orgs').append(o_template(x));

  });

  // org_data.forEach( function(x) {
  //
  //   $('.orgs').append(o_template(x));
  //
  // });

});


// STARRED API //

var starred_api = 'https://api.github.com/users/DeanGilewicz/starred';


// STARRED TEMPLATES //

// var starred_template = $('#starred').html();// FOLLOWERS, STARRED, FOLLOWING //
// var s_template = _.template(starred_template);


// $.getJSON(starred_api).done( function (starred_data) {
//
//     stars_num = starred_data.length;
//     $('.social').append(total);
//
//   });

// $.getJSON(starred_api).done( function (starred_data) {
//
//   var total = starred_data.reduce(function(a, b) {
//     return a.value + b.value;
//   });
//
//   $('.social').append(s_template(total));
//
// });






var repo_api = 'https://api.github.com/users/DeanGilewicz/repos';












});
