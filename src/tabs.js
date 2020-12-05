import React, { useState, useContext } from "react";
import "./tabs.css";
const TabsContext = React.createContext();

const TabHeader = ({ tabIndex, children }) => {
  const { activeIndex, handleTabHeaderClick } = useContext(TabsContext);
  const active = activeIndex === tabIndex;
  return (
    <button
      className={`tab-header ${active ? "active-tab" : ""}`}
      onClick={() => handleTabHeaderClick(tabIndex)}
    >
      {children}
    </button>
  );
};

const TabHeaders = (props) => {
  const { children, orientation } = props;
  const childrenWithProps = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, { tabIndex: index });
  });
  const orientationClassName =
    orientation === "horizontal" ? "tabs-horizontal" : "tabs-vertical";
  console.log(orientationClassName);
  return (
    <div className={`tab-headers ${orientationClassName}`}>
      {childrenWithProps}
    </div>
  );
};

const TabContent = ({ tabIndex, children }) => {
  const { activeIndex } = useContext(TabsContext);
  return tabIndex === activeIndex ? children : <></>;
};

const TabContents = ({ children }) => {
  const childrenWithProps = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, { tabIndex: index });
  });
  return <div className="tab-contents">{childrenWithProps}</div>;
};

export const Tabs = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabHeaderClick = (tabIndex) => {
    setActiveIndex(tabIndex);
  };
  const orientationClassName =
    props.orientation === "horizontal" ? "tabs-horizontal" : "tabs-vertical";
  const childrenWithProps = React.Children.map(
    props.children,
    (child, index) => {
      return React.cloneElement(child, { orientation: props.orientation });
    }
  );
  return (
    <TabsContext.Provider value={{ activeIndex, handleTabHeaderClick }}>
      <div className={`tabs ${orientationClassName}`} {...props}>
        {childrenWithProps}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.TabHeaders = TabHeaders;
Tabs.TabHeader = TabHeader;
Tabs.TabContents = TabContents;
Tabs.TabContent = TabContent;
