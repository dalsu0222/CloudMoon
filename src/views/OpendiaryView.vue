<template>
    <div class="container">
        <v-toolbar class="toolbar">
            <v-btn class="toolbar-menu" style="border-radius: 22px;" @click="history_back()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="white" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </v-btn>
            <span class="title-text">공개일기</span>
        </v-toolbar>

        <div class="contents">
            <div class="cover">
                <div class="select-bar">
                    <v-select label="학습언어" v-model="defaultSelected" @change="fetchData" :items="items"
                        :item-props="itemProps" variant="outlined" rounded="pill" density="compact"
                        style="margin-right:10px;" item-value="All"></v-select>
                    <v-select label="모국어" v-model="defaultSelected2" :items="items" :item-props="itemProps"
                        variant="outlined" rounded="pill" density="compact" style="margin-left:10px;"></v-select>
                </div>
                <div class="diarybox">
                    <div class="eachdiary" v-for="(diary, index) in diaryData" :key="index">
                        <div class="eachdiary-innerbox">
                            <div class="eachdiary-header">
                                <!-- 나머지 코드 -->
                            </div>
                            <div class="text-box">
                                {{ diary.content }}
                            </div>
                        </div>
                    </div>
                    <div class="eachdiary">
                        <div class="eachdiary-innerbox">
                            <div class="eachdiary-header">
                                <div class="header-left">
                                    <div class="header-profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <g clip-path="url(#clip0_225_13925)">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.11026 14.0948C12.5714 12.2449 15.5205 6.38203 13.6973 0.999731C13.5821 0.659756 13.4506 0.329823 13.304 0.010501C16.1194 1.0492 18.4482 3.28442 19.477 6.32176C21.3003 11.7041 18.3512 17.5669 12.89 19.4168C7.77388 21.1499 2.26803 18.7462 0.0937932 14.0101C2.26736 14.8121 4.73095 14.9008 7.11026 14.0948Z"
                                                    fill="#F9B32C" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_225_13925">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="header-id">
                                        <div class="profile-id">star</div>
                                        <div class="profile-level">
                                            <div class="level-detail">
                                                <div class="mother-lg">KR</div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9"
                                                    viewBox="0 0 14 9" fill="none">
                                                    <rect y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="4" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="8" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="12" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                </svg>
                                            </div>
                                            <div class="level-detail">
                                                <div class="learn-lg">EN</div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9"
                                                    viewBox="0 0 14 9" fill="none">
                                                    <rect y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="4" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="8" y="0.5" width="2" height="8" rx="1" fill="#DFDFDF" />
                                                    <rect x="12" y="0.5" width="2" height="8" rx="1" fill="#DFDFDF" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-right">
                                    <div class="written-day">2월 2일</div>
                                    <v-btn variant="text" rounded="xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M10.3078 13.6923L15.1539 8.84619M20.1113 5.88867L16.0207 19.1833C15.6541 20.3747 15.4706 20.9707 15.1544 21.1683C14.8802 21.3396 14.5406 21.3683 14.2419 21.2443C13.8975 21.1014 13.618 20.5433 13.0603 19.428L10.4694 14.2461C10.3809 14.0691 10.3366 13.981 10.2775 13.9043C10.225 13.8363 10.1645 13.7749 10.0965 13.7225C10.0215 13.6647 9.93486 13.6214 9.76577 13.5369L4.57192 10.9399C3.45662 10.3823 2.89892 10.1032 2.75601 9.75879C2.63207 9.4601 2.66033 9.12023 2.83169 8.84597C3.02928 8.52974 3.62523 8.34603 4.81704 7.97932L18.1116 3.88867C19.0486 3.60038 19.5173 3.45635 19.8337 3.57253C20.1094 3.67373 20.3267 3.89084 20.4279 4.16651C20.544 4.48283 20.3999 4.95126 20.1119 5.88729L20.1113 5.88867Z"
                                                stroke="#663FCD" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </v-btn>
                                </div>
                            </div>
                            <div class="text-box">
                                Today was a day filled with mixed emotions. It started off on a high note as the sun
                                greeted me with its warm rays, promising a beautiful day ahead. The chirping of
                                birds added to the serene atmosphere, filling my heart with tranquility.
                            </div>
                        </div>
                    </div>
                    <div class="eachdiary">
                        <div class="eachdiary-innerbox">
                            <div class="eachdiary-header">
                                <div class="header-left">
                                    <div class="header-profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <g clip-path="url(#clip0_225_13925)">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.11026 14.0948C12.5714 12.2449 15.5205 6.38203 13.6973 0.999731C13.5821 0.659756 13.4506 0.329823 13.304 0.010501C16.1194 1.0492 18.4482 3.28442 19.477 6.32176C21.3003 11.7041 18.3512 17.5669 12.89 19.4168C7.77388 21.1499 2.26803 18.7462 0.0937932 14.0101C2.26736 14.8121 4.73095 14.9008 7.11026 14.0948Z"
                                                    fill="#F9B32C" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_225_13925">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="header-id">
                                        <div class="profile-id">galaxy</div>
                                        <div class="profile-level">
                                            <div class="level-detail">
                                                <div class="mother-lg">EN</div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9"
                                                    viewBox="0 0 14 9" fill="none">
                                                    <rect y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="4" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="8" y="0.5" width="2" height="8" rx="1" fill="#DFDFDF" />
                                                    <rect x="12" y="0.5" width="2" height="8" rx="1" fill="#DFDFDF" />
                                                </svg>
                                            </div>
                                            <div class="level-detail">
                                                <div class="learn-lg">kr</div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9"
                                                    viewBox="0 0 14 9" fill="none">
                                                    <rect y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="4" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="8" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="12" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-right">
                                    <div class="written-day">2월 2일</div>
                                    <v-btn variant="text" rounded="xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M10.3078 13.6923L15.1539 8.84619M20.1113 5.88867L16.0207 19.1833C15.6541 20.3747 15.4706 20.9707 15.1544 21.1683C14.8802 21.3396 14.5406 21.3683 14.2419 21.2443C13.8975 21.1014 13.618 20.5433 13.0603 19.428L10.4694 14.2461C10.3809 14.0691 10.3366 13.981 10.2775 13.9043C10.225 13.8363 10.1645 13.7749 10.0965 13.7225C10.0215 13.6647 9.93486 13.6214 9.76577 13.5369L4.57192 10.9399C3.45662 10.3823 2.89892 10.1032 2.75601 9.75879C2.63207 9.4601 2.66033 9.12023 2.83169 8.84597C3.02928 8.52974 3.62523 8.34603 4.81704 7.97932L18.1116 3.88867C19.0486 3.60038 19.5173 3.45635 19.8337 3.57253C20.1094 3.67373 20.3267 3.89084 20.4279 4.16651C20.544 4.48283 20.3999 4.95126 20.1119 5.88729L20.1113 5.88867Z"
                                                stroke="#663FCD" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </v-btn>
                                </div>
                            </div>
                            <div class="text-box">
                                오늘은 기분이 좋지 않은 날이었다. 아침 일찍 일어났지만 피곤함이 가시지 않아 힘들었다. 하루 내내 뭔가 잘못된 기분이 들었고, 마음이 무거워졌다.
                            </div>
                        </div>
                    </div>
                    <div class="eachdiary">
                        <div class="eachdiary-innerbox">
                            <div class="eachdiary-header">
                                <div class="header-left">
                                    <div class="header-profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                            fill="none">
                                            <g clip-path="url(#clip0_225_13925)">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.11026 14.0948C12.5714 12.2449 15.5205 6.38203 13.6973 0.999731C13.5821 0.659756 13.4506 0.329823 13.304 0.010501C16.1194 1.0492 18.4482 3.28442 19.477 6.32176C21.3003 11.7041 18.3512 17.5669 12.89 19.4168C7.77388 21.1499 2.26803 18.7462 0.0937932 14.0101C2.26736 14.8121 4.73095 14.9008 7.11026 14.0948Z"
                                                    fill="#F9B32C" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_225_13925">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="header-id">
                                        <div class="profile-id">sun</div>
                                        <div class="profile-level">
                                            <div class="level-detail">
                                                <div class="mother-lg">CN</div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9"
                                                    viewBox="0 0 14 9" fill="none">
                                                    <rect y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="4" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="8" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="12" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                </svg>
                                            </div>
                                            <div class="level-detail">
                                                <div class="learn-lg">JP</div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9"
                                                    viewBox="0 0 14 9" fill="none">
                                                    <rect y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="4" y="0.5" width="2" height="8" rx="1" fill="#663FCD" />
                                                    <rect x="8" y="0.5" width="2" height="8" rx="1" fill="#DFDFDF" />
                                                    <rect x="12" y="0.5" width="2" height="8" rx="1" fill="#DFDFDF" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-right">
                                    <div class="written-day">2월 2일</div>
                                    <v-btn variant="text" rounded="xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path
                                                d="M10.3078 13.6923L15.1539 8.84619M20.1113 5.88867L16.0207 19.1833C15.6541 20.3747 15.4706 20.9707 15.1544 21.1683C14.8802 21.3396 14.5406 21.3683 14.2419 21.2443C13.8975 21.1014 13.618 20.5433 13.0603 19.428L10.4694 14.2461C10.3809 14.0691 10.3366 13.981 10.2775 13.9043C10.225 13.8363 10.1645 13.7749 10.0965 13.7225C10.0215 13.6647 9.93486 13.6214 9.76577 13.5369L4.57192 10.9399C3.45662 10.3823 2.89892 10.1032 2.75601 9.75879C2.63207 9.4601 2.66033 9.12023 2.83169 8.84597C3.02928 8.52974 3.62523 8.34603 4.81704 7.97932L18.1116 3.88867C19.0486 3.60038 19.5173 3.45635 19.8337 3.57253C20.1094 3.67373 20.3267 3.89084 20.4279 4.16651C20.544 4.48283 20.3999 4.95126 20.1119 5.88729L20.1113 5.88867Z"
                                                stroke="#663FCD" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </v-btn>
                                </div>
                            </div>
                            <div class="text-box">
                                今日は忙しい一日だった。仕事や勉強に追われて疲れたけれど、一つ一つのタスクを完了させるたびに達成感を味わった。少し疲れたけれど、頑張った自分を誇らしく思う。明日も頑張りたいと思う。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<script>
/* eslint-disable */
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref } from 'vue';
import axios from "axios";
import { mapActions } from 'vuex';

const attributes = ref([
    {
        // Boolean
        dot: true
    },
]);
export default {
    components: {
        Calendar,
        DatePicker,
    },
    data: () => ({
        date: new Date(),
        defaultSelected: {
            name: "전체",
            last: "All"
        },
        defaultSelected2: {
            name: "전체",
            last: "All"
        },
        items: [
            {
                name: '전체',
                department: 'All',
            },
            {
                name: '한국어',
                department: '한국어',
            },
            {
                name: '영어',
                department: 'English',
            },
            {
                name: '중국어',
                department: '中文',
            },
            {
                name: '일본어',
                department: '日本語',
            },
        ],
    }),
    methods: {
        history_back() {
            history.go(-1);
        },
        itemProps(item) {
            return {
                title: item.name,
                subtitle: item.department,
            }
        },
        ...mapActions(['fetchLanguageData']), // Vuex 액션 매핑
        fetchData() {
            // 선택된 언어를 Vuex 액션으로 전달
            this.fetchLanguageData(this.defaultSelected);
        }
    }

}
</script>

<style scoped>
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

.container {
    display: flex;
    justify-content: center;
}

.cover {
    display: flex;
    width: 550px;
    padding: 20px;
    flex-direction: column;
    flex-shrink: 0;
    margin-bottom: 11%;

    border-radius: 18px;
    border: 1px solid var(--Neutral-300, #DFDFDF);
    background: var(--icon-color, #FFF);
}

.contents {
    display: flex;
    margin-top: 100px;
    /* width: 80%; */
    justify-content: center;
}

.contents2 {
    display: flex;
    margin-top: 11%;
    justify-content: center;
    margin-left: 24px;
    width: 468px;
}

.toolbar {
    position: fixed;
    flex-shrink: 0;
    border-bottom: 1px solid var(--Neutral-300, #DFDFDF);
    background: var(--Primary-500, #663FCD);

    /* shadow */
    box-shadow: 0px 4px 6px 0px rgba(19, 19, 19, 0.04);
}

.v-btn:focus:before {
    background-color: white !important;
}

.toolbar-title {
    /* ↓강제로 대문자화되는 이슈 방지*/
    text-transform: none;

    margin-left: 120px !important;
    color: var(--Primary-500, #663FCD);
    text-align: center;
    font-family: "LOTTERIACHAB";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    /* 20px */
}

.toolbar-menu {
    margin-left: 30% !important;
}

.toolbar-end {
    margin-right: 30% !important;
    font-weight: 600;
}

.title-text {
    margin-left: 13%;
    color: var(--icon-color, #FFF);
    text-align: center;

    /* Body_md - SB */
    font-family: Pretendard-Regular;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    /* 22.4px */
}

.select-bar {
    display: flex;
    font-family: Pretendard-Regular;
}

.diarybox {
    display: flex;
    /* width: 467px; */
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
}

.eachdiary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    align-self: stretch;

    border-radius: 18px;
    border: 1px solid var(--Neutral-200, #ECECEC);
}

.eachdiary-innerbox {
    display: flex;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    border-radius: 18px;
    background: var(--icon-color, #FFF);
}

.eachdiary-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
}

.header-left {
    display: flex;
    align-items: flex-start;
    gap: 8px;
}

.header-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
}

.header-profile {
    display: flex;
    width: 24px;
    height: 24px;
    padding: 2px;
    justify-content: center;
    align-items: center;

    border-radius: 50px;
    background: var(--Neutral-200, #ECECEC);
}

.header-id {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.profile-id {
    align-self: stretch;

    color: var(--Neutral-700, #131313);

    /* Body_sm - R */
    font-family: Pretendard-Regular;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    /* 19.6px */
}

.profile-level {
    display: flex;
    align-items: center;
    gap: 6px;
}

.level-detail {
    display: flex;
    align-items: center;
    gap: 4px;
}

.mother-lg,
.learn-lg {
    color: var(--Neutral-500, #5E5E5F);
    text-align: center;

    /* Caption - R */
    font-family: Pretendard-Regular;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    /* 16.8px */
}

.written-day {
    color: var(--Neutral-400, #9E9E9F);
    text-align: right;

    /* Caption - R */
    font-family: Pretendard-Regular;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    /* 16.8px */
}

.text-box {
    align-self: stretch;

    color: var(--Neutral-700, #131313);

    /* Body_sm - R */
    font-family: Pretendard-Regular;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    /* 19.6px */
}
</style>
