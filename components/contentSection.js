import styles from './contentSection.module.css';

export default function ContentSection({children, backgroundType}) {
    return (<section className={backgroundType === "full" ? styles.backgroundFullSection : styles.backgroundTransparentSection}>
        <section className={styles.contentSection}>
            {children}
        </section>
    </section>);
}