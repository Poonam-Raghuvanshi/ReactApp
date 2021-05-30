import { useState } from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.addExpense(expenseData);
    }

    const isStartEditingHandler=()=>{
        setIsEditing(true);
    }

    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
    return (
        <div className="new-expense">

           {!isEditing && <button onClick={isStartEditingHandler}>Add New Expense</button>}
           {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} stopEdit={stopEditingHandler} />}
        </div>
    )
};
export default NewExpense;