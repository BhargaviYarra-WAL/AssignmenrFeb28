import { useContext } from "react";
import UserObContext from "./UserObContext";
const UserProfessionalInfo =()=>{
    const userOb=useContext(UserObContext);
    return(
        <div>
            <div>Professional Info : {userOb.professional.company}</div>
            <div>Professional Info : {userOb.professional.designation}</div>
        </div>
    )
}
export default UserProfessionalInfo;