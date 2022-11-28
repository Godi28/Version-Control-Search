// exporting module for use in the server file
exports.toFile = function QueryStringGitlab(res) {
  // declaring the user id number as variable from its property
  let userId = res[0].id;
  // returning new string
  return `https://gitlab.com/api/v4/users/${userId}/projects`;
};
