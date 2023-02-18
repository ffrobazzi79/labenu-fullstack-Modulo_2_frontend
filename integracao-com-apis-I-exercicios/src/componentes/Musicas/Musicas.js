import React, { useState, useEffect } from 'react'
import { Botao, ContainerInputs, ContainerMusicas, InputMusica, Musica } from './styled'
import axios from 'axios'

// const musicasLocal = [{
//     artist: "Artista 1",
//     id: "1",
//     name: "Musica1",
//     url: "http://spoti4.future4.com.br/1.mp3"
// },
// {
//     artist: "Artista 2",
//     id: "2",
//     name: "Musica2",
//     url: "http://spoti4.future4.com.br/2.mp3"
// },
// {
//     artist: "Artista 3",
//     id: "3",
//     name: "Musica3",
//     url: "http://spoti4.future4.com.br/3.mp3"
// }]

export default function Musicas(props) {
    const [musicas, setMusicas] = useState([])
    let art, mus, url = ""

    const headers = {
        Authorization: "fernando-robazzi-conway"
    }

    const getPlaylistTracks = () => {
		axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`, {
			headers: {
				Authorization: "fernando-robazzi-conway"
			}
		})
	.then(response => {
		setMusicas(response.data.result.tracks)
	})
	.catch(error => {
		console.log(error.response)
	})
}

    const handleClick = () => {

        const body = {
            "name": art,
            "artist": mus,
            "url": url
        }

  

        const addTrackToPlaylist = () => {
            axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`, body, {
                headers
            })
        .then(response => {
            getPlaylistTracks()
            console.log("Track Created!")
        })
        .catch(error => {
            console.log(error.response)
        })
    } 
    addTrackToPlaylist()
    
    }

    const handleChangeArt = (e) => {
        art = e.target.value
    }
    
    const handleChangeMus = (e) => {
        mus = e.target.value
    }

    const handleChangeUrl = (e) => {
        url = e.target.value
    }

    const handleClickRemove = (x) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks/${x}`, {
                headers
            })
        .then(response => {
            getPlaylistTracks()
            console.log("Track Deleted!")
        })
        .catch(error => {
            console.log(error.response)
        })
    }

	useEffect(()=> {
		getPlaylistTracks()
	}, [])
    return (
        <ContainerMusicas>
            <h2>{props.playlist.name}</h2>
            {musicas.map((musica) => {
                return (
                    <Musica key={musica.id}>
                        <h3>{musica.name} - {musica.artist}</h3>
                        <audio src={musica.url} controls />
                        <button onClick={()=>handleClickRemove(musica.id)}>X</button>
                    </Musica>)
            })}
            <ContainerInputs>
                <InputMusica onChange={handleChangeArt} placeholder="artista" />
                <InputMusica onChange={handleChangeMus} placeholder="musica" />
                <InputMusica onChange={handleChangeUrl} placeholder="url" />
                <Botao onClick={handleClick}>Adicionar musica</Botao>
            </ContainerInputs>
        </ContainerMusicas>
    )
}

