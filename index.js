// Add your code here

function submitData(username,uaseremail){
  
  let formData = {
  name: "username",
  email: "uaseremail"
};
 
let configObj = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  
}