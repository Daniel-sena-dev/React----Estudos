import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/Daniel-sena-dev.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Daniel Sena</strong>
                        <span>Dev Junior</span>
                    </div>                
                </div>

                <time 
                    title='08 de Agosto de 2023' 
                    dateTime='2023-08-08 13:40:00'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento</p>
                <p>👉 <a href='#'>jane.desing/doctorcare</a></p>
                <p>
                    <a href='#'>#novoprojeto </a>
                    <a href='#'>#nlw </a>
                    <a href='#'>#rocketseat</a>
                </p>
            </div>

        </article>

    );
}