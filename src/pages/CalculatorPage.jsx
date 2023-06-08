import CalculatorApp from '../components/CalculatorApp';

const CalculatorPage = () => (
  <div className="flex justify-between items-start px-16 py-10">
    <h1 className="text-4xl font-semibold text-amber-600">
      Let&lsquo;s do some maths!
    </h1>
    <CalculatorApp />
  </div>
);

export default CalculatorPage;
