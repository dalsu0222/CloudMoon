/* eslint-disable */
import { createStore } from "vuex";
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

export default createStore({
  state: {
    // userData: {
    //   userId: 0,
    //   nickname: "로그인이 필요합니다",
    //   email: "로그인이 필요합니다",
    // }, // 유저데이터
    userId: 0,
    token: null, // 토큰
    languageData: [],
  },
  getters: {
    getToken: (state) => state.token,
    getUserId: (state) => state.userId,
  },
  mutations: {
    setUserData(state, data) {
      state.userId = data;
    },
    setToken(state, token) {
      state.token = token;
    },
    SET_LANGUAGE_DATA(state, languageData) {
      state.languageData = languageData;
    },
    LOGOUT(state) {
      localStorage.removeItem("token");
      location.reload();
    },
  },
  actions: {
    async fetchLanguageData({ commit }, selectedLanguage) {
      try {
        // 선택된 언어를 기반으로 API 호출 (axios 등을 사용하여)
        const response = await axios.get(`/language/${selectedLanguage.last}`);
        // 데이터를 커밋하여 Vuex store에 저장
        commit("SET_LANGUAGE_DATA", response.data);
      } catch (error) {
        console.error("Error fetching language data:", error);
        // 에러 처리
      }
    },
  },
  modules: {},
});
