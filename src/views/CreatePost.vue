<script setup lang="ts">
import '@/assets/common.css'
import Header from '@/components/template/Header.vue'
import { usePostsApi } from '@/stores/posts'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { PostgrestError } from '@supabase/supabase-js'

const text = ref('')
const isFormatOptionsVisible = ref(false)
const isVisibilityOptionsVisible = ref(false)
const visibility = ref(0)
const toxicity = ref(0)

const p = usePostsApi()
const router = useRouter()

function handleVisibility (type : number) {
    visibility.value = type
    isVisibilityOptionsVisible.value = false
}

function handleShare () {
    if (toxicity.value > 0.95) {
        alert('Please reduce toxicity or violence in your post to make it suitable for readers')
        return
    }

    p.translatePost(encodeURIComponent(text.value))
        .then(translated => {
            if (translated) {
                p.createPost(text.value, translated.lang, translated.text)
                    .then((res : PostgrestError | number) => {
                        if(res === 201) {
                            router.push('/')
                        }
                    })
            }
        })

}

let typingTimer : string | number | NodeJS.Timeout
function triggerCheck() {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(() => analyzeText(), 1500)
}

function analyzeText() {
    if (text.value.length < 5) return
    fetch(`https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyBF3kMu0WRaEoIDa00MACOK1W7otGDubCY`,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            comment: { text: text.value },
            requestedAttributes: {TOXICITY:{}}
        })
    })
    .then(response => response.json())
    .then(responseJson => {
        if(responseJson.attributeScores?.TOXICITY?.summaryScore?.value)
            toxicity.value = responseJson.attributeScores.TOXICITY.summaryScore.value
    })
}

let currSize = '4'
function execCommand(comm : string) {
    if (comm === 'fontSize') {
        currSize = currSize === '3' ? '4' : '3'
        document.execCommand(comm, false, currSize)
    }
    else document.execCommand(comm)
}

</script>

<template>
    <Header />
    <div :style="{padding: 20 + 'px', paddingTop: '10%', paddingLeft: '5%'}">
        <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            loading="lazy"
            class="avatar"
        />
        <br />

        <div class="post-options-1">
            <button>
                <svg width="26" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_20_2)">
                        <path d="M7.49999 16.6667H4.99999C4.11593 16.6667 3.26809 16.3155 2.64297 15.6903C2.01785 15.0652 1.66666 14.2174 1.66666 13.3333V5.83332C1.66666 4.94927 2.01785 4.10142 2.64297 3.4763C3.26809 2.85118 4.11593 2.49999 4.99999 2.49999H14.1667C15.0507 2.49999 15.8986 2.85118 16.5237 3.4763C17.1488 4.10142 17.5 4.94927 17.5 5.83332V8.33332M6.66666 1.66666V3.33332M12.5 1.66666V3.33332M1.66666 6.66666H17.5M15.4167 13.0358L14.1667 14.2858" stroke="#A3F7BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.1667 18.3333C16.4679 18.3333 18.3333 16.4679 18.3333 14.1667C18.3333 11.8655 16.4679 10 14.1667 10C11.8655 10 10 11.8655 10 14.1667C10 16.4679 11.8655 18.3333 14.1667 18.3333Z" fill="#A3F7BF" fill-opacity="0.2" stroke="#A3F7BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_20_2">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <button @click="isFormatOptionsVisible = !isFormatOptionsVisible"
                    :style="{
                        backgroundColor: isFormatOptionsVisible ? 'var(--c-indigo)' : 'transparent',
                        transition: 'all 0.5s ease-out'
                    }">
                <svg width="26" height="26" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 4.58334C7.5 5.27501 8.05833 5.83334 8.75 5.83334H11.6667V14.5833C11.6667 15.275 12.225 15.8333 12.9167 15.8333C13.6083 15.8333 14.1667 15.275 14.1667 14.5833V5.83334H17.0833C17.775 5.83334 18.3333 5.27501 18.3333 4.58334C18.3333 3.89168 17.775 3.33334 17.0833 3.33334H8.75C8.05833 3.33334 7.5 3.89168 7.5 4.58334ZM3.75 10H5V14.5833C5 15.275 5.55833 15.8333 6.25 15.8333C6.94167 15.8333 7.5 15.275 7.5 14.5833V10H8.75C9.44167 10 10 9.44168 10 8.75001C10 8.05834 9.44167 7.50001 8.75 7.50001H3.75C3.05833 7.50001 2.5 8.05834 2.5 8.75001C2.5 9.44168 3.05833 10 3.75 10Z" fill="#A3F7BF"/>
                </svg>
            </button>
            <Transition name="slide-down" v-show="isFormatOptionsVisible">
                <div class="format-options">
                    <button @click="execCommand('fontSize')">
                        <svg width="16" height="17" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.751373 0C0.950286 0 1.14105 0.0790175 1.2817 0.21967C1.42236 0.360322 1.50137 0.551088 1.50137 0.75V5H8.50137V0.75C8.50137 0.551088 8.58039 0.360322 8.72104 0.21967C8.8617 0.0790175 9.05246 0 9.25137 0C9.45029 0 9.64105 0.0790175 9.7817 0.21967C9.92236 0.360322 10.0014 0.551088 10.0014 0.75V11.25C10.0014 11.4489 9.92236 11.6397 9.7817 11.7803C9.64105 11.921 9.45029 12 9.25137 12C9.05246 12 8.8617 11.921 8.72104 11.7803C8.58039 11.6397 8.50137 11.4489 8.50137 11.25V6.5H1.50137V11.25C1.50137 11.4489 1.42236 11.6397 1.2817 11.7803C1.14105 11.921 0.950286 12 0.751373 12C0.552461 12 0.361695 11.921 0.221043 11.7803C0.0803908 11.6397 0.00137329 11.4489 0.00137329 11.25V0.75C0.00137329 0.551088 0.0803908 0.360322 0.221043 0.21967C0.361695 0.0790175 0.552461 0 0.751373 0Z" fill="#A3F7BF" fill-opacity="0.8"/>
                        </svg>
                    </button>
                    <button @click="execCommand('bold')">
                        <svg width="16" height="17" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0H5.5C6.14255 0.000201235 6.77266 0.177234 7.3213 0.511705C7.86994 0.846177 8.31594 1.32519 8.61047 1.89627C8.90499 2.46734 9.03667 3.10846 8.99108 3.7494C8.94549 4.39033 8.72439 5.00636 8.352 5.53C8.99792 5.93183 9.49529 6.53322 9.76878 7.24307C10.0423 7.95292 10.077 8.73256 9.86762 9.4639C9.65828 10.1952 9.2163 10.8384 8.60863 11.2961C8.00096 11.7537 7.26071 12.0008 6.5 12H1C0.734784 12 0.48043 11.8946 0.292893 11.7071C0.105357 11.5196 0 11.2652 0 11V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM2 7V10H6.5C6.89782 10 7.27936 9.84196 7.56066 9.56066C7.84196 9.27936 8 8.89782 8 8.5C8 8.10218 7.84196 7.72064 7.56066 7.43934C7.27936 7.15804 6.89782 7 6.5 7H2ZM5.5 5C5.89782 5 6.27936 4.84196 6.56066 4.56066C6.84196 4.27936 7 3.89782 7 3.5C7 3.10218 6.84196 2.72064 6.56066 2.43934C6.27936 2.15804 5.89782 2 5.5 2H2V5H5.5Z" fill="#A3F7BF" fill-opacity="0.8"/>
                        </svg>
                    </button>
                    <button @click="execCommand('italic')">
                        <svg width="16" height="17" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33471 0.75C3.33471 0.551088 3.40055 0.360322 3.51776 0.21967C3.63497 0.0790175 3.79395 0 3.95971 0H9.37637C9.54213 4.19176e-09 9.7011 0.0790175 9.81831 0.21967C9.93552 0.360322 10.0014 0.551088 10.0014 0.75C10.0014 0.948912 9.93552 1.13968 9.81831 1.28033C9.7011 1.42098 9.54213 1.5 9.37637 1.5H7.28887L4.07387 10.5H6.04304C6.2088 10.5 6.36777 10.579 6.48498 10.7197C6.60219 10.8603 6.66804 11.0511 6.66804 11.25C6.66804 11.4489 6.60219 11.6397 6.48498 11.7803C6.36777 11.921 6.2088 12 6.04304 12H0.626373C0.460613 12 0.301642 11.921 0.184431 11.7803C0.0672212 11.6397 0.00137329 11.4489 0.00137329 11.25C0.00137329 11.0511 0.0672212 10.8603 0.184431 10.7197C0.301642 10.579 0.460613 10.5 0.626373 10.5H2.71387L5.92887 1.5H3.95971C3.79395 1.5 3.63497 1.42098 3.51776 1.28033C3.40055 1.13968 3.33471 0.948912 3.33471 0.75Z" fill="#A3F7BF" fill-opacity="0.8"/>
                        </svg>
                    </button>
                    <button>
                        <svg width="16" height="17" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_46_120)">
                                <path d="M5.00212 0.0019711C2.46735 0.0293785 0.261473 1.74322 0.521149 2.0669C0.591056 2.34658 1.5202 3.06285 1.59323 3.56625C1.66469 4.06035 1.70821 4.61503 2.17277 4.61503C2.65444 4.61503 2.65286 3.96866 2.74298 3.56625C2.88904 2.92301 3.8912 2.59672 4.15844 3.05973C4.43501 3.54139 5.04251 3.47769 5.21654 3.09857C5.77159 1.78838 7.87249 4.23382 6.79358 4.43324C4.1665 4.57838 2.76828 4.78996 1.76705 5.37778C-0.321004 6.60364 -0.0857263 8.54489 0.154505 8.64394C0.284042 12.2845 5.74219 12.9147 7.32497 10.0802V11.5649H9.74413V6.43378C9.79224 6.39387 9.86925 6.36896 9.89312 6.2435C10.4581 1.78855 8.42816 -0.0697187 5.00214 0.00199425L5.00212 0.0019711ZM7.28147 6.95651C7.28147 8.58429 6.3955 9.48443 5.39726 9.68549C4.03161 9.96058 2.74457 9.55503 2.74457 8.39371C2.7265 6.71255 5.19601 6.53273 7.09659 6.56963C7.34094 6.5948 7.27643 6.80556 7.28147 6.95651Z" fill="#A3F7BF" fill-opacity="0.8"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_46_120">
                                    <rect width="10" height="11.8519" fill="white" transform="translate(0.00137329)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </Transition>
        </div>

        <div 
            contenteditable
            class="post-input" 
            v-once
            @input="triggerCheck(); text = $sanitize(($event.target as HTMLElement).innerHTML)"
            placeholder="Write something..."></div>
        
        <p :style="{color: 'var(--c-divider-dark-1)'}">
            {{text.length}}/300
        </p>

        <div v-show="text.length > 5 && toxicity > 0.85">
            <meter max="1" :value="toxicity" class="toxicity-level">90%</meter>
            <p class="toxicity-msg">
                Your post may appear to be toxic to others. Consider making it more friendly to readers
            </p>
        </div>

        <div :style="{display: 'flex', marginTop: 26 + 'px'}">
            <div>
                <button class="options-btn">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.16" d="M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z" fill="#A3F7BF"/>
                        <path d="M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z" stroke="#A3F7BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.0833 7.33334V11.9167H14.6667" stroke="#A3F7BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Set Lifespan
                </button>
                <button class="options-btn" @click="isVisibilityOptionsVisible = !isVisibilityOptionsVisible">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M11 5.5C9.31449 5.4944 7.66162 5.96456 6.23139 6.85642C4.80116 7.74828 3.65165 9.02565 2.915 10.5417C4.4275 13.6308 7.52583 15.5833 11 15.5833C14.4742 15.5833 17.5725 13.6308 19.085 10.5417C18.3484 9.02565 17.1988 7.74828 15.7686 6.85642C14.3384 5.96456 12.6855 5.4944 11 5.5ZM11 14.6667C8.72667 14.6667 6.875 12.815 6.875 10.5417C6.875 8.26834 8.72667 6.41667 11 6.41667C13.2733 6.41667 15.125 8.26834 15.125 10.5417C15.125 12.815 13.2733 14.6667 11 14.6667Z" fill="#A3F7BF"/>
                        <path d="M11 3.66666C6.41667 3.66666 2.5025 6.5175 0.916667 10.5417C2.5025 14.5658 6.41667 17.4167 11 17.4167C15.5833 17.4167 19.4975 14.5658 21.0833 10.5417C19.4975 6.5175 15.5833 3.66666 11 3.66666ZM11 15.5833C9.31449 15.5889 7.66162 15.1188 6.23139 14.2269C4.80116 13.3351 3.65165 12.0577 2.915 10.5417C4.4275 7.4525 7.52583 5.5 11 5.5C14.4742 5.5 17.5725 7.4525 19.085 10.5417C18.3483 12.0577 17.1988 13.3351 15.7686 14.2269C14.3384 15.1188 12.6855 15.5889 11 15.5833ZM11 6.41666C8.72667 6.41666 6.875 8.26833 6.875 10.5417C6.875 12.815 8.72667 14.6667 11 14.6667C13.2733 14.6667 15.125 12.815 15.125 10.5417C15.125 8.26833 13.2733 6.41666 11 6.41666ZM11 12.8333C10.3922 12.8333 9.80932 12.5919 9.37955 12.1621C8.94978 11.7323 8.70833 11.1495 8.70833 10.5417C8.70833 9.93388 8.94978 9.35098 9.37955 8.92121C9.80932 8.49144 10.3922 8.25 11 8.25C11.6078 8.25 12.1907 8.49144 12.6205 8.92121C13.0502 9.35098 13.2917 9.93388 13.2917 10.5417C13.2917 11.1495 13.0502 11.7323 12.6205 12.1621C12.1907 12.5919 11.6078 12.8333 11 12.8333Z" fill="#A3F7BF"/>
                    </svg>
                    Visibility 
                    <span style="margin-left: 10px; color: #ababab">
                        {{ visibility == 0 ? 'Everyone' : visibility == 1 ? 'Followers' : visibility == 2 ? 'Following' : 'Selected' }}
                    </span>
                </button>
            </div>
            <Transition v-show="isVisibilityOptionsVisible" name="visibility-fadein">
                <div class="visibility-options">
                    <button @click="handleVisibility(0)">
                        <p>Everyone</p>
                        <p class="visibility-desc">Everyone on String can view your Post</p>
                        <svg v-show="visibility == 0" width="19" height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6075 3.90691C10.464 3.82706 10.3062 3.77629 10.1431 3.75749C9.97995 3.73868 9.81472 3.75222 9.65683 3.79732C9.49894 3.84242 9.35149 3.91821 9.22292 4.02034C9.09434 4.12247 8.98716 4.24895 8.9075 4.39253L6.58687 8.56878L5.25874 7.24066C5.14344 7.12127 5.00551 7.02604 4.853 6.96053C4.7005 6.89502 4.53647 6.86054 4.3705 6.85909C4.20452 6.85765 4.03992 6.88928 3.8863 6.95213C3.73268 7.01498 3.59312 7.1078 3.47575 7.22516C3.35839 7.34253 3.26557 7.48209 3.20272 7.63571C3.13987 7.78933 3.10824 7.95393 3.10968 8.11991C3.11112 8.28588 3.14561 8.44991 3.21112 8.60241C3.27663 8.75492 3.37186 8.89285 3.49124 9.00816L5.99125 11.5082C6.2275 11.745 6.54624 11.875 6.87499 11.875L7.04812 11.8625C7.23971 11.8357 7.42247 11.7648 7.58201 11.6554C7.74154 11.546 7.8735 11.401 7.96749 11.2319L11.0925 5.60691C11.1723 5.46344 11.223 5.30566 11.2418 5.14258C11.2606 4.9795 11.2471 4.81432 11.2021 4.65645C11.1571 4.49859 11.0814 4.35115 10.9793 4.22254C10.8773 4.09393 10.751 3.98668 10.6075 3.90691Z" fill="#A3F7BF"/>
                        </svg>
                    </button>
                    <button @click="handleVisibility(1)"> 
                        <p>Followers</p>
                        <p class="visibility-desc">Only your Followers can view your Post</p>
                        <svg v-show="visibility == 1" width="19" height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6075 3.90691C10.464 3.82706 10.3062 3.77629 10.1431 3.75749C9.97995 3.73868 9.81472 3.75222 9.65683 3.79732C9.49894 3.84242 9.35149 3.91821 9.22292 4.02034C9.09434 4.12247 8.98716 4.24895 8.9075 4.39253L6.58687 8.56878L5.25874 7.24066C5.14344 7.12127 5.00551 7.02604 4.853 6.96053C4.7005 6.89502 4.53647 6.86054 4.3705 6.85909C4.20452 6.85765 4.03992 6.88928 3.8863 6.95213C3.73268 7.01498 3.59312 7.1078 3.47575 7.22516C3.35839 7.34253 3.26557 7.48209 3.20272 7.63571C3.13987 7.78933 3.10824 7.95393 3.10968 8.11991C3.11112 8.28588 3.14561 8.44991 3.21112 8.60241C3.27663 8.75492 3.37186 8.89285 3.49124 9.00816L5.99125 11.5082C6.2275 11.745 6.54624 11.875 6.87499 11.875L7.04812 11.8625C7.23971 11.8357 7.42247 11.7648 7.58201 11.6554C7.74154 11.546 7.8735 11.401 7.96749 11.2319L11.0925 5.60691C11.1723 5.46344 11.223 5.30566 11.2418 5.14258C11.2606 4.9795 11.2471 4.81432 11.2021 4.65645C11.1571 4.49859 11.0814 4.35115 10.9793 4.22254C10.8773 4.09393 10.751 3.98668 10.6075 3.90691Z" fill="#A3F7BF"/>
                        </svg>
                    </button>
                    <button @click="handleVisibility(2)">
                        <p>Following</p>
                        <p class="visibility-desc">Only people you Follow can view your Post</p>
                        <svg v-show="visibility == 2" width="19" height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6075 3.90691C10.464 3.82706 10.3062 3.77629 10.1431 3.75749C9.97995 3.73868 9.81472 3.75222 9.65683 3.79732C9.49894 3.84242 9.35149 3.91821 9.22292 4.02034C9.09434 4.12247 8.98716 4.24895 8.9075 4.39253L6.58687 8.56878L5.25874 7.24066C5.14344 7.12127 5.00551 7.02604 4.853 6.96053C4.7005 6.89502 4.53647 6.86054 4.3705 6.85909C4.20452 6.85765 4.03992 6.88928 3.8863 6.95213C3.73268 7.01498 3.59312 7.1078 3.47575 7.22516C3.35839 7.34253 3.26557 7.48209 3.20272 7.63571C3.13987 7.78933 3.10824 7.95393 3.10968 8.11991C3.11112 8.28588 3.14561 8.44991 3.21112 8.60241C3.27663 8.75492 3.37186 8.89285 3.49124 9.00816L5.99125 11.5082C6.2275 11.745 6.54624 11.875 6.87499 11.875L7.04812 11.8625C7.23971 11.8357 7.42247 11.7648 7.58201 11.6554C7.74154 11.546 7.8735 11.401 7.96749 11.2319L11.0925 5.60691C11.1723 5.46344 11.223 5.30566 11.2418 5.14258C11.2606 4.9795 11.2471 4.81432 11.2021 4.65645C11.1571 4.49859 11.0814 4.35115 10.9793 4.22254C10.8773 4.09393 10.751 3.98668 10.6075 3.90691Z" fill="#A3F7BF"/>
                        </svg>
                    </button>
                    <button @click="handleVisibility(3)">
                        <p>Selected</p>
                        <p class="visibility-desc">Only people you Select can view your Post</p>
                        <svg v-show="visibility == 3" width="19" height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6075 3.90691C10.464 3.82706 10.3062 3.77629 10.1431 3.75749C9.97995 3.73868 9.81472 3.75222 9.65683 3.79732C9.49894 3.84242 9.35149 3.91821 9.22292 4.02034C9.09434 4.12247 8.98716 4.24895 8.9075 4.39253L6.58687 8.56878L5.25874 7.24066C5.14344 7.12127 5.00551 7.02604 4.853 6.96053C4.7005 6.89502 4.53647 6.86054 4.3705 6.85909C4.20452 6.85765 4.03992 6.88928 3.8863 6.95213C3.73268 7.01498 3.59312 7.1078 3.47575 7.22516C3.35839 7.34253 3.26557 7.48209 3.20272 7.63571C3.13987 7.78933 3.10824 7.95393 3.10968 8.11991C3.11112 8.28588 3.14561 8.44991 3.21112 8.60241C3.27663 8.75492 3.37186 8.89285 3.49124 9.00816L5.99125 11.5082C6.2275 11.745 6.54624 11.875 6.87499 11.875L7.04812 11.8625C7.23971 11.8357 7.42247 11.7648 7.58201 11.6554C7.74154 11.546 7.8735 11.401 7.96749 11.2319L11.0925 5.60691C11.1723 5.46344 11.223 5.30566 11.2418 5.14258C11.2606 4.9795 11.2471 4.81432 11.2021 4.65645C11.1571 4.49859 11.0814 4.35115 10.9793 4.22254C10.8773 4.09393 10.751 3.98668 10.6075 3.90691Z" fill="#A3F7BF"/>
                        </svg>
                    </button>
                </div>
            </Transition>
            
            <button class="btn-primary btn-share" @click="handleShare()">
                Share
            </button>
        </div>
    </div>

</template>

<style scoped>
.post-input:empty:not(:focus):before{
  content:attr(placeholder);
  color:grey;
}
.post-input {
    background-color: transparent;
    border: 0px;
    font-size: 18px;
    border-bottom: 2px solid var(--c-divider-dark-1);
    color: white;
    width: 100%;
    height: 30vh;
    margin-top: 20px;
    padding-right: 12%;
    resize: none;
}
.post-input:focus {
    outline: none;
}
.btn-share {
    position: absolute;
    right: 20px;
}
.post-options-1 {
    position: absolute;
    right: 20px;
    display: flex;
    flex-direction: column;
}
.post-options-1 > button {
    margin-bottom: 10px;
    background-color: transparent;
    border: 0px;
    border-radius: 50%;
    padding: 8px;
    padding-bottom: 3px;
    cursor: pointer;
    z-index: 10;
}
.post-options-1 > button:active {
    background-color: var(--c-black-mute);
}
.options-btn {
    background-color: transparent;
    border: 0px;
    color: white;
    padding: 5px;
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 5px;
    cursor: pointer;
}
.options-btn svg {
    margin-right: 10px;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transform-origin: top;
  transition: transform 0.3s cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: scaleY(1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: scaleY(0);
}

.visibility-fadein-enter-to,
.visibility-fadein-leave-from {
    transform: scale(1);
    transition: 0.2s ease;
}

.visibility-fadein-enter-from,
.visibility-fadein-leave-to {
    transform: scale(0);
    transition: 0.2s ease;
}

.active-format-option {
    background-color: var(--c-indigo);
    transition: all 0.3s ease;
}
.format-options {
    margin-top: -50px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--c-divider-dark-1);
    border-radius: 20px;
    padding-bottom: 5px;
}
.format-options > button {
    background: transparent;
    border: none;
    color: var(--c-primary);
    margin-bottom: 7px;
    cursor: pointer;
}
.toxicity-msg {
    color: #E74C3C;
}
meter {
    background: #E74C3C55;
    border-radius: 20px;
    width: 100%;
    height: 7px;
    margin-top: 20px;
    border-color: transparent;
}
meter::-webkit-meter-bar {
    background: #E74C3CCC;
    border-radius: 20px;
}
meter::-moz-meter-bar{
    background: #E74C3C;
    border-radius: 20px;
    transition: width 0.5s ease;
}
meter::-webkit-meter-optimum-value {
    background: #E74C3C;
    border-radius: 20px;
    transition: width 0.5 ease;
}

.toxicity-level::-webkit-meter-optimum-value {
    color: blue;
}

.visibility-options {
    position: absolute;
    margin-top: 80px;
    background-color: var(--c-black-mute);
    border: 2px solid var(--c-divider-dark-1); 
    border-radius: 10px;
    max-width: 80%;
    box-shadow:  3px 3px 10px #000,
             0px 0px 0px #000;
    overflow: hidden;
}
.visibility-options > button {
    background: transparent;
    border: none;
    color: white;
    text-align: left;
    padding: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    width: 100%;
}
.visibility-options > button:hover {
    background: #1e1e1e;
}
.visibility-options > button > svg {
    float: right;
    margin-top: -30px;
}
.visibility-desc {
    font-size: 15px;
    color: #ababab;
    margin-top: 2px;
}
</style>
