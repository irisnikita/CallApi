import React from 'react';
import {Link} from 'react-router-dom'

class Productitem extends React.Component {
    onDelete=(id)=>{
        if(window.confirm("Bạn có chắc muốn xóa")){
            this.props.onDelete(id);
        }
    }

    render() {
        var {product,index}=this.props;
        var statusname= product.status?'Còn Hàng':'Hết hàng';
        var statusclass= product.status?'warning':'default';
        return (
            <tr>
                                    <td>{index+1}</td>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <span className={`label label-${statusclass}`} onClick={this.changecolor}>
                                            {statusname}
                                                    </span>

                                    </td>
                                    <td className="flex-center">

                                        <Link 
                                            to={`/product/${product.id}/edit`}
                                            className="btn btn-success mr-10"
                                            >
                                            Sửa
                                                    </Link>
                                        <button 
                                            type="button" 
                                            className="btn btn-danger"
                                            onClick={()=>this.onDelete(product.id)}>
                                            Xóa
                                                    </button>

                                    </td>
                                </tr>

        )
    }
}

export default Productitem;