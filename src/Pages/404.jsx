import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
	return (
		<div style={{ textAlign: "center" }}>
			<h1>404</h1>
			<h2>Page Not Found</h2>
      <button onClick={()=>navigate('/')}> Back to home Page </button>
		</div>
	);
}

export default NotFound;
