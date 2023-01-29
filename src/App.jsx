import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="test1">
      <img className="test2" src="../src/assets/gasd31asd.png"/>
      <h1> Lisandro Brasolin </h1>
      <h3 className='colorcito'> Full Stack Developer</h3>
      <h3><a href="https://lisandrob.github.io">lisandrob.github.io</a></h3>
      <div className='buttons'>
        <button>
          <a href="mailto:lisandrobrasolin@gmail.com"><img src="https://seeklogo.com/images/M/mail-envelope-symbol-logo-4AB011B4E0-seeklogo.com.png" alt="" /></a>
        </button>
        <button class="linkedin">
          <a href="https://linkedin.com/in/lbrasolin"><img src="https://www.svgrepo.com/download/108614/linkedin.svg" alt="" /></a>
        </button>
      </div>
      <div className='text'>
        <h2> About </h2>
        <p>Hola! Soy Lisandro, desarrollador web Full Stack, estoy en constante busca de proyectos que requieran mi nivel de habilidades, me considero una persona capaz, con facilidad para aprender, dispuesta, comprometida con lo que hace, que sabe valorar las oportunidades y que aprendió a no rendirse.
Busco   un trabajo en el que primen el respeto y los equipos, que me permita seguir estudiando, crecer profesionalmente y dar lo mejor de mí en cada paso.</p>
        <h2> Interests </h2>  
        <p> Música, programación, literatura, videojuegos, películas, fanático de Internet.</p>  
      </div>
      <footer>
        <div className='footer'>
          <a href="https://instagram.com/computerpastiche"> <img src="../src/assets/dasd121.png"/> </a>
          <a href="https://github.com/LisandroB"> <img src="../src/assets/25231.png" alt="" /></a>
        </div>
      </footer>
    </main>
  )
}

export default App
