import app from './app';
import initModel from './model';
import update from './update';
import view from './view';

const rootApp = document.getElementById('app');

app(initModel, update, view, rootApp);
