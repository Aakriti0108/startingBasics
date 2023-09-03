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
    const [Title,settitle] = useState(props.Title);

    const [Amount,setAmount] = useState(props.Amount);
    // const clickHandler = () =>{
    //     settitle(title);
    // }
    // const increasement =()=>{
    //     setAmount( amount + 100);
    // }
    return (
        <div>
        <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
        <h2>{props.Title}</h2>
        </div>
        <div className='expense-item__price'><button >${props.Amount}</button></div>
        
       
        </div>
        </div>
        
    );
}


export default ExpenseItem