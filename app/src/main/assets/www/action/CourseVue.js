var CourseVue = (function(course){
	var pageCourse = document.getElementById("page-course").innerHTML;
	
	return function(course){
		var courseNom;
		var courseMarque;
		var courseDescription;
	
		this.afficher = function(){
			document.getElementsByTagName("body")[0].innerHTML = CourseVue.pageCourse;

			courseNom = document.getElementById("course-nom");
			courseNom.innerHTML = course.nom;

			courseMarque = document.getElementById("course-marque");
			courseMarque.innerHTML = course.marque;

			courseDescription = document.getElementById("course-description");
			courseDescription.innerHTML = course.description;
		}
	};
})();

CourseVue.pageCourse = document.getElementById("page-course").innerHTML;

