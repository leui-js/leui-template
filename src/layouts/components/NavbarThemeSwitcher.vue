<script setup lang="ts">
import type { ThemeSwitcherTheme } from '@layouts/types'

const themes: ThemeSwitcherTheme[] = [
  {
    name: 'system',
    label:'跟随系统',
    icon: 'ri-macbook-line',
  },
  {
    name: 'light',
    label:'浅色主题',

    icon: 'ri-sun-line',
  },
  {
    name: 'dark',
    label: '深色主题',
    icon: 'ri-moon-clear-line',
  },
]
</script>

<template>
  <ThemeSwitcher :themes="themes" />
</template>
