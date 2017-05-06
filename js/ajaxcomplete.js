function callSearch() {
  var ajax = new XMLHttpRequest();
  var searchText = document.getElementById("search-field").value;
  ajax.open("GET", "http://localhost:3000/search?query="+searchText, true);
  ajax.onload = function() {
  	if(searchText !== '') {
      var questions = JSON.parse(ajax.responseText).map(function(i) { return i.questionEn; });
      var answers = JSON.parse(ajax.responseText).map(function(i) { return i.answerEn; });
      var section = document.getElementById('search-results');
      section.innerHTML = '';
      for(i=0; i < questions.length; i++) {
        section.innerHTML = section.innerHTML +
        "<div class=\"mdl-cell mdl-cell--12-col question-card mdl-card mdl-shadow--2dp\"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\"><div class=\"mdl-card__title\"><h1 class=\"mdl-card__title-text\">" + questions[i] + "</h1><hr></div><div class=\"mdl-card__supporting-text\">" + answers[i] + "</div><div class=\"mdl-card__actions mdl-card--border\">Stephen Mortellaro, 05/06/2017</div><div class=\"mdl-card__menu\"><button class=\"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect\"><i class=\"material-icons\">share</i></button></div>";
      }
    }
  };
  ajax.send();
}
