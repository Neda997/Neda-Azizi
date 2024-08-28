import React, { useState, useEffect } from 'react';

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        // برای حفظ آخرین تب باز شده
        const savedTab = localStorage.getItem('activeTab');
        if (savedTab) {
            setActiveTab(parseInt(savedTab, 10));
        }
    }, []);

    const handleTabClick = (index) => {
        setActiveTab(index);
        localStorage.setItem('activeTab', index);
    };

    return (
        <div>
            <div className="tab-titles">
                {tabs.map((tab, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleTabClick(index)} 
                        className={activeTab === index ? 'active' : ''}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tab;