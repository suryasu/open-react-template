import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
// import SectionHeader from './partials/SectionHeader';
// import Image from '../elements/Image';
import tableau from 'tableau-api';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {
  componentDidMount() {
    this.initTableau();
  }

  initTableau = () => {
    const options = {
      hideTabs: true,
      width: "700px",
      height: "500px"
    }
    const vizUrl = "https://prod-apnortheast-a.online.tableau.com/t/xayddx/views/Statemap/Q2?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
  }

  render() {
    return (
      <div className={classNames('container', 'center-content','feature-split flex-container')}>
        <h2>
          Are certain states more suited for restaurants than other states?
        </h2>
        <div ref={(div) => { this.vizContainer = div }}>
        </div>
      </div>
    )
  }
}

// const FeaturesSplit = ({
//   className,
//   topOuterDivider,
//   bottomOuterDivider,
//   topDivider,
//   bottomDivider,
//   hasBgColor,
//   invertColor,
//   invertMobile,
//   invertDesktop,
//   alignTop,
//   imageFill,
//   ...props
// }) => {

//   const outerClasses = classNames(
//     'features-split section',
//     topOuterDivider && 'has-top-divider',
//     bottomOuterDivider && 'has-bottom-divider',
//     hasBgColor && 'has-bg-color',
//     invertColor && 'invert-color',
//     className
//   );

//   const innerClasses = classNames(
//     'features-split-inner section-inner',
//     topDivider && 'has-top-divider',
//     bottomDivider && 'has-bottom-divider'
//   );

//   const splitClasses = classNames(
//     'split-wrap',
//     invertMobile && 'invert-mobile',
//     invertDesktop && 'invert-desktop',
//     alignTop && 'align-top'
//   );

//   const sectionHeader = {
//     title: 'Workflow that just works',
//     paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
//   };

//   return (
//     <section
//       {...props}
//       className={outerClasses}
//     >
//       <div className="container">
//         <div className={innerClasses}>
//           <SectionHeader data={sectionHeader} className="center-content" />
//           <div className={splitClasses}>

//             <div className="split-item">
//               <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
//                 <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
//                   Lightning fast workflow
//                   </div>
//                 <h3 className="mt-0 mb-12">
//                   Data-driven insights
//                   </h3>
//                 <p className="m-0">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                   </p>
//               </div>
//               {/* <div className={
//                 classNames(
//                   'split-item-image center-content-mobile reveal-from-bottom',
//                   imageFill && 'split-item-image-fill'
//                 )}
//                 data-reveal-container=".split-item"> */}
//                 {/* <Image
//                   src={require('./../../assets/images/features-split-image-01.png')}
//                   alt="Features split 01"
//                   width={528}
//                   height={396} /> */}
//                 {/* <div>
//                   <script 
//                     type='text/javascript' 
//                     src='https://prod-apnortheast-a.online.tableau.com/javascripts/api/viz_v1.js'>
//                   </script>
//                   <div 
//                     class='tableauPlaceholder' 
//                     style={{
//                       width: '1440',
//                       height: '910'
//                     }}
//                   >
//                     <object 
//                       class='tableauViz' 
//                       style={{
//                         display:`none`,
//                         width: '1440',
//                         height: '910'
//                       }}
//                     >
//                       <param 
//                         name='host_url' 
//                         value='https%3A%2F%2Fprod-apnortheast-a.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;xayddx' /><param name='name' value='Storyboard2&#47;Q2' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='display_count' value='n' /><param name='origin' value='viz_share_link' 
//                       />
//                       <param name='showAppBanner' value='false' />
//                     </object>
//                   </div> */}
//               </div>
//             </div>

//             <div className="split-item">
//               <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
//                 <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
//                   Lightning fast workflow
//                   </div>
//                 <h3 className="mt-0 mb-12">
//                   Data-driven insights
//                   </h3>
//                 <p className="m-0">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                   </p>
//               </div>
//               <div className={
//                 classNames(
//                   'split-item-image center-content-mobile reveal-from-bottom',
//                   imageFill && 'split-item-image-fill'
//                 )}
//                 data-reveal-container=".split-item">
//                 <Image
//                   src={require('./../../assets/images/features-split-image-02.png')}
//                   alt="Features split 02"
//                   width={528}
//                   height={396} />
//               </div>
//             </div>

//             <div className="split-item">
//               <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
//                 <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
//                   Lightning fast workflow
//                   </div>
//                 <h3 className="mt-0 mb-12">
//                   Data-driven insights
//                   </h3>
//                 <p className="m-0">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                   </p>
//               </div>
//               <div className={
//                 classNames(
//                   'split-item-image center-content-mobile reveal-from-bottom',
//                   imageFill && 'split-item-image-fill'
//                 )}
//                 data-reveal-container=".split-item">
//                 <Image
//                   src={require('./../../assets/images/features-split-image-03.png')}
//                   alt="Features split 03"
//                   width={528}
//                   height={396} />
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;