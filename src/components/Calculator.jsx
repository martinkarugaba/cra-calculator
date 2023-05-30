import Digits from './Digits';
import Display from './Display';
import Operators from './Operators';

const Calculator = () => (
  <div className="w-[400px]">
    <Display />
    <div className="flex justify-between items-start">
      <Digits />
      <Operators />
    </div>
  </div>
);

export default Calculator;
