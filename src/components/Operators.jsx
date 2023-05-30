import operators from '../data/operators';
import SingleButton from './SingleButton';

const Operators = () => (
  <div className="flex flex-col justify-end w-[25%] h-[300px]">
    {operators.map((item) => {
      const { id, text } = item;
      return (
        <SingleButton
          key={id}
          buttonName={text}
          basis="basis-1/3"
          bg="bg-orange-400"
        />
      );
    })}
  </div>
);

export default Operators;
