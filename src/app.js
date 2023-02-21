/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excuseParagraph = document.getElementById("excuse");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomNumWho = Math.floor(Math.random() * who.length);
  let randomNumAction = Math.floor(Math.random() * action.length);
  let randomNumWhat = Math.floor(Math.random() * what.length);
  let randomNumWhen = Math.floor(Math.random() * when.length);

  excuseParagraph.innerText =
    who[randomNumWho] +
    " " +
    action[randomNumAction] +
    " " +
    what[randomNumWhat] +
    " " +
    when[randomNumWhen];
};
