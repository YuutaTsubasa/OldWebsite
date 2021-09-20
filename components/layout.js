import Head from 'next/head';
import CommunityLinks from './communityLinks';
import Navigator from './navigator';
import styles from './layout.module.css';

export const name = '悠太翼 Yuuta Tsubasa'
export const siteTitle = '悠太翼(YuutaTsubasa) 🛡️ 盔甲正太系程式 Vtuber';
const description = `${name} 官方網站`;
const baseURL = "https://yuuta-tsubasa.studio";
const imageURL = `${baseURL}/images/avatar.png`;

export default function Layout({children, subURL, communityLinksData}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/fontawesome/css/all.css" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@YuutaTsubasa"/>
                <meta name="twitter:creator" content="@YuutaTsubasa"/>
                <meta name="og:title" content={siteTitle} />
                <meta name="og:description" content={description} />
                <meta name="og:url" content={`${baseURL}/${subURL}`} />
                <meta name="og:image" content={imageURL}/>
                <meta name="twitter:image" content={imageURL}/>
            </Head>
            <header className={styles.header}>
                <CommunityLinks communityLinksData={communityLinksData}/>
                <div className={styles.banner}></div>
                <Navigator/>
            </header>
            <main>{children}</main>
            <footer className={styles.footer}>
                <img src="/images/logo.png" alt="悠太翼"/>
            </footer>
        </div>
    );
};