import { store } from '../redux/storeConfig/store';
import {history} from '../app/AppRouter';
import {setLoginFlag,setLoginUser} from '../redux/actions/login/loginAction';
import { mainUrl } from "../constant/constant";
const axios = require('axios');
export const api = async (endpoint, data, type) => {
    var res;
    var token = store.getState().login.loginUser.token;
    
    switch (type) {
                
        case 'post':
            await axios({
                data: data,
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    'authtoken': token 
                },
                url: mainUrl + endpoint
            }).then(function (response) {
                res = response;
            }).catch((err) => {
                
                if(err.response.status === 400){
                    res = err.response;
                }
                if(err.response.status === 401 || err.response.status === 403 || err.response.status === 503){
                    localStorage.removeItem('user');
                    store.dispatch(setLoginFlag(false)) 
		            store.dispatch(setLoginUser({})) 
                    history.push('/login')
                }
             });
            break;
        case 'get':
            await axios({
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    'authtoken': token 
                },
                url: mainUrl + endpoint
            }).then(function (response) {
               
                res = response;
            }).catch((err) => {
                if(err.response.status === 400){
                    res = err.response;
                }
                if(err.response.status === 401 || err.response.status === 403 || err.response.status === 503){
                    localStorage.removeItem('user');
                    store.dispatch(setLoginFlag(false)) 
		            store.dispatch(setLoginUser({})) 
                    history.push('/login')
                }
             });
            break;
        case 'put':              
            await axios({
                method: 'put',
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    'authtoken': token 
                },
                url: mainUrl + endpoint
            }).then(function (response) {
                res = response;                
            }).catch((err) => {   
                      
                if(err.response.status === 400){
                    res = err.response;
                }        
                if(err.response.status === 401 || err.response.status === 403 || err.response.status === 503){
                    localStorage.removeItem('user');
                    store.dispatch(setLoginFlag(false)) 
		            store.dispatch(setLoginUser({})) 
                    history.push('/login')
                }
            });
            break;
        case 'delete':
            await axios({
                data:data,
                method: 'delete',
                headers: {
                    "Content-Type": "application/json",
                    'authtoken': token 
                },
                url: mainUrl + endpoint
            }).then(function (response) {
                res = response;               
            }).catch((err) => {  
                if(err.response.status === 400){
                    res = err.response;
                }              
                if(err.response.status === 401 || err.response.status === 403 || err.response.status === 503){
                    localStorage.removeItem('user');
                    store.dispatch(setLoginFlag(false)) 
		            store.dispatch(setLoginUser({})) 
                    history.push('/login')
                }
             });
            break;
        case 'postWithoutToken':              
            await axios({
                method: 'post',
                data: data,
                headers: {
                    "Content-Type": "application/json"                                     
                },
                url: mainUrl + endpoint
            }).then(function (response) {
                res = response;                
            }).catch((err) => {  
                 
                res = err.response;
            });
            break;
        default:
            return true;
    }

    return res;
   
};

