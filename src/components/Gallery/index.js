import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers/helpers.js';
import photo from "../../assets/couple/couple-0.jpg";

function Gallery(props) {
    const currentCategory = {
      name: "couple",
    };
    return (
      <section>
        <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.name}</p>
        <div className="flex-row">
            <img
            alt="Couple sitting on rock"
            className="img-thumbnail mx-1"
            src={photo}
            />
        </div>
      </section>
    );
  }
  export default Gallery;