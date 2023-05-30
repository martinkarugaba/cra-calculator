import middleDigits, { firstRow, lastRow } from '../data/digits';
import SingleButton from './SingleButton';

const Buttons = () => (
  <div className="flex justify-start items-start flex-wrap w-[75%] h-auto">
    <div className="flex justify-start items-center w-[100%]">
      {firstRow.map((item) => (
        <SingleButton
          key={item.id}
          buttonName={item.text}
          bg="bg-slate-300"
          basis="basis-1/3"
        />
      ))}
    </div>
    {middleDigits.map((item) => {
      const { id, text } = item;
      return (
        <SingleButton
          key={id}
          buttonName={text}
          basis="basis-1/3"
          bg="bg-slate-300"
        />
      );
    })}
    <div className="w-[100%] flex justify-start items-center text-xs">
      {lastRow.map((item) => (
        <SingleButton
          key={item.id}
          buttonName={item.text}
          bg="bg-slate-300"
          basis={item.basis}
        />
      ))}
    </div>
  </div>
);

export default Buttons;
