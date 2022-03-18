import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { 
	BrowserRouter,
	Routes,
  	Route,
} from "react-router-dom";
import ThankYou from './layouts/ThankYou';
import NotFound from './layouts/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    	<BrowserRouter basename="/landing-pages">
			<Routes>
	    		<Route path={"/:path"} element={<App />} />
	    		<Route path={"/:path/:publisher"} element={<App />} />
	    		<Route path={"/:path/:publisher/versionA"} element={<App />} />
	    		<Route path={"/:path/:publisher/versionB"} element={<App />} />
	      		<Route path={"/:path/thank-you"} element={<ThankYou />} />
	      		<Route path={"/404"} element={<NotFound />} />
	      		<Route path="*" element={<NotFound />} />
	    	</Routes>
	  	</BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
