import Image from "react-dom/client";

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
<Greeting name="Khuslen" />;


function ProfileCard({ name, age, hobby }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
}
<ProfileCard name="Alice" age={25} hobby="Reading" />;


function Box({ children }) {
  return <div>{children}</div>;
}
<Box>
  <p>This is inside the box</p>
</Box>;


import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}


import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}


import React, { useState } from "react";

function ToggleText() {
  const [isHello, setIsHello] = useState(true);

  return (
    <>
      <p>{isHello ? "Hello" : "Goodbye"}</p>
      <button onClick={() => setIsHello(!isHello)}>Toggle</button>
    </>
  );
}



