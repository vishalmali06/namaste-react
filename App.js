import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () =>
    <h1 className="head" tabIndex="5">Namste React using JSX 🚀</h1>

const HeadingComponet = () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        <h1 className="heading">Namaste React Function Componet</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponet />);