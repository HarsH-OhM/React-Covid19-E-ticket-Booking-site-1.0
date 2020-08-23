

import React from 'react';


import Travel from '../images/travel.jfif'
import bus from '../images/bustrav.jpg'
import train from '../images/traintrav.jpg'
import air from '../images/airtrav.webp'

class home extends React.Component{

    render(){
    return (
        <div className="content">
            <div class="back"> 

        <h1>
Travel during the COVID-19 Pandemic</h1>
           
            
          <h2>How Are Companies Protecting Customers from COVID-19?</h2><br/>
      
<h3>When planning travel, you may want to check companies websites to see what they are doing to protect customers from COVID-19.</h3><br/>
<h4> Things to look for include:</h4><br/>

<ol>
<li>
Requiring people to wear a mask</li><br/>
<li>
Promoting social distancing</li><br/>
<li>
Using online or contactless reservations and check-in</li><br/>
<li>
Using contactless payment</li><br/>
<li>
Enhanced cleaning procedures</li><br/>
</ol>

<br/><hr/>


   <div class="row">
<div className="col-sm-6 ">
 
        <h2>Considerations for Types of Travel</h2><br/>
        <p>
Travel increases your chances of getting and spreading COVID-19. Your chances of getting COVID-19 while traveling also depend on whether you and those around you take steps to protect yourself and others, such as wearing masks and staying 6 feet away from people outside your household (social distancing). Airports, bus stations, train stations, and rest stops are all places travelers can be exposed to the virus in the air and on surfaces. These are also places where it can be hard to social distance. In general, the longer you are around a person with COVID-19, the more likely you are to get infected.
</p>
</div>
<div className="col-sm-6 d-none d-lg-block"><img src={train} alt="" className="img-fluid rounded-circle"/></div>
</div>

<hr/>

<div class="row">
<div className="col-sm-6"><img src={air} alt="" className="img-fluid sqare"/></div>

<div className="col-sm-6 ">
<h2>Air travel</h2>
Air travel requires spending time in security lines and airport terminals, which can bring you in close contact with other people and frequently touched surfaces. Most viruses and other germs do not spread easily on flights because of how air circulates and is filtered on airplanes. However, social distancing is difficult on crowded flights, and sitting within 6 feet of others, sometimes for hours, may increase your risk of getting COVID-19.


Also consider how you get to and from the airport, as public transportation and ridesharing can increase your chances of being exposed to the virus.
</div>
</div>
<br/><hr/>

<div class="row">
<div className="col-sm-6 ">
<h2>Bus or train travel</h2><br/>
Traveling on buses and trains for any length of time can involve sitting or standing within 6 feet of others, which may increase your risk of getting COVID-19.
<br/>
<h2>Car travel</h2>
<br/>
Making stops along the way for gas, food, or bathroom breaks can put you and your traveling companions in close contact with other people and frequently-touched surfaces.
<br/>
</div>
<div className="col-sm-6"><img src={bus} alt="" className="img-fluid square"/></div>
</div>
<hr/>
<h2>RV travel</h2><br/>
<p>
You may have to stop less often for food or bathroom breaks, but RV travel usually means staying at RV parks overnight and getting gas and supplies at other public places. These stops may put you and those with you in the RV in close contact with others.

Learn more about how to protect yourself from COVID-19 on different types of transportation

</p>

        <h3><a href="http://localhost:8000">Go to admin Portal</a></h3>       


          </div>   
</div>
    );
    }
}
 
export default home;


// class home extends Component {
    // constructor(props){
    //   super(props);
    //   this.state = {productName: '', productPrice: ''};
  
    //   this.handleChange1 = this.handleChange1.bind(this);
    //   this.handleChange2 = this.handleChange2.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleChange1(e){
    //   this.setState({
    //     productName: e.target.value
    //   })
    // }
    // handleChange2(e){
    //   this.setState({
    //     productPrice: e.target.value
    //   })
    // }
    // handleSubmit(e){
    //   e.preventDefault();
    //   const products = {
    //     name: this.state.productName,
    //     price: this.state.productPrice
    //   }
      
    //   let uri = 'http://localhost:8000/items';
    //   axios.post(uri, products).then((response) => {
    //     browserHistory.push('/display-item');
    //   });
    // }
  
//       render() {
//         return (
//         <div>

//         <div className="content">

//  <div class="back">
//  <br/>
//           <h1>Create An Item</h1>
//           <form onSubmit={this.handleSubmit}>
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="form-group">
//                   <label>Item Name:</label>
//                   <input type="text" className="form-control" onChange={this.handleChange1}/>
//                 </div>
//               </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="form-group">
//                     <label>Item Price:</label>
//                     <input type="text" className="form-control col-md-6" onChange={this.handleChange2}/>
//                   </div>
//                 </div>
//               </div><br />
//               <div className="form-group">
//                 <button className="btn btn-primary">Add Item</button>
//               </div>
//           </form>

//           </div>

//           </div>
//     </div>
//         )
//       }
//   }
 
// export default home;


// import React  from 'react';
// import {AppContext} from '../Context';
// class home extends React.Component{
  
    // static contextType = AppContext;

    // insertUser = (event) => {
    //     this.context.insertUser(event,this.username.value,this.useremail.value,this.date.value,this.Source.value,this.Destination.value);
    // }

    // render(){
    //     return (
//             <form onSubmit={this.insertUser}>
//             <div className="form-row">
//                 <div className="form-group col-sm-4">
//                     <label className="font-weight-bold">Name</label>
//                     <input type="text" name="username" ref={(val) => this.username = val} className="form-control" placeholder="Name"/>
//                 </div>
//                 <div className="form-group col-sm-4">
//                     <label className="font-weight-bold">Email</label>
//                     <input type="email" name="useremail" ref={(val) => this.useremail = val} className="form-control" placeholder="Email"/>
//                 </div>
//                 <div className="form-group col-sm-4">
//                     <label className="font-weight-bold">Date</label>
//                     <input type="date" name="date" ref={(val) => this.date = val} className="form-control" placeholder="date"/>
//                 </div>
//                 </div>
//                 <div className="form-row">
//  <div  className="form-group col-sm-6">
//  <label className="font-weight-bold">From</label>
//  <input type="text" name="Source" ref={(val) => this.Source = val} className="form-control" placeholder="source"/>
   
  
//  </div>
//  <div  className="form-group col-sm-6">
//  <label className="font-weight-bold">To</label>
//  <input type="text" name="Destination" ref={(val) => this.Destination = val} className="form-control" placeholder="destination"/>
//  </div>
// </div>

//                 <div className="form-group col-sm-12 text-right">
//                     <button type="submit" className="btn btn-primary">Add user</button>
//                 </div>
            
//         </form> 
       
//         );
//     }
//   }
//   export default home;