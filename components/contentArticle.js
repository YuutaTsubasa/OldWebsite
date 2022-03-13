import styles from './contentArticle.module.css';

export default function ContentArticle({children, title}) {
    return (
        <article className={styles.box}>
            <h2 className={styles.header}>{title}</h2>
            {children}
        </article>);
}
