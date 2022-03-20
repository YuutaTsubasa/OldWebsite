import styles from './contentArticle.module.css';

export default function ContentArticle({children, title, subTitle}) {
    return (
        <article className={styles.box}>
            {title && <h2 className={styles.header}>{title}</h2>}
            {subTitle && <h3 className={styles.subHeader}>{subTitle}</h3>}
            {children}
        </article>);
}
