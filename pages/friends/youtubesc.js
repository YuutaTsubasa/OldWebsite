import Head from 'next/head';
import Layout, { name, siteTitle } from '../../components/layout';
import ContentArticle from '../../components/contentArticle';
import styles from '../page.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME, 
  YOUTUBE_SUPER_CHAT_GALLERY_DATA_FILE_NAME} from '../../lib/yamlDataLoader';
import Gallery from '../../components/gallery';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const youtubeSuperChatGalleryData = loadYamlData(YOUTUBE_SUPER_CHAT_GALLERY_DATA_FILE_NAME);
  
  return {
    props: {
      communityLinksData,
      youtubeSuperChatGalleryData
    }
  }
}

export default function ECPay({
  communityLinksData,
  youtubeSuperChatGalleryData}) {
  return (
    <Layout communityLinksData={communityLinksData} subURL="friend/ecpay" title="YOUTUBE SUPERCHAT">
      <Head>
        <title>{`${siteTitle}：Youtube 超級留言訊息`}</title>
      </Head>
      <section className={styles.mainContent}>
        <ContentArticle title="Youtube 超級留言訊息收集處" subTitle="點擊可至回應的影片時間">
            <Gallery dataList={youtubeSuperChatGalleryData} />
        </ContentArticle>
      </section>
    </Layout>
  )
}
