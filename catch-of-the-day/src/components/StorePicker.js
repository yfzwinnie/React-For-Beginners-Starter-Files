import React, { Fragment } from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form action="" className="store-selector">
                <h2>Please Enter A Store</h2>
                {/*Instead of using <div> like we use to, now we can put all our html codes within React.Frament which we've imported above */}
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Vist Store -></button>
            </form>
        )
    }
}

export default StorePicker;