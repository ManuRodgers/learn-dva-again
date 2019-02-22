import React from "react";
import { connect } from "dva";

const User = props => {
  const { loading, history, dispatch } = props;
  const { user, error } = props.user;
  let isFetching = loading.global;

  return (
    <div>
      <h1>{error ? error : isFetching ? `Loading...` : user && user.name}</h1>
      <button
        onClick={() => {
          history.push(`/`);
        }}
      >
        go home
      </button>
      <button
        onClick={() => {
          dispatch({ type: "user/fetch" });
        }}
      >
        get user
      </button>
    </div>
  );
};

const mapStateToProps = ({ user, loading }) => ({ user, loading });
export default connect(mapStateToProps)(User);
