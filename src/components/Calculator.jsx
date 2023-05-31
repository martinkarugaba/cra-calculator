import { useGlobalContext } from '../context/context';
import Digits from './Digits';
import Display from './Display';
import Operators from './Operators';

const Calculator = () => {
  const { data } = useGlobalContext();
  const { quote } = data;
  return (
    <>
      <div className="mb-8">
        <p className="text-center text-xl w-[50ch]">{quote}</p>
      </div>
      <div className="w-[400px]">
        <Display />
        <div className="flex justify-between items-start">
          <Digits />
          <Operators />
        </div>
      </div>
    </>
  );
};

export default Calculator;
