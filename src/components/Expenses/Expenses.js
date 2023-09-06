    import React,{useState} from "react";
    import ExpensesList from "./ExpenseList";
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
                <ExpensesList items={filterExpenses}/>
          </div>
        );
     }
     export default Expenses;