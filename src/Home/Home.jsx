import React from 'react';
import Banner from '../Pages/Banner';
import Overview from '../Pages/Overview';
import TourismTravelGuideSection from '../Component/ReactTabs/TourismTravelGuideSection';
import TouristStory from '../Pages/TouristStory';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Overview></Overview>
            <TourismTravelGuideSection></TourismTravelGuideSection>
            <TouristStory></TouristStory>
            
        </div>
    );
};

export default Home;