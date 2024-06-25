import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
	const navigate = useNavigate();

	const [data, setData] = useState({
		name: "",
		username: "",
		email: "",
		mobile: "",
		checkbox: false,
	});

	const [errors, setErrors] = useState({
		name: "",
		username: "",
		email: "",
		mobile: "",
		checkbox: "",
	});

	const handleInput = (e) => {
		setData({
			...data,
			[e.target.name]:
				e.target.name === "checkbox" ? e.target.checked : e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
		let errors = {};
		if (!data.name || data.name.trim() === "") {
			errors.name = "Name is required";
		}
		if (!data.username || data.username.trim() === "") {
			errors.username = "Username is required";
		}
		if (!data.email || data.email.trim() === "") {
			errors.email = "Email is required";
		}
		if (!data.mobile || data.mobile.trim() === "") {
			errors.mobile = "mobile is required";
		}
		if (!data.checkbox) {
			errors.checkbox = "Checkbox is required";
		}
		setErrors(errors);
		if (Object.keys(errors).length > 0) return;
		else {
			alert("Form submitted successfully");
			localStorage.setItem("userData", JSON.stringify(data));
			setData({
				name: "",
				username: "",
				email: "",
				mobile: "",
				checkbox: false,
			});
			console.log("Navigating to /selection"); // Debug statement
			navigate("/selection");
		}
	};
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "20px",
					width: "40vw",
					marginLeft: "auto",
					marginRight: "auto",
				}}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={data.name}
					onChange={handleInput}
				/>
				<span style={{ color: "red" }}> {errors.name} </span>

				<input
					type="text"
					name="username"
					placeholder="Username"
					value={data.username}
					onChange={handleInput}
				/>
				<span style={{ color: "red" }}> {errors.username} </span>

				<input
					type="email"
					name="email"
					placeholder="Email"
					value={data.email}
					onChange={handleInput}
				/>
				<span style={{ color: "red" }}> {errors.email} </span>

				<input
					type="telephone"
					name="mobile"
					placeholder="Mobile"
					value={data.mobile}
					onChange={handleInput}
				/>
				<span style={{ color: "red" }}> {errors.mobile} </span>

				<div>
					<input
						type="checkbox"
						name="checkbox"
						id="checkbox"
						checked={data.checkbox}
						onChange={handleInput}
					/>

					<label htmlFor="checkbox">
						Share my registration data with Superapp
					</label>
				</div>
				<span style={{ color: "red" }}> {errors.checkbox} </span>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Home;
