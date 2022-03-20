import Head from 'next/head';
import Layout, { name, siteTitle } from '../../components/layout';
import ContentArticle from '../../components/contentArticle';
import styles from '../page.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME, 
  MARSHMALLOW_GALLERY_DATA_FILE_NAME} from '../../lib/yamlDataLoader';
import Gallery from '../../components/gallery';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const marshmallowGalleryData = loadYamlData(MARSHMALLOW_GALLERY_DATA_FILE_NAME);
  
  return {
    props: {
      communityLinksData,
      marshmallowGalleryData
    }
  }
}

export default function Marshmallow({
  communityLinksData,
  marshmallowGalleryData}) {
  return (
    <Layout communityLinksData={communityLinksData} subURL="friend/marshmallow" title="MARSHMALLOW">
      <Head>
        <title>{`${siteTitle}：棉花糖訊息`}</title>
      </Head>
      <section className={styles.mainContent}>
        <ContentArticle title="棉花糖訊息收集處" subTitle="點擊可至回應的影片時間">
            <Gallery dataList={marshmallowGalleryData} />
        </ContentArticle>
      </section>
    </Layout>
  )
}
