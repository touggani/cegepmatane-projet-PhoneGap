var CourseDAO = function(){
	/*this.listeCourse = [ {"id" : 1, "nom" : "Pebble", "marque" : "Pebble", "description" : "Montre intelligente"},
						{"id" : 1, "nom" : "voiture", "marque" : "Tesla", "description" : "Voiture electrique"}
						];*/

	this.listeCourse = [new Course("Sac a dos", "EastPack", "Pour la rentre scolaire", 1),
						new Course("Lunette", "Marc Jacobs", "Nouvelle vue", 2),
						new Course("Trousse", "ABC", "Pour ranger les stylos", 3)];
	

	this.lister = function(){
		return this.listeCourse;
	}
}	