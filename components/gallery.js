import style from './gallery.module.css';

export default function Gallery({dataList}) {
    return (<div className={style.galleryList}>
        {dataList.map((data, index) => (
        <div className={style.galleryListItem} key={index}>
            <a href={data.url} target="_blank">
                <img src={data.image} alt={data.title}/>
            </a>
            <div className={style.description}>
                {data.title && (<h4><a href={data.url} target="_blank">{data.title}</a></h4>)}
                {data.authors && getAuthors(data.authors)}
                {data.date && (<div><i className={`far fa-clock ${style.icon}`}></i>{data.date}</div>)}
                {data.tags && getTags(data.tags)}
            </div>
        </div>))}
    </div>);
}

function getAuthors(authors) {
    return (<div><i className={`far fa-user ${style.icon}`}></i>
        {authors
            .map(author => author.url ? (<a href={author.url} target="_blank">{author.name}</a>) : author.name)
            .reduce((previous, current) => [previous, "、", current])}
        </div>)
}

function getTags(tags) {
    return (<div><i className={`fas fa-tags ${style.icon}`}></i>
        {tags
            .map(tag => (<a href={`https://twitter.com/hashtag/${tag}`} target="_blank">{`#${tag}`}</a>))
            .reduce((previous, current) => [previous, "、", current])}
        </div>)
}