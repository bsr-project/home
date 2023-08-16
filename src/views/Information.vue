<style lang="scss">
.file-list {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>

<template>
  <div>
    <div w-full bg-white rounded-3 p-5 shadow-lg class="file-list">
      <div v-for="item in list" :key="item.path">
        <div
          flex="~ col"
          justify-center
          items-center
          cursor-pointer
          @click="openDocx(item.path)"
        >
          <div i-vscode-icons-file-type-word w-10 h-10></div>
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>

    <DocxViewer v-model:visible="visible" :content="docxData"></DocxViewer>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import mammoth from 'mammoth'

const visible = ref(false)

const docxData = ref('')

const docs = import.meta.glob('@/assets/docs/*.docx', { eager: true })

const list = _map(docs, (item: any, key: string) => {
  const name = _get(/\/([^/]*)\.docx$/.exec(key), '1', '')

  return {
    path: item.default,
    name
  }
})

const openDocx = async (path: string) => {
  const arrayBuffer = await axios.get(path, { responseType: 'arraybuffer' })

  const html = await mammoth.convertToHtml({
    arrayBuffer: arrayBuffer.data
  })

  visible.value = true

  docxData.value = html.value
}
</script>
