import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider } from '@speechly/react-client';
import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="8d2777eb-0de2-4539-b94c-de3d73fce3c5" language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>,
        document.getElementById('root'));