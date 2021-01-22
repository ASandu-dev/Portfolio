const APIURL = "https://api.github.com/users/ASandu-dev/repos";
// const main = document.getElementById("main");

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
      badge.className = "card";
      badge.id = "card";
      badge.innerHTML =
              
        
        "<a href = "+repo.html_url+" target= " +"_blank"+">"+ repo.name +"</a>"+
        "<h2>" +
        repo.language +
        "</h2>"+
        "<div class=card-cover onclick=window.location='"+repo.html_url+"'></div>"
        
        
        
        if  (repo.language == 'Java'){
        badge.style.backgroundImage="url(img/android-img.svg)";
        }else{
        badge.style.backgroundImage="url(img/web-img.svg)";
        }
      document.getElementById("main").appendChild(badge);

      

      
    });

   

    
}

new GitHubCalendar(".calendar", "ASandu-dev", { responsive: true });
