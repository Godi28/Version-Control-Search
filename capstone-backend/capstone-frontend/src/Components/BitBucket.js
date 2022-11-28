// importing React for use in the component
import React from "react";
// importing LoadingIcons for loading screen
import LoadingIcons from "react-loading-icons";

//BitBucket component that asks for user input to search for details about the user using BitBucket rest api
class BitBucket extends React.Component {
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

    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * bitbucketApi route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route bitbucketApi
      fetch("/bitbucketApi", {
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

    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * bitbucketCommit route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route bitbucketCommit
      fetch("/bitbucketCommit", {
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
     * bitbucketCommit2 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route bitbucketCommit2
      fetch("/bitbucketCommit2", {
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
     * bitbucketCommit3 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route bitbucketCommit3
      fetch("/bitbucketCommit3", {
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
     * bitbucketCommit4 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route bitbucketCommit4
      fetch("/bitbucketCommit4", {
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

    /* setting loading state for loading icon to true and making a fetch call to the backend via the
     * bitbucketCommit5 route and receiving the response
     */
    this.setState({ loading: true }, () => {
      // making fetch call to the route bitbucketCommit5
      fetch("/bitbucketCommit5", {
        // fetch method
        method: "POST",
        // header posted in request defining the posted content type
        headers: {
          "Content-Type": "application/json",
        },
        // request body sending json string of the cars object properties entered by user
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
   
    // function to check whether api and commit responses exists that renders html
    function DataIsLoaded(api) {
      // if statement to check if api and commit responses exist
      if (api && commit) {
        // returning html that shows user image and details
        return (
          <div>
            {" "}
            <img src={api.values[0].workspace.links.avatar.href} />
            <h5>Name:</h5> <p> {api.values[0].owner.display_name}</p>
            <h5>Last Commit Date:</h5>
            <p>{commit.values[0].date}</p>
            <h5>Latest 3 Repos:</h5>
            <table>
              <tr>
                <th>Name</th>
                <th>Creation Date</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>{api.values[0].name} </td>
                <td>{api.values[0].created_on}</td>
                <td>{api.values[0].description}</td>
              </tr>
              <tr>
                <td>{api.values[1].name} </td>
                <td>{api.values[1].created_on}</td>
                <td>{api.values[1].description}</td>
              </tr>
              <tr>
                <td>{api.values[2].name} </td>
                <td>{api.values[2].created_on}</td>
                <td>{api.values[2].description}</td>
              </tr>
            </table>
            <h5>Last 5 Commit Description:</h5>
          </div>
        );
      }
    }

    // function to check if the commit response exists
    function CommitDescription(commit) {
      // if statement checking if commit response exists
      if (commit) {
        // returning html with commit description 
        return (
          <div>
            <p> {commit.values[0].message}</p>
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
          <br /> <h1>Bitbucket Search</h1>
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

// exporting BitBucket component for rendering in index.js
export { BitBucket };
