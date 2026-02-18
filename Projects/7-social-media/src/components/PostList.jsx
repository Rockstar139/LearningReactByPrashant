import Posts from "./Posts";
import styles from "./PostList.module.css";
import { useContext } from "react";
import { PostList as PostListData} from "../store/post-list-store";

const PostList = () => {
    const {postList} = useContext(PostListData);
  return (
    <div className={styles.container}>
        {postList.map((post)=>(
            <Posts key={post.id} post = {post}/>
        )
        )}
    </div>
  );
};

export default PostList;
