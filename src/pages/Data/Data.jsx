
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Data = () => {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState("");
  const [refetch, setRefetch] = useState(true);
  const [id, setId] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigasi = useNavigate() 

  function ADDuser(e) {
    axios
      .post(`https://fake-api-coba.herokuapp.com/todos`, {
        name: nama,
      })
      .then((response) => setRefetch(true));
  }

  function UbahData(e) {
    e.preventDefault();
    axios
      .patch(`https://fake-api-coba.herokuapp.com/todos/${id}`, {
        name: nama,
      })
      .then(() => {
        setRefetch(true);
        setId("");
        setNama("");
      });
  }

  function handleHapusdata(id) {
    axios.delete(`https://fake-api-coba.herokuapp.com/todos/${id}`).then((response) => setRefetch(true));
  }

  function getUsers() {
    axios.get("https://fake-api-coba.herokuapp.com/todos").then((response) => {
      setData(response.data);
      setRefetch(false);
    });
  }

  useEffect(() => {
    if (refetch) getUsers();
  }, [refetch]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-4">
            <h3 className="text-capitalize text-center">TodoSearch</h3>

            <div className="card card-body my-3">
              <form className="row">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text bg-info text-white">
                      <i className="fas fa-book" />
                    </div>
                  </div>
                  <input className="col-sm-5" type="text" placeholder="Inputkan Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                </div>
                <div class="row justify-content-between">
                  <button onClick={""} className="btn btn-info mt-3 col-sm-6 ">
                    Serach
                  </button>
                  {id ? (
                    <button onClick={UbahData} className={`btn btn-info mt-3 col-sm-3 `}>
                      Edit{" "}
                    </button>
                  ) : (
                    <button onClick={(e)=>{
                        e.preventDefault()
                        navigasi("/Tambah")
                    }} className={`btn btn-info mt-3 col-sm-3 `}>
                      Add New Task
                    </button>
                  )}
                </div>
              </form>
            </div>

            <h3 className="text-center">Todo List</h3>
            <div className="row justify-content-between">
              <button type="button" className="btn btn-info btn-block mt-1 col-md-3" onClick={() => ""}>
                All
              </button>
              <button type="button" className="btn btn-info btn-block mt-1 col-md-3" onClick={() => ""}>
                {" "}
                Done{" "}
              </button>
              <button type="button" className="btn btn-info btn-block mt-1 col-md-3" onClick={() => ""}>
                {" "}
                Todo{" "}
              </button>
            </div>
            <ul className="list-group my-5">
              {data.map((user) => (
                <div key={user.id}>
                  <li className="list-group-item d-flex justify-content-between my-2">
                    <h6 className="mt-1 mb-0 align-middle">{user.task}</h6>

                    <div className="todo-icon">
                      <span>
                        <input
                          type="checkbox"
                          checked={user.complete}
                          onChange={() => {
                            axios
                              .patch(`https://fake-api-coba.herokuapp.com/todos/${user.id}`, {
                                complete: !user.complete,
                              })
                              .then(() => {
                                setRefetch(true);
                              }); 
                           }}
                        />
                      </span>

                      <span
                        className="mx-2 text-warning"
                        onClick={() => {
                          setNama(user.name);
                          setId(user.id);
                        }}
                      >
                        <i className="fas fa-pen" />
                      </span>
                      <span className="mx-2 text-danger" onClick={() => handleHapusdata(user.id)}>
                        <i className="fas fa-trash" />
                      </span>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
