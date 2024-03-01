<template>
  <div class="container">
    <v-toolbar class="toolbar">
      <v-hover v-slot="{ hover }">
        <v-btn class="toolbar-title" :style="{ 'background-color': hover ? '#FFFFFF' : '#FFFFFF' }">CloudMoon</v-btn>
      </v-hover>

      <v-btn class="toolbar-menu" to="/mydiary">내 일기장</v-btn>
      <v-btn class="toolbar-menu" to="/opendiary">공개일기</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="toolbar-menu" to="/login">로그인</v-btn>
      <v-btn class="toolbar-signup" to="/signup">회원가입</v-btn>
      <!-- <ul class="menubar">
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="link[1]">
            <v-list-item-content>
              <v-list-item-title>{{ link[0] }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </li>
      </ul> -->
    </v-toolbar>
    <!-- This is SplashView! -->
    <div class="contents">
      <div class="startCorner">
        <v-img :width="120" aspect-ratio="16/9" cover src="../assets/logo.png"></v-img>
        <div class="innerCorner">
          <div class="innerText">
            외국인 친구와 함께 쓰는<br>
            1:1 교환일기 <span style="color: var(--Primary-500, #663FCD);">CloudMoon</span>
          </div>
          <v-btn class="startBtn" to="/login">바로 시작하기</v-btn>
        </div>
      </div>
      <div class="diaryImage">
        <v-img :width="304" :height="354" aspect-ratio="16/9" cover src="../assets/Exchange_Diary.png"></v-img>
      </div>
    </div>
  </div>
</template>

<script setup>
// const links = [
//   ['CloudMoon', '/'],
//   ['내 일기장', '/mydiary'],
//   ['공개일기', '/opendiary']
// ]
</script>

<script>
export default {
  data: () => ({

  })
}
</script>

<style scoped>
@font-face {
  font-family: 'LOTTERIACHAB';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/LOTTERIACHAB.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.container {
  display: flex;
  justify-content: center;
}

.contents {
  display: flex;
  margin-top: 11%;
  width: 80%;
  justify-content: space-between;
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
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 22.4px */
}

.toolbar-signup {
  margin-right: 120px !important;
  border-radius: 100px;
  background: var(--Primary-500, #663FCD);
  color: white;
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

.innerText {
  color: var(--Neutral-700, #131313);
  /* Web/Head_lg - SB */
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 57.6px */
}

.startBtn {
  border-radius: 100px;
  background: var(--Primary-500, #663FCD);
  width: 218px;
  height: 57px;

  color: var(--Neutral-000, #FFF);
  /* Body_lg - SB */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 25.2px */
}
</style>
