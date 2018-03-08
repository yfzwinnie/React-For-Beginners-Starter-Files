import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        console.log(this);
    }

    componetnDidMount 
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                {/*Instead of using <div> like we use to, now we can put all our html codes within React.Frament which we've imported above */}
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Vist Store -></button>
            </form>
        )
    }
}

export default StorePicker;