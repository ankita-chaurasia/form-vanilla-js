
// const express = require("express");

$(document).ready(function () {
  getListAPI();
}
);
  const getListAPI = async () => {

  // function getListAPI(){

    const response = await fetch('https://cf328215-07aa-4d32-86f4-517ee2d6c520.mock.pstmn.io/getAllMortgage');
    const myJson = await response.json(); //extract JSON from the http response

          var user = '';

          // ITERATING THROUGH OBJECTS
          $.each(myJson, function (key, value) {

              //CONSTRUCTION OF ROWS HAVING
              user += '<tr>';
              user += '<td>' + 
                  value.id + '</td>';

              user += '<td>' + 
                  value.name + '</td>';

              user += '<td>' + 
                  value.phoneNumber + '</td>';

              user += '<td>' + 
                  value.email + '</td>';

              user += '<td>' + 
                  value.dateOfAppointment + '</td>';

              user += '<td><a href="" onclick="editAPI">Edit</a></td>';
              user += '<td><a href="" onclick="deleteAPI">Delete</a></td>';

              user += '</tr>';
          });
            
          //INSERTING ROWS INTO TABLE 
          $('#table').append(user);
      }

  const postSaveAPI = async () => {

  // async function postSaveAPI(event){
  //   event.preventDefault();

    const response = await fetch('https://cf328215-07aa-4d32-86f4-517ee2d6c520.mock.pstmn.io/saveMortgage', {
      method: 'POST',
    //   body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()) // or res.json()
    .then(res => console.log(res))
    // console.log(response.json());
    alert("Data saved successfully");
    // .then((response) => {
    //   if (response.status >= 200 && response.status < 300) {                    
    //     console.log(response.status);
    //     alert("Data saved successfully");
    //     getListAPI();
    //   }
    //   else{
    //     alert("Error while submitting the form");
    //   }
    }
    // );
    // alert('Data saved successfully!');

    // const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    // alert('Data saved successfully!');
  // }

  const editAPI = async () => {

    // event.preventDefault();
    const response = await fetch('https://14dc3f6a-7cbf-47e9-9d27-81d7780f8227.mock.pstmn.io/edit');
    const myJson = await response.json(); //extract JSON from the http response

          // var user = '';

          // ITERATING THROUGH OBJECTS
          $.each(myJson, function (key, value) {

            $('#name').append(value.name);
            $('#email').append(value.email);
            $('#phNumber').append(value.phoneNumber);
            $('#dateOfAppointment').append(value.dateOfAppointment);

          });

  }

  const deleteAPI = async (event) => {
    event.preventDefault();

    fetch('https://14dc3f6a-7cbf-47e9-9d27-81d7780f8227.mock.pstmn.io/delete', {
      method: 'DELETE',
    })
    .then(res => res.json()) // or res.json()
    .then(res => console.log(res))
  }