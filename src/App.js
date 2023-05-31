import Calculator from './components/Calculator';
import Error from './components/Error';
import Loading from './components/Loading';
import { useGlobalContext } from './context/context';

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
      <Calculator />
    </div>
  );
};

export default App;
