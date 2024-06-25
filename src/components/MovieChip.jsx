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
		<button>
			{category.movie} &nbsp;&nbsp;
			<span onClick={() => removeSelection(category)}>X</span>
		</button>
	);
}
//5 red balls and 1 green ball
//keep those balls which are not green means i m keeping red balls
