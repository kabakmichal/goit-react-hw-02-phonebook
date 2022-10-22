import PropTypes from 'prop-types';
import SectionCSS from './Section.module.css';

export const Section = ({ title, children }) => (
  <div className={SectionCSS.container}>
    <p className={SectionCSS.title}>{title}</p>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};
