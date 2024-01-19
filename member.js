function skillsMember() {
	var skills = document.getElementsByClassName('skill');
	var i;
	for (i = 0; i < skills.length; i++) {
		skills[i].style.display = 'none';
	}
	for (i = 0; i < skills.length; i++) {
		skills[i].style.display = 'block';
	}
}