import React, { useState, useEffect } from "react";
import Task from "./task.jsx";

const ToDoList = () => {
	const [list, setList] = useState([]);
	const [listMap, setListMap] = useState("");

	useEffect(() => {
		setListMap(
			list.map((task, index) => {
				return (
					<li key={index.toString()}>
						<span>{task}</span>
						<button
							className="delete"
							onClick={() => {
								deleteTask(index);
							}}>
							✘
						</button>
					</li>
				);
			})
		);
		console.log(listMap);
	}, [list]);

	const deleteTask = indexDelete => {
		setList(list.filter((_, index) => index != indexDelete));
	};

	return (
		<div className="list text-dark p-4 col">
			<p>TO DO LIST</p>
			<input
				type="text"
				placeholder="ADD TASK HERE"
				onKeyPress={event => {
					if (event.key == "Enter") {
						setList([...list, event.target.value]);
						event.target.value = "";
					}
				}}></input>
			<section>
				<ul>{listMap}</ul>
			</section>
		</div>
	);
};

export default ToDoList;
