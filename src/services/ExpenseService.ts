import http from '../http-commons';
import IExpense from '../models/IExpense';

const getAll = () => {
    return http.get<Array<IExpense>>("/expenses")
}