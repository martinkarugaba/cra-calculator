import { useGlobalContext } from '../context/context';

const Display = () => {
  const { result } = useGlobalContext();
  const { next, total } = result;

  return (
    <>
      <div className="py-3 px-3 bg-slate-700 flex justify-end">
        <p className="text-4xl text-white font-medium">
          {next || total || 0}
        </p>
      </div>
    </>
  );
};

export default Display;
