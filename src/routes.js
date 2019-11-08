import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import Notfoundpage from './pages/Notfoundpage/Notfoundpage';
import Productlistpage from './pages/Productlistpage/Productlistpage';
import Productactionpage from './pages/productactionpagge/Productactionpage';

const routes = [

    {
        path: '/',
        exact: true,
        main: ()=> <Homepage/>
    },
    {
        path: '/product-list',
        exact: false,
        main: ()=> <Productlistpage/>
    },{
        path: '/product/add',
        exact: false,
        main: ({history})=> <Productactionpage history={history}/>
    },{
        path: '/product/:id/edit',
        exact:false,
        main: ({match,history})=><Productactionpage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main : ()=> <Notfoundpage/>
    }
]

export default routes;