import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
    }

    goBack() {
        this.props.history.push('/employees');
    }

    render() {
        const detailRowStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        };

        const labelStyle = {
            color: 'var(--text-muted)',
            fontWeight: '500'
        };

        const valueStyle = {
            fontWeight: '600',
            color: 'white'
        };

        return (
            <div className="container-custom animate-fade-in">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="glass-effect card-container text-center">
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                color: 'white',
                                margin: '0 auto 1.5rem',
                                fontWeight: '700',
                                boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)'
                            }}>
                                {this.state.employee.firstName ? this.state.employee.firstName.charAt(0) : ''}
                            </div>
                            
                            <h2 className="text-gradient mb-4">Employee Profile</h2>
                            
                            <div style={{ textAlign: 'left', marginTop: '2rem' }}>
                                <div style={detailRowStyle}>
                                    <span style={labelStyle}>First Name</span>
                                    <span style={valueStyle}>{this.state.employee.firstName}</span>
                                </div>
                                <div style={detailRowStyle}>
                                    <span style={labelStyle}>Last Name</span>
                                    <span style={valueStyle}>{this.state.employee.lastName}</span>
                                </div>
                                <div style={{ ...detailRowStyle, borderBottom: 'none' }}>
                                    <span style={labelStyle}>Email Address</span>
                                    <span style={valueStyle}>{this.state.employee.emailId}</span>
                                </div>
                            </div>

                            <div className="mt-5">
                                <button className="btn btn-primary w-100" onClick={this.goBack.bind(this)}>
                                    Return to List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
