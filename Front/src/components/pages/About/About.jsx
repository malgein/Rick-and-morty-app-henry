import styles from './About.module.css'

const About = () => {
	return(
		<div className={styles.container}>
      <h3 className={styles.title}>Saludos, soy Wilmer </h3>
      <div className={styles.containerBubbles}>
          <div className={styles.bubbles}>
            <span style={{ '--i': 12 }}></span>
            <span style={{ '--i': 24 }}></span>
            <span style={{ '--i': 10 }}></span>
            <span style={{ '--i': 14 }}></span>
            <span style={{ '--i': 23 }}></span>
            <span style={{ '--i': 18 }}></span>
            <span style={{ '--i': 16 }}></span>
            <span style={{ '--i': 19 }}></span>
            <span style={{ '--i': 20 }}></span>
            <span style={{ '--i': 22 }}></span>
            <span style={{ '--i': 25 }}></span>
            <span style={{ '--i': 10 }}></span>
            <span style={{ '--i': 21 }}></span>
            <span style={{ '--i': 15 }}></span>
            <span style={{ '--i': 13 }}></span>
            <span style={{ '--i': 16 }}></span>
            <span style={{ '--i': 27 }}></span>
            <span style={{ '--i': 13 }}></span>
            <span style={{ '--i': 28 }}></span>
            <span style={{ '--i': 29 }}></span>
            <span style={{ '--i': 12 }}></span>
            <span style={{ '--i': 15 }}></span>
            <span style={{ '--i': 11 }}></span>
            <span style={{ '--i': 14 }}></span>
            <span style={{ '--i': 25 }}></span>
            <span style={{ '--i': 35 }}></span>
            <span style={{ '--i': 7 }}></span>
            <span style={{ '--i': 30 }}></span>
            <span style={{ '--i': 18 }}></span>
            <span style={{ '--i': 16 }}></span>
            <span style={{ '--i': 19 }}></span>
            <span style={{ '--i': 12 }}></span>
            <span style={{ '--i': 30 }}></span>
            <span style={{ '--i': 27 }}></span>
            {/* <span style='--i:12;'></span>
            <span style='--i:24;'></span>
            <span style='--i:10;'></span>
            <span style='--i:14;'></span>
            <span style='--i:23;'></span>
            <span style='--i:18;'></span>
            <span style='--i:16;'></span>
            <span style='--i:19;'></span>
            <span style='--i:20;'></span>
            <span style='--i:22;'></span>
            <span style='--i:25;'></span>
            <span style='--i:10;'></span>
            <span style='--i:21;'></span>
            <span style='--i:15;'></span>
            <span style='--i:13;'></span>
            <span style='--i:26;'></span>
            <span style='--i:17;'></span>
            <span style='--i:13;'></span>
            <span style='--i:28;'></span> */}
          </div>
        </div>
      <div className={styles.containerImg}>
        <img src='https://avatars.githubusercontent.com/u/86303596?v=4' alt='wilmer-img' />  
        <div className={styles.containerText}>
          <p>Soy desarrollador front-end, me especializo en la estructura y
            creación de interfaz de usuario, actualmente aprendiendo desarrollo back-end para un
            mejor aporte a quienes quieran adquirir mis servicios, busco oportunidades laborales donde pueda demostrar mi valía en conjunto con otros compañeros que comparten mi visión
          </p>
          <p>
            Tengo una mente crítica, pensamiento abierto, si tienes un problema soy parte.
            de la solución, me encanta aprender y trabajar en equipo
          </p>
          <p>
            Soy un desarrollador amante de la programación, las computadoras y todo ese tipo de tecnologías,
            esa es mi pasión después de las ciencias de la salud, mi especialidad es el front-end, me encanta diseñar y crear aplicaciones increíbles, es realmente genial crear algo dando instrucciones a una máquina.
         </p>
        </div>
    
      </div>
      
		</div>
	)
}

export default About