import styles from './gallery.module.css';

export default function Gallery({dataList, hasDescription = true, useBigItem}) {
    return (<div className={useBigItem ? styles.galleryList2fr : styles.galleryList}>
        {dataList.map((data, index) => (
        <div className={styles.galleryListItem} key={index}>
            { hasDescription &&
            <div className={styles.description}>
                {data.title && (<h4><i className={`fas fa-book ${styles.icon}`}></i><a href={data.url} target="_blank">{data.title}</a></h4>)}
                {data.authors && getAuthors(data.authors)}
                {data.date && (<div><i className={`far fa-clock ${styles.icon}`}></i>{data.date}</div>)}
                {data.tags && getTags(data.tags)}
            </div>
            }
            <a href={data.url} target="_blank">
                <img src={data.image} alt={data.title}/>
            </a>
            <hr />
        </div>))}
    </div>);
}

function getAuthors(authors) {
    return (<div><i className={`far fa-user ${styles.icon}`}></i>
        {authors
            .map(author => author.url ? (<a href={author.url} target="_blank">{author.name}</a>) : author.name)
            .reduce((previous, current) => [previous, "、", current])}
        </div>)
}

function getTags(tags) {
    return (<div><i className={`fas fa-tags ${styles.icon}`}></i>
        {tags
            .map(tag => (<a href={`https://twitter.com/hashtag/${tag}`} target="_blank">{`#${tag}`}</a>))
            .reduce((previous, current) => [previous, "、", current])}
        </div>)
}