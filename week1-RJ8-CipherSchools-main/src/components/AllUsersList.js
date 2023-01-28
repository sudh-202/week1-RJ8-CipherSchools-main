import { getDefaultNormalizer, render } from "@testing-library/react";
import React, {useState} from "react";
import UserDetails from "./UserDetails";

// class AllUsersList extends React.Component {
//     state = {
//         name: "Priyanshu Sexena",
//     };
//     allUsers = [
//         { name: "John", email: "john@gmail.com", phoneNumber: "+91-9876543210", },
//         { name: "Shreyus", email: "shreyus@gmail.com", phoneNumber: "+91-9810263548" },
//         { name: "Nilanjan", email: "nilanjan@gmail.com", phoneNumber: "+91-9983726451" },
    
//     ];

    // let array = allUsers.map((user, index) => (
    //     <UserDetails key={index} user={user} />
    // ));

    // let array = [
    //     <UserDetails user={allUsers[0]} />,
    //     <UserDetails user={allUsers[1]} />,
    //     <UserDetails user={allUsers[2]} />,
    // ];
//     render() {
//         setTimeout(() => {
//             this.setState({ name: "Abhay Raj Gupta" });
//         }, 15000);
//         return (
//             <div>
//                 {this.allUsers.map((user, index) => {
//                     <UserDetails key={index} user={user} />
//                 })}
//             </div>
//         );
//     }
// }

const AllUsersLists = () => {
    let [state, setState] = useState({ name: "Priyanshu Sexena" });

    return <h1>The name is {state.name}</h1>;
    
};
export default AllUsersList;
