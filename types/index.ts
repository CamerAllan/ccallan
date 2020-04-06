export interface Post {
  data: PostData
  content: string
}

export interface PostData {
    id: number
    title: string
    date: string
    body: string
}
