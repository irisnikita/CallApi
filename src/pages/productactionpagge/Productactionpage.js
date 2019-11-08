import React from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom';
import {actaddProductRequest, actGetProductRequest, actUpdateProductRequest} from './../../actions/index'
import {connect} from 'react-redux'

class Productactionpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtprice: 0,
            checkstatus: false
        }
    }
    
    componentDidMount() {
        console.log("componentDidMount")
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }

    }
    UNSAFE_componentWillReceiveProps(nextProps){
        var item=nextProps.product;
        this.setState({
            id: item.id,
            txtName: item.name,
            txtprice: item.price,
            checkstatus: item.status
        })
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })

    }
    onSubmit = (e) => {
        var { id } = this.state;
        e.preventDefault();
        let { txtName, txtprice, checkstatus } = this.state;
        let { history } = this.props;
        let product={
            id: id,
            name : txtName,
            price: txtprice,
            status: checkstatus
        }
            if (txtName !== '' || txtprice !== 0) {
                if(id===''){
                    this.props.onAddProduct(product)
                    history.goBack();
                }
                else{
                    this.props.onUpdate(product)
                    history.goBack();
                }
               
            }
            else {
                alert("Bạn chưa nhập đầy đủ thông tin !")
            }
    }
    render() {
        var { txtName, txtprice, checkstatus } = this.state
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Tên sản phẩm: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Giá sản phẩm: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtprice"

                            value={txtprice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="checkbox">
                        <label >
                            <input
                                type="checkbox"
                                name="checkstatus"

                                value={checkstatus}
                                onChange={this.onChange}
                                checked={checkstatus}
                            ></input>
                            Còn hàng
                            </label>
                    </div>

                    <Link to="/product-list" className="btn btn-danger mr-10" >Hủy</Link>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >Lưu lại</button>
                </form>

            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        product:state.itemEditing
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onAddProduct :(product)=>{
            dispatch(actaddProductRequest(product))
        },
        onEditProduct : (id)=>{
            dispatch(actGetProductRequest(id))
        },
        onUpdate: (product)=>{
            dispatch(actUpdateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Productactionpage);
