import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        return (
            <div className="p-2 ">
                <div className="card" style={{ width: 360 }}>
                    <div className="d-flex card-body justify-content-center">
                        <div className="col-md-8 containt-box">
                            <div className="card-body">



                                <div className="scrollable " style={{ height: 250 }}>
                                    <ul className="list-group">

                                        {/* Displaying data added to list  */}

                                        {}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
