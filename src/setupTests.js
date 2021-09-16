import Enzyme from 'enzyme';
 
// Si uso React 16 - instalación oficial:
// import Adapter from 'enzyme-adapter-react-16'; 
 
// Si uso React 17 - instalación no oficial temporal:
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; 
 
// Importar para mejorar el manejo de snapShots
import { createSerializer } from 'enzyme-to-json'
 
Enzyme.configure({ adapter: new Adapter() });
 
// Para mejorar el manejo de snapShots
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) );