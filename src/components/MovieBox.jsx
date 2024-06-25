export default function MovieBox({
	category,
	selectedMovies,
	setSelectedMovies,
}) {
	
	const handleSelection = (category) => {
		if (selectedMovies.some((item) => item.id === category.id)) {
			setSelectedMovies(
				selectedMovies.filter((item) => item.id !== category.id)
			);
		} else {
			setSelectedMovies([...selectedMovies, category]);
		}
	};

	console.log("Selected Movies inside MovieBox: ", selectedMovies); // Debugging statement
	return (
		<div
			style={{
				width: "150px",
				height: "150px",
				backgroundColor: "LightBlue",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				margin: "10px",
				borderRadius: "10px",
				border: `2px solid ${
					selectedMovies.some((item) => item.id === category.id)
						? "red"
						: "black"
				}`,
				cursor: "pointer",
			}}
			onClick={() => handleSelection(category)}>
			<h1>{category.movie}</h1>
		</div>
	);
}
