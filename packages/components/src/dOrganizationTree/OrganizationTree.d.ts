/*
 * @Date: 2023-11-06 11:21:16
 * @Auth: 873768511@qq.com
 * @LastEditors: 873768511@qq.com
 * @LastEditTime: 2023-11-07 14:55:04
 * @FilePath: \dc-component\packages\components\src\OrganizationTree\OrganizationTree.d.ts
 */
export interface Tree {
	id: string|number;
	key?: string;
	label: string;
	children: Tree[]|null;
	disabled?: string;
	isLeaf?: boolean;
	disableCheckbox?: string;
	checkable?: string;
	icon?: string;
	parentId?: string;
	class?:string
}
