var AjouterCourseVue = (function(){
	var pageAjouterCourse = document.getElementById("page-ajouter-course").innerHTML;
	
	return function(){
	
		this.afficher = function(){
			document.getElementsByTagName("body")[0].innerHTML = pageAjouterCourse;
		}
	};
})();

