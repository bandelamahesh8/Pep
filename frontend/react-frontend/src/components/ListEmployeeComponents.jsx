import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    addEmployee() {
        this.props.history.push('/add-employee');
    }

    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`)
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    render() {
        return (
            <div className="container-custom animate-fade-in">
                <div className="action-bar">
                    <h2 className="text-gradient" style={{ margin: 0 }}>Team Directory</h2>
                    <button className="btn btn-primary" onClick={this.addEmployee}>
                        + Add New Employee
                    </button>
                </div>

                <div className="glass-effect" style={{ padding: '1.5rem', overflow: 'hidden' }}>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Employee</th>
                                    <th>Email Address</th>
                                    <th className="text-right">Management</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                            <tr key={employee.id}>
                                                <td>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                        <div style={{
                                                            width: '40px',
                                                            height: '40px',
                                                            borderRadius: '10px',
                                                            background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontWeight: '600',
                                                            color: 'white'
                                                        }}>
                                                            {employee.firstName.charAt(0)}{employee.lastName.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div style={{ fontWeight: '600' }}>{employee.firstName} {employee.lastName}</div>
                                                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ID: #{employee.id}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span style={{ color: 'var(--text-muted)' }}>{employee.emailId}</span>
                                                </td>
                                                <td className="text-right">
                                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                                                        <button onClick={() => this.viewEmployee(employee.id)} className="btn btn-info btn-sm">View</button>
                                                        <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info btn-sm">Edit</button>
                                                        <button onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger btn-sm">Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    {this.state.employees.length === 0 && (
                        <div className="text-center" style={{ padding: '3rem', color: 'var(--text-muted)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
                            <p>No employees found. Start by adding one!</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponents;
