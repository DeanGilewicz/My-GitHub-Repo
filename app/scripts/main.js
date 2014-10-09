$(document).ready( function (){

// API //

var repo_api = 'https://api.github.com/users/DeanGilewicz/repos';

var user_api = 'https://api.github.com/users/DeanGilewicz';

var starred_api = 'https://api.github.com/users/twhitacre/starred';

var org_api = 'https://api.github.com/users/twhitacre/orgs';

// TEMPLATES //

var profile_template = $('#profile').html();// PROFILE PIC, NAME, USERNAME //
var p_template = _.template(profile_template);

var member_since_template = $('#member_since').html();// MEMBER JOINED //
var ms_template = _.template(member_since_template);

$.getJSON(user_api).done( function (user_data) {

  $('.profile').append(p_template(user_data));
  $('.member').append(ms_template(user_data));

});












});
