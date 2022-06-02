import http from '../http-commons';
import IExpense from '../models/IExpense';
import IExpenseFilter from '../models/IExpenseFilter';

const getAll = () => {
    return http.get<Array<IExpense>>("/expenses?paid=false");
}

const getExpensesWithFilter = (filterOptions: IExpenseFilter) => {

    if(filterOptions.id > 0){
        return getExpenseById(filterOptions.id);
    }

    const queryString = buildQueryString(filterOptions);
    return http.get<Array<IExpense>>(queryString);
}

const getExpenseById = (id: number) => {
    return http.get<IExpense>(`/expenses/${id}`);
}

function buildQueryString(filterOptions: IExpenseFilter): string {
    
    let queryString = "/expenses?";
    let paid = "paid=false";
    if(filterOptions.paid){
        paid = "paid=true";
    }

    queryString += paid;

    if(filterOptions.title !== ""){
        queryString += `&title=${filterOptions.title}`
    }

    const year = parseInt(filterOptions.year);
    const month = parseInt(filterOptions.month);
    const nextMonth = month + 1;

    let monthStr = month.toString();
    if(month < 10){
        monthStr = `0${month}`;
    }

    let nextMonthStr = nextMonth.toString();
    if(nextMonth < 10){
        nextMonthStr = `0${nextMonth}`;
    }

    queryString += `&dueDateStart=${year}-${monthStr}-01`;

    if(month === 12){
        const nextYear = year + 1;
        queryString += `&dueDateEnd=${nextYear}-01-01`;
    }else{
        queryString += `&dueDateEnd=${year}-${nextMonthStr}-01`;
    }

    return queryString;
}

const ExpenseService = {
    getAll,
    getExpenseById,
    getExpensesWithFilter
};

export default ExpenseService;