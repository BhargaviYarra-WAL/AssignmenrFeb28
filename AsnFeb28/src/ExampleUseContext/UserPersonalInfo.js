import { useContext } from "react";
import UserObContext from "./UserObContext";
import UserName from "./UserName";
const UserPersonalInfo =()=>{
    const userOb = useContext(UserObContext)
    return(
        <div>
            <UserName/>
            <div>Personal Info : {userOb.personal.phoneNo}</div>
        </div>
    )
}
export default UserPersonalInfo;