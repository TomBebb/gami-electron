import { InsertGame } from './main/db/schema'

export interface GameMetadata {
  description?: string
  developers?: string[]
  genres?: string[]
  platforms?: string[]
  publishers?: string[]
  series?: string[]
  tags?: string[]
  releaseDate?: Date
}

export function combineMetadata(meta1: GameMetadata, meta2): GameMetadata {
  return {
    description: meta1.description ?? meta2.description,
    developers: meta1.developers ?? meta2.developers,
    genres: meta1.genres ?? meta2.genres,
    platforms: meta1.platforms ?? meta2.platforms,
    publishers: meta1.publishers ?? meta2.publishers,
    series: meta1.series ?? meta2.series,
    tags: meta1.tags ?? meta2.tags,
    releaseDate: meta1.releaseDate ?? meta2.releaseDate
  }
}
export enum GameInstallStatus {
  Installed,
  Installing,
  InLibrary,
  Queued
}
export enum GameProgressStatus {
  Backlog,
  Playing,
  Played
}
export interface GameScanner {
  scan(): AsyncIterable<InsertGame>
}
export interface GameLibraryRef {
  libraryId: string
  libraryType: string
}

export interface BasePlugin {
  type: string
}

export interface GameLibraryManagement extends BasePlugin {
  install(game: GameLibraryRef): Promise<void>
  uninstall(game: GameLibraryRef): Promise<void>
  CheckInstallStatus(game: GameLibraryRef): Promise<GameInstallStatus>
}
