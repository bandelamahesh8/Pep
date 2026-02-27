import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        EmployeeService.updateEmployee(employee, this.state.id).then(res => {
            this.props.history.push('/employees');
        });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    render() {
        const inputStyle = {
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            color: 'white',
            padding: '0.75rem 1rem'
        };

        const labelStyle = {
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            fontWeight: '500',
            marginBottom: '0.5rem',
            display: 'block'
        };

        return (
            <div className="container-custom animate-fade-in">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="glass-effect card-container">
                            <h2 className="text-gradient text-center mb-4">Update Employee</h2>
                            <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                Modifying record for <strong>{this.state.firstName} {this.state.lastName}</strong>
                            </div>
                            <form>
                                <div className="form-group mb-4">
                                    <label style={labelStyle}>First Name</label>
                                    <input 
                                        placeholder="Enter first name" 
                                        name="firstName" 
                                        className="form-control" 
                                        style={inputStyle}
                                        value={this.state.firstName} 
                                        onChange={this.changeFirstNameHandler} 
                                    />
                                </div>

                                <div className="form-group mb-4">
                                    <label style={labelStyle}>Last Name</label>
                                    <input 
                                        placeholder="Enter last name" 
                                        name="lastName" 
                                        className="form-control" 
                                        style={inputStyle}
                                        value={this.state.lastName} 
                                        onChange={this.changeLastNameHandler} 
                                    />
                                </div>

                                <div className="form-group mb-5">
                                    <label style={labelStyle}>Email Address</label>
                                    <input 
                                        placeholder="Enter email address" 
                                        name="emailId" 
                                        className="form-control" 
                                        style={inputStyle}
                                        value={this.state.emailId} 
                                        onChange={this.changeEmailIdHandler} 
                                    />
                                </div>

                                <div className="d-flex gap-3">
                                    <button className="btn btn-primary flex-grow-1" onClick={this.updateEmployee}>
                                        Update Details
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;
