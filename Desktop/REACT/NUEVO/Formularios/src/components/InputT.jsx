import PropTypes from "prop-types"
const InputT =(props)=>{
        return <input type="text" name={props.name} id={props.id} placeholder={props.ph} value={props.value} onChange={props.onchange} className=" text-xs font-normal sm:text-sm md:text-base rounded-md pl-2 py-1 shadow-sm w-full mb-2"/>
};
InputT.propTypes ={
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    ph: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onchange: PropTypes.any.isRequired
};
export default InputT