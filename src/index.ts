import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterpidaq-menu extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterpidaq-menu:plugin',
  description: 'Convenience menu for JupyterPiDAQ that runs in Jupyter Lab and Notebook >=7.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterpidaq-menu is activated!');
  }
};

export default plugin;
