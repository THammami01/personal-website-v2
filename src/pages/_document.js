import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// import { GA_TRACKING_ID } from '@lib/constants';

export default class MyDocument extends Document {
  render() {
    const { isProduction } = this.props;
    return (
      <Html lang="en">
        {/* We only want to add the scripts if in production */}
        {isProduction && <></>}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production';
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        isProduction,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
