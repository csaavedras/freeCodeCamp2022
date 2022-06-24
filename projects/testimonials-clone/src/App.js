import React from 'react'
import './app.css'
import Testimonials from './components/Testimonials';

function App() {
  return(
    <main>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonials 
        image='https://www.freecodecamp.org/espanol/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png'
        name='Shawn Wang'
        country='Singapur'
        job='Ingeniero de Software'
        company='Amazon'
        testimonials='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
      />
      <Testimonials 
        image='https://www.freecodecamp.org/espanol/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png'
        name='Emma Bostian'
        country='Suecia'
        job='Ingeniera de Software'
        company='Spotify'
        testimonials='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
      />
      <Testimonials 
        image='https://www.freecodecamp.org/espanol/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png'
        name='Sarah Chima'
        country='Nigeria'
        job='Ingeniera de Software '
        company='ChatDesk'
        testimonials='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'
      />
    </main>
  );
}

export default App;