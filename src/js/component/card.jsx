import React from "react";
import rigoImage from "../../img/rigo-baby.jpg"

//create your first component
const Card = () => {
	return (
    <div className="col-3 card-deck">
    <div className="card" >
    <img src="https://estaticos-cdn.prensaiberica.es/clip/7583e1dd-e048-4687-84cd-383a484e6b27_16-9-discover-aspect-ratio_default_0.jpg" className="card-img-top" alt=" "/>
    <div className="card-body">
      <h5 className="card-title  text-center">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Find Out More!</a>
    </div>
  </div> 
  </div>);
};

export default Card;
