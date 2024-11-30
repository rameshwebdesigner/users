import React, { useEffect, useState } from 'react'
import { USERS_API_ENDPOINT } from '../../constants/constants';

const UserDetails = ({ userDetailsId, onClose }) => {
     const [userInfo, setUserInfo] = useState(null);
     const [errorMsg, setErrorMsg] = useState(false);
     useEffect(() => {
          fetchData();
     }, [])
     const fetchData = async () => {
          try {
               const response = await fetch(USERS_API_ENDPOINT + "/" + userDetailsId);
               const result = await response.json();
               console.log(result);
               if (result) {
                    setUserInfo(result);
               }
          } catch (error) {
               debugger;
               console.error(error);
               alert("Error in Getting data");
          }

     }

     if (!!errorMsg) {
          return

          (<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
               <strong className="font-bold">Holy smokes!</strong>
               <span className="block sm:inline">Something seriously bad happened.</span>
               <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
               </span>
          </div>)


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