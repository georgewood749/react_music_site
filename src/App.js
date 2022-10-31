// import React, {Component} from 'react'

// import Artist from './Components/Artist'
// import Albums from './Components/Albums'

// const App = () => {

//     const intro = "Led Zeppelin were an English rock band formed in London in 1968. The group comprised vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences, including blues and folk music. Led Zeppelin have been credited as significantly impacting the nature of the music industry, particularly in the development of album-oriented rock (AOR) and stadium rock."

//     const [artist, setArtist] = useState([
//         { name: "Led Zeppelin", genre: "Classic Rock", intro: {intro}}
//     ])

//     return (
//         <>
//             <Artist />
//         </>
//     )
// }

// // function App(){
// //     return(
// //         <>
// //         <Artist />
// //         </>
// //     )
// // }

// export default App


import React, { Component } from 'react';
import Artist from './Components/Artist'
import Albums from './Components/Albums'

function App(){
    return (
        <>
        <Artist />
        <Albums />
        </>
    )
}

export default App;