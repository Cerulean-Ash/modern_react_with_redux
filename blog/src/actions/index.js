import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // now once we have updated the posts in redux store we can use getState to grab those posts
  //using lodash map = map with some extra niceties.  Coupled with lodash .uniq() = similar to ruby .uniq
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  // don't need to await here as we are not waiting to use the output in the next step of the function also forEach doesn't work with await
  userIds.forEach((id) => dispatch(fetchUser(id)));

  // if you wanted to use await to then use the output in further steps in a function use the below:
  // await Promise.all(userIds.map((id) => dispatch(fetchUser(id))))
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// ********************************
// memoized version of fetch user
//*********************************

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
