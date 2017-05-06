function callSearch() {
  var ajax = new XMLHttpRequest();
  var searchText = document.getElementById("ajax-example").value;
  ajax.open("GET", "http://localhost:3000/search?query="+searchText, true);
  ajax.onload = function() {
  	if(searchText !== '') {
      var questions = JSON.parse(ajax.responseText).map(function(i) { return i.questionEn; });
      var answers = JSON.parse(ajax.responseText).map(function(i) { return i.answerEn; });
      var section = document.getElementById('questions');
      section.innerHTML = '';
      for(i=0; i < questions.length; i++) {
        section.innerHTML = section.innerHTML +
        '<h2>' + questions[i] + '</h2><br>' +
        '<p>' + answers[i] + '</p>';
      }
    }
  };
  ajax.send();
}
