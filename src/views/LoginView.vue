<template>
  <div class="container">
    <v-card title="안녕하세요, 클라우드문입니다 :)" subtitle="서비스 이용을 위해 로그인해주세요." class="mx-auto pa-12 pb-8" elevation="2"
      min-width="532" style="padding: 48px 82px; border-radius:18px;">
      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">이메일</div>

      <v-text-field v-model="email" density="compact" placeholder="이메일 주소를 입력해주세요." prepend-inner-icon="mdi-email-outline"
        variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        비밀번호

        <a class="text-caption text-decoration-none" href="#" rel="noopener noreferrer" target="_blank"
          style="color:#663FCD;">
          비밀번호를 잊어버리셨나요?</a>
      </div>

      <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'" density="compact" placeholder="비밀번호를 입력해주세요."
        prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

      <!-- <v-checkbox-btn label="자동 로그인" size="small"></v-checkbox-btn> -->
      <v-checkbox label="자동 로그인" color="#663FCD"></v-checkbox>

      <v-btn block class="mb-8" color="#663FCD" backgroundColor="#663FCD" size="large" variant="tonal"
        style="border-radius:50px;" @click="loginUser">
        로그인
      </v-btn>

      <v-card-text class="text-center">
        회원이 아니신가요? &nbsp;
        <a class="text-decoration-none" href="/signup" rel="noopener noreferrer" target="_blank" style="color:#663FCD;">
          이메일로 가입하기 <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
    <!-- </v-flex> -->
    <!-- </v-layout> -->
  </div>
</template>

<script setup>
</script>

<script>
/* eslint-disable */
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      e1: 0,
      visible: false,
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters(['getUserId']),
    userId() {
      return this.getUserId; // getUserId getter를 사용하여 userId에 접근
    }
  },
  methods: {
    async loginUser() {
      try {
        console.log('email : ', this.email);
        console.log(typeof this.email);
        console.log('password :', this.password);
        console.log(typeof this.password);
        const response = await axios.post('/api/accounts/login', {
          email: this.email,
          password: this.password
        });

        // 로그인 성공 시 처리할 내용을 추가하세요
        console.log('로그인 성공:', response.data);

        this.$store.commit('setToken', response.data.token); // 토큰을 저장
        this.$store.commit('setUserData', response.data.accountsId);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.accountsId);

        this.$router.push('/mydiary');
      } catch (error) {
        // 로그인 실패 시 처리할 내용을 추가하세요
        console.error('로그인 실패:', error);
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
  align-items: center;
  background: var(--Primary-100, #F9F7FD);
  height: 100%;
}

/*
.LoginBox {
  display: inline-flex;
  height: 616px;
  padding: 48px 82px;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  flex-shrink: 0;
  border-radius: 18px;
  background: var(--icon-color, black);
  box-shadow: 0px 4px 6px 0px rgba(19, 19, 19, 0.04);
} */

.v-btn {
  background-color: #663FCD !important;
  color: white !important;
}

.mx-auto.pa-12.pb-8 {
  color: var(--Neutral-700, #131313);
  text-align: center;
  /* margin-bottom: 100px; */

  /* Web/Head_sm - SB */
  font-family: Pretendard-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  /* 31.2px */
}
</style>
