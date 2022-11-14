/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import DefaultLayout from '@layouts/default';
import GlobalStyles from '@styles/globals';
import theme from '@themes/dark';
import * as gtag from '@lib/gtag';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
        <AnimatedCursor
          innerSize={12}
          outerSize={12}
          color="29, 78, 216"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={4}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
          ]}
        />
      </Layout>
    </ThemeProvider>
  );
}
