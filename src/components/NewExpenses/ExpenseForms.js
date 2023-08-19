import { useState } from 'react';
import './ExpenseForms.css';

const ExpenseForm = (props) =>{
     const [enterTitle,SetEnterTitle] = useState('');
     const [enterAmount,SetEnterAmount] = useState('');
     const [enterDate,SetEnterDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    // const TitleChangeHandler = (event) =>{
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle:event.target.value,
    //     // });
    //     // setUserInput((prevState)=>{
    //     //     return{...prevState,enteredTitle:event.target.value}
    //     // })
    //     console.log(event.target.value);
    // }

    // const AmountChangeHandler = (event) =>{
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount:event.target.value,
    //     });
    // }

    // const DateChangeHandler = (event) =>{
    //     setUserInput({
    //         ...userInput,
    //         enteredDate:event.target.value,
    //     });
    // }

    const TitleChangeHandler = (event) =>{
        SetEnterTitle(event.target.value);
    }

    const AmountChangeHandler = (event) =>{
        SetEnterAmount(event.target.value);
    }

    const DateChangeHandler = (event) =>{
        SetEnterDate(event.target.value);
    }

    const submitChangeHandler = (event)=>{
        event.preventDefault();
          const expenseData ={
            Title:enterTitle,
            Amount:enterAmount,
            date: new Date(enterDate)
          }
          props.onSaveExpenseData(expenseData);
     
          SetEnterTitle('');
          SetEnterAmount('');
          SetEnterDate('');
      
          
    }

    return <form onSubmit={submitChangeHandler}>
          <div className='new-expense__controls'>
          <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enterTitle} onChange={TitleChangeHandler}/>
          </div>
          <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min="0.01" step="0.01" value={enterAmount} onChange={AmountChangeHandler}/>
          </div>
          <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min="2019-01-01" max="2022-12-31" value={enterDate} onChange={DateChangeHandler}/>
          </div>
          </div>
          <div className='new-expense__actions'>
          <button type="submit">Add Expense</button>
          </div>
    </form>
}

export default ExpenseForm;