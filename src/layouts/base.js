/* eslint-disable max-len */
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
  return (
    <div id="main">
      <Head>
        <title>Tarek Hammami — Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181818" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@THammamix01" />
        <meta property="og:site_name" content="Tarek Hammami | Web & Mobile developer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tarek Hammami | Web & Mobile developer" />
        <meta property="og:locale" content="en" />
        <meta property="og:url" content="https://thammami01.github.io" />
        <meta
          name="description"
          content="Hello! I'm Tarek, a Software Developer based in Buenos Aires, Argentina. I enjoy creating beautiful and reliable applications for internet and phones. My goal is to always build scalable products and performant experiences."
        />
        <meta
          name="keywords"
          content="Developer, Javascript, Freelancer, React, React native, PHP, Laravel Developer, Vue JS Developer, React Developer"
        />
        <meta property="og:image" content="https://jrgarciadev.com/avatar.jpeg" />
        <meta property="twitter:image" content="https://jrgarciadev.com/avatar.jpeg" />
      </Head>
      {children}
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default BaseLayout;
