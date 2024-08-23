import React, { useState, useContext } from 'react';
import { store } from './ContextAPI';

const AddData = () => {
  const [data, setData] = useContext(store);

  // State to manage the form inputs
  const [newProduct, setNewProduct] = useState({
    id: data.length + 1, 
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    category: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, newProduct]);

    setNewProduct({
      id: data.length + 2, 
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      category: ''
    });
  };

  return (
    <div className='mb-5'>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={newProduct.name}
          placeholder='Product Name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={newProduct.description}
          placeholder='Description'
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={newProduct.price}
          placeholder='Price'
          onChange={handleChange}
        />
        <input
          type='text'
          name='imageUrl'
          value={newProduct.imageUrl}
          placeholder='Image URL'
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={newProduct.category}
          placeholder='Category'
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-primary mt-2'>Add Product</button>
      </form>
    </div>
  );
};

export default AddData;
