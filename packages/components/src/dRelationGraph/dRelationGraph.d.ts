import { RGOptions,RGJsonData } from 'relation-graph/vue3'
export * from 'relation-graph/types/types';

type DRGDataType = 'json'
export interface DRGOptions {
  option?: RGOptions
}
export interface DRGData {
  type: DRGDataType,
  data: RGJsonData
}