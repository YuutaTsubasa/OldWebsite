import Head from 'next/head';
import Layout, { name, siteTitle } from '../components/layout';
import YoutubeVideos from '../components/youtubeVideos';
import styles from './index.module.css';
import { getCommunityLinksData } from "../lib/communitiesDataLoader";
import { getYoutubeVideosData } from '../lib/youtubeVideosDataLoader';

export async function getStaticProps() {
  const communityLinksData = getCommunityLinksData();
  const youtubeVideosData = getYoutubeVideosData();
  return {
    props: {
      communityLinksData,
      youtubeVideosData
    }
  }
}

export default function Home({ communityLinksData, youtubeVideosData }) {
  return (
    <Layout home communityLinksData={communityLinksData}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.mainContent}>
        <section className={styles.selfIntroduction}>
          <section>
            <img src="/images/avatar.png" className={styles.borderCircle} alt={name} />
          </section>
          <section>
            <div className={styles.name}>
              <h1>{name}</h1><h4><a href="https://twitter.com/YuutaTsubasa/status/1418251268846276608" target="_blank">詳細介紹</a></h4>
            </div>
            <div>
              為台灣個人勢Vtuber、盔甲正太系程式 Vtuber，語言主要以中文為主，直播內容以程式、唱歌、遊戲、雜談為主。
            </div>
          </section>
        </section>
        <hr />
        <img src="/images/week.png" alt="本週行事曆"/>
        <hr />
        <section className={styles.news}>
          <YoutubeVideos youtubeVideosData={youtubeVideosData}/>
          <section 
            className={styles.twitter}
            dangerouslySetInnerHTML={ { __html: `<a class="twitter-timeline" data-lang="zh-tw" data-height="800" data-dnt="true" data-theme="light" href="https://twitter.com/YuutaTsubasa?ref_src=twsrc%5Etfw">Tweets by YuutaTsubasa</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`}}/>
        </section>
      </section>
    </Layout>
  )
}