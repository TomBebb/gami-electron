import { contextBridge } from 'electron'
import { createIpcClient } from 'typed-electron-ipc'
import { type Router } from '../path/to/ipc.ts'

export const ipcInvoke = createIpcClient<Router>()

contextBridge.exposeInMainWorld('ipcInvoke', ipcInvoke)
