import React from "react";
import { DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Setting.css";

function Setting() {
  return (
    <div>
      <DropdownButton
        as={ButtonGroup}
        key={"Setting"}
        id={`dropdown-variants-${"Setting"}`}
        variant={"Setting".toLowerCase()}
        title={"Setting"}
      >
        <Dropdown.Item>My Profile</Dropdown.Item>
        <Dropdown.Item>Edit Profile</Dropdown.Item>;
        <Dropdown.Item>Logout</Dropdown.Item>;
      </DropdownButton>
    </div>
  );
}

export default Setting;
