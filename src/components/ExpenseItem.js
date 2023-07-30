import './ExpenseItem.css';
function ExpenseItem(){

    const current = new Date();
    const expenseTitle = 'Car Insurances';
    const expenseprice = 246.57;
    const LocationOfExpenditure = 200;
    return (
        <div>
        <div className='expense-item'>
        <div>{current.getDate()}/{current.getMonth()+1}/{current.getFullYear()}</div>
        <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        </div>
        <div className='expense-item__price'>${expenseprice}</div>
        <div className='expense-item__price'>${LocationOfExpenditure}</div>
        </div>
        </div>
        
    );
}

export default ExpenseItem