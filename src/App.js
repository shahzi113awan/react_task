import './App.css';
import Layout from '../src/components/@core/layouts/layout-wrapper';
import  Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
           
      </Layout>

    </div>
  );
}

export default App;
