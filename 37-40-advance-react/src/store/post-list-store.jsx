import { useMemo } from "react";
import { useCallback } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [
      ...newPostList,
      {
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        userId: action.payload.userId,
        tags: action.payload.tags,
      },
    ];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => {
      if (post.id === action.payload.id) {
        return false;
      } else return true;
    });
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  const addPost = (post) => {
    let newId =
      postList.reduce((max, post) => Math.max(max, post.id), -Infinity) + 1;
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: newId,
        userId: post.userId,
        title: post.title,
        tags: post.tags,
        body: post.body,
        reactions: post.reactions,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = useCallback((id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  },[dispatchPostList]);

  const arr=[5,2,6,7,4];
  const sortedArr = useMemo(()=>arr.sort(),[arr]);

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
