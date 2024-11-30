import React from 'react'

const NewPlayer = () => {
     const [name, setName] = useState("");
     const [players, setPlayers] = useState([]);
     const [finalPlayers, setFinalPlayers] = useState([]);

     // Handles adding a new player to the players list
     const handleAddPlayer = () => {
          if (name.trim() && !players.includes(name)) {
               setPlayers((prev) => [...prev, name]);
               setName("");
          }
     };

     // Handles adding a player to the final players list
     const handleAddToFinalList = (player) => {
          if (!finalPlayers.includes(player)) {
               setFinalPlayers((prev) => [...prev, player]);
          }
     };

     // Handles removing a player from the players list
     const handleRemovePlayer = (player) => {
          setFinalPlayers((prev) => prev.filter((p) => p !== player));
     };
     return (
          <div className="app">
               <div className="input-container w-14 flex">
                    <input
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         placeholder="Enter player name"
                         className="shadow border p-2 text-gray-700 rounded-tl-md leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <button
                         onClick={handleAddPlayer}
                         className="bg-blue-400 p-2 border rounded-br-md rounded-tr-md"
                    >
                         Add
                    </button>
               </div>

               <h2 className="text-lg mt-4">List of Players</h2>
               {players.length > 0 ? (
                    <ul>
                         {players.map((player, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                   {player}
                                   <button
                                        onClick={() => handleAddToFinalList(player)}
                                        className="bg-green-400 p-1 rounded"
                                   >
                                        Add to Final
                                   </button>
                                   <button
                                        onClick={() => handleRemovePlayer(player)}
                                        className="bg-red-400 p-1 rounded"
                                   >
                                        Delete
                                   </button>
                              </li>
                         ))}
                    </ul>
               ) : (
                    <p>No Players</p>
               )}

               <h2 className="text-lg mt-4">Final List of Players</h2>
               {finalPlayers.length > 0 ? (
                    <ul>
                         {finalPlayers.map((player, idx) => (
                              <li key={idx}>{player}</li>
                         ))}
                    </ul>
               ) : (
                    <p>No Players</p>
               )}
          </div>
     )
}

export default NewPlayer