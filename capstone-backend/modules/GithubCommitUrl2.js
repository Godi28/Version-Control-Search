// exporting module for use in the server file
exports.toFile = function GitHubCommitUrl2(res) {
  // declaring repo in a variable from its properties
  let repoName = res[1].name;
  // declaring username in a variable from its properties
  let username = res[1].owner.login;
  // returning the new string
  return `https://api.github.com/repos/${username}/${repoName}/commits`;
};
