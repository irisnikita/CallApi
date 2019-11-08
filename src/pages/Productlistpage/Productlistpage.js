import React from 'react';
import Productlist from './../../components/Productlist/Productlist'
import Productitem from './../../components/Productitem/Productitem'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {actFetchProductRequest} from './../../actions/index'
import {actDeleteProductRequest} from './../../actions/index'


class Productlistpage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            products: []
        }
    }
    componentDidMount() {
        this.props.fetchAllProducts();
        // var {products}=this.props;
    }
    findindex=(products,id)=>{
        var result=-1;
        products.forEach((product,index)=>{
            if(product.id===id){
                result=index;
            }
        })
        return result;
    }
    
    onDelete=(id)=>{
        this.props.onDelete(id);
    //     let {products}=this.state;
    //     console.log(id);
    //     callApi(`products/${id}`,'DELETE',null).then((res)=>{
    //     console.log(res);
    //     var index=this.findindex(products,id);
    //     if(index!==-1){
    //         products.splice(index,1);
    //         this.setState({
    //             products : products
    //         })
    //     }
        
    // })
}
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Productitem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}

                    />
                )
            })
        }
        return result;
    }
    render() {
        let {products}=this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <Link to="/product/add" className="btn btn-info mb-20">
                    Thêm Sản Phẩm
                                </Link>
                <Productlist>
                    {this.showProducts(products)}
                </Productlist>


            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        fetchAllProducts : ()=>{
            dispatch(actFetchProductRequest());
        },
        onDelete : (id)=>{
            dispatch(actDeleteProductRequest(id))
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Productlistpage);
