import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userId = useRef();
  const postTitle = useRef();
  const tags = useRef();
  const reactions = useRef();
  const body = useRef();

  const emptyElements = () => {
    userId.current.value = "";
    postTitle.current.value = "";
    tags.current.value = "";
    reactions.current.value = "";
    body.current.value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: postTitle.current.value,
      body: body.current.value,
      reactions: reactions.current.value,
      userId: userId.current.value,
      tags: tags.current.value.split(" "),
    };
    // emptyElements();
    addPost(newPost);
    console.log("done");
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          ref={userId}
          id="userId"
          type="text"
          className="form-control"
          placeholder="Share your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          id="title"
          ref={postTitle}
          type="text"
          className="form-control"
          placeholder="Share with your friends"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          id="tags"
          ref={tags}
          type="text"
          className="form-control"
          placeholder="Hashtag"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No of Reactions
        </label>
        <input
          id="reactions"
          ref={reactions}
          type="text"
          className="form-control"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Description
        </label>
        <textarea
          ref={body}
          type="text"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Tell us more about it."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
