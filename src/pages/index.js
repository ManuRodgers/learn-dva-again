import React from "react";
import { connect } from "dva";
import styles from "./index.css";

const IndexPage = ({ history }) => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <button
        onClick={() => {
          history.push(`/user`);
        }}
      >
        go to user
      </button>
    </div>
  );
};

IndexPage.propTypes = {};

export default connect()(IndexPage);
