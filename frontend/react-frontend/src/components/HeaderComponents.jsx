import React, { Component } from 'react';

class HeaderComponents extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md glass-effect" style={{
                        position: 'fixed',
                        top: '1rem',
                        left: '1rem',
                        right: '1rem',
                        zIndex: 1000,
                        padding: '0.75rem 2rem',
                        background: 'rgba(15, 23, 42, 0.6)'
                    }}>
                        <div className="container-fluid">
                            <a href="/" className="navbar-brand" style={{
                                fontWeight: '700',
                                fontSize: '1.25rem',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <span style={{
                                    background: 'var(--primary-color)',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1rem'
                                }}>E</span>
                                <span className="text-gradient">Employee Portal</span>
                            </a>
                            <div className="ms-auto">
                                <span className="text-muted" style={{ fontSize: '0.85rem' }}>v2.0 Advanced UI</span>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponents;