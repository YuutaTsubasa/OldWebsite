import Head from 'next/head';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Layout, { siteTitle } from '../components/layout';
import styles from './index.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME } from '../lib/yamlDataLoader';
import ContentArticle from '../components/contentArticle';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  return {
    props: {
      communityLinksData
    }
  }
}

export default function Home({ communityLinksData }) {
  return (
    <Layout communityLinksData={communityLinksData} subURL="" title="MAIN">
      <Head>
        <title>{siteTitle}</title>
      </Head>
{/* 
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
      </ContentArticle> */}
      <ContentArticle title="官方 Youtube">
        <iframe className={styles.youtube} width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLHDTW9-5SsB_GEclHq9W6njQjRSCNefEo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </ContentArticle>
      <ContentArticle title="官方 Twitter">
        <div className={styles.twitter}>
          <TwitterTimelineEmbed
            sourceType='profile'
            screenName='YuutaTsubasa'
            options={{
              height: 800
            }} />
         </div>
        </ContentArticle>
        <ContentArticle title="歷來大事記">
          <ul>
            <li>2021/07/31: 初配信，正式活動開始。</li>
            <li>2021/08/01: Youtube 200 訂閱達成。</li>
            <li>2021/08/18: Youtube 300 訂閱達成。</li>
            <li>2021/09/11: 第一次籌備八人大型連動直播《猫島家族大連動》。</li>
            <li>2021/09/17: Youtube 400 訂閱達成。</li>
            <li>2021/10/10: Youtube 500 訂閱達成，開始展開《500 訂閱大調整》計畫。</li>
            <li>2021/10/20: Youtube 社群功能開放、Instagram 與 Plurk 社群啟動。</li>
            <li>2021/10/31: Youtube 600 訂閱達成。</li>
            <li>2021/12/19: Youtube 700 訂閱達成。</li>
            <li>2022/01/13: Youtube 800 訂閱達成。</li>
            <li>2022/02/25: Youtube 900 訂閱達成。</li>
            <li>2022/03/13: 網站新樣式釋出。（預計會再調整內容顯示的方法）</li>
            <li>2022/03/29: Youtube 1000 訂閱達成。</li>
            <li>2022/04/07: Youtube 收益化達成。</li>
            <li>2022/09/20: Youtube 2000 訂閱達成。</li>
          </ul>
        </ContentArticle>

    </Layout>
  )
}
