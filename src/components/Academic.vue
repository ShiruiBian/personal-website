<template>
  <div class="academic">
    <div class="academic-container">
      <div class="academic-content" v-html="academicHtml"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

// 直接导入 Markdown 文件内容
import academicCh from '../content/academic-ch.md?raw'
import academicEn from '../content/academic-en.md?raw'

const route = useRoute()
const locale = computed(() => route.query.lang || 'en')

const academicHtml = computed(() => {
  const content = locale.value === 'zh' ? academicCh : academicEn
  return marked(content)
})
</script>
