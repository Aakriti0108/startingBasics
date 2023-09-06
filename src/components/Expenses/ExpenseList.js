import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props =>{
   

    if(props.items.length === 0){
       return <h2 className='expenses-list__fallback'>Found no expense...</h2>
    }
    else if(props.items.length === 1){
       return (
        <div>
       <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>
       <ul className='expenses-list'>
       {props.items.map((expense)=>(
               <ExpenseItem
               key = {expense.id}
               Title={expense.Title} 
               Amount={expense.Amount} 
               date={expense.date} />
       ))} 
       </ul>
       </div>
       );
    }else{
        return (
            <ul className='expenses-list'>
        {props.items.map((expense)=>(
                <ExpenseItem
                key = {expense.id}
                Title={expense.Title} 
                Amount={expense.Amount} 
                date={expense.date} />
        )) } 
        </ul>
        );
    }

   
}

export default ExpensesList;