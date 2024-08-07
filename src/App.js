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

// conditional rendering
function AdminPanel() {
  return (
    <div>
      <h1>Admin Panel</h1>
    </div>
  );
}

function UserPanel() {
  return (
    <div>
      <h1>User Panel</h1>
    </div>
  );
}

function App() {

  let name = 'john';

  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  let isLoggedIn = true;

  return (
    <div className="App">
      {/* JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript 
      so that you can embed some variable from your code and display it to the user */}
      <h1>hello from react and { name }</h1>
      {/* here is how you can use the component */}
      <MyButton/>
      <MyButton/>

      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      
      {/* conditional rendering */}
      {isLoggedIn ? <AdminPanel/> : <UserPanel/>}
    </div>

    
  );
}

// this specifies the the main component in the file
export default App;
