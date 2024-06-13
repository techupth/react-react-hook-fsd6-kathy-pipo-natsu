import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePostForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createPost = async () => {
    try {
      await axios.post("http://localhost:4000/posts", {
        title,
        content,
      });
      navigate("/");
    } catch (error) {
      console.error("error");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost();
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Post Form</h1>
      <div className="input-container">
        <label>
          Title
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter title here"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Content
          <textarea
            id="content"
            name="content"
            type="text"
            placeholder="Enter content here"
            onChange={(event) => {
              setContent(event.target.value);
            }}
            rows={4}
            cols={30}
            value={content}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreatePostForm;
