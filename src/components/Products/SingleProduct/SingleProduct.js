// Title: SingleProduct Component
// Details: Component to render single product UI.
// Author: raadu

// Dependencies
import { Fade } from "react-reveal";
import formatCurrency from '../../../utilities/util';
import SingleProductStyle from "./SingleProduct.module.scss";

// Dummy Image
const dummyImage = "/images/dummy-image.jpg";


const SingleProduct = ({ 
    product, 
    openModal, 
    addToCart 
}) => {
    // Image URL
    const imageUrl = product.image !== "" ? product.image : dummyImage;
    
  return (
    <Fade bottom cascade>
        <li key={product.id}>
            <div className={SingleProductStyle.product}>
                <a href={"#" + product.id} onClick={() => openModal(product)}>
                    <img
                        src={imageUrl}
                        alt={product.title}
                    />
                    <div className={SingleProductStyle.productTitle}>{product.title}</div>
                </a>
                <div className={SingleProductStyle.productPrice}>
                <div>{formatCurrency(product.price)}</div>
                <button 
                    onClick={() => addToCart(product)} 
                    className={`${SingleProductStyle.customButton} ${SingleProductStyle.primary}`}
                >
                    Add To Cart
                </button>
                </div>
            </div>
        </li>
    </Fade>
  );
};

export default SingleProduct;
