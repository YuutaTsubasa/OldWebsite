import Head from 'next/head';
import Layout, { name, siteTitle } from '../components/layout';
import ContentArticle from '../components/contentArticle';
import styles from './page.module.css';
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
  const archivedStreamingsData = GetArchivedStreamingsData(youtubeVideosData);
  const toolGalleryData = GetGalleryData(
    youtubeVideosData,
    TOOL_VIDEO_NAME_REGEXP,
    "tool/tool",
    "tool/");
  const coverGalleryData = youtubeVideosData
    .filter(video => video.name.includes("#cover"))
    .reverse()
    .map((video, index) => {
      let number = index + 1;
      return {
        image: `/images/thumbnails/cover/${number}.png`,
        title: video.name,
        url: `https://yutaii.run/cover/${number}`,
        date: video.date,
        authors: video.authors
    }})
    .reverse();

  return {
    props: {
      communityLinksData,
      archivedStreamingsData,
      toolGalleryData,
      coverGalleryData,
      weekGalleryData
    }
  }
}

const VIDEO_NAME_REGEXP = /.+Vol\. ([0-9]+)\:.+/;
const TOOL_VIDEO_NAME_REGEXP = /.+悠太工作坊.+\#([0-9]+).+/;

export function GetArchivedStreamingsData(youtubeVideosData){
  return GetGalleryData(
    youtubeVideosData, 
    VIDEO_NAME_REGEXP,
    "video/",
    "v/");
}

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
  coverGalleryData,
  weekGalleryData}) {
  return (
    <Layout communityLinksData={communityLinksData} subURL="history" title="HISTORY">
      <Head>
        <title>{`${siteTitle}：歷史紀錄`}</title>
      </Head>
      <section className={styles.mainContent}>
        {/* <ContentArticle title="近期直播" subTitle="URL: https://yutaii.run/v/編號">
          <Gallery dataList={archivedStreamingsData.slice(0, 6)}/>
          <a href="/history/streaming" className={styles.moreContent}>更多內容......</a>
        </ContentArticle> */}

        <ContentArticle title="歷來工具介紹影片" subTitle="URL: https://yutaii.run/tool/編號">
          <Gallery dataList={toolGalleryData}/>
        </ContentArticle>

        <ContentArticle title="歷來翻唱影片"  subTitle="URL: https://yutaii.run/cover/編號">
          <Gallery dataList={coverGalleryData}/>
        </ContentArticle>

        {/* <ContentArticle title="歷來直播週表">
          <Gallery dataList={weekGalleryData.slice(0, 6)}/>
          <a href="/history/week" className={styles.moreContent}>更多內容......</a>
        </ContentArticle> */}
      </section>
    </Layout>
  )
}
