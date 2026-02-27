import React, { Component } from 'react';

class FooterComponents extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span>&copy; {new Date().getFullYear()} Advanced Employee Management</span>
                </div>
            </footer>
        );
    }
}

export default FooterComponents;