import React from 'react';

import { styles } from './Category.scss';
/*
Student cat Item (*S*)
  Logo
  Name
  Category tags
  Size tag
*/

export class Category extends React.Component {
  render() {
    return (
        <div className="cat">
            <div className="catWrapper">
                <div className="catContent">
                    <div className="catText">
                        <h3>Category</h3>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};