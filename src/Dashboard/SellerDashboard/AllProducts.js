import React, { useState } from "react";
import './AllProducts.css';
import shoe from '../../Form/images/shoe2.jpeg';
import { Link } from 'react-router-dom';
import Productpage from './ProductPage';
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onViewProduct }) => {
  const { image, name, price } = product;
  const [menudata, setMenudata] = useState("ProfileDetails");
  const navigate = useNavigate();


  const handleViewProduct = () => {
    onViewProduct(product);
  };


  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px',marginRight: '10px',marginTop : '50px',width:'300px' }}>
      <img src={shoe} alt={name} style={{ width: '100%', marginBottom: '8px' }} />
      <h4>{name}</h4>
      <p>${price}</p>
     
      <button onClick={handleViewProduct}>View Product</button>

   
    </div>
  );
};

const AllProducts = ({ onViewProduct }) => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      image: 'https://example.com/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      image: 'https://example.com/product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 49.99,
      image: 'https://example.com/product4.jpg',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onViewProduct={onViewProduct} />
      ))}
    </div>
    
  );
};

export default AllProducts;
