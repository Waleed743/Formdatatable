function FormInput({hanleChange,formInputData,handleAdd}){
return(
    <div className="form-row row">
        <div className="col">
            <input type="text" onChange={hanleChange} value={formInputData.Name} name="Name" className="form-control" placeholder="Name" /> 
        </div>
        <div className="col">
            <input type="text" onChange={hanleChange} value={formInputData.Name} name="Address" className="form-control" placeholder="Address" /> 
        </div>
        <div className="col">
            <input type="text" onChange={hanleChange} value={formInputData.Name} name="Age" className="form-control" placeholder="Name" /> 
        </div>
        <div className="col">
            <input type="text" onChange={hanleChange} value={formInputData.Name} name="Gender" className="form-control" placeholder="Name" /> 
        </div>
        <div className="col">
            <input type="Add" onClick={handleAdd} className="btn btn-primary" /> 
        </div>
    </div>
)

}