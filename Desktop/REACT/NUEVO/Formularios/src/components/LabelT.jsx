import PropTypes from "prop-types"
const LabelT =(props)=>{
        return <label htmlFor={props.mame} className="text-xs font-normal sm:text-sm md:text-base ml-px mb-1">{props.text}</label>
};
LabelT.propTypes ={
    mame: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
export default LabelT 