import React, { useState } from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
  const [isEditting,setIsEditing] = useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }
    const startEditingHandler=()=>{
      setIsEditing(true);
    }
    const stopEditingHandler=()=>{
      setIsEditing(false);
    }

  return (
    <div className='new-expense'>
    {!isEditting && (<button onClick={startEditingHandler}>Add Expense</button>)}
    {isEditting && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />)}

    </div>
  )
}

export default NewExpense