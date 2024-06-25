import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Info from './Pages/Info.jsx';
import Browse from './Pages/Browse.jsx';
import MovieSelection from './Pages/MovieSelection.jsx';
import NotFound from './Pages/404.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/info" element={<Info />} />
				<Route path="/browse" element={<Browse />} />
				<Route path="/selection" element={<MovieSelection />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
