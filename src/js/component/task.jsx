import React, { useState } from "react";
import PropTypes from "prop-types";

const Task = props => {
	return <div className="bg-white text-dark">{props.text}</div>;
};
export default Task;

Task.propTypes = {
	text: PropTypes.string
};
