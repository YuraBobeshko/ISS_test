import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { listCommentQuery } from "./queries";
import { changeLikeMutation } from "./mutations";
import "./ListComment.scss";

function ListComment(props) {
  const { loading, error, data, refetch } = useQuery(listCommentQuery);
  const [changeLike] = useMutation(changeLikeMutation);
  const [refre, setRefre] = useState(false);

  useEffect(() => {
    refetch();
    const timer = setTimeout(() => {
      setRefre(!refre);
    }, 5000);
    return () => clearTimeout(timer);
  }, [refetch, refre]);

  if (error) {
    return (
      <div className={"ListComment"}>
        <h1>error name: {error.toString()}</h1>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={"ListComment"}>
        <h1>loading...</h1>
      </div>
    );
  }
  const { listComment } = data;
  return (
    <div className={"ListComment"}>
      {listComment.map(comment => (
        <div className={"ListComment__item"} key={comment.id}>
          <p>{comment.nameAuthor}: </p>
          <p>{comment.title}</p>
          <span
            className={`ListComment__like ${comment.like && "liked"}`}
            onClick={() =>
              changeLike({
                variables: { id: comment.id },
                refetchQueries: ["listComment"]
              })
            }
          ></span>
        </div>
      ))}
    </div>
  );
}

ListComment.propTypes = {
  props: PropTypes.object
};

export default ListComment;
