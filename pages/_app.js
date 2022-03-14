import Document from '../components/document';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <Document>
            <Component {...pageProps} />
        </Document>
    );
}
