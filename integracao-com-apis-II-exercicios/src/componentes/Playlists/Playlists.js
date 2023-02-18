import React, { useState } from "react";
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
	let newPlaylist = ""

	const headers = {
		Authorization: "fernando-robazzi-conway"
	}

	const getAllPlaylists = () => {
		axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
			headers
		})
			.then(response => {
				setPlaylists(response.data.result.list)
			})
			.catch(error => {
				console.log(error.response)
			})

	}

	useEffect(() => {
		
		getAllPlaylists()
	}, [])

	const handleChangeNewPlaylist = (e) => {
		newPlaylist = e.target.value
	}

	const handleClickNewPlaylist = () => {
		const body = {
			"name": newPlaylist
		}
		const newPlaylistFunction = async () => {
			console.log(playlists)
			try {
				await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, {
					headers
				})
				getAllPlaylists()
			} catch (error) {
				console.log(error.response)
			}
		}
		newPlaylistFunction()
	}

	const handleClickDeletePlaylist = (x) => {

		const deletePlaylistFunction = async () => {
			try {
				await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${x}`, {
					headers
				})
				getAllPlaylists()
			} catch (error) {
				console.log(error.response)
			}
		}
		deletePlaylistFunction()
	}

	

	return (
		<div>
			<input onChange={handleChangeNewPlaylist} placeholder="Nova Playlist"></input>
			<button onClick={handleClickNewPlaylist}>Adicionar nova Playlist</button>
			{playlists.map((p, index) => {
				return (
					<div key={index}>
						            <button onClick={()=>handleClickDeletePlaylist(p.id)}>x</button>
						<Musicas key={p.id} playlist={p} />
					</div>)
			})}

		</div>
	);
}

export default Playlists;
