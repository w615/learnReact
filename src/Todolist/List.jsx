import React from "react";
import PropTypes from "prop-types"; //类型验证
export default function List(props) {
  // console.log(props);
  return (
    <>
      <div>待办事项</div>
      <ul>
        {props.list.map((item) => (
          <li key={item.id}>{item.taskName}</li>
        ))}
      </ul>
    </>
  );
}
List.propTypes = {
  list: PropTypes.array,
};
