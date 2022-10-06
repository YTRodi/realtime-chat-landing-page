import { useState } from "react";

function App() {
  return (
    <div>
      <p style={{ fontFamily: "Poppins", fontWeight: 400 }}>regular</p>
      <p style={{ fontFamily: "Poppins", fontWeight: 500 }}>medium</p>
      <p style={{ fontFamily: "Poppins", fontWeight: 600 }}>semibold</p>
      <p style={{ fontFamily: "Poppins", fontWeight: 700 }}>bold</p>

      <h1 className="border">Let’s Connect with Your Visitors in Real Time</h1>
      <h2 className="border">Chat with visitors while they browse your site</h2>
      <h3 className="border">Online Shop</h3>
      <h4 className="border">samantha@email.com</h4>
      <h5 className="border">
        Hi Karen, I’m wandering is it possible to order custom drawing?
      </h5>
    </div>
  );
}

export default App;

// TODO:
/**
 * [x] sass (variables, reset and typography)
 * [] relative paths tsconfig.json
 * [] eslint + prettier
 */
