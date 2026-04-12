<template>
  <div class="home">
    <!-- 上方区域：照片 + 简短介绍 -->
    <div class="profile-section">
      <div class="profile-left">
        <img src="/images/selfie-1.jpg" alt="Profile Photo" class="profile-photo" />
      </div>
      <div class="profile-right">
        <div class="profile-intro" v-html="introHtml"></div>
      </div>
    </div>
    
    <!-- 横条：分隔线 + 邮箱 -->
    <div class="divider-bar">
      <div class="divider-content">
        <span class="email-label">E-mail:</span>
        <a :href="'mailto:' + email" class="email-link">{{ email }}</a>
      </div>
    </div>
    
    <!-- 横条下方：详细信息 -->
    <div class="details-section">
      <div class="details-content" v-html="detailsHtml"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import matter from 'gray-matter'

// 导入 Markdown 文件内容
import profilesCh from '../content/profiles-ch.md?raw'
import profilesEn from '../content/profiles-en.md?raw'
import detailsCh from '../content/home-details-ch.md?raw'
import detailsEn from '../content/home-details-en.md?raw'

const route = useRoute()
const locale = computed(() => route.query.lang || 'zh')

const profileData = computed(() => {
  const content = locale.value === 'zh' ? profilesCh : profilesEn
  const parsed = matter(content)
  return {
    data: parsed.data,
    content: parsed.content
  }
})

const email = computed(() => profileData.value.data.email || 'xxx@m.fudan.edu.cn')
const introHtml = computed(() => marked(profileData.value.content))

const detailsHtml = computed(() => {
  const content = locale.value === 'zh' ? detailsCh : detailsEn
  return marked(content)
})
</script>
