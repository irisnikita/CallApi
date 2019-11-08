import React from 'react';

class Productlist extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            products:[]
        }
    }
    render() {
        return (
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Danh sách sản phẩm</h3>
                    </div>
                    <div className="panel-body">

                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Mã</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>

                    </div>
                </div>


            </div>
        )
    }
}

export default Productlist;