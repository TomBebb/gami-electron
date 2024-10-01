import { text, integer, sqliteTable, unique } from 'drizzle-orm/sqlite-core'
import { GameInstallStatus, GameProgressStatus } from '../../shared'
import { InferInsertModel } from 'drizzle-orm'

export const excludedGames = sqliteTable(
  'excluded_games',
  {
    libraryType: text('library_type'),
    libraryId: text('library_id')
  },
  (t) => ({
    libRef: unique().on(t.libraryId, t.libraryType)
  })
)
export const games = sqliteTable(
  'games',
  {
    id: integer('game_id'),
    name: text('name').notNull(),
    libraryType: text('library_type').notNull(),
    libraryId: text('library_id').notNull(),
    installStatus: integer('install_status').$type<GameInstallStatus>().notNull(),
    progressStatus: integer('progress_status').$type<GameProgressStatus>().notNull(),
    playtimeSecs: integer('playtime').notNull(),

    iconUrl: text('icon_url'),
    headerUrl: text('header_url'),
    heroUrl: text('hero_url'),
    logo: text('logo_url')
  },
  (t) => ({
    libRef: unique().on(t.libraryId, t.libraryType)
  })
)
export type InsertGame = InferInsertModel<InsertGame>
