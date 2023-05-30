import PropTypes from 'prop-types';

const SingleButton = ({ basis, bg, buttonName }) => (
  <button
    type="button"
    className={`${basis} flex justify-center items-center ${bg} hover:bg-slate-400 text-black h-[60px] border-r border-t text-xs cursor-pointer`}
  >
    {buttonName}
  </button>
);
export default SingleButton;

SingleButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  basis: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
