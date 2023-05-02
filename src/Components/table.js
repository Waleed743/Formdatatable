function Table({tableData})
{
    return(
        <table className="table">
            <thead>
               <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
                <th>Gender</th>
                </tr>
            </thead>
        <tbody>
            {
                tableData.map((data,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>data.Name</td>
                            <td>data.Address</td>
                            <td>data.Age</td>
                            <td>data.Gender</td>

                        </tr>
                    )
                })
            }
        </tbody>
        </table>
    )
}
export default Table;