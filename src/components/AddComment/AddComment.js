import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";

import { addCommentMutation } from "./mutations";
import "./AddComment.scss";

function AddComment(props) {
  const [addComment] = useMutation(addCommentMutation);
  const [nameAuthor, setNameAuthor] = useState("");
  const [title, setTitle] = useState("");
  const handleSabmite = () => {
    addComment({
      variables: { title: title, nameAuthor: nameAuthor },
      refetchQueries: ["listComment"]
    });
    setNameAuthor("");
    setTitle("");
  };
  return (
    <div className={"addComment"}>
      <form className={"addComment__form"}>
        <label htmlFor={"name"}>name author</label>
        <input
          id={"name"}
          onChange={event => setNameAuthor(event.target.value)}
          value={nameAuthor}
          placeholder={"your name"}
        />
        <textarea
          onChange={event => setTitle(event.target.value)}
          value={title}
          placeholder={"your comment"}
        />
        <button
          onClick={event => {
            event.preventDefault();
            handleSabmite();
          }}
        >
          send
        </button>
      </form>
    </div>
  );
}

AddComment.propTypes = {
  props: PropTypes.object
};

export default AddComment;
