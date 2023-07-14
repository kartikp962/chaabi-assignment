import './App.css';
import Header from './components/organisms/Header/Header'
import SideNav from './components/organisms/SideNav/SideNav'
import Dashboard from './pages/Dashboard/Dashboard'
function App() {
  return (
    <div className="App">
      <SideNav />
      <div className='content'>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
