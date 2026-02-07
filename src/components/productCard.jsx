import { Link } from "react-router-dom";

/**
 * Render a product card showing image, name, price, and action controls.
 *
 * @param {object} props.product - Product data used to populate the card.
 * @param {string|number} props.product.id - Unique identifier for the product.
 * @param {string} props.product.image - URL of the product image.
 * @param {string} props.product.name - Display name of the product.
 * @param {number|string} props.product.price - Price of the product.
 * @returns {JSX.Element} A JSX element representing the product card with image, name, price, a "View Details" link, and an "Add to Cart" button.
 */
export default function ProductCard({ product }) {
    return(
  <div className="product-card" key={product.id}>
    <img src={product.image} className="product-card-image" />
    <div className="product-card-content">
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-price">${product.price}</p>
      <div className="product-card-action">
        <Link className="btn btn-secondary">View Details</Link>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
);
}