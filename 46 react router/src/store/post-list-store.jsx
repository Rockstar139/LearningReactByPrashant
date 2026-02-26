import { useMemo } from "react";
import { useCallback } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
  // addInitialPosts: () => {},
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
  console.log(newPostList);
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts?limit=5", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  const addPost = (post) => {
    let newId =
      // postList.reduce((max, post) => Math.max(max, post.id), -Infinity) + 1;

      dispatchPostList({
        type: "ADD_POST",
        payload: post,
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
  const deletePost = useCallback(
    (id) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          id,
        },
      });
    },
    [dispatchPostList],
  );

  const arr = [5, 2, 6, 7, 4];
  const sortedArr = useMemo(() => arr.sort(), [arr]);

  return (
    <PostList.Provider
      value={{
        postList,
        fetching,
        addPost,
        deletePost,
        //  addInitialPosts
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
