import React, { Component } from 'react'

export class InputContainer extends Component {
    render() {
        return (
            <div style={{marginTop: 100}}>
                <div className="col-11 mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div className="d-flex align-items-center bg-light-gray p-2 pl-4 pr-4 rounded shadow mb-4">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-search pointer" title="Search"></i>
                            <input type="text" className="bg-transparent border-0 font-large pl-2 pr-2" placeholder="Search books..."/>
                            <i className="fas fa-sync-alt pointer" title="Reset Search"></i>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary font-large shadow">
                            Filter by Ratings
                            <i style={{color: 'yellow'}} className="fas fa-star ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputContainer
