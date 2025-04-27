import { createContext } from 'reka-ui'

export { default as TagsInput } from './TagsInput.vue'
export { default as TagsInputInput } from './TagsInputInput.vue'
export { default as TagsInputItem } from './TagsInputItem.vue'
export { default as TagsInputItemDelete } from './TagsInputItemDelete.vue'
export { default as TagsInputItemText } from './TagsInputItemText.vue'

export const [injectTagsInputContext, provideTagsInputContext]
  = createContext<{ focus: Ref<boolean> }>('TagsInput')
