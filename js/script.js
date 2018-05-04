var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        // This is where we'll do something with the retrieved data
        var data = JSON.parse(ourRequest.responseText);
        console.log(data);
        createHTML(data);
    } else {
        console.log("We connected to the server, but it returned an error.");
    }
};

ourRequest.onerror = function() {
    console.log("Connection error");
};

ourRequest.send();



Handlebars.registerHelper("calculateAge", function(birthYear){
   var age = new Date().getFullYear() - birthYear;

   if (age > 2){
       return age + "years old";
   }else{
       return 'not old enough, less than 2 years old!';
   }


});

function createHTML(petsData){
    var rawTemplate = document.getElementById("petsTemplateBs").innerHTML;  //selecting temaplate code, just string of html text
    var compiledTemplate = Handlebars.compile(rawTemplate);  //create dynamic template from this html text with compile function
    var ourGeneratedHTML = compiledTemplate(petsData);  //input javascript object and generate html for dom

    var petsContainer = document.getElementById("pets-container");
    petsContainer.innerHTML = ourGeneratedHTML;
}