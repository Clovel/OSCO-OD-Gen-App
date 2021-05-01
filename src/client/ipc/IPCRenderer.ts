/* Framework imports ----------------------------------- */
import { ipcRenderer as IPCRenderer } from 'electron';

/* IPCMain functions ----------------------------------- */
export const getElectonPath = async (): Promise<string> => {
  return await IPCRenderer.invoke('getElectonPath') as string;
};
