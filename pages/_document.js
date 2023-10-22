import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            src="https://upload-widget.cloudinary.com/global/all.js"
            type="text/javascript"
            // new to fix error: TypeError: Cannot read properties of undefined (reading 'createUploadWidget')
            // onLoad={() => {
            //   window.cloudinary = require('cloudinary-core');
            // }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
