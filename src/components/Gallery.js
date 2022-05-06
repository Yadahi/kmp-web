import React from "react";

function Gallery(props) {
  const { gallery } = props;

  if (!gallery) {
    return null;
  }
  return (
    <div className="gallery">
      <ul>
        {gallery.map((img) => {
          return (
            <li>
              <img
                className="gallery__img"
                src={img.image}
                alt={img.name}
                key={img.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Gallery;
