import React from "react";
import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TopicList(props) {
  return (
    <DropdownButton
      as={ButtonGroup}
      key={props.name}
      id={`dropdown-variants-${props.name}`}
      variant={props.name.toLowerCase()}
      title={props.name}
    >
      {props.nameArray.map((e) => {
        return <Dropdown.Item>{e}</Dropdown.Item>;
      })}
    </DropdownButton>
  );
}

export default TopicList;
