// importing React for use in the component
import React from "react";
// importing LoadingIcons for loading screen
import LoadingIcons from "react-loading-icons";

//Github component that asks for user input to search for details about the user using Github rest api
class GitHub extends React.Component {
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
      repo: [],
      commits: "",
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

    /* setting loading state for loading icon to true and making a fetch call to the backend via the user
     * route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route user
      fetch("/user", {
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
        // 'api' state set to consumed javascript string response
        .then((result) => {
          this.setState({ api: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });

    /* setting loading state for loading icon to true and making a fetch call to the backend via the repo
     * route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route repo
      fetch("/repo", {
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

    /* setting loading state for loading icon to true and making a fetch call to the backend via
     * the githubCommit route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route githubCommit
      fetch("/githubCommit", {
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
          this.setState({ commits: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });

    /* setting loading state for loading icon to true and making a fetch call to the backend via
     * the githubCommit2 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route githubCommit2
      fetch("/githubCommit2", {
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

    /* setting loading state for loading icon to true and making a fetch call to the backend via
     * the githubCommit3 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route githubCommit3
      fetch("/githubCommit3", {
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

    /* setting loading state for loading icon to true and making a fetch call to the backend via
     * the githubCommit4 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route githubCommit4
      fetch("/githubCommit4", {
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
        // 'commit4' state set to consumed javascript string
        .then((result) => {
          this.setState({ commit4: result });
          // loading set to false after receiving response for loading icon
          this.setState({ loading: false });
        });
    });

    /* setting loading state for loading icon to true and making a fetch call to the backend via
     * the githubCommit5 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route githubCommit5
      fetch("/githubCommit5", {
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
    // server response repo state stored in variable for use in html
    let repo = this.state.repo;
    // server response api state stored in variable for use in html
    let api = this.state.api;
    // server response commits state stored in variable for use in html
    let commits = this.state.commits;
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
    
    // function to check if the commits route dats is loaded that renders the response data
    function CommitDataLoaded(commits) {
      // if statement to check length of the response array
      if (commits.length > 0) {
        // returning the html to be rendered that shows the latest commit date
        return (
          <div>
            {" "}
            <h5>Last Commit Date : </h5> <p> {commits[0].commit.author.date}</p>
          </div>
        );
      }
    }

    // function to check if the response data for the user information is loaded that renders the response data
    function UserIsLoaded(api) {
      // if statement to check if data is present 
      if (api) {
        // returning html to be rendered that shows user information and image
        return (
          <div>
            <img src={api.avatar_url} />
            <h5>Name:</h5>
            <p>{api.name}</p>
            <h5>Bio:</h5>
            <p> {api.bio}</p>
            <h5>Public repos:</h5>
            <p>{api.public_repos}</p>
          </div>
        );
      }
    }

    // fuction to check if repo repsonse array is present that renders information about the user's repo
    function RepoDataLoaded(repo) {
      // if statement to check length of repo array
      if (repo.length > 0) {
        //returning html to be printed that contains user repo information  
        return (
          <div>
            <h5>Latest 3 Repos:</h5>
            <table>
              <tr>
                <th>Name</th>
                <th>Creation Date</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>{repo[0].name} </td>
                <td>{repo[1].created_at}</td>
                <td>{repo[1].description}</td>
              </tr>
              <tr>
                <td>{repo[2].name}</td>
                <td>{repo[3].created_at}</td>
                <td>{repo[3].description}</td>
              </tr>
              <tr>
                <td>{repo[4].name}</td>
                <td>{repo[5].created_at}</td>
                <td>{repo[5].description}</td>
              </tr>
            </table>
            <h5>Last 5 Commit Description</h5>
          </div>
        );
      }
    }
    
    // function to check if the returning array for commit descriptions exist 
    function CommitDescription(commits) {
      // if statement to check the length of the commits response array
      if (commits.length > 0) {
        // returning html that shows the commit description to be rendered 
        return <p>{commits[0].commit.message}</p>;
      }
    }

    // html to print the form for user input and call the respective functions appropriately
    return (
      // rendering loading icon when api is loading 
      loading ? (
        <LoadingIcons.SpinningCircles />
      ) : (
        <div key={4}>
          <br />
          <br /> <h1>Github Search</h1>
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
          {UserIsLoaded(api)}
          {CommitDataLoaded(commits)}
          {RepoDataLoaded(repo)}
          {CommitDescription(commits)}
          {CommitDescription(commit2)}
          {CommitDescription(commit3)}
          {CommitDescription(commit4)}
          {CommitDescription(commit5)}
        </div>
      )
    );
  }
}

// exporting GitHub component for rendering in index.js
export { GitHub };
