import { Module } from 'vuex'

import { IAccount } from '@/service/login/types'
import { ILoginState } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'
import LocalCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes, mapMenusTopermissions } from '@/utils/map-menus'

// ts中 vuex使用modeule时 必须给Module类型指定类型 Module<当前state的类型,root中state的类型>
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permission: []
    }
  },
  getters: {},
  mutations: {
    // 保存token数据
    changeToken(state, token: string) {
      state.token = token
    },
    // 保存用户信息数据
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    // 保存用户的权限菜单
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 将userMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      //  将routes 添加到 router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户权限按钮
      const permission = mapMenusTopermissions(userMenus)
      state.permission = permission
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.用户登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.setCache('token', token)

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      console.log(userInfoResult)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      LocalCache.setCache('userInfo', userInfo)

      // 3.用户的权限管理 -菜单
      const userMenusResult = await requestUserMenusById(id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      LocalCache.setCache('userMenus', userMenus)

      // 4.跳转到首页
      router.push('/')
    },
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = LocalCache.getCache('userInfo')
      if (token) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = LocalCache.getCache('userMenus')
      if (token) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
