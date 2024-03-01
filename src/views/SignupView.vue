<template>
    <div class="container">
        <v-card title="외국인 친구와 교환일기를 작성해볼까요?" subtitle="먼저 회원가입이 필요해요 :)" class="mx-auto pa-12 pb-8" elevation="2"
            min-width="532" style="padding: 48px 82px; border-radius:18px;">
            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">이메일 *</div>

            <v-text-field v-model="email" density="compact" placeholder="이메일 주소를 입력해주세요."
                prepend-inner-icon="mdi-email-outline" variant="outlined" :rules="rules"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                비밀번호 *
            </div>

            <v-text-field id="pw1" v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'" density="compact" placeholder="비밀번호를 입력해주세요."
                prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"
                :rules="passwordRules" hint="*8자리 이상의 영어와 숫자를 조합해주세요." persistent-hint clearable></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                비밀번호 확인 *
            </div>
            <v-text-field id="pw2" v-model="confirmPassword" :append-inner-icon="visible2 ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible2 ? 'text' : 'password'" density="compact" placeholder="비밀번호를 한 번 더 입력해주세요."
                prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible2 = !visible2"
                clearable></v-text-field>

            <v-btn block class="mb-8" :color="signupButtonColor" :background-color="signupButtonColor" size="large"
                variant="tonal" style="border-radius:50px;" :disabled="!isSignupButtonActive" @click="test">
                회원가입
            </v-btn>
        </v-card>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
        return {
            e1: 0,
            visible: false,
            visible2: false,
            email: '',
            password: '',
            confirmPassword: '',
            rules: [
                value => !!value || '반드시 입력해주세요.',
                // value => (value && value.length >= 3) || 'Min 3 characters',
            ],
            passwordRules: [
                value => !!value || '반드시 입력해주세요.',
                value => (value && value.length >= 8) || '8자리 이상의 영어와 숫자를 조합해주세요.'
            ],
        }
    },
    computed: {
        isSignupButtonActive() {
            return this.email !== '' && this.password !== '' && this.confirmPassword !== '' && this.confirmPassword === this.password;
        },

        signupButtonColor() {
            return this.isSignupButtonActive ? '#663FCD' : '#CCCCCC';
        },
    },
    methods: {
        test() {
            if (this.password.length < 9) {
                alert('입력한 글자가 영문 숫자 포함 8글자 이상이어야 합니다.');
                return false;
            }

            if (this.password !== this.confirmPassword) {
                alert("작성하신 비밀번호와 일치하지 않습니다.");
                return false;
            } else {
                alert("비밀번호 일치");

                // 여기에 회원가입 api 이용

                // 라우터를 통해 '/nickname' 주소로 이동
                this.$router.push('/nickname');
                return true;
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
    font-weight: 600;
    line-height: 130%;
    /* 31.2px */
}
</style>
