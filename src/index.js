import { createRoot} from 'react-dom/client';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';

const root = createRoot(document.querySelector('#root'));

root.render(
  <App />,
);