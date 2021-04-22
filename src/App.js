// Title: Ecommerce App
// Details: Starting component for Ecommerce Application.
// Author: raadu

// Dependencies
import { useState, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Products from "./components/Products/Products";


function App() {
  // Cached Data
  const cachedCartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
  
  // States
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(cachedCartItems);

  // API Endpoint
  const API_URL = "https://fakestoreapi.com/products";

  // API Call
  useEffect(() => {
    fetch(API_URL)
      .then(async(data) => {
        const productsData = await data.json();
        if(Array.isArray(productsData)) {
          setProducts(productsData);
        }
        else {
          setProducts([]);
        }
      })
      .catch((error) => {
        console.log("Error getting data from API: ", error);
        setProducts([]);
      })
  }, []);

  // Sort Product Function
  const sortProducts = (event) => {
    const sortValue = event.target.value;
    setSort(sortValue);

    // Product Sorting 
    const sortedProducts = products.slice().sort((a,b) => (
      sortValue === "Lowest" ?
      a.price - b.price :
      sortValue === "Highest" ? 
      b.price - a.price :
      sortValue === "Latest" ?
      b._id - a._id :
      b._id - a._id
    ));
    
    setProducts(sortedProducts);
  }


  // Add To Cart Function
  const addToCart = (product) => {
    const cartItemsCopy = [...cartItems];
    let alreadyInCart = false;

    cartItemsCopy.forEach((item) => {
      if(item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if(!alreadyInCart) {
      cartItemsCopy.push({
        ...product, 
        count: 1
      });
    }

    setCartItems(cartItemsCopy);

    // Set value to LocalStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItemsCopy));
  }

  // Remove from cart function
  const removeFromCart = (product) => {
    const cartItemsCopy = [...cartItems];

    const filteredProduct = cartItemsCopy.filter(x => x.id !== product.id);
    setCartItems(filteredProduct);

    // Set value to LocalStorage
    localStorage.setItem("cartItems", JSON.stringify(filteredProduct));
  }

  // Create order function
  const createOrder = (order) => {
    alert("Order created for" + order.name);
    setCartItems([]);
    localStorage.removeItem("cartItems");
  }

  return (
    <div className="grid-container">
      <Header 
        text="E-commerce App"
      />
      <main>
        <div className="content">
          <div className="main">
            <Filter 
              count={products.length}
              sort={sort}
              sortProducts={sortProducts}
            />
            {products.length > 0 ? 
              <Products
               products={products}
               addToCart={addToCart}
              /> :
              <NotFound message="No products found"/>
            }
          </div>
          {cartItems.length!==0 && (
            <div className="sidebar">
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                createOrder={createOrder}
              />
            </div>
          )}
        </div>
      </main>
      <Footer
        text="raadu"
        link="https://github.com/raadu"
      />
    </div>
  );
}

export default App;
