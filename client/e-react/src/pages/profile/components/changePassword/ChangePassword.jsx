import './changePassword.scss';

const ChangePassword = () => {
  return (
    <div className='changePassword'>
      <h1 className='heading'>Change Password</h1>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>
            Old password <span>*</span>
          </label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='mobile'>
            New password <span>*</span>
          </label>
          <input type='text' name='mobile' id='mobile' />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>
            Confirm new password <span>*</span>
          </label>
          <input type='text' name='email' id='email' />
        </div>
      </div>
      <button className='btn-form'>Save change</button>
    </div>
  );
};

export default ChangePassword;
