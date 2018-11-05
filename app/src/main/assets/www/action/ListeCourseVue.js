var ListeCourseVue = (function(){

	pageListeCourse = document.getElementById("page-liste-course").innerHTML;

	return function(listeCourseDonnee){
		this.afficher = function(){
		document.getElementsByTagName("body")[0].innerHTML = ListeCourseVue.pageListeCourse;
		var listeCourse = document.getElementById("liste-course");

		var li="";
		for(var numeroCourse in listeCourseDonnee){
			li += '<li><a href="#course/'+numeroCourse+'">'+listeCourseDonnee[numeroCourse].nom+"</a></li>";
		}
		listeCourse.innerHTML = li;
		}
	}

	
})();

ListeCourseVue.pageListeCourse = document.getElementById("page-liste-course").innerHTML;