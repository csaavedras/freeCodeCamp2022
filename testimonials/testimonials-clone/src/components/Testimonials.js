import React from 'react';

function Testimonials(){
    return(
        <section className='testimonials_card'>
            <img className='card_image' src='https://www.freecodecamp.org/espanol/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png' alt='profile_image'/>
            <div className='card_info'>
                <h3>
                    <span>Shawn Wang</span> en Singapur <br/>
                    Ingeniero de Software en <span>Amazon</span>
                </h3>
                <p>
                "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
                </p>
            </div>
        </section>
    );
}

export default Testimonials;