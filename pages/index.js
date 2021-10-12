import Head from 'next/head';
import { Timeline, Tweet } from 'react-twitter-widgets';
import Layout, { name, siteTitle } from '../components/layout';
import YoutubeVideos from '../components/youtubeVideos';
import styles from './index.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME,
  YOUTUBE_VIDEOS_DATA_FILE_NAME } from '../lib/yamlDataLoader';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const youtubeVideosData = loadYamlData(YOUTUBE_VIDEOS_DATA_FILE_NAME);
  return {
    props: {
      communityLinksData,
      youtubeVideosData
    }
  }
}

export default function Home({ communityLinksData, youtubeVideosData }) {
  return (
    <Layout communityLinksData={communityLinksData} subURL="">
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
              <h1>{name}</h1>
              <h4><a href="https://twitter.com/YuutaTsubasa/status/1418251268846276608" target="_blank">詳細介紹</a></h4>
            </div>
            <div>
              為台灣個人勢Vtuber、盔甲正太系程式 Vtuber，語言主要以中文為主，直播內容以程式、唱歌、遊戲、雜談為主。
            </div>
          </section>
        </section>
        <hr />
        <a href="https://yutaii.run/youtube" target="_blank"><img src="/images/week.png" alt="本週行事曆"/></a>
        <hr />
        <section className={styles.news}>
          <YoutubeVideos youtubeVideosData={youtubeVideosData}/>
          <section className={styles.twitter}>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'YuutaTsubasa'
              }}
              options={{
                height: 800
              }} />
          </section>
        </section>
      </section>
    </Layout>
  )
}