import logo from './logo.svg';
import './App.css';


// this a react component
// a react component must start with capital letter
// because html tags are lower case by default
function MyButton() {
  return (
    // this is not html - but it is called jsx
    // your components should only return one element or <>...</> wrapper
    // In React, you specify a CSS class with className
    <button className='my-button'>I am a button</button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>hello from react</h1>
      {/* here is how you can use the component */}
      <MyButton/>
      <MyButton/>
    </div>
  );
}

// this specifies the the main component in the file
export default App;
