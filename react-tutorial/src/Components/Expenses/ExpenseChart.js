
import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
    const chartDataPoints = [
        { key: '01', label: 'Jan', value: 0 },
        { key: '02', label: 'Feb', value: 0 },
        { key: '03', label: 'Mar', value: 0 },
        { key: '04', label: 'Apr', value: 0 },
        { key: '05', label: 'May', value: 0 },
        { key: '06', label: 'Jun', value: 0 },
        { key: '07', label: 'Jul', value: 0 },
        { key: '08', label: 'Aug', value: 0 },
        { key: '09', label: 'Sep', value: 0 },
        { key: '10', label: 'Oct', value: 0 },
        { key: '11', label: 'Nov', value: 0 },
        { key: '12', label: 'Dec', value: 0 }
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
  
    return <Chart dataPoints={chartDataPoints} />
};
export default ExpenseChart;