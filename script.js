
//---Save Emails to Firebase ---//

import {
    firebaseConfig
  } from '/firebase-config.js';
  
  var firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const submitBtn = document.getElementById('submit');
  const downloadBtn = document.getElementById('download');
  
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  
  const database = firebase.database();
  const usersRef = database.ref('/e-mail_subs');
  submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const autoId = usersRef.push().key
    usersRef.child(autoId).set({
      user_email: email.value,
      user_name: name.value
  
    });
    document.querySelector(".contact-form").reset();
    showToast();
  });
  
  
  
  
  
  //-- Show Toast --//
  function showToast() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  
  
  //--- Get GitHub Profile Data ---//
  
  const APIURL = "https://api.github.com/users/ASandu-dev/repos";
  
  
  getRepos();
  
  async function getRepos() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();
  
    console.log(respData);
  
    addReposToCard(respData);
  }
  
  function addReposToCard(repos) {
    repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 10)
      .forEach((repo) => {
        var badge = document.createElement("div");
        var image = document.createElement("div");
        var img = document.createElement("img");
  
        image.className = "image";
  
        img.id = "img";
        img.className = "img";
  
        badge.className = "card";
        badge.id = "card";
        badge.innerHTML =
          "<a href = " +
          repo.html_url +
          " target= " +
          "_blank" +
          ">" +
          repo.name +
          "</a>";
  
        if (repo.language == "Java") {
          img.src = "/img/android-img.svg";
        } else {
          img.src = "/img/web-img.svg"; 
        }
  
        image.appendChild(img);
        badge.appendChild(image);
  
        document.getElementById("card-holder").appendChild(badge);
      });
  }
  
  new GitHubCalendar(".calendar", "ASandu-dev", {
    responsive: true,
    tooltips: true,
  });
  //---Nav Responsive Burger Toogle---//
  const hamburger= document.getElementById('hamburger');
  const navUL = document.getElementById('nav-ul');
  
  hamburger.addEventListener('click', () => {
      navUL.classList.toggle ("show");
  });