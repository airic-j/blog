$('document').ready(function () {
  console.log('lab.js loads');

	// hide projects at initial page load
  $('section').not('#about').hide();

  var projects = [];

  function Project(x) {
    this.title = x.title;
    this.date = x.date;
    this.description = x.description;
    this.link = x.link;
    this.image = x.image;
  }

  Project.prototype.toHtml = function() {
    var $newProject = $('.prototype').clone();
    $newProject.find('#title').html(this.title);
    $newProject.find('#date').html(this.date);
    $newProject.find('#link a.attr("href")').html(this.link);
    $newProject.find('#link a').html(this.link);
    $newProject.find('#description').html(this.description);
    // TODO get this working
    $newProject.find('#projectImage.attr("src")').html(this.image);

    $newProject.removeClass('prototype');
    return $newProject;
  };

  projectData.forEach(function(projectData){
    projects.push(new Project(projectData));
    console.log(projectData);
    console.log('push project to array');
  });

  projects.forEach(function(project){
    $('#projects').append(project.toHtml());
    console.log('append project');
  });

	//sticky nav

  var topOfNav = $('.nav').offset().top;
  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > topOfNav) {
      $('nav').addClass('stickyNav').removeClass('nav');
      console.log('start sticky');
    } else {
      $('nav').removeClass('stickyNav').addClass('nav');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });


	// change visible tab by click on nav links

  $('nav a').on('click', function() {
    $tabClicked = $(this).data('tab');
    console.log('clicked ' + $tabClicked);
    $(this).addClass('selected').siblings().removeClass('selected');
    $('section').hide();
    $('#' + $tabClicked).show();
  });

});
