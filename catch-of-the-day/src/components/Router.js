import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = {StorePicker} />
            <Route exact path="/store/:storeId" component={App} /> {/*the :storeId that you typed into the url will now be a parameter of the App props*/}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
        
)

export default Router;