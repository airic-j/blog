$('document').ready(function () {
	console.log('lab.js loads');

	// hide projects at initial page load
	$('#projects').hide();

	var projects = [];

	function Project(x) {	
		this.title = x.title;
		this.date = x.date;
		this.description = x.description;
		this.link = x.link;
	}

	Project.prototype.toHtml = function() {
		var $newProject = $('.prototype').clone();
		
		$newProject.find('#title').html(this.title)
		$newProject.find('#date').html(this.date)
		$newProject.find('#link').html(this.link)
		$newProject.find('#description').html(this.description)

	  $newProject.removeClass('prototype');
		return $newProject;
	}

	projectData.forEach(function(projectData){
		projects.push(new Project(projectData));
		console.log('push project to array');
	});

	projects.forEach(function(project){
		$('#projects').append(project.toHtml());
		console.log('append project');
	});


	// change visible tab by click on nav links

	$('nav a').on('click', function() {
		$tabClicked = $(this).data('tab');
		console.log('clicked ' + $tabClicked);
		$(this).addClass('selected').siblings().removeClass('selected');
		$('section').hide();
		$('#' + $tabClicked).show();
	})

});