// exporting module for use in the server file
exports.toFile = function GitLabCommitUrl(ret) {
  // declaring the repo id number as variable from its property
  let repoId = ret[0].id;
  // returning new string
  return `https://gitlab.com/api/v4/projects/${repoId}/repository/commits`;
};