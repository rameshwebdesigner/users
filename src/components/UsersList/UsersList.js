import React, { useEffect, useState } from 'react'
import User from '../User/User'
import Header from '../Header/Header'
import NoDataFound from '../NoDataFound/NoDataFound';
import { USERS_API_ENDPOINT } from '../../constants/constants';
import { HeaderStick } from '../../utils/utils';
import UserDetails from '../UserDetails/UserDetails';

const UsersList = () => {
     const [users, setUsers] = useState([]);
     const [filteredUsers, setFilteredUsers] = useState([]);
     const [filters, setFilters] = useState({
          gender: ""
     });
     const [userDetails, setUserDetails] = useState(null);

     useEffect(() => {
          fetchData();
          HeaderStick();
     }, [])
     const fetchData = async () => {
          try {
               const response = await fetch(USERS_API_ENDPOINT)
               const result = await response.json();
               setUsers(result.users);
               setFilteredUsers(result.users);
          } catch (error) {
               console.error(error);
               alert("Error in Getting data");
          }


     }
     const openModal = (id) => {
          setUserDetails(id);
     }
     const closeModal = (id) => {
          setUserDetails(null);
     }
     const handleClearFilters = () => {
          setFilters({ gender: "" })
          setFilteredUsers(users);
     }
     const handleFilterChange = (filter, value) => {
          const updatedFilters = { ...filters, [filter]: value };
          setFilters(updatedFilters); // Update filter state

          if (filter === "gender") {
               const filtered = users.filter((user) => user[filter] === value);
               setFilteredUsers(filtered); // Update filteredUsers state
          } else {
               setFilteredUsers(users); // Reset if no filter
          }
     };

     return (
          <>
               <div className='user-header' id='user-header' >
                    <Header
                         filters={filters}
                         onFilterChange={handleFilterChange}
                         onClearFilter={handleClearFilters}
                    />
               </div>
               <div className='user-list'>
                    {filteredUsers.length === 0 && <NoDataFound />}
                    {filteredUsers.length > 0 && filteredUsers.map((user) =>
                         <div key={user.id} onClick={() => openModal(user?.id)} style={{ "cursor": "pointer" }}>
                              <User user={user} />
                         </div>
                    )}
                    {userDetails != null && <UserDetails userDetailsId={userDetails} onClose={closeModal} />}
               </div>
          </>
     )
}

export default UsersList