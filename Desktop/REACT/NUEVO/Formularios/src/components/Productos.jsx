import PropTypes from "prop-types"
import Producto from "./Producto";
const Productos = ({productos, deleteProducto, updateProducto}) => {
    
    return (
        <div className="w-3/4">
            <ul className="">
                {productos.map((producto) =>(
                        <Producto key={producto.id} producto={producto} deleteProducto={deleteProducto} updateProducto={updateProducto}/>
                ))}
                {productos.length === 0 &&( 
                    <li className="divide-y border border-sky-700 hover:bg-gray-50   mb-2 p-3 rounded-lg text-center text-sky-700 font-bold">No hay productos</li>
                )}
            </ul>
        </div>
    );
};
Productos.propTypes ={
    productos: PropTypes.array.isRequired,
    deleteProducto: PropTypes.any.isRequired,
    updateProducto: PropTypes.any.isRequired
}
export default Productos;