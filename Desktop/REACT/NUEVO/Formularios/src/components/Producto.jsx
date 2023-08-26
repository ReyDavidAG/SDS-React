import PropTypes from "prop-types"
import Btnfrm from "./Btnfrm";
const Producto = ({producto, deleteProducto, updateProducto}) =>{
    const {id, nombre, descripcion, precio} = producto
    return(
        <>
        <li className="border  rounded-xl divide-y mb-2 p-3">
            <div className="flex justify-between">
                <div className="w-4/5">
                    <h1 className="text-base font-semibold md:text-lg lg:text-xl">{nombre}</h1>
                    <p className="text-xs md:text-sm lg:text-base">{descripcion}</p>
                    <div className="flex justify-between">
                        <Btnfrm onclick={()=>deleteProducto(id)} btncolor="bg-red-700" btntext="Eliminar" btntype="" btnhover="hover:bg-red-600"/>
                        <Btnfrm onclick={()=>updateProducto(id)} btncolor="bg-yellow-500" btntext="Actualizar" btntype="" btnhover="hover:bg-yellow-400"/>           
                    </div>
                </div>
                <div>
                    <span className=" font-semibold text-sm bg-green-700 text-white rounded-full p-2">${precio}</span>
                </div>
            </div>
        </li>
        </>
    ); 
    
}
Producto.propTypes = {
    producto: PropTypes.any.isRequired,
    deleteProducto: PropTypes.any.isRequired,
    updateProducto: PropTypes.any.isRequired
}
export default Producto
