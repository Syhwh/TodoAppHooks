import React, { useState, useEffect, useReducer } from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

import { Form } from './components/Form';
import Tasks from './components/Tasks';
import { toDoReducer } from './helpers/todoReducer'
import './App.css';

const init = () => {
  return JSON.parse(localStorage.getItem('tasks')) || []
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const [state, dispatch] = useReducer(toDoReducer, [], init)
  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state))
  }, [state])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: inputValue,
      status: false
    }
    console.log(newTask)
    const action = {
      type: 'add',
      payload: newTask
    }
    dispatch(action)
    setInputValue('')
  }

  const deleteTask = (id) => {
    const action = {
      type: 'delete',
      payload: id
    }
    dispatch(action)
  }

  const handleToggle = (id) => {
    const action = {
      type: 'status',
      payload: id
    }
    dispatch(action)
  }


  return (<>
    <Container>
      <Row>
        <Col>
          <h1>
            Todo App ({state.length})
           </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tasks tasks={state} deleteTask={deleteTask} handleToggle={handleToggle} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} inputValue={inputValue} handleInputChange={handleInputChange} />
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default App;
