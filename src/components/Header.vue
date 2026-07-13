<template>
  <header class="header">
    <div class="header-container">
      <nav class="nav">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path"
          :to="{ path: item.path, query: route.query }"
          class="nav-link"
          :class="{ active: $route.path === item.path }"
        >
          {{ locale === 'zh' ? item.labelZh : item.labelEn }}
        </router-link>
      </nav>
      <div class="lang-switch">
        <button 
          class="lang-btn" 
          :class="{ active: locale === 'zh' }"
          @click="switchLang('zh')"
        >
          中文
        </button>
        <span class="lang-divider">|</span>
        <button 
          class="lang-btn" 
          :class="{ active: locale === 'en' }"
          @click="switchLang('en')"
        >
          English
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const locale = computed(() => route.query.lang || 'en')

const menuItems = [
  { path: '/', labelZh: '主页', labelEn: 'Home' },
  { path: '/biography', labelZh: '自传', labelEn: 'Biography' },
  { path: '/research', labelZh: '研究', labelEn: 'Research' },
  { path: '/academic', labelZh: '学术活动', labelEn: 'Academic Activities' },
  { path: '/grants', labelZh: '奖项', labelEn: 'Grants & Awards' }
]

const switchLang = (lang) => {
  router.push({
    path: route.path,
    query: { ...route.query, lang }
  })
}
</script>
