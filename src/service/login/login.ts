import hyRequest from "../index"

import { IAccount, IDataType, ILoginResult } from "./type"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/"
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