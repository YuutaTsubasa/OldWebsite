import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fontawesome/css/all.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@800&family=Noto+Sans+SC:wght@500&family=Noto+Sans+TC:wght@500&display=swap" rel="stylesheet" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YuutaTsubasa"/>
        <meta name="twitter:creator" content="@YuutaTsubasa"/>
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${baseURL}/${subURL}`} />
        <meta property="og:image" content={imageURL}/>
        <meta name="twitter:image" content={imageURL}/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
    </Head>
      <body>
        {{children}}
        <NextScript />
      </body>
    </Html>
  )
}