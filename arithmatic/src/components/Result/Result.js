import React from 'react';
import './result.css';
import { Table } from 'react-bootstrap'
function Result(){
    const arr = JSON.parse(localStorage.getItem('result'));
    const score = arr.filter((data)=>{
        return(data.answer === data.submittedAnswer?true:false)
    })
    const tableData = arr.map((data)=>{
        return (<tr key ={data.questionNum} className={data.answer === data.submittedAnswer?'right':'wrong'}>
            <td>{data.questionNum}</td>
            <td> {data.question}</td>
            <td>{data.answer}</td>
            <td> {data.submittedAnswer}</td>
            <td>{data.answer === data.submittedAnswer?'Correct':'Not Correct'}</td>
        </tr>)
    })

    return(
        <div className='table-component m-10'>
        <h1>Result Component</h1>
        <Table className='table' striped bordered hover>
            <thead>
                <tr>
                    <th>Q. No.</th>
                    <th>Question</th>
                    <th>Solution</th>
                    <th>Submitted Solution</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
            {tableData}
            </tbody>
            
        </Table>
        <h3 className='result-score'>Score: {score.length}</h3>
        </div>
    )
}

export default Result;