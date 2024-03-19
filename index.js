const { json } = require("body-parser");
const { response } = require("express");

function getallstudents(){
fetch('http://localhost:3000/getallstudents')
.then(response=>response.json())
.then(json=>{
    let studentsul=document.getElementById('students');
    json.forEach(s => {
        let studentli=document.createElement('li');
        studentli.innerHTML=s.name;
        studentsul.appendChild(studentli);
    });
})
}