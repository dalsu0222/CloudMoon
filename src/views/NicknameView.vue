<template>
  <!-- <v-app> -->
  <!-- 중복확인 후 다음버튼 활성화는 어떻게 가능할까? ->
    다음 버튼 누를 때 중복검사 실시유무 확인 함수 작성, 미실시 시 경고창 띄우기 -> 맨 마지막에 검토하기 -->
  <div class="container">
    <div class="stepperBox">
      <v-stepper :items="['Step 1', 'Step 2', 'Step 3', 'Step 4']" mobile width="720" rounded="lg" hide-actions
        v-model="currentStep">
        <template v-slot:[`item.1`]>
          <v-card class="card-title" title="외국인 친구에게 어떤 이름으로 불리고 싶나요?" flat>
            <div class="step1-content">
              <div style="font-size: small; margin-top:36px; text-align: left;">닉네임</div>
              <div class="insert-nickname">
                <v-text-field class="write-nickname" variant="outlined" density="compact"
                  hint="*4~12자의 영어 또는 영문, 숫자를 조합해주세요." persistent-hint></v-text-field>
                <v-btn variant="tonal">중복확인</v-btn>
              </div>
            </div>
            <v-btn @click="nextStep">다음으로</v-btn>
          </v-card>
        </template>

        <template v-slot:[`item.2`]>
          <v-card class="card-title" title="생년월일을 입력해주세요." subtitle="회원님과 잘 맞는 친구를 찾을 수 있어요." flat></v-card>
          <div class="step1-content" style="align-items: center;">
            <!-- <div style="font-size: small; margin-top:36px; text-align: left; font-weight:bold;">생년월일</div> -->
            <v-date-picker show-adjacent-months hide-header></v-date-picker>
          </div>
          <v-btn @click="nextStep">다음으로</v-btn>
        </template>

        <template v-slot:[`item.3`]>
          <v-card class="card-title" title="모국어를 선택해주세요." subtitle="모국어로 외국인 친구의 일기를 첨삭해 주게 돼요!" flat></v-card>
          <div class="step1-content">
            <div style="font-size: small; margin-top:36px; text-align: left; font-weight:bold;">모국어</div>
            <v-select label="모국어를 선택해주세요." :items="items" :item-props="itemProps" variant="outlined"
              rounded="lg"></v-select>
          </div>
          <v-btn @click="nextStep">다음으로</v-btn>
        </template>

        <template v-slot:[`item.4`]>
          <v-card class="card-title" title="학습할 언어를 선택해주세요." subtitle="외국인 친구에게 학습 언어로 첨삭받을 수 있어요!" flat></v-card>
          <div class="step1-content">
            <div style="font-size: small; margin-top:36px; text-align: left; font-weight:bold;">학습 언어</div>
            <v-select label="학습할 언어를 선택해주세요." :items="items" :item-props="itemProps" variant="outlined"
              rounded="lg"></v-select>
          </div>
          <div class="step1-content" style="height:240px;">
            <div style="font-size: small; text-align: left; font-weight:bold;">실력</div>
            <v-col cols="12" sm="12" class="py-2">
              <v-btn-toggle v-model="toggle_none" style="display:block; height:240px;">
                <v-btn>
                  <!-- <v-icon>mdi-format-align-left</v-icon> -->
                  <v-img src="../assets/level1.png" width="170" height="100" class="text-right pa-2"></v-img>
                </v-btn>

                <v-btn>
                  <v-img src="../assets/level2.png" width="170" height="100" class="text-right pa-2"></v-img>
                </v-btn>
                <br>
                <v-btn>
                  <v-img src="../assets/level3.png" width="170" height="100" class="text-right pa-2"></v-img>
                </v-btn>
                <v-btn>
                  <v-img src="../assets/level4.png" width="170" height="100" class="text-right pa-2"></v-img>
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </div>
          <v-btn @click="nextStep" to="/mydiary">완료하기</v-btn>
        </template>
      </v-stepper>
    </div>
  </div>
  <!-- </v-app>-->
</template>

<script setup>
</script>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      e1: 0,
      currentStep: 1,
      items: [
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
      srcItems: [
        {
          src: 'level1.png',
        },
        {
          src: 'level2.png',
        },
        {
          src: 'level3.png',
        },
        {
          src: 'level4.png',
        }
      ],
      selected: [],
      text: 'center',
      icon: 'justify',
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
    }
  },
  methods: {
    itemProps(item) {
      return {
        title: item.name,
        subtitle: item.department,
      }
    },
    nextStep() {
      this.currentStep++;
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}

.container {
  display: flex;
  justify-content: center;
  background: var(--Primary-100, #F9F7FD);
  height: 100%;
}

.LoginBox {
  display: inline-flex;
  height: 30%;
  padding: 48px 82px;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #FFF;
  box-shadow: 0px 4px 6px 0px rgba(19, 19, 19, 0.04);
}

.stepperBox {
  display: flex;
  align-items: center;
}

/* v-stepper {
  width: 50% !important;
  margin: 5% auto !important;
} */


.step1-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.insert-nickname {
  display: flex;
  /* width: 468px; */
  gap: 8px;
}

.card-title {
  color: var(--Neutral-700, #131313);
  text-align: center;

  /* Web/Head_sm - SB */
  font-family: Pretendard-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  /* 31.2px */
}

.write-nickname {
  text-align: left;
  padding-inline: 0px;
}

.level-box {
  display: flex;
  width: 230px;
  padding: 12px 14px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Neutral-300, #DFDFDF);

  font-size: small;
}

.py-2 {
  display: flex;
  justify-content: center;
}
</style>
