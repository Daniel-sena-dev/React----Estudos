import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './avatar';


export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar src="https:github.com/Daniel-sena-dev.png" hasBorder={false}/>
             
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Daniel Sena</strong>
                            <time 
                                title='08 de Agosto de 2023' 
                                dateTime='2023-08-08 13:40:00'>
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom, parabéns</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>24</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}