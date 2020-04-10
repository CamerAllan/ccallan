export interface Post {
  data: PostData
  content: string
}

export type tag = 'personal' | 'tech'

export interface PostData {
    id: number
    title: string
    date: number
    description: string
    live: boolean
    wordCount: number
    tags: tag[]
}


