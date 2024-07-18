import React, { useState } from "react";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();

  const addExpense = (e) => {
    e.preventDefault();
    if (description && amount) {
      const newExpense = {
        description,
        amount: parseFloat(amount),
        id: Date.now(),
      };
      setExpenses([...expenses, newExpense]);
      setDescription("");
      setAmount("");
    }
  };

  const totalExpense = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <>
      <form onSubmit={addExpense}>
        <label htmlFor="Description" className="mr-5 font-semibold text-xl">
          Description
        </label>
        <input
          type="text"
          id="Description"
          className="mr-10 p-2 rounded-md outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="Amount" className="mr-5 font-semibold text-xl">
          Amount
        </label>
        <input
          type="number"
          id="Amount"
          className="p-2 rounded-md outline-none"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="ml-10">
          Add Expense
        </button>
      </form>

      <h2 className="text-1xl mb-3">Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="mb-2 list-decimal">
            {expense.description}: Rs {expense.amount}
          </li>
        ))}
      </ul>

      <h3 className="font-semibold text-2xl">Total: Rs {totalExpense}</h3>
    </>
  );
}

export default Expense;
