// exporting module for use in the server file
exports.toFile = function BitBucketCommitUrl3(obj) {
  // declaring properties for new query string in variable
  let repoCommit = obj.values[2].links.commits.href;
  // returning the new declared string
  return repoCommit;
};
