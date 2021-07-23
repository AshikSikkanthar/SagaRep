import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { GET_USERS, SET_USERS } from "../reducer/action";

export function Users(props) {

    useEffect(() => {
        props.getUsers();
      }, []);

      return <div >Length is {props.data.length}
      
       <div  >

      
        {/* {
          props.data.map((user,i)=>
          <div className="card text-center m-3 py-2" key={i}>
              <span className="card-body py-0 mb-1"> <div className="badge bg-info"> {user.name}</div> </span>
                  <span className="card-body py-0 mb-0 "><div className="badge bg-success"> {user.email}</div></span>
            
        

            </div>
          )
        } */}
        </div>  
        
        
        <div className="container" >
        <table class="table">
  <thead>
    <tr>
      
      
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {
          props.data.map((user,i)=>
  
    <tr  key={i}>
      <td>
      {user.name}
      </td>
      <td>
      {user.email}
      </td>
    </tr>
)}
  </tbody>
  </table>
  </div>
  </div>     
} 
const mapStateToProps = (state) => {
    return {
      data: state.users.data || [],
    };
  };


  const mapDispatchToProps = (dispatch) => {
    return {
      getUsers: () => {
          dispatch({ type: GET_USERS});
      },
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(Users);