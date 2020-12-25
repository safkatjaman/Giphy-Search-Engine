/* 1. Grab the input value */
var inputButton = document.querySelector('.js-go');

inputButton.addEventListener('click', function() {
      var inputDone = document.querySelector('input').value;

      /* pushToDOM(inputDone) */
      getGifs(inputDone);
});

var inputKeyPressButton = document.querySelector('.js-userinput');

inputKeyPressButton.addEventListener('keyup', function(enterPressed) {
      var inputKeyPressButtonDone = document.querySelector('input').value;

      /* If the key ENTER button is pressed */
      if(enterPressed.which === 13){
            /* pushToDOM(inputKeyPressButtonDone) */
            getGifs(inputKeyPressButtonDone);
      }
})

/* 2. do the data stuff with the API */
function getGifs(userInput) {
      /* making a new variable for the apiURL */
      var apiURL = 'https://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=CwQNk3e3vIe32po2woVpHMeItGkgub0v';

      // AJAX Request
      var GiphyAJAXCall = new XMLHttpRequest();
      GiphyAJAXCall.open( 'GET', apiURL );
      GiphyAJAXCall.send();

      GiphyAJAXCall.addEventListener( 'load', function(event) {
            
            var data = event.target.response;
            pushToDOM(data);
      });
}

/* 3. Show me the GIF */
function pushToDOM(inputDone, inputKeyPressButtonDone) {
      var response = JSON.parse(inputDone, inputKeyPressButtonDone);

      var container = document.querySelector('.js-container');
      var imageURLs = response.data;

      imageURLs.forEach(function(image) {
           var src = image.images.fixed_height.url;
           
            container.innerHTML = container.innerHTML + '<img src=' + src + ' class="container-image">';
            /* container.innerHTML += '<img src =' + src + '>' */
            /* same as that line it's just like concat */
      });
}

