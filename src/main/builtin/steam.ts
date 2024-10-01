import { GameMetadata } from '../../shared'
import ky from 'ky'

const releaseDateRegex = /^([0-9]+) ([A-Z][a-z]+), ([0-9]{4})/
export interface AppDetailsData {
  type: 'game'
  name: string
  steam_appid: number
  required_age: number
  dlc: number[]
  detailed_description: string
  about_the_game: string
  short_description: string
  supported_languages: string
  website: string
  legal_notice: string
  developers: string[]
  publishers: string[]
  platforms: Record<'windows' | 'linux' | 'mac', boolean>
  metacritic: { score: number; url: string }
  categories: IdDesc[]
  genres: IdDesc[]

  release_date: {
    coming_soon: boolean
    date?: string
  }
}
export type AppDetails = Record<string, { success: true; data: AppDetailsData }>
const monthNums = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12
}
export function toMetadata(data: AppDetailsData): GameMetadata {
  let releaseDate: Date | undefined
  if (data.release_date?.date) {
    const parsed = releaseDateRegex.exec(data.release_date.date)!
    releaseDate = new Date(parsed[3], monthNums[parsed[2]] - 1, parsed[1])
  }
  return {
    description: data.detailed_description,
    developers: data.developers,
    genres: data.genres.map((g) => g.description),
    publishers: data.publishers,
    tags: data.categories.map((v) => v.description),
    releaseDate
  }
}
export async function getSteamMetadata(appid: string | number): Promise<GameMetadata> {
  const raw: AppDetails | null = await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${appid}`
  ).then((res) => res.json())

  if (raw === null) {
    throw new Error('No matching steam app found!')
  }
  const data: AppDetailsData = raw[appid.toString()].data
  return toMetadata(data)
}
export interface IdDesc {
  id: number
  description: string
}
