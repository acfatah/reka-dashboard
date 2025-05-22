<script setup lang="ts">
import { useForwardProps } from 'reka-ui'
import { toast } from '@/components/ui/toast'

const props = withDefaults(defineProps<{
  disabled?: boolean
}>(), {
  disabled: false,
})

const value = ref([])

function handleComplete(inputs: string[]) {
  const pin = inputs.join('')

  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-full rounded-md bg-slate-950 p-4' }, h(
      'code',
      { class: 'text-white' },
      JSON.stringify(pin, null, 2),
    )),
  })
}

const forwarded = useForwardProps(props)
</script>

<template>
  <PinInput
    id="pin-input"
    v-model="value"
    placeholder="○"
    v-bind="forwarded"
    otp
    @complete="handleComplete"
  >
    <PinInputGroup>
      <PinInputSlot
        v-for="(id, index) in 5"
        :key="id"
        :index="index"
      />
    </PinInputGroup>
  </PinInput>
</template>
