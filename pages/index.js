import Head from 'next/head';
import { Timeline, Tweet } from 'react-twitter-widgets';
import Layout, { name, siteTitle } from '../components/layout';
import styles from './index.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME,
  YOUTUBE_VIDEOS_DATA_FILE_NAME } from '../lib/yamlDataLoader';
import ContentArticle from '../components/contentArticle';

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
    <Layout communityLinksData={communityLinksData} subURL="" title="MAIN">
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <ContentArticle title="自我介紹">
      <img src="images/introduce.jpg" alt="自我介紹" className={styles.image}/>
      <p>
      為台灣個人勢Vtuber、盔甲正太系程式 Vtuber，語言主要以中文為主，直播內容以程式、唱歌、遊戲、雜談為主。
      </p>
      </ContentArticle>
      <ContentArticle title="本週行事曆">
        <a href="https://yutaii.run/youtube" target="_blank">
          <img src="/images/week.png" alt="本週行事曆" className={styles.image}/>
        </a>
      </ContentArticle>
      <ContentArticle title="官方 Youtube">
        <iframe className={styles.youtube} width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLHDTW9-5SsB_GEclHq9W6njQjRSCNefEo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
      </ContentArticle>
      <ContentArticle title="官方 Twitter">
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'YuutaTsubasa'
            }}
            options={{
              height: 800
            }} />
        </ContentArticle>
    </Layout>
  )
}