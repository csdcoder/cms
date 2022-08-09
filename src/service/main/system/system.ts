import hyRequest from "@/service";

export function getPageListData(url: string, queryInfo: any): any {
  return hyRequest.post({
    url: url,
    data: queryInfo
  })
}