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

	//to style input fields
	const getInputStyle = (field) => ({
		color: "#7C7C7C",
		height: "3vw",
		marginLeft: "7vw",
		marginRight: "7vw",
		paddingLeft: "1vw",
		backgroundColor: "#292929",
		border: errors[field] ? "1px solid red" : "none",
		borderRadius: "5px",
	});

	//to style error messages
	const getErrorStyle = (field) => ({
		color: "red",
		marginLeft: "7vw",
		marginRight: "7vw",
		paddingLeft: "1vw",
	});

	return (
		<div>
			<div
				style={{
					display: "flex",
					margin: "0",
					padding: "0",
				}}>
				<img
					width="40%"
					height="70%"
					style={{ height: "70%" }}
					src={`${process.env.PUBLIC_URL}/signUp.png`}
					alt="Sign Up"
				/>
				<form
					onSubmit={handleSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						//width: "54vw",
						backgroundColor: "black",
						width: "60%",
					}}>
					<h1
						style={{
							color: "white",
							textAlign: "center",
							fontFamily: "'Single Day', cursive",
							color: "#72DB73",
							fontWeight: "400",
							fontSize: "5vw",
							marginBottom: "0",
						}}>
						Super app
					</h1>
					<h2
						style={{
							color: "white",
							textAlign: "center",
							fontFamily: "DM Sans, sans-serif",
							fontWeight: "400",
							fontSize: "2vw",
							letterSpacing: "0.2vw",
							marginTop: "0",
						}}>
						Create your new account
					</h2>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={data.name}
						onChange={handleInput}
						style={getInputStyle("name")}
					/>
					<span style={getErrorStyle("name")}>{errors.name}</span>

					<input
						type="text"
						name="username"
						placeholder="Username"
						value={data.username}
						onChange={handleInput}
						style={getInputStyle("name")}
					/>
					<span style={getErrorStyle("username")}>{errors.username}</span>

					<input
						type="email"
						name="email"
						placeholder="Email"
						value={data.email}
						onChange={handleInput}
						style={getInputStyle("name")}
					/>
					<span style={getErrorStyle("email")}>{errors.email}</span>

					<input
						type="telephone"
						name="mobile"
						placeholder="Mobile"
						value={data.mobile}
						onChange={handleInput}
						style={getInputStyle("name")}
					/>
					<span style={getErrorStyle("mobile")}> {errors.mobile} </span>

					<div style={{ display: "flex", flexDirection: "row" }}>
						<input
							type="checkbox"
							name="checkbox"
							id="checkbox"
							checked={data.checkbox}
							onChange={handleInput}
							style={{
								color: "#7C7C7C",
								height: "3vw",
								marginLeft: "7vw",
								backgroundColor: "#292929",
								border: "none",
							}}
						/>

						<label
							htmlFor="checkbox"
							style={{
								color: "white",
								fontFamily: "DM Sans, sans-serif",
								fontWeight: "400",
								fontSize: "1.5vw",
								marginBottom: "0",
								marginLeft: "1vw",
								marginTop: "1vw",
								fontSize: "1.5vw",
								cursor: "pointer",

								// paddingTop:'-5vw'
							}}>
							Share my registration data with Superapp
						</label>
					</div>
					<span style={getErrorStyle("checkbox")}> {errors.checkbox} </span>
					<button
						style={{
							borderRadius: "5vw",
							backgroundColor: "#72DB73",
							color: "white",
							fontFamily: "DM Sans, sans-serif",
							fontWeight: "400",
							fontSize: "1.5vw",
							letterSpacing: "0.2vw",
							marginLeft: "7vw",
							marginRight: "7vw",
							paddingLeft: "1vw",
							paddingRight: "1vw",
							padding: "1vw",
							marginTop: "1vw",
							marginBottom: "1vw",
							cursor: "pointer",
						}}
						type="submit">
						SIGN UP
					</button>
				</form>
			</div>
		</div>
	);
}

export default Home;
