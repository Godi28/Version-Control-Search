// importing React for use in the component
import React from "react";
// importing LoadingIcons for loading screen
import LoadingIcons from "react-loading-icons";

//GitLab component that asks for user input to search for details about the user using GitLab rest api
class GitLab extends React.Component {
  /*
   * constructor setting initial states of user,api,repo,commit,commit2,commit3,commit4,commit5 and
   * loading with resprective handle functions
   * @param props properties
   */
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      api: "",
      repo: "",
      commit: "",
      commit2: "",
      commit3: "",
      commit4: "",
      commit5: "",
      loading: false,
    };
    // functions to handle user property input changes binded to the key word 'this'
    this.handleUser = this.handleUser.bind(this);
    // functions to handle the form submit
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle user function that sets the user input to the value entered in the search box
  handleUser(e) {
    this.setState({ user: e.target.value });
  }

  /* handle submit function to make fetch calls to the backend that has the user information
   * by sending the username
   */
  handleSubmit(e) {
    // preventing the page reload
    e.preventDefault();
    // storing user state as a variable
    const user = this.state.user;

    /* setting loading state for loading icon to true and making a fetch call to the backend via the gitlabUser
     * route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route githubUser
      fetch("/gitlabUser", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          user,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.json())
        // 'api' state set to consumed javascript string
        .then((result) => {
          this.setState({ api: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });

    /* setting loading state for loading icon to true and making a fetch call to the backend via the gitlabRepos
     * route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route gitlabRepos
      fetch("/gitlabRepos", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          user,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.json())
        // 'repo' state set to consumed javascript string
        .then((result) => {
          this.setState({ repo: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });

    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * gitlabCommit route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route gitlabCommit
      fetch("/gitlabCommit", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          user,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.json())
        // 'commit' state set to consumed javascript string
        .then((result) => {
          this.setState({ commit: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });

    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * gitlabCommit2 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route gitlabCommit2
      fetch("/gitlabCommit2", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          user,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.json())
        // 'commit2' state set to consumed javascript string
        .then((result) => {
          this.setState({ commit2: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });

    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * gitlabCommit3 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route gitlabCommit3
      fetch("/gitlabCommit3", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          user,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.json())
        // 'commit3' state set to consumed javascript string
        .then((result) => {
          this.setState({ commit3: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });

    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * gitlabCommit4 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route gitlabCommit4
      fetch("/gitlabCommit4", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
        },
        // request body sending json string of the user object propertiy entered by user
        body: JSON.stringify({
          user,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.json())
        // 'commit4' state set to consumed javascript string
        .then((result) => {
          this.setState({ commit4: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });

    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * gitlabCommit5 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route gitlabCommit5
      fetch("/gitlabCommit5", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
        },
        // request body sending json string of the user object property entered by user
        body: JSON.stringify({
          user,
        }),
      }) // server response from post consumed and parsed to javascript string
        .then((response) => response.json())
        // 'commit5' state set to consumed javascript string
        .then((result) => {
          this.setState({ commit5: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });
  }

  render() {
    // server response api state stored in variable for use in html
    let api = this.state.api;
    // server response repo state stored in variable for use in html
    let repo = this.state.repo;
    // server response commit state stored in variable for use in html
    let commit = this.state.commit;
    // server response commit2 state stored in variable for use in html
    let commit2 = this.state.commit2;
    // server response commit3 state stored in variable for use in html
    let commit3 = this.state.commit3;
    // server response commit4 state stored in variable for use in html
    let commit4 = this.state.commit4;
    // server response commit5 state stored in variable for use in html
    let commit5 = this.state.commit5;
    // server response loadinng state stored in variable for use in html
    let loading = this.state.loading;
  
    // function to check if user information is loaded in the response array
    function DataIsLoaded(api) {
      // if statement to check length of the array
      if (api.length > 0) {
        // returning html to show user picture and name 
        return (
          <div>
            {" "}
            <img src={api[0].avatar_url} />
            <h5>Name:</h5> <p> {api[0].name}</p>
          </div>
        );
      }
    }

    // function to check whether the response commit data is loaded
    function CommitIsLoaded(commit) {
      // if statement to check the length of the response array
      if (commit.length > 0) {
        // returning html that renders the last commit date
        return (
          <div>
            <h5>Last Commit Date:</h5>
            <p>{commit[0].created_at}</p>
          </div>
        );
      }
    }

    // function to check if the repo response array is loaded
    function RepoDataLoaded(repo) {
      // if statement chekcing the array length 
      if (repo.length > 0) {
        // html returning table with the user's repo information
        return (
          <div>
            {" "}
            <h5>Latest 3 Repos:</h5>
            <table>
              <tr>
                <th>Name</th>
                <th>Creation Date</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>{repo[0].name} </td>
                <td>{repo[0].created_at}</td>
                <td>{repo[0].description}</td>
              </tr>
              <tr>
                <td>{repo[1].name} </td>
                <td>{repo[1].created_at}</td>
                <td>{repo[1].description}</td>
              </tr>
              <tr>
                <td>{repo[2].name} </td>
                <td>{repo[2].created_at}</td>
                <td>{repo[2].description}</td>
              </tr>
            </table>
            <h5>Last 5 Commit Description</h5>
          </div>
        );
      }
    }

    // function checking if the commit response data is loaded
    function CommitDescription(commit) {
      // if statement checkingif the commit data exists
      if (commit) {
        // returning html to render the commit description message
        return (
          <div>
            <p> {commit[0].message}</p>
          </div>
        );
      }
    }

    // html to print the form for user input and call the respective functions appropriately
    return (
      // rendering loading icon when api is loading
      loading ? (
        <LoadingIcons.SpinningCircles />
      ) : (
        <div key={5}>
          <br />
          <br />
          <h1>Gitlab Search</h1>
          <br />
          <form onSubmit={this.handleSubmit}>
            <h5>Enter username:</h5>
            <input
              id="inp1"
              type="text"
              placeholder="enter username"
              value={this.state.user}
              onChange={this.handleUser}
            />
            <button id="post" type="submit">
              Submit
            </button>
          </form>
          <p>{DataIsLoaded(api)}</p>
          {CommitIsLoaded(commit)}
          {RepoDataLoaded(repo)}
          {CommitDescription(commit)}
          {CommitDescription(commit2)}
          {CommitDescription(commit3)}
          {CommitDescription(commit4)}
          {CommitDescription(commit5)}
        </div>
      )
    );
  }
}

// exporting GitLab component for rendering in index.js
export { GitLab };
