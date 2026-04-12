// 加载 Markdown 内容的工具函数
const contentCache = {}

export async function loadMarkdownContent(filename) {
  if (contentCache[filename]) {
    return contentCache[filename]
  }

  try {
    const response = await fetch(`/src/content/${filename}`)
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`)
    }
    const content = await response.text()
    contentCache[filename] = content
    return content
  } catch (error) {
    console.error(`Error loading ${filename}:`, error)
    return ''
  }
}
