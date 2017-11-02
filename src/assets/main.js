$(function() {

$.ajax({
  url: 'https://www.codeschool.com/users/kalirogers.json',
  dataType: 'jsonp',
  success: function(response){
    //handle response
    //addCourses(response.courses.completed);
    var courses = response.courses.completed;

    addCourses(courses);
    //addTitle(courses);
  }
});

function addCourses(courses){
  for(var i=0; i<courses.length; i++){
   var idName = 'course' + i;

   $('#badges').append("<div id=" + idName + "></div>");
   $('#badges').find('div').addClass('course');
   $('#badges').find('#'+ idName).append('<h3>'+ courses[i].title + '</h3>');
   $('#badges').find('#'+ idName).append('<img src='+ courses[i].badge + ' />');
   $('#badges').find('#'+ idName).append("<a href='" + courses[i].url + "' target='_blank' class='btn btn-primary'>See Courses</a>'");
 }
}

});


/*$(courses).each(courses, function(index, value){
  $('#badges').append("<div></div>");
  console.log("added new div");
  $('#badges').find('div').addClass('course');
  console.log("added class");
  $('.course').append('<h3>'+ courses[i].title + '</h3>');
  console.log(courses[i].title);*/

  //$('.course').append('<h3></h3>');


    //$('#badges .course').append('<h3></h3>')

    //$.append("<h3></h3>");


/*  for(var i=0; i<courses.length; i++){
    //console.log(courses.length);
    var div = $("div");
    courses[i].courseDiv = $('#badges').addClass('course').append(div);
    console.log(courses[i]);
  };
}
});
//$('#badges').addClass('course')
//console.log(response.courses.completed);

/*function addCourses(courses) {
  var $badges = $('#badges');
  courses.forEach(function(course){
    $('div />', {'class': 'course'}).appendTo($badges);
  })
 }
});*/
