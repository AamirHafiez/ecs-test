import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <div className="bg-secondary shadow fixed-top">
                <div className="col-11 mx-auto d-flex align-items-center justify-content-between p-2">
                    <div className="d-flex align-items-center">
                        <div>
                            <img height={60} width={60} src={''} alt="logo"/>
                        </div>
                        <div>
                            <p className="p-0 m-0 ml-3 text-light font-xlarge text-bold">
                                Book World
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="cart-icon-container">
                            <img height={50} width={50} src={''} alt="cart"/>
                            <div className="cart-count d-flex align-items-center justify-content-center">
                                <p className="m-0 p-0 text-bold">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
