import './ExpenseItem.css';
function ExpenseItem(props){

  
    return (
        <div>
        <div className='expense-item'>
        <div>{props.date.toDateString()}</div>
        <div className='expense-item__description'>
        <h2>{props.Tit}</h2>
        </div>
        <div className='expense-item__price'>${props.amount}</div>
        
        <div className='expense-item__price'>${props.spent}</div>
        </div>
        </div>
        
    );
}

export default ExpenseItem