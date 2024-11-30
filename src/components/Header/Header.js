import React from 'react'

const Header = ({ filters, onFilterChange, onClearFilter }) => {
     return (
          <div>
               <select value={filters.gender} onChange={(e) => onFilterChange("gender", e.target.value)}>
                    <option>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>

               </select>
               <button onClick={onClearFilter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    CLear Filter</button>
          </div>
     )
}

export default Header