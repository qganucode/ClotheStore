import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import "./userSidebar.scss";

const UserSidebar = ({ activepage }) => {
  return (
    <div className='userSidebar'>
      <Link
        to='/profile/accountsettings'
        className={activepage === "accountsettings" ? "item active" : "item"}
      >
        <AccountCircleIcon />
        <span>Account Setting</span>
      </Link>

      <Link
        to='/profile/yourorder'
        className={activepage === "yourorder" ? "item active" : "item"}
      >
        <LocalMallIcon />
        <span>Your Order</span>
      </Link>

      <Link
        to='/profile/changepassword'
        className={activepage === "changepassword" ? "item active" : "item"}
      >
        <VisibilityIcon />
        <span>Change Password</span>
      </Link>

      <Link
        to='/profile/address'
        className={activepage === "address" ? "item active" : "item"}
      >
        <LocationOnIcon />
        <span>Address</span>
      </Link>

      <Link
        to='/profile/legal'
        className={activepage === "legal" ? "item active" : "item"}
      >
        <AssignmentTurnedInIcon />
        <span>Legal Notice</span>
      </Link>
    </div>
  );
};

export default UserSidebar;
