import { useState } from "react";
import IExpenseFilter from "../../models/IExpenseFilter";

import './expenseFilter.css';


const ExpenseFilter = ({onSearchFilter}: any) => {

  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [paid, setPaid] = useState<boolean>(false);


  const formSubmit = (e: any) => {
    e.preventDefault();

    const idNumber = parseInt(id);

    const filterOptions: IExpenseFilter = {
      id:idNumber, title, year, month, paid
    };

    onSearchFilter(filterOptions);
  }

  return(
    <div>
      <form id="expenseFilterForm" className="expense-filter-form" onSubmit={formSubmit} >
        <ul>
          <li>
            <label htmlFor="id">ID:</label>
            <input type="text"  id="id" value={id} onChange={e => setId(e.target.value)}/>
          </li>
          <li>
            <label htmlFor="title">Title:</label>
            <input type="text"  id="title" value={title} onChange={e => setTitle(e.target.value)}/>
          </li>
          <li>
            <label htmlFor="year">Year:</label>
            <select name="year" id="year" value={year} onChange={e => setYear(e.target.value)}>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </li>
          <li>
            <label htmlFor="month">Month:</label>
            <select name="month" id="month" value={month} onChange={e => setMonth(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </li>
          <li>
            <label htmlFor="paid">Paid
              <input type="checkbox"  id="paid" checked={paid} onChange={() => setPaid(!paid)} />
            </label>
          </li>
          <li>
            <button id="expenseSearch">Search</button>
          </li>
        </ul>
        
      </form>
    </div>
  )
}

export default ExpenseFilter;