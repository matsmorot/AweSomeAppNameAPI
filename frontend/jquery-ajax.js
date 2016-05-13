$('#randomize').click(function() {
  
  var numberOfSyllables = $('#syllables').val()
  var syllablesObject = {syllables: numberOfSyllables};
  
  $.getJSON("http://localhost:1337/name", syllablesObject, function(data) {
    
      $("#appname").text(data.name)
      console.log(data)
      console.log(syllablesObject)
  })
});
