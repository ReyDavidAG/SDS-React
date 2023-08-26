import PropTypes from "prop-types"
const FmrHeader =(props)=>{
    return (
        <div className="w-full bg-teal-800 text-center rounded-t-lg shadow-b-xl py-1">
            <h1 className="text-sm sm:text-base md:text-lg font-semibold text-white">{props.text}</h1>
        </div>
    );
};
FmrHeader.propTypes ={
    text: PropTypes.string.isRequired,
};
export default FmrHeader