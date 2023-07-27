import React, { useState } from "react";

const TasksContainer = ({ tasks }) => {
  const [crossed, setCrossed] = useState(false);

  function deleteTask(id) {
    // Assuming you handle the state update for tasks after deleting in a parent component
    // Add the necessary logic here for updating the tasks state
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });
  }

  function crossOut(id) {
    // Add your logic here for crossing out the task (if needed)
    setCrossed(!crossed);
  }

  return (
    <div className="flex justify-center">
      <ul className="w-full max-w-md space-y-4">
        {tasks.map((task) => (
          <li
            className={`p-4 border rounded-md ${
              crossed ? "line-through" : ""
            }`}
            key={task.id}
            onDoubleClick={() => crossOut(task.id)}
          >
            <h1 className="text-xl font-semibold style-italics">{task.title}</h1>
            <p className="text-sm text-gray-600">Priority: {task.priority}</p>
            <p
              className={`${
                task.status === "Cancelled"
                  ? "text-red-600"
                  : task.status === "Pending"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              {task.status}
            </p>
            <button
              className="px-2 py-1 mt-2 text-white bg-red-500 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onClick={() => deleteTask(task.id)}
            >
              DELETE TASK
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksContainer;


// import { useState } from "react";

// const TasksContainer = ({ tasks }) => {
	

// 	const [crossed, setCrossed] = useState(false);
// 	function deleteTask(id) {
// 		fetch(`http://localhost:3000/todos/${id}`, {
// 			method: 'DELETE',
// 		});
// 	}

// 	function crossOut(id) {
// 		console.log(id);
// 	}

// 	return (
// 		<ol>
// 			{tasks.map((task) => (
// 				<li
// 					className="list"
// 					key={task.id}
// 					onDoubleClick={() => crossOut(task.id)}
// 				>
// 					<h1>{task.title}</h1>
// 					<p>{task.priority}</p>
// 					<p
// 						className={
// 							task.status === 'Cancelled'
// 								? 'High'
// 								: task.status === 'Pending'
// 								? 'Medium'
// 								: 'Low'
// 						}
// 					>
// 						{task.status}
// 					</p>
					
// 					<button className="bg-red-500" onClick={() => deleteTask(task.id)}>
// 						DELETE TASK
// 					</button>
// 				</li>
// 			))}
// 		</ol>
// 	);
// };

// export default TasksContainer;
