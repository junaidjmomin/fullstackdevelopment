use client;

import { KeyboardEvent, useReducer, useState } from "react";
import "./expense-tracker.css";

type TransactionType = "income" | "expense";

type Transaction = {
  id: number;
  description: string;
  amount: number;
  type: TransactionType;
};

type State = {
  transactions: Transaction[];
};

type FormState = {
  description: string;
  amount: string;
  type: TransactionType;
};

type Action =
  | { type: "ADD_TRANSACTION"; payload: Omit<Transaction, "id"> }
  | { type: "DELETE_TRANSACTION"; payload: number };

const initialState: State = {
  transactions: [
    { id: 1, description: "Salary", amount: 5000, type: "income" },
    { id: 2, description: "Rent", amount: 1200, type: "expense" },
    { id: 3, description: "Groceries", amount: 340, type: "expense" },
    { id: 4, description: "Freelance Project", amount: 800, type: "income" },
  ],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [
          { ...action.payload, id: Date.now() },
          ...state.transactions,
        ],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== action.payload),
      };
    default:
      return state;
  }
}

export default function ExpenseTracker() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, setForm] = useState<FormState>({ description: "", amount: "", type: "income" });
  const [error, setError] = useState("");

  const totalIncome = state.transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const totalExpenses = state.transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const balance = totalIncome - totalExpenses;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(value);

  const handleAdd = () => {
    if (!form.description.trim()) {
      setError("Description is required.");
      return;
    }
    const amt = parseFloat(form.amount);
    if (!form.amount || isNaN(amt) || amt <= 0) {
      setError("Enter a valid positive amount.");
      return;
    }
    setError("");
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { description: form.description.trim(), amount: amt, type: form.type },
    });
    setForm({ description: "", amount: "", type: "income" });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const handleAmountEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Ledger</h1>
        <p>Personal Finance Tracker</p>
      </header>

      <div className="main-grid">
        {/* Summary Row */}
        <div className="summary-row">
          <div className="card summary-card balance-card">
            <div className="label"><span className="badge" />Balance</div>
            <div className="amount">{formatCurrency(balance)}</div>
          </div>
          <div className="card summary-card income-card">
            <div className="label"><span className="badge" />Total Income</div>
            <div className="amount">{formatCurrency(totalIncome)}</div>
          </div>
          <div className="card summary-card expense-card">
            <div className="label"><span className="badge" />Total Expenses</div>
            <div className="amount">{formatCurrency(totalExpenses)}</div>
          </div>
        </div>

        {/* Add Transaction */}
        <div className="card form-card">
          <h2>Add Transaction</h2>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              placeholder="e.g. Coffee, Salary..."
              value={form.description}
              onChange={(e) => { setForm({ ...form, description: e.target.value }); setError(""); }}
            />
          </div>

          <div className="form-group">
            <label>Amount (INR)</label>
            <input
              type="number"
              placeholder="0.00"
              min="0"
              step="0.01"
              value={form.amount}
              onChange={(e) => { setForm({ ...form, amount: e.target.value }); setError(""); }}
              onKeyDown={handleAmountEnter}
            />
          </div>

          <div className="form-group">
            <label>Type</label>
            <div className="type-toggle">
              <button
                type="button"
                className={`type-btn ${form.type === "income" ? "active-income" : ""}`}
                onClick={() => setForm({ ...form, type: "income" })}
              >
                ↑ Income
              </button>
              <button
                type="button"
                className={`type-btn ${form.type === "expense" ? "active-expense" : ""}`}
                onClick={() => setForm({ ...form, type: "expense" })}
              >
                ↓ Expense
              </button>
            </div>
          </div>

          {error && <div className="error-msg">{error}</div>}

          <button
            type="button"
            className="submit-btn"
            onClick={handleAdd}
            disabled={!form.description.trim() || !form.amount}
          >
            + Add Transaction
          </button>
        </div>

        {/* Transaction List */}
        <div className="card list-card">
          <h2>
            Transactions
            <span className="count">{state.transactions.length} entries</span>
          </h2>

          {state.transactions.length === 0 ? (
            <div className="empty-state">No transactions yet.</div>
          ) : (
            <div className="tx-list">
              {state.transactions.map((transaction) => (
                <div className="tx-item" key={transaction.id}>
                  <span className={`tx-dot ${transaction.type}`} />
                  <span className="tx-desc">{transaction.description}</span>
                  <span className={`tx-amount ${transaction.type}`}> 
                    {transaction.type === "income" ? "+" : "−"}{formatCurrency(transaction.amount)}
                  </span>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => handleDelete(transaction.id)}
                    title="Remove transaction"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
