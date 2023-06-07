import { Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './context/context';
import Error from './components/Error';
import Loading from './components/Loading';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';

const App = () => {
  const { loading, error } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="h-[100vh] w-screen flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
};

export default App;
