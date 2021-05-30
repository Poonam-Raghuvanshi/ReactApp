import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enterTitle, setEnteredTitle] = useState('');
    const [enterAmount, setEnteredAmount] = useState('');
    const [enterDate, setEnteredDate] = useState('');

    // Combining the state
    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // Different ways of setting the state
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enterDate: event.target.value
        //     };
        // })
    }
 
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };
        props.onSaveExpenseData(expenseDate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enterAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enterDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.stopEdit}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;