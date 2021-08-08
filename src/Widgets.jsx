import React from 'react';
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const Widgets = () => {

    const newsArticle = (heading,subtitle) => {
     return(
        <div className="widgets_article">
        <div className="widgets_articleLeft">
               <FiberManualRecordIcon />
        </div>
        <div className="widgets_articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
     )
    }
    const TodaysTop = (heading,subtitle) => {
        return(
           <div className="widgets_article">
            <ol className="widgets_articleLeft">
              <li>{heading}</li>
              <p>{subtitle}</p>
            </ol>
          </div>
        )
       }
    return (
        <>
       
        <div className="widgets">
           <div>
           <div className="widgets_header">
               <h1>LinkedIn News</h1>
               <InfoIcon/>
            </div>
            {newsArticle("Top News-999 views"," Karnataka Bengaluru Live Updates","vinay")}
            {newsArticle("Check out the latest news from India and around the world"," Karnataka Bengaluru Live Updates")}
            {newsArticle("Politics, Business, Entertainment, Technology, Sports"," Karnataka Bengaluru Live Updates")}
            {newsArticle(" Karnataka Bengaluru Live Updates"," Karnataka Bengaluru Live Updates")}  
           </div>
        </div>
        
       
        
        </>
    )
}

export default Widgets
