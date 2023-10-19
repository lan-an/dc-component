#!/usr/bin/env sh
###
 # @Date: 2023-10-18 15:58:56
 # @Auth: 463997479@qq.com
 # @LastEditors: 463997479@qq.com
 # @LastEditTime: 2023-10-18 16:06:54
 # @FilePath: \dc-component\deploy.sh
### 
 
# 忽略错误
set -e  #有错误抛出错误
 

# 构建
pnpm run docs:build  #然后执行打包命令
 
# 进入待发布的目录
cd docs/.vitepress/dist  #进到dist目录
 
git init  #执行这些git命令
git add -A
git commit -m 'deploy'
 
git push -f git@github.com:lan-an/dc-component.git master:gh-pages  #提交到这个分支
 
cd -
 
rm -rf docs/.vitepress/dist  #删除dist文件夹