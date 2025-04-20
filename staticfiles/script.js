// Changing the style of scroll bar
// window.onscroll = function() {myFunction()};
		
// function myFunction() {
// 	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// 	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	var scrolled = (winScroll / height) * 100;
// 	document.getElementById("myBar").style.width = scrolled + "%"; 
// }

function scrollAppear() {
  var introText = document.querySelector('.side-text');
  var sideImage = document.querySelector('.sideImage');
  var introPosition = introText.getBoundingClientRect().top;
  var imagePosition = sideImage.getBoundingClientRect().top;
  
  var screenPosition = window.innerHeight / 1.2;

  if(introPosition < screenPosition) {
    introText.classList.add('side-text-appear');
  }
  if(imagePosition < screenPosition) {
    sideImage.classList.add('sideImage-appear');
  }
}

window.addEventListener('scroll', scrollAppear);

// For switching between navigation menus in mobile mode
var i = 2;
function switchTAB() {
    var x = document.getElementById("list-switch");
    if(i%2 == 0) {
        document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
        document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
    }else {
        document.getElementById("list-switch").style= "display: none;";
        document.getElementById("search-switch").style= "display: none;";
    }
    i++;
}

// For LOGIN
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var a = document.getElementById("log");
var b = document.getElementById("reg");
var w = document.getElementById("other");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  w.style.visibility = "hidden";
  b.style.color = "#fff";
  a.style.color = "#000";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
  w.style.visibility = "visible";
  a.style.color = "#fff";
  b.style.color = "#000";
}
  
// CheckBox Function
function goFurther(){
  if (document.getElementById("chkAgree").checked == true) {
    document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
  }
  else{
    document.getElementById('btnSubmit').style = 'background: lightgray;';
  }
}

function google() {
      window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
}

// QUIZ Page
function quizt(frame) {
  document.getElementById('f1').style='display: none;';
  document.getElementById('f2').style='display: none;';
  document.getElementById('f3').style='display: none;';
  document.getElementById('f4').style='display: none;';
  document.getElementById('f5').style='display: none;';
  document.getElementById('f6').style='display: none;';
  document.getElementById('f7').style='display: none;';
  document.getElementById('f8').style='display: none;';
  document.getElementById('f9').style='display: none;';
  document.getElementById('f10').style='display: none;';
  document.getElementById('f11').style='display: none;';
  if(frame == 1) document.getElementById('f1').style = 'display: block';
  else if(frame == 2) document.getElementById('f2').style = 'display: block';
  else if(frame == 3) document.getElementById('f3').style = 'display: block';
  else if(frame == 4) document.getElementById('f4').style = 'display: block';
  else if(frame == 5) document.getElementById('f5').style = 'display: block';
  else if(frame == 6) document.getElementById('f6').style = 'display: block';
  else if(frame == 7) document.getElementById('f7').style = 'display: block';
  else if(frame == 8) document.getElementById('f8').style = 'display: block';
  else if(frame == 9) document.getElementById('f9').style = 'display: block';
  else if(frame == 10) document.getElementById('f10').style = 'display: block';
  else if(frame == 11) document.getElementById('f11').style = 'display: block'; 
  else alert('error');
}

function startquiz() {
  document.getElementById('title').style = 'display: none;'; 

  document.getElementById('panel').style = 'display: inline-flex;'; 
  document.getElementById('left').style = 'display: block;'; 
  document.getElementById('right').style = 'display: block;'; 
}
function searchdisplay() {
  document.getElementById('searchpanel').style.display="block";
}

function display(n) {
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var img4 = document.getElementById('img4');
  var s1 = document.getElementById('s1');
  var s2 = document.getElementById('s2');
  var s3 = document.getElementById('s3');
  var s4 = document.getElementById('s4');

  img1.style = 'display: none;';
  img2.style = 'display: none;';
  img3.style = 'display: none;';
  img4.style = 'display: none;';
  s1.style = 'background: #DF2771; color: #FFF;';
  s2.style = 'background: #DF2771; color: #FFF;';
  s3.style = 'background: #DF2771; color: #FFF;';
  s4.style = 'background: #DF2771; color: #FFF;';

  if(n==1) {
    img1.style = 'display: block;';
    s1.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==2) {
    img2.style = 'display: block;';
    s2.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==3) {
    img3.style = 'display: block;';
    s3.style = 'background: #E5E8EF; color: #DF2771;';
  }
  if(n==4) {
    img4.style = 'display: block;';
    s4.style = 'background: #E5E8EF; color: #DF2771;';
  } 
}


// script.js

function performSearch() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase(); // Get search input and make it lowercase
  const courseItems = document.querySelectorAll(".det"); // Get all course items

  let anyMatch = false; // To track if there are any matches

  // Loop through all course items
  courseItems.forEach(course => {
      const courseName = course.getAttribute("data-course").toLowerCase(); // Get course name from data attribute

      // If course name matches search term, show it
      if (courseName.includes(searchTerm)) {
          course.style.display = "block"; // Show course
          anyMatch = true; // We found a match
      } else {
          course.style.display = "none"; // Hide course
      }
  });

  // If there's any match, show the course list
  const courseList = document.getElementById("course-list");
  if (anyMatch) {
      courseList.style.display = "block"; // Show the courses if matches are found
  } else {
      courseList.style.display = "none"; // Hide if no matches
  }
}


function handleSearch() {
  // Get the value entered in the search input (subject ID)
  const subjectId = document.getElementById('searchInput').value.toLowerCase();

  // Define a mapping of subject IDs to URLs (corresponding sections)
  const subjectMap = {
      "mathematics": "#Mathmatics",
      "dbms": "#dbms",
      "hi": "#HI",
      "c programming": "#C Programming",
      "ds using c": "#DS Using C",
      "it": "#IT",
      "se": "#SE",
      "evs": "#EVS",
      "oop using c++": "#OOP Using C++",
      "os": "#OS",
      "mathematics for computer science": "#Mathmatics For Computer Science",
      "sp": "#SP",
      "nast": "#NAST",
      "wad": "#WAD",
      "java": "#Java",
      "csa": "#CSA",
      "system programming": "#System Programming",
      "ai": "#AI",
      "dcn": "#DCN",
      "rdbms": "#Rdbms",
      "python": "#Python",
      "cc": "#CC",
      "c#": "#C#",
      "ml": "#ML",
      "m&a": "#M&A"
     
  };

  // Check if the subject ID exists in the mapping
  if (subjectMap[subjectId]) {
      // Redirect to the corresponding section (using anchor links)
      window.location.href = subjectMap[subjectId];
  } else {
      // If not found, alert the user
      alert("Sorry, no results found for subject ID: " + subjectId);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("csubmit");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop form from reloading page

      submitButton.disabled = true; // Disable button while sending
      submitButton.textContent = "Sending...";

      const formData = new FormData(form);

      fetch("http://127.0.0.1:5000/send_message", { // Flask backend route
          method: "POST",
          body: formData
      })
      .then(response => response.text())
      .then(data => {
          responseMessage.textContent = "Message sent successfully!";
          responseMessage.style.color = "green";
          form.reset();
          submitButton.disabled = false;
          submitButton.textContent = "Send Message";
      })
      .catch(error => {
          console.error("Error:", error);
          responseMessage.textContent = "Failed to send message. Please try again.";
          responseMessage.style.color = "red";
          submitButton.disabled = false;
          submitButton.textContent = "Send Message";
      });
  });
});


    

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    
    let form = this;
    let formData = new FormData(form);

    // Fetch request to submit form data
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Thank you for your feedback!');
            form.reset(); // Reset the form after successful submission
        } else {
            alert('There was an error submitting your feedback. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
