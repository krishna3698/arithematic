import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './questions.css';

function Questions() {

    const [quesNum, setQuesNum] = useState(1);
    const myRef = useRef();
    const [solutions, setSolutions] = useState([]);

    let num1 = Math.round(Math.random() * 10);
    let num2 = Math.round(Math.random() * 10);
    let operator = Math.floor(Math.random() * 4);
    let res;

    const arr = ['+', '-', '*', '/'];
    switch (operator) {
        case 0: res = num1 + num2; break;
        case 1: res = num1 - num2; break;
        case 2: res = num1 * num2; break;
        default: res = num1 / num2; break;
    }

    const score = solutions.filter((data) => {
        if (data.answer === data.submittedAnswer) {
            return true;
        }
        else {
            return false;
        }
    })

    const nextQuestion = () => {
        const totalSolutions = solutions;
        console.log(myRef.current.value);
        const question = `${num1} ${arr[operator]} ${num2}`
        const ansObj = {
            answer: res,
            submittedAnswer: myRef.current.value !== '' ? Number(myRef.current.value) : 'Not Submitted',
            question: question,
            questionNum: quesNum
        }
        totalSolutions.push(ansObj);
        setQuesNum((prevState) => {
            return prevState + 1;
        })
        setSolutions(totalSolutions)
        console.log(solutions, solutions.length);
        myRef.current.value = ''
        localStorage.setItem('result',JSON.stringify(solutions))
    }

    // const resultHandler = () =>{
    //     console.log('result',solutions)
    // }

    return (
        <div className='questions'>
            <h1 className='question-head'>Questions</h1>
            <hr className='rule'></hr>
            <h3 className='question-num'>Question {quesNum}</h3>
            <div className='displayed-question'>
                <span className='num1'>{num1} </span>
                <span className='operator'>{arr[operator]} </span>
                <span className='num2'>{num2}</span>
            </div>            
            <label htmlFor='answer' className='user-answer'>Answer 
                <input type='text' className='user-input' id='answer' placeholder="Submit your solution" ref={myRef} />
            </label>
            <br/>
            {quesNum < 20 ?
                <Button className = 'nxt-button' variant="outline-success" onClick={nextQuestion}>Next</Button> : <Link to='/result'><Button onClick = {nextQuestion} className = 'nxt-button' variant="outline-success">Result!!</Button></Link>}
            <h3 className='score'>Score is {score.length}</h3>
        </div>
    )
}

export default Questions;