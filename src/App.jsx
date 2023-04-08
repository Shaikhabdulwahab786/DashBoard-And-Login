
import { ThemeProvider } from '@mui/material';
import './App.css'
import { Dashboard } from './components/Dashboard';
import Nvabar from './components/Nvabar'
import Slider from './components/Slider';
import Login from './components/Login';


function App() {
  

  return (
    <div className="App">
      
      <Nvabar />
      <Dashboard/>
      <Slider/>
      <Login/>
      
    </div>
  )
}

export default App
