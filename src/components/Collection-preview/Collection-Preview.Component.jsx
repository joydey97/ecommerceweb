import React from 'react';
import Collectionitem from '../collection-item/collection.item.component';

import './Collection-Preview.Styles.scss';
const CollectionPreview = ({title,items}) => (
    <div className="collection-preview" >
         
         
    <h1  className="title">{title.toUpperCase()}</h1>
    <div className='preview'> 
        {
            items.filter((item,idx) => idx < 4).map( ({ id, ...otheritemProps }) => (
                <Collectionitem key={id} {...otheritemProps} />
                ))
        }


        </div>
    </div>
);
export default CollectionPreview;
