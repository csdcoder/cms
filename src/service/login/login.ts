import hyRequest from "../index"

import { IAccount, IDataType, ILoginResult } from "./type"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",  // eg: /users/id
  UserMenus = "/role/"  // eg: role/id/menus
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult> | string>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menus'
  })
}