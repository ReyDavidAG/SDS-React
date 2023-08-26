import InputT from "./InputT";
import LabelT from "./LabelT";
import FmrHeader from "./FrmHeader";
import Btnfrm from "./Btnfrm";
import { useRef, useState } from "react";
const Frm = () => {
  const form = useRef(null);
  const [error, seterror] = useState("");
  const handSubmit = (e) => {
    e.preventDefault();
    seterror("");
    const data = new FormData(form.current);
    const { nombre, descripcion, precio } = Object.fromEntries([
      ...data.entries(),
    ]);

    !nombre.trim() || !descripcion.trim() || !precio.trim()
      ? seterror("Tienes que llenar todos los campos")
      : console.log(nombre, descripcion, precio);
  };
  return (
    <div className="w-3/4 bg-slate-100 rounded-lg flex-grow-2 justify-center">
      <FmrHeader text="Nuevo producto" />
      <div className="flex justify-center">
        <form className="h-fit w-3/4" onSubmit={handSubmit} ref={form}>
          <LabelT mame="nombre" text="Nombre" />
          <InputT ph="Nombre" id="nombre" name="nombre" />
          <LabelT mame="descripcion" text="Descripcion" />
          <textarea
            name="descripcion"
            id="descripcion"
            rows="2"
            placeholder="Descripcion"
            className="rounded-md shadow-sm pl-2 pt-1 w-full text-xs font-normal sm:text-sm md:text-base"
          />
          <LabelT mame="precio" text="Precio" />
          <InputT ph="Precio" id="precio" name="precio" />
          <Btnfrm
            btncolor="bg-emerald-700"
            btntext="Aceptar"
            btntype="submit"
          />
          <span className="text-red-700 text-xs">{error !== "" && error}</span>
        </form>
      </div>
    </div>
  );
};
export default Frm;
