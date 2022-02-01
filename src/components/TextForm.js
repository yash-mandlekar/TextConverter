import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [flag, setShowResults] = React.useState(true)

    const Uppercase = () =>{
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const Lowercase = () =>{
        let newtext = text.toLowerCase()
        setText(newtext)
    }
    const Clear = () =>{
        setText("")
    }
    const Hide = () =>{
        flag ?  setShowResults(false) : setShowResults(true)
    }
    const ChangeText = (elem) =>{
        setText(elem.target.value)
    }   
    const Copy = () =>{
        var txt = document.getElementById('mybox')
        txt.select();
        navigator.clipboard.writeText(txt.value)
        props.showAlert('Copied to Clipboard','success')
    }
    const ExtraSpaces = () =>{
        let newText = text.split(/[ ] + /)
        setText(newText.join(" "))
    }

    return (
        <>
        <div className="main">
        <div className='container'>
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark' ||props.mode==='black' ?'#343a40':'white',color: props.mode==='light'?'black':'white'}} value={text} onChange={ChangeText} id="mybox" rows="6"></textarea>
            </div>
            <div className="btn btn-primary mx-2" style={{backgroundColor: props.mode==='light'?'blueviolet':'purple'}} onClick={Uppercase}>Change To Uppercase</div>
            <div className="btn btn-primary mx-2"  style={{backgroundColor: props.mode==='light'?'blueviolet':'purple'}} onClick={Lowercase}>Change To Lowercase</div>
            <div className="btn btn-primary mx-2"  style={{backgroundColor: props.mode==='light'?'blueviolet':'purple'}} onClick={Copy}>Copy Text</div>
            <div className="btn btn-primary mx-2"  style={{backgroundColor: props.mode==='light'?'blueviolet':'purple'}} onClick={ExtraSpaces}>Remove Extra Spaces</div>
            <div className="btn btn-primary mx-2"  style={{backgroundColor: props.mode==='light'?'blueviolet':'purple'}} onClick={Clear}>Clear Text</div>
        </div>
        <div>
            <h1>Summary:-</h1>
            <p>{text.split(" ").length - 1} Words</p>
            <p>{text.length} Character</p>
            <div className="btn btn-primary" style={{backgroundColor: props.mode==='light'?'blueviolet':'purple'}} onClick={Hide}>{ flag ? "Hide" : "Show" }</div>
            <h2>Preview:-</h2>
                { flag ? text : null }
        </div>
        </div> 
        </div>
        </>
    )
}  
