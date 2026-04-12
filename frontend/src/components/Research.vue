<template>
  <div class="research">
    <div class="research-container">
      <div class="research-content" v-html="researchHtml"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

// 直接导入 Markdown 文件内容
import researchCh from '../content/research-ch.md?raw'
import researchEn from '../content/research-en.md?raw'

const route = useRoute()
const locale = computed(() => route.query.lang || 'zh')

const researchHtml = computed(() => {
  const content = locale.value === 'zh' ? researchCh : researchEn
  return marked(content)
})
</script>
