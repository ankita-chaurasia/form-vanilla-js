
$(document).ready(function () {
    getListAPI();
    // callEditAPI();
    // callDeleteAPI();
  });

function getListAPI(){
    fetch('https://cf328215-07aa-4d32-86f4-517ee2d6c520.mock.pstmn.io/getAllMortgage', { method: 'GET' })
          .then(async response => {
                  const rows = await response.json();
                  // check for error response
                  if (!response.ok) {
                      // get error message from body or default to response statusText
                      const error = (rows && rows.message) || response.statusText;
                      return Promise.reject(error);
                  }  
                  else{
                    var user = '';
                    $.each(rows, function (key, value) {
                        user += '<tr>';
                        user += '<td>' + value.id + '</td>';
                        user += '<td>' + value.name + '</td>';
                        user += '<td>' + value.phoneNumber + '</td>';
                        user += '<td>' + value.email + '</td>';
                        user += '<td>' + value.dateOfAppointment + '</td>';

                        user += '<td><a href="" onclick="editAPI()">Edit</a></td>';
                        user += '<td><a href="" onclick="deleteAPI()">Delete</a></td>';

                        user += '</tr>';
                    });
                    $('#table').append(user);
                  }                             
              })      
              .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
}

function deleteAPI(){
    callDeleteAPI();
}

function callDeleteAPI(){
    fetch('https://14dc3f6a-7cbf-47e9-9d27-81d7780f8227.mock.pstmn.io/delete', { method: 'DELETE',
    headers: {
        'Content-Type': 'text/plain'
        }})
    .then(response => {
          if (response.status >= 200 && response.status < 300) {
            alert("Entry deleted successfully.");
            return response;
          }else {
            return response;
          }
        }).catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
          }); 
}

function editAPI(){
    callEditAPI();
}

function callEditAPI(){
    fetch('https://14dc3f6a-7cbf-47e9-9d27-81d7780f8227.mock.pstmn.io/edit', { method: 'GET'})
    .then(async response => {
        const row = await response.json();
        // check for error response
        if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (row && row.message) || response.statusText;
            return Promise.reject(error);
        }  else{
            $.each(row, function (key, value) {

                $('#name').append(value.name);
                $('#email').append(value.email);
                $('#phNumber').append(value.phoneNumber);
                $('#dateOfAppointment').append(value.dateOfAppointment);
    
              });
        }
    }).catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
}

// function saveAPI(){
   
//      fetch('https://cf328215-07aa-4d32-86f4-517ee2d6c520.mock.pstmn.io/saveMortgage', {
//       method: 'POST'}).then((response)=> {       
//              if (response.status >= 200 && response.status < 300) {                    
//                  console.log(response);
//                  alert("Entry saved successfully");
//             }})
//             .catch(error => {
//                 this.setState({ errorMessage: error.toString() });
//                 console.error('There was an error!', error);
//             });
//         }