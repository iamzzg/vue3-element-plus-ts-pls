<template>
  <el-dropdown>
    <div class="flex items-center cursor-pointer outline-0">
      <Avatar :size="30" class="mx-2" :src="getImageUrl('avatar.png')"></Avatar>
      <span class="mx-2">admin</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { getImageUrl } from '@/utils/index'
</script>
<style lang="scss">
.select {
  &__container {
    text-align: center;
    letter-spacing: 4px;
  }

  &__item {
    height: 30px;
    margin: 0;
    line-height: 30px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
