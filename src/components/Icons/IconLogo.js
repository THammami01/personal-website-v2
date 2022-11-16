/* eslint-disable max-len */
import { withTheme } from 'styled-components';
// import PropTypes from 'prop-types';
// import Image from 'next/image';

const IconLogo = () =>
  /* 
  {
    theme, width = 36.581, height = 50.186, ...props 
  },
  */
  {
    const handleOnClick = () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <img
        src="/logo.png"
        alt="Logo"
        width={32}
        height={32}
        onClick={handleOnClick}
        style={{ transform: 'translateY(6px)' }}
      />

      // <svg width={width} height={height} viewBox="0 0 106.581 120.186" {...props}>
      //   <g fill={theme.brand.primary}>
      //     <path d="M53.29 120.187a9.233 9.233 0 01-4.619-1.236l-14.7-8.7c-2.193-1.228-1.125-1.661-.4-1.914a29.309 29.309 0 006.649-3 1.129 1.129 0 011.095.082l11.3 6.702a1.459 1.459 0 001.365 0L98.015 86.7a1.386 1.386 0 00.674-1.193V34.66a1.421 1.421 0 00-.682-1.215l-44.04-25.4a1.386 1.386 0 00-1.361 0L8.593 33.454a1.417 1.417 0 00-.7 1.206v50.827a1.352 1.352 0 00.691 1.176l12.079 6.971c6.552 3.266 10.56-.584 10.56-4.456V39a1.288 1.288 0 011.292-1.292h5.58A1.288 1.288 0 0139.379 39v50.182c0 8.735-4.756 13.736-13.04 13.736a18.839 18.839 0 01-10.143-2.756l-11.581-6.64a9.3 9.3 0 01-4.619-8.035V34.66a9.28 9.28 0 014.619-8.048L48.663 1.183a9.641 9.641 0 019.254 0l44.04 25.428a9.293 9.293 0 014.623 8.027v50.849a9.319 9.319 0 01-4.623 8.035L57.915 118.95a9.237 9.237 0 01-4.627 1.236z" />
      //     <path d="M54.489 83.415a1.447 1.447 0 01-1.068-.421 1.447 1.447 0 01-.42-1.068V39.654a1.531 1.531 0 01.421-1.133 1.447 1.447 0 011.067-.421h15.8q7.445 0 11.652 3.5t4.208 10.1a12.935 12.935 0 01-2.428 8.092 12.538 12.538 0 01-6.83 4.4l9.969 17.22a1.611 1.611 0 01.194.712 1.2 1.2 0 01-.421.906 1.351 1.351 0 01-.939.388h-3.11a2.326 2.326 0 01-1.521-.453 4.279 4.279 0 01-1-1.295l-9.39-16.446H59.344v16.7a1.394 1.394 0 01-.453 1.068 1.559 1.559 0 01-1.1.421zm15.536-23.693q9.646 0 9.646-8.092t-9.646-8.092H59.344v16.184z" />
      //   </g>
      // </svg>
    );
  };

IconLogo.propTypes = {
  // theme: PropTypes.object,
  // width: PropTypes.number,
  // height: PropTypes.number,
};

export default withTheme(IconLogo);
