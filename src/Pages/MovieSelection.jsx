import React from "react";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MovieSelection() {
	const navigate = useNavigate();
	const MOVIES = [
		{ id: 0, movie: "Action", bgColor: "#FF5209", image: "/action-image.png" },
		{ id: 1, movie: "Drama", bgColor: "#D7A4FF", image: "/drama-image.png" },
		{
			id: 2,
			movie: "Romance",
			bgColor: "#11B800",
			image: "/romance-image.png",
		},
		{
			id: 3,
			movie: "Thriller",
			bgColor: "#84C2FF",
			image: "/thriller-image.png",
		},
		{ id: 4, movie: "Horror", bgColor: "#7358FF", image: "/horror-image.png" },
		{
			id: 5,
			movie: "Western",
			bgColor: "#902500",
			image: "/western-image.png",
		},
		{
			id: 6,
			movie: "Fantasy",
			bgColor: "#FF4ADE",
			image: "/fantasy-image.png",
		},
		{
			id: 7,
			movie: "Science Fiction",
			bgColor: "#6CD061",
			image: "/fiction-image.png",
		},
		{ id: 8, movie: "Music", bgColor: "#E61E32", image: "/music-image.png" },
	];
	const [selectedMovies, setSelectedMovies] = useState([]);
	const moveNext = () => {
		if (selectedMovies.length < 3) {
			alert("Please select at least 3 movies");
		} else {
			localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
			setSelectedMovies([]);
			navigate("/info");
		}
	};

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-start",
					backgroundColor: "black",
					color: "white",
					height: "100vh",
					padding: "20px",
				}}>
				<div style={{ width: "40vw", paddingRight: "20vw" }}>
					<h1
						style={{
							color: "white",
							textAlign: "center",
							fontFamily: "'Single Day', cursive",
							color: "#72DB73",
							fontWeight: "400",
							fontSize: "4vw",
							marginTop: "6vw",
							marginLeft: "-7vw",
						}}>
						Super app
					</h1>
					<h2
						style={{
							fontSize: "4vw",
							fontWeight: "600",
							paddingLeft: "7.5vw",
							marginLeft: "2vw",
							marginTop: "70px",
							width: "30vw",
							fontFamily: ' "Roboto", sans-serif;',
						}}>
						Choose your entertainment category
					</h2>
					<div
						style={{
							marginTop: "20px",
							paddingLeft: "7.5vw",
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							gap: "10px",
							backgroundColor: "black",
						}}>
						{selectedMovies.map((category) => (
							<MovieChip
								key={category.id}
								category={category}
								setSelectedMovies={setSelectedMovies}
								selectedMovies={selectedMovies}
							/>
						))}
					</div>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						marginLeft: "10px",
						width: "50%",
						gap: "10px",
						width: "70vw",
						height: "70vh",
						paddingTop: "20px",
						backgroundColor: "black",
					}}>
					{MOVIES.map((category) => (
						<div key={category.id}>
							<MovieBox
								selectedMovies={selectedMovies}
								setSelectedMovies={setSelectedMovies}
								category={category}
							/>
						</div>
					))}
				</div>
			</div>
			<div
				style={{
					backgroundColor: "black",
					display: "flex",
					justifyContent: "flex-end",
					color: "white",
					backgroundCover: "black",
					width: "100%",
				}}>
				{selectedMovies.length < 3 && (
					<p style={{ color: "red", marginRight: "930px", marginTop: "-8vw" }}>
						Please select at least 3 movies
					</p>
				)}

				<button
					style={{
						borderRadius: "10px",
						border: "none",
						backgroundColor: "#72DB73",
						backgroundCover: "black",
						color: "white",
						fontFamily: "DM Sans, sans-serif",
						fontWeight: "400",
						fontSize: "1.5vw",
						padding: "0.3vw 2vw",
						cursor: "pointer",
						margin: "2vw",
						marginBottom: "10px",
					}}
					onClick={moveNext}>
					Next Page
				</button>
			</div>
		</>
	);
}

export default MovieSelection;
