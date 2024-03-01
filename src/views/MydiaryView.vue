<template>
  <div class="container">
    <v-toolbar class="toolbar">
      <v-hover v-slot="{ hover }">
        <v-btn class="toolbar-title" to="/"
          :style="{ 'background-color': hover ? '#FFFFFF' : '#FFFFFF' }">CloudMoon</v-btn>
      </v-hover>

      <v-btn class="toolbar-menu" style="color:#663FCD; font-weight: bold;">내 일기장</v-btn>
      <v-btn class="toolbar-menu" to="/opendiary">공개일기</v-btn>
      <v-spacer></v-spacer>
      <!-- <v-btn class="ma-2" variant="text" color="blue-lighten-2" aria-owns="v-menu-39"></v-btn> -->
      <v-btn style="border-radius: 22px;">
        <v-badge dot color="#663FCD">
          <v-img :width="22" aspect-ratio="16/9" cover src="../assets/Bell.png"></v-img>
        </v-badge>
      </v-btn>
      <v-btn class="toolbar-end" to="/mypage">프로필</v-btn>
    </v-toolbar>

    <div class="contents" v-if="apiValue === 0 || apiValue === 1">
      <div class="cover">
        <div class="inner-text">
          <span class="inner-text-1">goorm님 안녕하세요 😊</span><br>
          <span class="inner-text-2">아직 일기 교환을<br> 시작하지 않으셨어요!</span>
        </div>
        <v-img src="../assets/notebook.png" width="100" height="100" class="text-right pa-2"></v-img>
        <v-btn class="find-friend-btn" style="color: var(--Primary-500, #663FCD);" color="#EDE8F9" elevation="1">친구 찾으러
          가기</v-btn>
      </div>
    </div>
    <div class="contents" v-else-if="apiValue === 2">
      <div class="cover-layout">
        <div class="cover1">
          <div class="cover1-header">
            <span class="ex-start-date">2023.2.6 ~</span>
            <!-- <v-btn variant="text" density="compact" style="border-radius: 22px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M11.3333 8.00016C11.3333 8.36835 11.6317 8.66683 11.9999 8.66683C12.3681 8.66683 12.6666 8.36835 12.6666 8.00016C12.6666 7.63197 12.3681 7.3335 11.9999 7.3335C11.6317 7.3335 11.3333 7.63197 11.3333 8.00016Z"
                  stroke="#9E9E9F" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M7.33325 8.00016C7.33325 8.36835 7.63173 8.66683 7.99992 8.66683C8.36811 8.66683 8.66659 8.36835 8.66659 8.00016C8.66659 7.63197 8.36811 7.3335 7.99992 7.3335C7.63173 7.3335 7.33325 7.63197 7.33325 8.00016Z"
                  stroke="#9E9E9F" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M3.33325 8.00016C3.33325 8.36835 3.63173 8.66683 3.99992 8.66683C4.36811 8.66683 4.66659 8.36835 4.66659 8.00016C4.66659 7.63197 4.36811 7.3335 3.99992 7.3335C3.63173 7.3335 3.33325 7.63197 3.33325 8.00016Z"
                  stroke="#9E9E9F" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5.75 5.75L18.25 18.25M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                  stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </v-btn> -->
            <v-dialog v-model="dialog" persistent width="auto">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" variant="text" density="compact" style="border-radius: 22px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5.75 5.75L18.25 18.25M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                      stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </v-btn>

              </template>
              <v-card class="modal">
                <div class="card-layout">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60"
                    height="60" viewBox="0 0 60 60" fill="none">
                    <rect width="60" height="60" fill="url(#pattern0)" />
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_223_9787" transform="scale(0.00195312)" />
                      </pattern>
                      <image id="image0_223_9787" width="512" height="512"
                        xlink:href="data:image/png;base64,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" />
                    </defs>
                  </svg>
                  <div class="card-content">
                    <span class="card-title">일기 교환을 중단하시겠어요?</span>
                    <span class="card-title" style="font-size: small;">중단한 일기는 다시 복구할 수 없습니다.</span>
                  </div>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="purple-darken-1" variant="text" @click="dialog = false">
                      취소하기
                    </v-btn>
                    <v-btn color="purple-darken-1" variant="text" @click="dialog = false">
                      중단하기
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-card>
            </v-dialog>
          </div>
          <div class="cover1-content">
            <span class="cover1-content-text">일기를 교환한지 </span>
            <span class="cover1-content-day">18일</span>
            <span class="cover1-content-text"> 됐어요.</span>
          </div>
        </div>
        <div class="cover2">
          <div class="profile-box" style="border-radius: 18px 0px 0px 18px;">
            <div class="profile-box-content">
              <div class="content-pf">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.7692 17.0441C17.2797 17.0441 16.8096 16.9649 16.3722 16.8192C15.5329 18.3876 13.8212 19.4617 11.8461 19.4617C10.0484 19.4617 8.46896 18.5718 7.56686 17.2294C6.83118 17.6244 5.98169 17.8498 5.07691 17.8498C2.27301 17.8498 0 15.6851 0 13.0147C0 10.8939 1.43364 9.09206 3.42828 8.44019C3.39944 8.22288 3.38457 8.00142 3.38457 7.77666C3.38457 4.88374 5.847 2.53857 8.88456 2.53857C10.6728 2.53857 12.2617 3.35133 13.2662 4.61012C13.8532 4.31645 14.5216 4.15028 15.2308 4.15028C17.5673 4.15028 19.4615 5.95426 19.4615 8.17957C19.4615 8.55388 19.4079 8.91627 19.3077 9.26016C20.8836 9.84628 22 11.3064 22 13.0148C22 15.2401 20.1058 17.0441 17.7692 17.0441Z"
                    fill="#663FCD" />
                </svg>
                <span class="pf-name">goorm 님</span>
              </div>
              <div class="content-lg">
                <div class="mother-lg-box">
                  <span class="language-title">KR</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <rect width="2" height="10" rx="1" fill="#663FCD" />
                    <rect x="4" width="2" height="10" rx="1" fill="#663FCD" />
                    <rect x="8" width="2" height="10" rx="1" fill="#663FCD" />
                    <rect x="12" width="2" height="10" rx="1" fill="#663FCD" />
                  </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M8 6.5L9.5 8M9.5 8L8 9.5M9.5 8H2.5M4 5.5L2.5 4M2.5 4L4 2.5M2.5 4H9.5" stroke="#999999"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="learning-lg-box">
                  <span class="language-title">CN</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <rect width="2" height="10" rx="1" fill="#663FCD" />
                    <rect x="4" width="2" height="10" rx="1" fill="#663FCD" />
                    <rect x="8" width="2" height="10" rx="1" fill="#DFDFDF" />
                    <rect x="12" width="2" height="10" rx="1" fill="#DFDFDF" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="profile-box"
            style="border-radius: 0px 18px 18px 0px; border-left: 1px solid var(--Neutral-300, #DFDFDF);">
            <div class="profile-box-content">
              <div class="content-pf">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <g clip-path="url(#clip0_223_8440)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.8213 15.5036C13.8285 13.4687 17.0725 7.01954 15.067 1.09901C14.9403 0.72504 14.7957 0.362119 14.6345 0.0108648C17.7313 1.15344 20.293 3.61218 21.4248 6.95325C23.4303 12.8738 20.1863 19.3229 14.1791 21.3578C8.55128 23.2642 2.49485 20.6201 0.103194 15.4105C2.49413 16.2926 5.20407 16.3902 7.8213 15.5036Z"
                      fill="#F9B32C" />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_8440">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span class="pf-name">moon 님</span>
              </div>
              <div class="content-lg">
                <div class="mother-lg-box">
                  <span class="language-title">CN</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <rect width="2" height="10" rx="1" fill="#663FCD" />
                    <rect x="4" width="2" height="10" rx="1" fill="#663FCD" />
                    <rect x="8" width="2" height="10" rx="1" fill="#663FCD" />
                    <rect x="12" width="2" height="10" rx="1" fill="#663FCD" />
                  </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M8 6.5L9.5 8M9.5 8L8 9.5M9.5 8H2.5M4 5.5L2.5 4M2.5 4L4 2.5M2.5 4H9.5" stroke="#999999"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="learning-lg-box">
                  <span class="language-title">KR</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <rect width="2" height="10" rx="1" fill="#663FCD" />
                    <rect x="4" width="2" height="10" rx="1" fill="#663FCD" />
                    <rect x="8" width="2" height="10" rx="1" fill="#DFDFDF" />
                    <rect x="12" width="2" height="10" rx="1" fill="#DFDFDF" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="contents2">
      <DatePicker v-model="date" color="purple" :attributes="attributes" expanded />
    </div>
    <v-btn class="write-diary-btn" to="/writediary">일기 쓰기</v-btn>
  </div>
</template>

<script setup>

</script>

<script>
/* eslint-disable */
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';
import { ref } from 'vue';

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
    apiValue: 2,
    dialog: false,
  }),
  methods: {
    fetchData() {
      // Your API fetching logic here
      // Upon successful fetch, update apiValue accordingly
    }
  },
  mounted() {
    this.fetchData(); // Fetch API data when component is mounted
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

.modal {
  width: fit-content;
  height: fit-content;
  align-items: center;
  border-radius: 18px !important;
  background: var(--icon-color, #FFF);
}

.card-layout {
  display: flex;
  width: 409px;
  padding: 54px 20px 20px 20px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 38px;

  border-radius: 0px 0px 18px 18px;
  background: var(--icon-color, #FFF);
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.card-title {
  color: var(--Neutral-700, #131313);
  text-align: center;

  /* Body_lg - SB */
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 25.2px */
}

.container {
  display: flex;
  justify-content: center;
}

.cover {
  display: flex;
  width: 304px;
  height: 264px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;

  border-radius: 18px;
  border: 1px solid var(--Neutral-300, #DFDFDF);
  background: var(--icon-color, #FFF);
}

.cover-layout {
  display: flex;
  gap: 12px;
  flex-direction: column;
}

.cover1 {
  display: flex;
  width: 304px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  border-radius: 18px;
  background: var(--Neutral-100, #F9F9F9);
}

.cover2 {
  display: flex;
  width: 304px;
  height: 148px;
  align-items: flex-start;
  flex-shrink: 0;

  border-radius: 18px;
  background: var(--Neutral-100, #F9F9F9);
}

.cover1-header {
  display: flex;
  justify-content: space-between;
  /* align-items: flex-start; */
  align-items: center;
  align-self: stretch;
}

.ex-start-date {
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

.cover1-content {
  display: flex;
  align-items: center;
  gap: 6px;
}

.cover1-content-text {
  color: var(--Neutral-700, #131313);

  /* Body_lg - R */
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 25.2px */
}

.cover1-content-day {
  color: var(--Neutral-700, #131313);

  /* Body_lg - SB */
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 25.2px */
}

.contents {
  display: flex;
  margin-top: 11%;
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
  background-color: white;
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
  margin: 0 10px;
  color: var(--Neutral-700, #131313);
  text-align: center;

  /* Body_md - R */
  /* font-family: Pretendard-Regular;/ */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 22.4px */
}

.toolbar-end {
  margin-right: 120px !important;
  /* border-radius: 100px; */
  /* background: var(--Primary-500, #663FCD); */
  /* color: white; */
  font-weight: 600;
}

.startCorner {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.innerCorner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 70px;
}

.inner-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 12px; */
}

.text-right.pa-2 {
  /*
  position: absolute;

  right: 20px;
  top: 78px;
  */
  left: 180px;
  height: 100px;
  bottom: 80px;

}

.inner-text-1 {
  color: var(--Neutral-500, #5E5E5F);
  text-align: center;

  /* Caption - R */
  font-family: Pretendard-Regular;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 16.8px */
}

.inner-text-2 {
  color: var(--Neutral-700, #131313);

  /* Body_lg - SB */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 25.2px */
}

.find-friend-btn {
  display: flex;
  padding: 12px 10px;
  margin-top: -100px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  --v-btn-text-color: var(--Primary-500, #663FCD);
  /* Body_md - SB */
  font-family: Pretendard-Regular;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 22.4px */
}

.vc-purple {
  --vc-accent-50: #EDE8F9;
  --vc-accent-100: #EDE8F9;
  --vc-accent-200: #EDE8F9;
  --vc-accent-300: #EDE8F9;
  --vc-accent-400: #EDE8F9;
  --vc-accent-500: #EDE8F9;
  --vc-accent-600: #EDE8F9;
  --vc-accent-700: #EDE8F9;
  --vc-accent-800: #EDE8F9;
  --vc-accent-900: #EDE8F9;
}

.write-diary-btn {
  top: 80%;
  /* right: 5%; */
  position: absolute;
  left: 80%;
  display: flex;
  width: 136px;
  height: 52px;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;


  font-family: Pretendard-Regular;
  font-size: 16px;
  border-radius: 100px;
  background: var(--Primary-500, #663FCD);
  color: white;
  box-shadow: 0px 4px 8px 0px rgba(19, 19, 19, 0.24);
}

.profile-box {
  display: flex;
  padding: 20px;
  align-items: flex-start;
  gap: 6px;
  flex: 1 0 0;
  align-self: stretch;

  background: var(--Neutral-100, #F9F9F9);
}

.profile-box-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}

.content-pf {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.content-lg {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pf-name {
  color: var(--Neutral-700, #131313);

  /* Body_lg - SB */
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 25.2px */
}

.mother-lg-box,
.learning-lg-box {
  display: flex;
  align-items: center;
  gap: 6px;
}

.language-title {
  color: var(--Neutral-700, #131313);
  text-align: center;

  /* Body_sm - R */
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 19.6px */
}
</style>
