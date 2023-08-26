import PropTypes from "prop-types"
const Btnfrm =(props)=>{
        return <button type={props.btntype} onClick={props.onclick} className={`py-2 px-3 w-1/3 sm:w-1/4 text-white text-xs sm:text-sm md:text-base lg:text-lg font-base rounded-lg ${props.btncolor} ${props.btnhover}`}>{props.btntext}</button>
};
Btnfrm.propTypes ={
    btntext: PropTypes.string.isRequired,
    btncolor: PropTypes.string.isRequired,
    btntype: PropTypes.string.isRequired,
    btnhover: PropTypes.string.isRequired,
    onclick: PropTypes.any
};
export default Btnfrm