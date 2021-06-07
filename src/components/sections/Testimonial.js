import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'The impact of COVID-19',
    paragraph1: "The COVID-19 pandemic has had a devastating impact on the restaurant industry. According to data from Fortune.com, 'more than 110,000 eating and drinking establishments in the United States closed for business—-temporarily or permanently—-last year, with nearly 2.5 million jobs erased from pre-pandemic levels, according to the National Restaurant Association. And restaurant and foodservice industry sales fell by $240 billion in 2020 from an expected level of $899 billion.'[1]",
    paragraph2: "It is meaningful for business owners, potential restaurant owners, and customers to explore the sorts of elements that affect the closure of restaurants to make better decisions and understand the future trends of the restaurant industry. In this study, we present a custom and interactive dashboard tool to allow users to explore the geolocation, popular cuisines, star rating, and customer reviews, providing a holistic and objective perspective to find factors that may affect the survival of restaurants."  
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;