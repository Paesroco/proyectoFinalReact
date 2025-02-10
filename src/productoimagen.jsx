import React from "react";
import "./style.css";

const ProductoImagen = () => {
  return (
    <div className="product-image">
      <img src="./images/image-product-1.jpg" alt="Sneaker" />
      <div className="thumbnails">
        <img src="./images/image-product-1-thumbnail.jpg" alt="Thumbnail 1" />
        <img src="./images/image-product-2-thumbnail.jpg" alt="Thumbnail 2" />
        <img src="./images/image-product-3-thumbnail.jpg" alt="Thumbnail 3" />
        <img src="./images/image-product-4-thumbnail.jpg" alt="Thumbnail 4" />
      </div>
    </div>
  );
};

export default ProductoImagen;
