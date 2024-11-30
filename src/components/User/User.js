import React from 'react'

const User = ({ user }) => {
     return (
          <div className='user'>
               <div className='img-ctn'><img src={user.image} alt={user.firstName} /></div>
               <h3 className='text-lg'>{user.firstName}</h3>
               <p className='text-xs'>{user.userAgent}</p>
               <p className='text-lg text-orange-600'>{user.age}</p>
               <p className='text-lg text-orange-600'>{user.gender}</p>
          </div>
     )
}

export default User