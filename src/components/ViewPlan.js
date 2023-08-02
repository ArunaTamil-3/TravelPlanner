import React, { useEffect, useState } from "react";
import "../assets/style/viewplan.css";
import CreateTripApi from "../services/api";
import TopNav from "./TopNav";
import ModelPopup from "./ModelPopup";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const ViewPlan = () => {

  const [ tripData, SetTripData ] = useState([]);
  const [ showModel, SetShowModel ] = useState('hide');

  useEffect(()=>{
    getAllDetails();
  },[]);

  function getAllDetails(){
    CreateTripApi.getAll()
    .then(response => {
      SetTripData(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  function editTripDetails(id){

    CreateTripApi.get(id)
    .then(response => {
        SetShowModel(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  function handleClose(){
    getAllDetails();
  }

  function deleteTripDetails(id){
    CreateTripApi.deleteTrip(id)
    .then(response => {
      getAllDetails();
    })
    .catch(e => {
      console.log(e);
    });
  }

  return (
    <>
      <TopNav />

      <div className="mainview">

        <div className="addNewPlan text-end mb-3">
          <Link to="/addnewplan" className="btn btn-primary">Add New Plan</Link>
        </div>
        <table className="table">

            <tr>
              <th>Destination</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>



            {
              tripData.length == 0
              ?
                <tr>
                  <td colspan="4" className="text-center">No Data Found!</td>
                </tr>
              :
              tripData.map((tripItem)=>{
                return(
                  <tr key={tripItem.id}>
                    <td>{ tripItem.data.destination }</td>
                    <td>{ tripItem.data.startDate }</td>
                    <td>{ tripItem.data.endDate }</td>
                    <td className="text-center">
                      <a onClick={ () => { editTripDetails(tripItem.id) } }><i className="fa fa-edit"></i></a>  
                      <a onClick={ ()=> { deleteTripDetails(tripItem.id) } }><i className="fa fa-trash"></i></a>
                    </td>
                  </tr>)
              })
            }

        </table>

        <ModelPopup show_model={showModel} handle_close={handleClose}/>

      </div>
    </>
  );
};

export default ViewPlan;
