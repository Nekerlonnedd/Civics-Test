var started = false;
var level = 0;
var points = 0;
// var lifeHeart = "❤️";
var life = 70;
var correct = 0;
var incorrect = 0;
var total = correct + incorrect;
// lifeHeart = "❤️".repeat(life);


function Question1(question, ans1, ans2, ans3, ans4, answer) {
  const arr = [];
  for (var i = 0; i < 4; i++) {
    arr.push(i);
  }

  function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  if (started === false) {

    document.getElementById("lastBtn").disabled = false;
    document.getElementById("lastBtn2").disabled = true;
    document.getElementById("lastBtn").innerHTML = "Continue";
    document.getElementById("lastBtn2").innerHTML = "Restart";
    document.querySelectorAll("h1")[1].innerHTML = ("💔 " + life);
    document.getElementById("lastBtn")?.addEventListener("click", function easy() {
      return 100;
    });

    document.getElementById("lastBtn2")?.addEventListener("click", function() {
      window.location.reload();
    });

    document.getElementById("f2").innerHTML = "Good Luck!";

  }
  let y = [ans1, ans2, ans3, ans4];
  shuffleArray(y);
  this.question = question;
  this.ans = [y[arr[0]], y[arr[1]], y[arr[2]], y[arr[3]]];
  this.answer = answer;
}

var a1 = new Question1("What is the supreme law of the land?", "the Constitution", "pursuit of happiness", "the courts", "checks and balances", "the Constitution");

var a2 = new Question1("What does the Constitution do?", "sets up the government", "reviews laws", "resolves disputes", "provide safety", "sets up the government");

var a3 = new Question1("The idea of self-government is in the first three words of the Constitution. What are these words?", "We the People", "Declaration of independence", "Together we're United", "We the Country", "We the People");

var a4 = new Question1("What is an amendment?", "a change", "the Supreme Court", "the right to bear arms", "political liberty", "a change");

var a5 = new Question1("What do we call the first ten amendments to the Constitution?", "the Bill of Rights", "freedom of speech", " the War between the States", " checks and balances", "the Bill of Rights");

var a6 = new Question1("What is one right or freedom from the First Amendment?", "speech", "liberty", "life", "pursuit of happiness", "speech");

var a7 = new Question1("How many amendments does the Constitution have?", "twenty-seven (27)", "twenty (20)", "twenty-five (25)", "twenty-nine (29)", "twenty-seven (27)");

var a8 = new Question1("What did the Declaration of Independence do?", "declared our independence (from Great Britain)", "declared our independence (from China)", "declared our independence (from Russia)", "declared our independence (from Japan)", "declared our independence (from Great Britain)");

var a9 = new Question1("What are two rights in the Declaration of Independence?", "life and liberty", "religion and assembly", "press and speech", "love and liberty", "life and liberty");

var a10 = new Question1("What is freedom of religion?", "You can practice any religion, or not practice a religion", "You can only practice one religion at a time.", "It's illegal to practice a religion", "You are free to discriminate any religion", "You can practice any religion, or not practice a religion");

var a11 = new Question1("What is the economic system in the United States?", "capitalist economy", "traditional economy", "mixed economy", "command economy", "capitalist economy");

var a12 = new Question1("What is the “rule of law”?", "Everyone must follow the law", "Government is above the law", "Some leaders can bend the law", "Everyone is above the law", "Everyone must follow the law");

var a13 = new Question1("Name one branch or part of the government.", "President", "Federal", "State", "CIA", "President");

var a14 = new Question1("What stops one branch of government from becoming too powerful?", "checks and balances", "the President", "congress", "the Constitution", "checks and balances");

var a15 = new Question1("Who is in charge of the executive branch?", "the President", "Senate and House", "the Vice President", "the Supreme Court", "the President");

var a16 = new Question1("Who makes federal laws?", "Congress", "the President", "the United States", "the Vice President", "Congress");

var a17 = new Question1("What are the two parts of the U.S. Congress?", "the Senate and House (of Representatives)", "(U.S. and national) legislature", "Congress and Senate", "Federal and state", "the Senate and House (of Representatives)");

var a18 = new Question1("How many U.S. Senators are there?", "one hundred (100)", "seventy five (75)", "fifty (50)", "twenty five (25)", "one hundred (100)");

var a19 = new Question1("We elect a U.S. Senator for how many years?", "six (6)", "five (5)", "four (4)", "two (2)", "six (6)");

// var a20 = new Question1("Who is one of your state’s U.S. Senators now?", "Answers will vary", "Answers will vary", "Answers will vary", "Answers will vary", "Answers will vary");

var a21 = new Question1("The House of Representatives has how many voting members?", "four hundred thirty-five (435)", "four hundred (400)", "four hundred fifty (450)", "three hundred (300)", "four hundred thirty-five (435)");

var a22 = new Question1("We elect a U.S. Representative for how many years?", "two (2)", "four (4)", "five (5)", "six (6)", "two (2)");

// var a23 = new Question1("Name your U.S. Representative.", "Answers will vary", "Answers will vary", "Answers will vary", "Answers will vary", "Answers will vary");

var a24 = new Question1("Who does a U.S. Senator represent?", "all people of the state", "all people of the city", "all people of the country", "all the people", "all people of the state");

var a25 = new Question1("Why do some states have more Representatives than other states?", "(because) some states have more people", "(because) some states has more courts", "(because) some states have more responibilities", "(because) some states are difficult to manage", "(because) some states have more people");

var a26 = new Question1("We elect a President for how many years?", "four (4)", "two (2)", "six (6)", "three (3)", "four (4)");

var a27 = new Question1("In what month do we vote for President?", "November", "October", "January", "September", "November");

var a28 = new Question1("What is the name of the President of the United States now?", "Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush", "Joe Biden");

var a29 = new Question1("What is the name of the Vice President of the United States now?", "Kamala Harris", "Joe Biden", "Kamala Jarvis", "Donald Trump", "Kamala Harris");

var a30 = new Question1("If the President can no longer serve, who becomes President?", "the Vice President", "the Senate of the House", "Attorney General", "Congress", "the Vice President");

var a31 = new Question1("If both the President and the Vice President can no longer serve, who becomes President?", "the Speaker of the House", "the Vice President", "the Attorney General", "Congress", "the Speaker of the House");

var a32 = new Question1("Who is the Commander in Chief of the military?", "the President", "the Vice President", "Attorney General", "Secretary of Defense", "the President");

var a33 = new Question1("Who signs bills to become laws?", "the President", "the Vice President", "Secretary of State", "Secretary of the Treasury", "the President");

var a34 = new Question1("Who vetoes bills?", "the President", "the Vice President", "Senate of the House", "Secretary of Labor", "the President");

var a35 = new Question1("What does the President’s Cabinet do?", "advises the President", "protects the President", "helps the President", "Write laws for the President", "advises the President");

var a36 = new Question1("What are two Cabinet-level positions?", "Vice President and Attorney General", "Congress and Legislative", "Senate and House", " Secretary of Labor and Senate", "Vice President and Attorney General");

var a37 = new Question1("What does the judicial branch do?", "reviews laws", "print money", "create an army", "provide protection", "reviews laws");

var a38 = new Question1("What is the highest court in the United States?", "the Supreme Court", "the County Court", "Family Court", "the Superior Court", "the Supreme Court");

// var a39 = new Question1("How many justices are on the Supreme Court?", "Answers will vary", "Answers will vary", "Answers will vary", "Answers will vary", "Answers will vary");

// var a40 = new Question1("Who is the Chief Justice of the United States now?", "Answers will vary", "Answers will vary", "Answers will vary", "Answers will vary", "Answers will vary");

var a41 = new Question1("Under our Constitution, some powers belong to the federal government. What is one power of the federal government?", "to print money", "reviews laws", "explains laws", "write to a newspaper", "to print money");

var a42 = new Question1("Under our Constitution, some powers belong to the states. What is one power of the states?", "to provide schooling and education", "to print money", "to declare war", "to make treaties", "to provide schooling and education");

// var a43 = new Question1("Who is the Governor of your state now?", "n/a", "n/a", "n/a", "n/a", "n/a");

// var a44 = new Question1("What is the capital of your state?", "Answers will vary", "Answers will vary", "Answers will vary", "Answers will vary", "Answers will vary");

var a45 = new Question1("What are the two major political parties in the United States?", "Democratic and Republican", "Federal and State", "Senate and House", "City and State", "Democratic and Republican");

var a46 = new Question1("What is the political party of the President now?", "Democratic", "Republican", "Left", "Right", "Democratic");

var a47 = new Question1("What is the name of the Speaker of the House of Representatives now?", "Nancy Pelosi", "Hillary Clinton", "Paul Pelosi", "Kamala Harris", "Nancy Pelosi");

var a48 = new Question1("There are four amendments to the Constitution about who can vote. Describe one of them.", "Any citizen can vote", "Citizens twenty one (21) and older can vote", "You have to pay to vote", "Any immigrant can vote", "Any citizen can vote");

var a49 = new Question1("What is one responsibility that is only for United States citizens?", "vote in a federal election", "vote in a state election", "vote in a city election", "serve in the military", "vote in a federal election");

var a50 = new Question1("Name one right only for United States citizens.", "vote in a federal election", "run for federal office", "serve on a jury", "vote in a state election", "vote in a federal election");

var a51 = new Question1("What are two rights of everyone living in the United States?", "Freedom of Expression and Freedom of Speech", "Life and Liberty", "Speech and Religion", "Assembly and Expression", "Freedom of Expression and Freedom of Speech");

var a52 = new Question1("What do we show loyalty to when we say the Pledge of Allegiance?", "the United States", "the Military", "the President", "the Dollar", "the United States");

var a53 = new Question1("What is one promise you make when you become a United States citizen?", "give up loyalty to other countries", "vote", "join a political party", "run for office", "give up loyalty to other countries");

var a54 = new Question1("How old do citizens have to be to vote for President?", "eighteen (18) and older", "twenty one (21) and older", "sixteen (16) and older", "any age", "eighteen (18) and older");

var a55 = new Question1("What are two ways that Americans can participate in their democracy?", "Vote and Run for office", "Serve in the U.S. military and Help with a campaign", "Give up loyalty to other countries and Help with a campaign", "Serve on a jury and Obey the law", "Vote and Run for office");

var a56 = new Question1("When is the last day you can send in federal income tax forms?", "April 15", "May 15", "October 15", "June 15", "April 15");

var a57 = new Question1("When must all men register for the Selective Service?", "at age eighteen (18)", "at age sixteen (16)", "at age twenty one (21)", "at age seventeen (17)", "at age eighteen (18)");

var a58 = new Question1("What is one reason colonists came to America?", "all 3 answers", "escape persecution", "freedom", "political liberty", "all 3 answers");

var a59 = new Question1("Who lived in America before the Europeans arrived?", "American Indians", "African Americans", "Arawak", "Cherokee", "American Indians");

var a60 = new Question1("What group of people was taken to America and sold as slaves?", "Africans", "Indians", "Europeans", "Japanese", "Africans");

var a61 = new Question1("Why did the colonists fight the British?", "because of high taxes", "slavery", "for Louisiana", "for New York", "because of high taxes");

var a62 = new Question1("Who wrote the Declaration of Independence?", "(Thomas) Jefferson", "(George) Washington", "(Alexander) Hamilton", "(James) Madison", "(Thomas) Jefferson");

var a63 = new Question1("When was the Declaration of Independence adopted?", "July 4, 1776", "July 4, 1775", "July 4, 1776", "July 4, 1774", "July 4, 1776");

var a64 = new Question1("There were 13 original states. Name three.", "New York, New Jersey and New Hampshire", "New York, Texas and Delaware", "California, Rhode Island and Massachusetts", "Virginia, Mexico and Texas", "New York, New Jersey and New Hampshire");

var a65 = new Question1("What happened at the Constitutional Convention?", "The Constitution was written", "The Constitution was burnt", "George Washing was elected President", "Nothing happened", "The Constitution was written");

var a66 = new Question1("When was the Constitution written?", "1787", "1784", "1797", "1725", "1787");

var a67 = new Question1("The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", "(John) Jay", "(George) Washington", "(Franklin) Roosevelt", " (Woodrow) Wilson", "(John) Jay");

var a68 = new Question1("What is one thing Benjamin Franklin is famous for?", "started the first free libraries", "economic opportunity", "religious freedom", "serve on a jury", "started the first free libraries");

var a69 = new Question1("Who is the “Father of Our Country”?", "(George) Washington", "Publius", "(Thomas) Jefferson", "(Franklin) Roosevelt", "(George) Washington");

var a70 = new Question1("Who was the first President?", "(George) Washington", "(Alexander) Hamilton", "(John) Jay", "(Franklin) Roosevelt", "(George) Washington");

// var a71 = new Question1("", "", "", "", "", "");
//
// var a72 = new Question1("", "", "", "", "", "");
//
// var a73 = new Question1("", "", "", "", "", "");
//
// var a74 = new Question1("", "", "", "", "", "");
//
// var a75 = new Question1("", "", "", "", "", "");
//
// var a76 = new Question1("", "", "", "", "", "");
//
// var a77 = new Question1("", "", "", "", "", "");
//
// var a78 = new Question1("", "", "", "", "", "");
//
// var a79 = new Question1("", "", "", "", "", "");
//
// var a80 = new Question1("", "", "", "", "", "");
//
// var a81 = new Question1("", "", "", "", "", "");
//
// var a82 = new Question1("", "", "", "", "", "");
//
// var a83 = new Question1("", "", "", "", "", "");
//
// var a84 = new Question1("", "", "", "", "", "");
//
// var a85 = new Question1("", "", "", "", "", "");
//
// var a86 = new Question1("", "", "", "", "", "");
//
// var a87 = new Question1("", "", "", "", "", "");
//
// var a88 = new Question1("", "", "", "", "", "");
//
// var a89 = new Question1("", "", "", "", "", "");
//
// var a90 = new Question1("", "", "", "", "", "");
//
// var a91 = new Question1("", "", "", "", "", "");
//
// var a92 = new Question1("", "", "", "", "", "");
//
// var a93 = new Question1("", "", "", "", "", "");
//
// var a94 = new Question1("", "", "", "", "", "");
//
// var a95 = new Question1("", "", "", "", "", "");
//
// var a96 = new Question1("", "", "", "", "", "");
//
// var a97 = new Question1("", "", "", "", "", "");
//
// var a98 = new Question1("", "", "", "", "", "");
//
// var a99 = new Question1("", "", "", "", "", "");
//
// var a100 = new Question1("", "", "", "", "", "");

// ,a71,a72,a73,a74,a75,a76,a77,a78,a79,a80,a81,a82,a83,a84,a85,a86,a87,a88,a89,a90,a91,a92,a93,a94,a95,a96,a97,a98,a99,a100

const hold = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a19, a21, a22, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36, a37, a38, a41, a42, a45, a46, a47, a48, a49, a50, a51, a52, a53, a54, a55, a56, a57, a58, a59, a60, a61, a62, a63, a64, a65, a66, a67, a68, a69, a70];

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}
shuffleArray(hold);


document.getElementById("lastBtn").addEventListener("click", function() {
  nextSequence(level = level + 1);

});


document.addEventListener("keydown", function() {
  function elementBuilder(id, classs) {
    const div = document.createElement("div");
    div.setAttribute("class", classs);
    div.setAttribute("id", id);
    const element2 = document.getElementById("2");
    element2.appendChild(div);
  }




  if (started === false) {
    elementBuilder("questions2", "1ques");
    elementBuilder("a0", "1answer");
    level = 0;
    document.getElementById("lastBtn2").disabled = false;
    document.getElementById("f2").innerHTML = "Good Luck!";
    document.querySelectorAll("h1")[0].innerHTML = ("Score: " + points);
    document.querySelectorAll("h1")[1].innerHTML = ("💔 " + life);

    for (var i = 0; i < 4; i++) {
      firstOne(hold[level].question, "a0", hold[level].ans[i]);
    }
    // document.getElementById("lastBtn").disabled = false;
    started = true;
    document.querySelector(".progress-bar").setAttribute("style", "width: "+level+1 +"%;" + "aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'");
    document.querySelector(".progress-bar").innerHTML = level +1 +"%";


    checkAnswer(hold[level].answer);

  }



});


// Check Answer
function checkAnswer(answer) {
  for (var b = 0; b < 4; b++) {
    document.querySelectorAll(".btn")[b]?.addEventListener("click", function() {
      const tu = this.innerHTML;
      document.getElementById("lastBtn").disabled = false;

      if (tu == answer) {
        correct = correct + 1;
        points = points + 1;
        document.querySelectorAll("h1")[0].innerHTML = ("Score: " + points);

        for (var i = 0; i < 4; i++) {
          document.querySelectorAll(".btn")[i].disabled = true;
        }

        document.getElementById("f2").innerHTML = "That's correct! Great job.";

      } else {
        incorrect = incorrect + 1;

        for (var i = 0; i < 4; i++) {
          document.querySelectorAll(".btn")[i].disabled = true;
        }
        document.getElementById("f2").innerHTML = "That's incorrect!";
        life = life - 1;
        lifeHeart = "❤️".repeat(life);
        document.querySelectorAll("h1")[1].innerHTML = (lifeHeart);
        document.getElementById("f2")?.appendChild(makeUL(answer));

      }


    });
  }

}

function removeElement(part1, part2) {
  document.getElementById(part1)?.remove();
  document.getElementById(part2)?.remove();
}



function makeUL(array) {
  // Create the list element:
  var list = document.createElement('ul');


  var item = document.createElement('li');
  for (var i = 0; i < array.length; i++) {

    item.appendChild(document.createTextNode(array[i]));
  }


  list.appendChild(item);

  return list;
}


function firstOne(title, id, question) {
  document.querySelector("#questions2").innerHTML = title;
  // label
  var labelInput = document.createElement("button");
  var node = document.createTextNode(question);
  labelInput.appendChild(node);
  labelInput.setAttribute("class", "btn btn-primary");
  labelInput.setAttribute("id", "bluebtns");
  labelInput.setAttribute("value", question);
  labelInput.setAttribute("type", "button");
  var element1 = document.getElementById(id);
  element1.appendChild(labelInput);
}

function restartButton(id) {
  var labelInput = document.createElement("button");
  var node = document.createTextNode("Restart");
  labelInput.appendChild(node);
  labelInput.setAttribute("class", "btn btn-primary");
  labelInput.setAttribute("id", "restart");
  // labelInput.setAttribute("onclick", onclick);
  labelInput.setAttribute("type", "button");
  var element1 = document.getElementById(id);
  element1?.appendChild(labelInput);
}

function nextSequence(lvl) {
  document.getElementById("lastBtn2").addEventListener("click", function() {
    location.reload();
  });
var bar = level + 1;
  document.querySelector(".progress-bar").setAttribute("style", "width: "+ bar +"%;" + "aria-valuenow='"+bar +"' aria-valuemin='0' aria-valuemax='" +hold.length+"'");
  document.querySelector(".progress-bar").innerHTML = level +1 +"%";


  document.getElementById("lastBtn").disabled = true;


  document.getElementById("f2").innerHTML = "";


  function elementBuilder(id, classs) {
    const div = document.createElement("div");
    div.setAttribute("class", classs);
    div.setAttribute("id", id);
    const element2 = document.getElementById("2");
    element2.appendChild(div);
  }

  removeElement("questions2", "a0");
  // document.querySelector("#questions2")?.remove();
  // document.querySelector("#a0")?.remove();

  elementBuilder("questions2", "1ques");
  elementBuilder("a0", "1answer");


  for (var i = 0; i < 4; i++) {
    firstOne(hold[lvl]?.question, "a0", hold[lvl]?.ans[i]);
  }

  checkAnswer(hold[lvl]?.answer);

  if (level == hold.length || life == 0) {

    var total = correct + incorrect;
    document.querySelector(".progress-bar").setAttribute("style", "width: "+ total +"%;" + "aria-valuenow='"+total +"' aria-valuemin='0' aria-valuemax='" +hold.length+"'");
    document.querySelector(".progress-bar").innerHTML = total +"%";
    started = false;
    removeElement("questions2", "a0");
    document.querySelectorAll("h1")[0].innerHTML = "Correct: " + correct + "<br>" + " Total: " + total;
    document.getElementById("f2").innerHTML = ending();

    function ending() {
      if (correct >= 60) {
        return "Excellent! Keep up the good work.";
      } else if (correct <= 30) {
        return "A bit more revision and you'll be on track.";
      } else {
        return "Your'e definitely improving!"
      }
    }
    // document.getElementById("lastBtn").disabled = false;

    document.getElementById("lastBtn2")?.addEventListener("click", function() {
      window.location.reload();
    });
  }
}
