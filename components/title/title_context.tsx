"use client"// Because we're inside a server component

import React, { createContext, useState, useContext } from 'react';

// Create the context
const TitleContext = createContext(undefined);

// Create a provider component
export const TitleContextProvider = ({ children }) => {
    const [title, setTitle] = useState(undefined);
    // Define any functions or values you want to provide
    const value = {
        title,
        setTitle,
    };
    return <TitleContext.Provider value={value}>{children}</TitleContext.Provider>;
};

// Export the context
export const useTitleContext = () => useContext(TitleContext)
