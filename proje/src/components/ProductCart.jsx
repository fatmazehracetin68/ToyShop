import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation, useNavigate } from "react-router-dom";

const ProductCart = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img src={dt?.url} className="w-full h-full absolute reounded-md" />
      <div className="absolute left-0 bottom-0 bg-red-500 text-white w-full px-2">
        <div className="text-lg font-semibold">{dt?.name}</div>
        <div>{dt?.price}$</div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)} className="absolute top-0 right-0">
        <BsThreeDots color="white" size={24} />
      </div>
      {openEdit && (
        <div className="bg-black border border-white text-white absolute top-5 padding-2 text-sm right-2">
          <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className="cursor-pointer">
            Sil
          </div>
          <div onClick={updateFunc} className="cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCart;
