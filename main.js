function setup() {
    canvas = createCanvas(900, 600);
}
function preload() {

}
function draw() {
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100)+50;
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn ";
        draw_circle = "";
    }
    if (draw_rect == "set") {
        height = Math.floor(Math.random() * 100);
        width = Math.floor(Math.random() * 100);
        rect(x, y, height, width);
        document.getElementById("status").innerHTML = "Rectangle is drawn ";
        draw_rect = "";
    }
}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("status").innerHTML = "System is listening, please Speak";
    recognition.start();

}
x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "System is listening, please Speak : " + content;
    if (content == "Circle") {
        x = Math.floor(Math.random() * 875)+50;
        y = Math.floor(Math.random() * 575);
        draw_circle = "set";
        document.getElementById("status").innerHTML = "System is listening, please Speak : drawing circle";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 875)+50;
        y = Math.floor(Math.random() * 575);
        draw_rect = "set";
        document.getElementById("status").innerHTML = "System is listening, please Speak : drawing circle";
    }
}