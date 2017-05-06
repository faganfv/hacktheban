function callSearch() {
  var ajax = new XMLHttpRequest();
  var searchText = document.getElementById("search-field").value;
  ajax.open("GET", "http://localhost:3000/search?query="+searchText, true);
  ajax.onload = function() {
  	if(searchText !== '') {
      var questions = JSON.parse(ajax.responseText).map(function(i) { return i.questionEn; });
      var answers = JSON.parse(ajax.responseText).map(function(i) { return i.answerEn; });
      var authors = JSON.parse(ajax.responseText).map(function(i) { return i.author; });
      var dates = JSON.parse(ajax.responseText).map(function(i) { return i.date; });
      var section = document.getElementById('search-results');
      section.innerHTML = '';
      for(i=0; i < questions.length; i++) {
        section.innerHTML = section.innerHTML +
        "<div class=\"question-card\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp mdl-cell--8-col qa-card\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\"><div class=\"mdl-card__title\"><h1 class=\"mdl-card__title-text\">" + questions[i] + "</h1><hr></div><div class=\"mdl-card__supporting-text\">" + answers[i] + "</div><div class=\"mdl-card__actions mdl-card--border\">" + authors[i] + ", " + dates[i] + "</div></div>";
      }
    }
  };
  ajax.send();
}
