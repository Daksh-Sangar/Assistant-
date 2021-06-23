const speechRecognition = window.webkitSpeechRecognition
var today = new Date();
var day = new Date();
var time = day.toLocaleTimeString();

function Startup()
{
    // Speak("Initilazing System, Up and running. Welocme, sir");
    document.getElementById("date").innerHTML = today.toLocaleDateString();
    document.getElementById("time").innerHTML = time;
}
Startup();   

var UpdateTime = setInterval(myTimer ,1000);
function myTimer() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

function StartListening()
{
    const recog = new speechRecognition;
    recog.start();
    recog.onstart = microphoneButton.classList.add('listen');

    recog.onresult = function (data) {
        microphoneButton.classList.remove('listen');
        handleResults(data)
    };
}

function handleResults(data)
{
    let text = data.results[0][0].transcript;
    text = text.toLowerCase();

    if (text.includes('open youtube'))
    {
        Speak("Opening Youtube");
        window.open('https://www.youtube.com')
    }
    else if (text.includes('open instagram'))
    {
        Speak("Opening Instagram");
        window.open('https://www.instagram.com')  
    }
    else if (text.includes('open whatsapp'))
    {
        Speak("Opening Whatsapp");
        window.open('https://web.whatsapp.com')
    }
    else if (text.includes('open twitter'))
    {
        Speak("Opening Twitter");
        window.open('https://www.twitter.com')
    }
    else if (text.includes('open facebook'))
    {
        Speak("Opening Facebook");
        window.open('https://www.facebook.com')
    }
    else if (text.includes('open google'))
    {
        Speak("Opening Google");
        window.open('https://www.google.com')
    }  
    else if (text.includes('open discord'))
    {
        Speak("Opening Discord");
        window.open('https://www.discord.com/app')
    }   
    else if (text.includes('how are you')){
        Speak("I'm good, thanks for asking");
    }
    else if (text.includes('hi jarvis') || text.includes('hey') || text.includes('hello') || text.includes('hi'))
    {
        Speak("Hello Sir");
    }    
    else if (text.includes('what'||'whats') && text.includes('date'))
    {
        Speak(today.toLocaleDateString());
    }
    else if (text.includes('what'||'whats') && text.includes('time'))
    {
        Speak(time);
    }
    else if(text.includes())
    {
        
    }
    else {
        Speak("I CANT do that");
    }
}

function Speak(TEXT)
{
    const utter = new SpeechSynthesisUtterance();
    const speechSynth = window.speechSynthesis;

    utter.text = TEXT;

    speechSynth.speak(utter);
}

