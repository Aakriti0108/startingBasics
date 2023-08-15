import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpenses/NewExpenses";


function App() {
   const expense =[
    {
      date:new Date(2020,7,14),
      Tit:'sweet',
      amount:94.12,
      spent:85
    },
    {
      date:new Date(2020,7,14),
      Tit:'cheese',
      amount:64.12,
      spent:58
    }
   ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <ExpenseItem 
      date={expense[0].date}
      Tit={expense[0].Tit}
      amount={expense[0].amount}
      spent={expense[0].spent}>
      </ExpenseItem>
      <ExpenseItem
      date={expense[1].date}
      Tit={expense[1].Tit}
      amount={expense[1].amount}
      spent={expense[1].spent}>
      </ExpenseItem>
      
    </div>
  );
}

export default App;
