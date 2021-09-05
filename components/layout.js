import Head from 'next/head';
import CommunityLinks from './communityLinks';
import styles from './layout.module.css';

export const name = '悠太翼 Yuuta Tsubasa'
export const siteTitle = '悠太翼(YuutaTsubasa) 🛡️ 盔甲正太系程式 Vtuber';

export default function Layout({children, communityLinksData}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/fontawesome/css/all.css" />
                <meta 
                    name="description"
                    content="悠太翼的網站"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                <CommunityLinks communityLinksData={communityLinksData}/>
                <div className={styles.banner}></div>
            </header>
            <main>{children}</main>
            <footer className={styles.footer}>
                <img src="/images/logo.png" alt="悠太翼"/>
            </footer>
        </div>
    );
};