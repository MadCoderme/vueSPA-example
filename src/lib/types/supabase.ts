export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          comment: string | null
          created_at: string
          id: number
          post_id: number | null
          replyCount: number
          replyTo: number | null
          user: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: number
          post_id?: number | null
          replyCount?: number
          replyTo?: number | null
          user?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: number
          post_id?: number | null
          replyCount?: number
          replyTo?: number | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_replyTo_fkey"
            columns: ["replyTo"]
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_fkey"
            columns: ["user"]
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      discussions: {
        Row: {
          created_at: string
          id: number
          lang: string | null
          post_id: number | null
          text: string | null
          translatedText: string | null
          uid: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          lang?: string | null
          post_id?: number | null
          text?: string | null
          translatedText?: string | null
          uid?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          lang?: string | null
          post_id?: number | null
          text?: string | null
          translatedText?: string | null
          uid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discussions_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discussions_uid_fkey"
            columns: ["uid"]
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      loves: {
        Row: {
          created_at: string
          id: number
          pid: number | null
          uid: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          pid?: number | null
          uid?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          pid?: number | null
          uid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "loves_pid_fkey"
            columns: ["pid"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "loves_uid_fkey"
            columns: ["uid"]
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      posts: {
        Row: {
          commentCount: number
          created_at: string
          discussionRoot: number | null
          id: number
          isDiscussion: boolean
          lang: string
          loveCount: number
          shareCount: number
          text: string | null
          translatedText: string | null
          uid: string | null
        }
        Insert: {
          commentCount?: number
          created_at?: string
          discussionRoot?: number | null
          id?: number
          isDiscussion?: boolean
          lang?: string
          loveCount?: number
          shareCount?: number
          text?: string | null
          translatedText?: string | null
          uid?: string | null
        }
        Update: {
          commentCount?: number
          created_at?: string
          discussionRoot?: number | null
          id?: number
          isDiscussion?: boolean
          lang?: string
          loveCount?: number
          shareCount?: number
          text?: string | null
          translatedText?: string | null
          uid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_discussionRoot_fkey"
            columns: ["discussionRoot"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_uid_fkey"
            columns: ["uid"]
            referencedRelation: "users"
            referencedColumns: ["uid"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          description: string | null
          followerCount: number | null
          followingCount: number | null
          name: string | null
          postCount: number | null
          uid: string
          username: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          followerCount?: number | null
          followingCount?: number | null
          name?: string | null
          postCount?: number | null
          uid: string
          username?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          followerCount?: number | null
          followingCount?: number | null
          name?: string | null
          postCount?: number | null
          uid?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_uid_fkey"
            columns: ["uid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      decrement_post_love: {
        Args: {
          post_id: number
        }
        Returns: undefined
      }
      increment_decrement_reply_count: {
        Args: {
          comment_id: number
          increment: boolean
        }
        Returns: undefined
      }
      increment_post_love: {
        Args: {
          post_id: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
