<!--
 * @Date: 2023-11-06 10:07:11
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-07 18:12:43
 * @FilePath: \dc-component\src\view\OrganizationTree\index.vue
-->
<template>
  <OrganizationTree
    ref="treeRef"
    :treeData="state.treeData"
    v-bind="state.treeOption"
    @eSaveNodes="onSaveNodes"
  >
  <template #search>
    <ElInput
      v-model="filterText"
      clearable
      size="large"
      style="width:calc(100% - 20px);margin-bottom:10px;"
      placeholder="请输入关键字进行搜索"
      @keyup.enter="searchClick"
      >
      <template #append>
        <ElButton :icon="Search" @click="searchClick" />
      </template>
  </ElInput>
  </template>
  </OrganizationTree>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import {ElInput,ElButton} from 'element-plus'
import {Search} from '@element-plus/icons-vue'
import { OrganizationTree } from 'dc-pro-component';
import { reactive } from 'vue';
const state = reactive({
  treeData:[{
    id: 2,
    label: '市委',
    code: 'GO_f6dcdfa87d1e4eadb0e33d2a2d7c6333',
    children: null,
    ykzId: "2",
    ykzParentId: 1,
    govName: "市委",
    govShortName: "市委",
    ancestors: "0,1",
    orgType: "GOV_HOLLOW_STRIP_NODE",
    displayOrder: 1,
    isDeleted: 0,
    isEnable: 1,
    govAddress: "",
    govDivisionCode: "500000000000",
    govBusinessStripCodes: "100",
    govInstitutionLevelCode: "",
    organizationCode: "GO_f6dcdfa87d1e4eadb0e33d2a2d7c6333",
    parentOrganizationCode: "GO_342adcf9c8604fd3bdc1f49f68316784",
    principal: "",
    creditCode: "",
    remark: "",
    areaLevel: "1",
    createTime: null,
    updateTime: "2023-07-26 18:42:42"
  },{
    id: 3,
    label: "市人大市人大市人大市人大市人大市人大",
    code: "GO_acbaf8c3ee0642f19592cf73bf4cc016",
    children: null,
    ykzId: "3",
    ykzParentId: 1,
    govName: "市人大",
    govShortName: "市人大",
    ancestors: "0,1",
    orgType: "GOV_HOLLOW_STRIP_NODE",
    displayOrder: 6,
    isDeleted: 0,
    isEnable: 1,
    govAddress: "",
    govDivisionCode: "500000000000",
    govBusinessStripCodes: "300",
    govInstitutionLevelCode: "",
    organizationCode: "GO_acbaf8c3ee0642f19592cf73bf4cc016",
    parentOrganizationCode: "GO_342adcf9c8604fd3bdc1f49f68316784",
    principal: "",
    creditCode: "",
    remark: "",
    areaLevel: "1",
    createTime: null,
    updateTime: "2023-07-26 18:42:42"
  }],
  treeOption: {
    isSearchable:true,
    isDraggable: true,
    isEditNode: false,
    ellipsisLen: 5,
  },

})
const filterText = ref('')
// const treeRef = ref<InstanceType<typeof ElTree>>()

function searchClick() {
  console.log('search')
}
watch(filterText, (val) => {
  // treeRef.value!.filter(val)
})
</script>

<style>

</style>