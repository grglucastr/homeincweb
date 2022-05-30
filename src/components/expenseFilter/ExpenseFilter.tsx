import React, {useState, useEffect} from "react";

import './expenseFilter.css'

const ExpenseFilter: React.FC = () => {
  return(
    <div>
      <form action="#" className="expense-filter-form">
        <ul>
          <li>
            <label htmlFor="id">ID:</label>
            <input type="text"  id="id"/>
          </li>
          <li>
            <label htmlFor="title">Title:</label>
            <input type="text"  id="title"/>
          </li>
          <li>
            <label htmlFor="cost">Cost:</label>
            <input type="text"  id="cost"/>
          </li>
          <li>
            <label htmlFor="dueDate">Due Date:</label>
            <input type="text"  id="dueDate"/>
          </li>
          <li>
            <label htmlFor="paymentMethod">Payment Method:</label>
            <input type="text"  id="paymentMethod"/>
          </li>
          <li>
            <label htmlFor="paid">Paid
              <input type="checkbox"  id="paid"/>
            </label>
          </li>
        </ul>
        <button>Search</button>
      </form>
    </div>
  )
}

export default ExpenseFilter;