import Posts from "./Posts";
import styles from "./PostList.module.css";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
      return() =>{
        controller.abort();
      }
  }, []);

  const [fetching, setFetching] = useState(false);

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
