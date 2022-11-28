let expect = require("chai").expect;
let request = require("request");

// describing what test is to be run 
describe("Status and content", function () {
    // describing what is to be tested
    describe("Route", function () {
      // describing what about the test is to be tested
      it("status", function (done) {
        // requesting a resource from the route
        request("http://localhost:8000/user", function (error, response, body) {
          // the status code to be confirmed
          expect(response.statusCode).to.equal(200);
          // completing the test
          done();
        });
      });
      // describing what about the test is to be tested
        it("content", function (done) {
          // requesting a content from the route
          request(
            "http://localhost:8000/user",
              function (error, response, body) {
              // expected resource response  
                  expect(body).to.equal("respond with a resource");
              // completing the test    
              done();
            }
          );
        });
    });
});

// describing what test is to be run 
describe("Status and content", function () {
  // describing what is to be tested
    describe("Route", function () {
      // describing what about the test is to be tested
      it("status", function (done) {
        // requesting a resource from the route
        request("http://localhost:8000/repo", function (error, response, body) {
          // the status code to be confirmed
          expect(response.statusCode).to.equal(200);
          // completing the test
          done();
        });
      });
      // describing what about the test is to be tested
        it("content", function (done) {
          // requesting a content from the route
          request(
            "http://localhost:8000/repo",
              function (error, response, body) {
                // expected resource response
                expect(body).to.equal("respond with a resource");
                // completing the test
                done();
              }
          );
        });
    });
});

// describing what test is to be run 
describe("Status and content", function () {
  // describing what is to be tested
    describe("Route", function () {
      // describing what about the test is to be tested
      it("status", function (done) {
        // requesting a resource from the route
        request(
          "http://localhost:8000/githubCommit",
          function (error, response, body) {
            // the status code to be confirmed
            expect(response.statusCode).to.equal(200);
            // completing the test
            done();
          }
        );
      });
      // describing what about the test is to be tested
        it("content", function (done) {
          // requesting a content from the route
          request(
            "http://localhost:8000/githubCommit",
              function (error, response, body) {
                // expected resource response
                expect(body).to.equal("respond with a resource");
                // completing the test
                done();
              }
          );
        });
    });
});

// describing what test is to be run 
describe("Status and content", function () {
  // describing what is to be tested
    describe("Route", function () {
      // describing what about the test is to be tested
      it("status", function (done) {
        // requesting a resource from the route
        request(
          "http://localhost:8000/gitlabCommit",
          function (error, response, body) {
            // the status code to be confirmed
            expect(response.statusCode).to.equal(200);
            // completing the test
            done();
          }
        );
      });
      // describing what about the test is to be tested
        it("content", function (done) {
          // requesting a resource from the route
          request(
            "http://localhost:8000/gitlabCommit",
              function (error, response, body) {
                // expected resource response
                expect(body).to.equal("respond with a resource");
                // completing the test
                done();
              }
          );
        });
    });
});

// describing what test is to be run 
describe("Status and content", function () {
  // describing what is to be tested
    describe("Route", function () {
      // describing what about the test is to be tested
      it("status", function (done) {
        // requesting a resource from the route
        request(
          "http://localhost:8000/bitbucketCommit",
          function (error, response, body) {
            // the status code to be confirmed
            expect(response.statusCode).to.equal(200);
            // completing the test
            done();
          }
        );
      });
      // describing what about the test is to be tested
        it("content", function (done) {
          // requesting a resource from the route
          request(
            "http://localhost:8000/bitbucketCommit",
              function (error, response, body) {
                // expected resource response
                expect(body).to.equal("respond with a resource");
                // completing the test
                done();
              }
          );
        });
    });
});

// describing what test is to be run 
describe("Status and content", function () {
  // describing what is to be tested
  describe("Route", function () {
    // describing what about the test is to be tested
      it("status", function (done) {
        // requesting a resource from the route
        request(
          "http://localhost:8000/gitlabUser",
            function (error, response, body) {
              // the status code to be confirmed
              expect(response.statusCode).to.equal(200);
              // completing the test
              done();
            }
        );
      });
    // describing what about the test is to be tested
      it("content", function (done) {
        // requesting a resource from the route
        request(
          "http://localhost:8000/gitlsbUser",
          function (error, response, body) {
            // expected resource response
            expect(body).to.equal("respond with a resource");
            // completing the test
            done();
          }
        );
      });
  });
});

// describing what test is to be run 
describe("Status and content", function () {
  // describing what is to be tested
  describe("Route", function () {
    // describing what about the test is to be tested
      it("status", function (done) {
        // requesting a resource from the route
        request(
          "http://localhost:8000/gitlabRepo",
            function (error, response, body) {
              // the status code to be confirmed
              expect(response.statusCode).to.equal(200);
              // completing the test
              done();
            }
        );
      });
    // describing what about the test is to be tested
      it("content", function (done) {
        
      request(
        "http://localhost:8000/gitlabRepo",
        function (error, response, body) {
          // expected resource response
          expect(body).to.equal("respond with a resource");
          // completing the test
          done();
        }
      );
    });
  });
});

// describing what test is to be run 
describe("Status and content", function () {
  // describing what is to be tested
  describe("Route", function () {
    // describing what about the test is to be tested
    it("status", function (done) {
      request(
        "http://localhost:8000/bitbucketApi",
          function (error, response, body) {
            // the status code to be confirmed
            expect(response.statusCode).to.equal(200);
            // completing the test
            done();
          }
      );
    });
    // describing what about the test is to be tested
    it("content", function (done) {
      request(
        "http://localhost:8000/bitbucketApi",
        function (error, response, body) {
          // expected resource response
          expect(body).to.equal("respond with a resource");
          // completing the test
          done();
        }
      );
    });
  });
});
