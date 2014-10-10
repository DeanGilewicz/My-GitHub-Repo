$(document).ready( function (){


// USER API //

var user_api = 'https://api.github.com/users/DeanGilewicz';


// USER TEMPLATES //

var user_log_template = $('#sign_in').html();// IMAGE AND USERNAME //
var ul_template = _.template(user_log_template);

var profile_template = $('#profile').html();// PROFILE PIC, NAME, USERNAME //
var p_template = _.template(profile_template);

var contact_template = $('#contact').html();// CONTACT INFO //
var c_template = _.template(contact_template);

var follow_template = $('#follow').html();// FOLLOWERS, STARRED, FOLLOWING //
var f_template = _.template(follow_template);

var organizations_template = $('#organizations').html();// ORGANIZATIONS AND IMAGES //
var o_template = _.template(organizations_template);


$.getJSON(user_api).done( function (user_data) {

  $('.log').append(ul_template(user_data));
  $('.profile').append(p_template(user_data));
  $('.member').append(c_template(user_data));
  $('.social').append(f_template(user_data));
  $('.orgs').append(o_template(user_data));

});


var repo_api = 'https://api.github.com/users/DeanGilewicz/repos';

var starred_api = 'https://api.github.com/users/twhitacre/starred';

var org_api = 'https://api.github.com/users/twhitacre/orgs';








});
