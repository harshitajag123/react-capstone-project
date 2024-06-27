import React, { useEffect } from "react";
import { useState } from "react";
function Info() {
	const [notes, saveNotes] = useState(localStorage.getItem("notes") || "");
	const [news, setNews] = useState([]);
	const updateNotes = (e) => {
		saveNotes(e.target.value);
		localStorage.setItem("notes", JSON.stringify(e.target.value));
	};

	const userData = JSON.parse(localStorage.getItem("userData"));
	const selectedMovies = JSON.parse(localStorage.getItem("selectedMovies"));

	useEffect(() => {
		fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
			.then((res) => res.json())
			.then((data) => setNews(data.articles[Math.random()*data.articles.length | 0]));
	}, []);
  console.log(news);
	return (
		<div>
			<div
				style={{
					display: "flex",
					color: "white",
					flexDirection: "column",
					height: "40vh",
					backgroundColor: "#5746EA",
				}}>
				{userData ? (
					<>
						<p>{userData.name}</p>
						<p>{userData.email}</p>
						<p>{userData.username}</p>
						{/* <p>{userData.mobile}</p> */}
					</>
				) : (
					"No user data"
				)}

				{selectedMovies ? (
					<div
						style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
						{selectedMovies.map((movie, index) => (
							<p key={index}>{movie.movie}</p>
						))}
					</div>
				) : (
					"No movies selected"
				)}
			</div>
			<textarea
				style={{
					maxHeight: "400px",
					minHeight: "400px",
					minwidth: "40%",
					maxWidth: "40%",
					backgroundColor: "#F1C75B",
					borderRadius: "10px",
					marginTop: "20px",
				}}
				value={notes}
				onChange={updateNotes}></textarea>
      
		</div>
	);
}

export default Info;
