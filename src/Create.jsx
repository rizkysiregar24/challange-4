

function Create () {
   return (
     <>
       <div className="container">
         <div className="row">
           <div className="col-10 col-md-8 mx-auto mt-4">
             <h3 className="text-capitalize text-center">TodoInput</h3>
             <div className="card card-body my-3">
               <form className="row">
                 <div className="input-group">
                   <div className="input-group-prepend">
                     <div className="input-group-text bg-info text-white">
                       <i className="fas fa-book" />
                       <input className="row"></input>
                     </div>
                   </div>
                 </div>
                 <button onClick={""} className="btn btn-info mt-3 col-sm-6 ">
                   Submit
                 </button>
               </form>
             </div>
           </div>
         </div>
       </div>
       <div className="row center">
         <form className="todo-form">
           <button type="submit" className="todo-form-logo">
             A
           </button>
           <input className="todo-form-input" placeholder="Input Data" />
         </form>
         <button type="submit" className="todo-form-button">
           Add Todo List
         </button>
       </div>
     </>
   ); 
}

export default Create;