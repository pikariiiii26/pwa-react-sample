import * as functions from "firebase-functions";


function buildHtmlWithPost(obj: any) {
  return `<!DOCTYPE html><head>
<meta name="description" content="${obj.title}" />
<meta property="og:site_name" content="Sample Blog" />
<meta property="og:title" content="${obj.title}">
<meta property="og:description" content='${truncate(
    removeHTMLTag(obj?.body || ''),
    150
  )}' />
<meta property="og:url" content="http://sample.hoge.sample.com/" />
<meta property="og:image" content="${obj?.thumbnail?.url || ''}">
<meta property="og:type" content="website" />
<meta property="og:locale" content="ja_JP" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="${obj.title}" />
<meta name="twitter:image" content="${obj?.thumbnail?.url || ''}" />
<link rel="canonical" href="${obj.path}">
<link rel="icon" href="/favicon.ico" />
<title>${obj.title}</title>
</head>
<body>
  <script>
    window.location = ${obj.path};
  </script>
</body>
</html>`;
};

function truncate(str: string, len: number) {
  return str.length <= len ? str : str.substr(0, len) + "...";
}

function removeHTMLTag(str: string) {
  return str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
}

function paathWithMeta (path:string) {

  switch (path) {
    case '/aaa':
      return {title: 'test 1', path: '/_aaa'}
    case '/bbb':
      return {title: 'test 2', path: '/_bbb'}
    default:
      return {title: 'index', path: '/'}
  }
}

export const helloWorld = functions.https.onRequest((request, response) => {
  // const path = res.path.split("/");
  // const noteId = path[path.length - 1];
  // fetch(`何かしらのAPIのURL`, {
  //   headers: {
  //     "SOME-API-KEY": functions.config().vue.app.same.api.key
  //   }
  // })
  // .then(response => response.json())
  // .then(result => {
  //   // APIのレスポンス結果からHTMLを作成して、Clientに返却する
  //   const htmlString = buildHtmlWithPost(noteId, result);
  //   res.set("Cache-Control", "public, max-age=3600, s-maxage=3600");
  //   res.status(200).end(htmlString);
  // })
  // .catch(err => {
  //   res.status(500).end(err);
  // });
  const ua = request.headers["user-agent"];
  functions.logger.info(ua?.toString(), {structuredData: true});
  const htmlString = buildHtmlWithPost(paathWithMeta(request.path));
  response.status(200).end(htmlString);
});
