import Head from 'next/head';
import Layout, { name, siteTitle } from '../components/layout';
import ContentArticle from '../components/contentArticle';
import styles from './page.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME, 
  YU_FRIENDS_ART_GALLERY_DATA_FILE_NAME,
  YU_PAID_ART_GALLERY_DATA_FILE_NAME,
  MARSHMALLOW_GALLERY_DATA_FILE_NAME,
  ECPAY_GALLERY_DATA_FILE_NAME,
  OPAY_GALLERY_DATA_FILE_NAME,
  ACTIVITY_GALLERY_DATA_FILE_NAME } from '../lib/yamlDataLoader';
import Gallery from '../components/gallery';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const yuFriendsArtGalleryData = loadYamlData(YU_FRIENDS_ART_GALLERY_DATA_FILE_NAME);
  const yuPaidArtGalleryData = loadYamlData(YU_PAID_ART_GALLERY_DATA_FILE_NAME);
  const marshmallowGalleryData = loadYamlData(MARSHMALLOW_GALLERY_DATA_FILE_NAME);
  const ecpayGalleryData = loadYamlData(ECPAY_GALLERY_DATA_FILE_NAME);
  const opayGalleryData = loadYamlData(OPAY_GALLERY_DATA_FILE_NAME);
  const activityGalleryData = loadYamlData(ACTIVITY_GALLERY_DATA_FILE_NAME);
  
  return {
    props: {
      communityLinksData,
      yuFriendsArtGalleryData,
      yuPaidArtGalleryData,
      marshmallowGalleryData,
      ecpayGalleryData,
      opayGalleryData,
      activityGalleryData
    }
  }
}

export default function Friends({
  communityLinksData,
  yuFriendsArtGalleryData,
  yuPaidArtGalleryData,
  marshmallowGalleryData,
  ecpayGalleryData,
  opayGalleryData,
  activityGalleryData}) {
  return (
    <Layout communityLinksData={communityLinksData} subURL="friends" title="FRIENDS">
      <Head>
        <title>{`${siteTitle}：翼友與協助者`}</title>
      </Head>
      <section className={styles.mainContent}>
        <ContentArticle title="近期【#悠然翼繪】收集處" subTitle="點擊可至原推文處">
            <Gallery dataList={yuFriendsArtGalleryData.slice(0, 6)} useBigItem={true} />
            <a href="/friends/fanarts" className={styles.moreContent}>更多內容......</a>
        </ContentArticle>
        <ContentArticle title="委託圖繪收集處" subTitle="點擊可至繪師推特">
            <Gallery dataList={yuPaidArtGalleryData} useBigItem={true} />
        </ContentArticle>
        <ContentArticle title="活動收集處" subTitle="點擊可至活動參與連結">
            <Gallery dataList={activityGalleryData} useBigItem={true} />
        </ContentArticle>
        <ContentArticle title="近期綠界訊息收集處" subTitle="點擊可至回應的影片時間">
            <Gallery dataList={ecpayGalleryData.slice(0, 6)} />
            <a href="/friends/ecpay" className={styles.moreContent}>更多內容......</a>
        </ContentArticle>
        <ContentArticle title="近期歐付寶訊息收集處" subTitle="點擊可至回應的影片時間">
            <Gallery dataList={opayGalleryData.slice(0, 6)} />
            <a href="/friends/opay" className={styles.moreContent}>更多內容......</a>
        </ContentArticle>
        <ContentArticle title="近期棉花糖收集處" subTitle="點擊可至回應的影片時間">
            <Gallery dataList={marshmallowGalleryData.slice(0, 6)} />
            <a href="/friends/marshmallow" className={styles.moreContent}>更多內容......</a>
        </ContentArticle>
      </section>
    </Layout>
  )
}
