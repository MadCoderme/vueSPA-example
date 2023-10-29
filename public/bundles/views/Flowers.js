import { openBlock, createElementBlock, createBlock } from 'vue';

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", null, "Home"))
}

const script$1 = {};


script$1.render = render;
script$1.__file = "src/components/Counter.vue";

var script = {
  __name: 'Flowers',
  setup(__props) {


return (_ctx, _cache) => {
  return (openBlock(), createBlock(script$1))
}
}

};

script.__file = "src/views/Flowers.vue";

export { script as default };
