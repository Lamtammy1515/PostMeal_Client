import React, { useState } from "react";

function LikeButton() {
  const zero = 0;
  const [count, setCount] = useState(zero);
  return (
    <div >
      <button onClick={() => setCount(count + 1)}>Like {count}</button>
    </div>
  );
}
export default LikeButton;