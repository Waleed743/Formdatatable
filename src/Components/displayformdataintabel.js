import React from "react";
import { useState } from "react/cjs/react.development";

function main(){
    const[tableData,setTableData] = useState([])
    const[formInputData,setformInputData] = useState(
        {
         Name:'',
         Address: '',
         Age: '',
         Gender: '',

        });
    const handleChange=(evnt)=>{
        const newInput=(data)=>({...data
        [evnt.target.name]:evnt.target.value})
        setformInputData(newInput)

    }
    const handleSubmit=(evnt) =>{
        event.preventDefault();
        const checkEmpptyInput =
        !Object.value(formInputData).every(res=>res==="")
        if(checkEmpptyInput)
        {
            const newData = (data)=>([...data,formInputData])
                setTableData(newData);
                const emptyInput={Name:'', Address:'', Age:'', Gender:''}
                setformInputData(emptyInput)
        }
    }
    return(
        <React.Fragment >
            <div className="container">
                <div className="row">
                    <div className="Col">
                        <FormInput handleChange={handleChange} formInputData=
                        {formInputData} handleAdd={handleAdd}/>
                    <table tableData={tableData}/>
                    </div>
                      <div className="col-sm-4"></div>
                </div></div>
        </React.Fragment>
    );

}
export default main;