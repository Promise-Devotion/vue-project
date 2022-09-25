<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
// import TheWelcome from "../components/TheWelcome.vue";
const handleOpen = () => {};
const handleClose = () => {};
</script>

<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>基础知识</span>
            </template>
            <el-menu-item-group title="模板语法和指令">
              <el-menu-item index="1-1">
                <RouterLink to="/home/template-syntax">模板语法</RouterLink>
              </el-menu-item>
              <el-menu-item index="1-2">
                <RouterLink to="/home/directives">指令</RouterLink>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <main>
          <RouterView />
        </main>
      </el-col>
    </el-row>
  </div>
</template>
