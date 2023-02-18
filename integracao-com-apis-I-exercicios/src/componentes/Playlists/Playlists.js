import React, {  useState } from "react";
import Musicas from "../Musicas/Musicas";
import axios from "axios";
import { useEffect } from "react";

// const playlistsLocal = [
//     {
//         id: 1,
//         name: "Playlist 1"
//     },
//     {
//         id: 2,
//         name: "Playlist 2"
//     },
//     {
//         id: 3,
//         name: "Playlist 3"
//     },
//     {
//         id: 4,
//         name: "Playlist 4"
//     },
// ]

function Playlists() {
    const [playlists, setPlaylists] = useState([])

    const getAllPlaylists = () => {
		axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
			headers: {
				Authorization: "fernando-robazzi-conway"
			}
		})
	.then(response => {
		setPlaylists(response.data.result.list)
	})
	.catch(error => {
		console.log(error.response)
	})}

	useEffect(()=> {
		getAllPlaylists()
	}, [])

    

    
    return (
        <div>
            {playlists.map((p) => {
                return <Musicas key={p.id} playlist={p}/>
            })}

        </div>
    );
}

export default Playlists;
