// exporting module for use in the server file
exports.toFile = function GitHubCommitUrl(res) {
  // declaring repo in a variable from its properties
  let repoName = res[0].name;
  // declaring username in a variable from its properties
  let username = res[0].owner.login;
  // returning the new string
  return `https://api.github.com/repos/${username}/${repoName}/commits`;
};
