import { Item } from "./Item";
import { useCounter } from "./hook/useCounter";

// export const Cart = () => {

//   const [ quantity, increment, decrement, reset ] = useCounter();


//   return (
//     <div>
//       <h1>Meu carrinho</h1>
//       <Item
//         label="My produto massa"
//         quantity={quantity}
//         onIncrement={increment}
//         onDecrement={decrement}
//         onReset={reset}
//         />
//     </div>
//   );
// };


export const Cart = () => {
  const quantity = useCounter();
 console.table(quantity)
  return (
    <div className="Cart">
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity.value}
        onIncrement={quantity.increment}
        onDecrement={quantity.decrement}
        onReset={quantity.reset}
      />
    </div>
  );
};
