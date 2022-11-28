// requiring express to use for the backend
const express = require("express");
// declaring app as the required express function
const app = express();
// requiring node fetch for fetch calls at the backend
const fetch = require("node-fetch");
// requiring helmet for use in server
const helmet = require("helmet");
// requiring json for use in server
const { json } = require("express");
// requiring cors for use in server
const cors = require("cors");

// using cors middleware
app.use(cors());
// using helmet middleware
app.use(helmet());
// middleware to parse JSON in post request
app.use(express.json());

// function to get new query string for commit data from github api
function GitHubCommitUrl(res) {
  // declaring repo in a variable from its properties
  let repoName = res[0].name;
  // declaring username in a variable from its properties
  let username = res[0].owner.login;
  // returning the new string
  return `https://api.github.com/repos/${username}/${repoName}/commits`;
};

// function to get new query string for commit data from github api
function GitHubCommitUrl2(res) {
  // declaring repo in a variable from its properties
  let repoName = res[1].name;
  // declaring username in a variable from its properties
  let username = res[1].owner.login;
  // returning the new string
  return `https://api.github.com/repos/${username}/${repoName}/commits`;
};

// function to get new query string for commit data from github api
function GitLabCommitUrl3(ret) {
  // declaring the repo id number as variable from its property
  let repoId = ret[2].id;
  // returning new string
  return `https://gitlab.com/api/v4/projects/${repoId}/repository/commits`;
};

// function to get new query string for commit data from github api
function GitHubCommitUrl4(res) {
  // declaring repo in a variable from its properties
  let repoName = res[3].name;
  // declaring username in a variable from its properties
  let username = res[3].owner.login;
  // returning the new string
  return `https://api.github.com/repos/${username}/${repoName}/commits`;
};

// function to get new query string for commit data from github api
function GitHubCommitUrl5(res) {
  // declaring repo in a variable from its properties
  let repoName = res[4].name;
  // declaring username in a variable from its properties
  let username = res[4].owner.login;
  // returning the new string
  return `https://api.github.com/repos/${username}/${repoName}/commits`;
};

// function to get new query string for gitlab repos from its api
function QueryStringGitlab(res) {
  // declaring the user id number as variable from its property
  let userId = res[0].id;
  // returning new string
  return `https://gitlab.com/api/v4/users/${userId}/projects`;
};

// function to get new query string for commit data from gitlab api
function GitLabCommitUrl(ret) {
  // declaring the repo id number as variable from its property
  let repoId = ret[0].id;
  // returning new string
  return `https://gitlab.com/api/v4/projects/${repoId}/repository/commits`;
};

// function to get new query string for commit data from gitlab api
function GitLabCommitUrl2(ret) {
  // declaring the repo id number as variable from its property
  let repoId = ret[1].id;
  // returning new string
  return `https://gitlab.com/api/v4/projects/${repoId}/repository/commits`;
};

// function to get new query string for commit data from gitlab api
function GitLabCommitUrl3(ret) {
  // declaring the repo id number as variable from its property
  let repoId = ret[2].id;
  // returning new string
  return `https://gitlab.com/api/v4/projects/${repoId}/repository/commits`;
};

// function to get new query string for commit data from gitlab api
function GitLabCommitUrl4(ret) {
  // declaring the repo id number as variable from its property
  let repoId = ret[3].id;
  // returning new string
  return `https://gitlab.com/api/v4/projects/${repoId}/repository/commits`;
};

// function to get new query string for commit data from gitlab api
function GitLabCommitUrl5(ret) {
  // declaring the repo id number as variable from its property
  let repoId = ret[4].id;
  // returning new string
  return `https://gitlab.com/api/v4/projects/${repoId}/repository/commits`;
};

// function to get new query string for commit data from bitbucket api
function BitBucketCommitUrl(obj) {
  // declaring properties for new query string in variable
  let repoCommit = obj.values[0].links.commits.href;
  // returning the new declared string
  return repoCommit;
};

// function to get new query string for commit data from bitbucket api
function BitBucketCommitUrl2(obj) {
  // declaring properties for new query string in variable
  let repoCommit = obj.values[1].links.commits.href;
  // returning the new declared string
  return repoCommit;
};

// function to get new query string for commit data from bitbucket api
function BitBucketCommitUrl3(obj) {
  // declaring properties for new query string in variable
  let repoCommit = obj.values[2].links.commits.href;
  // returning the new declared string
  return repoCommit;
};

// function to get new query string for commit data from bitbucket api
function BitBucketCommitUrl4(obj) {
  // declaring properties for new query string in variable
  let repoCommit = obj.values[3].links.commits.href;
  // returning the new declared string
  return repoCommit;
};

// function to get new query string for commit data from bitbucket api
function BitBucketCommitUrl5(obj) {
  // declaring properties for new query string in variable
  let repoCommit = obj.values[4].links.commits.href;
  // returning the new declared string
  return repoCommit;
};


// post request for user route with request and response parameters 
app.post("/user", (req, resp) => {
  // declaring the username object from the request body as a variable  
    const username = req.body;
  // fetch call to github api with username string added to the query string
    fetch(`https://api.github.com/users/${username.user}`)
     // promise with response parsed into json
        .then((res) => res.json())
    //promise sending response from api     
        .then((json) => resp.send(json))
     // error handling    
    .catch((err) => console.error("error:" + err));
});

// post request for repo route with request and response parameters
app.post("/repo", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to github api with username string added to the query string
    fetch(`https://api.github.com/users/${username.user}/repos`)
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for githubCommit route with request and response parameters
app.post("/githubCommit", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to github api with username string added to the query string
    fetch(`https://api.github.com/users/${username.user}/repos`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling GitHubCommitUrl function
      .then((json) => GitHubCommitUrl(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
      
    
      
});

// post request for githubCommit2 route with request and response parameters
app.post("/githubCommit2", (req, resp) => {
  // declaring the username object from the request body as a variable
    const username = req.body;
// fetch call to github api with username string added to the query string
    fetch(`https://api.github.com/users/${username.user}/repos`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling GitHubCommitUrl2 function
      .then((json) => GitHubCommitUrl2(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for githubCommit3 route with request and response parameters
app.post("/githubCommit3", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to github api with username string added to the query string
    fetch(`https://api.github.com/users/${username.user}/repos`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling GitHubCommitUrl3 function
      .then((json) => GitHubCommitUrl3(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for githubCommit4 route with request and response parameters
app.post("/githubCommit4", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to github api with username string added to the query string
    fetch(`https://api.github.com/users/${username.user}/repos`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling GitHubCommitUrl4 function
      .then((json) => GitHubCommitUrl4(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for githubCommit5 route with request and response parameters
app.post("/githubCommit5", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to github api with username string added to the query string
    fetch(`https://api.github.com/users/${username.user}/repos`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling GitHubCommitUrl5 function
      .then((json) => GitHubCommitUrl5(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for gitlabUser route with request and response parameters
app.post("/gitlabUser", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to gitlab api with username string added to the query string
    fetch(`https://gitlab.com/api/v4/users?username=${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for gitlabRepos route with request and response parameters
app.post("/gitlabRepos", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to gitlab api with username string added to the query string
    fetch(`https://gitlab.com/api/v4/users?username=${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling QueryStringGitlab function
      .then((json) => QueryStringGitlab(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for gitlabCommit route with request and response parameters
app.post("/gitlabCommit", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to gitlab api with username string added to the query string
    fetch(`https://gitlab.com/api/v4/users?username=${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling QueryStringGitlab function
      .then((json) => QueryStringGitlab(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((temp) => temp.json())
      // promise calling GitLabCommitUrl function
      .then((ret) => GitLabCommitUrl(ret))
      // promise making a fetch call with the new returned string
      .then((ret2) => fetch(ret2))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for gitlabCommit2 route with request and response parameters
app.post("/gitlabCommit2", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to gitlab api with username string added to the query string
    fetch(`https://gitlab.com/api/v4/users?username=${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling QueryStringGitlab function
      .then((json) => QueryStringGitlab(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((temp) => temp.json())
      // promise calling GitLabCommitUrl2 function
      .then((ret) => GitLabCommitUrl2(ret))
      // promise making a fetch call with the new returned string
      .then((ret2) => fetch(ret2))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for gitlabCommit3 route with request and response parameters
app.post("/gitlabCommit3", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to gitlab api with username string added to the query string
    fetch(`https://gitlab.com/api/v4/users?username=${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling QueryStringGitlab function
      .then((json) => QueryStringGitlab(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((temp) => temp.json())
      // promise calling GitLabCommitUrl3 function
      .then((ret) => GitLabCommitUrl3(ret))
      // promise making a fetch call with the new returned string
      .then((ret2) => fetch(ret2))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for gitlabCommit4 route with request and response parameters
app.post("/gitlabCommit4", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to gitlab api with username string added to the query string
    fetch(`https://gitlab.com/api/v4/users?username=${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling QueryStringGitlab function
      .then((json) => QueryStringGitlab(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((temp) => temp.json())
      // promise calling GitLabCommitUrl4 function
      .then((ret) => GitLabCommitUrl4(ret))
      // promise making a fetch call with the new returned string
      .then((ret2) => fetch(ret2))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for gitlabCommit5 route with request and response parameters
app.post("/gitlabCommit5", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to gitlab api with username string added to the query string
    fetch(`https://gitlab.com/api/v4/users?username=${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling QueryStringGitlab function
      .then((json) => QueryStringGitlab(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((temp) => temp.json())
      // promise calling GitLabCommitUrl5 function
      .then((ret) => GitLabCommitUrl5(ret))
      // promise making a fetch call with the new returned string
      .then((ret2) => fetch(ret2))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for bitbucketApi route with request and response parameters
app.post("/bitbucketApi", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to bitbucket api with username string added to the query string
    fetch(`https://api.bitbucket.org/2.0/repositories/${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for bitbucketCommit route with request and response parameters
app.post("/bitbucketCommit", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to bitbucket api with username string added to the query string
    fetch(`https://api.bitbucket.org/2.0/repositories/${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling BitBucketCommitUrl function
      .then((json) => BitBucketCommitUrl(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for bitbucketCommit2 route with request and response parameters
app.post("/bitbucketCommit2", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to bitbucket api with username string added to the query string
    fetch(`https://api.bitbucket.org/2.0/repositories/${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling BitBucketCommitUrl2 function
      .then((json) => BitBucketCommitUrl2(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for bitbucketCommit3 route with request and response parameters
app.post("/bitbucketCommit3", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to bitbucket api with username string added to the query string
    fetch(`https://api.bitbucket.org/2.0/repositories/${username.user}`)
      // promise with response parsed into json
      .then((res) => res.json())
      // promise calling BitBucketCommitUrl3 function
      .then((json) => BitBucketCommitUrl3(json))
      // promise making a fetch call with the new returned string
      .then((string) => fetch(string))
      // promise with response parsed into json
      .then((res) => res.json())
      //promise sending response from api
      .then((json) => resp.send(json))
      // error handling
      .catch((err) => console.error("error:" + err));
});

// post request for bitbucketCommit4 route with request and response parameters
app.post("/bitbucketCommit4", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to bitbucket api with username string added to the query string
  fetch(`https://api.bitbucket.org/2.0/repositories/${username.user}`)
    // promise with response parsed into json
    .then((res) => res.json())
    // promise calling BitBucketCommitUrl4 function
    .then((json) => BitBucketCommitUrl4(json))
    // promise making a fetch call with the new returned string
    .then((string) => fetch(string))
    // promise with response parsed into json
    .then((res) => res.json())
    //promise sending response from api
    .then((json) => resp.send(json))
    // error handling
    .catch((err) => console.error("error:" + err));
});

// post request for bitbucketCommit5 route with request and response parameters
app.post("/bitbucketCommit5", (req, resp) => {
  // declaring the username object from the request body as a variable
  const username = req.body;
  // fetch call to bitbucket api with username string added to the query string
  fetch(`https://api.bitbucket.org/2.0/repositories/${username.user}`)
    // promise with response parsed into json
    .then((res) => res.json())
    // promise calling BitBucketCommitUrl5 function
    .then((json) => BitBucketCommitUrl5(json))
    // promise making a fetch call with the new returned string
    .then((string) => fetch(string))
    // promise with response parsed into json
    .then((res) => res.json())
    //promise sending response from api
    .then((json) => resp.send(json))
    // error handling
    .catch((err) => console.error("error:" + err));
});

// setting the server to listen on port 8000
app.listen(8000, function () {
    // printing message to the console
  console.log("Express listening on port 8000!");
});
