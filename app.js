const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h3 tag")
  );
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(parent);
  