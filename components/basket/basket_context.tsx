"use client";// Because we're inside a server component

import React, { createContext, useState, useContext } from 'react';

// Create the context
const BasketContext = createContext(undefined);

// Create a provider component
export const BasketContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    function doIncrease() {
        setCount(count + 1);
    }
    function doDecrease() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    // Define any functions or values you want to provide
    const value = {
        count,
        setCount,
        doIncrease,
        doDecrease
    };
    return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>;
};

// Export the context
export const useBasketContext = () => useContext(BasketContext)
