import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

import { useState } from 'react';
// function ExpenseItem(props){
//   
//     return (
//         <div>
//         <div className='expense-item'>
//         <div>{props.date.toDateString()}</div>
//         <div className='expense-item__description'>
//         <h2>{props.Tit}</h2>
//         </div>
//         <div className='expense-item__price'>${props.amount}</div>
        
//         <div className='expense-item__price'>${props.spent}</div>
//         </div>
//         </div>
        
//     );
// }

 const ExpenseItem = (props)=>{
    const [Tit,setTit] = useState(props.Tit);

    const [amount,setAmount] = useState(props.amount);
    const clickHandler = () =>{
        setTit("WELCOME");
    }
    const increasement =()=>{
        setAmount( amount + 100);
    }
    return (
        <div>
        <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
        <h2>{Tit}</h2>
        </div>
        <div className='expense-item__price'><button onClick={increasement}>${amount}</button></div>
        
        <div className='expense-item__price'>${props.spent}</div>
        <button onClick ={clickHandler}>Change  Title</button>
        </div>
        </div>
        
    );
}


export default ExpenseItem