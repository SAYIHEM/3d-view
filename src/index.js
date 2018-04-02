import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ModelView from './components/views/ModelView';


ReactDOM.render(<ModelView/>, document.getElementById('root'));
registerServiceWorker();
