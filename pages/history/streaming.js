import Head from 'next/head';
import Layout, { name, siteTitle } from '../../components/layout';
import ContentArticle from '../../components/contentArticle';
import styles from '../page.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME, 
  YOUTUBE_VIDEOS_DATA_FILE_NAME } from '../../lib/yamlDataLoader';
import {GetArchivedStreamingsData} from '../history';
import Gallery from '../../components/gallery';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const youtubeVideosData = loadYamlData(YOUTUBE_VIDEOS_DATA_FILE_NAME);
  const archivedStreamingsData = GetArchivedStreamingsData(youtubeVideosData);

  return {
    props: {
      communityLinksData,
      archivedStreamingsData
    }
  }
}

export default function Streaming({
  communityLinksData,
  archivedStreamingsData}) 
{
  return (
    <Layout communityLinksData={communityLinksData} subURL="history/streaming" title="STREAMING">
      <Head>
        <title>{`${siteTitle}：直播紀錄`}</title>
      </Head>
      <section className={styles.mainContent}>
        <ContentArticle title="歷來直播" subTitle="URL: https://yutaii.run/v/編號">
          <Gallery dataList={archivedStreamingsData}/>
        </ContentArticle>
      </section>
    </Layout>
  )
}
