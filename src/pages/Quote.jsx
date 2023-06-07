import { useGlobalContext } from '../context/context';

const Quote = () => {
  const { data } = useGlobalContext();
  const { quote } = data;

  return (
    <div className="pt-40 flex justify-center items-center">
      <p className="text-xl text-center text-slate-700 italics font-medium w-[50ch]">{quote}</p>
    </div>
  );
};
export default Quote;
