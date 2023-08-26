import InputT from "./InputT";
import LabelT from "./LabelT";
import FmrHeader from "./FrmHeader";
import Btnfrm from "./Btnfrm";
import { useState } from "react";
import Swal from "sweetalert2";
import PropTypes from "prop-types"
const FrmC = ({addProducto, updateProdcuto}) => {
  const[producto, setProducto] = useState({
    nombre:'',
    descripcion:'',
    precio:'' 
  });
  const {nombre, descripcion, precio} = producto;
  
  const handSubmit = (e) => {
    e.preventDefault();
    if(!nombre.trim() || !descripcion.trim() || 
    !precio.trim())
    {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer:'<a href="">Why do I have this issue?</a>'
        })
    }
    updateProdcuto({
      nombre: nombre,
      descripcion: descripcion,
      precio: precio
    })
    addProducto({
        id: Date.now(),
        ...producto,
        nombre: nombre
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado correctamente',
      showConfirmButton: false,
      timer: 1000
    });
  };
  
  const handleChange =(e) =>{
    const {name, type, checked, value} = e.target;
    setProducto({
      ...producto,
      [name]:
        type ===""
        ? checked
        : value
    });
  };
  return (
    <div className="w-3/4 bg-slate-100 rounded-lg flex-grow-2 justify-center">
      <FmrHeader text="Nuevo producto" />
      <div className="flex justify-center mt-4">
        <form className="w-3/4" onSubmit={handSubmit}>
          <LabelT mame="nombre" text="Nombre" />
          <InputT ph="Nombre" id="nombre" name="nombre" value={nombre} onchange={handleChange}/>
          <LabelT mame="descripcion" text="Descripcion" />
          <textarea
            name="descripcion"
            id="descripcion"
            rows="2"
            placeholder="Descripcion"
            className="rounded-md shadow-sm pl-2 pt-1 w-full text-xs font-normal sm:text-sm md:text-base"
            value={descripcion}
            onChange={handleChange}
          />
          <LabelT mame="precio" text="Precio" />
          <InputT ph="Precio" id="precio" name="precio" value={precio} onchange={handleChange}/>
          <div className="flex justify-end mb-4">
          <Btnfrm
            btncolor="bg-emerald-700"
            btntext="Aceptar"
            btntype="submit"
            btnhover="hover:bg-emerald-600"
          />
          </div>
        </form>
      </div>
    </div>
  );
};
FrmC.propTypes ={
  addProducto: PropTypes.any.isRequired,
  updateProdcuto: PropTypes.any.isRequired
};
export default FrmC;
