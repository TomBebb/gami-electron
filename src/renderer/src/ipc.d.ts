import { ipcInvoke } from '../../preload'

declare global {
  interface Window {
    ipcInvoke: typeof ipcInvoke
  }
}
