import './About.css';

const About = () => {

    return (
        <div className='about-container'>
            <div className='container'>
                <h2>Geekfan</h2>
                <img src="../assets/Choso.jpeg" alt="Choso img" />
            </div>
            <div className='container'>
                <div className='info-container'>
                    <h3>Melanie Aidee Vite Guzmán</h3>
                    <h4>Correo</h4>
                    <p>melanievite38@gmail.com</p>
                    <h4>Descripción</h4>
                    <p>Soy una ingeniera química que tuvo la fortuna de acercarse a la tecnología gracias a programas de inclusión para mujeres, ahora quiero crecer profesionalmente en este campo y me encuentro en formación para ser desarrolladora Full Stack. </p>
                </div>
            </div>
        </div>
    )
}

export default About;