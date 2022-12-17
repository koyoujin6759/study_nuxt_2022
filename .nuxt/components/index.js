export { default as Child } from '../../components/Child.vue'
export { default as Child2 } from '../../components/Child2.vue'
export { default as ClassItem } from '../../components/ClassItem.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Parents } from '../../components/Parents.vue'
export { default as Parents2 } from '../../components/Parents2.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
