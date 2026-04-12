<template>
  <div class="biography">
    <div class="biography-container">
      <div class="photo-section">
        <img :src="baseUrl + 'images/selfie-2.jpg'" alt="Biography Photo" class="biography-photo" />
      </div>
      <div class="content-section">
        <div class="biography-content" v-html="biographyHtml"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

// 直接导入 Markdown 文件内容
import biographyCh from '../content/biography-ch.md?raw'
import biographyEn from '../content/biography-en.md?raw'

const baseUrl = import.meta.env.BASE_URL

const route = useRoute()
const locale = computed(() => route.query.lang || 'zh')

const biographyHtml = computed(() => {
  const content = locale.value === 'zh' ? biographyCh : biographyEn
  return marked(content)
})
</script>
