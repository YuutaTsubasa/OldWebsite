import Head from 'next/head';
import Layout, { name, siteTitle } from '../../components/layout';
import ContentArticle from '../../components/contentArticle';
import styles from '../page.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME, 
  WEEK_GALLERY_DATA_FILE_NAME } from '../../lib/yamlDataLoader';
import {GetArchivedStreamingsData} from '../history';
import Gallery from '../../components/gallery';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const weekGalleryData = loadYamlData(WEEK_GALLERY_DATA_FILE_NAME);

  return {
    props: {
      communityLinksData,
      weekGalleryData
    }
  }
}

export default function Week({
  communityLinksData,
  weekGalleryData}) 
{
  return (
    <Layout communityLinksData={communityLinksData} subURL="history/streaming" title="STREAMING">
      <Head>
        <title>{`${siteTitle}：直播週表`}</title>
      </Head>
      <section className={styles.mainContent}>
        <ContentArticle title="歷來直播週表">
          <Gallery dataList={weekGalleryData}/>
        </ContentArticle>
      </section>
    </Layout>
  )
}
