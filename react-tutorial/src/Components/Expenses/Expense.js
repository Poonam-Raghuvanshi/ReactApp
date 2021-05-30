import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expense.css";
import { useState } from "react";

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangedHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredYearExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
               <ExpensesList filteredYearExpenses={filteredYearExpenses}/>
            </Card>
        </div>
    )
}
export default Expense;