    import React,{useState} from "react";
    import ExpenseItem from "./ExpenseItem";
    
    import ExpensesFilter from "./ExpenseFilter";
     import ExpenseItem from "./ExpenseItem";
     import './Expenses.css';

     const Expenses = (props)=>{
        const [filteredYear , setFilteredYear] = useStae('2020');

        const FilterChangeHandler = selectedYear =>{
            setFilteredYear(selectedYear)
        }
        return(
            <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={FilterChangeHandler}>
            <ExpenseItem
             title={props.items[0].title}
             amount={props.items[0].amount}
             date={props.item[0].date}
             ></ExpenseItem>
             <ExpenseItem
             title={props.items[0].title}
             amount={props.items[0].amount}
             date={props.item[0].date}
             ></ExpenseItem>    
            </ExpensesFilter>
            </div>
        )
     }