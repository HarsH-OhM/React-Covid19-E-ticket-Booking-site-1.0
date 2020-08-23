//ticket booking for traveles

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
 
import axios from 'axios';

// import {AppContext} from '../Context';

class Contact extends React.Component{
  
    // static contextType = AppContext;

    // insertUser = (event) => {
    //     this.context.insertUser(event,this.fname.value,this.lname.value,this.email.value,this.phone.value,this.address.value,this.city.value,this.tstate.value,this.zip.value,this.Source.value,this.Destination.value,this.ano.value,this.cno.value,this.aname.value,this.cname.value,this.doc.value,this.date.value);
    // }


    constructor(props)
    {
      super(props);
      this.addFormData = this.addFormData.bind(this);
    }

  addFormData(evt)
    {
      
      evt.preventDefault();
    const fd = new FormData();
      fd.append('fname', this.refs.fname.value);
    fd.append('lname', this.refs.lname.value);
    fd.append('lname', this.refs.lname.value);
    fd.append('email', this.refs.email.value);
    fd.append('phone', this.refs.phone.value);
    fd.append('address', this.refs.address.value);
    fd.append('Source', this.refs.Source.value);
    fd.append('Destination', this.refs.Destination.value);
    fd.append('doc', this.refs.doc.value);
    fd.append('date', this.refs.date.value);
    
    var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
    axios.post('http://localhost/php-react/core_php.php', fd, headers
    ).then(res=>
    {
     alert(res.data.data);
    }
    );
    
  }
 

    
    render(){
    return (
      <div class="content">
         
       

     
      <div class="back"> 
        <br/>

<div class="col-lg-8 offset-lg-2">

<h4>Add Travelers Info.</h4>
<br/>

<form >


<div class="form-row">
 <div class="form-group col-md-6">
   <label htmlFor="inputfname">First Name</label>
   <input type="text" name="fname" class="form-control" ref="fname"  required/>
 </div>
 <div class="form-group col-md-6">
   <label htmlFor="inputlname">Last Name</label>
   <input type="text" class="form-control" name="lname" ref="lname" required/>
 </div>
</div>
<div class="form-row">
 <div class="form-group col-md-6">
   <label htmlFor="inputEmail4">Email</label>
   <input type="email" class="form-control" name="email" ref="email" required/>
 </div>
 <div class="form-group col-md-6">
   <label htmlFor="inputPhone4">Phone</label>
   <input type="tel" class="form-control" name="phone" ref="phone"  required/>
 </div>
</div>
<div class="form-group">
 <label htmlFor="inputAddress">Address</label>
 <input type="text" class="form-control" name="address" placeholder="1234 Main St" ref="address" required/>
</div>
{/* <div class="form-row">
 <div class="form-group col-md-6">
   <label htmlFor="inputCity">City</label>
   <input type="text" class="form-control" name="city" ref={(val) => this.city = val}  required/>
 </div>
 <div class="form-group col-md-4">
   <label htmlFor="inputState">State</label>
   <input type="text" class="form-control" name="tstate" ref={(val) => this.tstate = val} required/>
  
 </div>
 <div class="form-group col-md-2">
   <label htmlFor="inputZip">Zip</label>
   <input type="text" class="form-control" name="zip" ref={(val) => this.zip = val} required/>
 </div>
</div> */}

<div class="form-row">
 <div class="form-group col-md-6">
   <label htmlFor="inputsrc">From</label>
   <input type="text" class="form-control"  placeholder="Source" name="Source" ref="Source" required/>
 </div>
 <div class="form-group col-md-6">
   <label htmlFor="inputdest">To</label>
   <input type="text" class="form-control" placeholder="Destination" name="Destination" ref="Destination"  required/>
 </div>
</div>
{/* 
<div class="form-row">
 <div class="form-group col-md-6">
   <label htmlFor="inputEmail4">Total no. of Adultes</label>
   <input type="number" class="form-control" name="ano" ref={(val) => this.ano = val} required/>
 </div>
 <div class="form-group col-md-6">
   <label htmlFor="inputPassword4">Total no. of Children</label>
   <input type="number" class="form-control" name="cno" ref={(val) => this.cno = val} required/>
 </div>
</div>
{/* <div class="form-row">
 <div class="form-group col-md-6">
   <label htmlFor="inputEmail4">Add Adultes Name and Ages</label>
   <textarea type="text" class="form-control" name="aname" ref={(val) => this.aname = val} required></textarea>
 </div>
 <div class="form-group col-md-6">
 
   <label htmlFor="inputEmail5">Add Children Name and Ages</label>
   <textarea type="text" class="form-control" name="cname"  ref={(val) => this.cname = val} required></textarea>
 </div> 
</div> */}
 <div class="form-row">
 <div class="form-group col-md-6">
   <label htmlFor="fileupload">Upload Document</label>
   <input type="File" name="doc"   class="form-control" ref="doc" multiple  required/>
 </div>
 <div class="form-group col-md-6">
   <label htmlFor="date">Date Of Visit</label>
   <input type="date" class="form-control" placeholder="Date Of Visit" name="date" ref="date" required/>
 </div>
</div>
<div class="form-group">
 <div class="form-check">
   <input class="form-check-input" type="checkbox" id="gridCheck" required/>
   <label class="form-check-label" for="gridCheck">
     Check me out
   </label>
 </div>
</div>
<button type="submit" class="btn btn-primary" onClick={this.addFormData}>Book</button>
</form>
<br/><br/>

</div>
</div> 



   {/* </div> */}

{/* 

   <form>
    <div className="form-group">
    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" ref="myEmail" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
    <input type="text" className="form-control" id="Username" placeholder="Enter Username" ref="myUsername" />
    </div>
    <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Submit</button>
  </form> */}


     </div>
    );
    }
}
 
export default Contact;

