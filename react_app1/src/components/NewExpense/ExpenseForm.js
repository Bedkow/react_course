import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
	// const [enteredTitle, setEnteredTitle] = useState("");
	// const [enteredAmount, setEnteredAmount] = useState("");
	// const [enteredDate, setEnteredDate] = useState("");

	// @@ alternative -> one useState @@
	const [userInput, setUserInput] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	});

	const titleChangeHandler = function (event) {
		// setEnteredTitle(event.target.value); //saving the entered value
		setUserInput({
			...userInput, //destructuring the object
			enteredTitle: event.target.value, //saving new title value
		});
	};

	const amountChangeHandler = (event) => {
		// setEnteredAmount(event.target.value); //value is always a string
		setUserInput({
			...userInput, //destructuring the object
			enteredAmount: event.target.value, //saving new amount value
		});
	};

	const dateChangeHandler = (event) => {
		// setEnteredDate(event.target.value);
		setUserInput({
			...userInput, //destructuring the object
			enteredDate: event.target.value, //saving new date value
		});
	};

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="0.01" step="0.01" />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2020-01-01" max="2023-12-31" />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense!</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
