import { useSelector } from "react-redux";
import "./accountSetting.scss";

const AccountSetting = () => {
  const data = useSelector((state) => state.userProfile);
  console.log('dataUser: ',data.userData.user.username)
  return (
    <div className='accountSetting'>
      <h1 className='heading'>Persional Information</h1>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>
            Your name <span>*</span>
          </label>
          <input type='text' name='name' id='name' value={data.userData.user.username}/>
        </div>
        <div className='form-group'>
          <label htmlFor='mobile'>
            Phone/mobile <span>*</span>
          </label>
          <input type='text' name='mobile' id='mobile' />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>
            Email <span>*</span>
          </label>
          <input type='text' name='email' id='email'  value={data.userData.user.email}/>
        </div>
      </div>
      <button className='btn-form'>Save change</button>
    </div>
  );
};

export default AccountSetting;
