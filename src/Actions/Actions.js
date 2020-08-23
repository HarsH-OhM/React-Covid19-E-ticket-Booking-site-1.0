import React from 'react';
import Axios from 'axios';
class Actions extends React.Component{
    state = {
        users:[]
    }

    // FETCH USERS FROM DATABASE
    // fetchUsers = () => {
    //     Axios.get('http://localhost/php-react/all-users.php')
    //     .then(({data}) => {
    //         if(data.success === 1){
    //             this.setState({
    //                 users:data.users.reverse()
    //             });
    //         }
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }

    //  // ON EDIT MODE
    //  editMode = (id) => {
    //     let users = this.state.users.map(user => {
    //         if(user.id === id){
    //             user.isEditing = true;
    //             return user;
    //         }
    //         user.isEditing = false;
    //         return user;
    //     });

    //     this.setState({
    //         users
    //     });
    // }

    // //CANCEL EDIT MODE
    // cancelEdit = (id) => {
    //     let users = this.state.users.map(user => {
    //         if(user.id === id){
    //             user.isEditing = false;
    //             return user;
    //         }
    //         return user
            
    //     });
    //     this.setState({
    //         users
    //     });
    // }

    // // UPDATE USER
    // handleUpdate = (id,user_name,user_email) => {
    //     Axios.post('http://localhost/php-react/update-user.php',
    //     {
    //         id:id,
    //         user_name:user_name,
    //         user_email:user_email
    //     })
    //     .then(({data}) => {
    //         if(data.success === 1){
    //             let users = this.state.users.map(user => {
    //                 if(user.id === id){
    //                     user.user_name = user_name;
    //                     user.user_email = user_email;
    //                     user.isEditing = false;
    //                     return user;
    //                 }
    //                 return user; 
    //             });
    //             this.setState({
    //                 users
    //             });
    //         }
    //         else{
    //             alert(data.msg);
    //         }
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }


    // // DELETE USER
    // handleDelete = (id) => {
    //     let deleteUser = this.state.users.filter(user => {
    //         return user.id !== id;
    //     });
        
    //     Axios.post('http://localhost/php-react/delete-user.php',{
    //         id:id
    //     })
    //     .then(({data}) => {
    //         if(data.success === 1){
    //             this.setState({
    //                 users:deleteUser
    //             });
    //         }
    //         else{
    //             alert(data.msg);
    //         }
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }

    // INSERT USER
    // insertUser = (event,fname,lname,email,phone,address,Source,Destination,doc,date) => {
    //     event.preventDefault();
    //     event.persist();
    //     Axios.post('http://localhost/php-react/add-user.php',{
          
    //         fname:fname,
    //         lname:lname,
    //         email:email,
    //         phone:phone,
    //         address:address,
            
    //         Source:Source,
    //         Destination:Destination,
           
    //         doc:doc,
    //         date:date
    //     })
    //     .then(function ({data}) {
    //         if(data.success === 1){
    //             this.setState({
    //                 users:[
    //                     {"id":data.id, 
    //                     "fname":fname,
    //                     "lname":lname,
    //                     "email":email,
    //                     "phone":phone,
    //                     "address":address,
                        
    //                     "Source":Source,
    //                     "Destination":Destination,
                      
    //                     "doc":doc,
    //                     "date":date},

    //                     ...this.state.users
    //                 ]
    //             });
    //             event.target.reset();
    //         }
    //         else{
    //             alert(data.msg);
    //         }
    //     }.bind(this))
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // }


    insertUser = (event,user_name,user_email,date,Source,Destination) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-react/add-user.php',{
            user_name:user_name,
            user_email:user_email,
            date:date,
            Source:Source,
            Destination:Destination
        })
        .then(function ({data}) {
            if(data.success === 1){
                this.setState({
                    users:[
                        {"id":data.id,"user_name":user_name,"user_email":user_email,"date":date,"Source":Source,"Destination":Destination},
                        ...this.state.users
                    ]
                });
                event.target.reset();
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

}

export default Actions;