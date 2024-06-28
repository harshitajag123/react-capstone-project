import React from "react";

export default function MovieChip({
	category,
	setSelectedMovies,
	selectedMovies,
}) {
	const removeSelection = (category) => {
		setSelectedMovies(selectedMovies.filter((item) => item.id !== category.id));
	};

	//console.log("MovieChip category: ", category); // Debugging statement
	return (
		<button
			style={{
				backgroundColor: "#148A08",
				display:'flex',
				fontFamily:' "Roboto", sans-serif;',
				borderRadius: "5vw",
				width: "10vw",
				border: "none",
				color: "white",
				padding: "10px ",
				fontWeight:'500',
				margin: "2px",
			}}
			onClick={() => setSelectedMovies([...selectedMovies, category])}>
			{category.movie} &nbsp;&nbsp;
			<span onClick={() => removeSelection(category)}>X</span>
		</button>
	);
}
//5 red balls and 1 green ball
//keep those balls which are not green means i m keeping red balls
