import { createContext } from 'reka-ui'

export { default as PinInput } from './PinInput.vue'
export { default as PinInputGroup } from './PinInputGroup.vue'
export { default as PinInputInput } from './PinInputInput.vue'
export { default as PinInputSeparator } from './PinInputSeparator.vue'

export const [injectPinInputContext, providePinInputContext]
  = createContext<{ disabled: Ref<boolean> }>('PinInput')
