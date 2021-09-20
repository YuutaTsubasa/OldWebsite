import style from './gallery.module.css';

export default function Gallery({dataList}) {
    return (<div className={style.galleryList}>
        {dataList.map(data => (
        <div className={style.galleryListItem} key={data.title}>
            <a href={data.url} target="_blank">
                <img src={data.image} alt={data.title}/>
                <h4>{data.title}</h4>
            </a>
        </div>))}
    </div>);
}