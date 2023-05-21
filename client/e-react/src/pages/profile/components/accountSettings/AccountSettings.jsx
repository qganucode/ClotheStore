import "./accountSetting.scss";

const AccountSetting = () => {
  return (
    <div className='accountSetting'>
      <h1 className='heading'>Persional Information</h1>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='name'>
            Your name <span>*</span>
          </label>
          <input type='text' name='name' id='name' />
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
          <input type='text' name='email' id='email' />
        </div>
      </div>
      <button className='btn-form'>Save change</button>
    </div>
  );
};

export default AccountSetting;
