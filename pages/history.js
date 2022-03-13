import Head from 'next/head';
import Layout, { name, siteTitle } from '../components/layout';
import ContentArticle from '../components/contentArticle';
import styles from './history.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME, 
  YOUTUBE_VIDEOS_DATA_FILE_NAME, 
  WEEK_GALLERY_DATA_FILE_NAME } from '../lib/yamlDataLoader';
import Gallery from '../components/gallery';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const youtubeVideosData = loadYamlData(YOUTUBE_VIDEOS_DATA_FILE_NAME);
  const weekGalleryData = loadYamlData(WEEK_GALLERY_DATA_FILE_NAME);
  const archivedStreamingsData = GetGalleryData(
    youtubeVideosData, 
    VIDEO_NAME_REGEXP,
    "video/",
    "v/");
  const toolGalleryData = GetGalleryData(
    youtubeVideosData,
    TOOL_VIDEO_NAME_REGEXP,
    "tool/tool",
    "tool/");

  return {
    props: {
      communityLinksData,
      archivedStreamingsData,
      toolGalleryData,
      weekGalleryData
    }
  }
}

const VIDEO_NAME_REGEXP = /.+Vol\. ([0-9]+)\:.+/;
const TOOL_VIDEO_NAME_REGEXP = /.+悠太工作坊.+\#([0-9]+).+/;

function GetGalleryData(youtubeVideosData, regexp, imageBase, urlBase) {
  return youtubeVideosData
      .filter(video => regexp.test(video.name))
      .map(video => {
          let result = regexp.exec(video.name);
          return {
              image: `/images/thumbnails/${imageBase}${result[1]}.png`,
              title: video.name,
              url: `https://yutaii.run/${urlBase}${result[1]}`,
              date: video.date,
              authors: video.authors
          };
      });
}

export default function History({
  communityLinksData,
  archivedStreamingsData,
  toolGalleryData,
  weekGalleryData}) {
  return (
    <Layout communityLinksData={communityLinksData} subURL="history" title="HISTORY">
      <Head>
        <title>{`${siteTitle}：歷史紀錄`}</title>
      </Head>
      <section className={styles.mainContent}>
        <ContentArticle title="歷來大事記" backgroundType="full">
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
          </ul>
        </ContentArticle>

        <ContentArticle title="歷來直播（URL: v/編號）">
          <Gallery dataList={archivedStreamingsData}/>
        </ContentArticle>

        <ContentArticle title="歷來工具介紹影片（URL: tool/編號）">
          <Gallery dataList={toolGalleryData}/>
        </ContentArticle>

        <ContentArticle title="歷來直播週表">
          <Gallery dataList={weekGalleryData}/>
        </ContentArticle>
      </section>
    </Layout>
  )
}
