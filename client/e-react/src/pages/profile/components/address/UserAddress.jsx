import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import "./userAddress.scss";

const UserAddress = () => {
  const addressData = [
    {
      addressLine1: "addressLine1",
      addressLine2: "addressLine2",
      addressLine3: "addressLine3",
    },
    {
      addressLine1: "addressLine4",
      addressLine2: "addressLine5",
      addressLine3: "addressLine6",
    },
    {
      addressLine1: "addressLine7",
      addressLine2: "addressLine8",
      addressLine3: "addressLine9",
    },
  ];
  const [show, setShow] = useState(false);
  return (
    <div className='userAddress'>
      {!show && (
        <>
          <h1 className='heading'>Your Address</h1>
          <div className='addressin'>
            {addressData.map((item, index) => {
              return (
                <div className='address' key={index}>
                  <span>{item.addressLine1}</span>
                  <span>{item.addressLine2}</span>
                  <span>{item.addressLine3}</span>
                  <div className='delete-btn'>
                    <DeleteForeverIcon />
                  </div>
                </div>
              );
            })}
          </div>
          <div className='add-btn' onClick={() => setShow(true)}>
            <AddIcon />
          </div>
        </>
      )}
      {show && (
        <>
          <h1 className='heading'>Add New Address</h1>
          <div className='form'>
            <div className='form-group'>
              <label htmlFor='postalCode'>Postal Code</label>
              <input type='text' name='postalCode' id='postalCode' />
            </div>
            <div className='form-group'>
              <label htmlFor='addressline1'>Address line1</label>
              <input type='text' name='addressline1' id='addressline1' />
            </div>
            <div className='form-group'>
              <label htmlFor='addressline2'>Addressline2</label>
              <input type='text' name='addressline2' id='addressline2' />
            </div>
            <div className='form-group'>
              <label htmlFor='addressline3'>Addressline3</label>
              <input type='text' name='addressline3' id='addressline3' />
            </div>
          </div>
          <button className='btn-address-form' onClick={() => setShow(false)}>
            Save
          </button>
        </>
      )}
    </div>
  );
};

export default UserAddress;
