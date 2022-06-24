import React from 'react';

function Testimonials(props){
    return(
        <section className='testimonials_card'>
            <img className='card_image' src={props.image} alt='profile_image'/>
            <div className='card_info'>
                <h3>
                    <span>{props.name}</span> en {props.country} <br/>
                    {props.job} en <span>{props.company}</span>
                </h3>
                <p>
                "{props.testimonials}"
                </p>
            </div>
        </section>
    );
}

export default Testimonials;