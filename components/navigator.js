import style from './navigator.module.css';
import Link from 'next/link';

export default function Navigator() {
    return (<nav className={style.navbar}>
        <ul className={style.navBarList}>
            <li className={style.navBarListItem}>
                <Link href="/">
                    <a className={style.navBarLink}>主頁</a>
                </Link>
            </li>
            <li className={style.navBarListItem}>
                <Link href="/history">
                    <a className={style.navBarLink}>歷史紀錄</a>
                </Link>
            </li>
            <li className={style.navBarListItem}>
                <Link href="/creation">
                    <a className={style.navBarLink}>翼友與協助者</a>
                </Link>
            </li>
        </ul>
    </nav>);
}