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
	console.log("Image URL: ", category.image); // Debugging statement
	return (
		<div
			style={{
				width: "150px",
				height: "160px",
				backgroundColor: category.bgColor,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
				margin: "10px",
				
				borderRadius: "10px",
				border: `2px solid ${
					selectedMovies.some((item) => item.id === category.id)
						? "#11B800"
						: "black"
				}`,
				color: "white",
				cursor: "pointer",
				textAlign: "center",
				overflow: "hidden",
			}}
			onClick={() => handleSelection(category)}>
			<div style={{ padding: "1vw", fontWeight: "bold", fontSize: "1.5vw" }}>
				{category.movie}
			</div>
			<div
				style={{
					width: "80%",
					height: "55%",
					overflow: "hidden",
					paddingLeft: "5%",
					paddingBottom: "14%",
					borderRadius: "10px",
					backgroundImage: `url(${category.image})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>
		</div>
	);

	// return (
	// 	<div
	// 		style={{
	// 			width: "150px",
	// 			height: "150px",
	// 			backgroundColor: category.bgColor,
	// 			backgroundImage: `url(${category.image})`,
	// 			backgroundPosition: "center",
	// 			backgroundRepeat: "no-repeat",
	// 			backgroundSize: "cover",
	// 			display: "flex",
	// 			justifyContent: "center",
	// 			alignItems: "center",
	// 			margin: "10px",
	// 			borderRadius: "10px",
	// 			border: `2px solid ${
	// 				selectedMovies.some((item) => item.id === category.id)
	// 					? "#11B800"
	// 					: "black"
	// 			}`,
	// 			color: "white",
	// 			cursor: "pointer",
	// 		}}
	// 		onClick={() => handleSelection(category)}>
	// 		<h1 style={{ padding: "1vw" }}>{category.movie}</h1>
	// 	</div>
	// );
}
