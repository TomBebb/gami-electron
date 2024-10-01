import { ipcRouter } from 'typed-electron-ipc'
import { getSteamMetadata } from './builtin/steam'

const router = ipcRouter({
  async fetch(event, id: number | string): Promise<object> {
    return getSteamMetadata(id)
  }
})

export type Router = typeof router
