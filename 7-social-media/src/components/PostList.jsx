import Posts from "./Posts";
import styles from "./PostList.module.css";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick}></WelcomeMessage>
      )}
      <div className={styles.container}>
        {postList.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
