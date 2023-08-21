import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=50' 
                className={styles.cover}
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/Daniel-sena-dev.png"/>
                <strong>Daniel Sena</strong>
                <span>Dev junior</span>                
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}