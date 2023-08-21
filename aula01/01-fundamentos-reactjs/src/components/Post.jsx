import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './avatar';

//author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
// content: ""

export function Post(props){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/diego3g.png"/>
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
                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no React</p>
                <p>👉 <a href='#'>https://github.com/Daniel-sena-dev</a></p>
                <p>
                    <a href='#'>#novoprojeto </a>
                    <a href='#'>#React </a>
                    <a href='#'>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feeedback</strong>

                <textarea
                    placeholder='Deixe um comentario'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>

            </div>

        </article>

    );
}