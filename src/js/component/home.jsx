import React from "react";
import Card from "./card.jsx";
import Jumb from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";


const Home = () => {
	return (
		<div className="container">

	<Navbar/>
	<Jumb/>
	<div className="row">
	<Card/>
	<Card/>
	<Card/>
	<Card/>
	</div>
	</div>
	)
};

export default Home;
