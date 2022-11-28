// exporting module for use in the server file
exports.toFile = function BitBucketCommitUrl5(obj) {
  // declaring properties for new query string in variable
  let repoCommit = obj.values[4].links.commits.href;
  // returning the new declared string
  return repoCommit;
};
