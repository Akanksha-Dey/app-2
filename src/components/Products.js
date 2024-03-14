import React, { useState } from 'react';

const Products = () => {
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    image: ''
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 10.99,
      image: process.env.PUBLIC_URL + '/images/pizza_2.jpg'
    },
    // Add more products
    {
      id: 1,
      name: 'Corn Cheese Pizza',
      price: 12.99,
      image: process.env.PUBLIC_URL + '/images/pizza_3.jpeg'
    },

    {
      id: 1,
      name: 'Heart Pizza',
      price: 14.99,
      image: process.env.PUBLIC_URL + '/images/pizza_4.jpeg'
    },
  

    {
      id: 1,
      name: 'Tomato Olive Pizza',
      price: 9.99,
      image: process.env.PUBLIC_URL + '/images/pizza_5.jpeg'
    },

    {
      id: 1,
      name: 'Origano Pizza',
      price: 5.99,
      image: process.env.PUBLIC_URL + '/images/pizza_6.jpeg'
    },

    {
      id: 1,
      name: 'Onion Pizza',
      price: 5.99,
      image: process.env.PUBLIC_URL + '/images/pizza_7.jpeg'
    },

    {
      id: 1,
      name: 'Overloaded Pizza',
      price: 20.99,
      image: process.env.PUBLIC_URL + '/images/pizza_8.jpeg'
    },

    {
      id: 1,
      name: 'Unique Pizza',
      price: 18.99,
      image: process.env.PUBLIC_URL + '/images/pizza_9.jpeg'
    },

    {
      id: 1,
      name: 'Chessy Cheese Pizza',
      price: 12.99,
      image: process.env.PUBLIC_URL + '/images/pizza_10.jpeg'
    },

    {
      id: 1,
      name: 'Sheif Pizza',
      price: 28.99,
      image: process.env.PUBLIC_URL + '/images/pizza_11.jpeg'
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.price && newItem.image) {
      const updatedProducts = [...products, { id: products.length + 1, ...newItem }];
      setProducts(updatedProducts);
      setNewItem({ name: '', price: '', image: '' });
    }
  };

  return (
    <div>
      <h1 className='Menu'>MENU CARD</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="add-item-form">
        <div className="card">
          <div className="card-body">
            <input type="text" name="name" value={newItem.name} placeholder="Item Name" onChange={handleInputChange} />
            <input type="number" name="price" value={newItem.price} placeholder="Item Price" onChange={handleInputChange} />
            <input type="file" name="image" accept="image/*" onChange={(e) => setNewItem({ ...newItem, image: e.target.files[0] })} />
            <button onClick={handleAddItem}>Add Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
