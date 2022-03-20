import Head from 'next/head';
import Layout, { name, siteTitle } from '../../components/layout';
import ContentArticle from '../../components/contentArticle';
import styles from '../page.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME, 
  OPAY_GALLERY_DATA_FILE_NAME} from '../../lib/yamlDataLoader';
import Gallery from '../../components/gallery';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const opayGalleryData = loadYamlData(OPAY_GALLERY_DATA_FILE_NAME);
  
  return {
    props: {
      communityLinksData,
      opayGalleryData
    }
  }
}

export default function OPay({
  communityLinksData,
  opayGalleryData}) {
  return (
    <Layout communityLinksData={communityLinksData} subURL="friend/opay" title="OPAY">
      <Head>
        <title>{`${siteTitle}：歐付寶訊息`}</title>
      </Head>
      <section className={styles.mainContent}>
        <ContentArticle title="歐付寶訊息收集處" subTitle="點擊可至回應的影片時間">
            <Gallery dataList={opayGalleryData} />
        </ContentArticle>
      </section>
    </Layout>
  )
}
