import styles from './avatar.module.css'

export function Avatar(props){
    const hasBorder = props.hasBorder != false;

    return(
        <div>
            <img 
                className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src}
            />
        </div>
    );
}