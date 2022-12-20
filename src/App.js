import logo from './logo.svg';
import './App.css';
import Tasks from './tasks/Tasks'

// we can give any name but let's give it as "Tasks"

//sometimes automatically IDE will suggest
// Tasks.js is under tasks folder
// it will start with import keyword

// import we need to take the folder path into consideration
function App() {
  return (
    <Tasks/> 
  // now we're using this Tasks variable as a html tag, 
  // we can say it is our custom html tag we created
  );
}

export default App;
