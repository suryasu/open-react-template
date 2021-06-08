import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
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
    this.initEngagementDash();
    this.initParallelCoord();
    this.initScatterPlot()
  }

  initChoropleth = () => {
    const options = {
      hideTabs: true,
    }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D2?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerChoropleth;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
  }

  initRatingDash = () => {
    const options = {
      hideTabs: true,
    }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D3?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerRating;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
  }

  initPriceDash = () => {
    const options = {
      hideTabs: true,
    }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D4?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerPrice;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
  }


  initParallelCoord = () => {
    const options = {
      hideTabs: true,
     }
    const vizUrl = "https://public.tableau.com/shared/49YP9HFCH?:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerParallel;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
    
  }

  initEngagementDash = () => {
    const options = {
      hideTabs: true,
    }
    const vizUrl = "https://public.tableau.com/views/TrendsinRestaurantSurvivalandSuccessEdited_v2019_4/D5?:language=en-US&:display_count=n&:origin=viz_share_link"
    const vizContainer = this.vizContainerEngagement;
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)
    
  }

  initScatterPlot = () => {
    const options = {
      hideTabs: true,
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
            Are certain geographical areas more suited for restaurants than other areas?
          </h3>
          <p>
            Let's take a look at the states included in Yelp's dataset and dive deeper into the largest cities covered in the dataset. Hover over any state or city data point for additional details.
          </p>
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerChoropleth = div }}></div>
          </div>

          <h3 classNames={classNames('has-top-divider')}>
            Do review count and star rating influence restaurant survival and success?
          </h3>
          <p>
            Let's look at the relationship between review count, star rating, and percentage of open restaurants. Hover over any data point for additional details.
          </p>         
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerRating = div }}></div>
          </div>

          <h3 classNames={classNames('has-top-divider')}>
            Does restaurant category affect restaurant survival and success?
          </h3>
          <p>
            Let's take a look at the relationship between the most popular categories offered by Yelp, percentage of open restaurants and review count. Hover over any dot for additional details.
          </p>   
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerScatterPlot = div }}></div>
          </div>

          <h3 classNames={classNames('has-top-divider')}>
            Are restaurants at certain price points more likely to survive?
          </h3>
          <p>
            Let's take a look at the different price categories offered by Yelp as compared to the review count and number of open restaurants. Hover over any bar for additional details.
          </p>   
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerPrice = div }}></div>
          </div>

          <h3 classNames={classNames('has-top-divider')}>
            Does review engagement help a restaurant's review and ratings?
          </h3>
          <p>
            Users can engage with a Yelp review by rating it as "funny," "cool," or "useful." Let us dive into the engagement rates of restaurants in different metropolitan areas to see whether they affect survival. Hover over any data point for additional details.
          </p>   
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerEngagement = div }}></div>
          </div>

          <h3 classNames={classNames('has-top-divider')}>
            Finally, let's put it all together
          </h3>
          <p>
            In this Parallel Coordinates plot, we use five variables--stars, engagement, review count, useful, funny, and cool--to identify the relationships between them. Each variable is given its own axis and all the axes are placed parallel to each other. Since each variable works off a different unit of measurement, all of the axes are normalized from a scale of 0 to 1 to keep all the scales uniform. Values are plotted as a series of lines that connect across all the axes[2]. Hover over any line for additional details.
          </p>   
          <div className={classNames('tableau-graph', 'container-sm')}>
            <div ref={(div) => { this.vizContainerParallel = div }}></div>
          </div>
        </div>
        <div className="citations">
          <div>[1]https://fortune.com/2021/01/26/restaurants-bars-closed-2020-jobs-lost-how-many-have-closed-us-covid-pandemic-stimulus-unemployment/</div>
          <div>[2]https://datavizcatalogue.com/methods/parallel_coordinates.html</div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;