import React from 'react'

function Main() {

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"

    })

    const [allMemes, setAllMemes] = React.useState([])

    function handleChange(event) {
        // const {name , value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [event.target.name]: event.target.value
        }))
    }

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url= allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    React.useEffect( () => {
    async function getMemes()  {
       const res= await fetch ("https://api.imgflip.com/get_memes")
       const data = await res.json ()
        setAllMemes(data.data.memes)
      }
    getMemes()
    }, [])

  return (
    <main>
        <div className='form'>
            <input  
               type="text"
               className='form--input'
               placeholder='Top text'
               name='topText'
               value={meme.topText}
               onChange={handleChange}
            />

            <input 
                type='text'
                className='form--input'
                placeholder='Bottom text'
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
            />

            <button
                className="form--button"
                onClick={getMemeImage}
            >
            Get a new meme image 🖼
            </button>
            <div className='meme'>
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
                <div className='memeImg'>
                    <img src={meme.randomImage} alt="Meme-img" className='meme-Image'/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main