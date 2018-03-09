import React from "react";
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = (fish) => {
        //1. take a copy of the existing state so you won't mutate the existing state
        const fishes = {...this.state.fishes} //using object spread to make a copy
        //2. add new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish; //fish is referring to the fish variable we created in line 12 of AddFishForm
        //3. set the new fish object to state
        this.setState({
            fishes: fishes //first fishes refer to the state on line 8, secone one refers to the variable fishes we just created on line 14 and added the new fish to on line 16. You can also just say fishes here when the two variables are the same.
        })
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" age={500}/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App;