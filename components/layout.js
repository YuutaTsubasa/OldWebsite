import Head from 'next/head';
import CommunityLinks from './communityLinks';
import Navigator from './navigator';
import styles from './layout.module.css';

export const name = '悠太翼 Yuuta Tsubasa'
export const siteTitle = '悠太翼(YuutaTsubasa) 🛡️ 盔甲正太系程式 Vtuber';
const description = `${name} 官方網站`;
const baseURL = "https://yuuta-tsubasa.studio";
const imageURL = `${baseURL}/images/banner.png`;

export default function Layout({children, subURL, title, communityLinksData}) {
    return (
        <div className={styles.layout}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/fontawesome/css/all.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@800&family=Noto+Sans+SC:wght@500&family=Noto+Sans+TC:wght@500&display=swap" rel="stylesheet" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@YuutaTsubasa"/>
                <meta name="twitter:creator" content="@YuutaTsubasa"/>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={`${baseURL}/${subURL}`} />
                <meta property="og:image" content={imageURL}/>
                <meta name="twitter:image" content={imageURL}/>
            </Head>
            {(subURL == "") ? (<header>
                <video src="videos/background.mp4" muted autoPlay loop playsInline></video>
                <div className={styles.flex}>
                    <img src="images/logo.png" alt="Logo" className={styles.mainLogo} />
                </div>
            </header>) : (<header className={styles.notFull}></header>)}
            <Navigator subURL={subURL}/>
            <main>
                <section>
                    {title && (<h1>{title}</h1>)}
                    <hr />
                    {children}
                </section>
            </main>
            <footer>
                <img src="images/logo.png" alt="Logo" className={styles.logo100px}/><br/>
                <CommunityLinks communityLinksData={communityLinksData}/>
                Copyright by 悠太翼 Yuuta Tsubasa
            </footer>
        </div>
    );
};
