import Head from 'next/head';
import Layout, { name, siteTitle } from '../components/layout';
import ContentArticle from '../components/contentArticle';
import styles from './history.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME, 
  YU_FRIENDS_ART_GALLERY_DATA_FILE_NAME,
  YU_PAID_ART_GALLERY_DATA_FILE_NAME,
  MARSHMALLOW_GALLERY_DATA_FILE_NAME,
  ECPAY_GALLERY_DATA_FILE_NAME } from '../lib/yamlDataLoader';
import Gallery from '../components/gallery';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const yuFriendsArtGalleryData = loadYamlData(YU_FRIENDS_ART_GALLERY_DATA_FILE_NAME);
  const yuPaidArtGalleryData = loadYamlData(YU_PAID_ART_GALLERY_DATA_FILE_NAME);
  const marshmallowGalleryData = loadYamlData(MARSHMALLOW_GALLERY_DATA_FILE_NAME);
  const ecpayGalleryData = loadYamlData(ECPAY_GALLERY_DATA_FILE_NAME);
  
  return {
    props: {
      communityLinksData,
      yuFriendsArtGalleryData,
      yuPaidArtGalleryData,
      marshmallowGalleryData,
      ecpayGalleryData
    }
  }
}

export default function Creation({
  communityLinksData,
  yuFriendsArtGalleryData,
  yuPaidArtGalleryData,
  marshmallowGalleryData,
  ecpayGalleryData}) {
  return (
    <Layout communityLinksData={communityLinksData}>
      <Head>
        <title>{`${siteTitle}：翼友與協助者`}</title>
      </Head>
      <section className={styles.mainContent}>
        <ContentArticle title="【#悠然翼繪】收集處（點擊可至原推文處）">
            <Gallery dataList={yuFriendsArtGalleryData} />
        </ContentArticle>
        <ContentArticle title="委託圖繪收集處（點擊可至繪師推特）">
            <Gallery dataList={yuPaidArtGalleryData} />
        </ContentArticle>
        <ContentArticle title="綠界訊息收集處（點擊可至回應的影片時間）">
            <Gallery dataList={ecpayGalleryData} />
        </ContentArticle>
        <ContentArticle title="棉花糖收集處（點擊可至回應的影片時間）">
            <Gallery dataList={marshmallowGalleryData} />
        </ContentArticle>
      </section>
    </Layout>
  )
}
