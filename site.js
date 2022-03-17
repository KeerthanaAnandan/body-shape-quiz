let questions = [
  {
    id: 1,
    question: "You tend to gain weight in which part of your body",

    options: ["Hips and thighs", "upper body", "evenly throughout body"],
  },
  {
    id: 2,
    question:
      "Your upper body (shoulders and chest) is _________ than your lower body? ",

    options: ["Wider", "narrower, ", "about the same"],
  },
  {
    id: 3,
    question: "You will wear my swimsuit to? ",

    options: [
      "lounge on the beach",
      "swim laps, go glam for a girls weekend",
      "on the dancefloor with skirt/pants",
    ],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 3;

let firstPoints = 0;
let secondPoints = 0;
let thirdPoints = 0;
let fourthPoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "mailchimpform.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  // for (let i = 0; i < questions.length; i++) {

  if (user_answer == questions[0].options[0]) {
    secondPoints += 1;
    fourthPoints += 1;
  }
  if (user_answer == questions[0].options[1]) {
    firstPoints += 1;
  }
  if (user_answer == questions[0].options[2]) {
    thirdPoints += 1;
  }

  if (user_answer == questions[1].options[0]) {
    firstPoints += 1;
    fourthPoints += 1;
  }
  if (user_answer == questions[1].options[1]) {
    secondPoints += 1;
  }
  if (user_answer == questions[1].options[2]) {
    thirdPoints += 1;
  }

  // }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[0]) {

  //     firstPoints += 1;
  //   }

  // }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[1]) {

  //     secondPoints += 1;
  //   }
  // }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[2]) {
  //     thirdPoints += 1;
  //   }
  // }
  // for (let i = 0; i < questions.length; i++) {
  //   if (user_answer == questions[i].options[3]) {
  //     //console.log("hana")
  //     fourthPoints += 1;
  //   }
  // }


  if(
    firstPoints >  secondPoints &&
    firstPoints > thirdPoints &&
    firstPoints > fourthPoints
    ) {
      sessionStorage.setItem("user_type", "Inverted Triangle")
     
     
     
  }
  // secondPoints
else if (
  secondPoints >  firstPoints &&
  secondPoints > thirdPoints  &&
  secondPoints > fourthPoints
 
) {
  sessionStorage.setItem("user_type", "Triangle")
}
//thirdPoints
else if (
  thirdPoints >  secondPoints &&
  thirdPoints >  firstPoints && 
  thirdPoints > fourthPoints
 
) {
  sessionStorage.setItem("user_type", "Rectangle")

}
//fourthPoints
else 
if (
   fourthPoints >  secondPoints &&
   fourthPoints > thirdPoints &&
   fourthPoints > firstPoints 
  
) {
  sessionStorage.setItem("user_type", "Hourglass")
}
else{
  sessionStorage.setItem("user_type", "Hourglass")
}


 let user_result = user_answer
 sessionStorage.setItem("user_result" , user_result)
  // sessionStorage.setItem("first", firstPoints);
  // sessionStorage.setItem("second", secondPoints);
  // sessionStorage.setItem("third", thirdPoints);
  // sessionStorage.setItem("fourth", fourthPoints);

  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${
    (question_count / Max_Questions) * 100 + 50
  }%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = ` ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third] = questions[count].options;
  ///////no of questions

  question.innerHTML = `
  <p class="iamquestion"> ${questions[count].question}</p>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
 
 
</ul> 
  `;

  /* question.innerHTML = questions[question_count].options.map((single) => {
    (
    `<li><span class="option">${single}</span></li>`
    )
  }) */

  //   if(question_count == 11 ){
  //     let [first, second , third , fourth , fifth] = questions[count].options;
  //     question.innerHTML = `
  //   <p class="iamquestion"> ${questions[count].question}</p>
  //    <ul class="option_group">
  //   <li><span class="option">${first}</span></li>
  //   <li ><span class="option">${second}</span></li>
  //   <li ><span class="option">${third}</span></li>
  //   <li ><span class="option">${fourth}</span></li>
  //   <li ><span class="option">${fifth}</span></li>

  // </ul>
  //   `;
  //   }

  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
