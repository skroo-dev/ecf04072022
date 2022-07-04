import Router from './modules/Routes'
import './App.css'
import LoginProvider from './context/LoginContext'
import Trolle from './components/Trollé'

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Trolle />
        <Router />
      </LoginProvider>
    </div>
  )
}

export default App
