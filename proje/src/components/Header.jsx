import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { sortingDataFunc } from "../redux/dataSlice";
import { searchDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-red-600 text-white px-4 py-3">
      <div className="text-3xl">OYUNCAKCIM</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg"
            name=""
            id=""
          >
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
            className="h-10 rounded-lg px-4"
            type="text"
            placeholder="Arama yapınız"
          ></input>
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-yellow-300 text-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
