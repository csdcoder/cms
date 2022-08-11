import { ref } from "vue"
import PageContent from "@/components/page-content"


export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = (): any => {
    pageContentRef.value?.getPageData()
  }

  const handleQueryClick = (queryInfo: any): any => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}