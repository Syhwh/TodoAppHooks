import React from 'react'
import PropTypes from 'prop-types'


export const Form = ({ onSubmit, inputValue, handleInputChange }) => {

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				name='target'
				value={inputValue}
				onChange={handleInputChange} />
			<button type='submit' className='btn btn-info'>Save</button>
		</form>
	)
}

Form.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	inputValue: PropTypes.string.isRequired,
	handleInputChange: PropTypes.func.isRequired,
}