
import NewExpense from "./components/NewExpenses/NewExpenses";

const App1 = ()=>{

    const addExpenseHandler = expense =>{
         console.log('In App');
         console.log(expense);
    } 
    return (
        <NewExpense onAddExpense={addExpenseHandler}  />
    )
}
export default App1;