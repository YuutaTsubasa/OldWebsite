import styles from './youtubeVideos.module.css';

export default function YoutubeVideos({ youtubeVideosData }) {
    return (
    <section className={styles.youtubeVideosSection}>
        <h2>Youtube 最新直播存檔與影片</h2>
        <ul className={styles.youtubeVideoList}>
            { youtubeVideosData.slice(0, 9).map(video => {
                return (
                    <li>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.url}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                        <h5><a href={`https://www.youtube.com/watch?v=${video.url}`} target="_blank">{video.name}</a></h5>
                    </li>
                )
            })}
        </ul>
    </section>)
}