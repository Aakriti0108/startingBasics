
// import NewExpense from "./components/NewExpenses/NewExpenses";

// const App1 = (props)=>{

//     const addExpenseHandler = expense =>{
//          console.log('In App');
//          console.log(expense);
//     } 
//     return (
//         <NewExpense onAddExpense={addExpenseHandler}  />
//     )
// }
// export default App1;


// 10 
import NewExpense from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const DUMMMY_DATA =[
    {
      date:new Date(2020,7,14),
      Title:'sweet',
      Amount:94.12,
      
    },
    {
      date:new Date(2020,8,14),
      Title:'cheese',
      Amount:64.12,
      
    }
   ]
const App1 = (props)=>{

    const [expenses,setExpenses] = useState(DUMMMY_DATA);

    const addExpenseHandler = expense =>{
         console.log('In App');
         console.log(expense);
         setExpenses((prevExpense)=>{
            return [expense,...prevExpense]
         })

    } 
    return (
        <div>
        <NewExpense onAddExpense={addExpenseHandler}  />
        <Expenses  items={expenses} />
        
        </div>
       
    )
}
export default App1;