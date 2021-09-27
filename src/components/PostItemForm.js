import React from 'react';

function PostItemForm() {
    return (
        <div className="post-item-container">
            <div className="post-item-title-container">
                <h3 className="post-item-title">Title</h3>
                <input placeholder="Item Title"></input>
            </div>
            <div className="post-item-desc-container">
                <h3 className="post-item-description">Description</h3>
                <textarea 
                    placeholder="Item Description" 
                    rows="100"
                    cols="80" 
                    id="DESCRIPTION"
                />
            </div>
            <div className="post-item-condition-container">
                <h3 className="post-item-condition">Condition</h3>
                <input placeholder="Item Condition"></input>
            </div>
            <div className="post-item-price-container">
                <h3 className="post-item-price">Price</h3>
                <input placeholder="$0"></input>
            </div>
        </div>
    )
}

export default PostItemForm;