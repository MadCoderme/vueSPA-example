import { type Database } from '@/lib/types/supabase'
type PostRowType = Database['public']['Tables']['posts']['Row']
type CommentRowType = Database['public']['Tables']['comments']['Row']

export interface PostDataType extends Omit<PostRowType, 'discussionRoot'> {
    user: {
        username: string
        name: string
    }
    loves: {
        id: number
        created_at: string
    }[]
    discussionRoot?: {
        id: number
        text: string
    }
}

export interface CommentDataType extends Omit<CommentRowType, 'user'> {
    user: {
        username: string
        name: string
    },
    replies: Array<any>
}