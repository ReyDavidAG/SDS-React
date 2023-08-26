import { useState } from "react";
import FrmC from "../components/FrmControlado"
import Productos from "../components/Productos";

const initialStateProductos=[
    {
        id: 1,
        nombre: "Agua",
        descripcion: "Ta rica",
        precio: 15
    },
    {
        id: 2,
        nombre: "Pepsi",
        descripcion: "Con una chilaca pa",
        precio: 17
    },
    {
        id: 3,
        nombre: "Boing",
        descripcion: "Con una chilaca x2",
        precio: 20
    },
];

const Ingresar=()=>{
    const [productos, setProductos] = useState(initialStateProductos)
    const addProducto = producto =>{
        setProductos([...productos, producto])
    }
    const deleteProducto = id =>{
        const newArray = productos.filter(producto => producto.id !== id)
        setProductos(newArray)
    }
    const updateProducto = id =>{
        const newArray = productos.map(producto=>{
            if (producto.id === id) {
                //setProductos([...productos, producto])
                return producto
            }
            return producto
        })
        setProductos(newArray)
    }
    return (    
        <div className="">
            <div className="flex justify-center">
                <FrmC addProducto={addProducto} updateProdcuto={updateProducto}/>
            </div> 
            <div className="flex justify-center mt-4">
                <Productos productos={productos} deleteProducto={deleteProducto} updateProducto={updateProducto}/>
            </div>
            
        </div>
    );
};
export default Ingresar;