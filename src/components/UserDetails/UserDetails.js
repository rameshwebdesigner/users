import React, { useEffect, useState } from 'react'
import { USERS_API_ENDPOINT } from '../../constants/constants';

const UserDetails = ({ userDetailsId, onClose }) => {
     const [userInfo, setUserInfo] = useState(null);
     useEffect(() => {
          fetchData();
     })
     const fetchData = async () => {
          try {
               const response = await fetch(USERS_API_ENDPOINT + "/" + userDetailsId);
               const result = await response.json();
               console.log(result);
               if (result) {
                    setUserInfo(result);
               }
          } catch (error) {
               console.error(error);
               alert("Error in Getting data");
          }

     }

     return (
          <>
               <div className="modal-overlay">
                    <div className="modal">
                         <>
                              {userInfo !== null ? (
                                   <div>
                                        <div className="body">
                                             <div className="img">
                                                  <img src={userInfo.image} alt="" />
                                             </div>
                                             <div className="ctn">
                                                  <h2 className='text-2xl'>{userInfo.firstName}</h2>
                                                  <p>{userInfo.university}</p>
                                                  <p className='text-orange-400 text-lg'>{userInfo.age}</p>
                                                  <p>{userInfo.birthDate}</p>
                                                  <p className='text-orange-400 text-lg'>{userInfo.bloodGroup}</p>
                                                  <p>{userInfo?.address?.address}</p>
                                                  <p>{userInfo?.address?.city}</p>
                                                  <p>{userInfo?.address?.country}</p>
                                                  <p>{userInfo?.address?.postalCode}</p>
                                             </div>
                                        </div>
                                        <div className="footer">
                                             <button className="close-btn" onClick={onClose} >Close</button>
                                        </div>
                                   </div>) : (<div className='loader-ctn'><div className="loader"></div></div>)}

                         </>
                    </div>
               </div>
          </>
     )
}

export default UserDetails