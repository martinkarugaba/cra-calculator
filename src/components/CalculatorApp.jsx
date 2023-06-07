import { useGlobalContext } from '../context/context';
import Digits from './Digits';
import Display from './Display';
import Operators from './Operators';

const CalculatorApp = () => {
  const { data } = useGlobalContext();
  const { quote } = data;
  return (
    <>
      <div className="w-[400px]">
        <Display />
        <div className="flex justify-between items-start">
          <Digits />
          <Operators />
        </div>
      </div>
      <div className="mt-8">
        <p className="text-xl text-center italic w-[50ch]">{quote}</p>
      </div>
    </>
  );
};

export default CalculatorApp;
