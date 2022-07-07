import React,{useState} from 'react';
import Card from './Card'
import ExpensesChart from './ExpensesChart';
//import ExpenseItem from './ExpenseItem';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear]=useState("2020")
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;