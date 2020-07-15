import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const Tasks = ({ tasks, deleteTask, handleToggle }) => {

	return (
		<div>
			{tasks.map(({ id, title, status }) => {
				return (
					<TodoItem
						key={id}
						id={id}
						task={title}
						status={status}
						deleteTask={deleteTask}
						handleToggle={handleToggle}
					/>
				)
			})}
		</div>
	)
}

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired,
	deleteTask: PropTypes.func.isRequired,
	handleToggle: PropTypes.func.isRequired
}

export default Tasks
