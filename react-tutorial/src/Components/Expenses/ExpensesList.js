import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.filteredYearExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }
    // let expenseContent = <p>No Expense Found.</p>;

    // if (props.filteredYearExpenses.length > 0) {
    //     expenseContent = props.filteredYearExpenses.map((expense) => (
    //         < ExpenseItem key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date} />
    //     ))
    // }
    return (<ul className='expenses-list'>
        {props.filteredYearExpenses.map((expense) => (
            < ExpenseItem key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />
        ))}
    </ul>);
}
export default ExpensesList;