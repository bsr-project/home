<template>
  <el-dialog v-model="showDialog">
    <div px-1>
      <div v-html="props.content"></div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  content: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:visible'])

const showDialog = computed({
  get() {
    return props.visible
  },
  set(value) {
    emit('update:visible', value)
  }
})
</script>
