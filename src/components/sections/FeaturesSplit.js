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
    this.initChoropleth();
    this.initRatingDash();
    this.initPriceDash();
    this.initLollipop();
    this.initEngagementDash();
    this.initParallelCoord();
    this.initScatterPlot()
  }

  initChoropleth = () => {
    const options = {
      hideTabs: true,
      width: "100%",
      height: "100%"
      // width: "1000px",
      // height: "700px"
    }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D22?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerChoropleth;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
  }

  initRatingDash = () => {
    const options = {
      hideTabs: true,
      // width: "1000px",
      // height: "700px"
    }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D3?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerRating;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
  }

  initPriceDash = () => {
    const options = {
      hideTabs: true,
      // width: "1000px",
      // height: "700px"
    }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D5?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerPrice;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
  }

  initLollipop = () => {
    const options = {
      hideTabs: true,
      // width: "1000px",
      // height: "700px"
    }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D23?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerLollipop;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
    
  }

  initParallelCoord = () => {
    const options = {
      hideTabs: true,
    //   width: "1000px",
    //   height: "700px"
     }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D1?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerParallel;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
    
  }

  initEngagementDash = () => {
    const options = {
      hideTabs: true,
      // width: "1000px",
      // height: "700px"
    }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D5?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerEngagement;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
    
  }

  initScatterPlot = () => {
    const options = {
      hideTabs: true,
      // width: "1000px",
      // height: "800px"
    }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D6?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerScatterPlot;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
    
  }

  render() {
    return (
      <section className={classNames('container')} data-reveal-delay="400">
        <div className={classNames("reveal-from-bottom",'center-content','flex-container', 'has-top-divider')}>
          
          <h3 classNames={classNames('has-top-divider')}>
            Are certain states more suited for restaurants than other states?
          </h3>
          <p>
            Let's take a look at the states included in Yelp's dataset.
          </p>
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerChoropleth = div }}></div>
          </div>
          <p className='graph-dividers'>
            Now let's do a deep dive into some of the metropolitan areas. 
          </p>
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerLollipop = div }}></div>
          </div>

          <h3 classNames={classNames('has-top-divider')}>
            Do review count and star rating influence restaurant survival and success?
          </h3>
          <p>
            Let's look at the relationship between review count, star rating, restaurant
          </p>         
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerRating = div }}></div>
          </div>

          <h3 classNames={classNames('has-top-divider')}>
            Does restaurant category affect restaurant survival and success?
          </h3>
          <p>
            Let's take a look at the relationship between at the most popular categories offered by Yelp
          </p>   
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerScatterPlot = div }}></div>
          </div>

          <h3 classNames={classNames('has-top-divider')}>
            Is there a certain type of price point that is more likely to survive?
          </h3>
          <p>
            Let's take a look at the different price categories offered by Yelp
          </p>   
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerPrice = div }}></div>
          </div>

          <h3 classNames={classNames('has-top-divider')}>
            Does review engagement help a restaurant's review and ratings?
          </h3>
          <p>
            Users can engage with a Yelp review by rating it as "funny," "cool," or "useful." Let us dive into the engagement rates of restaurants in different metropolitan areas to see whether they affect survival
          </p>   
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerEngagement = div }}></div>
          </div>

          <h3 classNames={classNames('has-top-divider')}>
            Finally, let's put it all together
          </h3>
          <p>
            All the variables in this visualization are normalized. You can choose a metropolitan area to view how it fares in terms of stars, review count, engagement (aggregate of cool, funny, useful reactions to reviews), aggregate of cool reviews, aggregate of funny reviews, and aggregate of useful reviews when compared to other areas included inthe visualization. 
          </p>   
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerParallel = div }}></div>
          </div>
        </div>
      </section>
    );
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

  // const outerClasses = classNames(
  //   'features-split section',
  //   topOuterDivider && 'has-top-divider',
  //   bottomOuterDivider && 'has-bottom-divider',
  //   hasBgColor && 'has-bg-color',
  //   invertColor && 'invert-color',
  //   className
  // );

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