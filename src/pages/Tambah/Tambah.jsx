import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Tambah = () => {

 const [nama, setNama] = useState("");
 const navigasi = useNavigate(); 

 function tambahTodo()
    {
      axios
        .post(`http://localhost:3000/todos`, {
          task: nama,
        })
        .then(() => {
           navigasi("/");
        });
    }
  return (
    <div>
      <h1>TODO INPUT</h1>
      <input type="text" placeholder="Tambah Todo" value={nama} onChange={(e) => setNama(e.target.value)} />
      <button onClick={tambahTodo}>SUBMIT</button>
    </div>
  );
};

export default Tambah;
