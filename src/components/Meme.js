import React from "react"

export default function Meme(){
    const id=React.useId();
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        url:""
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(p=>p.json())
            .then(p=>setAllMemes(p.data.memes))
    },[])
   
   
    function changeHandler(event){
        const {name,value}=event.target
        setMeme(p=>({
            ...p,
            [name]:value
        }))
    }
    function createMeme(event){
        event.preventDefault()      
        //very important as it will hold the values on screen 
        //if not as soon as we press the button the page will be refreashed
        //or you can use onClick for the button which does not require any event
        console.log("formData")
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newUrl = allMemes[randomNumber].url
        console.log(newUrl)
        setMeme(prevMeme=>({
            ...prevMeme,
            url : newUrl
        }))
    }
    
    return(
        <main>
            <form onSubmit={createMeme} className="form">
                <label htmlFor={id+"toptext"}>Description 1</label>
                <input 
                    type="text" 
                    id={id+"toptext"}
                    name="topText"
                    value={meme.topText}
                    onChange={changeHandler}
                    className="form-toptext"
                >
                </input>
                <label htmlFor={id+"bottomtext"}>Description 2</label>
                <input 
                    type="text"
                    id={id+"bottomtext"}
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={changeHandler}
                    className="form-bottomtext"
                ></input>
                <button
                    className="form-button"
                >Get a new meme image 🖼</button>
            </form>
            <img 
                src={meme.url}
                className="form-image"
                alt="new-meme"
            />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            
        </main>
    )
}