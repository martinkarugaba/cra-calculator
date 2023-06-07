import { useGlobalContext } from '../context/context';

const Quote = () => {
  const { data } = useGlobalContext();
  const { quote } = data;

  return (
    <div className="mt-8">
      <p className="text-xl text-center italic w-[50ch]">{quote}</p>
    </div>
  );
};
export default Quote;
