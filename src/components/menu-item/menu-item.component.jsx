
import React from 'react';
import './menu-item.styles.scss';
import {withRouter,Link,useHistory,useRouteMatch} from 'react-router-dom';
function MenuItem ({title,imageUrl,size, history,linkUrl,match}){
    const history2=useHistory();
    const Rmatch=useRouteMatch();
    
    //console.log(history2);
    //console.log(Rmatch);

 return(
    <div className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)}>
       <div 
        className='background-image' 
        style={{
            backgroundImage: `url(${imageUrl})`  }} 
        />
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span classNmae='subtitle'>SHOP NOW</span>
                </div>
     </div> 
);
        }
export default withRouter(MenuItem);
