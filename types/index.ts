export interface Item {
  id: number
  title: string
  date: number
  description: string
  live: boolean
  wordCount: number
  content: string
  long: boolean
  containingFolder: string
}

export interface Folder {
  id: string
  title: string
  description: string
  icon: string
  live: boolean
  items: Item[]
}