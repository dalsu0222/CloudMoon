<template>
    <div class="container">
        <v-toolbar class="toolbar">
            <v-btn class="toolbar-menu" style="border-radius: 22px;" @click="history_back()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 19L8 12L15 5" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </v-btn>
            <span class="title-text">마이</span>
        </v-toolbar>

        <div class="contents">
            <div class="cover">
                <div class="profile-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g clip-path="url(#clip0_225_14773)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.8213 15.5036C13.8285 13.4687 17.0725 7.01954 15.067 1.09901C14.9403 0.72504 14.7957 0.362119 14.6345 0.0108648C17.7313 1.15344 20.293 3.61218 21.4248 6.95325C23.4303 12.8738 20.1863 19.3229 14.1791 21.3578C8.55128 23.2642 2.49485 20.6201 0.103194 15.4105C2.49413 16.2926 5.20407 16.3902 7.8213 15.5036Z"
                                fill="#F9B32C" />
                        </g>
                        <defs>
                            <clipPath id="clip0_225_14773">
                                <rect width="22" height="22" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div class="profile-name">moon 님</div>
                </div>
                <div class="divider"></div>
                <div class="mother-lg-box">
                    <span class="lg-box-left">모국어</span>
                    <div class="lg-box-right">
                        <span class="lg-box-right-text">중국어</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                            <rect width="2" height="10" rx="1" fill="#663FCD" />
                            <rect x="4" width="2" height="10" rx="1" fill="#663FCD" />
                            <rect x="8" width="2" height="10" rx="1" fill="#663FCD" />
                            <rect x="12" width="2" height="10" rx="1" fill="#663FCD" />
                        </svg>
                    </div>
                </div>
                <div class="learning-lg-box">
                    <span class="lg-box-left">학습언어</span>
                    <div class="lg-box-right">
                        <span class="lg-box-right-text">한국어</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                            <rect width="2" height="10" rx="1" fill="#663FCD" />
                            <rect x="4" width="2" height="10" rx="1" fill="#663FCD" />
                            <rect x="8" width="2" height="10" rx="1" fill="#663FCD" />
                            <rect x="12" width="2" height="10" rx="1" fill="#DFDFDF" />
                        </svg>
                    </div>
                </div>
                <v-btn class="edit-btn" variant="tonal">프로필 정보 수정하기</v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<script>
/* eslint-disable */
import { ref } from 'vue';


export default {
    components: {
    },
    data: () => ({

    }),
    methods: {
        history_back() {
            history.go(-1);
        },

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
    align-items: flex-start;
    flex-shrink: 0;
    margin-bottom: 11%;
    gap: 17px;

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

.profile-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}

.profile-name {
    color: var(--Neutral-700, #131313);

    /* Body_lg - SB */
    font-family: Pretendard-Regular;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    /* 25.2px */
}

.divider {
    width: -webkit-fill-available;
    height: 2px;
    background: #ECECEC;
}

.mother-lg-box,
.learning-lg-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
}

.lg-box-left,
.lg-box-right-text {
    color: #000;
    text-align: center;

    /* Body_sm - R */
    font-family: Pretendard-Regular;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    /* 19.6px */
}

.lg-box-right {
    display: flex;
    align-items: center;
    gap: 6px;
}

.edit-btn {
    display: flex;
    padding: 12px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    border-radius: 8px;
    background: var(--Neutral-100, #F9F9F9);

    font-family: Pretendard-Regular;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}
</style>
