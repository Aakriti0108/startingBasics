    import React,{useState} from "react";
    import ExpenseItem from "./ExpenseItem";
    import ExpensesFilter from "./ExpenseFilter";
     import './Expenses.css';

     const Expenses = (props)=>{
        const [filteredYear , setFilteredYear] = useState('2020');

        const FilterChangeHandler = selectedYear =>{
            setFilteredYear(selectedYear)
        }

        const filterExpenses = props.items.filter(expense=>{
         return expense.date.getFullYear().toString() === filteredYear ;
        });

        return(
            <div>
            <ExpensesFilter 
               selected={filteredYear} 
               onChangeFilter={FilterChangeHandler} />
                 {filterExpenses.map((expense) =>(
                    <ExpenseItem 
                    Title={expense.Title} 
                    Amount={expense.Amount} 
                    date={expense.date} />
                 ))}
          </div>
        );
     }
     export default Expenses;