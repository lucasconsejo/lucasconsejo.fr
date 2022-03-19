import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
