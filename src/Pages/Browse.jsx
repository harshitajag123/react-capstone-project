import React, { useEffect } from "react";
import { useState } from "react";
function Browse() {
	const [genreList, setGenreList] = useState([]);
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchGenres = async () => {
			const options = {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDJmNmQ1MDU4NDc0NjRjYTk0MTgxOWQzOWQ3NTA0OCIsIm5iZiI6MTcxOTMzNDc2Ni40ODQ4NDksInN1YiI6IjY2N2FlZTc4NWNhZmFjYmMwNzNiNjhiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bs3drl35JXbhl3U5vPsRig6RDQN_97KR0nf7fLTZIyk",
				},
			};

			const res = await fetch(
				"https://api.themoviedb.org/3/genre/movie/list?language=en",
				options
			);
			const data = await res.json();
			setGenreList(data.genres);
		};
		fetchGenres();
	}, []);
	const userSelectedGenres = JSON.parse(localStorage.getItem("selectedMovies"));

	useEffect(() => {
		if (genreList.length > 0) {
			let genresToBeFetched = [];
			userSelectedGenres.forEach((genre) => {
				genresToBeFetched.push(
					genreList.find((item) => item.name === genre.movie)
				);
			});
			console.log(genresToBeFetched, "genresToBeFetched");
			const fetchMovies = async () => {
				const options = {
					method: "GET",
					headers: {
						accept: "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDJmNmQ1MDU4NDc0NjRjYTk0MTgxOWQzOWQ3NTA0OCIsIm5iZiI6MTcxOTMzNDc2Ni40ODQ4NDksInN1YiI6IjY2N2FlZTc4NWNhZmFjYmMwNzNiNjhiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bs3drl35JXbhl3U5vPsRig6RDQN_97KR0nf7fLTZIyk",
					},
				};
				const idArray = genresToBeFetched.map((item) => item.id);
				idArray.join("%2C");
				const res = await fetch(
					`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${idArray}`,
					options
				);
				const data = await res.json();
				setMovies(data.results);
				console.log(data, "data");
			};
			fetchMovies();
		}
	}, [genreList]);

	console.log(userSelectedGenres, "userSelectedGenres");
	console.log(genreList);

	return (
		<div>
			<h1>Browse</h1>
			{movies === null ? (
				"Loading..."
			) : (
				<div style ={{display :"grid",gridTemplateColumns:"repeat(4,1fr)",gridGap:"10px"}}>
					
					{movies.map((movie, idx) => {
						if (idx >= 4 * userSelectedGenres.length) {
							return null;
						}
						return (
							<>
								{idx % 4 === 0 ? (
									<div
										style={{
											backgroundColor: "Lightblue",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											height: "100%",
											width: "100%",
											margin: "10px",
											gridColumn:"span 4",
										}}>
										{userSelectedGenres[idx / 4].movie}
									</div>
								) : null}
								<div
									key={movie.id}
									style={{
										display: "flex",
										flexDirection: "column",
									}}>
									<img
										height={100}
										width={100}
										src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
										alt={movie.title}
									/>
									{movie.title}
								</div>
							</>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default Browse;
