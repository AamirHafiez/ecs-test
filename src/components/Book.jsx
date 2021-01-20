import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";

export class Book extends Component {
    render() {

        const {
            title,
            authors,
            average_rating,
            ratings_count,
            price
        } = this.props.book;

        average_rating = parseFloat(average_rating);

        return (
            <div className="col-12 col-lg-8 col-xl-6 mb-4 book">
                <div className="d-flex flex-column flex-lg-row border shadow rounded overflow-hidden">
                    <div className="col-12 col-lg-7 d-flex flex-column justify-content-between p-4">
                        <div>
                            <p className="m-0 p-0 text-bold text-primary">Title:</p>
                            <p className="m-0 p-0 font-large text-bold">{title}</p>
                        </div>
                        <div>
                            <div className="d-flex align-items-center">
                                <ReactStars
                                    count={5}
                                    size={20}
                                    isHalf={true}
                                    edit={false}
                                    value={average_rating}
                                />
                                <p className="m-0 p-0 ml-2">{average_rating}</p>
                            </div>
                            <div>
                                <p className="m-0 p-0 text-success">By {ratings_count} users.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 bg-dark-blue p-4 pl-4">
                        <div>
                            <p className="text-light m-0 p-0">Author:</p>
                            <p className="text-light m-0 p-0 font-large text-bold">{authors}</p>
                        </div>
                        <div className="mt-2 d-flex align-items-center">
                            <p className="text-light m-0 p-0">Price:</p>
                            <p className="text-light m-0 p-0 text-bold font-large ml-2">Rs. {price}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                            <div className="d-flex col-8 col-md-5 col-lg-8 col-xl-6 justify-content-between">
                                <div className="counter-btn pointer" title="Add more">
                                    <i className="fas fa-plus"></i>
                                </div>
                                <div>
                                    <p className="text-light m-0 p-0 font-xlarge">0</p>
                                </div>
                                <div className="counter-btn pointer" title="Delete more">
                                    <i className="fas fa-minus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book
