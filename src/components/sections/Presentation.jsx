import styles from './Presentation.module.css'
import {useEffect, useState} from 'react'


function Presentation(){
    const [text, setText] = useState('')
    const toRotate = ['Maria Júlia', 'Desenvolvedora FrontEnd']
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const period = 100
    const [delta, setDelta] = useState(100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText)

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setDelta(period)
            setLoop(loop+1)
        }
    }

    return(
        <div className={styles.presentation}>
            <h1>{text}</h1>
        </div>
    )
}

export default Presentation