import zyRequest from '../../index'
import type { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return zyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return zyRequest.delete<IDataType>({
    url
  })
}
