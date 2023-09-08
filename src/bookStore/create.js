import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./store";
import Input from "react-bootstrap/Button";

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [complete, setComplete] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "cover":
        setCover(value);
        break;
      case "intro": 
        setIntro(value);
        break;
      case "completed":
        setComplete(e.target.checked);
        break;
      case "review":
        setReview(value); 
        break; 

      default:
    }
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      complete,
      review,
    };

    store.createItem(newBook);
  }

  return (
    <div>
      <div>
        <Link to="/">Home </Link>
      </div>
      <div>
        <Link to="/view">view</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />

          <div>Author</div>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />

          <div>
            <div>Cover</div>
            <input
              type="file"
              name="cover"
              accept="image/jpeg"
              onChange={handleOnChangeFile}
            />
            <div>
              {!!cover ? (
                <img src={cover} width="200" height="250" alt="preview" />
              ) : (
                " "
              )}
            </div>
          </div>

          <div>Introduction</div>
          <input
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
          <div>Complete</div>
          <input
            type="checkbox"
            name="complete"
            onChange={handleChange}
            value={complete}
          />
          <div>Review</div>
          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>
        {/* import Input from 'react-bootstrap/Button';  */}
        <Input type="submit" variant="primary" value="register book">
          register book
        </Input>
      </form>
    </div>
  );
}

export default Create;
