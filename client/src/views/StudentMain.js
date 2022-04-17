import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import Results from '../components/Results';
import NinthKyu from '../components/Ninth';
import EighthKyu from '../components/Eighth';
import SeventhKyu from '../components/Seventh';
import SixthKyu from '../components/Sixth';
import FirstKyu from '../components/First';
import FifthKyu from '../components/Fifth';
import FourthKyu from '../components/Fourth';
import ThirdKyu from '../components/Third';
import SecondKyu from '../components/Second';



const StudentMain = () => {

    const tabsArray = [
        { label: "9th Kyu", content:  <NinthKyu />},
        { label: "8th Kyu", content:  <EighthKyu />},
        { label: "7th Kyu", content: <SeventhKyu />},
        { label: "6th Kyu", content: <SixthKyu /> },
        { label: "5th Kyu", content: <FifthKyu />},
        { label: "4th Kyu", content: <FourthKyu /> },
        { label: "3rd Kyu", content: <ThirdKyu /> },
        { label: "2nd Kyu", content: <SecondKyu /> },
        { label: "1st Kyu", content: <FirstKyu /> },
    ];

const [ allTabs, setAllTabs ] = useState(tabsArray);

const [ currentTabIndex, setCurrentTabIndex ] = useState(0);
    return (  
        <div >
            <h2>Testing Requirements for Each Kyu</h2>
            <div >
                <Tabs 
                    allTabs={ allTabs } 
                    currentTabIndex={ currentTabIndex }
                    setCurrentTabIndex={ setCurrentTabIndex } 
                    
                    
                />
                <Results allTabs={ allTabs } currentTabIndex={ currentTabIndex } />
            </div>
            
        </div>
    );
}
 
export default StudentMain;