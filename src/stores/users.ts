import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'
import { type Database } from '@/lib/types/supabase'
import type { PostgrestSingleResponse } from '@supabase/supabase-js'

type UserRow = Database['public']['Tables']['users']['Row']

export const useUsersApi = defineStore('users-api', {
    actions: {
        async getUser(uid : string) {
            try {
                const res : PostgrestSingleResponse<UserRow> = await supabase
                    .from('users')
                    .select()
                    .eq('uid', uid)
                    .single()
                if(!res.error) 
                {
                    return res.data
                }
                else return null
            }
            catch (e)
            {
                //error
                console.log(e)
                return null
            }
        },
        async getUserByUsername(username : string) {
            try {
                const res : PostgrestSingleResponse<UserRow> = await supabase
                    .from('users')
                    .select()
                    .eq('username', username)
                    .single()
                if(!res.error) 
                {
                    return res.data
                }
                else return null
            }
            catch (e)
            {
                //error
                console.log(e)
                return null
            }
        },
        async getUserPosts (uid : string) {
            try {
                const res = await supabase.from('posts')
                    .select(`
                        id,
                        text,
                        created_at,
                        loveCount, 
                        commentCount,
                        shareCount,
                        user:users(username, name),
                        loves (id, created_at)
                    `)
                    .eq('uid', uid)
                    .eq('loves.uid', '9dc7c423-a8ad-4319-b43a-28f85d54fd69')
                    .order('created_at')
                return res.data
            }
            catch (e)
            {
                //error
                console.log(e)
            }
        },
    }
})