import React from "react"


const Display = (props) => {

    const {songs} = props
    
    console.log('songs',songs)

    const loaded = () => (
        <div className="container">
            <h1>Favorite Songs</h1>
            {songs.map( (item, index) => (
                <article id="display-contatiner"
                    key={item.TunrId}>
                    <h3>Title: {item.Title}</h3>
                    <h3>Artist: {item.Artist}</h3>
                    <h3>Song Length: {item.Time}</h3>
                    <button
                        onClick={ () => {
                            props.selectSong(item)
                            props.history.push('/edit')
                        }}
                    >Edit
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




    return songs.length > 0 ? loaded() : loading()
   
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