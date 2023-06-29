import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Heading = () => {
  return (
    <div>
      <div className="flex item-center mt-10 ml-5 ">
        <Link to="/">
          <h4 className="text-yellow-200 font-bold text-2x1">Gorditas y Taquitos "La Chatis"</h4>
        </Link>     

        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to="/Add">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <IoMdAdd className="mr-2" />
              Nuevo Pedido
            </button>
          </Link>
        </div>
      </div>     
    </div>
    
  );
};

export default Heading;
