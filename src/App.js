import React,{useState,useEffect} from 'react';
import './index.css'
import Editor from './components/Editor'
import useLocalStorage from './hooks/useLocalStorage'

function App() {

const [html,setHtml] = useLocalStorage('html','')
const [css,setCss] = useLocalStorage('css','')
const [js,setJs] = useLocalStorage('js','')
const [srcDoc,setDoc] = useState('')

useEffect(()=>{
  const timeout = setTimeout(()=>{
            setDoc(`
            <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>
            `)
  },250)
  return ()=> clearTimeout(timeout)
},[html,css,js]);




  return (
    <div class="main-container" >
  <div className="lane top-lane">
      <Editor
       displayName="HTML"
       language="xml"
       value={html}
       onChange={setHtml}
        />
         <Editor
       displayName="CSS"
       language="css"
       value={css}
       onChange={setCss}
        />
            <Editor
       displayName="JS"
       language="javascript"
       value={js}
       onChange={setJs}
        />
  </div>
  <div className="bottom" >
    <iframe
    srcDoc={srcDoc}
    title="output"
    sandbox="allow-scripts"
    frameBorder="0"
    height="100%"
    width="100%"
   />
  </div>
  </div>
  )
}

export default App;
