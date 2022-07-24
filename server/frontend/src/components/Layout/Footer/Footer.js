import './Footer.css';

const Footer = () => {
  return (
    <footer className='text-center text-lg-start footerContainer'>
      <div
        className='text-center p-3'
        styles='background-color: rgba(0, 0, 0, 0.2);'
      >
        © 2022 Copyright -{' '}
        <a className='footerDev' href='www.github.com'>
          JorgeDev
        </a>
      </div>
    </footer>
  );
};

export default Footer;
