import Digits from './Digits';
import Display from './Display';
import Operators from './Operators';

const CalculatorApp = () => (
  <>
    <div className="w-[600px]">
      <Display />
      <div className="flex justify-between items-start">
        <Digits />
        <Operators />
      </div>
    </div>
  </>
);

export default CalculatorApp;
