import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Lace Wig", price: 120, qty: 2 },
    { id: 2, name: "Hair Extensions", price: 45, qty: 1 },
  ]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <p key={item.id}>{item.qty} × {item.name} — ${item.price * item.qty}</p>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}
