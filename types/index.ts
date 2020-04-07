export interface Post {
  data: PostData
  content: string
}

export type tag = 'personal' | 'tech'

export interface PostData {
    id: number
    title: string
    date: string
    description: string
    live: boolean
    tags: tag[]
}


