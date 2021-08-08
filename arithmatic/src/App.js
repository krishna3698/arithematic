import React from 'react';
import './App.css';
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App row">
            <div className='col-1'></div>
            <div className='left-card col-4'>
                <h2 className='card-head'>Arithematic Quiz 1</h2>
                <h4 className='card-text'>Click on Button Below to Begin!</h4>
                <Link to='/questions'><Button className='quiz-button' variant="outline-success">Begin Quiz 1</Button></Link>
            </div>
            <div className='col-1'></div>
            <div className='right-card col-4'>
                <h2 className='card-head'>Arithematic Quiz 2</h2>
                <h4 className='card-text'>Click on Button Below to Begin!</h4>
                <Link to='/questions'><Button className='quiz-button' variant="outline-success">Begin Quiz 2</Button></Link>
            </div>
            <div className='col-1'></div>
            {/* <Card className='left-card col-sm-6'>
                <Card.Body>
                    <Card.Title>Arithematic Quiz 1</Card.Title>
                    <Card.Text>
                        Click on Button Below to Begin!
                    </Card.Text>
                    <Link to='/questions'><Button variant="outline-success">Begin Quiz 1</Button></Link>
                </Card.Body>
            </Card>
            <Card className='right-card col-sm-6'>
                <Card.Body>
                    <Card.Title>Arithematic Quiz 2</Card.Title>
                    <Card.Text>
                        Click on Link Below to Begin!
                    </Card.Text>
                    <Link to='/questions'><Button variant="outline-success">Begin Quiz 2</Button></Link>
                </Card.Body>
            </Card> */}

        </div>
    );
}

export default App;
