// // import React, { useState, useEffect } from 'react';

// // const Cart = () => {
// //   const [cartItems, setCartItems] = useState([]);

// //   // Load cart items from localStorage
// //   useEffect(() => {
// //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
// //     setCartItems(cart);
// //   }, []);

// //   // Calculate total price
// //   const total = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);

// //   return (
// //     <div className="cart">
// //       <h2>Your Cart</h2>
// //       {cartItems.length === 0 ? (
// //         <p>Your cart is empty</p>
// //       ) : (
// //         <div>
// //           {cartItems.map((item, index) => (
// //             <div key={index} className="cart-item">
// //               <h4>{item.name}</h4>
// //               <p>Price: {item.price}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //       <div className="total">
// //         <h4>Total: ${total}</h4>
// //         <button>Checkout</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import "D:/marv/src/Shop/Cart.css"

// const Cart = () => {
//   const [cart, setCart] = useState([]);
  
//   // Get cart from local storage (if any)
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartItems);
//   }, []);

//   // Function to remove item from the cart
//   const removeItemFromCart = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div>{item.name} - {item.price}</div>
//                 <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//           <button className="checkout-btn">Proceed to Checkout</button>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;


// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import "D:/marv/src/Shop/Cart.css";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const history = useHistory();

//   // Get cart from local storage (if any)
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartItems);
//     calculateTotal(cartItems);
//   }, []);

//   // Function to remove item from the cart
//   const removeItemFromCart = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//     calculateTotal(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
//   };

//   // Function to calculate the total price of all products in the cart
//   const calculateTotal = (cartItems) => {
//     const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
//     setTotal(totalPrice.toFixed(2));
//   };

//   // Proceed to Checkout (can be extended to a payment page)
//   const proceedToCheckout = () => {
//     // Logic for checkout (can be redirect to checkout page)
//     alert("Proceeding to checkout...");
//     history.push("/checkout"); // Redirect to checkout page (you need to set this page up)
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           <ul className="cart-item-list">
//             {cart.map((item, index) => (
//               <li key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>{item.price}</p>
//                 </div>
//                 <button className="remove-item-btn" onClick={() => removeItemFromCart(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="cart-summary">
//             <h3>Total: ${total}</h3>
//             <button className="checkout-btn" onClick={proceedToCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Use useNavigate in place of useHistory
// import './Cart.css';  // Import the CSS correctly

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const navigate = useNavigate(); // Initialize navigate

//   // Get cart from local storage (if any)
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartItems);
//     calculateTotal(cartItems);
//   }, []);

//   // Function to remove item from the cart
//   const removeItemFromCart = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//     calculateTotal(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
//   };

//   // Function to calculate the total price of all products in the cart
//   const calculateTotal = (cartItems) => {
//     const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
//     setTotal(totalPrice.toFixed(2));
//   };

//   // Proceed to Checkout (can be extended to a payment page)
//   const proceedToCheckout = () => {
//     // Logic for checkout (can be redirect to checkout page)
//     alert("Proceeding to checkout...");
//     navigate("/checkout"); // Use navigate instead of history.push for redirection
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           <ul className="cart-item-list">
//             {cart.map((item, index) => (
//               <li key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>{item.price}</p>
//                 </div>
//                 <button className="remove-item-btn" onClick={() => removeItemFromCart(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="cart-summary">
//             <h3>Total: ${total}</h3>
//             <button className="checkout-btn" onClick={proceedToCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;





// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import './Cart.css';  // Import CSS

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const navigate = useNavigate();

//   // Load cart from localStorage
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartItems);
//     calculateTotal(cartItems);
//   }, []);

//   // Function to remove item from the cart
//   const removeItemFromCart = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//     calculateTotal(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
//   };

//   // Function to calculate the total price of all products in the cart
//   const calculateTotal = (cartItems) => {
//     const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
//     setTotal(totalPrice.toFixed(2)); // Set the total price
//   };

//   // Proceed to Checkout
//   const proceedToCheckout = () => {
//     navigate("/checkout"); // Redirect to checkout page
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cart.length > 0 ? (
//         <div>
//           <ul className="cart-item-list">
//             {cart.map((item, index) => (
//               <li key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>{item.price}</p>
//                 </div>
//                 <button className="remove-item-btn" onClick={() => removeItemFromCart(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="cart-summary">
//             <h3>Total: ${total}</h3>
//             <button className="checkout-btn" onClick={proceedToCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Cart.css';  // Import CSS
// import NavBar from '../Navbar/Navbar';
// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const navigate = useNavigate();

//   // Load cart from localStorage
//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(cartItems);
//     calculateTotal(cartItems);
//   }, []);

//   // Function to remove item from the cart
//   const removeItemFromCart = (id) => {
//     const updatedCart = cart.filter(item => item.id !== id);
//     setCart(updatedCart);
//     calculateTotal(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
//   };

//   // Function to calculate the total price of all products in the cart
//   const calculateTotal = (cartItems) => {
//     const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
//     setTotal(totalPrice.toFixed(2)); // Set the total price
//   };

//   // Proceed to Checkout
//   const proceedToCheckout = () => {
//     navigate("/checkout"); // Redirect to checkout page
//   };

//   return (
//     <div className="cart-container">
//             <NavBar />
//       <h2> Your Cart</h2>
//       {cart.length > 0 ? (
//         <div className="cart-box">
//           <ul className="cart-item-list">
//             {cart.map((item, index) => (
//               <li key={index} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>{item.price}</p>
//                 </div>
//                 <button className="remove-item-btn" onClick={() => removeItemFromCart(item.id)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="cart-summary">
//             <h3>Total: ${total}</h3>
//             <button className="checkout-btn" onClick={proceedToCheckout}>
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;









// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import NavBar from '../Navbar/Navbar';
// import './Cart.css';

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const navigate = useNavigate();

//   // Load cart
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//     calculateTotal(storedCart);
//   }, []);

//   // Calculate total price
//   const calculateTotal = (items) => {
//     const sum = items.reduce((acc, item) => {
//       const price = parseFloat(item.price.replace('$', '')) || 0;
//       return acc + price;
//     }, 0);

//     setTotal(sum.toFixed(2));
//   };

//   // Remove item
//   const removeItemFromCart = (id) => {
//     const updated = cart.filter((item) => item.id !== id);
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//     calculateTotal(updated);
//   };

//   // Checkout
//   const proceedToCheckout = () => {
//     if (cart.length === 0) {
//       alert("Cart is empty");
//       return;
//     }
//     navigate("/checkout");
//   };

//   return (
//     <div className="cart-page">

//       {/* NAVBAR */}
//       <NavBar />

//       {/* HEADER */}
//       <div className="cart-header">
//         <h1>Your Shopping Cart 🛒</h1>
//         <p>Review your selected products before checkout</p>
//       </div>

//       {/* MAIN */}
//       <div className="cart-container">

//         {/* LEFT SIDE ITEMS */}
//         <div className="cart-items">

//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <h2>Your cart is empty</h2>
//               <p>Add some products to continue shopping</p>
//             </div>
//           ) : (
//             cart.map((item, index) => (
//               <div key={index} className="cart-card">

//                 <img src={item.image} alt={item.name} />

//                 <div className="cart-info">
//                   <h3>{item.name}</h3>
//                   <p className="price">{item.price}</p>
//                 </div>

//                 <button
//                   className="remove-btn"
//                   onClick={() => removeItemFromCart(item.id)}
//                 >
//                   Remove
//                 </button>

//               </div>
//             ))
//           )}

//         </div>

//         {/* RIGHT SIDE SUMMARY */}
//         <div className="cart-summary">

//           <h2>Order Summary</h2>

//           <div className="summary-box">
//             <p>Total Items: {cart.length}</p>
//             <h3>Total: ${total}</h3>
//           </div>

//           <button
//             className="checkout-btn"
//             onClick={proceedToCheckout}
//           >
//             Proceed to Checkout
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Cart;




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import NavBar from "../Navbar/Navbar";
// import "./Cart.css";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const navigate = useNavigate();

//   // LOAD CART
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//     calculateTotal(storedCart);
//   }, []);

//   // TOTAL CALCULATION (₹ + $ SAFE)
//   const calculateTotal = (items) => {
//     const sum = items.reduce((acc, item) => {
//       const price = parseFloat(item.price.replace(/[^\d.]/g, "")) || 0;
//       return acc + price;
//     }, 0);

//     setTotal(sum.toFixed(2));
//   };

//   // REMOVE ITEM (INDEX SAFE)
//   const removeItemFromCart = (index) => {
//     const updated = cart.filter((_, i) => i !== index);
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//     calculateTotal(updated);
//   };

//   // CHECKOUT
//   const proceedToCheckout = () => {
//     if (cart.length === 0) {
//       alert("Cart is empty");
//       return;
//     }
//     navigate("/checkout");
//   };

//   return (
//     <div className="cart-page">

//       <NavBar />

//       {/* HEADER */}
//       <div className="cart-header">
//         <h1>Your Shopping Cart 🛒</h1>
//         <p>Review your selected packages before checkout</p>
//       </div>

//       {/* MAIN */}
//       <div className="cart-container">

//         {/* LEFT SIDE */}
//         <div className="cart-items">

//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <h2>Your cart is empty</h2>
//               <p>Add packages or products to continue</p>
//             </div>
//           ) : (
//             cart.map((item, index) => (
//               <div key={index} className="cart-card">

//                 {/* IMAGE (optional fallback) */}
//                 {item.image && (
//                   <img src={item.image} alt={item.title || item.name} />
//                 )}

//                 <div className="cart-info">
//                   <h3>{item.title || item.name}</h3>
//                   <p className="price">{item.price}</p>

//                   {item.subtitle && (
//                     <p className="desc">{item.subtitle}</p>
//                   )}
//                 </div>

//                 <button
//                   className="remove-btn"
//                   onClick={() => removeItemFromCart(index)}
//                 >
//                   Remove
//                 </button>

//               </div>
//             ))
//           )}

//         </div>

//         {/* RIGHT SIDE SUMMARY */}
//         <div className="cart-summary">

//           <h2>Order Summary</h2>

//           <div className="summary-box">
//             <p>Total Items: {cart.length}</p>
//             <h3>Total: ₹{total}</h3>
//           </div>

//           <button
//             className="checkout-btn"
//             onClick={proceedToCheckout}
//           >
//             Proceed to Checkout
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Cart;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import NavBar from "../Navbar/Navbar";
// import "./Cart.css";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const navigate = useNavigate();

//   // LOAD CART
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//     calculateTotal(storedCart);
//   }, []);

//   // SAFE PRICE PARSER (MAIN FIX)
//   const getPriceValue = (price) => {
//     if (typeof price === "number") return price;

//     if (typeof price === "string") {
//       return Number(price.replace(/[^\d.]/g, "")) || 0;
//     }

//     return 0;
//   };

//   // TOTAL CALCULATION
//   const calculateTotal = (items) => {
//     const sum = items.reduce((acc, item) => {
//       return acc + getPriceValue(item.price);
//     }, 0);

//     setTotal(sum.toFixed(2));
//   };

//   // REMOVE ITEM
//   const removeItemFromCart = (index) => {
//     const updated = cart.filter((_, i) => i !== index);
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//     calculateTotal(updated);
//   };

//   // CHECKOUT
//   const proceedToCheckout = () => {
//     if (cart.length === 0) {
//       alert("Cart is empty");
//       return;
//     }
//     navigate("/checkout");
//   };

//   return (
//     <div className="cart-page">

//       <NavBar />

//       {/* HEADER */}
//       <div className="cart-header">
//         <h1>Your Shopping Cart 🛒</h1>
//         <p>Review your selected packages before checkout</p>
//       </div>

//       {/* MAIN */}
//       <div className="cart-container">

//         {/* LEFT SIDE */}
//         <div className="cart-items">

//           {cart.length === 0 ? (
//             <div className="empty-cart">
//               <h2>Your cart is empty</h2>
//               <p>Add packages or products to continue</p>
//             </div>
//           ) : (
//             cart.map((item, index) => (
//               <div key={index} className="cart-card">

//                 {item.image && (
//                   <img src={item.image} alt={item.title || item.name} />
//                 )}

//                 <div className="cart-info">
//                   <h3>{item.title || item.name}</h3>
//                   <p className="price">
//                     ₹ {getPriceValue(item.price)}
//                   </p>

//                   {item.subtitle && (
//                     <p className="desc">{item.subtitle}</p>
//                   )}
//                 </div>

//                 <button
//                   className="remove-btn"
//                   onClick={() => removeItemFromCart(index)}
//                 >
//                   Remove
//                 </button>

//               </div>
//             ))
//           )}

//         </div>

//         {/* RIGHT SIDE */}
//         <div className="cart-summary">

//           <h2>Order Summary</h2>

//           <div className="summary-box">
//             <p>Total Items: {cart.length}</p>
//             <h3>Total: ₹{total}</h3>
//           </div>

//           <button
//             className="checkout-btn"
//             onClick={proceedToCheckout}
//           >
//             Proceed to Checkout
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  // LOAD CART
  
  // eslint-disable-next-line
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  // SAFE PRICE CALCULATION
  const getPriceNumber = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      return parseFloat(price.replace(/[^\d]/g, "")) || 0;
    }
    return 0;
  };

  // TOTAL
  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => {
      return acc + getPriceNumber(item.price);
    }, 0);

    setTotal(sum);
  };

  // REMOVE ITEM
  const removeItemFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    calculateTotal(updated);
  };

  // CHECKOUT
  const proceedToCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="cart-page">

      <NavBar />

      <div className="cart-header">
        <h1>Your Cart 🛒</h1>
      </div>

      <div className="cart-container">

        <div className="cart-items">

          {cart.length === 0 ? (
            <h2>No items in cart</h2>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-card">

                {item.image && <img src={item.image} alt="" />}

                <div>
                  <h3>{item.title || item.name}</h3>
                  <p>₹{getPriceNumber(item.price)}</p>
                </div>

                <button onClick={() => removeItemFromCart(index)}>
                  Remove
                </button>

              </div>
            ))
          )}

        </div>

        <div className="cart-summary">
          <h2>Total: ₹{total}</h2>

          <button onClick={proceedToCheckout}>
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;