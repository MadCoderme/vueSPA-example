import {defineComponent,openBlock,createElementBlock,createElementVNode,pushScopeId,popScopeId,ref,createVNode,normalizeStyle,withDirectives,Fragment,renderList,vShow}from'vue';const _withScopeId$1 = n => (pushScopeId("data-v-0eca37cb"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "search-box" };
const _hoisted_2$1 = _withScopeId$1(() => createElementVNode("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        opacity: "0.16",
        d: "M19 11C19 13.1217 18.1571 15.1566 16.6569 16.6569C15.1566 18.1571 13.1217 19 11 19C8.87827 19 6.84344 18.1571 5.34315 16.6569C3.84285 15.1566 3 13.1217 3 11C3 8.87827 3.84285 6.84344 5.34315 5.34315C6.84344 3.84285 8.87827 3 11 3C13.1217 3 15.1566 3.84285 16.6569 5.34315C18.1571 6.84344 19 8.87827 19 11Z",
        fill: "currentColor"
    }),
    createElementVNode("path", {
        d: "M21 21L16.657 16.657M16.657 16.657C17.3999 15.9141 17.9892 15.0322 18.3912 14.0615C18.7933 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94939 18.7933 8.90908 18.3912 7.93845C17.9892 6.96782 17.3999 6.08588 16.657 5.34299C15.9141 4.6001 15.0322 4.01081 14.0615 3.60877C13.0909 3.20672 12.0506 2.99979 11 2.99979C9.94939 2.99979 8.90908 3.20672 7.93845 3.60877C6.96782 4.01081 6.08588 4.6001 5.34299 5.34299C3.84266 6.84332 2.99979 8.87821 2.99979 11C2.99979 13.1218 3.84266 15.1567 5.34299 16.657C6.84332 18.1573 8.87821 19.0002 11 19.0002C13.1218 19.0002 15.1567 18.1573 16.657 16.657Z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })
], -1));
var script$1 = defineComponent({
    __name: 'SearchBar',
    props: {
        tags: (Array)
    },
    setup(__props) {
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1$1, [
                _hoisted_2$1,
                createElementVNode("input", {
                    type: "search",
                    class: "search-field",
                    placeholder: "Search...",
                    onInput: _cache[0] || (_cache[0] = ($event) => (_ctx.$emit('onChange', $event.target))),
                    maxlength: "200"
                }, null, 32)
            ]));
        };
    }
});function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$1 = "\n.search-box[data-v-0eca37cb] {\n    background-color: #27323A77;\n    border-radius: 20px;\n    padding: 10px;\n    padding-left: 15px;\n    padding-right: 20px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.search-field[data-v-0eca37cb] {\n    font-size: 16px;\n    color: white;\n    background: transparent;\n    border: none;\n    margin-left: 10px;\n    width: 100%;\n}\n.search-field[data-v-0eca37cb]:focus {\n    outline: none;\n}";
styleInject(css_248z$1);script$1.__scopeId = "data-v-0eca37cb";
script$1.__file = "src/components/SearchBar.vue";const _withScopeId = n => (pushScopeId("data-v-44cf7306"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "tabs" };
const _hoisted_3 = { class: "tab" };
const _hoisted_4 = _withScopeId(() => createElementVNode("img", {
    src: "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    loading: "lazy",
    class: "cover"
}, null, -1));
const _hoisted_5 = _withScopeId(() => createElementVNode("div", null, [
    createElementVNode("p", { style: { "font-size": "18px", "font-weight": "bold" } }, "@Photography"),
    createElementVNode("p", { style: { "color": "#ababab" } }, "25k Members"),
    createElementVNode("p", { style: { "color": "var(--c-primary)" } }, "#photos #captures")
], -1));
const _hoisted_6 = [
    _hoisted_4,
    _hoisted_5
];
var script = defineComponent({
    __name: 'Communities',
    setup(__props) {
        const activeTab = ref(0);
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(script$1, { style: { "width": "90%" } }),
                createElementVNode("div", _hoisted_2, [
                    createElementVNode("p", {
                        style: normalizeStyle({ color: activeTab.value == 0 ? 'white' : '#ababab' }),
                        onClick: _cache[0] || (_cache[0] = ($event) => (activeTab.value = 0))
                    }, " Your Communities ", 4),
                    createElementVNode("p", {
                        style: normalizeStyle({ color: activeTab.value == 1 ? 'white' : '#ababab' }),
                        onClick: _cache[1] || (_cache[1] = ($event) => (activeTab.value = 1))
                    }, " Explore ", 4)
                ]),
                withDirectives(createElementVNode("div", _hoisted_3, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(3, (item) => {
                        return createElementVNode("div", {
                            key: item,
                            onClick: _cache[2] || (_cache[2] = ($event) => (_ctx.$router.push('/communities/photography')))
                        }, [..._hoisted_6]);
                    }), 64))
                ], 512), [
                    [vShow, activeTab.value == 0]
                ])
            ]));
        };
    }
});var css_248z = "\n.tabs[data-v-44cf7306] {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    color: white;\n    margin-top: 15px;\n    -webkit-align-self: flex-start;\n        -ms-flex-item-align: start;\n            align-self: flex-start;\n    margin-left: 5%;\n}\n.tabs > p[data-v-44cf7306] {\n    font-size: 18px;\n    font-weight: bold;\n    margin-right: 15px;\n    cursor: pointer;\n    transition: 0.3s ease;\n}\n.tab[data-v-44cf7306] {\n    width: 100%; \n    display: -webkit-flex; \n    display: -ms-flexbox; \n    display: flex; \n    -webkit-flex-direction: column; \n        -ms-flex-direction: column; \n            flex-direction: column; \n    -webkit-align-items: center; \n        -ms-flex-align: center; \n            align-items: center;\n    padding-top: 20px;\n}\n.tab > div[data-v-44cf7306] {\n    width: 90%;\n    margin-bottom: 20px;\n    padding: 10px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: white;\n}\n.cover[data-v-44cf7306] {\n    width: 70px;\n    height: 70px;\n    border-radius: 15px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin-right: 15px;\n}\n";
styleInject(css_248z);script.__scopeId = "data-v-44cf7306";
script.__file = "src/views/Communities.vue";export{script as default};