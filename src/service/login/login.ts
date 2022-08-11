import hyRequest from "../index"

import { IAccount, IDataType, ILoginResult } from "./type"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/info/",  // eg: /users/info/id
  UserMenus = "/role/menus/"  // eg: role/menus/id
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
    url: LoginAPI.UserMenus + id
  })
}