// import { useState } from "react";

// export const useCounter = () => {
//   const [quantity, setQuantity] = useState(0);

//   const increment = () => setQuantity((valor) => valor + 1);

//   const decrement = () => setQuantity((valor) => valor - 1);

//   const reset = () => setQuantity(0);

//   return [
//     quantity,
//     increment,
//     decrement,
//     reset,
//   ];
// };

import { useState } from "react";

export const useCounter = () => {
  const [value, setValue] = useState(0);

  const quantity = {
    value,
    increment: () => setValue(value + 1),
    decrement: () => setValue(value - 1),
    reset: () => setValue(0),
  };

  return quantity
};
