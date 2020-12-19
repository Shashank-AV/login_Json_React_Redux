import React from 'react';
import queryString from 'query-string';
import UserTable from './UserTable'
import {connect} from 'react-redux'




const Dashboard=(props)=>{
    
        const user_name=props.Credentials.username;
        const pass=props.Credentials.password;
        const {email,password}=queryString.parse(decodeURIComponent(props.location.search))
        
            if(email===user_name && password===pass){
               return(
                   <div>
                        <UserTable users={props.users_data}/>
                   </div>)
            }else{

                   return( window.location.href='/')
             }
    

}

const mapStateToProps=(state)=>{

    return {Credentials:state.Credentials,
            users_data:state.users};
}

export default connect(mapStateToProps)(Dashboard);