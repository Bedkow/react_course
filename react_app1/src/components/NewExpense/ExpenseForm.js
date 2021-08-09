import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	// @@ alternative -> one useState @@
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	const titleChangeHandler = function (event) {
		setEnteredTitle(event.target.value); //saving the entered value

		// @@ bad way:
		// setUserInput({
		// 	...userInput, //destructuring the object
		// 	enteredTitle: event.target.value, //saving new title value
		// });

		//@@ good way if you depend on a previous state:
		// 	setUserInput((prevState) => {
		// 		//receives a 'snapshot' of the state
		// 		return { ...prevState, enteredTitle: event.target.value };
		// 	});
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value); //value is always a string
		// 	setUserInput({
		// 		...userInput, //destructuring the object
		// 		enteredAmount: event.target.value, //saving new amount value
		// 	});
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		// 	...userInput, //destructuring the object
		// 	enteredDate: event.target.value, //saving new date value
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		console.log(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={setEnteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2020-01-01"
						max="2023-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense!</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
