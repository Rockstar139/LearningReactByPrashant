import { useReducer } from "react";
import { createContext } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
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
    console.log(newPostList);
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
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST,
  );
  const addPost = (post) => {
    let newId = postList.reduce((max, post)=> Math.max(max,post.id), -Infinity) + 1;
     const newPostAction = {
      type: "ADD_POST",
      payload: {
        id: newId,
        userId: post.userId,
        title: post.title,
        tags: post.tags,
        body: post.body,
        reactions: post.reactions,
      },
    };
    console.log(post);
    dispatchPostList(newPostAction);
  };
  const deletePost = (id) => {
    const newPostAction = {
      type: "DELETE_POST",
      payload: {
        id,
      },
    };
    dispatchPostList(newPostAction);
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: "Hi friends this is rock, I am going to goa. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, ipsa!",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quia veritatis illo voluptatum, minus minima ea aspernatur officia eius fugit, iusto dolorum. Iste dolorem debitis est totam? Adipisci perspiciatis rerum nihil natus est incidunt voluptatibus ratione dolorem quis voluptatum, explicabo nemo temporibus, id quam fuga sequi eveniet similique inventore amet.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
];

export default PostListProvider;
