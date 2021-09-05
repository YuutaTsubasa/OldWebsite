import styles from './communityLinks.module.css';

export default function CommunityLinks({communityLinksData}) {
    return (
        <div className={styles.communityLinks}>
            <ul>
                {communityLinksData.map(data => {
                    return (
                        <li key={data.name}><a href={data.url} target="_blank">
                            {data.fontawesome && (<i className={data.fontawesome}></i>)}
                            {data.image && (<img src={data.image} alt={data.name}/>)}
                        </a></li>
                    )
                })}
            </ul>
        </div>
    )
}
