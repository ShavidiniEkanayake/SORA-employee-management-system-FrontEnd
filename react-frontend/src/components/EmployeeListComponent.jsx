import React, { Component } from 'react';

class EmployeeListComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
    }
    
    render() {
        return (
            <div>
                <h1>AAAAAAAAA</h1>
                <h2 className="text-center">Employees List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" > Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Address</th>
                                    <th> Phone Number</th>
                                    <th> Email</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> {employee.name} </td>   
                                             <td> {employee.address}</td>
                                             <td> {employee.number}</td>
                                             <td> {employee.email}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>
        );
    }
}

export default EmployeeListComponent;