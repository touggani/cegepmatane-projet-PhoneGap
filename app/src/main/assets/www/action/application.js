(function(){

	var instance = this;
	var initialiser = function(){
		this.courseDAO = new CourseDAO(); //avec le this, courseDAO devient global
		this.listeCourseDonnee = this.courseDAO.lister();
		window.addEventListener("hashchange",naviguer);
		naviguer();
	}

	var naviguer = function(){

		var hash = window.location.hash;
		
		if(!hash){
			var listeCourseVue = new ListeCourseVue(instance.listeCourseDonnee);
			listeCourseVue.afficher();
		}
		else if(hash.match(/^#ajouter-course/)){
			var ajouterCourseVue = new ajouterCourseVue;
			AjouterCourseVue.afficher();
		}
		else{
			var navigation = hash.match(/^#course\/([0-9]+)/);
			//alert(navigation);
			var idCourse = navigation[1];
			//alert(idCourse);
			var courseVue = new CourseVue(instance.listeCourseDonnee[idCourse]);
			courseVue.afficher();
		}
	}

	initialiser();

})();






