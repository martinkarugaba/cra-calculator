import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { useGlobalContext } from './context/context';
import Error from './components/Error';
import Loading from './components/Loading';

// pages
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Quote from './pages/Quote';
import ErrorPage from './pages/ErrorPage';

// layouts
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="calculator" element={<CalculatorPage />} />
      <Route path="quote" element={<Quote />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

const App = () => {
  const { loading, error } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
