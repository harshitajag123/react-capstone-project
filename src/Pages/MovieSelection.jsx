import React from "react";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MovieSelection() {
  const navigate = useNavigate();
	const MOVIES = [
		{ id: 0, movie: "Actions" },
		{ id: 1, movie: "Drama" },
		{ id: 2, movie: "Romance" },
		{ id: 3, movie: "Thriller" },
		{ id: 4, movie: "Horror" },
		{ id: 5, movie: "Western" },
		{ id: 6, movie: "Fantacy" },
		{ id: 7, movie: "Fiction" },
		{ id: 8, movie: "Musical" },
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
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
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
			{selectedMovies.length < 3 && (
				<p style={{ color: "red" }}>Please select at least 3 movies</p>
			)}
			<div>
				{selectedMovies.map((category) => (
					<MovieChip
						key={category.id}
						category={category}
						setSelectedMovies={setSelectedMovies}
						selectedMovies={selectedMovies}
					/>
				))}
			</div>
			<button onClick={moveNext}>Next</button>
		</>
	);
}

export default MovieSelection;

// export default function Selection() {
// 	return (
// 		<div>
// 			{MOVIES.map((category) => (
// 				<div key={category.id}>
// 					<MovieBox category={category}/>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
