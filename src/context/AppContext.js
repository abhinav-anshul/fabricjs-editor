import React, { createContext, useState } from "react";

export const AppContext = createContext({
  activeDragDropItem: null,
  setActiveDragDropItem: (value) => {},
});

export const AppProvider = ({ children }) => {
  const [activeDragDropItem, setActiveDragDropItem] = useState(null);

  const context = {
    activeDragDropItem,
    setActiveDragDropItem,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
