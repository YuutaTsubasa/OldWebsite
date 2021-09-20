import ContentSection from './contentSection';
import styles from './contentArticle.module.css';

export default function ContentArticle({children, title, backgroundType}) {
    return (
        <article>
            <h2 className={styles.header}>{title}</h2>
                <ContentSection backgroundType={backgroundType}>{children}</ContentSection>
            <hr/>
        </article>);
}
