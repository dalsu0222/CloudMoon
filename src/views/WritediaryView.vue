<template>
    <div class="container">
        <v-toolbar class="toolbar">
            <v-btn class="toolbar-menu" style="border-radius: 22px;" @click="history_back()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="white" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </v-btn>
            <v-spacer></v-spacer>
            <span class="title-text">일기 쓰기</span>
            <v-spacer></v-spacer>
            <v-btn class="toolbar-end" @click="submit_diary()" style="border-radius: 22px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12.0005L8.94975 16.9502L19.5572 6.34375" stroke="white" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </v-btn>
        </v-toolbar>

        <div class="contents">
            <div class="cover">
                <QuillEditor v-model:content="contents" contentType="html" theme="snow" toolbar="minimal" />
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
        QuillEditor,
    },
    data: () => ({
        date: new Date(),
        contents: '',
    }),
    methods: {
        history_back() {
            history.go(-1);
        },
        async submit_diary() {
            try {
                console.log('일기내용 : ', this.contents);
                const response = await axios.post('/api/diary/create', {
                    accountsId: localStorage.getItem('userId'),
                    content: this.contents,
                });

                // 로그인 성공 시 처리할 내용을 추가하세요
                console.log('일기작성 성공:', response.data);
                this.$router.push('/mydiary');
            } catch (error) {
                // 로그인 실패 시 처리할 내용을 추가하세요
                console.error('일기작성 실패:', error);
            }
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
    height: 400px;
    padding: 20px;
    flex-direction: column;
    flex-shrink: 0;

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
</style>
