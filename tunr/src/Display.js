import React from "react"

// title 
// artist
// time

const Display = (props) => {

    const {songs} = props
    // const songs = props.songs
    console.log('songs',songs)

    const loaded = () => (
        <div className="container">
            <h1>Playlist 1</h1>
            {songs.body.map( (item, index) => (
                <article
                    key={item._id}>
                    <h3>Title: {item.Title}</h3>
                    <h3>Artist: {item.Artist}</h3>
                    <h3>Song Length: {item.Time}</h3>
                    
                    <button
                        onClick={ () => {
                            props.selectSong(item)
                            props.history.push('/create')
                        }}
                    >Add new song
                    </button>
                    <button
                        onClick={ () => {
                            props.selectSong(item)
                            props.history.push('/edit')
                        }}
                    >Edit new song
                    </button>
                    <button
                        onClick={ () => {
                            props.deleteSong(item)
                        }}>
                        Delete
                    </button>



                </article>
            ))}
        </div>    
    )

    const loading = () => {
        return <h1>Loading..!</h1>
    }




    return songs.body.length > 0 ? loaded() : loading()
   
}
 
export default Display 





{/* <>
{songs.body.map( (item, index) => (
   <div>
   <h1>Loading..!</h1>
   <button onClick={ () => {
            props.selectSong(item)
            props.history.push('/create')
           }}>Add Song</button>
   </div>
    ))}
</> */}