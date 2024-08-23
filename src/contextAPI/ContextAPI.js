import React, { Children, createContext, useState } from 'react';
import Display from './Display';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create the context
const store = createContext();

const ContextAPI = ({children}) => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Wireless Earbuds",
            description: "High-quality wireless earbuds with noise cancellation.",
            price: 49.99,
            imageUrl: "https://via.placeholder.com/150x150?text=Wireless+Earbuds",
            category: "Electronics",
        },
        {
            id: 2,
            name: "Smart Watch",
            description: "Stylish smartwatch with health monitoring features.",
            price: 99.99,
            imageUrl: "https://via.placeholder.com/150x150?text=Smart+Watch",
            category: "Wearables",
        },
        // Other products...
    ]);


    // const [dark , setDark] = useState(false)


    return (
        <store.Provider value={[data, setData]}>
           {children}
        </store.Provider>
    );
}

export {ContextAPI, store};
