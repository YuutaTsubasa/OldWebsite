import Head from 'next/head';
import Layout, { name, siteTitle } from '../../components/layout';
import ContentArticle from '../../components/contentArticle';
import styles from '../page.module.css';
import { 
  loadYamlData, 
  COMMUNITIES_DATA_FILE_NAME, 
  YU_FRIENDS_ART_GALLERY_DATA_FILE_NAME } from '../../lib/yamlDataLoader';
import Gallery from '../../components/gallery';

export async function getStaticProps() {
  const communityLinksData = loadYamlData(COMMUNITIES_DATA_FILE_NAME);
  const yuFriendsArtGalleryData = loadYamlData(YU_FRIENDS_ART_GALLERY_DATA_FILE_NAME);

  return {
    props: {
      communityLinksData,
      yuFriendsArtGalleryData
    }
  }
}

export default function Fanarts({
  communityLinksData,
  yuFriendsArtGalleryData}) {
  return (
    <Layout communityLinksData={communityLinksData} subURL="friends/fanarts" title="FANS' ART">
      <Head>
        <title>{`${siteTitle}：粉絲繪圖`}</title>
      </Head>
      <section className={styles.mainContent}>
        <ContentArticle title="【#悠然翼繪】收集處" subTitle="點擊可至原推文處">
            <Gallery dataList={yuFriendsArtGalleryData} useBigItem={true} />
        </ContentArticle>
      </section>
    </Layout>
  )
}
