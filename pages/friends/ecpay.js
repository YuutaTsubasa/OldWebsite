import Head from 'next/head';
import Layout, { name, siteTitle } from '../../components/layout';
import ContentArticle from '../../components/contentArticle';
import styles from '../page.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME, 
  ECPAY_GALLERY_DATA_FILE_NAME} from '../../lib/yamlDataLoader';
import Gallery from '../../components/gallery';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const ecpayGalleryData = loadYamlData(ECPAY_GALLERY_DATA_FILE_NAME);
  
  return {
    props: {
      communityLinksData,
      ecpayGalleryData
    }
  }
}

export default function ECPay({
  communityLinksData,
  ecpayGalleryData}) {
  return (
    <Layout communityLinksData={communityLinksData} subURL="friend/ecpay" title="ECPAY">
      <Head>
        <title>{`${siteTitle}：綠界訊息`}</title>
      </Head>
      <section className={styles.mainContent}>
        <ContentArticle title="綠界訊息收集處" subTitle="點擊可至回應的影片時間">
            <Gallery dataList={ecpayGalleryData} />
        </ContentArticle>
      </section>
    </Layout>
  )
}
