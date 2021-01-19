import React from "react";
import axios from "axios";

/**Class for ReusableListing component */
class ReusableListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postPage: 1,
      posts: [],
      userPage: 1,
      users: [],
    }; 
  }

  /**call action to call related functions */
  componentDidMount() {
    this.getPostData(this.state.postPage);
    this.getUserData(this.state.userPage);
  }

  /**action to get Post data from API */
  getPostData = (page) => {
    axios
      .get("https://gorest.co.in/public-api/posts?page=" + page)
      .then((result) => {
        let posts = this.state.posts;
        posts.push(...result.data.data);
        this.setState({
          postPage: page,
          posts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**action to get user data from API */
  getUserData = (page) => {
    axios
      .get("https://gorest.co.in/public-api/users?page=" + page)
      .then((result) => {
        let users = this.state.users;
        users.push(...result.data.data);
        this.setState({
          userPage: page,
          users,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**Render data into HTML */
  render() {
    return (
      <>
        <div class="py-12 bg-white">
          <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
            Our<span class="text-indigo-600"> Posts</span>
          </h3>
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
            <div class="mx-auto">
              <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">
                <PostsList data={this.state.posts} />
              </ul>
              <div class="flex flex-col items-center py-8">
                <button
                  class="button"
                  onClick={() => this.getPostData(this.state.postPage + 1)}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="py-12 bg-white">
          <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
            Our<span class="text-indigo-600"> Users</span>
          </h3>
          <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
            <div class="mx-auto">
              <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">
                <UsersList data={this.state.users} />
              </ul>
              <div class="flex flex-col items-center py-8">
                <button
                  class="button"
                  onClick={() => this.getUserData(this.state.userPage + 1)}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

/**function for user listing dynamically */
function UsersList(props) {
  let userLi =
    props.data.length > 0 &&
    props.data.map((data) => (
      <li
        class="group border p-5 py-5 hover:shadow-xl transition"
        key={data.id}
      >
        <a href="#">
          <div class="flex flex-col items-center">
            <div class="group-hover:text-white">
              <div class="text-lg leading-6">
                <span class="font-semibold text-gray-900">Name:</span>
                {data.name}
              </div>
              <div class="text-lg leading-6">
                <span class="font-semibold text-gray-900">Email:</span>
                {data.email}
              </div>
              <div class="text-lg leading-6">
                <span class="font-semibold text-gray-900">Gender:</span>
                {data.gender}
              </div>
            </div>
          </div>
        </a>
      </li>
    ));
  return userLi;
}

/**function for post listing dynamically */
function PostsList(props) {
  let postLi =
    props.data.length > 0 &&
    props.data.map((data) => (
      <li class="group border p-5 py-16 text-center hover:shadow-xl transition">
        <a href="#">
          <div class="flex flex-col items-center">
            <div class="mt-6 group-hover:text-white">
              <h4 class="text-lg leading-6 font-semibold text-gray-900">
                {data.title}
              </h4>
              <p class="mt-2 text-base leading-6 text-gray-500">{data.body}</p>
            </div>
          </div>
        </a>
      </li>
    ));
  return postLi;
}

export default ReusableListing;