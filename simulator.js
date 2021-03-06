// Returns characters typed per minute in milliseconds
function chpmToMilliseconds(chpm) {
  return (Math.random() * (1000 / (chpm / 60)));
}

// Returns words typed per minute in milliseconds
function wpmToMilliseconds(string, wpm) {
  return ((string.split(' ').length / (wpm / 60)) * 1000);
}

// Types out any phrase to any html element at rate of x chpm
function type(string, element, chpm = 100) {
  (function likeAHuman(i) {
    if (string.length <= i++) { return element.innerHTML = string; }

    var milliseconds = chpmToMilliseconds(chpm);
    var currentString = string.substring(0, i);

    element.innerHTML = currentString;

    setTimeout(function() { likeAHuman(i); }, milliseconds)

    console.log(milliseconds);
    console.log(currentString);
  })(0)
}

// Pause, type, print
function convo(string, element, wpm, options, callback) {
  var rate = options.rate || 1
  var pause = 1000;
  var milliseconds = wpmToMilliseconds(string, wpm) / rate;

  setTimeout(function() { element.innerHTML = 'Typing...'; }, pause);

  setTimeout(function() {
    element.innerHTML = string;
    callback && callback();
  }, milliseconds + pause);
}

type('I am running to the store. Need anything?', document.getElementById('mike'), 140)
type('Having a great time down in Portland!', document.getElementById('elizabeth'), 325)
type('Feeling grumpy :( Going to get into bed and putting on my stories.', document.getElementById('joy'), 245)

convo("Hey. How's your trip going?", document.getElementById('dave'), 54, { rate: 2 }, function() {
  convo("Great. We just arrived in Paris!", document.getElementById('jack'), 38, { rate: 4 }, function() {
    convo("Nice! Don't forget to check out the Louvre", document.getElementById('dave'), 59, { rate: 3 }, function() {
      convo('Will do!', document.getElementById('jack'), 48, {})
    })
  });
})
