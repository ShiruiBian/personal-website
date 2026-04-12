<template>
  <div class="grants">
    <div class="grants-container">
      <div class="grants-content" v-html="grantsHtml"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

// 直接导入 Markdown 文件内容
import grantsCh from '../content/grants-ch.md?raw'
import grantsEn from '../content/grants-en.md?raw'

const route = useRoute()
const locale = computed(() => route.query.lang || 'zh')

const grantsHtml = computed(() => {
  const content = locale.value === 'zh' ? grantsCh : grantsEn
  return marked(content)
})
</script>
