import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'


const TodoItem = ({ id, task, deleteTask, status, handleToggle }) => {

	return (<>
		<div className={status ? 'done' : 'undone'} >
			<h4 onClick={() => handleToggle(id)}>	{task} </h4>
			<Button variant="danger" onClick={() => deleteTask(id)}>Delete</Button>
		</div>
	</>
	)
}
TodoItem.propTypes = {
	id: PropTypes.number.isRequired,
	task: PropTypes.string.isRequired,
	deleteTask: PropTypes.func.isRequired,
	status: PropTypes.bool.isRequired,
	handleToggle: PropTypes.func.isRequired
}

export default TodoItem
