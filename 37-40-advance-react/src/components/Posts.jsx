import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Posts = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div id={post.id} className="card post-card" style={{ width: "30rem" }}>
      <img src="https://img.freepik.com/free-photo/illustration-cosmic-background-with-orange-neon-laser-lights_181624-19567.jpg?semt=ais_user_personalization&w=740&q=80" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hash-tag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been Liked by <span className="badge rounded-pill bg-info">{post.reactions.likes}</span> people.
        </div>
      </div>
    </div>
  );
};

export default Posts;
