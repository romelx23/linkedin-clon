import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useSearchUser } from "../../hooks/useSearchUser";

export const SearchUsers = () => {
  const navigate=useNavigate();
  const [values, handleForm] = useForm({
    search: "",
  });
  const [user, setUser] = useState([]);
  const { search } = values;
  const { users } = useSearchUser();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    if(users.length !== 0){
      const filterNames = users.filter(
        (el) => el.displayName.toLowerCase().includes(search.toLowerCase()) 
      );
        setUser(filterNames);
    // console.log(users);
    // console.log(filterNames);
    }
  };
  const handleProfile=(uid='')=>{
    navigate(`/detail/profile/${uid}`);
  }
  return (
    <div className="relative z-40">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          name="search"
          autoComplete="off"
          onChange={handleForm}
          className="p-2 pl-7 rounded text-black"
        />
      </form>
      <div className="w-full absolute">
        {
          user.length>=0 ?
          user.map((el) => (
            <div onClick={()=>handleProfile(el.id)} key={el.id} className="flex bg-blue-400 px-2 py-2 border-t hover:cursor-pointer hover:bg-blue-500">
              <img src={el.photoURL} alt="avatar" className="w-10 h-10 rounded-full" />
              <p>{el.displayName}</p>
            </div>
          ))
          :<div>No hay resultados</div>
        }
      </div>
    </div>
  );
};
