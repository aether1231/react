import React from "react";
import styles from "./List.module.css";

const List = (props) => {
  return (
    <div className={styles.viewer}>
      {props.listData.map((item) => (
        <div
          className={styles["list-item"]}
          key={item.key}
        >{`${item.name} (${item.age})`}</div>
      ))}
    </div>
  );
};

export default List;
