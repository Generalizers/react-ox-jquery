import $ from 'jquery';
import 'jquery-ui-bundle';
import 'jquery-ui-bundle/jquery-ui.min.css';
import { render } from 'react-dom';

import { App } from './components/App';

render(<App />, document.getElementById('root'));
