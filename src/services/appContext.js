import React from 'react';

export const AppContextIntialValue = {
  ingredients: null,
  modal: null,
  constructor: {
    bun: 0,
    positions: [4, 6, 8, 4, 6, 8, 5],
  }
}

export const AppContext = React.createContext(AppContextIntialValue);
