import Posts from "./Posts";
import styles from "./PostList.module.css";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList,fetching } = useContext(PostListData);
  
  
  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <div className={styles.container}>
        {!fetching &&
          postList.map((post) => <Posts key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default PostList;
