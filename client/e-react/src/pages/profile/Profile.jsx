import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleBanner from "../../components/banner/SingleBanner";
import UserSidebar from "./components/userSidebar/UserSidebar";
import AccountSetting from "./components/accountSettings/AccountSettings";
import YourOrder from "./components/yourOrder/YourOrder";
import ChangePassword from "./components/changePassword/ChangePassword";
import './profile.scss';
import UserAddress from "./components/address/UserAddress";

const Profile = () => {
  const { activepage } = useParams();

  const data = useSelector((state) => state.userProfile);
  return (
    <div className='profile'>
      <SingleBanner img='/images/banner.jpg' title={activepage} />
      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage} />
        </div>
        <div className='right'>
          {activepage === "accountsettings" && <AccountSetting />}
          {activepage === "yourorder" && <YourOrder />}
          {activepage === "changepassword" && <ChangePassword />}
          {activepage === "address" && <UserAddress />}
        </div>
      </div>
    </div>
  );
};
export default Profile;
