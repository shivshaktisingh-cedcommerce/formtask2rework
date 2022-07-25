import React from 'react'
import "./Component1.css"
import { useState } from 'react'

export default function Component1() {
  const[flag,setFlag]=useState(0)
  const[studentfirstname,setStudentfirstname]=useState("")
  const[studentlastname,setStudentlastname]=useState("")
  const[studentdob,setStudentdob]=useState("")
  const[studentsibling,setStudentsibling]=useState("")
  const[fatherfirstname,setFatherfirstname]=useState("")
  const[fatherlastname,setFatherlastname]=useState("")
  const[motherfirstname,setMotherfirstname]=useState("")
  const[motherlastname,setMotherlastname]=useState("")
  const[fatherphone,setFatherphone]=useState("")
  const[fatheremail,setFatheremail]=useState("")
  const[fatheroccupation,setFatheroccupation]=useState("")
  const[fatherqualification,setFatherqualification]=useState("")
  const[motherphone,setMotherphone]=useState("")
  const[motheremail,setMotheremail]=useState("")
  const[motheroccupation,setMotheroccupation]=useState("")
  const[motherqualification,setMotherqualification]=useState("")
  const[address,setAddress]=useState("")
  const[radioval1,setRadioval1]=useState(0)
  const[radiomessage1,setRadiomessage1]=useState("")
  const[flagmessage,setFlagmessage]=useState("")


  const radiofun=()=>{
         
     var getSelectedValue = document.querySelector('input[name="gender"]:checked').value;
     if(getSelectedValue=="male" || getSelectedValue=="female"){
        setRadioval1(1)
        setRadiomessage1("")
     }
  }


  const save=(event)=>{
    event.preventDefault()
    var student_fname = document.getElementById("fname").value;
    var student_lname = document.getElementById("lname").value;
    var student_dob = document.getElementById("date").value;
    var sibling = document.getElementById("idsibling").value;
    var student_father_fname = document.getElementById("ffname").value;
    var student_father_lname = document.getElementById("flname").value;
    var student_father_phone = document.getElementById("fphone").value;
    var student_father_email = document.getElementById("femail").value;
    var student_fqualification = document.getElementById("fqualification").value;
    var student_foccupation = document.getElementById("foccupation").value;
    var student_mother_fname = document.getElementById("mfname").value;
    var student_mother_lname = document.getElementById("mlname").value;
    var student_mother_phone = document.getElementById("mphone").value;
    var student_mother_email = document.getElementById("memail").value;
    var student_mqualification = document.getElementById("mqualification").value;
    var student_moccupation = document.getElementById("moccupation").value;
    var address = document.getElementById("address").value;
    if(!student_fname.match("^[a-zA-Z\s]+$")){
      setFlag(0)
      setStudentfirstname("***Please fill Your first name correctly")
    }
    if(student_fname.match("^[a-zA-Z\s]+$")){
      setFlag(1)
      setStudentfirstname("")
    }


    if(!student_lname.match("^[a-zA-Z\s]+$")){
      setFlag(0)
      setStudentlastname("***Please fill Your lastname correctly")
    }
    if(student_lname.match("^[a-zA-Z\s]+$")){
      setFlag(1)
      setStudentlastname("")
    }


    if(student_dob==""){
      setFlag(0)
      setStudentdob("***Please fill Your birthdate correctly")
    }
    if(student_dob!=""){
      setFlag(1)
      setStudentdob("")
    }


    if(sibling==""){
      setFlag(0)
      setStudentsibling("***Please fill Your sibling details")
    }
    if(sibling!=""){
      setFlag(1)
      setStudentsibling("")
    }


    if(!student_father_fname.match("^[a-zA-Z\s]+$")){
      setFlag(0)
      setFatherfirstname("***Please fill Your father's first name correctly")
    }
    if(student_father_fname.match("^[a-zA-Z\s]+$")){
      setFlag(1)
      setFatherfirstname("")
    }


    if(!student_father_lname.match("^[a-zA-Z\s]+$")){
      setFlag(0)
      setFatherlastname("***Please fill Your father's lastname correctly")
    }
    if(student_father_lname.match("^[a-zA-Z\s]+$")){
      setFlag(1)
      setFatherlastname("")
    }



    if(!student_mother_fname.match("^[a-zA-Z\s]+$")){
      setFlag(0)
      setMotherfirstname("***Please fill Your mother's first name correctly")
    }
    if(student_mother_fname.match("^[a-zA-Z\s]+$")){
      setFlag(1)
      setMotherfirstname("")
    }


    if(!student_mother_lname.match("^[a-zA-Z\s]+$")){
      setFlag(0)
      setMotherlastname("***Please fill Your mother's lastname correctly")
    }
    if(student_mother_lname.match("^[a-zA-Z\s]+$")){
      setFlag(1)
      setMotherlastname("")
    }




    if(!student_father_email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")){
      setFlag(0)
      setFatheremail("***Please fill Your father's email correctly")
    }
    if(student_father_email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")){
      setFlag(1)
      setFatheremail("")
    }


  
    if(!student_mother_email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")){
      setFlag(0)
      setMotheremail("***Please fill Your mother's email correctly")
    }
    if(student_mother_email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")){
      setFlag(1)
      setMotheremail("")
    }

    if(address==""){
      setFlag(0)
      setAddress("***Please fill Your address correctly")
    }
    if(address!=""){
      setFlag(1)
      setAddress("")
    }


    if(student_father_phone.length!=10){
      setFlag(0)
      setFatherphone("***Please fill your Father's Mobile Number Correctly")
    }
    if(student_father_phone.length==10){
      setFlag(1)
      setFatherphone("")
    }
    if(student_mother_phone.length!=10){
      setFlag(0)
      setMotherphone("***Please fill your Mother's Mobile Number Correctly")
    }
    if(student_mother_phone.length==10){
      setFlag(1)
      setMotherphone("")
    }



  if(student_fqualification=="")
  {
    setFlag(0)
    setFatherqualification("***Please fill your Father's qualification correctly")
  }
  if(student_fqualification!="")
  {
    setFlag(1)
    setFatherqualification("")
  }



  if(student_mqualification=="")
  {
    setFlag(0)
    setMotherqualification("***Please fill your Mother's qualification correctly")
  }
  if(student_mqualification!="")
  {
    setFlag(1)
    setMotherqualification("")
  }

  
  if(student_foccupation=="")
  {
    setFlag(0)
    setFatheroccupation("***Please fill your Father's occupation correctly")
  }
  if(student_foccupation!="")
  {
    setFlag(1)
    setFatheroccupation("")
  }



  if(student_moccupation=="")
  {
    setFlag(0)
    setMotheroccupation("***Please fill your Mother's occupation correctly")
  }
  if(student_moccupation!="")
  {
    setFlag(1)
    setMotheroccupation("")
  }



  if(radioval1==0){
      setFlag(0)
      setRadiomessage1("***Please select your gender")
  }
  if(radioval1==1){
      setFlag(1)
      setRadiomessage1("")
  }
  if(flag==1){
    setFlagmessage("Data Uploaded Successfully!")
  }
  }

  const reset =()=>{
    window.location.reload(false)
  }


  return (
    <div id="component1">
      <p style={{color:"red",font:"1.5vw"}}>{studentfirstname}</p>
      <p style={{color:"red",font:"1.5vw"}}>{studentlastname}</p>
      <p style={{color:"red",font:"1.5vw"}}>{studentdob}</p>
      <p style={{color:"red",font:"1.5vw"}}>{studentsibling}</p>
      <p style={{color:"red",font:"1.5vw"}}>{fatherfirstname}</p>
      <p style={{color:"red",font:"1.5vw"}}>{fatherlastname}</p>
      <p style={{color:"red",font:"1.5vw"}}>{motherfirstname}</p>
      <p style={{color:"red",font:"1.5vw"}}>{motherlastname}</p>
      <p style={{color:"red",font:"1.5vw"}}>{fatherphone}</p>
      <p style={{color:"red",font:"1.5vw"}}>{fatheremail}</p>
      <p style={{color:"red",font:"1.5vw"}}>{motherphone}</p>
      <p style={{color:"red",font:"1.5vw"}}>{motheremail}</p>
      <p style={{color:"red",font:"1.5vw"}}>{fatheroccupation}</p>
      <p style={{color:"red",font:"1.5vw"}}>{fatherqualification}</p>
      <p style={{color:"red",font:"1.5vw"}}>{motheroccupation}</p>
      <p style={{color:"red",font:"1.5vw"}}>{motherqualification}</p>
      <p style={{color:"red",font:"1.5vw"}}>{address}</p>
      <p style={{color:"red",font:"1.5vw"}}>{radiomessage1}</p>
      <p style={{color:"green",font:"2.5vw"}}>{flagmessage}</p>





        <div id="tablediv">
          <form onSubmit={save}>
            <h2 id="h2">Student Registration Form</h2>
            <p className="p1">Name of the Applicant </p>
            <p><input type="text" className="box1" id="fname" placeholder='first'/>&nbsp;&nbsp;<input type="text" className="box1" id="lname" placeholder='last'/></p>
            <p className="p1">Date of Birth</p>
            <p><input type="date" className="box2" id="date" placeholder='MM/DD/YYYY'/></p>
            <p>Gender<br/><input type="radio" value="male" name="gender" onClick={radiofun}/>Male<br/><input type="radio" value="female" name="gender" onClick={radiofun}/>Female<br/></p>
            <p className="p1">Details of Siblings</p>
            <p><textarea cols={70} rows={5} id="idsibling"></textarea></p>
            <p className="p2">Parent's Information</p>
            <p className="p1">Father's Name</p>
            <p><input type="text" className="box1" id="ffname" placeholder='first'/>&nbsp;&nbsp;<input type="text" className="box1" id="flname" placeholder='last'/></p>
            <p className="p1">Father's Qualification</p>
            <p><input type="text" className="box2" id="fqualification"/></p>
            <div id="phoneandemail">
            <div className="p1">Phone<br/><input type="number" className="box3" id="fphone"/></div>
            <div className="p1">Email<br/><input type="email" className="box3" id="femail"/></div>
            </div>
            <p className="p1">Father's Occupation</p>
            <p><input type="text" className="box2" id="foccupation"/></p>
            <p className="p1">Mother's Name</p>
            <p><input type="text" className="box1" id="mfname" placeholder='first'/>&nbsp;&nbsp;<input type="text" className="box1" id="mlname" placeholder='last'/></p>
            <p className="p1">Mother's Qualification</p>
            <p><input type="text" className="box2" id="mqualification"/></p>
            <div id="phoneandemail">
            <div className="p1">Phone<br/><input type="number" className="box3" id="mphone"/></div>
            <div className="p1">Email<br/><input type="email" className="box3" id="memail"/></div>
            </div>
            <p className="p1">Mother's Occupation</p>
            <p><input type="text" className="box2" id="moccupation"/></p>
            <p className="p1">Address</p>
            <p><input type="text" className="box2" id="address"/></p>
            <p className="btn"><input type="submit" value="Register" id="btn1"/><input type="button" value="Reset" id="btn2" onClick={reset}/></p>
          </form>



        </div>

    </div>
  )
}
