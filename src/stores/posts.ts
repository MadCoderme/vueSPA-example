import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'
import type { PostgrestSingleResponse, PostgrestError } from '@supabase/supabase-js'
import type { CommentDataType } from '@/lib/types/supabaseext'

export const usePostsApi = defineStore('posts-api', {
    state: (): { posts: any[], replyingTo: null | CommentDataType } => {
        return {
            posts: [],
            replyingTo: null
        }
    },
    actions: {
        async getPosts () {
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
                        loves (id, created_at),
                        lang, translatedText,
                        isDiscussion,
                        discussionRoot (id, text)
                    `)
                    .eq('loves.uid', '9dc7c423-a8ad-4319-b43a-28f85d54fd69')
                    .order('created_at')
                
                if(res.data)
                this.posts = res.data
                return res.data
            }
            catch (e)
            {
                //error
                console.log(e)
            }
        },
        async getPost (id: number) {
            try {
                const res = 
                    await supabase.from('posts')
                        .select(`
                            id,
                            text,
                            created_at,
                            loveCount, 
                            commentCount,
                            shareCount,
                            user:users(username, name),
                            loves(id, created_at),
                            lang, translatedText,
                            isDiscussion,
                            discussionRoot (id, text)
                        `)
                        .eq('id', id)
                        .eq('loves.uid', '9dc7c423-a8ad-4319-b43a-28f85d54fd69')
                        .single()
                return res.data
            }
            catch (e)
            {
                //error
                console.log(e)
            }
        },
        async translatePost (text : string) : Promise<{text: string, lang: string} | undefined> {
            const res = {
                text: '',
                lang: ''
            }
            
            try {
                const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&tl=en&sl=auto&dt=t&q=${text}`)
                const responseJson = await response.json()
                res.text = responseJson[0][0][0]
                res.lang = responseJson[2]
                return res
            } catch (e) {
                res.text = 'Failed to translate'
                return res
            }
        },
        async getComments (id : number) {
            try {
                const res = 
                    await supabase.from('comments')
                        .select(`
                            id,
                            comment,
                            created_at,
                            replyCount,
                            user (username, name)
                        `)
                        .eq('post_id', id)
                        .is('replyTo', null)
                        .order('id')
                
                return res.data
            }
            catch (e)
            {
                //error
                console.log(e)
            }
        },
        async getReplies (id: number) {
            try {
                const res = 
                    await supabase.from('comments')
                        .select(`
                            id,
                            comment,
                            created_at,
                            replyCount,
                            user (username, name)
                        `)
                        .eq('replyTo', id).order('id')
                
                return res.data
            }
            catch (e)
            {
                //error
                console.log(e)
            }
        },
        async lovePost (id : number) : Promise<PostgrestError | number> {
            try {
                const res : PostgrestSingleResponse<null> = await supabase.from('loves').insert({
                    pid: id,
                    uid: '9dc7c423-a8ad-4319-b43a-28f85d54fd69'
                })
                if (res.error) {
                    console.log(res.error)
                    return res.error
                }
                const incres = await supabase.rpc('increment_post_love', { post_id: id })

                if (incres.error) {
                    console.log(incres.error)
                    return incres.error
                }
                return res.status
            }
            catch (e)
            {
                console.log(e)
                return 0
            }
        },
        async unlovePost (id : number) : Promise<PostgrestError | number> {
            try {
                const res : PostgrestSingleResponse<null> = await supabase.from('loves').delete()
                    .eq('pid', id)
                    .eq('uid', '9dc7c423-a8ad-4319-b43a-28f85d54fd69')
                if (res.error) {
                    console.log(res.error)
                    return res.error
                }
                const decres = await supabase.rpc('decrement_post_love', { post_id: id })
                if (decres.error) {
                    console.log(decres.error)
                    return decres.error
                }
                return res.status
            }
            catch (e)
            {
                console.log(e)
                return 0
            }
        },
        async createPost (text: string, lang?: string, translatedText?: string) : Promise<PostgrestError | number> {
            if(lang === 'en') translatedText = ''
            try {
                const res : PostgrestSingleResponse<null> = await supabase.from('posts').insert({
                    text,
                    lang,
                    translatedText,
                    uid: '9dc7c423-a8ad-4319-b43a-28f85d54fd69'
                })
                if (res.error) {
                    console.log(res.error)
                    return res.error
                }
                return res.status
            }
            catch (e)
            {
                console.log(e)
                return 0
            }
        },
        async createComment (pid : number, text: string, replyTo?: number) : Promise<PostgrestError | number> {
            try {
                const res : PostgrestSingleResponse<null> = await supabase.from('comments').insert({
                    post_id: pid,
                    comment: text,
                    user: '9dc7c423-a8ad-4319-b43a-28f85d54fd69',
                    replyTo
                })
                if (res.error) {
                    console.log(res.error)
                    return res.error
                }
                if (replyTo != undefined) {
                    await supabase.rpc('increment_decrement_reply_count', {
                        comment_id: replyTo,
                        increment: true
                    })
                }
                return res.status
            }
            catch (e)
            {
                console.log(e)
                return 0
            }
        }
    },
})

export const useDiscussionApi = defineStore('discussion-api', {
    actions: {
        async getPostDiscussion (id: number) {
            try {
                const res = 
                    await supabase.from('discussions')
                        .select(`
                            id,
                            created_at,
                            uid (username, name),
                            text,
                            lang,
                            translatedText
                        `)
                        .eq('post_id', id)
                        .order('id')
                
                return res.data
            }
            catch (e)
            {
                //error
                console.log(e)
            }
        },
        async createComment (pid : number, text: string, replyTo?: number) : Promise<PostgrestError | number> {
            try {
                const res : PostgrestSingleResponse<null> = await supabase.from('discussions').insert({
                    post_id: pid,
                    text,
                    uid: '9dc7c423-a8ad-4319-b43a-28f85d54fd69'
                })
                if (res.error) {
                    console.log(res.error)
                    return res.error
                }
                return res.status
            }
            catch (e)
            {
                console.log(e)
                return 0
            }
        }
    }
})