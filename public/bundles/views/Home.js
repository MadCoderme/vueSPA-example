import {defineComponent,openBlock,createBlock,Transition,withCtx,createElementVNode,pushScopeId,popScopeId,createTextVNode,normalizeClass,ref,createElementBlock,Fragment,withDirectives,createVNode,vShow,computed,resolveComponent,effectScope,markRaw,hasInjectionContext,inject,watch,reactive,isRef,isReactive,toRaw,getCurrentScope,onScopeDispose,nextTick,toRefs,createStaticVNode,toDisplayString,unref,createCommentVNode,renderList,onMounted}from'vue';function _mergeNamespaces(n, m){m.forEach(function(e){e&&typeof e!=='string'&&!Array.isArray(e)&&Object.keys(e).forEach(function(k){if(k!=='default'&&!(k in n)){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:function(){return e[k]}});}})});return Object.freeze(n);}const _withScopeId$3 = n => (pushScopeId("data-v-4659f920"), n = n(), popScopeId(), n);
const _hoisted_1$6 = _withScopeId$3(() => createElementVNode("h3", null, [
    createElementVNode("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [
        createElementVNode("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M2.5 8.33329C2.5 5.19079 2.5 3.61913 3.47667 2.64329C4.4525 1.66663 6.02417 1.66663 9.16667 1.66663H10.8333C13.9758 1.66663 15.5475 1.66663 16.5233 2.64329C17.5 3.61913 17.5 5.19079 17.5 8.33329V11.6666C17.5 14.8091 17.5 16.3808 16.5233 17.3566C15.5475 18.3333 13.9758 18.3333 10.8333 18.3333H9.16667C6.02417 18.3333 4.4525 18.3333 3.47667 17.3566C2.5 16.3808 2.5 14.8091 2.5 11.6666V8.33329ZM5 9.99996C5 8.82163 5 8.23246 5.36667 7.86663C5.73167 7.49996 6.32083 7.49996 7.5 7.49996H12.5C13.6783 7.49996 14.2675 7.49996 14.6333 7.86663C15 8.23246 15 8.82163 15 9.99996V13.3333C15 14.5116 15 15.1008 14.6333 15.4666C14.2675 15.8333 13.6783 15.8333 12.5 15.8333H7.5C6.32167 15.8333 5.7325 15.8333 5.36667 15.4666C5 15.1016 5 14.5125 5 13.3333V9.99996ZM5.83333 4.37496C5.66757 4.37496 5.5086 4.44081 5.39139 4.55802C5.27418 4.67523 5.20833 4.8342 5.20833 4.99996C5.20833 5.16572 5.27418 5.32469 5.39139 5.4419C5.5086 5.55911 5.66757 5.62496 5.83333 5.62496H10C10.1658 5.62496 10.3247 5.55911 10.4419 5.4419C10.5592 5.32469 10.625 5.16572 10.625 4.99996C10.625 4.8342 10.5592 4.67523 10.4419 4.55802C10.3247 4.44081 10.1658 4.37496 10 4.37496H5.83333Z",
            fill: "#A3F7BF",
            "fill-opacity": "0.8"
        })
    ]),
    createTextVNode(" Feeds ")
], -1));
const _hoisted_2$5 = _withScopeId$3(() => createElementVNode("button", { class: "new-btn" }, [
    createElementVNode("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [
        createElementVNode("path", {
            d: "M11 12H3M16 6H3M16 18H3M18 9V15M21 12H15",
            stroke: "#A3F7BF",
            "stroke-opacity": "0.8",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        })
    ])
], -1));
const _hoisted_3$2 = _withScopeId$3(() => createElementVNode("p", { style: { color: '#A3F7BF' } }, [
    createElementVNode("span", {
        class: normalizeClass(['dot-fill'])
    }),
    createTextVNode(" Home ")
], -1));
const _hoisted_4$2 = _withScopeId$3(() => createElementVNode("p", null, [
    createElementVNode("span", {
        class: normalizeClass(['dot'])
    }),
    createTextVNode(" Following ")
], -1));
const _hoisted_5$2 = _withScopeId$3(() => createElementVNode("p", null, [
    createElementVNode("span", {
        class: normalizeClass(['dot'])
    }),
    createTextVNode(" Demo Feed 1 ")
], -1));
const _hoisted_6$2 = _withScopeId$3(() => createElementVNode("p", null, [
    createElementVNode("span", {
        class: normalizeClass(['dot'])
    }),
    createTextVNode(" Demo Feed 2 ")
], -1));
const _hoisted_7$2 = _withScopeId$3(() => createElementVNode("br", null, null, -1));
const _hoisted_8$3 = _withScopeId$3(() => createElementVNode("h3", null, [
    createElementVNode("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [
        createElementVNode("path", {
            d: "M0 6.23702C0.000305196 7.68489 0.502143 9.08787 1.42001 10.2069C2.33788 11.326 3.61499 12.0918 5.03375 12.3741C5.19342 10.6123 5.92483 8.95122 7.11625 7.64459C6.63697 7.46715 6.11488 7.44098 5.62029 7.56961C5.12569 7.69824 4.68236 7.97549 4.35 8.36402C4.29665 8.42646 4.23154 8.47777 4.15838 8.51502C4.08522 8.55226 4.00545 8.57473 3.92361 8.58111C3.84178 8.58751 3.75949 8.5777 3.68145 8.55226C3.6034 8.52682 3.53113 8.48624 3.46875 8.43284C3.40637 8.37944 3.35511 8.31426 3.3179 8.24103C3.28069 8.1678 3.25825 8.08796 3.25186 8.00605C3.24548 7.92414 3.25527 7.84177 3.28069 7.76365C3.30611 7.68553 3.34665 7.61319 3.4 7.55076C3.96599 6.88858 4.74452 6.44416 5.60208 6.29372C6.45963 6.14327 7.34276 6.29619 8.1 6.72623C9.33147 5.7537 10.819 5.16074 12.3812 5.01962C12.0747 3.50007 11.2156 2.14849 9.97041 1.22668C8.72522 0.30487 7.18254 -0.12156 5.6412 0.029993C4.09987 0.181546 2.66958 0.900296 1.62739 2.04702C0.585204 3.19374 0.00529622 4.68681 0 6.23702ZM5.3125 4.36025C5.3125 4.48348 5.28825 4.6055 5.24114 4.71935C5.19402 4.8332 5.12497 4.93665 5.03791 5.02378C4.95086 5.11092 4.84751 5.18004 4.73377 5.2272C4.62002 5.27436 4.49811 5.29863 4.375 5.29863C4.25189 5.29863 4.12998 5.27436 4.01623 5.2272C3.90249 5.18004 3.79914 5.11092 3.71209 5.02378C3.62503 4.93665 3.55598 4.8332 3.50886 4.71935C3.46175 4.6055 3.4375 4.48348 3.4375 4.36025C3.4375 4.11137 3.53627 3.87269 3.71209 3.69671C3.8879 3.52073 4.12636 3.42186 4.375 3.42186C4.62364 3.42186 4.8621 3.52073 5.03791 3.69671C5.21373 3.87269 5.3125 4.11137 5.3125 4.36025ZM9.0625 4.36025C9.0625 4.60912 8.96373 4.8478 8.78791 5.02378C8.6121 5.19977 8.37364 5.29863 8.125 5.29863C7.87636 5.29863 7.6379 5.19977 7.46209 5.02378C7.28627 4.8478 7.1875 4.60912 7.1875 4.36025C7.1875 4.11137 7.28627 3.87269 7.46209 3.69671C7.6379 3.52073 7.87636 3.42186 8.125 3.42186C8.37364 3.42186 8.6121 3.52073 8.78791 3.69671C8.96373 3.87269 9.0625 4.11137 9.0625 4.36025ZM20 13.1185C20 14.9436 19.2757 16.6939 17.9864 17.9845C16.697 19.275 14.9484 20 13.125 20C11.3016 20 9.55295 19.275 8.26364 17.9845C6.97433 16.6939 6.25 14.9436 6.25 13.1185C6.25 11.2934 6.97433 9.54309 8.26364 8.25256C9.55295 6.96203 11.3016 6.23702 13.125 6.23702C14.9484 6.23702 16.697 6.96203 17.9864 8.25256C19.2757 9.54309 20 11.2934 20 13.1185ZM11.5625 11.8673C11.5625 11.6185 11.4637 11.3798 11.2879 11.2038C11.1121 11.0278 10.8736 10.9289 10.625 10.9289C10.3764 10.9289 10.1379 11.0278 9.96209 11.2038C9.78627 11.3798 9.6875 11.6185 9.6875 11.8673C9.6875 12.1162 9.78627 12.3549 9.96209 12.5309C10.1379 12.7068 10.3764 12.8057 10.625 12.8057C10.8736 12.8057 11.1121 12.7068 11.2879 12.5309C11.4637 12.3549 11.5625 12.1162 11.5625 11.8673ZM16.3812 15.0829C16.3189 15.0295 16.2466 14.9889 16.1686 14.9634C16.0905 14.938 16.0082 14.9282 15.9264 14.9346C15.8446 14.941 15.7648 14.9634 15.6916 15.0007C15.6185 15.0379 15.5533 15.0892 15.5 15.1517C15.2068 15.4945 14.843 15.7697 14.4335 15.9586C14.024 16.1474 13.5786 16.2454 13.1277 16.2457C12.6769 16.2461 12.2313 16.1488 11.8215 15.9606C11.4118 15.7724 11.0475 15.4978 10.7537 15.1554C10.7002 15.0931 10.635 15.0419 10.5617 15.0048C10.4884 14.9677 10.4086 14.9454 10.3267 14.9391C10.2448 14.9329 10.1625 14.9429 10.0844 14.9685C10.0064 14.9942 9.93417 15.0349 9.87187 15.0885C9.80958 15.1421 9.75843 15.2074 9.72136 15.2807C9.68428 15.3541 9.66201 15.434 9.6558 15.516C9.64958 15.5979 9.65956 15.6803 9.68517 15.7584C9.71077 15.8366 9.75149 15.9088 9.805 15.9712C10.2161 16.4509 10.726 16.8358 11.2998 17.0995C11.8736 17.3632 12.4976 17.4994 13.1289 17.4989C13.7603 17.4983 14.3841 17.3608 14.9574 17.0961C15.5306 16.8313 16.0398 16.4454 16.45 15.9649C16.5034 15.9025 16.5439 15.8302 16.5693 15.752C16.5947 15.6739 16.6045 15.5916 16.5982 15.5096C16.5918 15.4277 16.5693 15.3479 16.5321 15.2747C16.4949 15.2014 16.4436 15.1363 16.3812 15.0829ZM15.625 12.8057C15.8736 12.8057 16.1121 12.7068 16.2879 12.5309C16.4637 12.3549 16.5625 12.1162 16.5625 11.8673C16.5625 11.6185 16.4637 11.3798 16.2879 11.2038C16.1121 11.0278 15.8736 10.9289 15.625 10.9289C15.3764 10.9289 15.1379 11.0278 14.9621 11.2038C14.7863 11.3798 14.6875 11.6185 14.6875 11.8673C14.6875 12.1162 14.7863 12.3549 14.9621 12.5309C15.1379 12.7068 15.3764 12.8057 15.625 12.8057Z",
            fill: "#A3F7BF",
            "fill-opacity": "0.8"
        })
    ]),
    createTextVNode(" Moods ")
], -1));
const _hoisted_9$3 = _withScopeId$3(() => createElementVNode("p", null, [
    createElementVNode("span", {
        class: normalizeClass(['dot'])
    }),
    createTextVNode(" Positive ")
], -1));
const _hoisted_10$3 = _withScopeId$3(() => createElementVNode("p", null, [
    createElementVNode("span", {
        class: normalizeClass(['dot'])
    }),
    createTextVNode(" Motivational ")
], -1));
const _hoisted_11$2 = _withScopeId$3(() => createElementVNode("p", null, [
    createElementVNode("span", {
        class: "dot",
        style: { backgroundColor: '#A3F7BF' }
    }),
    createTextVNode(" Neutral ")
], -1));
const _hoisted_12$2 = [
    _hoisted_1$6,
    _hoisted_2$5,
    _hoisted_3$2,
    _hoisted_4$2,
    _hoisted_5$2,
    _hoisted_6$2,
    _hoisted_7$2,
    _hoisted_8$3,
    _hoisted_9$3,
    _hoisted_10$3,
    _hoisted_11$2
];
var script$6 = defineComponent({
    __name: 'FeedOptions',
    props: {
        hide: {
            type: Function,
            required: true
        }
    },
    setup(__props) {
        const props = __props;
        return (_ctx, _cache) => {
            return (openBlock(), createBlock(Transition, { name: "fadeIn" }, {
                default: withCtx(() => [
                    createElementVNode("div", {
                        class: "wrapper",
                        onClick: _cache[1] || (_cache[1] = ($event) => (props.hide()))
                    }, [
                        createElementVNode("div", {
                            class: "popup",
                            onClick: _cache[0] || (_cache[0] = ($event) => ($event.stopPropagation()))
                        }, [..._hoisted_12$2])
                    ])
                ]),
                _: 1
            }));
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
}var css_248z$7 = "\n.fadeIn-enter-active[data-v-4659f920] {\n  transition: all 0.5s ease-in;\n  opacity: 1;\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n.fadeIn-enter-to[data-v-4659f920] {\n  transition: all 0.5s ease-in;\n  opacity: 1;\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n}\n.fadeIn-leave-active[data-v-4659f920] {\n  transition: all 0.3s ease-out;\n  opacity: 0;\n}\n.wrapper[data-v-4659f920] {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    z-index: 100;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-backdrop-filter: blur(2px);\n            backdrop-filter: blur(2px);\n}\n.popup[data-v-4659f920] {\n    width: 90%;\n    padding: 25px;\n    background-color: var(--c-black-mute);\n    border-radius: 20px;\n}\n.popup > h3[data-v-4659f920] {\n  color: white;\n  font-weight: bold;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n.popup > h3 > svg[data-v-4659f920] {\n  margin-right: 6px;\n}\n.popup > p[data-v-4659f920] {\n  color: white;\n  font-size: 16px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n.new-btn[data-v-4659f920] {\n  float: right;\n  margin-top: -30px;\n  background: transparent;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.new-btn[data-v-4659f920]:hover {\n  background: var(--color-background);\n}\n.dot-fill[data-v-4659f920] {\n  height: 15px;\n  width: 15px;\n  background-color: var(--c-primary);\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 10px;\n}\n.dot[data-v-4659f920] {\n  height: 15px;\n  width: 15px;\n  border: 1px solid var(--c-primary);\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 10px;\n}\n";
styleInject(css_248z$7);script$6.__scopeId = "data-v-4659f920";
script$6.__file = "src/components/FeedOptions.vue";const _withScopeId$2 = n => (pushScopeId("data-v-4fab8702"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "header" };
const _hoisted_2$4 = _withScopeId$2(() => createElementVNode("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        d: "M11.3 14.3L8.7 11.7C8.38333 11.3833 8.31266 11.021 8.488 10.613C8.66333 10.205 8.97566 10.0007 9.425 10H14.575C15.025 10 15.3377 10.2043 15.513 10.613C15.6883 11.0217 15.6173 11.384 15.3 11.7L12.7 14.3C12.6 14.4 12.4917 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8667 14.6 11.7417 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z",
        fill: "#A3F7BF"
    })
], -1));
var script$5 = defineComponent({
    __name: 'Header',
    setup(__props) {
        const isFeedOptionsVisible = ref(false);
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock(Fragment, null, [
                createElementVNode("div", _hoisted_1$5, [
                    createElementVNode("p", {
                        onClick: _cache[0] || (_cache[0] = ($event) => (isFeedOptionsVisible.value = !isFeedOptionsVisible.value))
                    }, [
                        createTextVNode(" Home "),
                        _hoisted_2$4
                    ])
                ]),
                withDirectives(createVNode(script$6, {
                    hide: () => isFeedOptionsVisible.value = false
                }, null, 8, ["hide"]), [
                    [vShow, isFeedOptionsVisible.value]
                ])
            ], 64));
        };
    }
});var css_248z$6 = "\n.header[data-v-4fab8702] {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        right: 0px;\n        width: 100%;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-flex-direction: row;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-justify-content: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center;\n        background-color: var(--color-background);\n        padding-top: 2%;\n        padding-bottom: 2%;\n}\n.header > p[data-v-4fab8702] {\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center;\n        color: var(--c-primary);\n        cursor: pointer;\n}\n";
styleInject(css_248z$6);script$5.__scopeId = "data-v-4fab8702";
script$5.__file = "src/components/template/Header.vue";const _withScopeId$1 = n => (pushScopeId("data-v-29eff494"), n = n(), popScopeId(), n);
const _hoisted_1$4 = _withScopeId$1(() => createElementVNode("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        d: "M3.64001 2.27L7.50001 6.13L11.34 2.29C11.4248 2.19972 11.527 2.12749 11.6404 2.07766C11.7538 2.02783 11.8761 2.00141 12 2C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8947 2.48043 13 2.73478 13 3C13.0023 3.1226 12.9796 3.24439 12.9332 3.35788C12.8867 3.47138 12.8176 3.57419 12.73 3.66L8.84001 7.5L12.73 11.39C12.8948 11.5512 12.9915 11.7696 13 12C13 12.2652 12.8947 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13C11.8726 13.0053 11.7454 12.984 11.6266 12.9375C11.5078 12.8911 11.4 12.8204 11.31 12.73L7.50001 8.87L3.65001 12.72C3.56552 12.8073 3.46457 12.8769 3.35301 12.925C3.24145 12.9731 3.12147 12.9986 3.00001 13C2.73479 13 2.48044 12.8946 2.2929 12.7071C2.10537 12.5196 2.00001 12.2652 2.00001 12C1.99768 11.8774 2.02043 11.7556 2.06686 11.6421C2.11328 11.5286 2.18242 11.4258 2.27001 11.34L6.16001 7.5L2.27001 3.61C2.1052 3.44876 2.00855 3.23041 2.00001 3C2.00001 2.73478 2.10537 2.48043 2.2929 2.29289C2.48044 2.10536 2.73479 2 3.00001 2C3.24001 2.003 3.47001 2.1 3.64001 2.27Z",
        fill: "#A3F7BF",
        "fill-opacity": "0.7"
    })
], -1));
const _hoisted_2$3 = [
    _hoisted_1$4
];
const _hoisted_3$1 = _withScopeId$1(() => createElementVNode("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        d: "M17 20H22V18C22 17.3765 21.8057 16.7686 21.4441 16.2606C21.0826 15.7527 20.5718 15.37 19.9827 15.1658C19.3937 14.9615 18.7556 14.9459 18.1573 15.121C17.5589 15.2962 17.03 15.6534 16.644 16.143M17 20H7M17 20V18C17 17.344 16.874 16.717 16.644 16.143M16.644 16.143C16.2726 15.215 15.6318 14.4195 14.804 13.8591C13.9762 13.2988 12.9996 12.9993 12 12.9993C11.0004 12.9993 10.0238 13.2988 9.196 13.8591C8.36825 14.4195 7.72736 15.215 7.356 16.143M7 20H2V18C2.00005 17.3765 2.19434 16.7686 2.55586 16.2606C2.91739 15.7527 3.42819 15.37 4.01725 15.1658C4.60632 14.9615 5.24438 14.9459 5.84274 15.121C6.4411 15.2962 6.97003 15.6534 7.356 16.143M7 20V18C7 17.344 7.126 16.717 7.356 16.143M15 7C15 7.79565 14.6839 8.55871 14.1213 9.12132C13.5587 9.68393 12.7956 10 12 10C11.2044 10 10.4413 9.68393 9.87868 9.12132C9.31607 8.55871 9 7.79565 9 7C9 6.20435 9.31607 5.44129 9.87868 4.87868C10.4413 4.31607 11.2044 4 12 4C12.7956 4 13.5587 4.31607 14.1213 4.87868C14.6839 5.44129 15 6.20435 15 7ZM21 10C21 10.5304 20.7893 11.0391 20.4142 11.4142C20.0391 11.7893 19.5304 12 19 12C18.4696 12 17.9609 11.7893 17.5858 11.4142C17.2107 11.0391 17 10.5304 17 10C17 9.46957 17.2107 8.96086 17.5858 8.58579C17.9609 8.21071 18.4696 8 19 8C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10ZM7 10C7 10.5304 6.78929 11.0391 6.41421 11.4142C6.03914 11.7893 5.53043 12 5 12C4.46957 12 3.96086 11.7893 3.58579 11.4142C3.21071 11.0391 3 10.5304 3 10C3 9.46957 3.21071 8.96086 3.58579 8.58579C3.96086 8.21071 4.46957 8 5 8C5.53043 8 6.03914 8.21071 6.41421 8.58579C6.78929 8.96086 7 9.46957 7 10Z",
        stroke: "#A3F7BF",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })
], -1));
const _hoisted_4$1 = _withScopeId$1(() => createElementVNode("p", { style: { "margin-left": "10px" } }, "Communities", -1));
const _hoisted_5$1 = _withScopeId$1(() => createElementVNode("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("g", { "clip-path": "url(#clip0_61_626)" }, [
        createElementVNode("path", {
            d: "M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM12 6C12.2449 6.00003 12.4813 6.08996 12.6644 6.25272C12.8474 6.41547 12.9643 6.63975 12.993 6.883L13 7V11.586L15.707 14.293C15.8863 14.473 15.9905 14.7144 15.9982 14.9684C16.006 15.2223 15.9168 15.4697 15.7488 15.6603C15.5807 15.8508 15.3464 15.9703 15.0935 15.9944C14.8406 16.0185 14.588 15.9454 14.387 15.79L14.293 15.707L11.293 12.707C11.1376 12.5514 11.0378 12.349 11.009 12.131L11 12V7C11 6.73478 11.1054 6.48043 11.2929 6.29289C11.4804 6.10536 11.7348 6 12 6Z",
            fill: "#A3F7BF",
            "fill-opacity": "0.7"
        })
    ]),
    createElementVNode("defs", null, [
        createElementVNode("clipPath", { id: "clip0_61_626" }, [
            createElementVNode("rect", {
                width: "24",
                height: "24",
                fill: "white"
            })
        ])
    ])
], -1));
const _hoisted_6$1 = _withScopeId$1(() => createElementVNode("p", { style: { "margin-left": "10px" } }, "Time Travel Posts", -1));
const _hoisted_7$1 = _withScopeId$1(() => createElementVNode("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M4.929 17.657C4.74153 17.8445 4.63621 18.0988 4.63621 18.364C4.63621 18.6292 4.74153 18.8835 4.929 19.071C8.834 22.976 15.166 22.976 19.071 19.071C22.976 15.166 22.976 8.83399 19.071 4.92899C15.166 1.02399 8.834 1.02399 4.929 4.92899C3.29488 6.55806 2.27694 8.70386 2.049 11H1C0.80225 11 0.608952 11.0587 0.444542 11.1686C0.280132 11.2785 0.151993 11.4346 0.0763226 11.6173C0.000652529 11.8 -0.0191504 12.0011 0.0194171 12.195C0.0579847 12.389 0.153191 12.5671 0.293001 12.707L2.293 14.707L2.295 14.709C2.38783 14.8018 2.49809 14.8754 2.61944 14.9255C2.74078 14.9757 2.87083 15.0013 3.00212 15.001C3.13341 15.0007 3.26335 14.9745 3.38449 14.9239C3.50562 14.8733 3.61556 14.7992 3.708 14.706L5.708 12.707C5.84787 12.5671 5.9431 12.3888 5.98163 12.1948C6.02017 12.0007 6.00028 11.7996 5.92449 11.6169C5.84869 11.4341 5.7204 11.278 5.55584 11.1682C5.39127 11.0584 5.19784 10.9998 5 11H4.062C4.28809 9.20635 5.11503 7.54216 6.40804 6.27868C7.70105 5.01519 9.38389 4.2269 11.1823 4.0423C12.9807 3.85769 14.7886 4.28765 16.3113 5.2621C17.834 6.23654 18.9818 7.69802 19.5676 9.40833C20.1534 11.1186 20.1426 12.9769 19.537 14.6803C18.9314 16.3837 17.7667 17.8318 16.2328 18.7885C14.6988 19.7452 12.8861 20.1541 11.09 19.9486C9.29383 19.7432 7.62026 18.9354 6.342 17.657C6.15451 17.4698 5.90042 17.3647 5.6355 17.3647C5.37058 17.3647 5.11649 17.4698 4.929 17.657ZM10 7.99999C10 7.73478 10.1054 7.48042 10.2929 7.29289C10.4804 7.10535 10.7348 6.99999 11 6.99999C11.2652 6.99999 11.5196 7.10535 11.7071 7.29289C11.8946 7.48042 12 7.73478 12 7.99999V12H16C16.2652 12 16.5196 12.1054 16.7071 12.2929C16.8946 12.4804 17 12.7348 17 13C17 13.2652 16.8946 13.5196 16.7071 13.7071C16.5196 13.8946 16.2652 14 16 14H11C10.7348 14 10.4804 13.8946 10.2929 13.7071C10.1054 13.5196 10 13.2652 10 13V7.99999Z",
        fill: "#A3F7BF",
        "fill-opacity": "0.7"
    })
], -1));
const _hoisted_8$2 = _withScopeId$1(() => createElementVNode("p", { style: { "margin-left": "10px" } }, "History", -1));
const _hoisted_9$2 = _withScopeId$1(() => createElementVNode("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        d: "M4 12V9C4 8.20435 4.31607 7.44129 4.87868 6.87868C5.44129 6.31607 6.20435 6 7 6H20M20 6L17 3M20 6L17 9M20 12V15C20 15.7956 19.6839 16.5587 19.1213 17.1213C18.5587 17.6839 17.7956 18 17 18H4M4 18L7 21M4 18L7 15",
        stroke: "#A3F7BF",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })
], -1));
const _hoisted_10$2 = _withScopeId$1(() => createElementVNode("p", { style: { "margin-left": "10px" } }, "Recaps", -1));
const _hoisted_11$1 = _withScopeId$1(() => createElementVNode("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        d: "M15 22L14.445 22.832C14.5956 22.9325 14.7707 22.9902 14.9515 22.999C15.1323 23.0077 15.3121 22.9673 15.4718 22.8819C15.6314 22.7965 15.7648 22.6693 15.8579 22.514C15.9509 22.3587 16 22.181 16 22H15ZM12 20L12.555 19.168C12.3907 19.0584 12.1975 18.9998 12 18.9998C11.8025 18.9998 11.6093 19.0584 11.445 19.168L12 20ZM9 22H8C7.99997 22.181 8.04909 22.3587 8.14213 22.514C8.23516 22.6693 8.3686 22.7965 8.52823 22.8819C8.68786 22.9673 8.86769 23.0077 9.04852 22.999C9.22935 22.9902 9.4044 22.9325 9.555 22.832L9 22ZM15.555 21.168L12.555 19.168L11.445 20.832L14.445 22.832L15.555 21.168ZM11.445 19.168L8.445 21.168L9.555 22.832L12.555 20.832L11.445 19.168ZM12.762 3.43799L12.804 3.48799L14.327 2.19199L14.285 2.14199L12.762 3.43799ZM15.329 4.53399L15.394 4.52899L15.234 2.53499L15.169 2.53999L15.329 4.53399ZM16.471 5.60599L16.466 5.67099L18.46 5.83099L18.465 5.76599L16.471 5.60599ZM17.512 8.19599L17.562 8.23799L18.858 6.71499L18.808 6.67299L17.512 8.19599ZM17.562 9.76199L17.512 9.80399L18.808 11.327L18.858 11.285L17.562 9.76199ZM16.466 12.329L16.471 12.394L18.465 12.234L18.46 12.169L16.466 12.329ZM15.394 13.471L15.329 13.466L15.169 15.46L15.234 15.465L15.394 13.471ZM12.804 14.512L12.762 14.562L14.285 15.858L14.327 15.808L12.804 14.512ZM11.238 14.562L11.196 14.512L9.673 15.808L9.715 15.858L11.238 14.562ZM8.671 13.466L8.606 13.471L8.766 15.465L8.831 15.46L8.671 13.466ZM7.529 12.394L7.534 12.329L5.54 12.169L5.535 12.234L7.529 12.394ZM6.488 9.80399L6.438 9.76199L5.142 11.285L5.192 11.327L6.488 9.80399ZM6.438 8.23799L6.488 8.19599L5.192 6.67299L5.142 6.71499L6.438 8.23799ZM7.534 5.67099L7.529 5.60599L5.535 5.76599L5.54 5.83099L7.534 5.67099ZM8.606 4.52899L8.67 4.53399L8.831 2.53999L8.766 2.53499L8.606 4.52899ZM11.196 3.48799L11.238 3.43799L9.715 2.14199L9.673 2.19199L11.196 3.48799ZM8.67 4.53399C9.14364 4.57207 9.62054 4.49709 10.0595 4.31523C10.4985 4.13338 10.888 3.84985 11.196 3.48799L9.673 2.19199C9.57024 2.31254 9.44032 2.40695 9.29393 2.46745C9.14755 2.52796 8.98888 2.55282 8.831 2.53999L8.67 4.53399ZM7.529 5.60599C7.51738 5.46161 7.53726 5.31642 7.58728 5.18048C7.63729 5.04454 7.71625 4.92109 7.81867 4.81866C7.92109 4.71624 8.04455 4.63729 8.18049 4.58727C8.31643 4.53726 8.46162 4.51737 8.606 4.52899L8.766 2.53499C8.33293 2.50028 7.89749 2.56005 7.48979 2.71017C7.08208 2.86028 6.71185 3.09716 6.40469 3.40441C6.09753 3.71167 5.86077 4.08197 5.71078 4.48972C5.56079 4.89747 5.50016 5.33293 5.535 5.76599L7.529 5.60599ZM6.488 8.19599C6.84986 7.88803 7.13339 7.49852 7.31524 7.05953C7.4971 6.62054 7.57207 6.14463 7.534 5.67099L5.54 5.83099C5.55283 5.98887 5.52796 6.14754 5.46746 6.29393C5.40696 6.44031 5.31255 6.57024 5.192 6.67299L6.488 8.19599ZM6.438 9.76199C6.32754 9.66812 6.2388 9.55134 6.17795 9.41977C6.1171 9.28819 6.08558 9.14496 6.08558 8.99999C6.08558 8.85503 6.1171 8.71179 6.17795 8.58022C6.2388 8.44864 6.32754 8.33187 6.438 8.23799L5.142 6.71499C4.81095 6.99663 4.54505 7.34683 4.3627 7.74137C4.18035 8.1359 4.08591 8.56535 4.08591 8.99999C4.08591 9.43463 4.18035 9.86408 4.3627 10.2586C4.54505 10.6532 4.81095 11.0034 5.142 11.285L6.438 9.76199ZM7.534 12.329C7.57207 11.8554 7.4971 11.3794 7.31524 10.9405C7.13339 10.5015 6.84986 10.112 6.488 9.80399L5.192 11.327C5.31255 11.4297 5.40696 11.5597 5.46746 11.7061C5.52796 11.8524 5.55283 12.0111 5.54 12.169L7.534 12.329ZM8.606 13.471C8.46162 13.4826 8.31643 13.4627 8.18049 13.4127C8.04455 13.3627 7.92109 13.2837 7.81867 13.1813C7.71625 13.0789 7.63729 12.9554 7.58728 12.8195C7.53726 12.6836 7.51738 12.5384 7.529 12.394L5.535 12.234C5.50029 12.6671 5.56006 13.1025 5.71017 13.5102C5.86029 13.9179 6.09716 14.2881 6.40442 14.5953C6.71168 14.9025 7.08198 15.1392 7.48973 15.2892C7.89748 15.4392 8.33294 15.4988 8.766 15.464L8.606 13.471ZM12.762 14.561C12.6681 14.6715 12.5514 14.7602 12.4198 14.821C12.2882 14.8819 12.145 14.9134 12 14.9134C11.855 14.9134 11.7118 14.8819 11.5802 14.821C11.4486 14.7602 11.3319 14.6715 11.238 14.561L9.715 15.858C9.99663 16.189 10.3468 16.4549 10.7414 16.6373C11.1359 16.8196 11.5654 16.9141 12 16.9141C12.4346 16.9141 12.8641 16.8196 13.2586 16.6373C13.6532 16.4549 14.0034 16.189 14.285 15.858L12.762 14.562V14.561ZM16.471 12.394C16.4826 12.5385 16.4637 12.6837 16.4137 12.8198C16.3636 12.9558 16.2845 13.0793 16.182 13.1817C16.0795 13.2842 15.9559 13.3631 15.8198 13.413C15.6838 13.463 15.5385 13.4828 15.394 13.471L15.234 15.465C15.6671 15.4997 16.1025 15.4399 16.5102 15.2898C16.9179 15.1397 17.2882 14.9028 17.5953 14.5956C17.9025 14.2883 18.1392 13.918 18.2892 13.5103C18.4392 13.1025 18.4998 12.6671 18.465 12.234L16.471 12.394ZM17.512 9.80399C17.1501 10.112 16.8666 10.5015 16.6848 10.9405C16.5029 11.3794 16.4279 11.8554 16.466 12.329L18.46 12.169C18.4472 12.0111 18.472 11.8524 18.5325 11.7061C18.593 11.5597 18.6875 11.4297 18.808 11.327L17.512 9.80399ZM17.562 8.23799C17.6725 8.33187 17.7612 8.44864 17.8221 8.58022C17.8829 8.71179 17.9144 8.85503 17.9144 8.99999C17.9144 9.14496 17.8829 9.28819 17.8221 9.41977C17.7612 9.55134 17.6725 9.66812 17.562 9.76199L18.858 11.285C19.189 11.0034 19.455 10.6532 19.6373 10.2586C19.8196 9.86408 19.9141 9.43463 19.9141 8.99999C19.9141 8.56535 19.8196 8.1359 19.6373 7.74137C19.455 7.34683 19.189 6.99663 18.858 6.71499L17.562 8.23799ZM16.466 5.67099C16.4279 6.14463 16.5029 6.62054 16.6848 7.05953C16.8666 7.49852 17.1501 7.88803 17.512 8.19599L18.808 6.67299C18.6875 6.57024 18.593 6.44031 18.5325 6.29393C18.472 6.14754 18.4472 5.98887 18.46 5.83099L16.466 5.67099ZM15.394 4.52899C15.5384 4.51737 15.6836 4.53726 15.8195 4.58727C15.9555 4.63729 16.0789 4.71624 16.1813 4.81866C16.2838 4.92109 16.3627 5.04454 16.4127 5.18048C16.4627 5.31642 16.4826 5.46161 16.471 5.60599L18.465 5.76599C18.4997 5.33292 18.4399 4.89748 18.2898 4.48978C18.1397 4.08208 17.9028 3.71184 17.5956 3.40468C17.2883 3.09752 16.918 2.86076 16.5103 2.71077C16.1025 2.56078 15.6671 2.50015 15.234 2.53499L15.394 4.52899ZM12.804 3.48799C13.112 3.84985 13.5015 4.13338 13.9405 4.31523C14.3795 4.49709 14.8554 4.57207 15.329 4.53399L15.169 2.53999C15.0111 2.55282 14.8525 2.52796 14.7061 2.46745C14.5597 2.40695 14.4298 2.31254 14.327 2.19199L12.804 3.48799ZM14.285 2.14199C14.0034 1.81111 13.6522 1.54536 13.2578 1.36312C12.8633 1.18087 12.434 1.08649 11.9995 1.08649C11.565 1.08649 11.1357 1.18087 10.7412 1.36312C10.3468 1.54536 9.99663 1.81111 9.715 2.14199L11.238 3.43799C11.3319 3.32753 11.4486 3.23879 11.5802 3.17794C11.7118 3.11709 11.855 3.08557 12 3.08557C12.145 3.08557 12.2882 3.11709 12.4198 3.17794C12.5514 3.23879 12.6681 3.32753 12.762 3.43799L14.285 2.14199ZM11.196 14.512C10.9289 14.198 10.5999 13.9425 10.2297 13.7613C9.85942 13.5802 9.4558 13.4772 9.044 13.459L8.956 15.457C9.09321 15.4631 9.22769 15.4975 9.35104 15.5578C9.4744 15.6182 9.584 15.7034 9.673 15.808L11.196 14.512ZM9.044 13.46C8.91964 13.4546 8.79507 13.457 8.671 13.467L8.831 15.461C8.87256 15.4574 8.91431 15.4564 8.956 15.458L9.044 13.46ZM10 22V14.458H8V22H10ZM15.329 13.466C15.2046 13.4559 15.0807 13.4536 14.956 13.459L15.044 15.457C15.0857 15.4554 15.1274 15.4564 15.169 15.46L15.329 13.466ZM14.956 13.459C14.5442 13.4772 14.1406 13.5802 13.7703 13.7613C13.4001 13.9425 13.0711 14.198 12.804 14.512L14.327 15.808C14.4161 15.7036 14.5257 15.6186 14.6491 15.5584C14.7724 15.4982 14.9069 15.464 15.044 15.458L14.956 13.459ZM14 14.459V22H16V14.458L14 14.459Z",
        fill: "#A3F7BF",
        "fill-opacity": "0.7"
    }),
    createElementVNode("path", {
        d: "M14 8L11 11L10 10",
        stroke: "#A3F7BF",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })
], -1));
const _hoisted_12$1 = _withScopeId$1(() => createElementVNode("p", { style: { "margin-left": "10px" } }, "Badges", -1));
const _hoisted_13$1 = _withScopeId$1(() => createElementVNode("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        d: "M14.5 18C13.8 18 13.2083 17.7583 12.725 17.275C12.2417 16.7917 12 16.2 12 15.5C12 14.8 12.2417 14.2083 12.725 13.725C13.2083 13.2417 13.8 13 14.5 13C15.2 13 15.7917 13.2417 16.275 13.725C16.7583 14.2083 17 14.8 17 15.5C17 16.2 16.7583 16.7917 16.275 17.275C15.7917 17.7583 15.2 18 14.5 18ZM5 22C4.45 22 3.979 21.804 3.587 21.412C3.195 21.02 2.99934 20.5493 3 20V6C3 5.45 3.196 4.979 3.588 4.587C3.98 4.195 4.45067 3.99933 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.021 4.196 20.413 4.588C20.805 4.98 21.0007 5.45067 21 6V20C21 20.55 20.804 21.021 20.412 21.413C20.02 21.805 19.5493 22.0007 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z",
        fill: "#A3F7BF",
        "fill-opacity": "0.7"
    })
], -1));
const _hoisted_14$1 = _withScopeId$1(() => createElementVNode("p", { style: { "margin-left": "10px" } }, "Events", -1));
const _hoisted_15$1 = _withScopeId$1(() => createElementVNode("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        d: "M12 13V2L20 6L12 10",
        stroke: "#A3F7BF",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }),
    createElementVNode("path", {
        d: "M20.55 10.23C21.0821 11.8701 21.1319 13.6286 20.6934 15.2963C20.255 16.9639 19.3466 18.4704 18.0766 19.6367C16.8065 20.8029 15.2281 21.5798 13.5292 21.8748C11.8304 22.1699 10.0825 21.9707 8.49356 21.3009C6.90464 20.6311 5.54156 19.519 4.56649 18.0969C3.59142 16.6748 3.04541 15.0025 2.99341 13.2789C2.94142 11.5554 3.38563 9.85322 4.2732 8.37489C5.16077 6.89656 6.45434 5.70432 8 4.94",
        stroke: "#A3F7BF",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }),
    createElementVNode("path", {
        d: "M8 10C7.49891 10.667 7.17268 11.4488 7.05105 12.2742C6.92941 13.0996 7.01624 13.9422 7.30361 14.7254C7.59098 15.5087 8.06976 16.2075 8.69633 16.7584C9.32291 17.3092 10.0774 17.6945 10.8909 17.8792C11.7045 18.0638 12.5514 18.042 13.3544 17.8156C14.1573 17.5892 14.8909 17.1655 15.4882 16.5831C16.0855 16.0007 16.5276 15.278 16.7742 14.481C17.0208 13.684 17.0641 12.838 16.9 12.02",
        stroke: "#A3F7BF",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })
], -1));
const _hoisted_16$2 = _withScopeId$1(() => createElementVNode("p", { style: { "margin-left": "10px" } }, "Challenges", -1));
var script$4 = defineComponent({
    __name: 'SidebarMenu',
    props: {
        collapsed: Boolean,
        setCollapsed: {
            type: Function,
            required: true
        }
    },
    setup(__props) {
        const props = __props;
        const collapsed = computed(() => props?.collapsed);
        return (_ctx, _cache) => {
            const _component_RouterLink = resolveComponent("RouterLink");
            return (openBlock(), createBlock(Transition, {
                name: "slide",
                persisted: ""
            }, {
                default: withCtx(() => [
                    withDirectives(createElementVNode("nav", null, [
                        createElementVNode("button", {
                            onClick: _cache[0] || (_cache[0] = ($event) => (props?.setCollapsed(true))),
                            class: "close-btn"
                        }, [..._hoisted_2$3]),
                        createVNode(_component_RouterLink, {
                            to: "/communities",
                            class: "nav-item"
                        }, {
                            default: withCtx(() => [
                                _hoisted_3$1,
                                _hoisted_4$1
                            ]),
                            _: 1
                        }),
                        createVNode(_component_RouterLink, {
                            to: "/timetravel",
                            class: "nav-item"
                        }, {
                            default: withCtx(() => [
                                _hoisted_5$1,
                                _hoisted_6$1
                            ]),
                            _: 1
                        }),
                        createVNode(_component_RouterLink, {
                            to: "/history",
                            class: "nav-item"
                        }, {
                            default: withCtx(() => [
                                _hoisted_7$1,
                                _hoisted_8$2
                            ]),
                            _: 1
                        }),
                        createVNode(_component_RouterLink, {
                            to: "/recaps",
                            class: "nav-item"
                        }, {
                            default: withCtx(() => [
                                _hoisted_9$2,
                                _hoisted_10$2
                            ]),
                            _: 1
                        }),
                        createVNode(_component_RouterLink, {
                            to: "/badges",
                            class: "nav-item"
                        }, {
                            default: withCtx(() => [
                                _hoisted_11$1,
                                _hoisted_12$1
                            ]),
                            _: 1
                        }),
                        createVNode(_component_RouterLink, {
                            to: "/events",
                            class: "nav-item"
                        }, {
                            default: withCtx(() => [
                                _hoisted_13$1,
                                _hoisted_14$1
                            ]),
                            _: 1
                        }),
                        createVNode(_component_RouterLink, {
                            to: "/challenges",
                            class: "nav-item"
                        }, {
                            default: withCtx(() => [
                                _hoisted_15$1,
                                _hoisted_16$2
                            ]),
                            _: 1
                        })
                    ], 512), [
                        [vShow, !collapsed.value]
                    ])
                ]),
                _: 1
            }));
        };
    }
});var css_248z$5 = "\nnav[data-v-29eff494] {\n    position: fixed;\n    height: 100vh;\n    width: 60vw;\n    background-color: var(--color-background-mute);\n    right: 0px;\n    top: 0px;\n    z-index: 100;\n}\n.close-btn[data-v-29eff494]:hover {\n    background: var(--color-background);\n}\n.slide-enter-active[data-v-29eff494] {\n  transition: all 0.3s ease-out;\n  -webkit-transform: translateX(90%);\n          transform: translateX(90%);\n}\n.slide-enter-to[data-v-29eff494] {\n  transition: all 0.3s ease-out;\n  -webkit-transform: translateX(0%);\n          transform: translateX(0%);\n}\n.slide-leave-active[data-v-29eff494] {\n  transition: all 0.3s ease-out;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.nav-item[data-v-29eff494] {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 10px;\n    font-size: 16px;\n    padding: 5px;\n    padding-left: 10%;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-radius: 10px;\n    color: white;\n}\n.nav-item[data-v-29eff494]:hover {\n    background-color: var(--vt-c-black)\n}\n";
styleInject(css_248z$5);script$4.__scopeId = "data-v-29eff494";
script$4.__file = "src/components/template/SidebarMenu.vue";const _withScopeId = n => (pushScopeId("data-v-00be3d38"), n = n(), popScopeId(), n);
const _hoisted_1$3 = _withScopeId(() => createElementVNode("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        d: "M21 11.75H5C4.31 11.75 4.25 12.3088 4.25 13C4.25 13.6912 4.31 14.25 5 14.25H21C21.69 14.25 21.75 13.6912 21.75 13C21.75 12.3088 21.69 11.75 21 11.75ZM21 16.75H5C4.31 16.75 4.25 17.3088 4.25 18C4.25 18.6912 4.31 19.25 5 19.25H21C21.69 19.25 21.75 18.6912 21.75 18C21.75 17.3088 21.69 16.75 21 16.75ZM5 9.25H21C21.69 9.25 21.75 8.69125 21.75 8C21.75 7.30875 21.69 6.75 21 6.75H5C4.31 6.75 4.25 7.30875 4.25 8C4.25 8.69125 4.31 9.25 5 9.25Z",
        fill: "white"
    })
], -1));
const _hoisted_2$2 = [
    _hoisted_1$3
];
var script$3 = defineComponent({
    __name: 'MoreOptions',
    props: {
        toggleSidebar: {
            type: Function,
            required: true
        }
    },
    setup(__props) {
        const props = __props;
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("button", {
                onClick: _cache[0] || (_cache[0] = ($event) => (props?.toggleSidebar())),
                class: "more-options"
            }, [..._hoisted_2$2]));
        };
    }
});var css_248z$4 = "\n.more-options[data-v-00be3d38] {\n    position: fixed;\n    top: 2%;\n    right: 3%;\n    height: 60px;\n    width: 60px;\n    background-color: var(--c-secondary);\n    border: none;\n    border-radius: 30px;\n    z-index: 99;\n}\n@media (max-width: 480px) {\n.more-options[data-v-00be3d38] {\n        height: 50px;\n        width: 50px;\n}\n}\n";
styleInject(css_248z$4);script$3.__scopeId = "data-v-00be3d38";
script$3.__file = "src/components/template/MoreOptions.vue";var css_248z$3 = ".avatar {\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border: 2px solid var(--color-primary);\n}\n.avatar-small {\n    width: 35px;\n    height: 35px;\n    border-radius: 25px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border: 2px solid var(--color-primary);\n}\n.userinfo {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.username {\n    font-size: 18px;\n    color: white;\n    font-weight: bold;\n    margin-left: 15px;\n    margin-right: 10px;\n}\n.username-small {\n    font-size: 16px;\n    color: white;\n    font-weight: bold;\n    margin-left: 15px;\n    margin-right: 10px;\n}\n@media (max-width: 480px) {\n    .username {\n        font-size: 16px;\n    }\n    .avatar {\n        width: 35px;\n        height: 35px;\n    }\n    .post-buttons > button > svg {\n        height: 25px !important;\n        width: 25px !important;\n    }\n    .post-more-options > svg {\n        height: 18px !important;\n    }\n}\n.btn-primary {\n    border: 0px;\n    background-color: var(--c-secondary);\n    padding: 10px;\n    padding-left: 25px;\n    padding-right: 25px;\n    border-radius: 10px;\n    font-size: 16px;\n    cursor: pointer;\n}\n.btn-secondary {\n    border: 1px solid var(--c-secondary);\n    background: transparent;\n    color: white;\n    padding: 10px;\n    padding-left: 25px;\n    padding-right: 25px;\n    border-radius: 10px;\n    font-size: 16px;\n    cursor: pointer;\n}\n.btn-primary:active, .btn-secondary:active {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    transition: all 0.1s cubic-bezier(0.17, 0.89, 0.24, 1.11);\n}\n.rounded {\n    border-radius: 20px;\n}\n.btn-small {\n    padding: 6px;\n    padding-left: 18px;\n    padding-right: 18px;\n}\n.close-btn {\n    background: var(--color-background-soft);\n    border: 0px;\n    margin-left: 5%;\n    margin-top: 20px;\n    padding: 5px;\n    padding-bottom: 4px;\n    border-radius: 10px;\n}\n.loader {\n    width: 48px;\n    height: 48px;\n    border: 5px solid var(--c-divider-dark-1);\n    border-top-color: var(--c-secondary);\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    -webkit-animation: rotation 1s cubic-bezier(0.525, 0.005, 0.500, 0.890) infinite;\n            animation: rotation 1s cubic-bezier(0.525, 0.005, 0.500, 0.890) infinite;\n}\n@-webkit-keyframes rotation {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n@keyframes rotation {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n.container {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-top: 20px;\n    padding-bottom: var(--bottom-menu-height);\n}";
styleInject(css_248z$3);var css_248z$2 = "\n.post-body {\n    width: 100%;\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n            align-self: center;\n    max-width: 600px;\n    padding: 5%;\n    background-color: var(--color-background);\n    margin-bottom: 6px;\n    cursor: pointer;\n}\n@media (min-width: 1024px) {\n    .post-body {\n        padding: 0%;\n        padding-top: 3%;\n        padding-bottom: 3%;\n    }\n}\n.post-text {\n    font-size: 17px;\n    color: white;\n    margin-left: 60px;\n}\n@media (max-width: 480px) {\n    .post-text {\n        font-size: 15px;\n        margin-left: 50px;\n    }\n}\n.post-text-small {\n    font-size: 15px;\n    color: white;\n}\n.post-text-detail {\n    font-size: 17px;\n    color: white;\n    margin-left: 10px;\n    margin-top: 20px;\n    margin-bottom: 50px;\n}\n.post-buttons {\n    min-width: 200px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    margin-top: 5px;\n}\n.post-buttons > button {\n    width: 100%;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: transparent;\n    border: 0px;\n    padding: 10px;\n    border-radius: 10px;\n    color: white;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    transition: 0.5s ease;\n}\n.post-buttons > button[disabled=false]:hover {\n    background-color: #111111;\n    transition: 0.5s;\n}\n.post-buttons button span {\n    margin-left: 5px;\n}\n.post-more-options {\n    float: right;\n    margin-top: -35px;\n    background-color: transparent;\n    border: 0px;\n    padding-left: 5px;\n    padding-right: 5px;\n    border-radius: 5px;\n}\n.post-more-options:hover {\n    background-color: #111111;\n    transition: 0.5s;\n}\n.btn-gift {\n    background-color: transparent;\n    border: 0px;\n    position: absolute;\n    right: 20px;\n}\n.comment-input {\n    position: fixed;\n    bottom: var(--bottom-menu-height);\n    margin-bottom: -3px;\n    left: 0px;\n    width: 100%;\n}\n.comment-input textarea {\n    width: 100%;\n    resize: none;\n    background-color: var(--c-black-mute);\n    border: 0px;\n    color: white;\n    padding-left: 15px;\n    padding-top: 15px;\n}\n.comment-input textarea:focus {\n    outline: none;\n}\n.comment-share-btn, .comment-share-btn-d {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    background: transparent;\n    border: 0px;\n    fill-opacity: 0.8;\n    cursor: pointer;\n}\n.comment-share-btn:hover {\n    fill-opacity: 1;\n}\n.comment-sticker-btn, .comment-sticker-btn-d {\n    position: absolute;\n    top: 15px;\n    background: transparent;\n    border: 0px;\n    fill-opacity: 0.5;\n}\n.comment-sticker-btn {\n    right: 10px;\n    -webkit-animation: moveRight 0.1s ease-out both;\n            animation: moveRight 0.1s ease-out both;\n}\n.comment-sticker-btn-d {\n    right: 0px;\n    -webkit-animation: moveRightD 0.1s ease-out both;\n            animation: moveRightD 0.1s ease-out both;\n}\n@-webkit-keyframes moveRight {\n    0% {\n        right: 45px;\n    }        \n    100% {\n        right: 10px;\n    }\n}\n@keyframes moveRight {\n    0% {\n        right: 45px;\n    }        \n    100% {\n        right: 10px;\n    }\n}\n@-webkit-keyframes moveRightD {\n    0% {\n        right: 15px;\n    }        \n    100% {\n        right: 0px;\n    }\n}\n@keyframes moveRightD {\n    0% {\n        right: 15px;\n    }        \n    100% {\n        right: 0px;\n    }\n}\n.comment-sticker-btn:hover {\n    fill-opacity: 0.9;\n}\n.comment-sticker-btn-2, .comment-sticker-btn-2-d {\n    position: absolute;\n    top: 15px;\n    background: transparent;\n    border: 0px;\n    fill-opacity: 0.5;\n}\n.comment-sticker-btn-2 {\n    -webkit-animation: moveLeft 0.1s ease-out both;\n            animation: moveLeft 0.1s ease-out both;\n}\n.comment-sticker-btn-2-d {\n    -webkit-animation: moveLeftD 0.2s ease-out both;\n            animation: moveLeftD 0.2s ease-out both;\n}\n.comment-sticker-btn-2:hover {\n    fill-opacity: 0.9;\n}\n@-webkit-keyframes moveLeft {\n    0% {\n        right: 10px;\n    }        \n    100% {\n        right: 45px;\n    }\n}\n@keyframes moveLeft {\n    0% {\n        right: 10px;\n    }        \n    100% {\n        right: 45px;\n    }\n}\n@-webkit-keyframes moveLeftD {\n    0% {\n        right: 0px;\n    }        \n    100% {\n        right: 10px;\n    }\n}\n@keyframes moveLeftD {\n    0% {\n        right: 0px;\n    }        \n    100% {\n        right: 10px;\n    }\n}\n.translation-original {\n    margin-bottom: 20px;\n}\n.translation-source {\n    color: var(--c-primary); \n    opacity: 0.5; \n    margin-top: 5px\n}\n.donation-container {\n    display: block;\n    width: 80%;\n    margin: 15px;\n    margin-left: 10%;\n    border-radius: 20px;\n    color: white;\n    overflow: hidden;\n}\n.donation-container > div {\n    height: 100%;\n    width: 100%;\n    padding: 10px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: rgba(0,0,0,0.7);\n    -webkit-backdrop-filter: blur(1px);\n            backdrop-filter: blur(1px);\n}\n.donation-texts {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    width: 90%;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}";
styleInject(css_248z$2);var isVue2 = false;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */

/**
 * setActivePinia must be called to handle SSR at the top of functions like
 * `fetch`, `setup`, `serverPrefetch` and others
 */
let activePinia;
/**
 * Sets or unsets the active pinia. Used in SSR and internally when calling
 * actions and getters
 *
 * @param pinia - Pinia instance
 */
// @ts-expect-error: cannot constrain the type of the return
const setActivePinia = (pinia) => (activePinia = pinia);
const piniaSymbol = (/* istanbul ignore next */ Symbol());

function isPlainObject$1(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
o) {
    return (o &&
        typeof o === 'object' &&
        Object.prototype.toString.call(o) === '[object Object]' &&
        typeof o.toJSON !== 'function');
}
// type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
// TODO: can we change these to numbers?
/**
 * Possible types for SubscriptionCallback
 */
var MutationType;
(function (MutationType) {
    /**
     * Direct mutation of the state:
     *
     * - `store.name = 'new name'`
     * - `store.$state.name = 'new name'`
     * - `store.list.push('new item')`
     */
    MutationType["direct"] = "direct";
    /**
     * Mutated the state with `$patch` and an object
     *
     * - `store.$patch({ name: 'newName' })`
     */
    MutationType["patchObject"] = "patch object";
    /**
     * Mutated the state with `$patch` and a function
     *
     * - `store.$patch(state => state.name = 'newName')`
     */
    MutationType["patchFunction"] = "patch function";
    // maybe reset? for $state = {} and $reset
})(MutationType || (MutationType = {}));

/**
 * Creates a Pinia instance to be used by the application
 */
function createPinia() {
    const scope = effectScope(true);
    // NOTE: here we could check the window object for a state and directly set it
    // if there is anything like it with Vue 3 SSR
    const state = scope.run(() => ref({}));
    let _p = [];
    // plugins added before calling app.use(pinia)
    let toBeInstalled = [];
    const pinia = markRaw({
        install(app) {
            // this allows calling useStore() outside of a component setup after
            // installing pinia's plugin
            setActivePinia(pinia);
            {
                pinia._a = app;
                app.provide(piniaSymbol, pinia);
                app.config.globalProperties.$pinia = pinia;
                toBeInstalled.forEach((plugin) => _p.push(plugin));
                toBeInstalled = [];
            }
        },
        use(plugin) {
            if (!this._a && !isVue2) {
                toBeInstalled.push(plugin);
            }
            else {
                _p.push(plugin);
            }
            return this;
        },
        _p,
        // it's actually undefined here
        // @ts-expect-error
        _a: null,
        _e: scope,
        _s: new Map(),
        state,
    });
    return pinia;
}

const noop$2 = () => { };
function addSubscription(subscriptions, callback, detached, onCleanup = noop$2) {
    subscriptions.push(callback);
    const removeSubscription = () => {
        const idx = subscriptions.indexOf(callback);
        if (idx > -1) {
            subscriptions.splice(idx, 1);
            onCleanup();
        }
    };
    if (!detached && getCurrentScope()) {
        onScopeDispose(removeSubscription);
    }
    return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
        callback(...args);
    });
}

const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
    // Handle Map instances
    if (target instanceof Map && patchToApply instanceof Map) {
        patchToApply.forEach((value, key) => target.set(key, value));
    }
    // Handle Set instances
    if (target instanceof Set && patchToApply instanceof Set) {
        patchToApply.forEach(target.add, target);
    }
    // no need to go through symbols because they cannot be serialized anyway
    for (const key in patchToApply) {
        if (!patchToApply.hasOwnProperty(key))
            continue;
        const subPatch = patchToApply[key];
        const targetValue = target[key];
        if (isPlainObject$1(targetValue) &&
            isPlainObject$1(subPatch) &&
            target.hasOwnProperty(key) &&
            !isRef(subPatch) &&
            !isReactive(subPatch)) {
            // NOTE: here I wanted to warn about inconsistent types but it's not possible because in setup stores one might
            // start the value of a property as a certain type e.g. a Map, and then for some reason, during SSR, change that
            // to `undefined`. When trying to hydrate, we want to override the Map with `undefined`.
            target[key] = mergeReactiveObjects(targetValue, subPatch);
        }
        else {
            // @ts-expect-error: subPatch is a valid value
            target[key] = subPatch;
        }
    }
    return target;
}
const skipHydrateSymbol = /* istanbul ignore next */ Symbol();
/**
 * Returns whether a value should be hydrated
 *
 * @param obj - target variable
 * @returns true if `obj` should be hydrated
 */
function shouldHydrate(obj) {
    return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
    return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
        if (!initialState && (!("production" !== 'production') )) {
            /* istanbul ignore if */
            {
                pinia.state.value[id] = state ? state() : {};
            }
        }
        // avoid creating a state in pinia.state.value
        const localState = toRefs(pinia.state.value[id]);
        return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
            computedGetters[name] = markRaw(computed(() => {
                setActivePinia(pinia);
                // it was created just before
                const store = pinia._s.get(id);
                // @ts-expect-error
                // return getters![name].call(context, context)
                // TODO: avoid reading the getter while assigning with a global variable
                return getters[name].call(store, store);
            }));
            return computedGetters;
        }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    // watcher options for $subscribe
    const $subscribeOptions = {
        deep: true,
        // flush: 'post',
    };
    // internal state
    let isListening; // set to true at the end
    let isSyncListening; // set to true at the end
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    // avoid setting the state for option stores if it is set
    // by the setup
    if (!isOptionsStore && !initialState && (!("production" !== 'production') )) {
        /* istanbul ignore if */
        {
            pinia.state.value[$id] = {};
        }
    }
    ref({});
    // avoid triggering too many listeners
    // https://github.com/vuejs/pinia/issues/1129
    let activeListener;
    function $patch(partialStateOrMutator) {
        let subscriptionMutation;
        isListening = isSyncListening = false;
        if (typeof partialStateOrMutator === 'function') {
            partialStateOrMutator(pinia.state.value[$id]);
            subscriptionMutation = {
                type: MutationType.patchFunction,
                storeId: $id,
                events: debuggerEvents,
            };
        }
        else {
            mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
            subscriptionMutation = {
                type: MutationType.patchObject,
                payload: partialStateOrMutator,
                storeId: $id,
                events: debuggerEvents,
            };
        }
        const myListenerId = (activeListener = Symbol());
        nextTick().then(() => {
            if (activeListener === myListenerId) {
                isListening = true;
            }
        });
        isSyncListening = true;
        // because we paused the watcher, we need to manually call the subscriptions
        triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore
        ? function $reset() {
            const { state } = options;
            const newState = state ? state() : {};
            // we use a patch to group all changes into one single subscription
            this.$patch(($state) => {
                assign($state, newState);
            });
        }
        : /* istanbul ignore next */
            noop$2;
    function $dispose() {
        scope.stop();
        subscriptions = [];
        actionSubscriptions = [];
        pinia._s.delete($id);
    }
    /**
     * Wraps an action to handle subscriptions.
     *
     * @param name - name of the action
     * @param action - action to wrap
     * @returns a wrapped action to handle subscriptions
     */
    function wrapAction(name, action) {
        return function () {
            setActivePinia(pinia);
            const args = Array.from(arguments);
            const afterCallbackList = [];
            const onErrorCallbackList = [];
            function after(callback) {
                afterCallbackList.push(callback);
            }
            function onError(callback) {
                onErrorCallbackList.push(callback);
            }
            // @ts-expect-error
            triggerSubscriptions(actionSubscriptions, {
                args,
                name,
                store,
                after,
                onError,
            });
            let ret;
            try {
                ret = action.apply(this && this.$id === $id ? this : store, args);
                // handle sync errors
            }
            catch (error) {
                triggerSubscriptions(onErrorCallbackList, error);
                throw error;
            }
            if (ret instanceof Promise) {
                return ret
                    .then((value) => {
                    triggerSubscriptions(afterCallbackList, value);
                    return value;
                })
                    .catch((error) => {
                    triggerSubscriptions(onErrorCallbackList, error);
                    return Promise.reject(error);
                });
            }
            // trigger after callbacks
            triggerSubscriptions(afterCallbackList, ret);
            return ret;
        };
    }
    const partialStore = {
        _p: pinia,
        // _s: scope,
        $id,
        $onAction: addSubscription.bind(null, actionSubscriptions),
        $patch,
        $reset,
        $subscribe(callback, options = {}) {
            const removeSubscription = addSubscription(subscriptions, callback, options.detached, () => stopWatcher());
            const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
                if (options.flush === 'sync' ? isSyncListening : isListening) {
                    callback({
                        storeId: $id,
                        type: MutationType.direct,
                        events: debuggerEvents,
                    }, state);
                }
            }, assign({}, $subscribeOptions, options)));
            return removeSubscription;
        },
        $dispose,
    };
    const store = reactive(partialStore);
    // store the partial store now so the setup of stores can instantiate each other before they are finished without
    // creating infinite loops.
    pinia._s.set($id, store);
    const runWithContext = (pinia._a && pinia._a.runWithContext) || fallbackRunWithContext;
    // TODO: idea create skipSerialize that marks properties as non serializable and they are skipped
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(setup)));
    // overwrite existing actions to support $onAction
    for (const key in setupStore) {
        const prop = setupStore[key];
        if ((isRef(prop) && !isComputed(prop)) || isReactive(prop)) {
            // mark it as a piece of state to be serialized
            if (!isOptionsStore) {
                // in setup stores we must hydrate the state and sync pinia state tree with the refs the user just created
                if (initialState && shouldHydrate(prop)) {
                    if (isRef(prop)) {
                        prop.value = initialState[key];
                    }
                    else {
                        // probably a reactive object, lets recursively assign
                        // @ts-expect-error: prop is unknown
                        mergeReactiveObjects(prop, initialState[key]);
                    }
                }
                // transfer the ref to the pinia state to keep everything in sync
                /* istanbul ignore if */
                {
                    pinia.state.value[$id][key] = prop;
                }
            }
            // action
        }
        else if (typeof prop === 'function') {
            // @ts-expect-error: we are overriding the function we avoid wrapping if
            const actionValue = wrapAction(key, prop);
            // this a hot module replacement store because the hotUpdate method needs
            // to do it with the right context
            /* istanbul ignore if */
            {
                // @ts-expect-error
                setupStore[key] = actionValue;
            }
            // list actions so they can be used in plugins
            // @ts-expect-error
            optionsForPlugin.actions[key] = prop;
        }
        else ;
    }
    // add the state, getters, and action properties
    /* istanbul ignore if */
    {
        assign(store, setupStore);
        // allows retrieving reactive objects with `storeToRefs()`. Must be called after assigning to the reactive object.
        // Make `storeToRefs()` work with `reactive()` #799
        assign(toRaw(store), setupStore);
    }
    // use this instead of a computed with setter to be able to create it anywhere
    // without linking the computed lifespan to wherever the store is first
    // created.
    Object.defineProperty(store, '$state', {
        get: () => (pinia.state.value[$id]),
        set: (state) => {
            $patch(($state) => {
                assign($state, state);
            });
        },
    });
    // apply all plugins
    pinia._p.forEach((extender) => {
        /* istanbul ignore else */
        {
            assign(store, scope.run(() => extender({
                store,
                app: pinia._a,
                pinia,
                options: optionsForPlugin,
            })));
        }
    });
    // only apply hydrate to option stores with an initial state in pinia
    if (initialState &&
        isOptionsStore &&
        options.hydrate) {
        options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
}
function defineStore(
// TODO: add proper types from above
idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === 'function';
    if (typeof idOrOptions === 'string') {
        id = idOrOptions;
        // the option store setup will contain the actual options in this case
        options = isSetupStore ? setupOptions : setup;
    }
    else {
        options = idOrOptions;
        id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
        const hasContext = hasInjectionContext();
        pinia =
            // in test mode, ignore the argument provided as we can always retrieve a
            // pinia instance with getActivePinia()
            (pinia) ||
                (hasContext ? inject(piniaSymbol, null) : null);
        if (pinia)
            setActivePinia(pinia);
        pinia = activePinia;
        if (!pinia._s.has(id)) {
            // creating the store registers it in `pinia._s`
            if (isSetupStore) {
                createSetupStore(id, setup, options, pinia);
            }
            else {
                createOptionsStore(id, options, pinia);
            }
        }
        const store = pinia._s.get(id);
        // StoreGeneric cannot be casted towards Store
        return store;
    }
    useStore.$id = id;
    return useStore;
}const useMoreOptionsSheet = defineStore('more-options', () => {
    const sheetRef = ref(false);
    function toggle() {
        sheetRef.value = !sheetRef.value;
    }
    return { sheetRef, toggle };
});const resolveFetch$3 = (customFetch) => {
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    }
    else if (typeof fetch === 'undefined') {
        _fetch = (...args) => Promise.resolve().then(function(){return browser$2}).then(({ default: fetch }) => fetch(...args));
    }
    else {
        _fetch = fetch;
    }
    return (...args) => _fetch(...args);
};class FunctionsError extends Error {
    constructor(message, name = 'FunctionsError', context) {
        super(message);
        this.name = name;
        this.context = context;
    }
}
class FunctionsFetchError extends FunctionsError {
    constructor(context) {
        super('Failed to send a request to the Edge Function', 'FunctionsFetchError', context);
    }
}
class FunctionsRelayError extends FunctionsError {
    constructor(context) {
        super('Relay Error invoking the Edge Function', 'FunctionsRelayError', context);
    }
}
class FunctionsHttpError extends FunctionsError {
    constructor(context) {
        super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', context);
    }
}var __awaiter$a = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FunctionsClient {
    constructor(url, { headers = {}, customFetch, } = {}) {
        this.url = url;
        this.headers = headers;
        this.fetch = resolveFetch$3(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     */
    setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     */
    invoke(functionName, options = {}) {
        var _a;
        return __awaiter$a(this, void 0, void 0, function* () {
            try {
                const { headers, method, body: functionArgs } = options;
                let _headers = {};
                let body;
                if (functionArgs &&
                    ((headers && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type')) || !headers)) {
                    if ((typeof Blob !== 'undefined' && functionArgs instanceof Blob) ||
                        functionArgs instanceof ArrayBuffer) {
                        // will work for File as File inherits Blob
                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                        _headers['Content-Type'] = 'application/octet-stream';
                        body = functionArgs;
                    }
                    else if (typeof functionArgs === 'string') {
                        // plain string
                        _headers['Content-Type'] = 'text/plain';
                        body = functionArgs;
                    }
                    else if (typeof FormData !== 'undefined' && functionArgs instanceof FormData) {
                        // don't set content-type headers
                        // Request will automatically add the right boundary value
                        body = functionArgs;
                    }
                    else {
                        // default, assume this is JSON
                        _headers['Content-Type'] = 'application/json';
                        body = JSON.stringify(functionArgs);
                    }
                }
                const response = yield this.fetch(`${this.url}/${functionName}`, {
                    method: method || 'POST',
                    // headers priority is (high to low):
                    // 1. invoke-level headers
                    // 2. client-level headers
                    // 3. default Content-Type header
                    headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                    body,
                }).catch((fetchError) => {
                    throw new FunctionsFetchError(fetchError);
                });
                const isRelayError = response.headers.get('x-relay-error');
                if (isRelayError && isRelayError === 'true') {
                    throw new FunctionsRelayError(response);
                }
                if (!response.ok) {
                    throw new FunctionsHttpError(response);
                }
                let responseType = ((_a = response.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : 'text/plain').split(';')[0].trim();
                let data;
                if (responseType === 'application/json') {
                    data = yield response.json();
                }
                else if (responseType === 'application/octet-stream') {
                    data = yield response.blob();
                }
                else if (responseType === 'multipart/form-data') {
                    data = yield response.formData();
                }
                else {
                    // default to text
                    data = yield response.text();
                }
                return { data, error: null };
            }
            catch (error) {
                return { data: null, error };
            }
        });
    }
}var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}var browser$3 = {exports: {}};(function (module, exports) {

	// ref: https://github.com/tc39/proposal-global
	var getGlobal = function () {
		// the only reliable means to get the global object is
		// `Function('return this')()`
		// However, this causes CSP violations in Chrome apps.
		if (typeof self !== 'undefined') { return self; }
		if (typeof window !== 'undefined') { return window; }
		if (typeof commonjsGlobal !== 'undefined') { return commonjsGlobal; }
		throw new Error('unable to locate global object');
	};

	var globalObject = getGlobal();

	module.exports = exports = globalObject.fetch;

	// Needed for TypeScript and Webpack.
	if (globalObject.fetch) {
		exports.default = globalObject.fetch.bind(globalObject);
	}

	exports.Headers = globalObject.Headers;
	exports.Request = globalObject.Request;
	exports.Response = globalObject.Response; 
} (browser$3, browser$3.exports));

var browserExports = browser$3.exports;
var nodeFetch = /*@__PURE__*/getDefaultExportFromCjs(browserExports);var browser$2=/*#__PURE__*/_mergeNamespaces({__proto__:null,default:nodeFetch},[browserExports]);// @ts-ignore
class PostgrestBuilder {
    constructor(builder) {
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = builder.headers;
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = builder.shouldThrowOnError;
        this.signal = builder.signal;
        this.isMaybeSingle = builder.isMaybeSingle;
        if (builder.fetch) {
            this.fetch = builder.fetch;
        }
        else if (typeof fetch === 'undefined') {
            this.fetch = nodeFetch;
        }
        else {
            this.fetch = fetch;
        }
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */
    throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (this.schema === undefined) ;
        else if (['GET', 'HEAD'].includes(this.method)) {
            this.headers['Accept-Profile'] = this.schema;
        }
        else {
            this.headers['Content-Profile'] = this.schema;
        }
        if (this.method !== 'GET' && this.method !== 'HEAD') {
            this.headers['Content-Type'] = 'application/json';
        }
        // NOTE: Invoke w/o `this` to avoid illegal invocation error.
        // https://github.com/supabase/postgrest-js/pull/247
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal,
        }).then(async (res) => {
            var _a, _b, _c;
            let error = null;
            let data = null;
            let count = null;
            let status = res.status;
            let statusText = res.statusText;
            if (res.ok) {
                if (this.method !== 'HEAD') {
                    const body = await res.text();
                    if (body === '') ;
                    else if (this.headers['Accept'] === 'text/csv') {
                        data = body;
                    }
                    else if (this.headers['Accept'] &&
                        this.headers['Accept'].includes('application/vnd.pgrst.plan+text')) {
                        data = body;
                    }
                    else {
                        data = JSON.parse(body);
                    }
                }
                const countHeader = (_a = this.headers['Prefer']) === null || _a === void 0 ? void 0 : _a.match(/count=(exact|planned|estimated)/);
                const contentRange = (_b = res.headers.get('content-range')) === null || _b === void 0 ? void 0 : _b.split('/');
                if (countHeader && contentRange && contentRange.length > 1) {
                    count = parseInt(contentRange[1]);
                }
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === 'GET' && Array.isArray(data)) {
                    if (data.length > 1) {
                        error = {
                            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                            code: 'PGRST116',
                            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: 'JSON object requested, multiple (or no) rows returned',
                        };
                        data = null;
                        count = null;
                        status = 406;
                        statusText = 'Not Acceptable';
                    }
                    else if (data.length === 1) {
                        data = data[0];
                    }
                    else {
                        data = null;
                    }
                }
            }
            else {
                const body = await res.text();
                try {
                    error = JSON.parse(body);
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (Array.isArray(error) && res.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = 'OK';
                    }
                }
                catch (_d) {
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (res.status === 404 && body === '') {
                        status = 204;
                        statusText = 'No Content';
                    }
                    else {
                        error = {
                            message: body,
                        };
                    }
                }
                if (error && this.isMaybeSingle && ((_c = error === null || error === void 0 ? void 0 : error.details) === null || _c === void 0 ? void 0 : _c.includes('0 rows'))) {
                    error = null;
                    status = 200;
                    statusText = 'OK';
                }
                if (error && this.shouldThrowOnError) {
                    throw error;
                }
            }
            const postgrestResponse = {
                error,
                data,
                count,
                status,
                statusText,
            };
            return postgrestResponse;
        });
        if (!this.shouldThrowOnError) {
            res = res.catch((fetchError) => {
                var _a, _b, _c;
                return ({
                    error: {
                        message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : 'FetchError'}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                        details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ''}`,
                        hint: '',
                        code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ''}`,
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: '',
                });
            });
        }
        return res.then(onfulfilled, onrejected);
    }
}class PostgrestTransformBuilder extends PostgrestBuilder {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */
    select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*')
            .split('')
            .map((c) => {
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        })
            .join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (this.headers['Prefer']) {
            this.headers['Prefer'] += ',';
        }
        this.headers['Prefer'] += 'return=representation';
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order foreign tables, but it doesn't affect the ordering of the
     * current table.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.foreignTable - Set this to order a foreign table by foreign
     * columns
     */
    order(column, { ascending = true, nullsFirst, foreignTable, } = {}) {
        const key = foreignTable ? `${foreignTable}.order` : 'order';
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ''}${column}.${ascending ? 'asc' : 'desc'}${nullsFirst === undefined ? '' : nullsFirst ? '.nullsfirst' : '.nullslast'}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.foreignTable - Set this to limit rows of foreign tables
     * instead of the current table
     */
    limit(count, { foreignTable } = {}) {
        const key = typeof foreignTable === 'undefined' ? 'limit' : `${foreignTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by starting at an offset (`from`) and ending at the offset (`from + to`).
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.foreignTable - Set this to limit rows of foreign tables
     * instead of the current table
     */
    range(from, to, { foreignTable } = {}) {
        const keyOffset = typeof foreignTable === 'undefined' ? 'offset' : `${foreignTable}.offset`;
        const keyLimit = typeof foreignTable === 'undefined' ? 'limit' : `${foreignTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */
    abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */
    single() {
        this.headers['Accept'] = 'application/vnd.pgrst.object+json';
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */
    maybeSingle() {
        // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
        // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
        if (this.method === 'GET') {
            this.headers['Accept'] = 'application/json';
        }
        else {
            this.headers['Accept'] = 'application/vnd.pgrst.object+json';
        }
        this.isMaybeSingle = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */
    csv() {
        this.headers['Accept'] = 'text/csv';
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */
    geojson() {
        this.headers['Accept'] = 'application/geo+json';
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */
    explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = 'text', } = {}) {
        const options = [
            analyze ? 'analyze' : null,
            verbose ? 'verbose' : null,
            settings ? 'settings' : null,
            buffers ? 'buffers' : null,
            wal ? 'wal' : null,
        ]
            .filter(Boolean)
            .join('|');
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = this.headers['Accept'];
        this.headers['Accept'] = `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`;
        if (format === 'json')
            return this;
        else
            return this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */
    rollback() {
        var _a;
        if (((_a = this.headers['Prefer']) !== null && _a !== void 0 ? _a : '').trim().length > 0) {
            this.headers['Prefer'] += ',tx=rollback';
        }
        else {
            this.headers['Prefer'] = 'tx=rollback';
        }
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     */
    returns() {
        return this;
    }
}class PostgrestFilterBuilder extends PostgrestTransformBuilder {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */
    in(column, values) {
        const cleanedValues = values
            .map((s) => {
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === 'string' && new RegExp('[,()]').test(s))
                return `"${s}"`;
            else
                return `${s}`;
        })
            .join(',');
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    contains(column, value) {
        if (typeof value === 'string') {
            // range types can be inclusive '[', ']' or exclusive '(', ')' so just
            // keep it simple and accept a string
            this.url.searchParams.append(column, `cs.${value}`);
        }
        else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cs.{${value.join(',')}}`);
        }
        else {
            // json
            this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    containedBy(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `cd.${value}`);
        }
        else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cd.{${value.join(',')}}`);
        }
        else {
            // json
            this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */
    overlaps(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `ov.${value}`);
        }
        else {
            // array
            this.url.searchParams.append(column, `ov.{${value.join(',')}}`);
        }
        return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */
    textSearch(column, query, { config, type } = {}) {
        let typePart = '';
        if (type === 'plain') {
            typePart = 'pl';
        }
        else if (type === 'phrase') {
            typePart = 'ph';
        }
        else if (type === 'websearch') {
            typePart = 'w';
        }
        const configPart = config === undefined ? '' : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */
    match(query) {
        Object.entries(query).forEach(([column, value]) => {
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param foreignTable - Set this to filter on foreign tables instead of the
     * current table
     */
    or(filters, { foreignTable } = {}) {
        const key = foreignTable ? `${foreignTable}.or` : 'or';
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
}class PostgrestQueryBuilder {
    constructor(url, { headers = {}, schema, fetch, }) {
        this.url = url;
        this.headers = headers;
        this.schema = schema;
        this.fetch = fetch;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    select(columns, { head = false, count, } = {}) {
        const method = head ? 'HEAD' : 'GET';
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*')
            .split('')
            .map((c) => {
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        })
            .join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (count) {
            this.headers['Prefer'] = `count=${count}`;
        }
        return new PostgrestFilterBuilder({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: false,
        });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */
    insert(values, { count, defaultToNull = true, } = {}) {
        const method = 'POST';
        const prefersHeaders = [];
        if (this.headers['Prefer']) {
            prefersHeaders.push(this.headers['Prefer']);
        }
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        if (!defaultToNull) {
            prefersHeaders.push('missing=default');
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false,
        });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */
    upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true, } = {}) {
        const method = 'POST';
        const prefersHeaders = [`resolution=${ignoreDuplicates ? 'ignore' : 'merge'}-duplicates`];
        if (onConflict !== undefined)
            this.url.searchParams.set('on_conflict', onConflict);
        if (this.headers['Prefer']) {
            prefersHeaders.push(this.headers['Prefer']);
        }
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        if (!defaultToNull) {
            prefersHeaders.push('missing=default');
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [...new Set(columns)].map((column) => `"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false,
        });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    update(values, { count, } = {}) {
        const method = 'PATCH';
        const prefersHeaders = [];
        if (this.headers['Prefer']) {
            prefersHeaders.push(this.headers['Prefer']);
        }
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        return new PostgrestFilterBuilder({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: this.fetch,
            allowEmpty: false,
        });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    delete({ count, } = {}) {
        const method = 'DELETE';
        const prefersHeaders = [];
        if (count) {
            prefersHeaders.push(`count=${count}`);
        }
        if (this.headers['Prefer']) {
            prefersHeaders.unshift(this.headers['Prefer']);
        }
        this.headers['Prefer'] = prefersHeaders.join(',');
        return new PostgrestFilterBuilder({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: false,
        });
    }
}const version$6 = '1.8.5';const DEFAULT_HEADERS$4 = { 'X-Client-Info': `postgrest-js/${version$6}` };/**
 * PostgREST client.
 *
 * @typeParam Database - Types for the schema from the [type
 * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
 *
 * @typeParam SchemaName - Postgres schema to switch to. Must be a string
 * literal, the same one passed to the constructor. If the schema is not
 * `"public"`, this must be supplied manually.
 */
class PostgrestClient {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */
    constructor(url, { headers = {}, schema, fetch, } = {}) {
        this.url = url;
        this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS$4), headers);
        this.schemaName = schema;
        this.fetch = fetch;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
    from(relation) {
        const url = new URL(`${this.url}/${relation}`);
        return new PostgrestQueryBuilder(url, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
        });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */
    schema(schema) {
        return new PostgrestClient(this.url, {
            headers: this.headers,
            schema,
            fetch: this.fetch,
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    rpc(fn, args = {}, { head = false, count, } = {}) {
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        if (head) {
            method = 'HEAD';
            Object.entries(args).forEach(([name, value]) => {
                url.searchParams.append(name, `${value}`);
            });
        }
        else {
            method = 'POST';
            body = args;
        }
        const headers = Object.assign({}, this.headers);
        if (count) {
            headers['Prefer'] = `count=${count}`;
        }
        return new PostgrestFilterBuilder({
            method,
            url,
            headers,
            schema: this.schemaName,
            body,
            fetch: this.fetch,
            allowEmpty: false,
        });
    }
}var global$1;
var hasRequiredGlobal;

function requireGlobal () {
	if (hasRequiredGlobal) return global$1;
	hasRequiredGlobal = 1;
	var naiveFallback = function () {
		if (typeof self === "object" && self) return self;
		if (typeof window === "object" && window) return window;
		throw new Error("Unable to resolve global `this`");
	};

	global$1 = (function () {
		if (this) return this;

		// Unexpected strict mode (may happen if e.g. bundled into ESM module)

		// Fallback to standard globalThis if available
		if (typeof globalThis === "object" && globalThis) return globalThis;

		// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
		// In all ES5+ engines global object inherits from Object.prototype
		// (if you approached one that doesn't please report)
		try {
			Object.defineProperty(Object.prototype, "__global__", {
				get: function () { return this; },
				configurable: true
			});
		} catch (error) {
			// Unfortunate case of updates to Object.prototype being restricted
			// via preventExtensions, seal or freeze
			return naiveFallback();
		}
		try {
			// Safari case (window.__global__ works, but __global__ does not)
			if (!__global__) return naiveFallback();
			return __global__;
		} finally {
			delete Object.prototype.__global__;
		}
	})();
	return global$1;
}var name = "websocket";
var description = "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.";
var keywords = [
	"websocket",
	"websockets",
	"socket",
	"networking",
	"comet",
	"push",
	"RFC-6455",
	"realtime",
	"server",
	"client"
];
var author = "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)";
var contributors = [
	"Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"
];
var version$5 = "1.0.34";
var repository = {
	type: "git",
	url: "https://github.com/theturtle32/WebSocket-Node.git"
};
var homepage = "https://github.com/theturtle32/WebSocket-Node";
var engines = {
	node: ">=4.0.0"
};
var dependencies = {
	bufferutil: "^4.0.1",
	debug: "^2.2.0",
	"es5-ext": "^0.10.50",
	"typedarray-to-buffer": "^3.1.5",
	"utf-8-validate": "^5.0.2",
	yaeti: "^0.0.6"
};
var devDependencies = {
	"buffer-equal": "^1.0.0",
	gulp: "^4.0.2",
	"gulp-jshint": "^2.0.4",
	"jshint-stylish": "^2.2.1",
	jshint: "^2.0.0",
	tape: "^4.9.1"
};
var config = {
	verbose: false
};
var scripts = {
	test: "tape test/unit/*.js",
	gulp: "gulp"
};
var main = "index";
var directories = {
	lib: "./lib"
};
var browser$1 = "lib/browser.js";
var license = "Apache-2.0";
var require$$0 = {
	name: name,
	description: description,
	keywords: keywords,
	author: author,
	contributors: contributors,
	version: version$5,
	repository: repository,
	homepage: homepage,
	engines: engines,
	dependencies: dependencies,
	devDependencies: devDependencies,
	config: config,
	scripts: scripts,
	main: main,
	directories: directories,
	browser: browser$1,
	license: license
};var version$4 = require$$0.version;var _globalThis;
if (typeof globalThis === 'object') {
	_globalThis = globalThis;
} else {
	try {
		_globalThis = requireGlobal();
	} catch (error) {
	} finally {
		if (!_globalThis && typeof window !== 'undefined') { _globalThis = window; }
		if (!_globalThis) { throw new Error('Could not determine global this'); }
	}
}

var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
var websocket_version = version$4;


/**
 * Expose a W3C WebSocket class with just one or two arguments.
 */
function W3CWebSocket(uri, protocols) {
	var native_instance;

	if (protocols) {
		native_instance = new NativeWebSocket(uri, protocols);
	}
	else {
		native_instance = new NativeWebSocket(uri);
	}

	/**
	 * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
	 * class). Since it is an Object it will be returned as it is when creating an
	 * instance of W3CWebSocket via 'new W3CWebSocket()'.
	 *
	 * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
	 */
	return native_instance;
}
if (NativeWebSocket) {
	['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function(prop) {
		Object.defineProperty(W3CWebSocket, prop, {
			get: function() { return NativeWebSocket[prop]; }
		});
	});
}

/**
 * Module exports.
 */
var browser = {
    'w3cwebsocket' : NativeWebSocket ? W3CWebSocket : null,
    'version'      : websocket_version
};const version$3 = '2.8.4';const DEFAULT_HEADERS$3 = { 'X-Client-Info': `realtime-js/${version$3}` };
const VSN = '1.0.0';
const DEFAULT_TIMEOUT = 10000;
const WS_CLOSE_NORMAL = 1000;
var SOCKET_STATES;
(function (SOCKET_STATES) {
    SOCKET_STATES[SOCKET_STATES["connecting"] = 0] = "connecting";
    SOCKET_STATES[SOCKET_STATES["open"] = 1] = "open";
    SOCKET_STATES[SOCKET_STATES["closing"] = 2] = "closing";
    SOCKET_STATES[SOCKET_STATES["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function (CHANNEL_STATES) {
    CHANNEL_STATES["closed"] = "closed";
    CHANNEL_STATES["errored"] = "errored";
    CHANNEL_STATES["joined"] = "joined";
    CHANNEL_STATES["joining"] = "joining";
    CHANNEL_STATES["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function (CHANNEL_EVENTS) {
    CHANNEL_EVENTS["close"] = "phx_close";
    CHANNEL_EVENTS["error"] = "phx_error";
    CHANNEL_EVENTS["join"] = "phx_join";
    CHANNEL_EVENTS["reply"] = "phx_reply";
    CHANNEL_EVENTS["leave"] = "phx_leave";
    CHANNEL_EVENTS["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function (TRANSPORTS) {
    TRANSPORTS["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
var CONNECTION_STATE;
(function (CONNECTION_STATE) {
    CONNECTION_STATE["Connecting"] = "connecting";
    CONNECTION_STATE["Open"] = "open";
    CONNECTION_STATE["Closing"] = "closing";
    CONNECTION_STATE["Closed"] = "closed";
})(CONNECTION_STATE || (CONNECTION_STATE = {}));/**
 * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
 *
 * @example
 *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
 *      return [1000, 5000, 10000][tries - 1] || 10000
 *    })
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 *    reconnectTimer.scheduleTimeout() // fires after 5000
 *    reconnectTimer.reset()
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 */
class Timer {
    constructor(callback, timerCalc) {
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = undefined;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
    }
    reset() {
        this.tries = 0;
        clearTimeout(this.timer);
    }
    // Cancels any previous scheduleTimeout and schedules callback
    scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.tries = this.tries + 1;
            this.callback();
        }, this.timerCalc(this.tries + 1));
    }
}// This file draws heavily from https://github.com/phoenixframework/phoenix/commit/cf098e9cf7a44ee6479d31d911a97d3c7430c6fe
// License: https://github.com/phoenixframework/phoenix/blob/master/LICENSE.md
class Serializer {
    constructor() {
        this.HEADER_LENGTH = 1;
    }
    decode(rawPayload, callback) {
        if (rawPayload.constructor === ArrayBuffer) {
            return callback(this._binaryDecode(rawPayload));
        }
        if (typeof rawPayload === 'string') {
            return callback(JSON.parse(rawPayload));
        }
        return callback({});
    }
    _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const decoder = new TextDecoder();
        return this._decodeBroadcast(buffer, view, decoder);
    }
    _decodeBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const eventSize = view.getUint8(2);
        let offset = this.HEADER_LENGTH + 2;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const event = decoder.decode(buffer.slice(offset, offset + eventSize));
        offset = offset + eventSize;
        const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
        return { ref: null, topic: topic, event: event, payload: data };
    }
}class Push {
    /**
     * Initializes the Push
     *
     * @param channel The Channel
     * @param event The event, for example `"phx_join"`
     * @param payload The payload, for example `{user_id: 123}`
     * @param timeout The push timeout in milliseconds
     */
    constructor(channel, event, payload = {}, timeout = DEFAULT_TIMEOUT) {
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = undefined;
        this.ref = '';
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
    }
    resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = '';
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
    }
    send() {
        if (this._hasReceived('timeout')) {
            return;
        }
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef(),
        });
    }
    updatePayload(payload) {
        this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
    receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) {
            callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        }
        this.recHooks.push({ status, callback });
        return this;
    }
    startTimeout() {
        if (this.timeoutTimer) {
            return;
        }
        this.ref = this.channel.socket._makeRef();
        this.refEvent = this.channel._replyEventName(this.ref);
        const callback = (payload) => {
            this._cancelRefEvent();
            this._cancelTimeout();
            this.receivedResp = payload;
            this._matchReceive(payload);
        };
        this.channel._on(this.refEvent, {}, callback);
        this.timeoutTimer = setTimeout(() => {
            this.trigger('timeout', {});
        }, this.timeout);
    }
    trigger(status, response) {
        if (this.refEvent)
            this.channel._trigger(this.refEvent, { status, response });
    }
    destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
    }
    _cancelRefEvent() {
        if (!this.refEvent) {
            return;
        }
        this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = undefined;
    }
    _matchReceive({ status, response, }) {
        this.recHooks
            .filter((h) => h.status === status)
            .forEach((h) => h.callback(response));
    }
    _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
    }
}/*
  This file draws heavily from https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/assets/js/phoenix/presence.js
  License: https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/LICENSE.md
*/
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function (REALTIME_PRESENCE_LISTEN_EVENTS) {
    REALTIME_PRESENCE_LISTEN_EVENTS["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
class RealtimePresence {
    /**
     * Initializes the Presence.
     *
     * @param channel - The RealtimeChannel
     * @param opts - The options,
     *        for example `{events: {state: 'state', diff: 'diff'}}`
     */
    constructor(channel, opts) {
        this.channel = channel;
        this.state = {};
        this.pendingDiffs = [];
        this.joinRef = null;
        this.caller = {
            onJoin: () => { },
            onLeave: () => { },
            onSync: () => { },
        };
        const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
            state: 'presence_state',
            diff: 'presence_diff',
        };
        this.channel._on(events.state, {}, (newState) => {
            const { onJoin, onLeave, onSync } = this.caller;
            this.joinRef = this.channel._joinRef();
            this.state = RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
            this.pendingDiffs.forEach((diff) => {
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
            });
            this.pendingDiffs = [];
            onSync();
        });
        this.channel._on(events.diff, {}, (diff) => {
            const { onJoin, onLeave, onSync } = this.caller;
            if (this.inPendingSyncState()) {
                this.pendingDiffs.push(diff);
            }
            else {
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
                onSync();
            }
        });
        this.onJoin((key, currentPresences, newPresences) => {
            this.channel._trigger('presence', {
                event: 'join',
                key,
                currentPresences,
                newPresences,
            });
        });
        this.onLeave((key, currentPresences, leftPresences) => {
            this.channel._trigger('presence', {
                event: 'leave',
                key,
                currentPresences,
                leftPresences,
            });
        });
        this.onSync(() => {
            this.channel._trigger('presence', { event: 'sync' });
        });
    }
    /**
     * Used to sync the list of presences on the server with the
     * client's state.
     *
     * An optional `onJoin` and `onLeave` callback can be provided to
     * react to changes in the client's local presences across
     * disconnects and reconnects with the server.
     *
     * @internal
     */
    static syncState(currentState, newState, onJoin, onLeave) {
        const state = this.cloneDeep(currentState);
        const transformedState = this.transformState(newState);
        const joins = {};
        const leaves = {};
        this.map(state, (key, presences) => {
            if (!transformedState[key]) {
                leaves[key] = presences;
            }
        });
        this.map(transformedState, (key, newPresences) => {
            const currentPresences = state[key];
            if (currentPresences) {
                const newPresenceRefs = newPresences.map((m) => m.presence_ref);
                const curPresenceRefs = currentPresences.map((m) => m.presence_ref);
                const joinedPresences = newPresences.filter((m) => curPresenceRefs.indexOf(m.presence_ref) < 0);
                const leftPresences = currentPresences.filter((m) => newPresenceRefs.indexOf(m.presence_ref) < 0);
                if (joinedPresences.length > 0) {
                    joins[key] = joinedPresences;
                }
                if (leftPresences.length > 0) {
                    leaves[key] = leftPresences;
                }
            }
            else {
                joins[key] = newPresences;
            }
        });
        return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
    }
    /**
     * Used to sync a diff of presence join and leave events from the
     * server, as they happen.
     *
     * Like `syncState`, `syncDiff` accepts optional `onJoin` and
     * `onLeave` callbacks to react to a user joining or leaving from a
     * device.
     *
     * @internal
     */
    static syncDiff(state, diff, onJoin, onLeave) {
        const { joins, leaves } = {
            joins: this.transformState(diff.joins),
            leaves: this.transformState(diff.leaves),
        };
        if (!onJoin) {
            onJoin = () => { };
        }
        if (!onLeave) {
            onLeave = () => { };
        }
        this.map(joins, (key, newPresences) => {
            var _a;
            const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
            state[key] = this.cloneDeep(newPresences);
            if (currentPresences.length > 0) {
                const joinedPresenceRefs = state[key].map((m) => m.presence_ref);
                const curPresences = currentPresences.filter((m) => joinedPresenceRefs.indexOf(m.presence_ref) < 0);
                state[key].unshift(...curPresences);
            }
            onJoin(key, currentPresences, newPresences);
        });
        this.map(leaves, (key, leftPresences) => {
            let currentPresences = state[key];
            if (!currentPresences)
                return;
            const presenceRefsToRemove = leftPresences.map((m) => m.presence_ref);
            currentPresences = currentPresences.filter((m) => presenceRefsToRemove.indexOf(m.presence_ref) < 0);
            state[key] = currentPresences;
            onLeave(key, currentPresences, leftPresences);
            if (currentPresences.length === 0)
                delete state[key];
        });
        return state;
    }
    /** @internal */
    static map(obj, func) {
        return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
    }
    /**
     * Remove 'metas' key
     * Change 'phx_ref' to 'presence_ref'
     * Remove 'phx_ref' and 'phx_ref_prev'
     *
     * @example
     * // returns {
     *  abc123: [
     *    { presence_ref: '2', user_id: 1 },
     *    { presence_ref: '3', user_id: 2 }
     *  ]
     * }
     * RealtimePresence.transformState({
     *  abc123: {
     *    metas: [
     *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
     *      { phx_ref: '3', user_id: 2 }
     *    ]
     *  }
     * })
     *
     * @internal
     */
    static transformState(state) {
        state = this.cloneDeep(state);
        return Object.getOwnPropertyNames(state).reduce((newState, key) => {
            const presences = state[key];
            if ('metas' in presences) {
                newState[key] = presences.metas.map((presence) => {
                    presence['presence_ref'] = presence['phx_ref'];
                    delete presence['phx_ref'];
                    delete presence['phx_ref_prev'];
                    return presence;
                });
            }
            else {
                newState[key] = presences;
            }
            return newState;
        }, {});
    }
    /** @internal */
    static cloneDeep(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    /** @internal */
    onJoin(callback) {
        this.caller.onJoin = callback;
    }
    /** @internal */
    onLeave(callback) {
        this.caller.onLeave = callback;
    }
    /** @internal */
    onSync(callback) {
        this.caller.onSync = callback;
    }
    /** @internal */
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
}/**
 * Helpers to convert the change Payload into native JS types.
 */
// Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
// 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
var PostgresTypes;
(function (PostgresTypes) {
    PostgresTypes["abstime"] = "abstime";
    PostgresTypes["bool"] = "bool";
    PostgresTypes["date"] = "date";
    PostgresTypes["daterange"] = "daterange";
    PostgresTypes["float4"] = "float4";
    PostgresTypes["float8"] = "float8";
    PostgresTypes["int2"] = "int2";
    PostgresTypes["int4"] = "int4";
    PostgresTypes["int4range"] = "int4range";
    PostgresTypes["int8"] = "int8";
    PostgresTypes["int8range"] = "int8range";
    PostgresTypes["json"] = "json";
    PostgresTypes["jsonb"] = "jsonb";
    PostgresTypes["money"] = "money";
    PostgresTypes["numeric"] = "numeric";
    PostgresTypes["oid"] = "oid";
    PostgresTypes["reltime"] = "reltime";
    PostgresTypes["text"] = "text";
    PostgresTypes["time"] = "time";
    PostgresTypes["timestamp"] = "timestamp";
    PostgresTypes["timestamptz"] = "timestamptz";
    PostgresTypes["timetz"] = "timetz";
    PostgresTypes["tsrange"] = "tsrange";
    PostgresTypes["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
/**
 * Takes an array of columns and an object of string values then converts each string value
 * to its mapped type.
 *
 * @param {{name: String, type: String}[]} columns
 * @param {Object} record
 * @param {Object} options The map of various options that can be applied to the mapper
 * @param {Array} options.skipTypes The array of types that should not be converted
 *
 * @example convertChangeData([{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], {first_name: 'Paul', age:'33'}, {})
 * //=>{ first_name: 'Paul', age: 33 }
 */
const convertChangeData = (columns, record, options = {}) => {
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    return Object.keys(record).reduce((acc, rec_key) => {
        acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
        return acc;
    }, {});
};
/**
 * Converts the value of an individual column.
 *
 * @param {String} columnName The column that you want to convert
 * @param {{name: String, type: String}[]} columns All of the columns
 * @param {Object} record The map of string values
 * @param {Array} skipTypes An array of types that should not be converted
 * @return {object} Useless information
 *
 * @example convertColumn('age', [{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], {first_name: 'Paul', age: '33'}, [])
 * //=> 33
 * @example convertColumn('age', [{name: 'first_name', type: 'text'}, {name: 'age', type: 'int4'}], {first_name: 'Paul', age: '33'}, ['int4'])
 * //=> "33"
 */
const convertColumn = (columnName, columns, record, skipTypes) => {
    const column = columns.find((x) => x.name === columnName);
    const colType = column === null || column === void 0 ? void 0 : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) {
        return convertCell(colType, value);
    }
    return noop$1(value);
};
/**
 * If the value of the cell is `null`, returns null.
 * Otherwise converts the string value to the correct type.
 * @param {String} type A postgres column type
 * @param {String} value The cell value
 *
 * @example convertCell('bool', 't')
 * //=> true
 * @example convertCell('int8', '10')
 * //=> 10
 * @example convertCell('_int4', '{1,2,3,4}')
 * //=> [1,2,3,4]
 */
const convertCell = (type, value) => {
    // if data type is an array
    if (type.charAt(0) === '_') {
        const dataType = type.slice(1, type.length);
        return toArray(value, dataType);
    }
    // If not null, convert to correct type.
    switch (type) {
        case PostgresTypes.bool:
            return toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
            return toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
            return toJson(value);
        case PostgresTypes.timestamp:
            return toTimestampString(value); // Format to be consistent with PostgREST
        case PostgresTypes.abstime: // To allow users to cast it based on Timezone
        case PostgresTypes.date: // To allow users to cast it based on Timezone
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime: // To allow users to cast it based on Timezone
        case PostgresTypes.text:
        case PostgresTypes.time: // To allow users to cast it based on Timezone
        case PostgresTypes.timestamptz: // To allow users to cast it based on Timezone
        case PostgresTypes.timetz: // To allow users to cast it based on Timezone
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
            return noop$1(value);
        default:
            // Return the value for remaining types
            return noop$1(value);
    }
};
const noop$1 = (value) => {
    return value;
};
const toBoolean = (value) => {
    switch (value) {
        case 't':
            return true;
        case 'f':
            return false;
        default:
            return value;
    }
};
const toNumber = (value) => {
    if (typeof value === 'string') {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) {
            return parsedValue;
        }
    }
    return value;
};
const toJson = (value) => {
    if (typeof value === 'string') {
        try {
            return JSON.parse(value);
        }
        catch (error) {
            console.log(`JSON parse error: ${error}`);
            return value;
        }
    }
    return value;
};
/**
 * Converts a Postgres Array into a native JS array
 *
 * @example toArray('{}', 'int4')
 * //=> []
 * @example toArray('{"[2021-01-01,2021-12-31)","(2021-01-01,2021-12-32]"}', 'daterange')
 * //=> ['[2021-01-01,2021-12-31)', '(2021-01-01,2021-12-32]']
 * @example toArray([1,2,3,4], 'int4')
 * //=> [1,2,3,4]
 */
const toArray = (value, type) => {
    if (typeof value !== 'string') {
        return value;
    }
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    // Confirm value is a Postgres array by checking curly brackets
    if (openBrace === '{' && closeBrace === '}') {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        // TODO: find a better solution to separate Postgres array data
        try {
            arr = JSON.parse('[' + valTrim + ']');
        }
        catch (_) {
            // WARNING: splitting on comma does not cover all edge cases
            arr = valTrim ? valTrim.split(',') : [];
        }
        return arr.map((val) => convertCell(type, val));
    }
    return value;
};
/**
 * Fixes timestamp to be ISO-8601. Swaps the space between the date and time for a 'T'
 * See https://github.com/supabase/supabase/issues/18
 *
 * @example toTimestampString('2019-09-10 00:00:00')
 * //=> '2019-09-10T00:00:00'
 */
const toTimestampString = (value) => {
    if (typeof value === 'string') {
        return value.replace(' ', 'T');
    }
    return value;
};var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function (REALTIME_LISTEN_TYPES) {
    REALTIME_LISTEN_TYPES["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES["PRESENCE"] = "presence";
    /**
     * listen to Postgres changes.
     */
    REALTIME_LISTEN_TYPES["POSTGRES_CHANGES"] = "postgres_changes";
})(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function (REALTIME_SUBSCRIBE_STATES) {
    REALTIME_SUBSCRIBE_STATES["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
/** A channel is the basic building block of Realtime
 * and narrows the scope of data flow to subscribed clients.
 * You can think of a channel as a chatroom where participants are able to see who's online
 * and send and receive messages.
 */
class RealtimeChannel {
    constructor(
    /** Topic name can be any string. */
    topic, params = { config: {} }, socket) {
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = {};
        this.state = CHANNEL_STATES.closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.subTopic = topic.replace(/^realtime:/i, '');
        this.params.config = Object.assign({
            broadcast: { ack: false, self: false },
            presence: { key: '' },
        }, params.config);
        this.timeout = this.socket.timeout;
        this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
        this.rejoinTimer = new Timer(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive('ok', () => {
            this.state = CHANNEL_STATES.joined;
            this.rejoinTimer.reset();
            this.pushBuffer.forEach((pushEvent) => pushEvent.send());
            this.pushBuffer = [];
        });
        this._onClose(() => {
            this.rejoinTimer.reset();
            this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`);
            this.state = CHANNEL_STATES.closed;
            this.socket._remove(this);
        });
        this._onError((reason) => {
            if (this._isLeaving() || this._isClosed()) {
                return;
            }
            this.socket.log('channel', `error ${this.topic}`, reason);
            this.state = CHANNEL_STATES.errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive('timeout', () => {
            if (!this._isJoining()) {
                return;
            }
            this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout);
            this.state = CHANNEL_STATES.errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this._on(CHANNEL_EVENTS.reply, {}, (payload, ref) => {
            this._trigger(this._replyEventName(ref), payload);
        });
        this.presence = new RealtimePresence(this);
        this.broadcastEndpointURL = this._broadcastEndpointURL();
    }
    /** Subscribe registers your client with the server */
    subscribe(callback, timeout = this.timeout) {
        var _a, _b;
        if (!this.socket.isConnected()) {
            this.socket.connect();
        }
        if (this.joinedOnce) {
            throw `tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance`;
        }
        else {
            const { config: { broadcast, presence }, } = this.params;
            this._onError((e) => callback && callback('CHANNEL_ERROR', e));
            this._onClose(() => callback && callback('CLOSED'));
            const accessTokenPayload = {};
            const config = {
                broadcast,
                presence,
                postgres_changes: (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map((r) => r.filter)) !== null && _b !== void 0 ? _b : [],
            };
            if (this.socket.accessToken) {
                accessTokenPayload.access_token = this.socket.accessToken;
            }
            this.updateJoinPayload(Object.assign({ config }, accessTokenPayload));
            this.joinedOnce = true;
            this._rejoin(timeout);
            this.joinPush
                .receive('ok', ({ postgres_changes: serverPostgresFilters, }) => {
                var _a;
                this.socket.accessToken &&
                    this.socket.setAuth(this.socket.accessToken);
                if (serverPostgresFilters === undefined) {
                    callback && callback('SUBSCRIBED');
                    return;
                }
                else {
                    const clientPostgresBindings = this.bindings.postgres_changes;
                    const bindingsLen = (_a = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a !== void 0 ? _a : 0;
                    const newPostgresBindings = [];
                    for (let i = 0; i < bindingsLen; i++) {
                        const clientPostgresBinding = clientPostgresBindings[i];
                        const { filter: { event, schema, table, filter }, } = clientPostgresBinding;
                        const serverPostgresFilter = serverPostgresFilters && serverPostgresFilters[i];
                        if (serverPostgresFilter &&
                            serverPostgresFilter.event === event &&
                            serverPostgresFilter.schema === schema &&
                            serverPostgresFilter.table === table &&
                            serverPostgresFilter.filter === filter) {
                            newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), { id: serverPostgresFilter.id }));
                        }
                        else {
                            this.unsubscribe();
                            callback &&
                                callback('CHANNEL_ERROR', new Error('mismatch between server and client bindings for postgres changes'));
                            return;
                        }
                    }
                    this.bindings.postgres_changes = newPostgresBindings;
                    callback && callback('SUBSCRIBED');
                    return;
                }
            })
                .receive('error', (error) => {
                callback &&
                    callback('CHANNEL_ERROR', new Error(JSON.stringify(Object.values(error).join(', ') || 'error')));
                return;
            })
                .receive('timeout', () => {
                callback && callback('TIMED_OUT');
                return;
            });
        }
        return this;
    }
    presenceState() {
        return this.presence.state;
    }
    async track(payload, opts = {}) {
        return await this.send({
            type: 'presence',
            event: 'track',
            payload,
        }, opts.timeout || this.timeout);
    }
    async untrack(opts = {}) {
        return await this.send({
            type: 'presence',
            event: 'untrack',
        }, opts);
    }
    on(type, filter, callback) {
        return this._on(type, filter, callback);
    }
    /**
     * Sends a message into the channel.
     *
     * @param args Arguments to send to channel
     * @param args.type The type of event to send
     * @param args.event The name of the event being sent
     * @param args.payload Payload to be sent
     * @param opts Options to be used during the send process
     */
    async send(args, opts = {}) {
        var _a, _b;
        if (!this._canPush() && args.type === 'broadcast') {
            const { event, payload: endpoint_payload } = args;
            const options = {
                method: 'POST',
                headers: {
                    apikey: (_a = this.socket.accessToken) !== null && _a !== void 0 ? _a : '',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [
                        { topic: this.subTopic, event, payload: endpoint_payload },
                    ],
                }),
            };
            try {
                const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_b = opts.timeout) !== null && _b !== void 0 ? _b : this.timeout);
                if (response.ok) {
                    return 'ok';
                }
                else {
                    return 'error';
                }
            }
            catch (error) {
                if (error.name === 'AbortError') {
                    return 'timed out';
                }
                else {
                    return 'error';
                }
            }
        }
        else {
            return new Promise((resolve) => {
                var _a, _b, _c;
                const push = this._push(args.type, args, opts.timeout || this.timeout);
                if (args.type === 'broadcast' && !((_c = (_b = (_a = this.params) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) {
                    resolve('ok');
                }
                push.receive('ok', () => resolve('ok'));
                push.receive('timeout', () => resolve('timed out'));
            });
        }
    }
    updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
    }
    /**
     * Leaves the channel.
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */
    unsubscribe(timeout = this.timeout) {
        this.state = CHANNEL_STATES.leaving;
        const onClose = () => {
            this.socket.log('channel', `leave ${this.topic}`);
            this._trigger(CHANNEL_EVENTS.close, 'leave', this._joinRef());
        };
        this.rejoinTimer.reset();
        // Destroy joinPush to avoid connection timeouts during unscription phase
        this.joinPush.destroy();
        return new Promise((resolve) => {
            const leavePush = new Push(this, CHANNEL_EVENTS.leave, {}, timeout);
            leavePush
                .receive('ok', () => {
                onClose();
                resolve('ok');
            })
                .receive('timeout', () => {
                onClose();
                resolve('timed out');
            })
                .receive('error', () => {
                resolve('error');
            });
            leavePush.send();
            if (!this._canPush()) {
                leavePush.trigger('ok', {});
            }
        });
    }
    /** @internal */
    _broadcastEndpointURL() {
        let url = this.socket.endPoint;
        url = url.replace(/^ws/i, 'http');
        url = url.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, '');
        return url.replace(/\/+$/, '') + '/api/broadcast';
    }
    async _fetchWithTimeout(url, options, timeout) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), { signal: controller.signal }));
        clearTimeout(id);
        return response;
    }
    /** @internal */
    _push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) {
            throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        }
        let pushEvent = new Push(this, event, payload, timeout);
        if (this._canPush()) {
            pushEvent.send();
        }
        else {
            pushEvent.startTimeout();
            this.pushBuffer.push(pushEvent);
        }
        return pushEvent;
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     *
     * @internal
     */
    _onMessage(_event, payload, _ref) {
        return payload;
    }
    /** @internal */
    _isMember(topic) {
        return this.topic === topic;
    }
    /** @internal */
    _joinRef() {
        return this.joinPush.ref;
    }
    /** @internal */
    _trigger(type, payload, ref) {
        var _a, _b;
        const typeLower = type.toLocaleLowerCase();
        const { close, error, leave, join } = CHANNEL_EVENTS;
        const events = [close, error, leave, join];
        if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) {
            return;
        }
        let handledPayload = this._onMessage(typeLower, payload, ref);
        if (payload && !handledPayload) {
            throw 'channel onMessage callbacks must return the payload, modified or unmodified';
        }
        if (['insert', 'update', 'delete'].includes(typeLower)) {
            (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.filter((bind) => {
                var _a, _b, _c;
                return (((_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event) === '*' ||
                    ((_c = (_b = bind.filter) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower);
            }).map((bind) => bind.callback(handledPayload, ref));
        }
        else {
            (_b = this.bindings[typeLower]) === null || _b === void 0 ? void 0 : _b.filter((bind) => {
                var _a, _b, _c, _d, _e, _f;
                if (['broadcast', 'presence', 'postgres_changes'].includes(typeLower)) {
                    if ('id' in bind) {
                        const bindId = bind.id;
                        const bindEvent = (_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event;
                        return (bindId &&
                            ((_b = payload.ids) === null || _b === void 0 ? void 0 : _b.includes(bindId)) &&
                            (bindEvent === '*' ||
                                (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) ===
                                    ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase())));
                    }
                    else {
                        const bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
                        return (bindEvent === '*' ||
                            bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase()));
                    }
                }
                else {
                    return bind.type.toLocaleLowerCase() === typeLower;
                }
            }).map((bind) => {
                if (typeof handledPayload === 'object' && 'ids' in handledPayload) {
                    const postgresChanges = handledPayload.data;
                    const { schema, table, commit_timestamp, type, errors } = postgresChanges;
                    const enrichedPayload = {
                        schema: schema,
                        table: table,
                        commit_timestamp: commit_timestamp,
                        eventType: type,
                        new: {},
                        old: {},
                        errors: errors,
                    };
                    handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
                }
                bind.callback(handledPayload, ref);
            });
        }
    }
    /** @internal */
    _isClosed() {
        return this.state === CHANNEL_STATES.closed;
    }
    /** @internal */
    _isJoined() {
        return this.state === CHANNEL_STATES.joined;
    }
    /** @internal */
    _isJoining() {
        return this.state === CHANNEL_STATES.joining;
    }
    /** @internal */
    _isLeaving() {
        return this.state === CHANNEL_STATES.leaving;
    }
    /** @internal */
    _replyEventName(ref) {
        return `chan_reply_${ref}`;
    }
    /** @internal */
    _on(type, filter, callback) {
        const typeLower = type.toLocaleLowerCase();
        const binding = {
            type: typeLower,
            filter: filter,
            callback: callback,
        };
        if (this.bindings[typeLower]) {
            this.bindings[typeLower].push(binding);
        }
        else {
            this.bindings[typeLower] = [binding];
        }
        return this;
    }
    /** @internal */
    _off(type, filter) {
        const typeLower = type.toLocaleLowerCase();
        this.bindings[typeLower] = this.bindings[typeLower].filter((bind) => {
            var _a;
            return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower &&
                RealtimeChannel.isEqual(bind.filter, filter));
        });
        return this;
    }
    /** @internal */
    static isEqual(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (const k in obj1) {
            if (obj1[k] !== obj2[k]) {
                return false;
            }
        }
        return true;
    }
    /** @internal */
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) {
            this._rejoin();
        }
    }
    /**
     * Registers a callback that will be executed when the channel closes.
     *
     * @internal
     */
    _onClose(callback) {
        this._on(CHANNEL_EVENTS.close, {}, callback);
    }
    /**
     * Registers a callback that will be executed when the channel encounteres an error.
     *
     * @internal
     */
    _onError(callback) {
        this._on(CHANNEL_EVENTS.error, {}, (reason) => callback(reason));
    }
    /**
     * Returns `true` if the socket is connected and the channel has been joined.
     *
     * @internal
     */
    _canPush() {
        return this.socket.isConnected() && this._isJoined();
    }
    /** @internal */
    _rejoin(timeout = this.timeout) {
        if (this._isLeaving()) {
            return;
        }
        this.socket._leaveOpenTopic(this.topic);
        this.state = CHANNEL_STATES.joining;
        this.joinPush.resend(timeout);
    }
    /** @internal */
    _getPayloadRecords(payload) {
        const records = {
            new: {},
            old: {},
        };
        if (payload.type === 'INSERT' || payload.type === 'UPDATE') {
            records.new = convertChangeData(payload.columns, payload.record);
        }
        if (payload.type === 'UPDATE' || payload.type === 'DELETE') {
            records.old = convertChangeData(payload.columns, payload.old_record);
        }
        return records;
    }
}const noop = () => { };
class RealtimeClient {
    /**
     * Initializes the Socket.
     *
     * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
     * @param options.transport The Websocket Transport, for example WebSocket.
     * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
     * @param options.params The optional params to pass when connecting.
     * @param options.headers The optional headers to pass when connecting.
     * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
     * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
     * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
     * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
     * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
     */
    constructor(endPoint, options) {
        var _a;
        this.accessToken = null;
        this.channels = [];
        this.endPoint = '';
        this.headers = DEFAULT_HEADERS$3;
        this.params = {};
        this.timeout = DEFAULT_TIMEOUT;
        this.transport = browser.w3cwebsocket;
        this.heartbeatIntervalMs = 30000;
        this.heartbeatTimer = undefined;
        this.pendingHeartbeatRef = null;
        this.ref = 0;
        this.logger = noop;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new Serializer();
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: [],
        };
        /**
         * Use either custom fetch, if provided, or default fetch to make HTTP requests
         *
         * @internal
         */
        this._resolveFetch = (customFetch) => {
            let _fetch;
            if (customFetch) {
                _fetch = customFetch;
            }
            else if (typeof fetch === 'undefined') {
                _fetch = (...args) => Promise.resolve().then(function(){return browser$2}).then(({ default: fetch }) => fetch(...args));
            }
            else {
                _fetch = fetch;
            }
            return (...args) => _fetch(...args);
        };
        this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
        if (options === null || options === void 0 ? void 0 : options.params)
            this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.headers)
            this.headers = Object.assign(Object.assign({}, this.headers), options.headers);
        if (options === null || options === void 0 ? void 0 : options.timeout)
            this.timeout = options.timeout;
        if (options === null || options === void 0 ? void 0 : options.logger)
            this.logger = options.logger;
        if (options === null || options === void 0 ? void 0 : options.transport)
            this.transport = options.transport;
        if (options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs)
            this.heartbeatIntervalMs = options.heartbeatIntervalMs;
        const accessToken = (_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey;
        if (accessToken)
            this.accessToken = accessToken;
        this.reconnectAfterMs = (options === null || options === void 0 ? void 0 : options.reconnectAfterMs)
            ? options.reconnectAfterMs
            : (tries) => {
                return [1000, 2000, 5000, 10000][tries - 1] || 10000;
            };
        this.encode = (options === null || options === void 0 ? void 0 : options.encode)
            ? options.encode
            : (payload, callback) => {
                return callback(JSON.stringify(payload));
            };
        this.decode = (options === null || options === void 0 ? void 0 : options.decode)
            ? options.decode
            : this.serializer.decode.bind(this.serializer);
        this.reconnectTimer = new Timer(async () => {
            this.disconnect();
            this.connect();
        }, this.reconnectAfterMs);
        this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
    }
    /**
     * Connects the socket, unless already connected.
     */
    connect() {
        if (this.conn) {
            return;
        }
        this.conn = new this.transport(this._endPointURL(), [], null, this.headers);
        if (this.conn) {
            this.conn.binaryType = 'arraybuffer';
            this.conn.onopen = () => this._onConnOpen();
            this.conn.onerror = (error) => this._onConnError(error);
            this.conn.onmessage = (event) => this._onConnMessage(event);
            this.conn.onclose = (event) => this._onConnClose(event);
        }
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */
    disconnect(code, reason) {
        if (this.conn) {
            this.conn.onclose = function () { }; // noop
            if (code) {
                this.conn.close(code, reason !== null && reason !== void 0 ? reason : '');
            }
            else {
                this.conn.close();
            }
            this.conn = null;
            // remove open handles
            this.heartbeatTimer && clearInterval(this.heartbeatTimer);
            this.reconnectTimer.reset();
        }
    }
    /**
     * Returns all created channels
     */
    getChannels() {
        return this.channels;
    }
    /**
     * Unsubscribes and removes a single channel
     * @param channel A RealtimeChannel instance
     */
    async removeChannel(channel) {
        const status = await channel.unsubscribe();
        if (this.channels.length === 0) {
            this.disconnect();
        }
        return status;
    }
    /**
     * Unsubscribes and removes all channels
     */
    async removeAllChannels() {
        const values_1 = await Promise.all(this.channels.map((channel) => channel.unsubscribe()));
        this.disconnect();
        return values_1;
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overridden.
     */
    log(kind, msg, data) {
        this.logger(kind, msg, data);
    }
    /**
     * Returns the current state of the socket.
     */
    connectionState() {
        switch (this.conn && this.conn.readyState) {
            case SOCKET_STATES.connecting:
                return CONNECTION_STATE.Connecting;
            case SOCKET_STATES.open:
                return CONNECTION_STATE.Open;
            case SOCKET_STATES.closing:
                return CONNECTION_STATE.Closing;
            default:
                return CONNECTION_STATE.Closed;
        }
    }
    /**
     * Returns `true` is the connection is open.
     */
    isConnected() {
        return this.connectionState() === CONNECTION_STATE.Open;
    }
    channel(topic, params = { config: {} }) {
        const chan = new RealtimeChannel(`realtime:${topic}`, params, this);
        this.channels.push(chan);
        return chan;
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     */
    push(data) {
        const { topic, event, payload, ref } = data;
        const callback = () => {
            this.encode(data, (result) => {
                var _a;
                (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
            });
        };
        this.log('push', `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) {
            callback();
        }
        else {
            this.sendBuffer.push(callback);
        }
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * @param token A JWT string.
     */
    setAuth(token) {
        this.accessToken = token;
        this.channels.forEach((channel) => {
            token && channel.updateJoinPayload({ access_token: token });
            if (channel.joinedOnce && channel._isJoined()) {
                channel._push(CHANNEL_EVENTS.access_token, { access_token: token });
            }
        });
    }
    /**
     * Return the next message ref, accounting for overflows
     *
     * @internal
     */
    _makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) {
            this.ref = 0;
        }
        else {
            this.ref = newRef;
        }
        return this.ref.toString();
    }
    /**
     * Unsubscribe from channels with the specified topic.
     *
     * @internal
     */
    _leaveOpenTopic(topic) {
        let dupChannel = this.channels.find((c) => c.topic === topic && (c._isJoined() || c._isJoining()));
        if (dupChannel) {
            this.log('transport', `leaving duplicate topic "${topic}"`);
            dupChannel.unsubscribe();
        }
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     *
     * @internal
     */
    _remove(channel) {
        this.channels = this.channels.filter((c) => c._joinRef() !== channel._joinRef());
    }
    /**
     * Returns the URL of the websocket.
     *
     * @internal
     */
    _endPointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: VSN }));
    }
    /** @internal */
    _onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg) => {
            let { topic, event, payload, ref } = msg;
            if ((ref && ref === this.pendingHeartbeatRef) ||
                event === (payload === null || payload === void 0 ? void 0 : payload.type)) {
                this.pendingHeartbeatRef = null;
            }
            this.log('receive', `${payload.status || ''} ${topic} ${event} ${(ref && '(' + ref + ')') || ''}`, payload);
            this.channels
                .filter((channel) => channel._isMember(topic))
                .forEach((channel) => channel._trigger(event, payload, ref));
            this.stateChangeCallbacks.message.forEach((callback) => callback(msg));
        });
    }
    /** @internal */
    _onConnOpen() {
        this.log('transport', `connected to ${this._endPointURL()}`);
        this._flushSendBuffer();
        this.reconnectTimer.reset();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(() => this._sendHeartbeat(), this.heartbeatIntervalMs);
        this.stateChangeCallbacks.open.forEach((callback) => callback());
    }
    /** @internal */
    _onConnClose(event) {
        this.log('transport', 'close', event);
        this._triggerChanError();
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.reconnectTimer.scheduleTimeout();
        this.stateChangeCallbacks.close.forEach((callback) => callback(event));
    }
    /** @internal */
    _onConnError(error) {
        this.log('transport', error.message);
        this._triggerChanError();
        this.stateChangeCallbacks.error.forEach((callback) => callback(error));
    }
    /** @internal */
    _triggerChanError() {
        this.channels.forEach((channel) => channel._trigger(CHANNEL_EVENTS.error));
    }
    /** @internal */
    _appendParams(url, params) {
        if (Object.keys(params).length === 0) {
            return url;
        }
        const prefix = url.match(/\?/) ? '&' : '?';
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
    }
    /** @internal */
    _flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
            this.sendBuffer.forEach((callback) => callback());
            this.sendBuffer = [];
        }
    }
    /** @internal */
    _sendHeartbeat() {
        var _a;
        if (!this.isConnected()) {
            return;
        }
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
            this.log('transport', 'heartbeat timeout. Attempting to re-establish connection');
            (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(WS_CLOSE_NORMAL, 'hearbeat timeout');
            return;
        }
        this.pendingHeartbeatRef = this._makeRef();
        this.push({
            topic: 'phoenix',
            event: 'heartbeat',
            payload: {},
            ref: this.pendingHeartbeatRef,
        });
        this.setAuth(this.accessToken);
    }
}class StorageError extends Error {
    constructor(message) {
        super(message);
        this.__isStorageError = true;
        this.name = 'StorageError';
    }
}
function isStorageError(error) {
    return typeof error === 'object' && error !== null && '__isStorageError' in error;
}
class StorageApiError extends StorageError {
    constructor(message, status) {
        super(message);
        this.name = 'StorageApiError';
        this.status = status;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
        };
    }
}
class StorageUnknownError extends StorageError {
    constructor(message, originalError) {
        super(message);
        this.name = 'StorageUnknownError';
        this.originalError = originalError;
    }
}var __awaiter$9 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resolveFetch$2 = (customFetch) => {
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    }
    else if (typeof fetch === 'undefined') {
        _fetch = (...args) => Promise.resolve().then(function(){return browser$2}).then(({ default: fetch }) => fetch(...args));
    }
    else {
        _fetch = fetch;
    }
    return (...args) => _fetch(...args);
};
const resolveResponse = () => __awaiter$9(void 0, void 0, void 0, function* () {
    if (typeof Response === 'undefined') {
        // @ts-ignore
        return (yield Promise.resolve().then(function(){return browser$2})).Response;
    }
    return Response;
});var __awaiter$8 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _getErrorMessage$1 = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError$1 = (error, reject) => __awaiter$8(void 0, void 0, void 0, function* () {
    const Res = yield resolveResponse();
    if (error instanceof Res) {
        error
            .json()
            .then((err) => {
            reject(new StorageApiError(_getErrorMessage$1(err), error.status || 500));
        })
            .catch((err) => {
            reject(new StorageUnknownError(_getErrorMessage$1(err), err));
        });
    }
    else {
        reject(new StorageUnknownError(_getErrorMessage$1(error), error));
    }
});
const _getRequestParams$1 = (method, options, parameters, body) => {
    const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
    if (method === 'GET') {
        return params;
    }
    params.headers = Object.assign({ 'Content-Type': 'application/json' }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest$1(fetcher, method, url, options, parameters, body) {
    return __awaiter$8(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            fetcher(url, _getRequestParams$1(method, options, parameters, body))
                .then((result) => {
                if (!result.ok)
                    throw result;
                if (options === null || options === void 0 ? void 0 : options.noResolveJson)
                    return result;
                return result.json();
            })
                .then((data) => resolve(data))
                .catch((error) => handleError$1(error, reject));
        });
    });
}
function get(fetcher, url, options, parameters) {
    return __awaiter$8(this, void 0, void 0, function* () {
        return _handleRequest$1(fetcher, 'GET', url, options, parameters);
    });
}
function post(fetcher, url, body, options, parameters) {
    return __awaiter$8(this, void 0, void 0, function* () {
        return _handleRequest$1(fetcher, 'POST', url, options, parameters, body);
    });
}
function put(fetcher, url, body, options, parameters) {
    return __awaiter$8(this, void 0, void 0, function* () {
        return _handleRequest$1(fetcher, 'PUT', url, options, parameters, body);
    });
}
function remove(fetcher, url, body, options, parameters) {
    return __awaiter$8(this, void 0, void 0, function* () {
        return _handleRequest$1(fetcher, 'DELETE', url, options, parameters, body);
    });
}var __awaiter$7 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: 'name',
        order: 'asc',
    },
};
const DEFAULT_FILE_OPTIONS = {
    cacheControl: '3600',
    contentType: 'text/plain;charset=UTF-8',
    upsert: false,
};
class StorageFileApi {
    constructor(url, headers = {}, bucketId, fetch) {
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = resolveFetch$2(fetch);
    }
    /**
     * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
     *
     * @param method HTTP method.
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */
    uploadOrUpdate(method, path, fileBody, fileOptions) {
        return __awaiter$7(this, void 0, void 0, function* () {
            try {
                let body;
                const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), (method === 'POST' && { 'x-upsert': String(options.upsert) }));
                if (typeof Blob !== 'undefined' && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append('cacheControl', options.cacheControl);
                    body.append('', fileBody);
                }
                else if (typeof FormData !== 'undefined' && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append('cacheControl', options.cacheControl);
                }
                else {
                    body = fileBody;
                    headers['cache-control'] = `max-age=${options.cacheControl}`;
                    headers['content-type'] = options.contentType;
                }
                const cleanPath = this._removeEmptyFolders(path);
                const _path = this._getFinalPath(cleanPath);
                const res = yield this.fetch(`${this.url}/object/${_path}`, Object.assign({ method, body: body, headers }, ((options === null || options === void 0 ? void 0 : options.duplex) ? { duplex: options.duplex } : {})));
                if (res.ok) {
                    return {
                        data: { path: cleanPath },
                        error: null,
                    };
                }
                else {
                    const error = yield res.json();
                    return { data: null, error };
                }
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */
    upload(path, fileBody, fileOptions) {
        return __awaiter$7(this, void 0, void 0, function* () {
            return this.uploadOrUpdate('POST', path, fileBody, fileOptions);
        });
    }
    /**
     * Upload a file with a token generated from `createSignedUploadUrl`.
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param token The token generated from `createSignedUploadUrl`
     * @param fileBody The body of the file to be stored in the bucket.
     */
    uploadToSignedUrl(path, token, fileBody, fileOptions) {
        return __awaiter$7(this, void 0, void 0, function* () {
            const cleanPath = this._removeEmptyFolders(path);
            const _path = this._getFinalPath(cleanPath);
            const url = new URL(this.url + `/object/upload/sign/${_path}`);
            url.searchParams.set('token', token);
            try {
                let body;
                const options = Object.assign({ upsert: DEFAULT_FILE_OPTIONS.upsert }, fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), { 'x-upsert': String(options.upsert) });
                if (typeof Blob !== 'undefined' && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append('cacheControl', options.cacheControl);
                    body.append('', fileBody);
                }
                else if (typeof FormData !== 'undefined' && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append('cacheControl', options.cacheControl);
                }
                else {
                    body = fileBody;
                    headers['cache-control'] = `max-age=${options.cacheControl}`;
                    headers['content-type'] = options.contentType;
                }
                const res = yield this.fetch(url.toString(), {
                    method: 'PUT',
                    body: body,
                    headers,
                });
                if (res.ok) {
                    return {
                        data: { path: cleanPath },
                        error: null,
                    };
                }
                else {
                    const error = yield res.json();
                    return { data: null, error };
                }
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Creates a signed upload URL.
     * Signed upload URLs can be used to upload files to the bucket without further authentication.
     * They are valid for 2 hours.
     * @param path The file path, including the current file name. For example `folder/image.png`.
     */
    createSignedUploadUrl(path) {
        return __awaiter$7(this, void 0, void 0, function* () {
            try {
                let _path = this._getFinalPath(path);
                const data = yield post(this.fetch, `${this.url}/object/upload/sign/${_path}`, {}, { headers: this.headers });
                const url = new URL(this.url + data.url);
                const token = url.searchParams.get('token');
                if (!token) {
                    throw new StorageError('No token returned by API');
                }
                return { data: { signedUrl: url.toString(), path, token }, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
     * @param fileBody The body of the file to be stored in the bucket.
     */
    update(path, fileBody, fileOptions) {
        return __awaiter$7(this, void 0, void 0, function* () {
            return this.uploadOrUpdate('PUT', path, fileBody, fileOptions);
        });
    }
    /**
     * Moves an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
     */
    move(fromPath, toPath) {
        return __awaiter$7(this, void 0, void 0, function* () {
            try {
                const data = yield post(this.fetch, `${this.url}/object/move`, { bucketId: this.bucketId, sourceKey: fromPath, destinationKey: toPath }, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Copies an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     */
    copy(fromPath, toPath) {
        return __awaiter$7(this, void 0, void 0, function* () {
            try {
                const data = yield post(this.fetch, `${this.url}/object/copy`, { bucketId: this.bucketId, sourceKey: fromPath, destinationKey: toPath }, { headers: this.headers });
                return { data: { path: data.Key }, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param path The file path, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */
    createSignedUrl(path, expiresIn, options) {
        return __awaiter$7(this, void 0, void 0, function* () {
            try {
                let _path = this._getFinalPath(path);
                let data = yield post(this.fetch, `${this.url}/object/sign/${_path}`, Object.assign({ expiresIn }, ((options === null || options === void 0 ? void 0 : options.transform) ? { transform: options.transform } : {})), { headers: this.headers });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download)
                    ? `&download=${options.download === true ? '' : options.download}`
                    : '';
                const signedUrl = encodeURI(`${this.url}${data.signedURL}${downloadQueryParam}`);
                data = { signedUrl };
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
     * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     */
    createSignedUrls(paths, expiresIn, options) {
        return __awaiter$7(this, void 0, void 0, function* () {
            try {
                const data = yield post(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn, paths }, { headers: this.headers });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download)
                    ? `&download=${options.download === true ? '' : options.download}`
                    : '';
                return {
                    data: data.map((datum) => (Object.assign(Object.assign({}, datum), { signedUrl: datum.signedURL
                            ? encodeURI(`${this.url}${datum.signedURL}${downloadQueryParam}`)
                            : null }))),
                    error: null,
                };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
     *
     * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
     * @param options.transform Transform the asset before serving it to the client.
     */
    download(path, options) {
        return __awaiter$7(this, void 0, void 0, function* () {
            const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== 'undefined';
            const renderPath = wantsTransformation ? 'render/image/authenticated' : 'object';
            const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
            const queryString = transformationQuery ? `?${transformationQuery}` : '';
            try {
                const _path = this._getFinalPath(path);
                const res = yield get(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
                    headers: this.headers,
                    noResolveJson: true,
                });
                const data = yield res.blob();
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
     * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
     *
     * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
     * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */
    getPublicUrl(path, options) {
        const _path = this._getFinalPath(path);
        const _queryString = [];
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download)
            ? `download=${options.download === true ? '' : options.download}`
            : '';
        if (downloadQueryParam !== '') {
            _queryString.push(downloadQueryParam);
        }
        const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== 'undefined';
        const renderPath = wantsTransformation ? 'render/image' : 'object';
        const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
        if (transformationQuery !== '') {
            _queryString.push(transformationQuery);
        }
        let queryString = _queryString.join('&');
        if (queryString !== '') {
            queryString = `?${queryString}`;
        }
        return {
            data: { publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`) },
        };
    }
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
     */
    remove(paths) {
        return __awaiter$7(this, void 0, void 0, function* () {
            try {
                const data = yield remove(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: paths }, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */
    // async getMetadata(
    //   id: string
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */
    // async updateMetadata(
    //   id: string,
    //   meta: Metadata
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await post(
    //       this.fetch,
    //       `${this.url}/metadata/${id}`,
    //       { ...meta },
    //       { headers: this.headers }
    //     )
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Lists all the files within a bucket.
     * @param path The folder path.
     */
    list(path, options, parameters) {
        return __awaiter$7(this, void 0, void 0, function* () {
            try {
                const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), { prefix: path || '' });
                const data = yield post(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, { headers: this.headers }, parameters);
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    _getFinalPath(path) {
        return `${this.bucketId}/${path}`;
    }
    _removeEmptyFolders(path) {
        return path.replace(/^\/|\/$/g, '').replace(/\/+/g, '/');
    }
    transformOptsToQueryString(transform) {
        const params = [];
        if (transform.width) {
            params.push(`width=${transform.width}`);
        }
        if (transform.height) {
            params.push(`height=${transform.height}`);
        }
        if (transform.resize) {
            params.push(`resize=${transform.resize}`);
        }
        if (transform.format) {
            params.push(`format=${transform.format}`);
        }
        if (transform.quality) {
            params.push(`quality=${transform.quality}`);
        }
        return params.join('&');
    }
}// generated by genversion
const version$2 = '2.5.4';const DEFAULT_HEADERS$2 = { 'X-Client-Info': `storage-js/${version$2}` };var __awaiter$6 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class StorageBucketApi {
    constructor(url, headers = {}, fetch) {
        this.url = url;
        this.headers = Object.assign(Object.assign({}, DEFAULT_HEADERS$2), headers);
        this.fetch = resolveFetch$2(fetch);
    }
    /**
     * Retrieves the details of all Storage buckets within an existing project.
     */
    listBuckets() {
        return __awaiter$6(this, void 0, void 0, function* () {
            try {
                const data = yield get(this.fetch, `${this.url}/bucket`, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */
    getBucket(id) {
        return __awaiter$6(this, void 0, void 0, function* () {
            try {
                const data = yield get(this.fetch, `${this.url}/bucket/${id}`, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     * @returns newly created bucket id
     */
    createBucket(id, options = {
        public: false,
    }) {
        return __awaiter$6(this, void 0, void 0, function* () {
            try {
                const data = yield post(this.fetch, `${this.url}/bucket`, {
                    id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes,
                }, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Updates a Storage bucket
     *
     * @param id A unique identifier for the bucket you are updating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     */
    updateBucket(id, options) {
        return __awaiter$6(this, void 0, void 0, function* () {
            try {
                const data = yield put(this.fetch, `${this.url}/bucket/${id}`, {
                    id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes,
                }, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */
    emptyBucket(id) {
        return __awaiter$6(this, void 0, void 0, function* () {
            try {
                const data = yield post(this.fetch, `${this.url}/bucket/${id}/empty`, {}, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */
    deleteBucket(id) {
        return __awaiter$6(this, void 0, void 0, function* () {
            try {
                const data = yield remove(this.fetch, `${this.url}/bucket/${id}`, {}, { headers: this.headers });
                return { data, error: null };
            }
            catch (error) {
                if (isStorageError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
}class StorageClient extends StorageBucketApi {
    constructor(url, headers = {}, fetch) {
        super(url, headers, fetch);
    }
    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */
    from(id) {
        return new StorageFileApi(this.url, this.headers, id, this.fetch);
    }
}const version$1 = '2.24.0';// constants.ts
const DEFAULT_HEADERS$1 = { 'X-Client-Info': `supabase-js/${version$1}` };var browserPonyfill$1 = {exports: {}};(function (module, exports) {
	var global = typeof self !== 'undefined' ? self : commonjsGlobal;
	var __self__ = (function () {
	function F() {
	this.fetch = false;
	this.DOMException = global.DOMException;
	}
	F.prototype = global;
	return new F();
	})();
	(function(self) {

	((function (exports) {

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob:
	      'FileReader' in self &&
	      'Blob' in self &&
	      (function() {
	        try {
	          new Blob();
	          return true
	        } catch (e) {
	          return false
	        }
	      })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  function isDataView(obj) {
	    return obj && DataView.prototype.isPrototypeOf(obj)
	  }

	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ];

	    var isArrayBufferView =
	      ArrayBuffer.isView ||
	      function(obj) {
	        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	      };
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift();
	        return {done: value === undefined, value: value}
	      }
	    };

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      };
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (Array.isArray(headers)) {
	      headers.forEach(function(header) {
	        this.append(header[0], header[1]);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var oldValue = this.map[name];
	    this.map[name] = oldValue ? oldValue + ', ' + value : value;
	  };

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function(name) {
	    name = normalizeName(name);
	    return this.has(name) ? this.map[name] : null
	  };

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  };

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value);
	  };

	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this);
	      }
	    }
	  };

	  Headers.prototype.keys = function() {
	    var items = [];
	    this.forEach(function(value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items)
	  };

	  Headers.prototype.values = function() {
	    var items = [];
	    this.forEach(function(value) {
	      items.push(value);
	    });
	    return iteratorFor(items)
	  };

	  Headers.prototype.entries = function() {
	    var items = [];
	    this.forEach(function(value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items)
	  };

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result);
	      };
	      reader.onerror = function() {
	        reject(reader.error);
	      };
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsArrayBuffer(blob);
	    return promise
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsText(blob);
	    return promise
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf);
	    var chars = new Array(view.length);

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i]);
	    }
	    return chars.join('')
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength);
	      view.set(new Uint8Array(buf));
	      return view.buffer
	    }
	  }

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function(body) {
	      this._bodyInit = body;
	      if (!body) {
	        this._bodyText = '';
	      } else if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer);
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer]);
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body);
	      } else {
	        this._bodyText = body = Object.prototype.toString.call(body);
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      };

	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      };
	    }

	    this.text = function() {
	      var rejected = consumed(this);
	      if (rejected) {
	        return rejected
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    };

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      };
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    };

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;

	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      this.signal = input.signal;
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = String(input);
	    }

	    this.credentials = options.credentials || this.credentials || 'same-origin';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.signal = options.signal || this.signal;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function() {
	    return new Request(this, {body: this._bodyInit})
	  };

	  function decode(body) {
	    var form = new FormData();
	    body
	      .trim()
	      .split('&')
	      .forEach(function(bytes) {
	        if (bytes) {
	          var split = bytes.split('=');
	          var name = split.shift().replace(/\+/g, ' ');
	          var value = split.join('=').replace(/\+/g, ' ');
	          form.append(decodeURIComponent(name), decodeURIComponent(value));
	        }
	      });
	    return form
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers();
	    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	    // https://tools.ietf.org/html/rfc7230#section-3.2
	    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
	    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':');
	      var key = parts.shift().trim();
	      if (key) {
	        var value = parts.join(':').trim();
	        headers.append(key, value);
	      }
	    });
	    return headers
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = options.status === undefined ? 200 : options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = 'statusText' in options ? options.statusText : 'OK';
	    this.headers = new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  };

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''});
	    response.type = 'error';
	    return response
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  };

	  exports.DOMException = self.DOMException;
	  try {
	    new exports.DOMException();
	  } catch (err) {
	    exports.DOMException = function(message, name) {
	      this.message = message;
	      this.name = name;
	      var error = Error(message);
	      this.stack = error.stack;
	    };
	    exports.DOMException.prototype = Object.create(Error.prototype);
	    exports.DOMException.prototype.constructor = exports.DOMException;
	  }

	  function fetch(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init);

	      if (request.signal && request.signal.aborted) {
	        return reject(new exports.DOMException('Aborted', 'AbortError'))
	      }

	      var xhr = new XMLHttpRequest();

	      function abortXhr() {
	        xhr.abort();
	      }

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        };
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.onabort = function() {
	        reject(new exports.DOMException('Aborted', 'AbortError'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      } else if (request.credentials === 'omit') {
	        xhr.withCredentials = false;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      if (request.signal) {
	        request.signal.addEventListener('abort', abortXhr);

	        xhr.onreadystatechange = function() {
	          // DONE (success or failure)
	          if (xhr.readyState === 4) {
	            request.signal.removeEventListener('abort', abortXhr);
	          }
	        };
	      }

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    })
	  }

	  fetch.polyfill = true;

	  if (!self.fetch) {
	    self.fetch = fetch;
	    self.Headers = Headers;
	    self.Request = Request;
	    self.Response = Response;
	  }

	  exports.Headers = Headers;
	  exports.Request = Request;
	  exports.Response = Response;
	  exports.fetch = fetch;

	  Object.defineProperty(exports, '__esModule', { value: true });

	  return exports;

	}))({});
	})(__self__);
	__self__.fetch.ponyfill = true;
	// Remove "polyfill" property added by whatwg-fetch
	delete __self__.fetch.polyfill;
	// Choose between native implementation (global) or custom implementation (__self__)
	// var ctx = global.fetch ? global : __self__;
	var ctx = __self__; // this line disable service worker support temporarily
	exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'
	exports.default = ctx.fetch; // For TypeScript consumers without esModuleInterop.
	exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'
	exports.Headers = ctx.Headers;
	exports.Request = ctx.Request;
	exports.Response = ctx.Response;
	module.exports = exports; 
} (browserPonyfill$1, browserPonyfill$1.exports));

var browserPonyfillExports = browserPonyfill$1.exports;
var crossFetch = /*@__PURE__*/getDefaultExportFromCjs(browserPonyfillExports);var browserPonyfill=/*#__PURE__*/_mergeNamespaces({__proto__:null,default:crossFetch},[browserPonyfillExports]);var __awaiter$5 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resolveFetch$1 = (customFetch) => {
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    }
    else if (typeof fetch === 'undefined') {
        _fetch = crossFetch;
    }
    else {
        _fetch = fetch;
    }
    return (...args) => _fetch(...args);
};
const resolveHeadersConstructor = () => {
    if (typeof Headers === 'undefined') {
        return browserPonyfillExports.Headers;
    }
    return Headers;
};
const fetchWithAuth = (supabaseKey, getAccessToken, customFetch) => {
    const fetch = resolveFetch$1(customFetch);
    const HeadersConstructor = resolveHeadersConstructor();
    return (input, init) => __awaiter$5(void 0, void 0, void 0, function* () {
        var _a;
        const accessToken = (_a = (yield getAccessToken())) !== null && _a !== void 0 ? _a : supabaseKey;
        let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
        if (!headers.has('apikey')) {
            headers.set('apikey', supabaseKey);
        }
        if (!headers.has('Authorization')) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return fetch(input, Object.assign(Object.assign({}, init), { headers }));
    });
};function stripTrailingSlash(url) {
    return url.replace(/\/$/, '');
}
function applySettingDefaults(options, defaults) {
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions, } = options;
    const { db: DEFAULT_DB_OPTIONS, auth: DEFAULT_AUTH_OPTIONS, realtime: DEFAULT_REALTIME_OPTIONS, global: DEFAULT_GLOBAL_OPTIONS, } = defaults;
    return {
        db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
        auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
        realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
        global: Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions),
    };
}var __awaiter$4 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
}
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
const isBrowser = () => typeof document !== 'undefined';
const localStorageWriteTests = {
    tested: false,
    writable: false,
};
/**
 * Checks whether localStorage is supported on this browser.
 */
const supportsLocalStorage = () => {
    if (!isBrowser()) {
        return false;
    }
    try {
        if (typeof globalThis.localStorage !== 'object') {
            return false;
        }
    }
    catch (e) {
        // DOM exception when accessing `localStorage`
        return false;
    }
    if (localStorageWriteTests.tested) {
        return localStorageWriteTests.writable;
    }
    const randomKey = `lswt-${Math.random()}${Math.random()}`;
    try {
        globalThis.localStorage.setItem(randomKey, randomKey);
        globalThis.localStorage.removeItem(randomKey);
        localStorageWriteTests.tested = true;
        localStorageWriteTests.writable = true;
    }
    catch (e) {
        // localStorage can't be written to
        // https://www.chromium.org/for-testers/bug-reporting-guidelines/uncaught-securityerror-failed-to-read-the-localstorage-property-from-window-access-is-denied-for-this-document
        localStorageWriteTests.tested = true;
        localStorageWriteTests.writable = false;
    }
    return localStorageWriteTests.writable;
};
function getParameterByName(name, url) {
    var _a;
    if (!url)
        url = ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.href) || '';
    // eslint-disable-next-line no-useless-escape
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&#]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
const resolveFetch = (customFetch) => {
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    }
    else if (typeof fetch === 'undefined') {
        _fetch = (...args) => __awaiter$4(void 0, void 0, void 0, function* () { return yield (yield Promise.resolve().then(function(){return browserPonyfill})).fetch(...args); });
    }
    else {
        _fetch = fetch;
    }
    return (...args) => _fetch(...args);
};
const looksLikeFetchResponse = (maybeResponse) => {
    return (typeof maybeResponse === 'object' &&
        maybeResponse !== null &&
        'status' in maybeResponse &&
        'ok' in maybeResponse &&
        'json' in maybeResponse &&
        typeof maybeResponse.json === 'function');
};
// Storage helpers
const setItemAsync = (storage, key, data) => __awaiter$4(void 0, void 0, void 0, function* () {
    yield storage.setItem(key, JSON.stringify(data));
});
const getItemAsync = (storage, key) => __awaiter$4(void 0, void 0, void 0, function* () {
    const value = yield storage.getItem(key);
    if (!value) {
        return null;
    }
    try {
        return JSON.parse(value);
    }
    catch (_a) {
        return value;
    }
});
const removeItemAsync = (storage, key) => __awaiter$4(void 0, void 0, void 0, function* () {
    yield storage.removeItem(key);
});
function decodeBase64URL(value) {
    const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let base64 = '';
    let chr1, chr2, chr3;
    let enc1, enc2, enc3, enc4;
    let i = 0;
    value = value.replace('-', '+').replace('_', '/');
    while (i < value.length) {
        enc1 = key.indexOf(value.charAt(i++));
        enc2 = key.indexOf(value.charAt(i++));
        enc3 = key.indexOf(value.charAt(i++));
        enc4 = key.indexOf(value.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        base64 = base64 + String.fromCharCode(chr1);
        if (enc3 != 64 && chr2 != 0) {
            base64 = base64 + String.fromCharCode(chr2);
        }
        if (enc4 != 64 && chr3 != 0) {
            base64 = base64 + String.fromCharCode(chr3);
        }
    }
    return base64;
}
/**
 * A deferred represents some asynchronous work that is not yet finished, which
 * may or may not culminate in a value.
 * Taken from: https://github.com/mike-north/types/blob/master/src/async.ts
 */
class Deferred {
    constructor() {
        this.promise = new Deferred.promiseConstructor((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        });
    }
}
Deferred.promiseConstructor = Promise;
// Taken from: https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
function decodeJWTPayload(token) {
    // Regex checks for base64url format
    const base64UrlRegex = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i;
    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error('JWT is not valid: not a JWT structure');
    }
    if (!base64UrlRegex.test(parts[1])) {
        throw new Error('JWT is not valid: payload is not in base64url format');
    }
    const base64Url = parts[1];
    return JSON.parse(decodeBase64URL(base64Url));
}
/**
 * Creates a promise that resolves to null after some time.
 */
function sleep(time) {
    return new Promise((accept) => {
        setTimeout(() => accept(null), time);
    });
}
/**
 * Converts the provided async function into a retryable function. Each result
 * or thrown error is sent to the isRetryable function which should return true
 * if the function should run again.
 */
function retryable(fn, isRetryable) {
    const promise = new Promise((accept, reject) => {
        (() => __awaiter$4(this, void 0, void 0, function* () {
            for (let attempt = 0; attempt < Infinity; attempt++) {
                try {
                    const result = yield fn(attempt);
                    if (!isRetryable(attempt, null, result)) {
                        accept(result);
                        return;
                    }
                }
                catch (e) {
                    if (!isRetryable(attempt, e)) {
                        reject(e);
                        return;
                    }
                }
            }
        }))();
    });
    return promise;
}
function dec2hex(dec) {
    return ('0' + dec.toString(16)).substr(-2);
}
// Functions below taken from: https://stackoverflow.com/questions/63309409/creating-a-code-verifier-and-challenge-for-pkce-auth-on-spotify-api-in-reactjs
function generatePKCEVerifier() {
    const verifierLength = 56;
    const array = new Uint32Array(verifierLength);
    if (typeof crypto === 'undefined') {
        const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
        const charSetLen = charSet.length;
        let verifier = '';
        for (let i = 0; i < verifierLength; i++) {
            verifier += charSet.charAt(Math.floor(Math.random() * charSetLen));
        }
        return verifier;
    }
    crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join('');
}
function sha256(randomString) {
    return __awaiter$4(this, void 0, void 0, function* () {
        const encoder = new TextEncoder();
        const encodedData = encoder.encode(randomString);
        const hash = yield crypto.subtle.digest('SHA-256', encodedData);
        const bytes = new Uint8Array(hash);
        return Array.from(bytes)
            .map((c) => String.fromCharCode(c))
            .join('');
    });
}
function base64urlencode(str) {
    return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function generatePKCEChallenge(verifier) {
    return __awaiter$4(this, void 0, void 0, function* () {
        if (typeof crypto === 'undefined') {
            console.warn('WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.');
            return verifier;
        }
        const hashed = yield sha256(verifier);
        return base64urlencode(hashed);
    });
}class AuthError extends Error {
    constructor(message, status) {
        super(message);
        this.__isAuthError = true;
        this.name = 'AuthError';
        this.status = status;
    }
}
function isAuthError(error) {
    return typeof error === 'object' && error !== null && '__isAuthError' in error;
}
class AuthApiError extends AuthError {
    constructor(message, status) {
        super(message, status);
        this.name = 'AuthApiError';
        this.status = status;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
        };
    }
}
function isAuthApiError(error) {
    return isAuthError(error) && error.name === 'AuthApiError';
}
class AuthUnknownError extends AuthError {
    constructor(message, originalError) {
        super(message);
        this.name = 'AuthUnknownError';
        this.originalError = originalError;
    }
}
class CustomAuthError extends AuthError {
    constructor(message, name, status) {
        super(message);
        this.name = name;
        this.status = status;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
        };
    }
}
class AuthSessionMissingError extends CustomAuthError {
    constructor() {
        super('Auth session missing!', 'AuthSessionMissingError', 400);
    }
}
class AuthInvalidTokenResponseError extends CustomAuthError {
    constructor() {
        super('Auth session or user missing', 'AuthInvalidTokenResponseError', 500);
    }
}
class AuthInvalidCredentialsError extends CustomAuthError {
    constructor(message) {
        super(message, 'AuthInvalidCredentialsError', 400);
    }
}
class AuthImplicitGrantRedirectError extends CustomAuthError {
    constructor(message, details = null) {
        super(message, 'AuthImplicitGrantRedirectError', 500);
        this.details = null;
        this.details = details;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
        };
    }
}
class AuthPKCEGrantCodeExchangeError extends CustomAuthError {
    constructor(message, details = null) {
        super(message, 'AuthPKCEGrantCodeExchangeError', 500);
        this.details = null;
        this.details = details;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
        };
    }
}
class AuthRetryableFetchError extends CustomAuthError {
    constructor(message, status) {
        super(message, 'AuthRetryableFetchError', status);
    }
}
function isAuthRetryableFetchError(error) {
    return isAuthError(error) && error.name === 'AuthRetryableFetchError';
}var __awaiter$3 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const _getErrorMessage = (err) => err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const NETWORK_ERROR_CODES = [502, 503, 504];
function handleError(error) {
    return __awaiter$3(this, void 0, void 0, function* () {
        if (!looksLikeFetchResponse(error)) {
            throw new AuthRetryableFetchError(_getErrorMessage(error), 0);
        }
        if (NETWORK_ERROR_CODES.includes(error.status)) {
            // status in 500...599 range - server had an error, request might be retryed.
            throw new AuthRetryableFetchError(_getErrorMessage(error), error.status);
        }
        let data;
        try {
            data = yield error.json();
        }
        catch (e) {
            throw new AuthUnknownError(_getErrorMessage(e), e);
        }
        throw new AuthApiError(_getErrorMessage(data), error.status || 500);
    });
}
const _getRequestParams = (method, options, parameters, body) => {
    const params = { method, headers: (options === null || options === void 0 ? void 0 : options.headers) || {} };
    if (method === 'GET') {
        return params;
    }
    params.headers = Object.assign({ 'Content-Type': 'application/json;charset=UTF-8' }, options === null || options === void 0 ? void 0 : options.headers);
    params.body = JSON.stringify(body);
    return Object.assign(Object.assign({}, params), parameters);
};
function _request(fetcher, method, url, options) {
    var _a;
    return __awaiter$3(this, void 0, void 0, function* () {
        const headers = Object.assign({}, options === null || options === void 0 ? void 0 : options.headers);
        if (options === null || options === void 0 ? void 0 : options.jwt) {
            headers['Authorization'] = `Bearer ${options.jwt}`;
        }
        const qs = (_a = options === null || options === void 0 ? void 0 : options.query) !== null && _a !== void 0 ? _a : {};
        if (options === null || options === void 0 ? void 0 : options.redirectTo) {
            qs['redirect_to'] = options.redirectTo;
        }
        const queryString = Object.keys(qs).length ? '?' + new URLSearchParams(qs).toString() : '';
        const data = yield _handleRequest(fetcher, method, url + queryString, { headers, noResolveJson: options === null || options === void 0 ? void 0 : options.noResolveJson }, {}, options === null || options === void 0 ? void 0 : options.body);
        return (options === null || options === void 0 ? void 0 : options.xform) ? options === null || options === void 0 ? void 0 : options.xform(data) : { data: Object.assign({}, data), error: null };
    });
}
function _handleRequest(fetcher, method, url, options, parameters, body) {
    return __awaiter$3(this, void 0, void 0, function* () {
        const requestParams = _getRequestParams(method, options, parameters, body);
        let result;
        try {
            result = yield fetcher(url, requestParams);
        }
        catch (e) {
            console.error(e);
            // fetch failed, likely due to a network or CORS error
            throw new AuthRetryableFetchError(_getErrorMessage(e), 0);
        }
        if (!result.ok) {
            yield handleError(result);
        }
        if (options === null || options === void 0 ? void 0 : options.noResolveJson) {
            return result;
        }
        try {
            return yield result.json();
        }
        catch (e) {
            yield handleError(e);
        }
    });
}
function _sessionResponse(data) {
    var _a;
    let session = null;
    if (hasSession(data)) {
        session = Object.assign({}, data);
        session.expires_at = expiresAt(data.expires_in);
    }
    const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return { data: { session, user }, error: null };
}
function _userResponse(data) {
    var _a;
    const user = (_a = data.user) !== null && _a !== void 0 ? _a : data;
    return { data: { user }, error: null };
}
function _ssoResponse(data) {
    return { data, error: null };
}
function _generateLinkResponse(data) {
    const { action_link, email_otp, hashed_token, redirect_to, verification_type } = data, rest = __rest$1(data, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]);
    const properties = {
        action_link,
        email_otp,
        hashed_token,
        redirect_to,
        verification_type,
    };
    const user = Object.assign({}, rest);
    return {
        data: {
            properties,
            user,
        },
        error: null,
    };
}
function _noResolveJsonResponse(data) {
    return data;
}
/**
 * hasSession checks if the response object contains a valid session
 * @param data A response object
 * @returns true if a session is in the response
 */
function hasSession(data) {
    return data.access_token && data.refresh_token && data.expires_in;
}var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
class GoTrueAdminApi {
    constructor({ url = '', headers = {}, fetch, }) {
        this.url = url;
        this.headers = headers;
        this.fetch = resolveFetch(fetch);
        this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this),
        };
    }
    /**
     * Removes a logged-in session.
     * @param jwt A valid, logged-in JWT.
     */
    signOut(jwt) {
        return __awaiter$2(this, void 0, void 0, function* () {
            try {
                yield _request(this.fetch, 'POST', `${this.url}/logout`, {
                    headers: this.headers,
                    jwt,
                    noResolveJson: true,
                });
                return { data: null, error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Sends an invite link to an email address.
     * @param email The email address of the user.
     * @param options Additional options to be included when inviting.
     */
    inviteUserByEmail(email, options = {}) {
        return __awaiter$2(this, void 0, void 0, function* () {
            try {
                return yield _request(this.fetch, 'POST', `${this.url}/invite`, {
                    body: { email, data: options.data },
                    headers: this.headers,
                    redirectTo: options.redirectTo,
                    xform: _userResponse,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Generates email links and OTPs to be sent via a custom email provider.
     * @param email The user's email.
     * @param options.password User password. For signup only.
     * @param options.data Optional user metadata. For signup only.
     * @param options.redirectTo The redirect url which should be appended to the generated link
     */
    generateLink(params) {
        return __awaiter$2(this, void 0, void 0, function* () {
            try {
                const { options } = params, rest = __rest(params, ["options"]);
                const body = Object.assign(Object.assign({}, rest), options);
                if ('newEmail' in rest) {
                    // replace newEmail with new_email in request body
                    body.new_email = rest === null || rest === void 0 ? void 0 : rest.newEmail;
                    delete body['newEmail'];
                }
                return yield _request(this.fetch, 'POST', `${this.url}/admin/generate_link`, {
                    body: body,
                    headers: this.headers,
                    xform: _generateLinkResponse,
                    redirectTo: options === null || options === void 0 ? void 0 : options.redirectTo,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return {
                        data: {
                            properties: null,
                            user: null,
                        },
                        error,
                    };
                }
                throw error;
            }
        });
    }
    // User Admin API
    /**
     * Creates a new user.
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    createUser(attributes) {
        return __awaiter$2(this, void 0, void 0, function* () {
            try {
                return yield _request(this.fetch, 'POST', `${this.url}/admin/users`, {
                    body: attributes,
                    headers: this.headers,
                    xform: _userResponse,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Get a list of users.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
     */
    listUsers(params) {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter$2(this, void 0, void 0, function* () {
            try {
                const pagination = { nextPage: null, lastPage: 0, total: 0 };
                const response = yield _request(this.fetch, 'GET', `${this.url}/admin/users`, {
                    headers: this.headers,
                    noResolveJson: true,
                    query: {
                        page: (_b = (_a = params === null || params === void 0 ? void 0 : params.page) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '',
                        per_page: (_d = (_c = params === null || params === void 0 ? void 0 : params.perPage) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '',
                    },
                    xform: _noResolveJsonResponse,
                });
                if (response.error)
                    throw response.error;
                const users = yield response.json();
                const total = (_e = response.headers.get('x-total-count')) !== null && _e !== void 0 ? _e : 0;
                const links = (_g = (_f = response.headers.get('link')) === null || _f === void 0 ? void 0 : _f.split(',')) !== null && _g !== void 0 ? _g : [];
                if (links.length > 0) {
                    links.forEach((link) => {
                        const page = parseInt(link.split(';')[0].split('=')[1].substring(0, 1));
                        const rel = JSON.parse(link.split(';')[1].split('=')[1]);
                        pagination[`${rel}Page`] = page;
                    });
                    pagination.total = parseInt(total);
                }
                return { data: Object.assign(Object.assign({}, users), pagination), error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { users: [] }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Get user by id.
     *
     * @param uid The user's unique identifier
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    getUserById(uid) {
        return __awaiter$2(this, void 0, void 0, function* () {
            try {
                return yield _request(this.fetch, 'GET', `${this.url}/admin/users/${uid}`, {
                    headers: this.headers,
                    xform: _userResponse,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Updates the user data.
     *
     * @param attributes The data you want to update.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    updateUserById(uid, attributes) {
        return __awaiter$2(this, void 0, void 0, function* () {
            try {
                return yield _request(this.fetch, 'PUT', `${this.url}/admin/users/${uid}`, {
                    body: attributes,
                    headers: this.headers,
                    xform: _userResponse,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Delete a user. Requires a `service_role` key.
     *
     * @param id The user id you want to remove.
     * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema.
     * Defaults to false for backward compatibility.
     *
     * This function should only be called on a server. Never expose your `service_role` key in the browser.
     */
    deleteUser(id, shouldSoftDelete = false) {
        return __awaiter$2(this, void 0, void 0, function* () {
            try {
                return yield _request(this.fetch, 'DELETE', `${this.url}/admin/users/${id}`, {
                    headers: this.headers,
                    body: {
                        should_soft_delete: shouldSoftDelete,
                    },
                    xform: _userResponse,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null }, error };
                }
                throw error;
            }
        });
    }
    _listFactors(params) {
        return __awaiter$2(this, void 0, void 0, function* () {
            try {
                const { data, error } = yield _request(this.fetch, 'GET', `${this.url}/admin/users/${params.userId}/factors`, {
                    headers: this.headers,
                    xform: (factors) => {
                        return { data: { factors }, error: null };
                    },
                });
                return { data, error };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    _deleteFactor(params) {
        return __awaiter$2(this, void 0, void 0, function* () {
            try {
                const data = yield _request(this.fetch, 'DELETE', `${this.url}/admin/users/${params.userId}/factors/${params.id}`, {
                    headers: this.headers,
                });
                return { data, error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
}// Generated by genversion.
const version = '2.38.0';const GOTRUE_URL = 'http://localhost:9999';
const STORAGE_KEY = 'supabase.auth.token';
const DEFAULT_HEADERS = { 'X-Client-Info': `gotrue-js/${version}` };
const EXPIRY_MARGIN = 10; // in seconds
const localStorageAdapter = {
    getItem: (key) => {
        if (!supportsLocalStorage()) {
            return null;
        }
        return globalThis.localStorage.getItem(key);
    },
    setItem: (key, value) => {
        if (!supportsLocalStorage()) {
            return;
        }
        globalThis.localStorage.setItem(key, value);
    },
    removeItem: (key) => {
        if (!supportsLocalStorage()) {
            return;
        }
        globalThis.localStorage.removeItem(key);
    },
};/**
 * https://mathiasbynens.be/notes/globalthis
 */
function polyfillGlobalThis() {
    if (typeof globalThis === 'object')
        return;
    try {
        Object.defineProperty(Object.prototype, '__magic__', {
            get: function () {
                return this;
            },
            configurable: true,
        });
        // @ts-expect-error 'Allow access to magic'
        __magic__.globalThis = __magic__;
        // @ts-expect-error 'Allow access to magic'
        delete Object.prototype.__magic__;
    }
    catch (e) {
        if (typeof self !== 'undefined') {
            // @ts-expect-error 'Allow access to globals'
            self.globalThis = self;
        }
    }
}var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
polyfillGlobalThis(); // Make "globalThis" available
const DEFAULT_OPTIONS = {
    url: GOTRUE_URL,
    storageKey: STORAGE_KEY,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    headers: DEFAULT_HEADERS,
    flowType: 'implicit',
    debug: false,
};
/** Current session will be checked for refresh at this interval. */
const AUTO_REFRESH_TICK_DURATION = 30 * 1000;
/**
 * A token refresh will be attempted this many ticks before the current session expires. */
const AUTO_REFRESH_TICK_THRESHOLD = 3;
class GoTrueClient {
    /**
     * Create a new client for use in the browser.
     */
    constructor(options) {
        var _a;
        this.stateChangeEmitters = new Map();
        this.autoRefreshTicker = null;
        this.visibilityChangedCallback = null;
        this.refreshingDeferred = null;
        /**
         * Keeps track of the async client initialization.
         * When null or not yet resolved the auth state is `unknown`
         * Once resolved the the auth state is known and it's save to call any further client methods.
         * Keep extra care to never reject or throw uncaught errors
         */
        this.initializePromise = null;
        this.detectSessionInUrl = true;
        /**
         * Used to broadcast state change events to other tabs listening.
         */
        this.broadcastChannel = null;
        this.instanceID = GoTrueClient.nextInstanceID;
        GoTrueClient.nextInstanceID += 1;
        if (this.instanceID > 0 && isBrowser()) {
            console.warn('Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.');
        }
        const settings = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
        this.logDebugMessages = settings.debug;
        this.inMemorySession = null;
        this.storageKey = settings.storageKey;
        this.autoRefreshToken = settings.autoRefreshToken;
        this.persistSession = settings.persistSession;
        this.storage = settings.storage || localStorageAdapter;
        this.admin = new GoTrueAdminApi({
            url: settings.url,
            headers: settings.headers,
            fetch: settings.fetch,
        });
        this.url = settings.url;
        this.headers = settings.headers;
        this.fetch = resolveFetch(settings.fetch);
        this.detectSessionInUrl = settings.detectSessionInUrl;
        this.flowType = settings.flowType;
        this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
        };
        if (this.persistSession && this.storage === localStorageAdapter && !supportsLocalStorage()) {
            console.warn(`No storage option exists to persist the session, which may result in unexpected behavior when using auth.
        If you want to set persistSession to true, please provide a storage option or you may set persistSession to false to disable this warning.`);
        }
        if (isBrowser() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
            }
            catch (e) {
                console.error('Failed to create a new BroadcastChannel, multi-tab state changes will not be available', e);
            }
            (_a = this.broadcastChannel) === null || _a === void 0 ? void 0 : _a.addEventListener('message', (event) => __awaiter$1(this, void 0, void 0, function* () {
                this._debug('received broadcast notification from other tab or client', event);
                yield this._notifyAllSubscribers(event.data.event, event.data.session, false); // broadcast = false so we don't get an endless loop of messages
            }));
        }
        this.initialize();
    }
    _debug(...args) {
        if (this.logDebugMessages) {
            console.log(`GoTrueClient@${this.instanceID} ${new Date().toISOString()}`, ...args);
        }
        return this;
    }
    /**
     * Initializes the client session either from the url or from storage.
     * This method is automatically called when instantiating the client, but should also be called
     * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
     */
    initialize() {
        if (!this.initializePromise) {
            this.initializePromise = this._initialize();
        }
        return this.initializePromise;
    }
    /**
     * IMPORTANT:
     * 1. Never throw in this method, as it is called from the constructor
     * 2. Never return a session from this method as it would be cached over
     *    the whole lifetime of the client
     */
    _initialize() {
        return __awaiter$1(this, void 0, void 0, function* () {
            if (this.initializePromise) {
                return this.initializePromise;
            }
            try {
                const isPKCEFlow = isBrowser() ? yield this._isPKCEFlow() : false;
                this._debug('#_initialize()', 'begin', 'is PKCE flow', isPKCEFlow);
                if (isPKCEFlow || (this.detectSessionInUrl && this._isImplicitGrantFlow())) {
                    const { data, error } = yield this._getSessionFromUrl(isPKCEFlow);
                    if (error) {
                        this._debug('#_initialize()', 'error detecting session from URL', error);
                        // failed login attempt via url,
                        // remove old session as in verifyOtp, signUp and signInWith*
                        yield this._removeSession();
                        return { error };
                    }
                    const { session, redirectType } = data;
                    this._debug('#_initialize()', 'detected session in URL', session, 'redirect type', redirectType);
                    yield this._saveSession(session);
                    setTimeout(() => __awaiter$1(this, void 0, void 0, function* () {
                        if (redirectType === 'recovery') {
                            yield this._notifyAllSubscribers('PASSWORD_RECOVERY', session);
                        }
                        else {
                            yield this._notifyAllSubscribers('SIGNED_IN', session);
                        }
                    }), 0);
                    return { error: null };
                }
                // no login attempt via callback url try to recover session from storage
                yield this._recoverAndRefresh();
                return { error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { error };
                }
                return {
                    error: new AuthUnknownError('Unexpected error during initialization', error),
                };
            }
            finally {
                yield this._handleVisibilityChange();
                this._debug('#_initialize()', 'end');
            }
        });
    }
    /**
     * Creates a new user.
     *
     * Be aware that if a user account exists in the system you may get back an
     * error message that attempts to hide this information from the user.
     * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
     *
     * @returns A logged-in session if the server has "autoconfirm" ON
     * @returns A user if the server has "autoconfirm" OFF
     */
    signUp(credentials) {
        var _a, _b, _c;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                yield this._removeSession();
                let res;
                if ('email' in credentials) {
                    const { email, password, options } = credentials;
                    let codeChallenge = null;
                    let codeChallengeMethod = null;
                    if (this.flowType === 'pkce') {
                        const codeVerifier = generatePKCEVerifier();
                        yield setItemAsync(this.storage, `${this.storageKey}-code-verifier`, codeVerifier);
                        codeChallenge = yield generatePKCEChallenge(codeVerifier);
                        codeChallengeMethod = codeVerifier === codeChallenge ? 'plain' : 's256';
                    }
                    res = yield _request(this.fetch, 'POST', `${this.url}/signup`, {
                        headers: this.headers,
                        redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                        body: {
                            email,
                            password,
                            data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
                            code_challenge: codeChallenge,
                            code_challenge_method: codeChallengeMethod,
                        },
                        xform: _sessionResponse,
                    });
                }
                else if ('phone' in credentials) {
                    const { phone, password, options } = credentials;
                    res = yield _request(this.fetch, 'POST', `${this.url}/signup`, {
                        headers: this.headers,
                        body: {
                            phone,
                            password,
                            data: (_b = options === null || options === void 0 ? void 0 : options.data) !== null && _b !== void 0 ? _b : {},
                            channel: (_c = options === null || options === void 0 ? void 0 : options.channel) !== null && _c !== void 0 ? _c : 'sms',
                            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
                        },
                        xform: _sessionResponse,
                    });
                }
                else {
                    throw new AuthInvalidCredentialsError('You must provide either an email or phone number and a password');
                }
                const { data, error } = res;
                if (error || !data) {
                    return { data: { user: null, session: null }, error: error };
                }
                const session = data.session;
                const user = data.user;
                if (data.session) {
                    yield this._saveSession(data.session);
                    yield this._notifyAllSubscribers('SIGNED_IN', session);
                }
                return { data: { user, session }, error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null, session: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Log in an existing user with an email and password or phone and password.
     *
     * Be aware that you may get back an error message that will not distinguish
     * between the cases where the account does not exist or that the
     * email/phone and password combination is wrong or that the account can only
     * be accessed via social login.
     */
    signInWithPassword(credentials) {
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                yield this._removeSession();
                let res;
                if ('email' in credentials) {
                    const { email, password, options } = credentials;
                    res = yield _request(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
                        headers: this.headers,
                        body: {
                            email,
                            password,
                            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
                        },
                        xform: _sessionResponse,
                    });
                }
                else if ('phone' in credentials) {
                    const { phone, password, options } = credentials;
                    res = yield _request(this.fetch, 'POST', `${this.url}/token?grant_type=password`, {
                        headers: this.headers,
                        body: {
                            phone,
                            password,
                            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
                        },
                        xform: _sessionResponse,
                    });
                }
                else {
                    throw new AuthInvalidCredentialsError('You must provide either an email or phone number and a password');
                }
                const { data, error } = res;
                if (error) {
                    return { data: { user: null, session: null }, error };
                }
                else if (!data || !data.session || !data.user) {
                    return { data: { user: null, session: null }, error: new AuthInvalidTokenResponseError() };
                }
                if (data.session) {
                    yield this._saveSession(data.session);
                    yield this._notifyAllSubscribers('SIGNED_IN', data.session);
                }
                return { data: { user: data.user, session: data.session }, error };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null, session: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Log in an existing user via a third-party provider.
     * This method supports the PKCE flow.
     */
    signInWithOAuth(credentials) {
        var _a, _b, _c, _d;
        return __awaiter$1(this, void 0, void 0, function* () {
            yield this._removeSession();
            return yield this._handleProviderSignIn(credentials.provider, {
                redirectTo: (_a = credentials.options) === null || _a === void 0 ? void 0 : _a.redirectTo,
                scopes: (_b = credentials.options) === null || _b === void 0 ? void 0 : _b.scopes,
                queryParams: (_c = credentials.options) === null || _c === void 0 ? void 0 : _c.queryParams,
                skipBrowserRedirect: (_d = credentials.options) === null || _d === void 0 ? void 0 : _d.skipBrowserRedirect,
            });
        });
    }
    /**
     * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
     */
    exchangeCodeForSession(authCode) {
        return __awaiter$1(this, void 0, void 0, function* () {
            const codeVerifier = yield getItemAsync(this.storage, `${this.storageKey}-code-verifier`);
            const { data, error } = yield _request(this.fetch, 'POST', `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: {
                    auth_code: authCode,
                    code_verifier: codeVerifier,
                },
                xform: _sessionResponse,
            });
            yield removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
            if (error) {
                return { data: { user: null, session: null }, error };
            }
            else if (!data || !data.session || !data.user) {
                return { data: { user: null, session: null }, error: new AuthInvalidTokenResponseError() };
            }
            if (data.session) {
                yield this._saveSession(data.session);
                yield this._notifyAllSubscribers('SIGNED_IN', data.session);
            }
            return { data, error };
        });
    }
    /**
     * Allows signing in with an OIDC ID token. The authentication provider used
     * should be enabled and configured.
     */
    signInWithIdToken(credentials) {
        return __awaiter$1(this, void 0, void 0, function* () {
            yield this._removeSession();
            try {
                const { options, provider, token, access_token, nonce } = credentials;
                const res = yield _request(this.fetch, 'POST', `${this.url}/token?grant_type=id_token`, {
                    headers: this.headers,
                    body: {
                        provider,
                        id_token: token,
                        access_token,
                        nonce,
                        gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
                    },
                    xform: _sessionResponse,
                });
                const { data, error } = res;
                if (error) {
                    return { data: { user: null, session: null }, error };
                }
                else if (!data || !data.session || !data.user) {
                    return {
                        data: { user: null, session: null },
                        error: new AuthInvalidTokenResponseError(),
                    };
                }
                if (data.session) {
                    yield this._saveSession(data.session);
                    yield this._notifyAllSubscribers('SIGNED_IN', data.session);
                }
                return { data, error };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null, session: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Log in a user using magiclink or a one-time password (OTP).
     *
     * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
     * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
     * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
     *
     * Be aware that you may get back an error message that will not distinguish
     * between the cases where the account does not exist or, that the account
     * can only be accessed via social login.
     *
     * Do note that you will need to configure a Whatsapp sender on Twilio
     * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
     * channel is not supported on other providers
     * at this time.
     * This method supports PKCE when an email is passed.
     */
    signInWithOtp(credentials) {
        var _a, _b, _c, _d, _e;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                yield this._removeSession();
                if ('email' in credentials) {
                    const { email, options } = credentials;
                    let codeChallenge = null;
                    let codeChallengeMethod = null;
                    if (this.flowType === 'pkce') {
                        const codeVerifier = generatePKCEVerifier();
                        yield setItemAsync(this.storage, `${this.storageKey}-code-verifier`, codeVerifier);
                        codeChallenge = yield generatePKCEChallenge(codeVerifier);
                        codeChallengeMethod = codeVerifier === codeChallenge ? 'plain' : 's256';
                    }
                    const { error } = yield _request(this.fetch, 'POST', `${this.url}/otp`, {
                        headers: this.headers,
                        body: {
                            email,
                            data: (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : {},
                            create_user: (_b = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _b !== void 0 ? _b : true,
                            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
                            code_challenge: codeChallenge,
                            code_challenge_method: codeChallengeMethod,
                        },
                        redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                    });
                    return { data: { user: null, session: null }, error };
                }
                if ('phone' in credentials) {
                    const { phone, options } = credentials;
                    const { data, error } = yield _request(this.fetch, 'POST', `${this.url}/otp`, {
                        headers: this.headers,
                        body: {
                            phone,
                            data: (_c = options === null || options === void 0 ? void 0 : options.data) !== null && _c !== void 0 ? _c : {},
                            create_user: (_d = options === null || options === void 0 ? void 0 : options.shouldCreateUser) !== null && _d !== void 0 ? _d : true,
                            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
                            channel: (_e = options === null || options === void 0 ? void 0 : options.channel) !== null && _e !== void 0 ? _e : 'sms',
                        },
                    });
                    return { data: { user: null, session: null, messageId: data === null || data === void 0 ? void 0 : data.message_id }, error };
                }
                throw new AuthInvalidCredentialsError('You must provide either an email or phone number.');
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null, session: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Log in a user given a User supplied OTP received via mobile.
     */
    verifyOtp(params) {
        var _a, _b;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                if (params.type !== 'email_change' && params.type !== 'phone_change') {
                    // we don't want to remove the authenticated session if the user is performing an email_change or phone_change verification
                    yield this._removeSession();
                }
                const { data, error } = yield _request(this.fetch, 'POST', `${this.url}/verify`, {
                    headers: this.headers,
                    body: Object.assign(Object.assign({}, params), { gotrue_meta_security: { captcha_token: (_a = params.options) === null || _a === void 0 ? void 0 : _a.captchaToken } }),
                    redirectTo: (_b = params.options) === null || _b === void 0 ? void 0 : _b.redirectTo,
                    xform: _sessionResponse,
                });
                if (error) {
                    throw error;
                }
                if (!data) {
                    throw new Error('An error occurred on token verification.');
                }
                const session = data.session;
                const user = data.user;
                if (session === null || session === void 0 ? void 0 : session.access_token) {
                    yield this._saveSession(session);
                    yield this._notifyAllSubscribers('SIGNED_IN', session);
                }
                return { data: { user, session }, error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null, session: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Attempts a single-sign on using an enterprise Identity Provider. A
     * successful SSO attempt will redirect the current page to the identity
     * provider authorization page. The redirect URL is implementation and SSO
     * protocol specific.
     *
     * You can use it by providing a SSO domain. Typically you can extract this
     * domain by asking users for their email address. If this domain is
     * registered on the Auth instance the redirect will use that organization's
     * currently active SSO Identity Provider for the login.
     *
     * If you have built an organization-specific login page, you can use the
     * organization's SSO Identity Provider UUID directly instead.
     */
    signInWithSSO(params) {
        var _a, _b, _c;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                yield this._removeSession();
                return yield _request(this.fetch, 'POST', `${this.url}/sso`, {
                    body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ('providerId' in params ? { provider_id: params.providerId } : null)), ('domain' in params ? { domain: params.domain } : null)), { redirect_to: (_b = (_a = params.options) === null || _a === void 0 ? void 0 : _a.redirectTo) !== null && _b !== void 0 ? _b : undefined }), (((_c = params === null || params === void 0 ? void 0 : params.options) === null || _c === void 0 ? void 0 : _c.captchaToken)
                        ? { gotrue_meta_security: { captcha_token: params.options.captchaToken } }
                        : null)), { skip_http_redirect: true }),
                    headers: this.headers,
                    xform: _ssoResponse,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Sends a reauthentication OTP to the user's email or phone number.
     * Requires the user to be signed-in.
     */
    reauthenticate() {
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                const { data: { session }, error: sessionError, } = yield this.getSession();
                if (sessionError)
                    throw sessionError;
                if (!session)
                    throw new AuthSessionMissingError();
                const { error } = yield _request(this.fetch, 'GET', `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: session.access_token,
                });
                return { data: { user: null, session: null }, error };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null, session: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
     */
    resend(credentials) {
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                yield this._removeSession();
                const endpoint = `${this.url}/resend`;
                if ('email' in credentials) {
                    const { email, type, options } = credentials;
                    const { error } = yield _request(this.fetch, 'POST', endpoint, {
                        headers: this.headers,
                        body: {
                            email,
                            type,
                            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
                        },
                    });
                    return { data: { user: null, session: null }, error };
                }
                else if ('phone' in credentials) {
                    const { phone, type, options } = credentials;
                    const { data, error } = yield _request(this.fetch, 'POST', endpoint, {
                        headers: this.headers,
                        body: {
                            phone,
                            type,
                            gotrue_meta_security: { captcha_token: options === null || options === void 0 ? void 0 : options.captchaToken },
                        },
                    });
                    return { data: { user: null, session: null, messageId: data === null || data === void 0 ? void 0 : data.message_id }, error };
                }
                throw new AuthInvalidCredentialsError('You must provide either an email or phone number and a type');
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null, session: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Returns the session, refreshing it if necessary.
     * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
     */
    getSession() {
        return __awaiter$1(this, void 0, void 0, function* () {
            // make sure we've read the session from the url if there is one
            // save to just await, as long we make sure _initialize() never throws
            yield this.initializePromise;
            this._debug('#getSession()', 'begin');
            try {
                let currentSession = null;
                if (this.persistSession) {
                    const maybeSession = yield getItemAsync(this.storage, this.storageKey);
                    this._debug('#getSession()', 'session from storage', maybeSession);
                    if (maybeSession !== null) {
                        if (this._isValidSession(maybeSession)) {
                            currentSession = maybeSession;
                        }
                        else {
                            this._debug('#getSession()', 'session from storage is not valid');
                            yield this._removeSession();
                        }
                    }
                }
                else {
                    currentSession = this.inMemorySession;
                    this._debug('#getSession()', 'session from memory', currentSession);
                }
                if (!currentSession) {
                    return { data: { session: null }, error: null };
                }
                const hasExpired = currentSession.expires_at
                    ? currentSession.expires_at <= Date.now() / 1000
                    : false;
                this._debug('#getSession()', `session has${hasExpired ? '' : ' not'} expired`, 'expires_at', currentSession.expires_at);
                if (!hasExpired) {
                    return { data: { session: currentSession }, error: null };
                }
                const { session, error } = yield this._callRefreshToken(currentSession.refresh_token);
                if (error) {
                    return { data: { session: null }, error };
                }
                return { data: { session }, error: null };
            }
            finally {
                this._debug('#getSession()', 'end');
            }
        });
    }
    /**
     * Gets the current user details if there is an existing session.
     * @param jwt Takes in an optional access token jwt. If no jwt is provided, getUser() will attempt to get the jwt from the current session.
     */
    getUser(jwt) {
        var _a, _b;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                if (!jwt) {
                    const { data, error } = yield this.getSession();
                    if (error) {
                        throw error;
                    }
                    // Default to Authorization header if there is no existing session
                    jwt = (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : undefined;
                }
                return yield _request(this.fetch, 'GET', `${this.url}/user`, {
                    headers: this.headers,
                    jwt: jwt,
                    xform: _userResponse,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Updates user data for a logged in user.
     */
    updateUser(attributes, options = {}) {
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                const { data: sessionData, error: sessionError } = yield this.getSession();
                if (sessionError) {
                    throw sessionError;
                }
                if (!sessionData.session) {
                    throw new AuthSessionMissingError();
                }
                const session = sessionData.session;
                const { data, error: userError } = yield _request(this.fetch, 'PUT', `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: options === null || options === void 0 ? void 0 : options.emailRedirectTo,
                    body: attributes,
                    jwt: session.access_token,
                    xform: _userResponse,
                });
                if (userError)
                    throw userError;
                session.user = data.user;
                yield this._saveSession(session);
                yield this._notifyAllSubscribers('USER_UPDATED', session);
                return { data: { user: session.user }, error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Decodes a JWT (without performing any validation).
     */
    _decodeJWT(jwt) {
        return decodeJWTPayload(jwt);
    }
    /**
     * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
     * If the refresh token or access token in the current session is invalid, an error will be thrown.
     * @param currentSession The current session that minimally contains an access token and refresh token.
     */
    setSession(currentSession) {
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                if (!currentSession.access_token || !currentSession.refresh_token) {
                    throw new AuthSessionMissingError();
                }
                const timeNow = Date.now() / 1000;
                let expiresAt = timeNow;
                let hasExpired = true;
                let session = null;
                const payload = decodeJWTPayload(currentSession.access_token);
                if (payload.exp) {
                    expiresAt = payload.exp;
                    hasExpired = expiresAt <= timeNow;
                }
                if (hasExpired) {
                    const { session: refreshedSession, error } = yield this._callRefreshToken(currentSession.refresh_token);
                    if (error) {
                        return { data: { user: null, session: null }, error: error };
                    }
                    if (!refreshedSession) {
                        return { data: { user: null, session: null }, error: null };
                    }
                    session = refreshedSession;
                }
                else {
                    const { data, error } = yield this.getUser(currentSession.access_token);
                    if (error) {
                        throw error;
                    }
                    session = {
                        access_token: currentSession.access_token,
                        refresh_token: currentSession.refresh_token,
                        user: data.user,
                        token_type: 'bearer',
                        expires_in: expiresAt - timeNow,
                        expires_at: expiresAt,
                    };
                    yield this._saveSession(session);
                    yield this._notifyAllSubscribers('SIGNED_IN', session);
                }
                return { data: { user: session.user, session }, error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { session: null, user: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Returns a new session, regardless of expiry status.
     * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
     * If the current session's refresh token is invalid, an error will be thrown.
     * @param currentSession The current session. If passed in, it must contain a refresh token.
     */
    refreshSession(currentSession) {
        var _a;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                if (!currentSession) {
                    const { data, error } = yield this.getSession();
                    if (error) {
                        throw error;
                    }
                    currentSession = (_a = data.session) !== null && _a !== void 0 ? _a : undefined;
                }
                if (!(currentSession === null || currentSession === void 0 ? void 0 : currentSession.refresh_token)) {
                    throw new AuthSessionMissingError();
                }
                const { session, error } = yield this._callRefreshToken(currentSession.refresh_token);
                if (error) {
                    return { data: { user: null, session: null }, error: error };
                }
                if (!session) {
                    return { data: { user: null, session: null }, error: null };
                }
                return { data: { user: session.user, session }, error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { user: null, session: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Gets the session data from a URL string
     */
    _getSessionFromUrl(isPKCEFlow) {
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                if (!isBrowser())
                    throw new AuthImplicitGrantRedirectError('No browser detected.');
                if (this.flowType === 'implicit' && !this._isImplicitGrantFlow()) {
                    throw new AuthImplicitGrantRedirectError('Not a valid implicit grant flow url.');
                }
                else if (this.flowType == 'pkce' && !isPKCEFlow) {
                    throw new AuthPKCEGrantCodeExchangeError('Not a valid PKCE flow url.');
                }
                if (isPKCEFlow) {
                    const authCode = getParameterByName('code');
                    if (!authCode)
                        throw new AuthPKCEGrantCodeExchangeError('No code detected.');
                    const { data, error } = yield this.exchangeCodeForSession(authCode);
                    if (error)
                        throw error;
                    if (!data.session)
                        throw new AuthPKCEGrantCodeExchangeError('No session detected.');
                    let url = new URL(window.location.href);
                    url.searchParams.delete('code');
                    window.history.replaceState(window.history.state, '', url.toString());
                    return { data: { session: data.session, redirectType: null }, error: null };
                }
                const error_description = getParameterByName('error_description');
                if (error_description) {
                    const error_code = getParameterByName('error_code');
                    if (!error_code)
                        throw new AuthImplicitGrantRedirectError('No error_code detected.');
                    const error = getParameterByName('error');
                    if (!error)
                        throw new AuthImplicitGrantRedirectError('No error detected.');
                    throw new AuthImplicitGrantRedirectError(error_description, { error, code: error_code });
                }
                const provider_token = getParameterByName('provider_token');
                const provider_refresh_token = getParameterByName('provider_refresh_token');
                const access_token = getParameterByName('access_token');
                if (!access_token)
                    throw new AuthImplicitGrantRedirectError('No access_token detected.');
                const expires_in = getParameterByName('expires_in');
                if (!expires_in)
                    throw new AuthImplicitGrantRedirectError('No expires_in detected.');
                const refresh_token = getParameterByName('refresh_token');
                if (!refresh_token)
                    throw new AuthImplicitGrantRedirectError('No refresh_token detected.');
                const token_type = getParameterByName('token_type');
                if (!token_type)
                    throw new AuthImplicitGrantRedirectError('No token_type detected.');
                const timeNow = Math.round(Date.now() / 1000);
                const expires_at = timeNow + parseInt(expires_in);
                const { data, error } = yield this.getUser(access_token);
                if (error)
                    throw error;
                const user = data.user;
                const session = {
                    provider_token,
                    provider_refresh_token,
                    access_token,
                    expires_in: parseInt(expires_in),
                    expires_at,
                    refresh_token,
                    token_type,
                    user,
                };
                const redirectType = getParameterByName('type');
                // Remove tokens from URL
                window.location.hash = '';
                this._debug('#_getSessionFromUrl()', 'clearing window.location.hash');
                return { data: { session, redirectType }, error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: { session: null, redirectType: null }, error };
                }
                throw error;
            }
        });
    }
    /**
     * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
     */
    _isImplicitGrantFlow() {
        return (isBrowser() &&
            (Boolean(getParameterByName('access_token')) ||
                Boolean(getParameterByName('error_description'))));
    }
    /**
     * Checks if the current URL and backing storage contain parameters given by a PKCE flow
     */
    _isPKCEFlow() {
        return __awaiter$1(this, void 0, void 0, function* () {
            const currentStorageContent = yield getItemAsync(this.storage, `${this.storageKey}-code-verifier`);
            return Boolean(getParameterByName('code')) && Boolean(currentStorageContent);
        });
    }
    /**
     * Inside a browser context, `signOut()` will remove the logged in user from the browser session
     * and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
     *
     * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
     * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
     */
    signOut() {
        var _a;
        return __awaiter$1(this, void 0, void 0, function* () {
            const { data, error: sessionError } = yield this.getSession();
            if (sessionError) {
                return { error: sessionError };
            }
            const accessToken = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token;
            if (accessToken) {
                const { error } = yield this.admin.signOut(accessToken);
                if (error) {
                    // ignore 404s since user might not exist anymore
                    // ignore 401s since an invalid or expired JWT should sign out the current session
                    if (!(isAuthApiError(error) && (error.status === 404 || error.status === 401))) {
                        return { error };
                    }
                }
            }
            yield this._removeSession();
            yield removeItemAsync(this.storage, `${this.storageKey}-code-verifier`);
            yield this._notifyAllSubscribers('SIGNED_OUT', null);
            return { error: null };
        });
    }
    /**
     * Receive a notification every time an auth event happens.
     * @param callback A callback function to be invoked when an auth event happens.
     */
    onAuthStateChange(callback) {
        const id = uuid();
        const subscription = {
            id,
            callback,
            unsubscribe: () => {
                this._debug('#unsubscribe()', 'state change callback with id removed', id);
                this.stateChangeEmitters.delete(id);
            },
        };
        this._debug('#onAuthStateChange()', 'registered callback with id', id);
        this.stateChangeEmitters.set(id, subscription);
        this._emitInitialSession(id);
        return { data: { subscription } };
    }
    _emitInitialSession(id) {
        var _a, _b;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                const { data: { session }, error, } = yield this.getSession();
                if (error)
                    throw error;
                yield ((_a = this.stateChangeEmitters.get(id)) === null || _a === void 0 ? void 0 : _a.callback('INITIAL_SESSION', session));
                this._debug('INITIAL_SESSION', 'callback id', id, 'session', session);
            }
            catch (err) {
                yield ((_b = this.stateChangeEmitters.get(id)) === null || _b === void 0 ? void 0 : _b.callback('INITIAL_SESSION', null));
                this._debug('INITIAL_SESSION', 'callback id', id, 'error', err);
                console.error(err);
            }
        });
    }
    /**
     * Sends a password reset request to an email address.
     * This method supports the PKCE flow.
     * @param email The email address of the user.
     * @param options.redirectTo The URL to send the user to after they click the password reset link.
     * @param options.captchaToken Verification token received when the user completes the captcha on the site.
     */
    resetPasswordForEmail(email, options = {}) {
        return __awaiter$1(this, void 0, void 0, function* () {
            let codeChallenge = null;
            let codeChallengeMethod = null;
            if (this.flowType === 'pkce') {
                const codeVerifier = generatePKCEVerifier();
                yield setItemAsync(this.storage, `${this.storageKey}-code-verifier`, codeVerifier);
                codeChallenge = yield generatePKCEChallenge(codeVerifier);
                codeChallengeMethod = codeVerifier === codeChallenge ? 'plain' : 's256';
            }
            try {
                return yield _request(this.fetch, 'POST', `${this.url}/recover`, {
                    body: {
                        email,
                        code_challenge: codeChallenge,
                        code_challenge_method: codeChallengeMethod,
                        gotrue_meta_security: { captcha_token: options.captchaToken },
                    },
                    headers: this.headers,
                    redirectTo: options.redirectTo,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * Generates a new JWT.
     * @param refreshToken A valid refresh token that was returned on login.
     */
    _refreshAccessToken(refreshToken) {
        return __awaiter$1(this, void 0, void 0, function* () {
            const debugName = `#_refreshAccessToken(${refreshToken.substring(0, 5)}...)`;
            this._debug(debugName, 'begin');
            try {
                const startedAt = Date.now();
                // will attempt to refresh the token with exponential backoff
                return yield retryable((attempt) => __awaiter$1(this, void 0, void 0, function* () {
                    yield sleep(attempt * 200); // 0, 200, 400, 800, ...
                    this._debug(debugName, 'refreshing attempt', attempt);
                    return yield _request(this.fetch, 'POST', `${this.url}/token?grant_type=refresh_token`, {
                        body: { refresh_token: refreshToken },
                        headers: this.headers,
                        xform: _sessionResponse,
                    });
                }), (attempt, _, result) => result &&
                    result.error &&
                    isAuthRetryableFetchError(result.error) &&
                    // retryable only if the request can be sent before the backoff overflows the tick duration
                    Date.now() + (attempt + 1) * 200 - startedAt < AUTO_REFRESH_TICK_DURATION);
            }
            catch (error) {
                this._debug(debugName, 'error', error);
                if (isAuthError(error)) {
                    return { data: { session: null, user: null }, error };
                }
                throw error;
            }
            finally {
                this._debug(debugName, 'end');
            }
        });
    }
    _isValidSession(maybeSession) {
        const isValidSession = typeof maybeSession === 'object' &&
            maybeSession !== null &&
            'access_token' in maybeSession &&
            'refresh_token' in maybeSession &&
            'expires_at' in maybeSession;
        return isValidSession;
    }
    _handleProviderSignIn(provider, options) {
        return __awaiter$1(this, void 0, void 0, function* () {
            const url = yield this._getUrlForProvider(provider, {
                redirectTo: options.redirectTo,
                scopes: options.scopes,
                queryParams: options.queryParams,
            });
            this._debug('#_handleProviderSignIn()', 'provider', provider, 'options', options, 'url', url);
            // try to open on the browser
            if (isBrowser() && !options.skipBrowserRedirect) {
                window.location.assign(url);
            }
            return { data: { provider, url }, error: null };
        });
    }
    /**
     * Recovers the session from LocalStorage and refreshes
     * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
     */
    _recoverAndRefresh() {
        var _a;
        return __awaiter$1(this, void 0, void 0, function* () {
            const debugName = '#_recoverAndRefresh()';
            this._debug(debugName, 'begin');
            try {
                const currentSession = yield getItemAsync(this.storage, this.storageKey);
                this._debug(debugName, 'session from storage', currentSession);
                if (!this._isValidSession(currentSession)) {
                    this._debug(debugName, 'session is not valid');
                    if (currentSession !== null) {
                        yield this._removeSession();
                    }
                    return;
                }
                const timeNow = Math.round(Date.now() / 1000);
                const expiresWithMargin = ((_a = currentSession.expires_at) !== null && _a !== void 0 ? _a : Infinity) < timeNow + EXPIRY_MARGIN;
                this._debug(debugName, `session has${expiresWithMargin ? '' : ' not'} expired with margin of ${EXPIRY_MARGIN}s`);
                if (expiresWithMargin) {
                    if (this.autoRefreshToken && currentSession.refresh_token) {
                        const { error } = yield this._callRefreshToken(currentSession.refresh_token);
                        if (error) {
                            console.error(error);
                            if (!isAuthRetryableFetchError(error)) {
                                this._debug(debugName, 'refresh failed with a non-retryable error, removing the session', error);
                                yield this._removeSession();
                            }
                        }
                    }
                }
                else {
                    // no need to persist currentSession again, as we just loaded it from
                    // local storage; persisting it again may overwrite a value saved by
                    // another client with access to the same local storage
                    yield this._notifyAllSubscribers('SIGNED_IN', currentSession);
                }
            }
            catch (err) {
                this._debug(debugName, 'error', err);
                console.error(err);
                return;
            }
            finally {
                this._debug(debugName, 'end');
            }
        });
    }
    _callRefreshToken(refreshToken) {
        var _a, _b;
        return __awaiter$1(this, void 0, void 0, function* () {
            if (!refreshToken) {
                throw new AuthSessionMissingError();
            }
            // refreshing is already in progress
            if (this.refreshingDeferred) {
                return this.refreshingDeferred.promise;
            }
            const debugName = `#_callRefreshToken(${refreshToken.substring(0, 5)}...)`;
            this._debug(debugName, 'begin');
            try {
                this.refreshingDeferred = new Deferred();
                const { data, error } = yield this._refreshAccessToken(refreshToken);
                if (error)
                    throw error;
                if (!data.session)
                    throw new AuthSessionMissingError();
                yield this._saveSession(data.session);
                yield this._notifyAllSubscribers('TOKEN_REFRESHED', data.session);
                const result = { session: data.session, error: null };
                this.refreshingDeferred.resolve(result);
                return result;
            }
            catch (error) {
                this._debug(debugName, 'error', error);
                if (isAuthError(error)) {
                    const result = { session: null, error };
                    (_a = this.refreshingDeferred) === null || _a === void 0 ? void 0 : _a.resolve(result);
                    return result;
                }
                (_b = this.refreshingDeferred) === null || _b === void 0 ? void 0 : _b.reject(error);
                throw error;
            }
            finally {
                this.refreshingDeferred = null;
                this._debug(debugName, 'end');
            }
        });
    }
    _notifyAllSubscribers(event, session, broadcast = true) {
        return __awaiter$1(this, void 0, void 0, function* () {
            const debugName = `#_notifyAllSubscribers(${event})`;
            this._debug(debugName, 'begin', session, `broadcast = ${broadcast}`);
            try {
                if (this.broadcastChannel && broadcast) {
                    this.broadcastChannel.postMessage({ event, session });
                }
                const errors = [];
                const promises = Array.from(this.stateChangeEmitters.values()).map((x) => __awaiter$1(this, void 0, void 0, function* () {
                    try {
                        yield x.callback(event, session);
                    }
                    catch (e) {
                        errors.push(e);
                    }
                }));
                yield Promise.all(promises);
                if (errors.length > 0) {
                    for (let i = 0; i < errors.length; i += 1) {
                        console.error(errors[i]);
                    }
                    throw errors[0];
                }
            }
            finally {
                this._debug(debugName, 'end');
            }
        });
    }
    /**
     * set currentSession and currentUser
     * process to _startAutoRefreshToken if possible
     */
    _saveSession(session) {
        return __awaiter$1(this, void 0, void 0, function* () {
            this._debug('#_saveSession()', session);
            if (!this.persistSession) {
                this.inMemorySession = session;
            }
            if (this.persistSession && session.expires_at) {
                yield this._persistSession(session);
            }
        });
    }
    _persistSession(currentSession) {
        this._debug('#_persistSession()', currentSession);
        return setItemAsync(this.storage, this.storageKey, currentSession);
    }
    _removeSession() {
        return __awaiter$1(this, void 0, void 0, function* () {
            this._debug('#_removeSession()');
            if (this.persistSession) {
                yield removeItemAsync(this.storage, this.storageKey);
            }
            else {
                this.inMemorySession = null;
            }
        });
    }
    /**
     * Removes any registered visibilitychange callback.
     *
     * {@see #startAutoRefresh}
     * {@see #stopAutoRefresh}
     */
    _removeVisibilityChangedCallback() {
        this._debug('#_removeVisibilityChangedCallback()');
        const callback = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            if (callback && isBrowser() && (window === null || window === void 0 ? void 0 : window.removeEventListener)) {
                window.removeEventListener('visibilitychange', callback);
            }
        }
        catch (e) {
            console.error('removing visibilitychange callback failed', e);
        }
    }
    /**
     * This is the private implementation of {@link #startAutoRefresh}. Use this
     * within the library.
     */
    _startAutoRefresh() {
        return __awaiter$1(this, void 0, void 0, function* () {
            yield this._stopAutoRefresh();
            this._debug('#_startAutoRefresh()');
            const ticker = setInterval(() => this._autoRefreshTokenTick(), AUTO_REFRESH_TICK_DURATION);
            this.autoRefreshTicker = ticker;
            if (ticker && typeof ticker === 'object' && typeof ticker.unref === 'function') {
                // ticker is a NodeJS Timeout object that has an `unref` method
                // https://nodejs.org/api/timers.html#timeoutunref
                // When auto refresh is used in NodeJS (like for testing) the
                // `setInterval` is preventing the process from being marked as
                // finished and tests run endlessly. This can be prevented by calling
                // `unref()` on the returned object.
                ticker.unref();
                // @ts-ignore
            }
            else if (typeof Deno !== 'undefined' && typeof Deno.unrefTimer === 'function') {
                // similar like for NodeJS, but with the Deno API
                // https://deno.land/api@latest?unstable&s=Deno.unrefTimer
                // @ts-ignore
                Deno.unrefTimer(ticker);
            }
            // run the tick immediately
            yield this._autoRefreshTokenTick();
        });
    }
    /**
     * This is the private implementation of {@link #stopAutoRefresh}. Use this
     * within the library.
     */
    _stopAutoRefresh() {
        return __awaiter$1(this, void 0, void 0, function* () {
            this._debug('#_stopAutoRefresh()');
            const ticker = this.autoRefreshTicker;
            this.autoRefreshTicker = null;
            if (ticker) {
                clearInterval(ticker);
            }
        });
    }
    /**
     * Starts an auto-refresh process in the background. The session is checked
     * every few seconds. Close to the time of expiration a process is started to
     * refresh the session. If refreshing fails it will be retried for as long as
     * necessary.
     *
     * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
     * to call this function, it will be called for you.
     *
     * On browsers the refresh process works only when the tab/window is in the
     * foreground to conserve resources as well as prevent race conditions and
     * flooding auth with requests. If you call this method any managed
     * visibility change callback will be removed and you must manage visibility
     * changes on your own.
     *
     * On non-browser platforms the refresh process works *continuously* in the
     * background, which may not be desirable. You should hook into your
     * platform's foreground indication mechanism and call these methods
     * appropriately to conserve resources.
     *
     * {@see #stopAutoRefresh}
     */
    startAutoRefresh() {
        return __awaiter$1(this, void 0, void 0, function* () {
            this._removeVisibilityChangedCallback();
            yield this._startAutoRefresh();
        });
    }
    /**
     * Stops an active auto refresh process running in the background (if any).
     *
     * If you call this method any managed visibility change callback will be
     * removed and you must manage visibility changes on your own.
     *
     * See {@link #startAutoRefresh} for more details.
     */
    stopAutoRefresh() {
        return __awaiter$1(this, void 0, void 0, function* () {
            this._removeVisibilityChangedCallback();
            yield this._stopAutoRefresh();
        });
    }
    /**
     * Runs the auto refresh token tick.
     */
    _autoRefreshTokenTick() {
        return __awaiter$1(this, void 0, void 0, function* () {
            this._debug('#_autoRefreshTokenTick()', 'begin');
            try {
                const now = Date.now();
                try {
                    const { data: { session }, } = yield this.getSession();
                    if (!session || !session.refresh_token || !session.expires_at) {
                        this._debug('#_autoRefreshTokenTick()', 'no session');
                        return;
                    }
                    // session will expire in this many ticks (or has already expired if <= 0)
                    const expiresInTicks = Math.floor((session.expires_at * 1000 - now) / AUTO_REFRESH_TICK_DURATION);
                    this._debug('#_autoRefreshTokenTick()', `access token expires in ${expiresInTicks} ticks, a tick lasts ${AUTO_REFRESH_TICK_DURATION}ms, refresh threshold is ${AUTO_REFRESH_TICK_THRESHOLD} ticks`);
                    if (expiresInTicks <= AUTO_REFRESH_TICK_THRESHOLD) {
                        yield this._callRefreshToken(session.refresh_token);
                    }
                }
                catch (e) {
                    console.error('Auto refresh tick failed with error. This is likely a transient error.', e);
                }
            }
            finally {
                this._debug('#_autoRefreshTokenTick()', 'end');
            }
        });
    }
    /**
     * Registers callbacks on the browser / platform, which in-turn run
     * algorithms when the browser window/tab are in foreground. On non-browser
     * platforms it assumes always foreground.
     */
    _handleVisibilityChange() {
        return __awaiter$1(this, void 0, void 0, function* () {
            this._debug('#_handleVisibilityChange()');
            if (!isBrowser() || !(window === null || window === void 0 ? void 0 : window.addEventListener)) {
                if (this.autoRefreshToken) {
                    // in non-browser environments the refresh token ticker runs always
                    this.startAutoRefresh();
                }
                return false;
            }
            try {
                this.visibilityChangedCallback = () => __awaiter$1(this, void 0, void 0, function* () { return yield this._onVisibilityChanged(false); });
                window === null || window === void 0 ? void 0 : window.addEventListener('visibilitychange', this.visibilityChangedCallback);
                // now immediately call the visbility changed callback to setup with the
                // current visbility state
                yield this._onVisibilityChanged(true); // initial call
            }
            catch (error) {
                console.error('_handleVisibilityChange', error);
            }
        });
    }
    /**
     * Callback registered with `window.addEventListener('visibilitychange')`.
     */
    _onVisibilityChanged(isInitial) {
        return __awaiter$1(this, void 0, void 0, function* () {
            this._debug(`#_onVisibilityChanged(${isInitial})`, 'visibilityState', document.visibilityState);
            if (document.visibilityState === 'visible') {
                if (!isInitial) {
                    // initial visibility change setup is handled in another flow under #initialize()
                    yield this.initializePromise;
                    yield this._recoverAndRefresh();
                    this._debug('#_onVisibilityChanged()', 'finished waiting for initialize, _recoverAndRefresh');
                }
                if (this.autoRefreshToken) {
                    // in browser environments the refresh token ticker runs only on focused tabs
                    // which prevents race conditions
                    this._startAutoRefresh();
                }
            }
            else if (document.visibilityState === 'hidden') {
                if (this.autoRefreshToken) {
                    this._stopAutoRefresh();
                }
            }
        });
    }
    /**
     * Generates the relevant login URL for a third-party provider.
     * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
     * @param options.scopes A space-separated list of scopes granted to the OAuth application.
     * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
     */
    _getUrlForProvider(provider, options) {
        return __awaiter$1(this, void 0, void 0, function* () {
            const urlParams = [`provider=${encodeURIComponent(provider)}`];
            if (options === null || options === void 0 ? void 0 : options.redirectTo) {
                urlParams.push(`redirect_to=${encodeURIComponent(options.redirectTo)}`);
            }
            if (options === null || options === void 0 ? void 0 : options.scopes) {
                urlParams.push(`scopes=${encodeURIComponent(options.scopes)}`);
            }
            if (this.flowType === 'pkce') {
                const codeVerifier = generatePKCEVerifier();
                yield setItemAsync(this.storage, `${this.storageKey}-code-verifier`, codeVerifier);
                const codeChallenge = yield generatePKCEChallenge(codeVerifier);
                const codeChallengeMethod = codeVerifier === codeChallenge ? 'plain' : 's256';
                this._debug('PKCE', 'code verifier', `${codeVerifier.substring(0, 5)}...`, 'code challenge', codeChallenge, 'method', codeChallengeMethod);
                const flowParams = new URLSearchParams({
                    code_challenge: `${encodeURIComponent(codeChallenge)}`,
                    code_challenge_method: `${encodeURIComponent(codeChallengeMethod)}`,
                });
                urlParams.push(flowParams.toString());
            }
            if (options === null || options === void 0 ? void 0 : options.queryParams) {
                const query = new URLSearchParams(options.queryParams);
                urlParams.push(query.toString());
            }
            return `${this.url}/authorize?${urlParams.join('&')}`;
        });
    }
    _unenroll(params) {
        var _a;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                const { data: sessionData, error: sessionError } = yield this.getSession();
                if (sessionError) {
                    return { data: null, error: sessionError };
                }
                return yield _request(this.fetch, 'DELETE', `${this.url}/factors/${params.factorId}`, {
                    headers: this.headers,
                    jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * {@see GoTrueMFAApi#enroll}
     */
    _enroll(params) {
        var _a, _b;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                const { data: sessionData, error: sessionError } = yield this.getSession();
                if (sessionError) {
                    return { data: null, error: sessionError };
                }
                const { data, error } = yield _request(this.fetch, 'POST', `${this.url}/factors`, {
                    body: {
                        friendly_name: params.friendlyName,
                        factor_type: params.factorType,
                        issuer: params.issuer,
                    },
                    headers: this.headers,
                    jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token,
                });
                if (error) {
                    return { data: null, error };
                }
                if ((_b = data === null || data === void 0 ? void 0 : data.totp) === null || _b === void 0 ? void 0 : _b.qr_code) {
                    data.totp.qr_code = `data:image/svg+xml;utf-8,${data.totp.qr_code}`;
                }
                return { data, error: null };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * {@see GoTrueMFAApi#verify}
     */
    _verify(params) {
        var _a;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                const { data: sessionData, error: sessionError } = yield this.getSession();
                if (sessionError) {
                    return { data: null, error: sessionError };
                }
                const { data, error } = yield _request(this.fetch, 'POST', `${this.url}/factors/${params.factorId}/verify`, {
                    body: { code: params.code, challenge_id: params.challengeId },
                    headers: this.headers,
                    jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token,
                });
                if (error) {
                    return { data: null, error };
                }
                yield this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1000) + data.expires_in }, data));
                yield this._notifyAllSubscribers('MFA_CHALLENGE_VERIFIED', data);
                return { data, error };
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * {@see GoTrueMFAApi#challenge}
     */
    _challenge(params) {
        var _a;
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                const { data: sessionData, error: sessionError } = yield this.getSession();
                if (sessionError) {
                    return { data: null, error: sessionError };
                }
                return yield _request(this.fetch, 'POST', `${this.url}/factors/${params.factorId}/challenge`, {
                    headers: this.headers,
                    jwt: (_a = sessionData === null || sessionData === void 0 ? void 0 : sessionData.session) === null || _a === void 0 ? void 0 : _a.access_token,
                });
            }
            catch (error) {
                if (isAuthError(error)) {
                    return { data: null, error };
                }
                throw error;
            }
        });
    }
    /**
     * {@see GoTrueMFAApi#challengeAndVerify}
     */
    _challengeAndVerify(params) {
        return __awaiter$1(this, void 0, void 0, function* () {
            const { data: challengeData, error: challengeError } = yield this._challenge({
                factorId: params.factorId,
            });
            if (challengeError) {
                return { data: null, error: challengeError };
            }
            return yield this._verify({
                factorId: params.factorId,
                challengeId: challengeData.id,
                code: params.code,
            });
        });
    }
    /**
     * {@see GoTrueMFAApi#listFactors}
     */
    _listFactors() {
        return __awaiter$1(this, void 0, void 0, function* () {
            const { data: { user }, error: userError, } = yield this.getUser();
            if (userError) {
                return { data: null, error: userError };
            }
            const factors = (user === null || user === void 0 ? void 0 : user.factors) || [];
            const totp = factors.filter((factor) => factor.factor_type === 'totp' && factor.status === 'verified');
            return {
                data: {
                    all: factors,
                    totp,
                },
                error: null,
            };
        });
    }
    /**
     * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
     */
    _getAuthenticatorAssuranceLevel() {
        var _a, _b;
        return __awaiter$1(this, void 0, void 0, function* () {
            const { data: { session }, error: sessionError, } = yield this.getSession();
            if (sessionError) {
                return { data: null, error: sessionError };
            }
            if (!session) {
                return {
                    data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
                    error: null,
                };
            }
            const payload = this._decodeJWT(session.access_token);
            let currentLevel = null;
            if (payload.aal) {
                currentLevel = payload.aal;
            }
            let nextLevel = currentLevel;
            const verifiedFactors = (_b = (_a = session.user.factors) === null || _a === void 0 ? void 0 : _a.filter((factor) => factor.status === 'verified')) !== null && _b !== void 0 ? _b : [];
            if (verifiedFactors.length > 0) {
                nextLevel = 'aal2';
            }
            const currentAuthenticationMethods = payload.amr || [];
            return { data: { currentLevel, nextLevel, currentAuthenticationMethods }, error: null };
        });
    }
}
GoTrueClient.nextInstanceID = 0;class SupabaseAuthClient extends GoTrueClient {
    constructor(options) {
        super(options);
    }
}var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DEFAULT_GLOBAL_OPTIONS = {
    headers: DEFAULT_HEADERS$1,
};
const DEFAULT_DB_OPTIONS = {
    schema: 'public',
};
const DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'implicit',
};
const DEFAULT_REALTIME_OPTIONS = {};
/**
 * Supabase Client.
 *
 * An isomorphic Javascript client for interacting with Postgres.
 */
class SupabaseClient {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.global.fetch A custom fetch implementation.
     * @param options.global.headers Any additional headers to send with each network request.
     */
    constructor(supabaseUrl, supabaseKey, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        if (!supabaseUrl)
            throw new Error('supabaseUrl is required.');
        if (!supabaseKey)
            throw new Error('supabaseKey is required.');
        const _supabaseUrl = stripTrailingSlash(supabaseUrl);
        this.realtimeUrl = `${_supabaseUrl}/realtime/v1`.replace(/^http/i, 'ws');
        this.authUrl = `${_supabaseUrl}/auth/v1`;
        this.storageUrl = `${_supabaseUrl}/storage/v1`;
        this.functionsUrl = `${_supabaseUrl}/functions/v1`;
        // default storage key uses the supabase project ref as a namespace
        const defaultStorageKey = `sb-${new URL(this.authUrl).hostname.split('.')[0]}-auth-token`;
        const DEFAULTS = {
            db: DEFAULT_DB_OPTIONS,
            realtime: DEFAULT_REALTIME_OPTIONS,
            auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), { storageKey: defaultStorageKey }),
            global: DEFAULT_GLOBAL_OPTIONS,
        };
        const settings = applySettingDefaults(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_b = (_a = settings.auth) === null || _a === void 0 ? void 0 : _a.storageKey) !== null && _b !== void 0 ? _b : '';
        this.headers = (_d = (_c = settings.global) === null || _c === void 0 ? void 0 : _c.headers) !== null && _d !== void 0 ? _d : {};
        this.auth = this._initSupabaseAuthClient((_e = settings.auth) !== null && _e !== void 0 ? _e : {}, this.headers, (_f = settings.global) === null || _f === void 0 ? void 0 : _f.fetch);
        this.fetch = fetchWithAuth(supabaseKey, this._getAccessToken.bind(this), (_g = settings.global) === null || _g === void 0 ? void 0 : _g.fetch);
        this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers }, settings.realtime));
        this.rest = new PostgrestClient(`${_supabaseUrl}/rest/v1`, {
            headers: this.headers,
            schema: (_h = settings.db) === null || _h === void 0 ? void 0 : _h.schema,
            fetch: this.fetch,
        });
        this._listenForAuthEvents();
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */
    get functions() {
        return new FunctionsClient(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch,
        });
    }
    /**
     * Supabase Storage allows you to manage user-generated content, such as photos or videos.
     */
    get storage() {
        return new StorageClient(this.storageUrl, this.headers, this.fetch);
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
    from(relation) {
        return this.rest.from(relation);
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */
    rpc(fn, args = {}, options) {
        return this.rest.rpc(fn, args, options);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */
    channel(name, opts = { config: {} }) {
        return this.realtime.channel(name, opts);
    }
    /**
     * Returns all Realtime channels.
     */
    getChannels() {
        return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */
    removeChannel(channel) {
        return this.realtime.removeChannel(channel);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */
    removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.auth.getSession();
            return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : null;
        });
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, storageKey, flowType, }, headers, fetch) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`,
        };
        return new SupabaseAuthClient({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, authHeaders), headers),
            storageKey: storageKey,
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            storage,
            flowType,
            fetch,
        });
    }
    _initRealtimeClient(options) {
        return new RealtimeClient(this.realtimeUrl, Object.assign(Object.assign({}, options), { params: Object.assign({ apikey: this.supabaseKey }, options === null || options === void 0 ? void 0 : options.params) }));
    }
    _listenForAuthEvents() {
        let data = this.auth.onAuthStateChange((event, session) => {
            this._handleTokenChanged(event, session === null || session === void 0 ? void 0 : session.access_token, 'CLIENT');
        });
        return data;
    }
    _handleTokenChanged(event, token, source) {
        if ((event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN') &&
            this.changedAccessToken !== token) {
            // Token has changed
            this.realtime.setAuth(token !== null && token !== void 0 ? token : null);
            this.changedAccessToken = token;
        }
        else if (event === 'SIGNED_OUT') {
            // Token is removed
            this.realtime.setAuth(this.supabaseKey);
            if (source == 'STORAGE')
                this.auth.signOut();
            this.changedAccessToken = undefined;
        }
    }
}/**
 * Creates a new Supabase Client.
 */
const createClient = (supabaseUrl, supabaseKey, options) => {
    return new SupabaseClient(supabaseUrl, supabaseKey, options);
};const supabase = createClient('https://yoaibhoxjjxfokrnhvit.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvYWliaG94amp4Zm9rcm5odml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxNzg3NzksImV4cCI6MjAxMjc1NDc3OX0.-qseh0pNpQi3ImY_LadFw-JaKIgbnLJIP0NUS9bhUoU');
const usePostsApi = defineStore('posts-api', {
    state: () => {
        return {
            posts: [],
            replyingTo: null
        };
    },
    actions: {
        async getPosts() {
            try {
                const res = await supabase.from('posts')
                    .select(`
                        id,
                        text,
                        created_at,
                        loveCount, 
                        commentCount,
                        shareCount,
                        user:users(username, name),
                        loves (id, created_at),
                        lang, translatedText,
                        isDiscussion,
                        discussionRoot (id, text)
                    `)
                    .eq('loves.uid', '9dc7c423-a8ad-4319-b43a-28f85d54fd69')
                    .order('created_at');
                if (res.data)
                    this.posts = res.data;
                return res.data;
            }
            catch (e) {
                console.log(e);
            }
        },
        async getPost(id) {
            try {
                const res = await supabase.from('posts')
                    .select(`
                            id,
                            text,
                            created_at,
                            loveCount, 
                            commentCount,
                            shareCount,
                            user:users(username, name),
                            loves(id, created_at),
                            lang, translatedText,
                            isDiscussion,
                            discussionRoot (id, text)
                        `)
                    .eq('id', id)
                    .eq('loves.uid', '9dc7c423-a8ad-4319-b43a-28f85d54fd69')
                    .single();
                return res.data;
            }
            catch (e) {
                console.log(e);
            }
        },
        async translatePost(text) {
            const res = {
                text: '',
                lang: ''
            };
            try {
                const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&tl=en&sl=auto&dt=t&q=${text}`);
                const responseJson = await response.json();
                res.text = responseJson[0][0][0];
                res.lang = responseJson[2];
                return res;
            }
            catch (e) {
                res.text = 'Failed to translate';
                return res;
            }
        },
        async getComments(id) {
            try {
                const res = await supabase.from('comments')
                    .select(`
                            id,
                            comment,
                            created_at,
                            replyCount,
                            user (username, name)
                        `)
                    .eq('post_id', id)
                    .is('replyTo', null)
                    .order('id');
                return res.data;
            }
            catch (e) {
                console.log(e);
            }
        },
        async getReplies(id) {
            try {
                const res = await supabase.from('comments')
                    .select(`
                            id,
                            comment,
                            created_at,
                            replyCount,
                            user (username, name)
                        `)
                    .eq('replyTo', id).order('id');
                return res.data;
            }
            catch (e) {
                console.log(e);
            }
        },
        async lovePost(id) {
            try {
                const res = await supabase.from('loves').insert({
                    pid: id,
                    uid: '9dc7c423-a8ad-4319-b43a-28f85d54fd69'
                });
                if (res.error) {
                    console.log(res.error);
                    return res.error;
                }
                const incres = await supabase.rpc('increment_post_love', { post_id: id });
                if (incres.error) {
                    console.log(incres.error);
                    return incres.error;
                }
                return res.status;
            }
            catch (e) {
                console.log(e);
                return 0;
            }
        },
        async unlovePost(id) {
            try {
                const res = await supabase.from('loves').delete()
                    .eq('pid', id)
                    .eq('uid', '9dc7c423-a8ad-4319-b43a-28f85d54fd69');
                if (res.error) {
                    console.log(res.error);
                    return res.error;
                }
                const decres = await supabase.rpc('decrement_post_love', { post_id: id });
                if (decres.error) {
                    console.log(decres.error);
                    return decres.error;
                }
                return res.status;
            }
            catch (e) {
                console.log(e);
                return 0;
            }
        },
        async createPost(text, lang, translatedText) {
            if (lang === 'en')
                translatedText = '';
            try {
                const res = await supabase.from('posts').insert({
                    text,
                    lang,
                    translatedText,
                    uid: '9dc7c423-a8ad-4319-b43a-28f85d54fd69'
                });
                if (res.error) {
                    console.log(res.error);
                    return res.error;
                }
                return res.status;
            }
            catch (e) {
                console.log(e);
                return 0;
            }
        },
        async createComment(pid, text, replyTo) {
            try {
                const res = await supabase.from('comments').insert({
                    post_id: pid,
                    comment: text,
                    user: '9dc7c423-a8ad-4319-b43a-28f85d54fd69',
                    replyTo
                });
                if (res.error) {
                    console.log(res.error);
                    return res.error;
                }
                if (replyTo != undefined) {
                    await supabase.rpc('increment_decrement_reply_count', {
                        comment_id: replyTo,
                        increment: true
                    });
                }
                return res.status;
            }
            catch (e) {
                console.log(e);
                return 0;
            }
        }
    },
});
defineStore('discussion-api', {
    actions: {
        async getPostDiscussion(id) {
            try {
                const res = await supabase.from('discussions')
                    .select(`
                            id,
                            created_at,
                            uid (username, name),
                            text,
                            lang,
                            translatedText
                        `)
                    .eq('post_id', id)
                    .order('id');
                return res.data;
            }
            catch (e) {
                console.log(e);
            }
        },
        async createComment(pid, text, replyTo) {
            try {
                const res = await supabase.from('discussions').insert({
                    post_id: pid,
                    text,
                    uid: '9dc7c423-a8ad-4319-b43a-28f85d54fd69'
                });
                if (res.error) {
                    console.log(res.error);
                    return res.error;
                }
                return res.status;
            }
            catch (e) {
                console.log(e);
                return 0;
            }
        }
    }
});const epochs = [
    ['y', 31536000],
    ['m', 2592000],
    ['d', 86400],
    ['h', 3600],
    ['min', 60],
    ['s', 1]
];
const getDuration = (timeAgoInSeconds) => {
    for (const [name, seconds] of epochs) {
        const interval = Math.floor(timeAgoInSeconds / seconds);
        if (interval >= 1) {
            return {
                interval: interval,
                epoch: name
            };
        }
    }
    return { interval: 'now', epoch: null };
};
const formatTime = (date) => {
    const timeAgoInSeconds = Math.floor((+new Date() - +new Date(date)) / 1000);
    const { interval, epoch } = getDuration(timeAgoInSeconds);
    return `${interval} ${epoch ?? ''}`;
};
const formatText = (text) => {
    text = text.replace(/#([^# ]+)/g, (str, $1) => {
        return `<a href="#/search/results?hashtag=${$1}">${str}</a>`;
    });
    return text;
};
const langCodes = {
    "af": "Afrikaans",
    "sq": "Albanian",
    "an": "Aragonese",
    "ar": "Arabic (Standard)",
    "ar-dz": "Arabic (Algeria)",
    "ar-bh": "Arabic (Bahrain)",
    "ar-eg": "Arabic (Egypt)",
    "ar-iq": "Arabic (Iraq)",
    "ar-jo": "Arabic (Jordan)",
    "ar-kw": "Arabic (Kuwait)",
    "ar-lb": "Arabic (Lebanon)",
    "ar-ly": "Arabic (Libya)",
    "ar-ma": "Arabic (Morocco)",
    "ar-om": "Arabic (Oman)",
    "ar-qa": "Arabic (Qatar)",
    "ar-sa": "Arabic (Saudi Arabia)",
    "ar-sy": "Arabic (Syria)",
    "ar-tn": "Arabic (Tunisia)",
    "ar-ae": "Arabic (U.A.E.)",
    "ar-ye": "Arabic (Yemen)",
    "hy": "Armenian",
    "as": "Assamese",
    "ast": "Asturian",
    "az": "Azerbaijani",
    "eu": "Basque",
    "bg": "Bulgarian",
    "be": "Belarusian",
    "bn": "Bengali",
    "bs": "Bosnian",
    "br": "Breton",
    "my": "Burmese",
    "ca": "Catalan",
    "ch": "Chamorro",
    "ce": "Chechen",
    "zh": "Chinese",
    "zh-hk": "Chinese (Hong Kong)",
    "zh-cn": "Chinese (PRC)",
    "zh-sg": "Chinese (Singapore)",
    "zh-tw": "Chinese (Taiwan)",
    "cv": "Chuvash",
    "co": "Corsican",
    "cr": "Cree",
    "hr": "Croatian",
    "cs": "Czech",
    "da": "Danish",
    "nl": "Dutch (Standard)",
    "nl-be": "Dutch (Belgian)",
    "en": "English",
    "en-au": "English (Australia)",
    "en-bz": "English (Belize)",
    "en-ca": "English (Canada)",
    "en-ie": "English (Ireland)",
    "en-jm": "English (Jamaica)",
    "en-nz": "English (New Zealand)",
    "en-ph": "English (Philippines)",
    "en-za": "English (South Africa)",
    "en-tt": "English (Trinidad & Tobago)",
    "en-gb": "English (United Kingdom)",
    "en-us": "English (United States)",
    "en-zw": "English (Zimbabwe)",
    "eo": "Esperanto",
    "et": "Estonian",
    "fo": "Faeroese",
    "fj": "Fijian",
    "fi": "Finnish",
    "fr": "French (Standard)",
    "fr-be": "French (Belgium)",
    "fr-ca": "French (Canada)",
    "fr-fr": "French (France)",
    "fr-lu": "French (Luxembourg)",
    "fr-mc": "French (Monaco)",
    "fr-ch": "French (Switzerland)",
    "fy": "Frisian",
    "fur": "Friulian",
    "gd": "Gaelic (Scots)",
    "gd-ie": "Gaelic (Irish)",
    "gl": "Galacian",
    "ka": "Georgian",
    "de": "German (Standard)",
    "de-at": "German (Austria)",
    "de-de": "German (Germany)",
    "de-li": "German (Liechtenstein)",
    "de-lu": "German (Luxembourg)",
    "de-ch": "German (Switzerland)",
    "el": "Greek",
    "gu": "Gujurati",
    "ht": "Haitian",
    "he": "Hebrew",
    "hi": "Hindi",
    "hu": "Hungarian",
    "is": "Icelandic",
    "id": "Indonesian",
    "iu": "Inuktitut",
    "ga": "Irish",
    "it": "Italian (Standard)",
    "it-ch": "Italian (Switzerland)",
    "ja": "Japanese",
    "kn": "Kannada",
    "ks": "Kashmiri",
    "kk": "Kazakh",
    "km": "Khmer",
    "ky": "Kirghiz",
    "tlh": "Klingon",
    "ko": "Korean",
    "ko-kp": "Korean (North Korea)",
    "ko-kr": "Korean (South Korea)",
    "la": "Latin",
    "lv": "Latvian",
    "lt": "Lithuanian",
    "lb": "Luxembourgish",
    "mk": "FYRO Macedonian",
    "ms": "Malay",
    "ml": "Malayalam",
    "mt": "Maltese",
    "mi": "Maori",
    "mr": "Marathi",
    "mo": "Moldavian",
    "nv": "Navajo",
    "ng": "Ndonga",
    "ne": "Nepali",
    "no": "Norwegian",
    "nb": "Norwegian (Bokmal)",
    "nn": "Norwegian (Nynorsk)",
    "oc": "Occitan",
    "or": "Oriya",
    "om": "Oromo",
    "fa": "Persian",
    "fa-ir": "Persian/Iran",
    "pl": "Polish",
    "pt": "Portuguese",
    "pt-br": "Portuguese (Brazil)",
    "pa": "Punjabi",
    "pa-in": "Punjabi (India)",
    "pa-pk": "Punjabi (Pakistan)",
    "qu": "Quechua",
    "rm": "Rhaeto-Romanic",
    "ro": "Romanian",
    "ro-mo": "Romanian (Moldavia)",
    "ru": "Russian",
    "ru-mo": "Russian (Moldavia)",
    "sz": "Sami (Lappish)",
    "sg": "Sango",
    "sa": "Sanskrit",
    "sc": "Sardinian",
    "sd": "Sindhi",
    "si": "Singhalese",
    "sr": "Serbian",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somani",
    "sb": "Sorbian",
    "es": "Spanish",
    "es-ar": "Spanish (Argentina)",
    "es-bo": "Spanish (Bolivia)",
    "es-cl": "Spanish (Chile)",
    "es-co": "Spanish (Colombia)",
    "es-cr": "Spanish (Costa Rica)",
    "es-do": "Spanish (Dominican Republic)",
    "es-ec": "Spanish (Ecuador)",
    "es-sv": "Spanish (El Salvador)",
    "es-gt": "Spanish (Guatemala)",
    "es-hn": "Spanish (Honduras)",
    "es-mx": "Spanish (Mexico)",
    "es-ni": "Spanish (Nicaragua)",
    "es-pa": "Spanish (Panama)",
    "es-py": "Spanish (Paraguay)",
    "es-pe": "Spanish (Peru)",
    "es-pr": "Spanish (Puerto Rico)",
    "es-es": "Spanish (Spain)",
    "es-uy": "Spanish (Uruguay)",
    "es-ve": "Spanish (Venezuela)",
    "sx": "Sutu",
    "sw": "Swahili",
    "sv": "Swedish",
    "sv-fi": "Swedish (Finland)",
    "sv-sv": "Swedish (Sweden)",
    "ta": "Tamil",
    "tt": "Tatar",
    "te": "Teluga",
    "th": "Thai",
    "tig": "Tigre",
    "ts": "Tsonga",
    "tn": "Tswana",
    "tr": "Turkish",
    "tk": "Turkmen",
    "uk": "Ukrainian",
    "hsb": "Upper Sorbian",
    "ur": "Urdu",
    "ve": "Venda",
    "vi": "Vietnamese",
    "vo": "Volapuk",
    "wa": "Walloon",
    "cy": "Welsh",
    "xh": "Xhosa",
    "ji": "Yiddish",
    "zu": "Zulu",
};const _hoisted_1$2 = { class: "userinfo" };
const _hoisted_2$1 = createElementVNode("img", {
    src: "https://plus.unsplash.com/premium_photo-1669800502069-499e172df081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    loading: "lazy",
    class: "avatar"
}, null, -1);
const _hoisted_3 = { class: "username" };
const _hoisted_4 = createElementVNode("svg", {
    width: "23",
    height: "20",
    viewBox: "0 0 23 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        opacity: "0.2",
        d: "M13.5222 10C13.5222 10.3708 13.403 10.7334 13.1797 11.0417C12.9564 11.35 12.639 11.5904 12.2677 11.7323C11.8963 11.8742 11.4877 11.9113 11.0935 11.839C10.6992 11.7666 10.3371 11.588 10.0529 11.3258C9.76866 11.0636 9.5751 10.7295 9.49668 10.3658C9.41827 10.0021 9.45851 9.62508 9.61233 9.28247C9.76615 8.93986 10.0266 8.64702 10.3608 8.44099C10.6951 8.23497 11.088 8.125 11.4899 8.125C12.0289 8.125 12.5459 8.32254 12.927 8.67417C13.3081 9.02581 13.5222 9.50272 13.5222 10ZM4.7156 8.125C4.31365 8.125 3.92073 8.23497 3.58652 8.44099C3.25231 8.64702 2.99182 8.93986 2.838 9.28247C2.68418 9.62508 2.64394 10.0021 2.72235 10.3658C2.80077 10.7295 2.99433 11.0636 3.27855 11.3258C3.56277 11.588 3.92489 11.7666 4.31912 11.839C4.71335 11.9113 5.12198 11.8742 5.49333 11.7323C5.86468 11.5904 6.18209 11.35 6.4054 11.0417C6.62871 10.7334 6.7479 10.3708 6.7479 10C6.7479 9.50272 6.53379 9.02581 6.15266 8.67417C5.77153 8.32254 5.2546 8.125 4.7156 8.125ZM18.2643 8.125C17.8623 8.125 17.4694 8.23497 17.1352 8.44099C16.801 8.64702 16.5405 8.93986 16.3867 9.28247C16.2328 9.62508 16.1926 10.0021 16.271 10.3658C16.3494 10.7295 16.543 11.0636 16.8272 11.3258C17.1114 11.588 17.4736 11.7666 17.8678 11.839C18.262 11.9113 18.6706 11.8742 19.042 11.7323C19.4133 11.5904 19.7307 11.35 19.9541 11.0417C20.1774 10.7334 20.2966 10.3708 20.2966 10C20.2966 9.50272 20.0824 9.02581 19.7013 8.67417C19.3202 8.32254 18.8033 8.125 18.2643 8.125Z",
        fill: "white",
        "fill-opacity": "0.6"
    }),
    createElementVNode("path", {
        d: "M11.4899 7.5C10.954 7.5 10.4301 7.64662 9.98448 7.92133C9.53887 8.19603 9.19156 8.58648 8.98646 9.04329C8.78137 9.50011 8.72771 10.0028 8.83226 10.4877C8.93682 10.9727 9.1949 11.4181 9.57386 11.7678C9.95282 12.1174 10.4356 12.3555 10.9613 12.452C11.4869 12.5484 12.0318 12.4989 12.5269 12.3097C13.022 12.1205 13.4452 11.8 13.743 11.3889C14.0407 10.9778 14.1997 10.4945 14.1997 10C14.1997 9.33696 13.9142 8.70107 13.406 8.23223C12.8978 7.76339 12.2086 7.5 11.4899 7.5ZM11.4899 11.25C11.222 11.25 10.96 11.1767 10.7372 11.0393C10.5144 10.902 10.3407 10.7068 10.2382 10.4784C10.1356 10.2499 10.1088 9.99861 10.1611 9.75614C10.2134 9.51366 10.3424 9.29093 10.5319 9.11612C10.7214 8.9413 10.9628 8.82225 11.2256 8.77402C11.4884 8.72579 11.7608 8.75054 12.0084 8.84515C12.256 8.93976 12.4676 9.09998 12.6165 9.30554C12.7653 9.5111 12.8448 9.75277 12.8448 10C12.8448 10.3315 12.7021 10.6495 12.448 10.8839C12.1939 11.1183 11.8493 11.25 11.4899 11.25ZM4.7156 7.5C4.17967 7.5 3.65577 7.64662 3.21015 7.92133C2.76454 8.19603 2.41723 8.58648 2.21213 9.04329C2.00704 9.50011 1.95338 10.0028 2.05793 10.4877C2.16249 10.9727 2.42057 11.4181 2.79953 11.7678C3.17849 12.1174 3.66132 12.3555 4.18696 12.452C4.71259 12.5484 5.25743 12.4989 5.75257 12.3097C6.24771 12.1205 6.67091 11.8 6.96866 11.3889C7.26641 10.9778 7.42533 10.4945 7.42533 10C7.42533 9.33696 7.13984 8.70107 6.63167 8.23223C6.1235 7.76339 5.43427 7.5 4.7156 7.5ZM4.7156 11.25C4.44763 11.25 4.18568 11.1767 3.96288 11.0393C3.74007 10.902 3.56641 10.7068 3.46387 10.4784C3.36132 10.2499 3.33449 9.99861 3.38677 9.75614C3.43904 9.51366 3.56808 9.29093 3.75756 9.11612C3.94705 8.9413 4.18846 8.82225 4.45128 8.77402C4.7141 8.72579 4.98652 8.75054 5.23408 8.84515C5.48165 8.93976 5.69325 9.09998 5.84213 9.30554C5.991 9.5111 6.07047 9.75277 6.07047 10C6.07047 10.3315 5.92772 10.6495 5.67363 10.8839C5.41955 11.1183 5.07493 11.25 4.7156 11.25ZM18.2643 7.5C17.7283 7.5 17.2044 7.64662 16.7588 7.92133C16.3132 8.19603 15.9659 8.58648 15.7608 9.04329C15.5557 9.50011 15.502 10.0028 15.6066 10.4877C15.7111 10.9727 15.9692 11.4181 16.3482 11.7678C16.7272 12.1174 17.21 12.3555 17.7356 12.452C18.2613 12.5484 18.8061 12.4989 19.3012 12.3097C19.7964 12.1205 20.2196 11.8 20.5173 11.3889C20.8151 10.9778 20.974 10.4945 20.974 10C20.974 9.33696 20.6885 8.70107 20.1803 8.23223C19.6722 7.76339 18.9829 7.5 18.2643 7.5ZM18.2643 11.25C17.9963 11.25 17.7343 11.1767 17.5115 11.0393C17.2887 10.902 17.1151 10.7068 17.0125 10.4784C16.91 10.2499 16.8831 9.99861 16.9354 9.75614C16.9877 9.51366 17.1167 9.29093 17.3062 9.11612C17.4957 8.9413 17.7371 8.82225 17.9999 8.77402C18.2628 8.72579 18.5352 8.75054 18.7827 8.84515C19.0303 8.93976 19.2419 9.09998 19.3908 9.30554C19.5397 9.5111 19.6191 9.75277 19.6191 10C19.6191 10.3315 19.4764 10.6495 19.2223 10.8839C18.9682 11.1183 18.6236 11.25 18.2643 11.25Z",
        fill: "white",
        "fill-opacity": "0.6"
    })
], -1);
const _hoisted_5 = [
    _hoisted_4
];
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = {
    key: 0,
    class: "donation-container",
    style: { "background-image": "url('https://images.unsplash.com/photo-1537440499989-de5f6b6854de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')" }
};
const _hoisted_8$1 = createElementVNode("div", { class: "donation-texts" }, [
    createElementVNode("p", null, "4367$ Collected"),
    createElementVNode("p", null, "10000$ Goal")
], -1);
const _hoisted_9$1 = createElementVNode("meter", {
    max: "10000",
    value: "4367",
    style: { "height": "8px", "margin-bottom": "15px", "margin-top": "10px" }
}, null, -1);
const _hoisted_10$1 = {
    key: 1,
    class: "translation-original",
    style: { "margin-left": "45px", "margin-top": "20px" }
};
const _hoisted_11 = createElementVNode("br", null, null, -1);
const _hoisted_12 = { class: "translation-source" };
const _hoisted_13 = createStaticVNode("<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_20_229)\"><path d=\"M3.97688 5.87475L3.59625 7H2.625L4.25425 2.625H5.37775L7 7H5.97888L5.59825 5.87475H3.97688ZM5.40662 5.23075L4.8125 3.4615H4.76963L4.1755 5.23075H5.40662Z\" fill=\"#A3F7BF\"></path><path d=\"M0 1.75C0 1.28587 0.184374 0.840752 0.512563 0.512563C0.840752 0.184374 1.28587 0 1.75 0L7.875 0C8.33913 0 8.78425 0.184374 9.11244 0.512563C9.44063 0.840752 9.625 1.28587 9.625 1.75V4.375H12.25C12.7141 4.375 13.1592 4.55937 13.4874 4.88756C13.8156 5.21575 14 5.66087 14 6.125V12.25C14 12.7141 13.8156 13.1592 13.4874 13.4874C13.1592 13.8156 12.7141 14 12.25 14H6.125C5.66087 14 5.21575 13.8156 4.88756 13.4874C4.55937 13.1592 4.375 12.7141 4.375 12.25V9.625H1.75C1.28587 9.625 0.840752 9.44063 0.512563 9.11244C0.184374 8.78425 0 8.33913 0 7.875V1.75ZM1.75 0.875C1.51794 0.875 1.29538 0.967187 1.13128 1.13128C0.967187 1.29538 0.875 1.51794 0.875 1.75V7.875C0.875 8.10706 0.967187 8.32962 1.13128 8.49372C1.29538 8.65781 1.51794 8.75 1.75 8.75H7.875C8.10706 8.75 8.32962 8.65781 8.49372 8.49372C8.65781 8.32962 8.75 8.10706 8.75 7.875V1.75C8.75 1.51794 8.65781 1.29538 8.49372 1.13128C8.32962 0.967187 8.10706 0.875 7.875 0.875H1.75ZM7.99575 9.62062C8.16462 9.884 8.3475 10.1307 8.547 10.3609C7.8925 10.864 7.08313 11.2368 6.125 11.4914C6.28075 11.6813 6.51962 12.047 6.61062 12.25C7.595 11.9359 8.43062 11.5115 9.13587 10.9427C9.81575 11.5246 10.6575 11.9621 11.6996 12.2308C11.816 12.0085 12.0619 11.6419 12.25 11.452C11.2656 11.2306 10.4501 10.8447 9.7825 10.3285C10.3784 9.67488 10.8517 8.88387 11.2009 7.91612H12.25V7H9.625V7.91612H10.2944C10.0161 8.65462 9.64688 9.26888 9.18138 9.77987C9.0528 9.6429 8.93159 9.4992 8.81825 9.34938C8.57134 9.50769 8.2884 9.601 7.99575 9.62062Z\" fill=\"#A3F7BF\"></path></g><defs><clipPath id=\"clip0_20_229\"><rect width=\"14\" height=\"14\" fill=\"white\"></rect></clipPath></defs></svg>", 1);
const _hoisted_14 = { class: "post-buttons" };
const _hoisted_15 = {
    width: "28",
    height: "27",
    viewBox: "0 0 27 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_16$1 = createElementVNode("path", {
    d: "M23.8684 7.20078C23.5281 6.41275 23.0374 5.69865 22.4237 5.09844C21.8096 4.49644 21.0855 4.01805 20.2909 3.68926C19.4669 3.34698 18.5831 3.17178 17.6909 3.17383C16.4391 3.17383 15.2179 3.5166 14.1565 4.16407C13.9026 4.31895 13.6614 4.48907 13.4329 4.67442C13.2044 4.48907 12.9632 4.31895 12.7093 4.16407C11.6479 3.5166 10.4266 3.17383 9.17488 3.17383C8.27352 3.17383 7.40008 3.34649 6.57488 3.68926C5.77762 4.01934 5.05906 4.49414 4.44207 5.09844C3.82761 5.69797 3.33676 6.41224 2.99734 7.20078C2.64442 8.0209 2.46414 8.8918 2.46414 9.78809C2.46414 10.6336 2.6368 11.5147 2.97957 12.4109C3.26649 13.16 3.67781 13.9369 4.2034 14.7215C5.03621 15.9631 6.18133 17.258 7.6032 18.5707C9.95945 20.7467 12.2929 22.2498 12.3919 22.3107L12.9936 22.6967C13.2602 22.8668 13.603 22.8668 13.8696 22.6967L14.4714 22.3107C14.5704 22.2473 16.9013 20.7467 19.26 18.5707C20.6819 17.258 21.827 15.9631 22.6598 14.7215C23.1854 13.9369 23.5993 13.16 23.8837 12.4109C24.2264 11.5147 24.3991 10.6336 24.3991 9.78809C24.4016 8.8918 24.2214 8.0209 23.8684 7.20078ZM13.4329 20.6883C13.4329 20.6883 4.39383 14.8967 4.39383 9.78809C4.39383 7.20078 6.53426 5.10352 9.17488 5.10352C11.0309 5.10352 12.6407 6.13946 13.4329 7.65274C14.2251 6.13946 15.8348 5.10352 17.6909 5.10352C20.3315 5.10352 22.472 7.20078 22.472 9.78809C22.472 14.8967 13.4329 20.6883 13.4329 20.6883Z",
    fill: "#E74C3C"
}, null, -1);
const _hoisted_17$1 = ["fill-opacity"];
const _hoisted_18$1 = createElementVNode("svg", {
    width: "28",
    height: "27",
    viewBox: "0 0 25 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        opacity: "0.16",
        d: "M12.4329 21C14.2129 21 15.953 20.4722 17.433 19.4832C18.9131 18.4943 20.0666 17.0887 20.7478 15.4442C21.429 13.7996 21.6072 11.99 21.26 10.2442C20.9127 8.49836 20.0555 6.89472 18.7969 5.63604C17.5382 4.37737 15.9345 3.5202 14.1887 3.17294C12.4429 2.82567 10.6333 3.0039 8.98874 3.68509C7.34421 4.36628 5.9386 5.51983 4.94967 6.99987C3.96073 8.47991 3.43289 10.22 3.43289 12C3.43289 13.488 3.79289 14.89 4.43289 16.127L3.43289 21L8.30589 20C9.54189 20.639 10.9459 21 12.4329 21Z",
        fill: "white",
        "fill-opacity": "0.7"
    }),
    createElementVNode("path", {
        d: "M12.4329 21C14.2129 21 15.953 20.4722 17.433 19.4832C18.9131 18.4943 20.0666 17.0887 20.7478 15.4442C21.429 13.7996 21.6072 11.99 21.26 10.2442C20.9127 8.49836 20.0555 6.89472 18.7969 5.63604C17.5382 4.37737 15.9345 3.5202 14.1887 3.17294C12.4429 2.82567 10.6333 3.0039 8.98874 3.68509C7.34421 4.36628 5.9386 5.51983 4.94967 6.99987C3.96073 8.47991 3.43289 10.22 3.43289 12C3.43289 13.488 3.79289 14.89 4.43289 16.127L3.43289 21L8.30589 20C9.54189 20.639 10.9459 21 12.4329 21Z",
        stroke: "white",
        "stroke-opacity": "0.7",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })
], -1);
const _hoisted_19 = createStaticVNode("<svg width=\"28\" height=\"27\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_14_63)\"><path d=\"M6.05789 10.25C5.95844 10.25 5.86305 10.2895 5.79273 10.3598C5.7224 10.4302 5.68289 10.5255 5.68289 10.625V20.375C5.68289 20.582 5.85089 20.75 6.05789 20.75H18.8079C18.9073 20.75 19.0027 20.7105 19.0731 20.6402C19.1434 20.5698 19.1829 20.4745 19.1829 20.375V10.625C19.1829 10.5255 19.1434 10.4302 19.0731 10.3598C19.0027 10.2895 18.9073 10.25 18.8079 10.25H17.3079C17.0095 10.25 16.7234 10.1315 16.5124 9.9205C16.3014 9.70952 16.1829 9.42337 16.1829 9.125C16.1829 8.82664 16.3014 8.54049 16.5124 8.32951C16.7234 8.11853 17.0095 8 17.3079 8H18.8079C20.2569 8 21.4329 9.176 21.4329 10.625V20.375C21.4329 21.0712 21.1563 21.7389 20.664 22.2312C20.1718 22.7234 19.5041 23 18.8079 23H6.05789C5.3617 23 4.69402 22.7234 4.20174 22.2312C3.70945 21.7389 3.43289 21.0712 3.43289 20.375V10.625C3.43289 9.176 4.60889 8 6.05789 8H7.55789C7.85626 8 8.14241 8.11853 8.35339 8.32951C8.56437 8.54049 8.68289 8.82664 8.68289 9.125C8.68289 9.42337 8.56437 9.70952 8.35339 9.9205C8.14241 10.1315 7.85626 10.25 7.55789 10.25H6.05789ZM12.1674 0.765505C12.2022 0.730582 12.2436 0.702875 12.2892 0.68397C12.3347 0.665066 12.3836 0.655334 12.4329 0.655334C12.4822 0.655334 12.5311 0.665066 12.5766 0.68397C12.6222 0.702875 12.6636 0.730582 12.6984 0.765505L17.0424 5.1095C17.095 5.16195 17.1308 5.22883 17.1453 5.30166C17.1598 5.37449 17.1524 5.45 17.124 5.5186C17.0955 5.58721 17.0474 5.64582 16.9856 5.68702C16.9238 5.72822 16.8512 5.75014 16.7769 5.75H13.5579V14.375C13.5579 14.6734 13.4394 14.9595 13.2284 15.1705C13.0174 15.3815 12.7313 15.5 12.4329 15.5C12.1345 15.5 11.8484 15.3815 11.6374 15.1705C11.4264 14.9595 11.3079 14.6734 11.3079 14.375V5.75H8.08889C8.01463 5.75014 7.94199 5.72822 7.8802 5.68702C7.81841 5.64582 7.77024 5.58721 7.7418 5.5186C7.71337 5.45 7.70594 5.37449 7.72046 5.30166C7.73499 5.22883 7.77081 5.16195 7.82339 5.1095L12.1674 0.765505Z\" fill=\"white\" fill-opacity=\"0.7\"></path></g><defs><clipPath id=\"clip0_14_63\"><rect width=\"24\" height=\"24\" fill=\"white\" transform=\"translate(0.432892 0.5)\"></rect></clipPath></defs></svg>", 1);
var script$2 = defineComponent({
    __name: 'PostHome',
    props: {
        item: { type: null, required: false }
    },
    setup(__props) {
        const moreOptions = useMoreOptionsSheet();
        const api = usePostsApi();
        const props = __props;
        const item = computed(() => props.item);
        const isLoved = ref(item.value?.loves[0]?.id ? true : false);
        function handleLove() {
            if (item.value?.id && typeof item.value.loveCount == 'number') {
                if (!isLoved.value) {
                    api.lovePost(item.value?.id).then((res) => {
                        if (res !== 201) {
                            isLoved.value = false;
                            item.value?.loveCount && item.value.loveCount--;
                        }
                    });
                    isLoved.value = true;
                    item.value.loveCount++;
                }
                else {
                    api.unlovePost(item.value?.id).then((res) => {
                        if (res !== 204) {
                            isLoved.value = true;
                            item.value?.loveCount && item.value.loveCount++;
                        }
                    });
                    isLoved.value = false;
                    item.value.loveCount--;
                }
            }
        }
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", {
                class: "post-body",
                onClick: _cache[4] || (_cache[4] = ($event) => (_ctx.$router.push('/p/' + item.value?.id)))
            }, [
                createElementVNode("div", _hoisted_1$2, [
                    _hoisted_2$1,
                    createElementVNode("p", _hoisted_3, toDisplayString(item.value?.user?.username ?? 'Anonymous'), 1),
                    createElementVNode("p", null, toDisplayString(item.value?.created_at ? unref(formatTime)(new Date(item.value?.created_at)) : ''), 1)
                ]),
                createElementVNode("button", {
                    class: "post-more-options",
                    onClick: _cache[0] || (_cache[0] = ($event) => { $event.stopPropagation(); unref(moreOptions).toggle(); })
                }, [..._hoisted_5]),
                createElementVNode("p", {
                    class: "post-text",
                    innerHTML: _ctx.$sanitize(item.value?.text && unref(formatText)(item.value.text)),
                    onClick: _cache[1] || (_cache[1] = ($event) => ($event.target.nodeName === 'A' && $event.stopPropagation()))
                }, null, 8, _hoisted_6),
                (item.value?.text == 'donation')
                    ? (openBlock(), createElementBlock("div", _hoisted_7, [
                        createElementVNode("div", null, [
                            _hoisted_8$1,
                            _hoisted_9$1,
                            createElementVNode("button", {
                                class: "btn-primary rounded",
                                onClick: _cache[2] || (_cache[2] = ($event) => ($event.stopPropagation()))
                            }, " Donate ")
                        ])
                    ]))
                    : createCommentVNode("v-if", true),
                (item.value?.lang !== 'en')
                    ? (openBlock(), createElementBlock("blockquote", _hoisted_10$1, [
                        createTextVNode(toDisplayString(item.value?.translatedText) + " ", 1),
                        _hoisted_11,
                        createElementVNode("p", _hoisted_12, [
                            _hoisted_13,
                            createTextVNode(" Translated from " + toDisplayString(unref(langCodes)[item.value?.lang] ?? 'Foreign Language'), 1)
                        ])
                    ]))
                    : createCommentVNode("v-if", true),
                createElementVNode("div", _hoisted_14, [
                    createElementVNode("button", {
                        onClick: _cache[3] || (_cache[3] = ($event) => { handleLove(); $event.stopPropagation(); })
                    }, [
                        (openBlock(), createElementBlock("svg", _hoisted_15, [
                            _hoisted_16$1,
                            createElementVNode("path", {
                                d: "M17.6909 5.10352C15.8348 5.10352 14.2251 6.13945 13.4329 7.65273C12.6407 6.13945 11.0309 5.10352 9.17488 5.10352C6.53426 5.10352 4.39383 7.20078 4.39383 9.78809C4.39383 14.8967 13.4329 20.6883 13.4329 20.6883C13.4329 20.6883 22.472 14.8967 22.472 9.78809C22.472 7.20078 20.3315 5.10352 17.6909 5.10352Z",
                                fill: "#E74C3C",
                                "fill-opacity": isLoved.value ? 1 : 0.2
                            }, null, 8, _hoisted_17$1)
                        ])),
                        createElementVNode("span", null, toDisplayString(item.value?.loveCount && item.value?.loveCount > 0 ? item.value?.loveCount : ''), 1)
                    ]),
                    createElementVNode("button", null, [
                        _hoisted_18$1,
                        createElementVNode("span", null, toDisplayString(item.value?.commentCount && item.value?.commentCount > 0 ? item.value?.commentCount : ''), 1)
                    ]),
                    createElementVNode("button", null, [
                        _hoisted_19,
                        createElementVNode("span", null, toDisplayString(item.value?.shareCount && item.value?.shareCount > 0 ? item.value?.shareCount : ''), 1)
                    ])
                ])
            ]));
        };
    }
});script$2.__file = "src/components/post/PostHome.vue";const _hoisted_1$1 = {
    key: 0,
    style: { "width": "100%" }
};
const _hoisted_2 = createStaticVNode("<div class=\"image\" data-v-2606e696></div><div class=\"text\" style=\"margin-top:-45px;width:25%;margin-bottom:40px;\" data-v-2606e696></div><div class=\"text\" data-v-2606e696></div><div class=\"text\" data-v-2606e696></div><div class=\"text\" data-v-2606e696></div><div class=\"btns\" data-v-2606e696></div>", 6);
const _hoisted_8 = [
    _hoisted_2
];
const _hoisted_9 = {
    key: 1,
    class: "skeleton-loader",
    style: { "padding-top": "20px", "background": "transparent" }
};
const _hoisted_10 = createStaticVNode("<div class=\"image\" data-v-2606e696></div><div class=\"text\" style=\"margin-top:-45px;width:25%;margin-bottom:40px;\" data-v-2606e696></div><div class=\"text\" data-v-2606e696></div><div class=\"text\" data-v-2606e696></div><div class=\"text\" data-v-2606e696></div><div class=\"btns\" data-v-2606e696></div>", 6);
const _hoisted_16 = [
    _hoisted_10
];
const _hoisted_17 = { key: 2 };
const _hoisted_18 = createStaticVNode("<div class=\"image\" style=\"margin-left:0px;\" data-v-2606e696></div><div class=\"text\" style=\"margin-top:-45px;width:25%;margin-bottom:20px;margin-left:60px;\" data-v-2606e696></div><div class=\"text\" style=\"margin-left:60px;\" data-v-2606e696></div><div class=\"text\" style=\"margin-left:60px;\" data-v-2606e696></div><div class=\"text\" style=\"margin-left:60px;\" data-v-2606e696></div>", 5);
const _hoisted_23 = [
    _hoisted_18
];
const _hoisted_24 = {
    key: 3,
    class: "skeleton-loader",
    style: { "padding-top": "12%", "display": "flex", "flex-direction": "column", "align-items": "center", "background": "transparent" }
};
const _hoisted_25 = createStaticVNode("<div class=\"image\" style=\"height:85px;width:85px;border-radius:50%;margin-left:0px;align-self:center;\" data-v-2606e696></div><div class=\"text\" style=\"margin-left:0px;width:50%;\" data-v-2606e696></div><div class=\"text\" style=\"margin-left:0px;margin-top:20px;\" data-v-2606e696></div><div class=\"text\" style=\"margin-left:0px;\" data-v-2606e696></div><div class=\"btns\" data-v-2606e696></div>", 5);
const _hoisted_30 = [
    _hoisted_25
];
var script$1 = defineComponent({
    __name: 'SkeletonLoader',
    props: {
        count: {
            type: Number,
            default: 4
        },
        type: String
    },
    setup(__props) {
        const props = __props;
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock(Fragment, null, [
                (!props?.type)
                    ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(props.count, (item) => {
                            return (openBlock(), createElementBlock("div", {
                                class: "skeleton-loader",
                                key: item
                            }, [..._hoisted_8]));
                        }), 128))
                    ]))
                    : createCommentVNode("v-if", true),
                (props?.type && props?.type === 'full-post')
                    ? (openBlock(), createElementBlock("div", _hoisted_9, [..._hoisted_16]))
                    : createCommentVNode("v-if", true),
                (props?.type && props?.type === 'comments')
                    ? (openBlock(), createElementBlock("div", _hoisted_17, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(3, (item) => {
                            return createElementVNode("div", {
                                class: "skeleton-loader",
                                style: { "padding-top": "20px", "background": "transparent" },
                                key: item
                            }, [..._hoisted_23]);
                        }), 64))
                    ]))
                    : createCommentVNode("v-if", true),
                (props?.type && props?.type === 'profile')
                    ? (openBlock(), createElementBlock("div", _hoisted_24, [..._hoisted_30]))
                    : createCommentVNode("v-if", true)
            ], 64));
        };
    }
});var css_248z$1 = "\n.skeleton-loader[data-v-2606e696] {\n    width: 600px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 10px;\n    padding-top: 30px;\n    padding-bottom: 50px;\n    background: var(--color-background-mute);\n    margin-bottom: 10px;\n    -webkit-animation: pulse-2606e696 2s ease-out infinite;\n            animation: pulse-2606e696 2s ease-out infinite;\n}\n@media (max-width: 600px) {\n.skeleton-loader[data-v-2606e696] {\n        width: 100%;\n}\n}\n.image[data-v-2606e696] {\n    width: 40px;\n    height: 40px;\n    background: rgba(255, 255, 255, 0.1);\n    -webkit-align-self: flex-start;\n        -ms-flex-item-align: start;\n            align-self: flex-start;\n    margin-left: 5%;\n    border-radius: 20px;\n    margin-bottom: 20px;\n}\n.text[data-v-2606e696] {\n    width: 75%;\n    height: 10px;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 15px;\n    margin-bottom: 10px;\n    margin-left: 18%;\n}\n.btns[data-v-2606e696] {\n    width: 90%;\n    margin-left: 5%;\n    height: 30px;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 15px;\n    margin-top: 30px;\n}\n@-webkit-keyframes pulse-2606e696 {\n0% {\n        opacity: 0.8;\n}\n50% {\n        opacity: 1;\n}\n100% {\n        opacity: 0.8;\n}\n}\n@keyframes pulse-2606e696 {\n0% {\n        opacity: 0.8;\n}\n50% {\n        opacity: 1;\n}\n100% {\n        opacity: 0.8;\n}\n}";
styleInject(css_248z$1);script$1.__scopeId = "data-v-2606e696";
script$1.__file = "src/components/template/SkeletonLoader.vue";var vue3Sanitize = {exports: {}};var lib$5 = {};var Parser = {};var Tokenizer = {};var decode = {};var decodeDataHtml = {};var hasRequiredDecodeDataHtml;

function requireDecodeDataHtml () {
	if (hasRequiredDecodeDataHtml) return decodeDataHtml;
	hasRequiredDecodeDataHtml = 1;
	// Generated using scripts/write-decode-map.ts
	Object.defineProperty(decodeDataHtml, "__esModule", { value: true });
	decodeDataHtml.default = new Uint16Array(
	// prettier-ignore
	"\u1d41<\xd5\u0131\u028a\u049d\u057b\u05d0\u0675\u06de\u07a2\u07d6\u080f\u0a4a\u0a91\u0da1\u0e6d\u0f09\u0f26\u10ca\u1228\u12e1\u1415\u149d\u14c3\u14df\u1525\0\0\0\0\0\0\u156b\u16cd\u198d\u1c12\u1ddd\u1f7e\u2060\u21b0\u228d\u23c0\u23fb\u2442\u2824\u2912\u2d08\u2e48\u2fce\u3016\u32ba\u3639\u37ac\u38fe\u3a28\u3a71\u3ae0\u3b2e\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803b\xc6\u40c6P\u803b&\u4026cute\u803b\xc1\u40c1reve;\u4102\u0100iyx}rc\u803b\xc2\u40c2;\u4410r;\uc000\ud835\udd04rave\u803b\xc0\u40c0pha;\u4391acr;\u4100d;\u6a53\u0100gp\x9d\xa1on;\u4104f;\uc000\ud835\udd38plyFunction;\u6061ing\u803b\xc5\u40c5\u0100cs\xbe\xc3r;\uc000\ud835\udc9cign;\u6254ilde\u803b\xc3\u40c3ml\u803b\xc4\u40c4\u0400aceforsu\xe5\xfb\xfe\u0117\u011c\u0122\u0127\u012a\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6ae7ed;\u6306y;\u4411\u0180crt\u0105\u010b\u0114ause;\u6235noullis;\u612ca;\u4392r;\uc000\ud835\udd05pf;\uc000\ud835\udd39eve;\u42d8c\xf2\u0113mpeq;\u624e\u0700HOacdefhilorsu\u014d\u0151\u0156\u0180\u019e\u01a2\u01b5\u01b7\u01ba\u01dc\u0215\u0273\u0278\u027ecy;\u4427PY\u803b\xa9\u40a9\u0180cpy\u015d\u0162\u017aute;\u4106\u0100;i\u0167\u0168\u62d2talDifferentialD;\u6145leys;\u612d\u0200aeio\u0189\u018e\u0194\u0198ron;\u410cdil\u803b\xc7\u40c7rc;\u4108nint;\u6230ot;\u410a\u0100dn\u01a7\u01adilla;\u40b8terDot;\u40b7\xf2\u017fi;\u43a7rcle\u0200DMPT\u01c7\u01cb\u01d1\u01d6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01e2\u01f8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020foubleQuote;\u601duote;\u6019\u0200lnpu\u021e\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6a74\u0180git\u022f\u0236\u023aruent;\u6261nt;\u622fourIntegral;\u622e\u0100fr\u024c\u024e;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6a2fcr;\uc000\ud835\udc9ep\u0100;C\u0284\u0285\u62d3ap;\u624d\u0580DJSZacefios\u02a0\u02ac\u02b0\u02b4\u02b8\u02cb\u02d7\u02e1\u02e6\u0333\u048d\u0100;o\u0179\u02a5trahd;\u6911cy;\u4402cy;\u4405cy;\u440f\u0180grs\u02bf\u02c4\u02c7ger;\u6021r;\u61a1hv;\u6ae4\u0100ay\u02d0\u02d5ron;\u410e;\u4414l\u0100;t\u02dd\u02de\u6207a;\u4394r;\uc000\ud835\udd07\u0100af\u02eb\u0327\u0100cm\u02f0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031ccute;\u40b4o\u0174\u030b\u030d;\u42d9bleAcute;\u42ddrave;\u4060ilde;\u42dcond;\u62c4ferentialD;\u6146\u0470\u033d\0\0\0\u0342\u0354\0\u0405f;\uc000\ud835\udd3b\u0180;DE\u0348\u0349\u034d\u40a8ot;\u60dcqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03cf\u03e2\u03f8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037b\xbb\u0349nArrow;\u61d3\u0100eo\u0387\u03a4ft\u0180ART\u0390\u0396\u03a1rrow;\u61d0ightArrow;\u61d4e\xe5\u02cang\u0100LR\u03ab\u03c4eft\u0100AR\u03b3\u03b9rrow;\u67f8ightArrow;\u67faightArrow;\u67f9ight\u0100AT\u03d8\u03derrow;\u61d2ee;\u62a8p\u0241\u03e9\0\0\u03efrrow;\u61d1ownArrow;\u61d5erticalBar;\u6225n\u0300ABLRTa\u0412\u042a\u0430\u045e\u047f\u037crrow\u0180;BU\u041d\u041e\u0422\u6193ar;\u6913pArrow;\u61f5reve;\u4311eft\u02d2\u043a\0\u0446\0\u0450ightVector;\u6950eeVector;\u695eector\u0100;B\u0459\u045a\u61bdar;\u6956ight\u01d4\u0467\0\u0471eeVector;\u695fector\u0100;B\u047a\u047b\u61c1ar;\u6957ee\u0100;A\u0486\u0487\u62a4rrow;\u61a7\u0100ct\u0492\u0497r;\uc000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04bd\u04c0\u04c4\u04cb\u04de\u04e2\u04e7\u04ee\u04f5\u0521\u052f\u0536\u0552\u055d\u0560\u0565G;\u414aH\u803b\xd0\u40d0cute\u803b\xc9\u40c9\u0180aiy\u04d2\u04d7\u04dcron;\u411arc\u803b\xca\u40ca;\u442dot;\u4116r;\uc000\ud835\udd08rave\u803b\xc8\u40c8ement;\u6208\u0100ap\u04fa\u04fecr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65fberySmallSquare;\u65ab\u0100gp\u0526\u052aon;\u4118f;\uc000\ud835\udd3csilon;\u4395u\u0100ai\u053c\u0549l\u0100;T\u0542\u0543\u6a75ilde;\u6242librium;\u61cc\u0100ci\u0557\u055ar;\u6130m;\u6a73a;\u4397ml\u803b\xcb\u40cb\u0100ip\u056a\u056fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058d\u05b2\u05ccy;\u4424r;\uc000\ud835\udd09lled\u0253\u0597\0\0\u05a3mallSquare;\u65fcerySmallSquare;\u65aa\u0370\u05ba\0\u05bf\0\0\u05c4f;\uc000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05cb\u0600JTabcdfgorst\u05e8\u05ec\u05ef\u05fa\u0600\u0612\u0616\u061b\u061d\u0623\u066c\u0672cy;\u4403\u803b>\u403emma\u0100;d\u05f7\u05f8\u4393;\u43dcreve;\u411e\u0180eiy\u0607\u060c\u0610dil;\u4122rc;\u411c;\u4413ot;\u4120r;\uc000\ud835\udd0a;\u62d9pf;\uc000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064e\u0656\u065b\u0666qual\u0100;L\u063e\u063f\u6265ess;\u62dbullEqual;\u6267reater;\u6aa2ess;\u6277lantEqual;\u6a7eilde;\u6273cr;\uc000\ud835\udca2;\u626b\u0400Aacfiosu\u0685\u068b\u0696\u069b\u069e\u06aa\u06be\u06caRDcy;\u442a\u0100ct\u0690\u0694ek;\u42c7;\u405eirc;\u4124r;\u610clbertSpace;\u610b\u01f0\u06af\0\u06b2f;\u610dizontalLine;\u6500\u0100ct\u06c3\u06c5\xf2\u06a9rok;\u4126mp\u0144\u06d0\u06d8ownHum\xf0\u012fqual;\u624f\u0700EJOacdfgmnostu\u06fa\u06fe\u0703\u0707\u070e\u071a\u071e\u0721\u0728\u0744\u0778\u078b\u078f\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803b\xcd\u40cd\u0100iy\u0713\u0718rc\u803b\xce\u40ce;\u4418ot;\u4130r;\u6111rave\u803b\xcc\u40cc\u0180;ap\u0720\u072f\u073f\u0100cg\u0734\u0737r;\u412ainaryI;\u6148lie\xf3\u03dd\u01f4\u0749\0\u0762\u0100;e\u074d\u074e\u622c\u0100gr\u0753\u0758ral;\u622bsection;\u62c2isible\u0100CT\u076c\u0772omma;\u6063imes;\u6062\u0180gpt\u077f\u0783\u0788on;\u412ef;\uc000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01eb\u079a\0\u079ecy;\u4406l\u803b\xcf\u40cf\u0280cfosu\u07ac\u07b7\u07bc\u07c2\u07d0\u0100iy\u07b1\u07b5rc;\u4134;\u4419r;\uc000\ud835\udd0dpf;\uc000\ud835\udd41\u01e3\u07c7\0\u07ccr;\uc000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07e4\u07e8\u07ec\u07f1\u07fd\u0802\u0808cy;\u4425cy;\u440cppa;\u439a\u0100ey\u07f6\u07fbdil;\u4136;\u441ar;\uc000\ud835\udd0epf;\uc000\ud835\udd42cr;\uc000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082c\u0850\u0863\u09b3\u09b8\u09c7\u09cd\u0a37\u0a47cy;\u4409\u803b<\u403c\u0280cmnpr\u0837\u083c\u0841\u0844\u084dute;\u4139bda;\u439bg;\u67ealacetrf;\u6112r;\u619e\u0180aey\u0857\u085c\u0861ron;\u413ddil;\u413b;\u441b\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087e\u08a9\u08b1\u08e0\u08e6\u08fc\u092f\u095b\u0390\u096a\u0100nr\u0883\u088fgleBracket;\u67e8row\u0180;BR\u0899\u089a\u089e\u6190ar;\u61e4ightArrow;\u61c6eiling;\u6308o\u01f5\u08b7\0\u08c3bleBracket;\u67e6n\u01d4\u08c8\0\u08d2eeVector;\u6961ector\u0100;B\u08db\u08dc\u61c3ar;\u6959loor;\u630aight\u0100AV\u08ef\u08f5rrow;\u6194ector;\u694e\u0100er\u0901\u0917e\u0180;AV\u0909\u090a\u0910\u62a3rrow;\u61a4ector;\u695aiangle\u0180;BE\u0924\u0925\u0929\u62b2ar;\u69cfqual;\u62b4p\u0180DTV\u0937\u0942\u094cownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61bfar;\u6958ector\u0100;B\u0965\u0966\u61bcar;\u6952ight\xe1\u039cs\u0300EFGLST\u097e\u098b\u0995\u099d\u09a2\u09adqualGreater;\u62daullEqual;\u6266reater;\u6276ess;\u6aa1lantEqual;\u6a7dilde;\u6272r;\uc000\ud835\udd0f\u0100;e\u09bd\u09be\u62d8ftarrow;\u61daidot;\u413f\u0180npw\u09d4\u0a16\u0a1bg\u0200LRlr\u09de\u09f7\u0a02\u0a10eft\u0100AR\u09e6\u09ecrrow;\u67f5ightArrow;\u67f7ightArrow;\u67f6eft\u0100ar\u03b3\u0a0aight\xe1\u03bfight\xe1\u03caf;\uc000\ud835\udd43er\u0100LR\u0a22\u0a2ceftArrow;\u6199ightArrow;\u6198\u0180cht\u0a3e\u0a40\u0a42\xf2\u084c;\u61b0rok;\u4141;\u626a\u0400acefiosu\u0a5a\u0a5d\u0a60\u0a77\u0a7c\u0a85\u0a8b\u0a8ep;\u6905y;\u441c\u0100dl\u0a65\u0a6fiumSpace;\u605flintrf;\u6133r;\uc000\ud835\udd10nusPlus;\u6213pf;\uc000\ud835\udd44c\xf2\u0a76;\u439c\u0480Jacefostu\u0aa3\u0aa7\u0aad\u0ac0\u0b14\u0b19\u0d91\u0d97\u0d9ecy;\u440acute;\u4143\u0180aey\u0ab4\u0ab9\u0aberon;\u4147dil;\u4145;\u441d\u0180gsw\u0ac7\u0af0\u0b0eative\u0180MTV\u0ad3\u0adf\u0ae8ediumSpace;\u600bhi\u0100cn\u0ae6\u0ad8\xeb\u0ad9eryThi\xee\u0ad9ted\u0100GL\u0af8\u0b06reaterGreate\xf2\u0673essLes\xf3\u0a48Line;\u400ar;\uc000\ud835\udd11\u0200Bnpt\u0b22\u0b28\u0b37\u0b3areak;\u6060BreakingSpace;\u40a0f;\u6115\u0680;CDEGHLNPRSTV\u0b55\u0b56\u0b6a\u0b7c\u0ba1\u0beb\u0c04\u0c5e\u0c84\u0ca6\u0cd8\u0d61\u0d85\u6aec\u0100ou\u0b5b\u0b64ngruent;\u6262pCap;\u626doubleVerticalBar;\u6226\u0180lqx\u0b83\u0b8a\u0b9bement;\u6209ual\u0100;T\u0b92\u0b93\u6260ilde;\uc000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0bb6\u0bb7\u0bbd\u0bc9\u0bd3\u0bd8\u0be5\u626fqual;\u6271ullEqual;\uc000\u2267\u0338reater;\uc000\u226b\u0338ess;\u6279lantEqual;\uc000\u2a7e\u0338ilde;\u6275ump\u0144\u0bf2\u0bfdownHump;\uc000\u224e\u0338qual;\uc000\u224f\u0338e\u0100fs\u0c0a\u0c27tTriangle\u0180;BE\u0c1a\u0c1b\u0c21\u62eaar;\uc000\u29cf\u0338qual;\u62ecs\u0300;EGLST\u0c35\u0c36\u0c3c\u0c44\u0c4b\u0c58\u626equal;\u6270reater;\u6278ess;\uc000\u226a\u0338lantEqual;\uc000\u2a7d\u0338ilde;\u6274ested\u0100GL\u0c68\u0c79reaterGreater;\uc000\u2aa2\u0338essLess;\uc000\u2aa1\u0338recedes\u0180;ES\u0c92\u0c93\u0c9b\u6280qual;\uc000\u2aaf\u0338lantEqual;\u62e0\u0100ei\u0cab\u0cb9verseElement;\u620cghtTriangle\u0180;BE\u0ccb\u0ccc\u0cd2\u62ebar;\uc000\u29d0\u0338qual;\u62ed\u0100qu\u0cdd\u0d0cuareSu\u0100bp\u0ce8\u0cf9set\u0100;E\u0cf0\u0cf3\uc000\u228f\u0338qual;\u62e2erset\u0100;E\u0d03\u0d06\uc000\u2290\u0338qual;\u62e3\u0180bcp\u0d13\u0d24\u0d4eset\u0100;E\u0d1b\u0d1e\uc000\u2282\u20d2qual;\u6288ceeds\u0200;EST\u0d32\u0d33\u0d3b\u0d46\u6281qual;\uc000\u2ab0\u0338lantEqual;\u62e1ilde;\uc000\u227f\u0338erset\u0100;E\u0d58\u0d5b\uc000\u2283\u20d2qual;\u6289ilde\u0200;EFT\u0d6e\u0d6f\u0d75\u0d7f\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uc000\ud835\udca9ilde\u803b\xd1\u40d1;\u439d\u0700Eacdfgmoprstuv\u0dbd\u0dc2\u0dc9\u0dd5\u0ddb\u0de0\u0de7\u0dfc\u0e02\u0e20\u0e22\u0e32\u0e3f\u0e44lig;\u4152cute\u803b\xd3\u40d3\u0100iy\u0dce\u0dd3rc\u803b\xd4\u40d4;\u441eblac;\u4150r;\uc000\ud835\udd12rave\u803b\xd2\u40d2\u0180aei\u0dee\u0df2\u0df6cr;\u414cga;\u43a9cron;\u439fpf;\uc000\ud835\udd46enCurly\u0100DQ\u0e0e\u0e1aoubleQuote;\u601cuote;\u6018;\u6a54\u0100cl\u0e27\u0e2cr;\uc000\ud835\udcaaash\u803b\xd8\u40d8i\u016c\u0e37\u0e3cde\u803b\xd5\u40d5es;\u6a37ml\u803b\xd6\u40d6er\u0100BP\u0e4b\u0e60\u0100ar\u0e50\u0e53r;\u603eac\u0100ek\u0e5a\u0e5c;\u63deet;\u63b4arenthesis;\u63dc\u0480acfhilors\u0e7f\u0e87\u0e8a\u0e8f\u0e92\u0e94\u0e9d\u0eb0\u0efcrtialD;\u6202y;\u441fr;\uc000\ud835\udd13i;\u43a6;\u43a0usMinus;\u40b1\u0100ip\u0ea2\u0eadncareplan\xe5\u069df;\u6119\u0200;eio\u0eb9\u0eba\u0ee0\u0ee4\u6abbcedes\u0200;EST\u0ec8\u0ec9\u0ecf\u0eda\u627aqual;\u6aaflantEqual;\u627cilde;\u627eme;\u6033\u0100dp\u0ee9\u0eeeuct;\u620fortion\u0100;a\u0225\u0ef9l;\u621d\u0100ci\u0f01\u0f06r;\uc000\ud835\udcab;\u43a8\u0200Ufos\u0f11\u0f16\u0f1b\u0f1fOT\u803b\"\u4022r;\uc000\ud835\udd14pf;\u611acr;\uc000\ud835\udcac\u0600BEacefhiorsu\u0f3e\u0f43\u0f47\u0f60\u0f73\u0fa7\u0faa\u0fad\u1096\u10a9\u10b4\u10bearr;\u6910G\u803b\xae\u40ae\u0180cnr\u0f4e\u0f53\u0f56ute;\u4154g;\u67ebr\u0100;t\u0f5c\u0f5d\u61a0l;\u6916\u0180aey\u0f67\u0f6c\u0f71ron;\u4158dil;\u4156;\u4420\u0100;v\u0f78\u0f79\u611cerse\u0100EU\u0f82\u0f99\u0100lq\u0f87\u0f8eement;\u620builibrium;\u61cbpEquilibrium;\u696fr\xbb\u0f79o;\u43a1ght\u0400ACDFTUVa\u0fc1\u0feb\u0ff3\u1022\u1028\u105b\u1087\u03d8\u0100nr\u0fc6\u0fd2gleBracket;\u67e9row\u0180;BL\u0fdc\u0fdd\u0fe1\u6192ar;\u61e5eftArrow;\u61c4eiling;\u6309o\u01f5\u0ff9\0\u1005bleBracket;\u67e7n\u01d4\u100a\0\u1014eeVector;\u695dector\u0100;B\u101d\u101e\u61c2ar;\u6955loor;\u630b\u0100er\u102d\u1043e\u0180;AV\u1035\u1036\u103c\u62a2rrow;\u61a6ector;\u695biangle\u0180;BE\u1050\u1051\u1055\u62b3ar;\u69d0qual;\u62b5p\u0180DTV\u1063\u106e\u1078ownVector;\u694feeVector;\u695cector\u0100;B\u1082\u1083\u61bear;\u6954ector\u0100;B\u1091\u1092\u61c0ar;\u6953\u0100pu\u109b\u109ef;\u611dndImplies;\u6970ightarrow;\u61db\u0100ch\u10b9\u10bcr;\u611b;\u61b1leDelayed;\u69f4\u0680HOacfhimoqstu\u10e4\u10f1\u10f7\u10fd\u1119\u111e\u1151\u1156\u1161\u1167\u11b5\u11bb\u11bf\u0100Cc\u10e9\u10eeHcy;\u4429y;\u4428FTcy;\u442ccute;\u415a\u0280;aeiy\u1108\u1109\u110e\u1113\u1117\u6abcron;\u4160dil;\u415erc;\u415c;\u4421r;\uc000\ud835\udd16ort\u0200DLRU\u112a\u1134\u113e\u1149ownArrow\xbb\u041eeftArrow\xbb\u089aightArrow\xbb\u0fddpArrow;\u6191gma;\u43a3allCircle;\u6218pf;\uc000\ud835\udd4a\u0272\u116d\0\0\u1170t;\u621aare\u0200;ISU\u117b\u117c\u1189\u11af\u65a1ntersection;\u6293u\u0100bp\u118f\u119eset\u0100;E\u1197\u1198\u628fqual;\u6291erset\u0100;E\u11a8\u11a9\u6290qual;\u6292nion;\u6294cr;\uc000\ud835\udcaear;\u62c6\u0200bcmp\u11c8\u11db\u1209\u120b\u0100;s\u11cd\u11ce\u62d0et\u0100;E\u11cd\u11d5qual;\u6286\u0100ch\u11e0\u1205eeds\u0200;EST\u11ed\u11ee\u11f4\u11ff\u627bqual;\u6ab0lantEqual;\u627dilde;\u627fTh\xe1\u0f8c;\u6211\u0180;es\u1212\u1213\u1223\u62d1rset\u0100;E\u121c\u121d\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123e\u1244\u1249\u1255\u125e\u1271\u1276\u129f\u12c2\u12c8\u12d1ORN\u803b\xde\u40deADE;\u6122\u0100Hc\u124e\u1252cy;\u440by;\u4426\u0100bu\u125a\u125c;\u4009;\u43a4\u0180aey\u1265\u126a\u126fron;\u4164dil;\u4162;\u4422r;\uc000\ud835\udd17\u0100ei\u127b\u1289\u01f2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128e\u1298kSpace;\uc000\u205f\u200aSpace;\u6009lde\u0200;EFT\u12ab\u12ac\u12b2\u12bc\u623cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uc000\ud835\udd4bipleDot;\u60db\u0100ct\u12d6\u12dbr;\uc000\ud835\udcafrok;\u4166\u0ae1\u12f7\u130e\u131a\u1326\0\u132c\u1331\0\0\0\0\0\u1338\u133d\u1377\u1385\0\u13ff\u1404\u140a\u1410\u0100cr\u12fb\u1301ute\u803b\xda\u40dar\u0100;o\u1307\u1308\u619fcir;\u6949r\u01e3\u1313\0\u1316y;\u440eve;\u416c\u0100iy\u131e\u1323rc\u803b\xdb\u40db;\u4423blac;\u4170r;\uc000\ud835\udd18rave\u803b\xd9\u40d9acr;\u416a\u0100di\u1341\u1369er\u0100BP\u1348\u135d\u0100ar\u134d\u1350r;\u405fac\u0100ek\u1357\u1359;\u63dfet;\u63b5arenthesis;\u63ddon\u0100;P\u1370\u1371\u62c3lus;\u628e\u0100gp\u137b\u137fon;\u4172f;\uc000\ud835\udd4c\u0400ADETadps\u1395\u13ae\u13b8\u13c4\u03e8\u13d2\u13d7\u13f3rrow\u0180;BD\u1150\u13a0\u13a4ar;\u6912ownArrow;\u61c5ownArrow;\u6195quilibrium;\u696eee\u0100;A\u13cb\u13cc\u62a5rrow;\u61a5own\xe1\u03f3er\u0100LR\u13de\u13e8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13f9\u13fa\u43d2on;\u43a5ing;\u416ecr;\uc000\ud835\udcb0ilde;\u4168ml\u803b\xdc\u40dc\u0480Dbcdefosv\u1427\u142c\u1430\u1433\u143e\u1485\u148a\u1490\u1496ash;\u62abar;\u6aeby;\u4412ash\u0100;l\u143b\u143c\u62a9;\u6ae6\u0100er\u1443\u1445;\u62c1\u0180bty\u144c\u1450\u147aar;\u6016\u0100;i\u144f\u1455cal\u0200BLST\u1461\u1465\u146a\u1474ar;\u6223ine;\u407ceparator;\u6758ilde;\u6240ThinSpace;\u600ar;\uc000\ud835\udd19pf;\uc000\ud835\udd4dcr;\uc000\ud835\udcb1dash;\u62aa\u0280cefos\u14a7\u14ac\u14b1\u14b6\u14bcirc;\u4174dge;\u62c0r;\uc000\ud835\udd1apf;\uc000\ud835\udd4ecr;\uc000\ud835\udcb2\u0200fios\u14cb\u14d0\u14d2\u14d8r;\uc000\ud835\udd1b;\u439epf;\uc000\ud835\udd4fcr;\uc000\ud835\udcb3\u0480AIUacfosu\u14f1\u14f5\u14f9\u14fd\u1504\u150f\u1514\u151a\u1520cy;\u442fcy;\u4407cy;\u442ecute\u803b\xdd\u40dd\u0100iy\u1509\u150drc;\u4176;\u442br;\uc000\ud835\udd1cpf;\uc000\ud835\udd50cr;\uc000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153f\u154b\u154f\u155d\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417d;\u4417ot;\u417b\u01f2\u1554\0\u155boWidt\xe8\u0ad9a;\u4396r;\u6128pf;\u6124cr;\uc000\ud835\udcb5\u0be1\u1583\u158a\u1590\0\u15b0\u15b6\u15bf\0\0\0\0\u15c6\u15db\u15eb\u165f\u166d\0\u1695\u169b\u16b2\u16b9\0\u16becute\u803b\xe1\u40e1reve;\u4103\u0300;Ediuy\u159c\u159d\u15a1\u15a3\u15a8\u15ad\u623e;\uc000\u223e\u0333;\u623frc\u803b\xe2\u40e2te\u80bb\xb4\u0306;\u4430lig\u803b\xe6\u40e6\u0100;r\xb2\u15ba;\uc000\ud835\udd1erave\u803b\xe0\u40e0\u0100ep\u15ca\u15d6\u0100fp\u15cf\u15d4sym;\u6135\xe8\u15d3ha;\u43b1\u0100ap\u15dfc\u0100cl\u15e4\u15e7r;\u4101g;\u6a3f\u0264\u15f0\0\0\u160a\u0280;adsv\u15fa\u15fb\u15ff\u1601\u1607\u6227nd;\u6a55;\u6a5clope;\u6a58;\u6a5a\u0380;elmrsz\u1618\u1619\u161b\u161e\u163f\u164f\u1659\u6220;\u69a4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163a\u163c\u163e;\u69a8;\u69a9;\u69aa;\u69ab;\u69ac;\u69ad;\u69ae;\u69aft\u0100;v\u1645\u1646\u621fb\u0100;d\u164c\u164d\u62be;\u699d\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637c\u0100gp\u1663\u1667on;\u4105f;\uc000\ud835\udd52\u0380;Eaeiop\u12c1\u167b\u167d\u1682\u1684\u1687\u168a;\u6a70cir;\u6a6f;\u624ad;\u624bs;\u4027rox\u0100;e\u12c1\u1692\xf1\u1683ing\u803b\xe5\u40e5\u0180cty\u16a1\u16a6\u16a8r;\uc000\ud835\udcb6;\u402amp\u0100;e\u12c1\u16af\xf1\u0288ilde\u803b\xe3\u40e3ml\u803b\xe4\u40e4\u0100ci\u16c2\u16c8onin\xf4\u0272nt;\u6a11\u0800Nabcdefiklnoprsu\u16ed\u16f1\u1730\u173c\u1743\u1748\u1778\u177d\u17e0\u17e6\u1839\u1850\u170d\u193d\u1948\u1970ot;\u6aed\u0100cr\u16f6\u171ek\u0200ceps\u1700\u1705\u170d\u1713ong;\u624cpsilon;\u43f6rime;\u6035im\u0100;e\u171a\u171b\u623dq;\u62cd\u0176\u1722\u1726ee;\u62bded\u0100;g\u172c\u172d\u6305e\xbb\u172drk\u0100;t\u135c\u1737brk;\u63b6\u0100oy\u1701\u1741;\u4431quo;\u601e\u0280cmprt\u1753\u175b\u1761\u1764\u1768aus\u0100;e\u010a\u0109ptyv;\u69b0s\xe9\u170cno\xf5\u0113\u0180ahw\u176f\u1771\u1773;\u43b2;\u6136een;\u626cr;\uc000\ud835\udd1fg\u0380costuvw\u178d\u179d\u17b3\u17c1\u17d5\u17db\u17de\u0180aiu\u1794\u1796\u179a\xf0\u0760rc;\u65efp\xbb\u1371\u0180dpt\u17a4\u17a8\u17adot;\u6a00lus;\u6a01imes;\u6a02\u0271\u17b9\0\0\u17becup;\u6a06ar;\u6605riangle\u0100du\u17cd\u17d2own;\u65bdp;\u65b3plus;\u6a04e\xe5\u1444\xe5\u14adarow;\u690d\u0180ako\u17ed\u1826\u1835\u0100cn\u17f2\u1823k\u0180lst\u17fa\u05ab\u1802ozenge;\u69ebriangle\u0200;dlr\u1812\u1813\u1818\u181d\u65b4own;\u65beeft;\u65c2ight;\u65b8k;\u6423\u01b1\u182b\0\u1833\u01b2\u182f\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183e\u184d\u0100;q\u1843\u1846\uc000=\u20e5uiv;\uc000\u2261\u20e5t;\u6310\u0200ptwx\u1859\u185e\u1867\u186cf;\uc000\ud835\udd53\u0100;t\u13cb\u1863om\xbb\u13cctie;\u62c8\u0600DHUVbdhmptuv\u1885\u1896\u18aa\u18bb\u18d7\u18db\u18ec\u18ff\u1905\u190a\u1910\u1921\u0200LRlr\u188e\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18a1\u18a2\u18a4\u18a6\u18a8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18b3\u18b5\u18b7\u18b9;\u655d;\u655a;\u655c;\u6559\u0380;HLRhlr\u18ca\u18cb\u18cd\u18cf\u18d1\u18d3\u18d5\u6551;\u656c;\u6563;\u6560;\u656b;\u6562;\u655fox;\u69c9\u0200LRlr\u18e4\u18e6\u18e8\u18ea;\u6555;\u6552;\u6510;\u650c\u0280;DUdu\u06bd\u18f7\u18f9\u18fb\u18fd;\u6565;\u6568;\u652c;\u6534inus;\u629flus;\u629eimes;\u62a0\u0200LRlr\u1919\u191b\u191d\u191f;\u655b;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193b\u6502;\u656a;\u6561;\u655e;\u653c;\u6524;\u651c\u0100ev\u0123\u1942bar\u803b\xa6\u40a6\u0200ceio\u1951\u1956\u195a\u1960r;\uc000\ud835\udcb7mi;\u604fm\u0100;e\u171a\u171cl\u0180;bh\u1968\u1969\u196b\u405c;\u69c5sub;\u67c8\u016c\u1974\u197el\u0100;e\u1979\u197a\u6022t\xbb\u197ap\u0180;Ee\u012f\u1985\u1987;\u6aae\u0100;q\u06dc\u06db\u0ce1\u19a7\0\u19e8\u1a11\u1a15\u1a32\0\u1a37\u1a50\0\0\u1ab4\0\0\u1ac1\0\0\u1b21\u1b2e\u1b4d\u1b52\0\u1bfd\0\u1c0c\u0180cpr\u19ad\u19b2\u19ddute;\u4107\u0300;abcds\u19bf\u19c0\u19c4\u19ca\u19d5\u19d9\u6229nd;\u6a44rcup;\u6a49\u0100au\u19cf\u19d2p;\u6a4bp;\u6a47ot;\u6a40;\uc000\u2229\ufe00\u0100eo\u19e2\u19e5t;\u6041\xee\u0693\u0200aeiu\u19f0\u19fb\u1a01\u1a05\u01f0\u19f5\0\u19f8s;\u6a4don;\u410ddil\u803b\xe7\u40e7rc;\u4109ps\u0100;s\u1a0c\u1a0d\u6a4cm;\u6a50ot;\u410b\u0180dmn\u1a1b\u1a20\u1a26il\u80bb\xb8\u01adptyv;\u69b2t\u8100\xa2;e\u1a2d\u1a2e\u40a2r\xe4\u01b2r;\uc000\ud835\udd20\u0180cei\u1a3d\u1a40\u1a4dy;\u4447ck\u0100;m\u1a47\u1a48\u6713ark\xbb\u1a48;\u43c7r\u0380;Ecefms\u1a5f\u1a60\u1a62\u1a6b\u1aa4\u1aaa\u1aae\u65cb;\u69c3\u0180;el\u1a69\u1a6a\u1a6d\u42c6q;\u6257e\u0261\u1a74\0\0\u1a88rrow\u0100lr\u1a7c\u1a81eft;\u61baight;\u61bb\u0280RSacd\u1a92\u1a94\u1a96\u1a9a\u1a9f\xbb\u0f47;\u64c8st;\u629birc;\u629aash;\u629dnint;\u6a10id;\u6aefcir;\u69c2ubs\u0100;u\u1abb\u1abc\u6663it\xbb\u1abc\u02ec\u1ac7\u1ad4\u1afa\0\u1b0aon\u0100;e\u1acd\u1ace\u403a\u0100;q\xc7\xc6\u026d\u1ad9\0\0\u1ae2a\u0100;t\u1ade\u1adf\u402c;\u4040\u0180;fl\u1ae8\u1ae9\u1aeb\u6201\xee\u1160e\u0100mx\u1af1\u1af6ent\xbb\u1ae9e\xf3\u024d\u01e7\u1afe\0\u1b07\u0100;d\u12bb\u1b02ot;\u6a6dn\xf4\u0246\u0180fry\u1b10\u1b14\u1b17;\uc000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1b1dr;\u6117\u0100ao\u1b25\u1b29rr;\u61b5ss;\u6717\u0100cu\u1b32\u1b37r;\uc000\ud835\udcb8\u0100bp\u1b3c\u1b44\u0100;e\u1b41\u1b42\u6acf;\u6ad1\u0100;e\u1b49\u1b4a\u6ad0;\u6ad2dot;\u62ef\u0380delprvw\u1b60\u1b6c\u1b77\u1b82\u1bac\u1bd4\u1bf9arr\u0100lr\u1b68\u1b6a;\u6938;\u6935\u0270\u1b72\0\0\u1b75r;\u62dec;\u62dfarr\u0100;p\u1b7f\u1b80\u61b6;\u693d\u0300;bcdos\u1b8f\u1b90\u1b96\u1ba1\u1ba5\u1ba8\u622arcap;\u6a48\u0100au\u1b9b\u1b9ep;\u6a46p;\u6a4aot;\u628dr;\u6a45;\uc000\u222a\ufe00\u0200alrv\u1bb5\u1bbf\u1bde\u1be3rr\u0100;m\u1bbc\u1bbd\u61b7;\u693cy\u0180evw\u1bc7\u1bd4\u1bd8q\u0270\u1bce\0\0\u1bd2re\xe3\u1b73u\xe3\u1b75ee;\u62ceedge;\u62cfen\u803b\xa4\u40a4earrow\u0100lr\u1bee\u1bf3eft\xbb\u1b80ight\xbb\u1bbde\xe4\u1bdd\u0100ci\u1c01\u1c07onin\xf4\u01f7nt;\u6231lcty;\u632d\u0980AHabcdefhijlorstuwz\u1c38\u1c3b\u1c3f\u1c5d\u1c69\u1c75\u1c8a\u1c9e\u1cac\u1cb7\u1cfb\u1cff\u1d0d\u1d7b\u1d91\u1dab\u1dbb\u1dc6\u1dcdr\xf2\u0381ar;\u6965\u0200glrs\u1c48\u1c4d\u1c52\u1c54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1c5a\u1c5b\u6010\xbb\u090a\u016b\u1c61\u1c67arow;\u690fa\xe3\u0315\u0100ay\u1c6e\u1c73ron;\u410f;\u4434\u0180;ao\u0332\u1c7c\u1c84\u0100gr\u02bf\u1c81r;\u61catseq;\u6a77\u0180glm\u1c91\u1c94\u1c98\u803b\xb0\u40b0ta;\u43b4ptyv;\u69b1\u0100ir\u1ca3\u1ca8sht;\u697f;\uc000\ud835\udd21ar\u0100lr\u1cb3\u1cb5\xbb\u08dc\xbb\u101e\u0280aegsv\u1cc2\u0378\u1cd6\u1cdc\u1ce0m\u0180;os\u0326\u1cca\u1cd4nd\u0100;s\u0326\u1cd1uit;\u6666amma;\u43ddin;\u62f2\u0180;io\u1ce7\u1ce8\u1cf8\u40f7de\u8100\xf7;o\u1ce7\u1cf0ntimes;\u62c7n\xf8\u1cf7cy;\u4452c\u026f\u1d06\0\0\u1d0arn;\u631eop;\u630d\u0280lptuw\u1d18\u1d1d\u1d22\u1d49\u1d55lar;\u4024f;\uc000\ud835\udd55\u0280;emps\u030b\u1d2d\u1d37\u1d3d\u1d42q\u0100;d\u0352\u1d33ot;\u6251inus;\u6238lus;\u6214quare;\u62a1blebarwedg\xe5\xfan\u0180adh\u112e\u1d5d\u1d67ownarrow\xf3\u1c83arpoon\u0100lr\u1d72\u1d76ef\xf4\u1cb4igh\xf4\u1cb6\u0162\u1d7f\u1d85karo\xf7\u0f42\u026f\u1d8a\0\0\u1d8ern;\u631fop;\u630c\u0180cot\u1d98\u1da3\u1da6\u0100ry\u1d9d\u1da1;\uc000\ud835\udcb9;\u4455l;\u69f6rok;\u4111\u0100dr\u1db0\u1db4ot;\u62f1i\u0100;f\u1dba\u1816\u65bf\u0100ah\u1dc0\u1dc3r\xf2\u0429a\xf2\u0fa6angle;\u69a6\u0100ci\u1dd2\u1dd5y;\u445fgrarr;\u67ff\u0900Dacdefglmnopqrstux\u1e01\u1e09\u1e19\u1e38\u0578\u1e3c\u1e49\u1e61\u1e7e\u1ea5\u1eaf\u1ebd\u1ee1\u1f2a\u1f37\u1f44\u1f4e\u1f5a\u0100Do\u1e06\u1d34o\xf4\u1c89\u0100cs\u1e0e\u1e14ute\u803b\xe9\u40e9ter;\u6a6e\u0200aioy\u1e22\u1e27\u1e31\u1e36ron;\u411br\u0100;c\u1e2d\u1e2e\u6256\u803b\xea\u40ealon;\u6255;\u444dot;\u4117\u0100Dr\u1e41\u1e45ot;\u6252;\uc000\ud835\udd22\u0180;rs\u1e50\u1e51\u1e57\u6a9aave\u803b\xe8\u40e8\u0100;d\u1e5c\u1e5d\u6a96ot;\u6a98\u0200;ils\u1e6a\u1e6b\u1e72\u1e74\u6a99nters;\u63e7;\u6113\u0100;d\u1e79\u1e7a\u6a95ot;\u6a97\u0180aps\u1e85\u1e89\u1e97cr;\u4113ty\u0180;sv\u1e92\u1e93\u1e95\u6205et\xbb\u1e93p\u01001;\u1e9d\u1ea4\u0133\u1ea1\u1ea3;\u6004;\u6005\u6003\u0100gs\u1eaa\u1eac;\u414bp;\u6002\u0100gp\u1eb4\u1eb8on;\u4119f;\uc000\ud835\udd56\u0180als\u1ec4\u1ece\u1ed2r\u0100;s\u1eca\u1ecb\u62d5l;\u69e3us;\u6a71i\u0180;lv\u1eda\u1edb\u1edf\u43b5on\xbb\u1edb;\u43f5\u0200csuv\u1eea\u1ef3\u1f0b\u1f23\u0100io\u1eef\u1e31rc\xbb\u1e2e\u0269\u1ef9\0\0\u1efb\xed\u0548ant\u0100gl\u1f02\u1f06tr\xbb\u1e5dess\xbb\u1e7a\u0180aei\u1f12\u1f16\u1f1als;\u403dst;\u625fv\u0100;D\u0235\u1f20D;\u6a78parsl;\u69e5\u0100Da\u1f2f\u1f33ot;\u6253rr;\u6971\u0180cdi\u1f3e\u1f41\u1ef8r;\u612fo\xf4\u0352\u0100ah\u1f49\u1f4b;\u43b7\u803b\xf0\u40f0\u0100mr\u1f53\u1f57l\u803b\xeb\u40ebo;\u60ac\u0180cip\u1f61\u1f64\u1f67l;\u4021s\xf4\u056e\u0100eo\u1f6c\u1f74ctatio\xee\u0559nential\xe5\u0579\u09e1\u1f92\0\u1f9e\0\u1fa1\u1fa7\0\0\u1fc6\u1fcc\0\u1fd3\0\u1fe6\u1fea\u2000\0\u2008\u205allingdotse\xf1\u1e44y;\u4444male;\u6640\u0180ilr\u1fad\u1fb3\u1fc1lig;\u8000\ufb03\u0269\u1fb9\0\0\u1fbdg;\u8000\ufb00ig;\u8000\ufb04;\uc000\ud835\udd23lig;\u8000\ufb01lig;\uc000fj\u0180alt\u1fd9\u1fdc\u1fe1t;\u666dig;\u8000\ufb02ns;\u65b1of;\u4192\u01f0\u1fee\0\u1ff3f;\uc000\ud835\udd57\u0100ak\u05bf\u1ff7\u0100;v\u1ffc\u1ffd\u62d4;\u6ad9artint;\u6a0d\u0100ao\u200c\u2055\u0100cs\u2011\u2052\u03b1\u201a\u2030\u2038\u2045\u2048\0\u2050\u03b2\u2022\u2025\u2027\u202a\u202c\0\u202e\u803b\xbd\u40bd;\u6153\u803b\xbc\u40bc;\u6155;\u6159;\u615b\u01b3\u2034\0\u2036;\u6154;\u6156\u02b4\u203e\u2041\0\0\u2043\u803b\xbe\u40be;\u6157;\u615c5;\u6158\u01b6\u204c\0\u204e;\u615a;\u615d8;\u615el;\u6044wn;\u6322cr;\uc000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209f\u20a5\u20b0\u20b4\u20f0\u20f5\u20fa\u20ff\u2103\u2112\u2138\u0317\u213e\u2152\u219e\u0100;l\u064d\u2087;\u6a8c\u0180cmp\u2090\u2095\u209dute;\u41f5ma\u0100;d\u209c\u1cda\u43b3;\u6a86reve;\u411f\u0100iy\u20aa\u20aerc;\u411d;\u4433ot;\u4121\u0200;lqs\u063e\u0642\u20bd\u20c9\u0180;qs\u063e\u064c\u20c4lan\xf4\u0665\u0200;cdl\u0665\u20d2\u20d5\u20e5c;\u6aa9ot\u0100;o\u20dc\u20dd\u6a80\u0100;l\u20e2\u20e3\u6a82;\u6a84\u0100;e\u20ea\u20ed\uc000\u22db\ufe00s;\u6a94r;\uc000\ud835\udd24\u0100;g\u0673\u061bmel;\u6137cy;\u4453\u0200;Eaj\u065a\u210c\u210e\u2110;\u6a92;\u6aa5;\u6aa4\u0200Eaes\u211b\u211d\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6a8arox\xbb\u2124\u0100;q\u212e\u212f\u6a88\u0100;q\u212e\u211bim;\u62e7pf;\uc000\ud835\udd58\u0100ci\u2143\u2146r;\u610am\u0180;el\u066b\u214e\u2150;\u6a8e;\u6a90\u8300>;cdlqr\u05ee\u2160\u216a\u216e\u2173\u2179\u0100ci\u2165\u2167;\u6aa7r;\u6a7aot;\u62d7Par;\u6995uest;\u6a7c\u0280adels\u2184\u216a\u2190\u0656\u219b\u01f0\u2189\0\u218epro\xf8\u209er;\u6978q\u0100lq\u063f\u2196les\xf3\u2088i\xed\u066b\u0100en\u21a3\u21adrtneqq;\uc000\u2269\ufe00\xc5\u21aa\u0500Aabcefkosy\u21c4\u21c7\u21f1\u21f5\u21fa\u2218\u221d\u222f\u2268\u227dr\xf2\u03a0\u0200ilmr\u21d0\u21d4\u21d7\u21dbrs\xf0\u1484f\xbb\u2024il\xf4\u06a9\u0100dr\u21e0\u21e4cy;\u444a\u0180;cw\u08f4\u21eb\u21efir;\u6948;\u61adar;\u610firc;\u4125\u0180alr\u2201\u220e\u2213rts\u0100;u\u2209\u220a\u6665it\xbb\u220alip;\u6026con;\u62b9r;\uc000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223a\u223e\u2243\u225e\u2263rr;\u61fftht;\u623bk\u0100lr\u2249\u2253eftarrow;\u61a9ightarrow;\u61aaf;\uc000\ud835\udd59bar;\u6015\u0180clt\u226f\u2274\u2278r;\uc000\ud835\udcbdas\xe8\u21f4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1c5b\u0ae1\u22a3\0\u22aa\0\u22b8\u22c5\u22ce\0\u22d5\u22f3\0\0\u22f8\u2322\u2367\u2362\u237f\0\u2386\u23aa\u23b4cute\u803b\xed\u40ed\u0180;iy\u0771\u22b0\u22b5rc\u803b\xee\u40ee;\u4438\u0100cx\u22bc\u22bfy;\u4435cl\u803b\xa1\u40a1\u0100fr\u039f\u22c9;\uc000\ud835\udd26rave\u803b\xec\u40ec\u0200;ino\u073e\u22dd\u22e9\u22ee\u0100in\u22e2\u22e6nt;\u6a0ct;\u622dfin;\u69dcta;\u6129lig;\u4133\u0180aop\u22fe\u231a\u231d\u0180cgt\u2305\u2308\u2317r;\u412b\u0180elp\u071f\u230f\u2313in\xe5\u078ear\xf4\u0720h;\u4131f;\u62b7ed;\u41b5\u0280;cfot\u04f4\u232c\u2331\u233d\u2341are;\u6105in\u0100;t\u2338\u2339\u621eie;\u69dddo\xf4\u2319\u0280;celp\u0757\u234c\u2350\u235b\u2361al;\u62ba\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234darhk;\u6a17rod;\u6a3c\u0200cgpt\u236f\u2372\u2376\u237by;\u4451on;\u412ff;\uc000\ud835\udd5aa;\u43b9uest\u803b\xbf\u40bf\u0100ci\u238a\u238fr;\uc000\ud835\udcben\u0280;Edsv\u04f4\u239b\u239d\u23a1\u04f3;\u62f9ot;\u62f5\u0100;v\u23a6\u23a7\u62f4;\u62f3\u0100;i\u0777\u23aelde;\u4129\u01eb\u23b8\0\u23bccy;\u4456l\u803b\xef\u40ef\u0300cfmosu\u23cc\u23d7\u23dc\u23e1\u23e7\u23f5\u0100iy\u23d1\u23d5rc;\u4135;\u4439r;\uc000\ud835\udd27ath;\u4237pf;\uc000\ud835\udd5b\u01e3\u23ec\0\u23f1r;\uc000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240b\u2416\u2422\u2427\u242d\u2431\u2435\u243bppa\u0100;v\u2413\u2414\u43ba;\u43f0\u0100ey\u241b\u2420dil;\u4137;\u443ar;\uc000\ud835\udd28reen;\u4138cy;\u4445cy;\u445cpf;\uc000\ud835\udd5ccr;\uc000\ud835\udcc0\u0b80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248d\u2491\u250e\u253d\u255a\u2580\u264e\u265e\u2665\u2679\u267d\u269a\u26b2\u26d8\u275d\u2768\u278b\u27c0\u2801\u2812\u0180art\u2477\u247a\u247cr\xf2\u09c6\xf2\u0395ail;\u691barr;\u690e\u0100;g\u0994\u248b;\u6a8bar;\u6962\u0963\u24a5\0\u24aa\0\u24b1\0\0\0\0\0\u24b5\u24ba\0\u24c6\u24c8\u24cd\0\u24f9ute;\u413amptyv;\u69b4ra\xee\u084cbda;\u43bbg\u0180;dl\u088e\u24c1\u24c3;\u6991\xe5\u088e;\u6a85uo\u803b\xab\u40abr\u0400;bfhlpst\u0899\u24de\u24e6\u24e9\u24eb\u24ee\u24f1\u24f5\u0100;f\u089d\u24e3s;\u691fs;\u691d\xeb\u2252p;\u61abl;\u6939im;\u6973l;\u61a2\u0180;ae\u24ff\u2500\u2504\u6aabil;\u6919\u0100;s\u2509\u250a\u6aad;\uc000\u2aad\ufe00\u0180abr\u2515\u2519\u251drr;\u690crk;\u6772\u0100ak\u2522\u252cc\u0100ek\u2528\u252a;\u407b;\u405b\u0100es\u2531\u2533;\u698bl\u0100du\u2539\u253b;\u698f;\u698d\u0200aeuy\u2546\u254b\u2556\u2558ron;\u413e\u0100di\u2550\u2554il;\u413c\xec\u08b0\xe2\u2529;\u443b\u0200cqrs\u2563\u2566\u256d\u257da;\u6936uo\u0100;r\u0e19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694bh;\u61b2\u0280;fgqs\u258b\u258c\u0989\u25f3\u25ff\u6264t\u0280ahlrt\u2598\u25a4\u25b7\u25c2\u25e8rrow\u0100;t\u0899\u25a1a\xe9\u24f6arpoon\u0100du\u25af\u25b4own\xbb\u045ap\xbb\u0966eftarrows;\u61c7ight\u0180ahs\u25cd\u25d6\u25derrow\u0100;s\u08f4\u08a7arpoon\xf3\u0f98quigarro\xf7\u21f0hreetimes;\u62cb\u0180;qs\u258b\u0993\u25falan\xf4\u09ac\u0280;cdgs\u09ac\u260a\u260d\u261d\u2628c;\u6aa8ot\u0100;o\u2614\u2615\u6a7f\u0100;r\u261a\u261b\u6a81;\u6a83\u0100;e\u2622\u2625\uc000\u22da\ufe00s;\u6a93\u0280adegs\u2633\u2639\u263d\u2649\u264bppro\xf8\u24c6ot;\u62d6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248c\xf4\u099bi\xed\u09b2\u0180ilr\u2655\u08e1\u265asht;\u697c;\uc000\ud835\udd29\u0100;E\u099c\u2663;\u6a91\u0161\u2669\u2676r\u0100du\u25b2\u266e\u0100;l\u0965\u2673;\u696alk;\u6584cy;\u4459\u0280;acht\u0a48\u2688\u268b\u2691\u2696r\xf2\u25c1orne\xf2\u1d08ard;\u696bri;\u65fa\u0100io\u269f\u26a4dot;\u4140ust\u0100;a\u26ac\u26ad\u63b0che\xbb\u26ad\u0200Eaes\u26bb\u26bd\u26c9\u26d4;\u6268p\u0100;p\u26c3\u26c4\u6a89rox\xbb\u26c4\u0100;q\u26ce\u26cf\u6a87\u0100;q\u26ce\u26bbim;\u62e6\u0400abnoptwz\u26e9\u26f4\u26f7\u271a\u272f\u2741\u2747\u2750\u0100nr\u26ee\u26f1g;\u67ecr;\u61fdr\xeb\u08c1g\u0180lmr\u26ff\u270d\u2714eft\u0100ar\u09e6\u2707ight\xe1\u09f2apsto;\u67fcight\xe1\u09fdparrow\u0100lr\u2725\u2729ef\xf4\u24edight;\u61ac\u0180afl\u2736\u2739\u273dr;\u6985;\uc000\ud835\udd5dus;\u6a2dimes;\u6a34\u0161\u274b\u274fst;\u6217\xe1\u134e\u0180;ef\u2757\u2758\u1800\u65cange\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277c\u2785\u2787r\xf2\u08a8orne\xf2\u1d8car\u0100;d\u0f98\u2783;\u696d;\u600eri;\u62bf\u0300achiqt\u2798\u279d\u0a40\u27a2\u27ae\u27bbquo;\u6039r;\uc000\ud835\udcc1m\u0180;eg\u09b2\u27aa\u27ac;\u6a8d;\u6a8f\u0100bu\u252a\u27b3o\u0100;r\u0e1f\u27b9;\u601arok;\u4142\u8400<;cdhilqr\u082b\u27d2\u2639\u27dc\u27e0\u27e5\u27ea\u27f0\u0100ci\u27d7\u27d9;\u6aa6r;\u6a79re\xe5\u25f2mes;\u62c9arr;\u6976uest;\u6a7b\u0100Pi\u27f5\u27f9ar;\u6996\u0180;ef\u2800\u092d\u181b\u65c3r\u0100du\u2807\u280dshar;\u694ahar;\u6966\u0100en\u2817\u2821rtneqq;\uc000\u2268\ufe00\xc5\u281e\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288e\u2893\u28a0\u28a5\u28a8\u28da\u28e2\u28e4\u0a83\u28f3\u2902Dot;\u623a\u0200clpr\u284e\u2852\u2863\u287dr\u803b\xaf\u40af\u0100et\u2857\u2859;\u6642\u0100;e\u285e\u285f\u6720se\xbb\u285f\u0100;s\u103b\u2868to\u0200;dlu\u103b\u2873\u2877\u287bow\xee\u048cef\xf4\u090f\xf0\u13d1ker;\u65ae\u0100oy\u2887\u288cmma;\u6a29;\u443cash;\u6014asuredangle\xbb\u1626r;\uc000\ud835\udd2ao;\u6127\u0180cdn\u28af\u28b4\u28c9ro\u803b\xb5\u40b5\u0200;acd\u1464\u28bd\u28c0\u28c4s\xf4\u16a7ir;\u6af0ot\u80bb\xb7\u01b5us\u0180;bd\u28d2\u1903\u28d3\u6212\u0100;u\u1d3c\u28d8;\u6a2a\u0163\u28de\u28e1p;\u6adb\xf2\u2212\xf0\u0a81\u0100dp\u28e9\u28eeels;\u62a7f;\uc000\ud835\udd5e\u0100ct\u28f8\u28fdr;\uc000\ud835\udcc2pos\xbb\u159d\u0180;lm\u2909\u290a\u290d\u43bctimap;\u62b8\u0c00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297e\u2989\u2998\u29da\u29e9\u2a15\u2a1a\u2a58\u2a5d\u2a83\u2a95\u2aa4\u2aa8\u2b04\u2b07\u2b44\u2b7f\u2bae\u2c34\u2c67\u2c7c\u2ce9\u0100gt\u2947\u294b;\uc000\u22d9\u0338\u0100;v\u2950\u0bcf\uc000\u226b\u20d2\u0180elt\u295a\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61cdightarrow;\u61ce;\uc000\u22d8\u0338\u0100;v\u297b\u0c47\uc000\u226a\u20d2ightarrow;\u61cf\u0100Dd\u298e\u2993ash;\u62afash;\u62ae\u0280bcnpt\u29a3\u29a7\u29ac\u29b1\u29ccla\xbb\u02deute;\u4144g;\uc000\u2220\u20d2\u0280;Eiop\u0d84\u29bc\u29c0\u29c5\u29c8;\uc000\u2a70\u0338d;\uc000\u224b\u0338s;\u4149ro\xf8\u0d84ur\u0100;a\u29d3\u29d4\u666el\u0100;s\u29d3\u0b38\u01f3\u29df\0\u29e3p\u80bb\xa0\u0b37mp\u0100;e\u0bf9\u0c00\u0280aeouy\u29f4\u29fe\u2a03\u2a10\u2a13\u01f0\u29f9\0\u29fb;\u6a43on;\u4148dil;\u4146ng\u0100;d\u0d7e\u2a0aot;\uc000\u2a6d\u0338p;\u6a42;\u443dash;\u6013\u0380;Aadqsx\u0b92\u2a29\u2a2d\u2a3b\u2a41\u2a45\u2a50rr;\u61d7r\u0100hr\u2a33\u2a36k;\u6924\u0100;o\u13f2\u13f0ot;\uc000\u2250\u0338ui\xf6\u0b63\u0100ei\u2a4a\u2a4ear;\u6928\xed\u0b98ist\u0100;s\u0ba0\u0b9fr;\uc000\ud835\udd2b\u0200Eest\u0bc5\u2a66\u2a79\u2a7c\u0180;qs\u0bbc\u2a6d\u0be1\u0180;qs\u0bbc\u0bc5\u2a74lan\xf4\u0be2i\xed\u0bea\u0100;r\u0bb6\u2a81\xbb\u0bb7\u0180Aap\u2a8a\u2a8d\u2a91r\xf2\u2971rr;\u61aear;\u6af2\u0180;sv\u0f8d\u2a9c\u0f8c\u0100;d\u2aa1\u2aa2\u62fc;\u62facy;\u445a\u0380AEadest\u2ab7\u2aba\u2abe\u2ac2\u2ac5\u2af6\u2af9r\xf2\u2966;\uc000\u2266\u0338rr;\u619ar;\u6025\u0200;fqs\u0c3b\u2ace\u2ae3\u2aeft\u0100ar\u2ad4\u2ad9rro\xf7\u2ac1ightarro\xf7\u2a90\u0180;qs\u0c3b\u2aba\u2aealan\xf4\u0c55\u0100;s\u0c55\u2af4\xbb\u0c36i\xed\u0c5d\u0100;r\u0c35\u2afei\u0100;e\u0c1a\u0c25i\xe4\u0d90\u0100pt\u2b0c\u2b11f;\uc000\ud835\udd5f\u8180\xac;in\u2b19\u2b1a\u2b36\u40acn\u0200;Edv\u0b89\u2b24\u2b28\u2b2e;\uc000\u22f9\u0338ot;\uc000\u22f5\u0338\u01e1\u0b89\u2b33\u2b35;\u62f7;\u62f6i\u0100;v\u0cb8\u2b3c\u01e1\u0cb8\u2b41\u2b43;\u62fe;\u62fd\u0180aor\u2b4b\u2b63\u2b69r\u0200;ast\u0b7b\u2b55\u2b5a\u2b5flle\xec\u0b7bl;\uc000\u2afd\u20e5;\uc000\u2202\u0338lint;\u6a14\u0180;ce\u0c92\u2b70\u2b73u\xe5\u0ca5\u0100;c\u0c98\u2b78\u0100;e\u0c92\u2b7d\xf1\u0c98\u0200Aait\u2b88\u2b8b\u2b9d\u2ba7r\xf2\u2988rr\u0180;cw\u2b94\u2b95\u2b99\u619b;\uc000\u2933\u0338;\uc000\u219d\u0338ghtarrow\xbb\u2b95ri\u0100;e\u0ccb\u0cd6\u0380chimpqu\u2bbd\u2bcd\u2bd9\u2b04\u0b78\u2be4\u2bef\u0200;cer\u0d32\u2bc6\u0d37\u2bc9u\xe5\u0d45;\uc000\ud835\udcc3ort\u026d\u2b05\0\0\u2bd6ar\xe1\u2b56m\u0100;e\u0d6e\u2bdf\u0100;q\u0d74\u0d73su\u0100bp\u2beb\u2bed\xe5\u0cf8\xe5\u0d0b\u0180bcp\u2bf6\u2c11\u2c19\u0200;Ees\u2bff\u2c00\u0d22\u2c04\u6284;\uc000\u2ac5\u0338et\u0100;e\u0d1b\u2c0bq\u0100;q\u0d23\u2c00c\u0100;e\u0d32\u2c17\xf1\u0d38\u0200;Ees\u2c22\u2c23\u0d5f\u2c27\u6285;\uc000\u2ac6\u0338et\u0100;e\u0d58\u2c2eq\u0100;q\u0d60\u2c23\u0200gilr\u2c3d\u2c3f\u2c45\u2c47\xec\u0bd7lde\u803b\xf1\u40f1\xe7\u0c43iangle\u0100lr\u2c52\u2c5ceft\u0100;e\u0c1a\u2c5a\xf1\u0c26ight\u0100;e\u0ccb\u2c65\xf1\u0cd7\u0100;m\u2c6c\u2c6d\u43bd\u0180;es\u2c74\u2c75\u2c79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2c8f\u2c94\u2c99\u2c9e\u2ca3\u2cb0\u2cb6\u2cd3\u2ce3ash;\u62adarr;\u6904p;\uc000\u224d\u20d2ash;\u62ac\u0100et\u2ca8\u2cac;\uc000\u2265\u20d2;\uc000>\u20d2nfin;\u69de\u0180Aet\u2cbd\u2cc1\u2cc5rr;\u6902;\uc000\u2264\u20d2\u0100;r\u2cca\u2ccd\uc000<\u20d2ie;\uc000\u22b4\u20d2\u0100At\u2cd8\u2cdcrr;\u6903rie;\uc000\u22b5\u20d2im;\uc000\u223c\u20d2\u0180Aan\u2cf0\u2cf4\u2d02rr;\u61d6r\u0100hr\u2cfa\u2cfdk;\u6923\u0100;o\u13e7\u13e5ear;\u6927\u1253\u1a95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2d2d\0\u2d38\u2d48\u2d60\u2d65\u2d72\u2d84\u1b07\0\0\u2d8d\u2dab\0\u2dc8\u2dce\0\u2ddc\u2e19\u2e2b\u2e3e\u2e43\u0100cs\u2d31\u1a97ute\u803b\xf3\u40f3\u0100iy\u2d3c\u2d45r\u0100;c\u1a9e\u2d42\u803b\xf4\u40f4;\u443e\u0280abios\u1aa0\u2d52\u2d57\u01c8\u2d5alac;\u4151v;\u6a38old;\u69bclig;\u4153\u0100cr\u2d69\u2d6dir;\u69bf;\uc000\ud835\udd2c\u036f\u2d79\0\0\u2d7c\0\u2d82n;\u42dbave\u803b\xf2\u40f2;\u69c1\u0100bm\u2d88\u0df4ar;\u69b5\u0200acit\u2d95\u2d98\u2da5\u2da8r\xf2\u1a80\u0100ir\u2d9d\u2da0r;\u69beoss;\u69bbn\xe5\u0e52;\u69c0\u0180aei\u2db1\u2db5\u2db9cr;\u414dga;\u43c9\u0180cdn\u2dc0\u2dc5\u01cdron;\u43bf;\u69b6pf;\uc000\ud835\udd60\u0180ael\u2dd4\u2dd7\u01d2r;\u69b7rp;\u69b9\u0380;adiosv\u2dea\u2deb\u2dee\u2e08\u2e0d\u2e10\u2e16\u6228r\xf2\u1a86\u0200;efm\u2df7\u2df8\u2e02\u2e05\u6a5dr\u0100;o\u2dfe\u2dff\u6134f\xbb\u2dff\u803b\xaa\u40aa\u803b\xba\u40bagof;\u62b6r;\u6a56lope;\u6a57;\u6a5b\u0180clo\u2e1f\u2e21\u2e27\xf2\u2e01ash\u803b\xf8\u40f8l;\u6298i\u016c\u2e2f\u2e34de\u803b\xf5\u40f5es\u0100;a\u01db\u2e3as;\u6a36ml\u803b\xf6\u40f6bar;\u633d\u0ae1\u2e5e\0\u2e7d\0\u2e80\u2e9d\0\u2ea2\u2eb9\0\0\u2ecb\u0e9c\0\u2f13\0\0\u2f2b\u2fbc\0\u2fc8r\u0200;ast\u0403\u2e67\u2e72\u0e85\u8100\xb6;l\u2e6d\u2e6e\u40b6le\xec\u0403\u0269\u2e78\0\0\u2e7bm;\u6af3;\u6afdy;\u443fr\u0280cimpt\u2e8b\u2e8f\u2e93\u1865\u2e97nt;\u4025od;\u402eil;\u6030enk;\u6031r;\uc000\ud835\udd2d\u0180imo\u2ea8\u2eb0\u2eb4\u0100;v\u2ead\u2eae\u43c6;\u43d5ma\xf4\u0a76ne;\u660e\u0180;tv\u2ebf\u2ec0\u2ec8\u43c0chfork\xbb\u1ffd;\u43d6\u0100au\u2ecf\u2edfn\u0100ck\u2ed5\u2eddk\u0100;h\u21f4\u2edb;\u610e\xf6\u21f4s\u0480;abcdemst\u2ef3\u2ef4\u1908\u2ef9\u2efd\u2f04\u2f06\u2f0a\u2f0e\u402bcir;\u6a23ir;\u6a22\u0100ou\u1d40\u2f02;\u6a25;\u6a72n\u80bb\xb1\u0e9dim;\u6a26wo;\u6a27\u0180ipu\u2f19\u2f20\u2f25ntint;\u6a15f;\uc000\ud835\udd61nd\u803b\xa3\u40a3\u0500;Eaceinosu\u0ec8\u2f3f\u2f41\u2f44\u2f47\u2f81\u2f89\u2f92\u2f7e\u2fb6;\u6ab3p;\u6ab7u\xe5\u0ed9\u0100;c\u0ece\u2f4c\u0300;acens\u0ec8\u2f59\u2f5f\u2f66\u2f68\u2f7eppro\xf8\u2f43urlye\xf1\u0ed9\xf1\u0ece\u0180aes\u2f6f\u2f76\u2f7approx;\u6ab9qq;\u6ab5im;\u62e8i\xed\u0edfme\u0100;s\u2f88\u0eae\u6032\u0180Eas\u2f78\u2f90\u2f7a\xf0\u2f75\u0180dfp\u0eec\u2f99\u2faf\u0180als\u2fa0\u2fa5\u2faalar;\u632eine;\u6312urf;\u6313\u0100;t\u0efb\u2fb4\xef\u0efbrel;\u62b0\u0100ci\u2fc0\u2fc5r;\uc000\ud835\udcc5;\u43c8ncsp;\u6008\u0300fiopsu\u2fda\u22e2\u2fdf\u2fe5\u2feb\u2ff1r;\uc000\ud835\udd2epf;\uc000\ud835\udd62rime;\u6057cr;\uc000\ud835\udcc6\u0180aeo\u2ff8\u3009\u3013t\u0100ei\u2ffe\u3005rnion\xf3\u06b0nt;\u6a16st\u0100;e\u3010\u3011\u403f\xf1\u1f19\xf4\u0f14\u0a80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30e0\u310e\u312b\u3147\u3162\u3172\u318e\u3206\u3215\u3224\u3229\u3258\u326e\u3272\u3290\u32b0\u32b7\u0180art\u3047\u304a\u304cr\xf2\u10b3\xf2\u03ddail;\u691car\xf2\u1c65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307f\u308f\u3094\u30cc\u0100eu\u306d\u3071;\uc000\u223d\u0331te;\u4155i\xe3\u116emptyv;\u69b3g\u0200;del\u0fd1\u3089\u308b\u308d;\u6992;\u69a5\xe5\u0fd1uo\u803b\xbb\u40bbr\u0580;abcfhlpstw\u0fdc\u30ac\u30af\u30b7\u30b9\u30bc\u30be\u30c0\u30c3\u30c7\u30cap;\u6975\u0100;f\u0fe0\u30b4s;\u6920;\u6933s;\u691e\xeb\u225d\xf0\u272el;\u6945im;\u6974l;\u61a3;\u619d\u0100ai\u30d1\u30d5il;\u691ao\u0100;n\u30db\u30dc\u6236al\xf3\u0f1e\u0180abr\u30e7\u30ea\u30eer\xf2\u17e5rk;\u6773\u0100ak\u30f3\u30fdc\u0100ek\u30f9\u30fb;\u407d;\u405d\u0100es\u3102\u3104;\u698cl\u0100du\u310a\u310c;\u698e;\u6990\u0200aeuy\u3117\u311c\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0ff2\xe2\u30fa;\u4440\u0200clqs\u3134\u3137\u313d\u3144a;\u6937dhar;\u6969uo\u0100;r\u020e\u020dh;\u61b3\u0180acg\u314e\u315f\u0f44l\u0200;ips\u0f78\u3158\u315b\u109cn\xe5\u10bbar\xf4\u0fa9t;\u65ad\u0180ilr\u3169\u1023\u316esht;\u697d;\uc000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317d\u317f\xbb\u047b\u0100;l\u1091\u3184;\u696c\u0100;v\u318b\u318c\u43c1;\u43f1\u0180gns\u3195\u31f9\u31fcht\u0300ahlrst\u31a4\u31b0\u31c2\u31d8\u31e4\u31eerrow\u0100;t\u0fdc\u31ada\xe9\u30c8arpoon\u0100du\u31bb\u31bfow\xee\u317ep\xbb\u1092eft\u0100ah\u31ca\u31d0rrow\xf3\u0feaarpoon\xf3\u0551ightarrows;\u61c9quigarro\xf7\u30cbhreetimes;\u62ccg;\u42daingdotse\xf1\u1f32\u0180ahm\u320d\u3210\u3213r\xf2\u0feaa\xf2\u0551;\u600foust\u0100;a\u321e\u321f\u63b1che\xbb\u321fmid;\u6aee\u0200abpt\u3232\u323d\u3240\u3252\u0100nr\u3237\u323ag;\u67edr;\u61fer\xeb\u1003\u0180afl\u3247\u324a\u324er;\u6986;\uc000\ud835\udd63us;\u6a2eimes;\u6a35\u0100ap\u325d\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6a12ar\xf2\u31e3\u0200achq\u327b\u3280\u10bc\u3285quo;\u603ar;\uc000\ud835\udcc7\u0100bu\u30fb\u328ao\u0100;r\u0214\u0213\u0180hir\u3297\u329b\u32a0re\xe5\u31f8mes;\u62cai\u0200;efl\u32aa\u1059\u1821\u32ab\u65b9tri;\u69celuhar;\u6968;\u611e\u0d61\u32d5\u32db\u32df\u332c\u3338\u3371\0\u337a\u33a4\0\0\u33ec\u33f0\0\u3428\u3448\u345a\u34ad\u34b1\u34ca\u34f1\0\u3616\0\0\u3633cute;\u415bqu\xef\u27ba\u0500;Eaceinpsy\u11ed\u32f3\u32f5\u32ff\u3302\u330b\u330f\u331f\u3326\u3329;\u6ab4\u01f0\u32fa\0\u32fc;\u6ab8on;\u4161u\xe5\u11fe\u0100;d\u11f3\u3307il;\u415frc;\u415d\u0180Eas\u3316\u3318\u331b;\u6ab6p;\u6abaim;\u62e9olint;\u6a13i\xed\u1204;\u4441ot\u0180;be\u3334\u1d47\u3335\u62c5;\u6a66\u0380Aacmstx\u3346\u334a\u3357\u335b\u335e\u3363\u336drr;\u61d8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0a36\u0a34t\u803b\xa7\u40a7i;\u403bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uc000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33a0rp;\u666f\u0100hy\u338b\u338fcy;\u4449;\u4448rt\u026d\u3399\0\0\u339ci\xe4\u1464ara\xec\u2e6f\u803b\xad\u40ad\u0100gm\u33a8\u33b4ma\u0180;fv\u33b1\u33b2\u33b2\u43c3;\u43c2\u0400;deglnpr\u12ab\u33c5\u33c9\u33ce\u33d6\u33de\u33e1\u33e6ot;\u6a6a\u0100;q\u12b1\u12b0\u0100;E\u33d3\u33d4\u6a9e;\u6aa0\u0100;E\u33db\u33dc\u6a9d;\u6a9fe;\u6246lus;\u6a24arr;\u6972ar\xf2\u113d\u0200aeit\u33f8\u3408\u340f\u3417\u0100ls\u33fd\u3404lsetm\xe9\u336ahp;\u6a33parsl;\u69e4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341c\u341d\u6aaa\u0100;s\u3422\u3423\u6aac;\uc000\u2aac\ufe00\u0180flp\u342e\u3433\u3442tcy;\u444c\u0100;b\u3438\u3439\u402f\u0100;a\u343e\u343f\u69c4r;\u633ff;\uc000\ud835\udd64a\u0100dr\u344d\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349f\u0100au\u3465\u346fp\u0100;s\u1188\u346b;\uc000\u2293\ufe00p\u0100;s\u11b4\u3475;\uc000\u2294\ufe00u\u0100bp\u347f\u348f\u0180;es\u1197\u119c\u3486et\u0100;e\u1197\u348d\xf1\u119d\u0180;es\u11a8\u11ad\u3496et\u0100;e\u11a8\u349d\xf1\u11ae\u0180;af\u117b\u34a6\u05b0r\u0165\u34ab\u05b1\xbb\u117car\xf2\u1148\u0200cemt\u34b9\u34be\u34c2\u34c5r;\uc000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11be\u0100ar\u34ce\u34d5r\u0100;f\u34d4\u17bf\u6606\u0100an\u34da\u34edight\u0100ep\u34e3\u34eapsilo\xee\u1ee0h\xe9\u2eafs\xbb\u2852\u0280bcmnp\u34fb\u355e\u1209\u358b\u358e\u0480;Edemnprs\u350e\u350f\u3511\u3515\u351e\u3523\u352c\u3531\u3536\u6282;\u6ac5ot;\u6abd\u0100;d\u11da\u351aot;\u6ac3ult;\u6ac1\u0100Ee\u3528\u352a;\u6acb;\u628alus;\u6abfarr;\u6979\u0180eiu\u353d\u3552\u3555t\u0180;en\u350e\u3545\u354bq\u0100;q\u11da\u350feq\u0100;q\u352b\u3528m;\u6ac7\u0100bp\u355a\u355c;\u6ad5;\u6ad3c\u0300;acens\u11ed\u356c\u3572\u3579\u357b\u3326ppro\xf8\u32faurlye\xf1\u11fe\xf1\u11f3\u0180aes\u3582\u3588\u331bppro\xf8\u331aq\xf1\u3317g;\u666a\u0680123;Edehlmnps\u35a9\u35ac\u35af\u121c\u35b2\u35b4\u35c0\u35c9\u35d5\u35da\u35df\u35e8\u35ed\u803b\xb9\u40b9\u803b\xb2\u40b2\u803b\xb3\u40b3;\u6ac6\u0100os\u35b9\u35bct;\u6abeub;\u6ad8\u0100;d\u1222\u35c5ot;\u6ac4s\u0100ou\u35cf\u35d2l;\u67c9b;\u6ad7arr;\u697bult;\u6ac2\u0100Ee\u35e4\u35e6;\u6acc;\u628blus;\u6ac0\u0180eiu\u35f4\u3609\u360ct\u0180;en\u121c\u35fc\u3602q\u0100;q\u1222\u35b2eq\u0100;q\u35e7\u35e4m;\u6ac8\u0100bp\u3611\u3613;\u6ad4;\u6ad6\u0180Aan\u361c\u3620\u362drr;\u61d9r\u0100hr\u3626\u3628\xeb\u222e\u0100;o\u0a2b\u0a29war;\u692alig\u803b\xdf\u40df\u0be1\u3651\u365d\u3660\u12ce\u3673\u3679\0\u367e\u36c2\0\0\0\0\0\u36db\u3703\0\u3709\u376c\0\0\0\u3787\u0272\u3656\0\0\u365bget;\u6316;\u43c4r\xeb\u0e5f\u0180aey\u3666\u366b\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uc000\ud835\udd31\u0200eiko\u3686\u369d\u36b5\u36bc\u01f2\u368b\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369b\u43b8ym;\u43d1\u0100cn\u36a2\u36b2k\u0100as\u36a8\u36aeppro\xf8\u12c1im\xbb\u12acs\xf0\u129e\u0100as\u36ba\u36ae\xf0\u12c1rn\u803b\xfe\u40fe\u01ec\u031f\u36c6\u22e7es\u8180\xd7;bd\u36cf\u36d0\u36d8\u40d7\u0100;a\u190f\u36d5r;\u6a31;\u6a30\u0180eps\u36e1\u36e3\u3700\xe1\u2a4d\u0200;bcf\u0486\u36ec\u36f0\u36f4ot;\u6336ir;\u6af1\u0100;o\u36f9\u36fc\uc000\ud835\udd65rk;\u6ada\xe1\u3362rime;\u6034\u0180aip\u370f\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374d\u3740\u3751\u3757\u375c\u375fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65b5own\xbb\u1dbbeft\u0100;e\u2800\u373e\xf1\u092e;\u625cight\u0100;e\u32aa\u374b\xf1\u105aot;\u65ecinus;\u6a3alus;\u6a39b;\u69cdime;\u6a3bezium;\u63e2\u0180cht\u3772\u377d\u3781\u0100ry\u3777\u377b;\uc000\ud835\udcc9;\u4446cy;\u445brok;\u4167\u0100io\u378b\u378ex\xf4\u1777head\u0100lr\u3797\u37a0eftarro\xf7\u084fightarrow\xbb\u0f5d\u0900AHabcdfghlmoprstuw\u37d0\u37d3\u37d7\u37e4\u37f0\u37fc\u380e\u381c\u3823\u3834\u3851\u385d\u386b\u38a9\u38cc\u38d2\u38ea\u38f6r\xf2\u03edar;\u6963\u0100cr\u37dc\u37e2ute\u803b\xfa\u40fa\xf2\u1150r\u01e3\u37ea\0\u37edy;\u445eve;\u416d\u0100iy\u37f5\u37farc\u803b\xfb\u40fb;\u4443\u0180abh\u3803\u3806\u380br\xf2\u13adlac;\u4171a\xf2\u13c3\u0100ir\u3813\u3818sht;\u697e;\uc000\ud835\udd32rave\u803b\xf9\u40f9\u0161\u3827\u3831r\u0100lr\u382c\u382e\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384d\u026f\u383f\0\0\u384arn\u0100;e\u3845\u3846\u631cr\xbb\u3846op;\u630fri;\u65f8\u0100al\u3856\u385acr;\u416b\u80bb\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uc000\ud835\udd66\u0300adhlsu\u114b\u3878\u387d\u1372\u3891\u38a0own\xe1\u13b3arpoon\u0100lr\u3888\u388cef\xf4\u382digh\xf4\u382fi\u0180;hl\u3899\u389a\u389c\u43c5\xbb\u13faon\xbb\u389aparrows;\u61c8\u0180cit\u38b0\u38c4\u38c8\u026f\u38b6\0\0\u38c1rn\u0100;e\u38bc\u38bd\u631dr\xbb\u38bdop;\u630eng;\u416fri;\u65f9cr;\uc000\ud835\udcca\u0180dir\u38d9\u38dd\u38e2ot;\u62f0lde;\u4169i\u0100;f\u3730\u38e8\xbb\u1813\u0100am\u38ef\u38f2r\xf2\u38a8l\u803b\xfc\u40fcangle;\u69a7\u0780ABDacdeflnoprsz\u391c\u391f\u3929\u392d\u39b5\u39b8\u39bd\u39df\u39e4\u39e8\u39f3\u39f9\u39fd\u3a01\u3a20r\xf2\u03f7ar\u0100;v\u3926\u3927\u6ae8;\u6ae9as\xe8\u03e1\u0100nr\u3932\u3937grt;\u699c\u0380eknprst\u34e3\u3946\u394b\u3952\u395d\u3964\u3996app\xe1\u2415othin\xe7\u1e96\u0180hir\u34eb\u2ec8\u3959op\xf4\u2fb5\u0100;h\u13b7\u3962\xef\u318d\u0100iu\u3969\u396dgm\xe1\u33b3\u0100bp\u3972\u3984setneq\u0100;q\u397d\u3980\uc000\u228a\ufe00;\uc000\u2acb\ufe00setneq\u0100;q\u398f\u3992\uc000\u228b\ufe00;\uc000\u2acc\ufe00\u0100hr\u399b\u399fet\xe1\u369ciangle\u0100lr\u39aa\u39afeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39c4\u39d2\u39d7\u0180;be\u2dea\u39cb\u39cfar;\u62bbq;\u625alip;\u62ee\u0100bt\u39dc\u1468a\xf2\u1469r;\uc000\ud835\udd33tr\xe9\u39aesu\u0100bp\u39ef\u39f1\xbb\u0d1c\xbb\u0d59pf;\uc000\ud835\udd67ro\xf0\u0efbtr\xe9\u39b4\u0100cu\u3a06\u3a0br;\uc000\ud835\udccb\u0100bp\u3a10\u3a18n\u0100Ee\u3980\u3a16\xbb\u397en\u0100Ee\u3992\u3a1e\xbb\u3990igzag;\u699a\u0380cefoprs\u3a36\u3a3b\u3a56\u3a5b\u3a54\u3a61\u3a6airc;\u4175\u0100di\u3a40\u3a51\u0100bg\u3a45\u3a49ar;\u6a5fe\u0100;q\u15fa\u3a4f;\u6259erp;\u6118r;\uc000\ud835\udd34pf;\uc000\ud835\udd68\u0100;e\u1479\u3a66at\xe8\u1479cr;\uc000\ud835\udccc\u0ae3\u178e\u3a87\0\u3a8b\0\u3a90\u3a9b\0\0\u3a9d\u3aa8\u3aab\u3aaf\0\0\u3ac3\u3ace\0\u3ad8\u17dc\u17dftr\xe9\u17d1r;\uc000\ud835\udd35\u0100Aa\u3a94\u3a97r\xf2\u03c3r\xf2\u09f6;\u43be\u0100Aa\u3aa1\u3aa4r\xf2\u03b8r\xf2\u09eba\xf0\u2713is;\u62fb\u0180dpt\u17a4\u3ab5\u3abe\u0100fl\u3aba\u17a9;\uc000\ud835\udd69im\xe5\u17b2\u0100Aa\u3ac7\u3acar\xf2\u03cer\xf2\u0a01\u0100cq\u3ad2\u17b8r;\uc000\ud835\udccd\u0100pt\u17d6\u3adcr\xe9\u17d4\u0400acefiosu\u3af0\u3afd\u3b08\u3b0c\u3b11\u3b15\u3b1b\u3b21c\u0100uy\u3af6\u3afbte\u803b\xfd\u40fd;\u444f\u0100iy\u3b02\u3b06rc;\u4177;\u444bn\u803b\xa5\u40a5r;\uc000\ud835\udd36cy;\u4457pf;\uc000\ud835\udd6acr;\uc000\ud835\udcce\u0100cm\u3b26\u3b29y;\u444el\u803b\xff\u40ff\u0500acdefhiosw\u3b42\u3b48\u3b54\u3b58\u3b64\u3b69\u3b6d\u3b74\u3b7a\u3b80cute;\u417a\u0100ay\u3b4d\u3b52ron;\u417e;\u4437ot;\u417c\u0100et\u3b5d\u3b61tr\xe6\u155fa;\u43b6r;\uc000\ud835\udd37cy;\u4436grarr;\u61ddpf;\uc000\ud835\udd6bcr;\uc000\ud835\udccf\u0100jn\u3b85\u3b87;\u600dj;\u600c"
	    .split("")
	    .map(function (c) { return c.charCodeAt(0); }));
	
	return decodeDataHtml;
}var decodeDataXml = {};var hasRequiredDecodeDataXml;

function requireDecodeDataXml () {
	if (hasRequiredDecodeDataXml) return decodeDataXml;
	hasRequiredDecodeDataXml = 1;
	// Generated using scripts/write-decode-map.ts
	Object.defineProperty(decodeDataXml, "__esModule", { value: true });
	decodeDataXml.default = new Uint16Array(
	// prettier-ignore
	"\u0200aglq\t\x15\x18\x1b\u026d\x0f\0\0\x12p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022"
	    .split("")
	    .map(function (c) { return c.charCodeAt(0); }));
	
	return decodeDataXml;
}var decode_codepoint = {};var hasRequiredDecode_codepoint;

function requireDecode_codepoint () {
	if (hasRequiredDecode_codepoint) return decode_codepoint;
	hasRequiredDecode_codepoint = 1;
	(function (exports) {
		// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
		var _a;
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.replaceCodePoint = exports.fromCodePoint = void 0;
		var decodeMap = new Map([
		    [0, 65533],
		    // C1 Unicode control character reference replacements
		    [128, 8364],
		    [130, 8218],
		    [131, 402],
		    [132, 8222],
		    [133, 8230],
		    [134, 8224],
		    [135, 8225],
		    [136, 710],
		    [137, 8240],
		    [138, 352],
		    [139, 8249],
		    [140, 338],
		    [142, 381],
		    [145, 8216],
		    [146, 8217],
		    [147, 8220],
		    [148, 8221],
		    [149, 8226],
		    [150, 8211],
		    [151, 8212],
		    [152, 732],
		    [153, 8482],
		    [154, 353],
		    [155, 8250],
		    [156, 339],
		    [158, 382],
		    [159, 376],
		]);
		/**
		 * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
		 */
		exports.fromCodePoint = 
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
		(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function (codePoint) {
		    var output = "";
		    if (codePoint > 0xffff) {
		        codePoint -= 0x10000;
		        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
		        codePoint = 0xdc00 | (codePoint & 0x3ff);
		    }
		    output += String.fromCharCode(codePoint);
		    return output;
		};
		/**
		 * Replace the given code point with a replacement character if it is a
		 * surrogate or is outside the valid range. Otherwise return the code
		 * point unchanged.
		 */
		function replaceCodePoint(codePoint) {
		    var _a;
		    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
		        return 0xfffd;
		    }
		    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
		}
		exports.replaceCodePoint = replaceCodePoint;
		/**
		 * Replace the code point if relevant, then convert it to a string.
		 *
		 * @deprecated Use `fromCodePoint(replaceCodePoint(codePoint))` instead.
		 * @param codePoint The code point to decode.
		 * @returns The decoded code point.
		 */
		function decodeCodePoint(codePoint) {
		    return (0, exports.fromCodePoint)(replaceCodePoint(codePoint));
		}
		exports.default = decodeCodePoint;
		
	} (decode_codepoint));
	return decode_codepoint;
}var hasRequiredDecode;

function requireDecode () {
	if (hasRequiredDecode) return decode;
	hasRequiredDecode = 1;
	(function (exports) {
		var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
		    Object.defineProperty(o, "default", { enumerable: true, value: v });
		}) : function(o, v) {
		    o["default"] = v;
		});
		var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
		    if (mod && mod.__esModule) return mod;
		    var result = {};
		    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		    __setModuleDefault(result, mod);
		    return result;
		};
		var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTMLAttribute = exports.decodeHTML = exports.determineBranch = exports.EntityDecoder = exports.DecodingMode = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
		var decode_data_html_js_1 = __importDefault(requireDecodeDataHtml());
		exports.htmlDecodeTree = decode_data_html_js_1.default;
		var decode_data_xml_js_1 = __importDefault(requireDecodeDataXml());
		exports.xmlDecodeTree = decode_data_xml_js_1.default;
		var decode_codepoint_js_1 = __importStar(requireDecode_codepoint());
		exports.decodeCodePoint = decode_codepoint_js_1.default;
		var decode_codepoint_js_2 = requireDecode_codepoint();
		Object.defineProperty(exports, "replaceCodePoint", { enumerable: true, get: function () { return decode_codepoint_js_2.replaceCodePoint; } });
		Object.defineProperty(exports, "fromCodePoint", { enumerable: true, get: function () { return decode_codepoint_js_2.fromCodePoint; } });
		var CharCodes;
		(function (CharCodes) {
		    CharCodes[CharCodes["NUM"] = 35] = "NUM";
		    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
		    CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
		    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
		    CharCodes[CharCodes["NINE"] = 57] = "NINE";
		    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
		    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
		    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
		    CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
		    CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
		    CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
		    CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
		})(CharCodes || (CharCodes = {}));
		/** Bit that needs to be set to convert an upper case ASCII character to lower case */
		var TO_LOWER_BIT = 32;
		var BinTrieFlags;
		(function (BinTrieFlags) {
		    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
		    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
		    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
		})(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
		function isNumber(code) {
		    return code >= CharCodes.ZERO && code <= CharCodes.NINE;
		}
		function isHexadecimalCharacter(code) {
		    return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F) ||
		        (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F));
		}
		function isAsciiAlphaNumeric(code) {
		    return ((code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z) ||
		        (code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z) ||
		        isNumber(code));
		}
		/**
		 * Checks if the given character is a valid end character for an entity in an attribute.
		 *
		 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
		 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
		 */
		function isEntityInAttributeInvalidEnd(code) {
		    return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
		}
		var EntityDecoderState;
		(function (EntityDecoderState) {
		    EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
		    EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
		    EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
		    EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
		    EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
		})(EntityDecoderState || (EntityDecoderState = {}));
		var DecodingMode;
		(function (DecodingMode) {
		    /** Entities in text nodes that can end with any character. */
		    DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
		    /** Only allow entities terminated with a semicolon. */
		    DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
		    /** Entities in attributes have limitations on ending characters. */
		    DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
		})(DecodingMode = exports.DecodingMode || (exports.DecodingMode = {}));
		/**
		 * Token decoder with support of writing partial entities.
		 */
		var EntityDecoder = /** @class */ (function () {
		    function EntityDecoder(
		    /** The tree used to decode entities. */
		    decodeTree, 
		    /**
		     * The function that is called when a codepoint is decoded.
		     *
		     * For multi-byte named entities, this will be called multiple times,
		     * with the second codepoint, and the same `consumed` value.
		     *
		     * @param codepoint The decoded codepoint.
		     * @param consumed The number of bytes consumed by the decoder.
		     */
		    emitCodePoint, 
		    /** An object that is used to produce errors. */
		    errors) {
		        this.decodeTree = decodeTree;
		        this.emitCodePoint = emitCodePoint;
		        this.errors = errors;
		        /** The current state of the decoder. */
		        this.state = EntityDecoderState.EntityStart;
		        /** Characters that were consumed while parsing an entity. */
		        this.consumed = 1;
		        /**
		         * The result of the entity.
		         *
		         * Either the result index of a numeric entity, or the codepoint of a
		         * numeric entity.
		         */
		        this.result = 0;
		        /** The current index in the decode tree. */
		        this.treeIndex = 0;
		        /** The number of characters that were consumed in excess. */
		        this.excess = 1;
		        /** The mode in which the decoder is operating. */
		        this.decodeMode = DecodingMode.Strict;
		    }
		    /** Resets the instance to make it reusable. */
		    EntityDecoder.prototype.startEntity = function (decodeMode) {
		        this.decodeMode = decodeMode;
		        this.state = EntityDecoderState.EntityStart;
		        this.result = 0;
		        this.treeIndex = 0;
		        this.excess = 1;
		        this.consumed = 1;
		    };
		    /**
		     * Write an entity to the decoder. This can be called multiple times with partial entities.
		     * If the entity is incomplete, the decoder will return -1.
		     *
		     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
		     * entity is incomplete, and resume when the next string is written.
		     *
		     * @param string The string containing the entity (or a continuation of the entity).
		     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
		     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
		     */
		    EntityDecoder.prototype.write = function (str, offset) {
		        switch (this.state) {
		            case EntityDecoderState.EntityStart: {
		                if (str.charCodeAt(offset) === CharCodes.NUM) {
		                    this.state = EntityDecoderState.NumericStart;
		                    this.consumed += 1;
		                    return this.stateNumericStart(str, offset + 1);
		                }
		                this.state = EntityDecoderState.NamedEntity;
		                return this.stateNamedEntity(str, offset);
		            }
		            case EntityDecoderState.NumericStart: {
		                return this.stateNumericStart(str, offset);
		            }
		            case EntityDecoderState.NumericDecimal: {
		                return this.stateNumericDecimal(str, offset);
		            }
		            case EntityDecoderState.NumericHex: {
		                return this.stateNumericHex(str, offset);
		            }
		            case EntityDecoderState.NamedEntity: {
		                return this.stateNamedEntity(str, offset);
		            }
		        }
		    };
		    /**
		     * Switches between the numeric decimal and hexadecimal states.
		     *
		     * Equivalent to the `Numeric character reference state` in the HTML spec.
		     *
		     * @param str The string containing the entity (or a continuation of the entity).
		     * @param offset The current offset.
		     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
		     */
		    EntityDecoder.prototype.stateNumericStart = function (str, offset) {
		        if (offset >= str.length) {
		            return -1;
		        }
		        if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
		            this.state = EntityDecoderState.NumericHex;
		            this.consumed += 1;
		            return this.stateNumericHex(str, offset + 1);
		        }
		        this.state = EntityDecoderState.NumericDecimal;
		        return this.stateNumericDecimal(str, offset);
		    };
		    EntityDecoder.prototype.addToNumericResult = function (str, start, end, base) {
		        if (start !== end) {
		            var digitCount = end - start;
		            this.result =
		                this.result * Math.pow(base, digitCount) +
		                    parseInt(str.substr(start, digitCount), base);
		            this.consumed += digitCount;
		        }
		    };
		    /**
		     * Parses a hexadecimal numeric entity.
		     *
		     * Equivalent to the `Hexademical character reference state` in the HTML spec.
		     *
		     * @param str The string containing the entity (or a continuation of the entity).
		     * @param offset The current offset.
		     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
		     */
		    EntityDecoder.prototype.stateNumericHex = function (str, offset) {
		        var startIdx = offset;
		        while (offset < str.length) {
		            var char = str.charCodeAt(offset);
		            if (isNumber(char) || isHexadecimalCharacter(char)) {
		                offset += 1;
		            }
		            else {
		                this.addToNumericResult(str, startIdx, offset, 16);
		                return this.emitNumericEntity(char, 3);
		            }
		        }
		        this.addToNumericResult(str, startIdx, offset, 16);
		        return -1;
		    };
		    /**
		     * Parses a decimal numeric entity.
		     *
		     * Equivalent to the `Decimal character reference state` in the HTML spec.
		     *
		     * @param str The string containing the entity (or a continuation of the entity).
		     * @param offset The current offset.
		     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
		     */
		    EntityDecoder.prototype.stateNumericDecimal = function (str, offset) {
		        var startIdx = offset;
		        while (offset < str.length) {
		            var char = str.charCodeAt(offset);
		            if (isNumber(char)) {
		                offset += 1;
		            }
		            else {
		                this.addToNumericResult(str, startIdx, offset, 10);
		                return this.emitNumericEntity(char, 2);
		            }
		        }
		        this.addToNumericResult(str, startIdx, offset, 10);
		        return -1;
		    };
		    /**
		     * Validate and emit a numeric entity.
		     *
		     * Implements the logic from the `Hexademical character reference start
		     * state` and `Numeric character reference end state` in the HTML spec.
		     *
		     * @param lastCp The last code point of the entity. Used to see if the
		     *               entity was terminated with a semicolon.
		     * @param expectedLength The minimum number of characters that should be
		     *                       consumed. Used to validate that at least one digit
		     *                       was consumed.
		     * @returns The number of characters that were consumed.
		     */
		    EntityDecoder.prototype.emitNumericEntity = function (lastCp, expectedLength) {
		        var _a;
		        // Ensure we consumed at least one digit.
		        if (this.consumed <= expectedLength) {
		            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
		            return 0;
		        }
		        // Figure out if this is a legit end of the entity
		        if (lastCp === CharCodes.SEMI) {
		            this.consumed += 1;
		        }
		        else if (this.decodeMode === DecodingMode.Strict) {
		            return 0;
		        }
		        this.emitCodePoint((0, decode_codepoint_js_1.replaceCodePoint)(this.result), this.consumed);
		        if (this.errors) {
		            if (lastCp !== CharCodes.SEMI) {
		                this.errors.missingSemicolonAfterCharacterReference();
		            }
		            this.errors.validateNumericCharacterReference(this.result);
		        }
		        return this.consumed;
		    };
		    /**
		     * Parses a named entity.
		     *
		     * Equivalent to the `Named character reference state` in the HTML spec.
		     *
		     * @param str The string containing the entity (or a continuation of the entity).
		     * @param offset The current offset.
		     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
		     */
		    EntityDecoder.prototype.stateNamedEntity = function (str, offset) {
		        var decodeTree = this.decodeTree;
		        var current = decodeTree[this.treeIndex];
		        // The mask is the number of bytes of the value, including the current byte.
		        var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
		        for (; offset < str.length; offset++, this.excess++) {
		            var char = str.charCodeAt(offset);
		            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
		            if (this.treeIndex < 0) {
		                return this.result === 0 ||
		                    // If we are parsing an attribute
		                    (this.decodeMode === DecodingMode.Attribute &&
		                        // We shouldn't have consumed any characters after the entity,
		                        (valueLength === 0 ||
		                            // And there should be no invalid characters.
		                            isEntityInAttributeInvalidEnd(char)))
		                    ? 0
		                    : this.emitNotTerminatedNamedEntity();
		            }
		            current = decodeTree[this.treeIndex];
		            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
		            // If the branch is a value, store it and continue
		            if (valueLength !== 0) {
		                // If the entity is terminated by a semicolon, we are done.
		                if (char === CharCodes.SEMI) {
		                    return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
		                }
		                // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
		                if (this.decodeMode !== DecodingMode.Strict) {
		                    this.result = this.treeIndex;
		                    this.consumed += this.excess;
		                    this.excess = 0;
		                }
		            }
		        }
		        return -1;
		    };
		    /**
		     * Emit a named entity that was not terminated with a semicolon.
		     *
		     * @returns The number of characters consumed.
		     */
		    EntityDecoder.prototype.emitNotTerminatedNamedEntity = function () {
		        var _a;
		        var _b = this, result = _b.result, decodeTree = _b.decodeTree;
		        var valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
		        this.emitNamedEntityData(result, valueLength, this.consumed);
		        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
		        return this.consumed;
		    };
		    /**
		     * Emit a named entity.
		     *
		     * @param result The index of the entity in the decode tree.
		     * @param valueLength The number of bytes in the entity.
		     * @param consumed The number of characters consumed.
		     *
		     * @returns The number of characters consumed.
		     */
		    EntityDecoder.prototype.emitNamedEntityData = function (result, valueLength, consumed) {
		        var decodeTree = this.decodeTree;
		        this.emitCodePoint(valueLength === 1
		            ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH
		            : decodeTree[result + 1], consumed);
		        if (valueLength === 3) {
		            // For multi-byte values, we need to emit the second byte.
		            this.emitCodePoint(decodeTree[result + 2], consumed);
		        }
		        return consumed;
		    };
		    /**
		     * Signal to the parser that the end of the input was reached.
		     *
		     * Remaining data will be emitted and relevant errors will be produced.
		     *
		     * @returns The number of characters consumed.
		     */
		    EntityDecoder.prototype.end = function () {
		        var _a;
		        switch (this.state) {
		            case EntityDecoderState.NamedEntity: {
		                // Emit a named entity if we have one.
		                return this.result !== 0 &&
		                    (this.decodeMode !== DecodingMode.Attribute ||
		                        this.result === this.treeIndex)
		                    ? this.emitNotTerminatedNamedEntity()
		                    : 0;
		            }
		            // Otherwise, emit a numeric entity if we have one.
		            case EntityDecoderState.NumericDecimal: {
		                return this.emitNumericEntity(0, 2);
		            }
		            case EntityDecoderState.NumericHex: {
		                return this.emitNumericEntity(0, 3);
		            }
		            case EntityDecoderState.NumericStart: {
		                (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
		                return 0;
		            }
		            case EntityDecoderState.EntityStart: {
		                // Return 0 if we have no entity.
		                return 0;
		            }
		        }
		    };
		    return EntityDecoder;
		}());
		exports.EntityDecoder = EntityDecoder;
		/**
		 * Creates a function that decodes entities in a string.
		 *
		 * @param decodeTree The decode tree.
		 * @returns A function that decodes entities in a string.
		 */
		function getDecoder(decodeTree) {
		    var ret = "";
		    var decoder = new EntityDecoder(decodeTree, function (str) { return (ret += (0, decode_codepoint_js_1.fromCodePoint)(str)); });
		    return function decodeWithTrie(str, decodeMode) {
		        var lastIndex = 0;
		        var offset = 0;
		        while ((offset = str.indexOf("&", offset)) >= 0) {
		            ret += str.slice(lastIndex, offset);
		            decoder.startEntity(decodeMode);
		            var len = decoder.write(str, 
		            // Skip the "&"
		            offset + 1);
		            if (len < 0) {
		                lastIndex = offset + decoder.end();
		                break;
		            }
		            lastIndex = offset + len;
		            // If `len` is 0, skip the current `&` and continue.
		            offset = len === 0 ? lastIndex + 1 : lastIndex;
		        }
		        var result = ret + str.slice(lastIndex);
		        // Make sure we don't keep a reference to the final string.
		        ret = "";
		        return result;
		    };
		}
		/**
		 * Determines the branch of the current node that is taken given the current
		 * character. This function is used to traverse the trie.
		 *
		 * @param decodeTree The trie.
		 * @param current The current node.
		 * @param nodeIdx The index right after the current node and its value.
		 * @param char The current character.
		 * @returns The index of the next node, or -1 if no branch is taken.
		 */
		function determineBranch(decodeTree, current, nodeIdx, char) {
		    var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
		    var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
		    // Case 1: Single branch encoded in jump offset
		    if (branchCount === 0) {
		        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
		    }
		    // Case 2: Multiple branches encoded in jump table
		    if (jumpOffset) {
		        var value = char - jumpOffset;
		        return value < 0 || value >= branchCount
		            ? -1
		            : decodeTree[nodeIdx + value] - 1;
		    }
		    // Case 3: Multiple branches encoded in dictionary
		    // Binary search for the character.
		    var lo = nodeIdx;
		    var hi = lo + branchCount - 1;
		    while (lo <= hi) {
		        var mid = (lo + hi) >>> 1;
		        var midVal = decodeTree[mid];
		        if (midVal < char) {
		            lo = mid + 1;
		        }
		        else if (midVal > char) {
		            hi = mid - 1;
		        }
		        else {
		            return decodeTree[mid + branchCount];
		        }
		    }
		    return -1;
		}
		exports.determineBranch = determineBranch;
		var htmlDecoder = getDecoder(decode_data_html_js_1.default);
		var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
		/**
		 * Decodes an HTML string.
		 *
		 * @param str The string to decode.
		 * @param mode The decoding mode.
		 * @returns The decoded string.
		 */
		function decodeHTML(str, mode) {
		    if (mode === void 0) { mode = DecodingMode.Legacy; }
		    return htmlDecoder(str, mode);
		}
		exports.decodeHTML = decodeHTML;
		/**
		 * Decodes an HTML string in an attribute.
		 *
		 * @param str The string to decode.
		 * @returns The decoded string.
		 */
		function decodeHTMLAttribute(str) {
		    return htmlDecoder(str, DecodingMode.Attribute);
		}
		exports.decodeHTMLAttribute = decodeHTMLAttribute;
		/**
		 * Decodes an HTML string, requiring all entities to be terminated by a semicolon.
		 *
		 * @param str The string to decode.
		 * @returns The decoded string.
		 */
		function decodeHTMLStrict(str) {
		    return htmlDecoder(str, DecodingMode.Strict);
		}
		exports.decodeHTMLStrict = decodeHTMLStrict;
		/**
		 * Decodes an XML string, requiring all entities to be terminated by a semicolon.
		 *
		 * @param str The string to decode.
		 * @returns The decoded string.
		 */
		function decodeXML(str) {
		    return xmlDecoder(str, DecodingMode.Strict);
		}
		exports.decodeXML = decodeXML;
		
	} (decode));
	return decode;
}var hasRequiredTokenizer;

function requireTokenizer () {
	if (hasRequiredTokenizer) return Tokenizer;
	hasRequiredTokenizer = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.QuoteType = void 0;
		var decode_js_1 = requireDecode();
		var CharCodes;
		(function (CharCodes) {
		    CharCodes[CharCodes["Tab"] = 9] = "Tab";
		    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
		    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
		    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
		    CharCodes[CharCodes["Space"] = 32] = "Space";
		    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
		    CharCodes[CharCodes["Number"] = 35] = "Number";
		    CharCodes[CharCodes["Amp"] = 38] = "Amp";
		    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
		    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
		    CharCodes[CharCodes["Dash"] = 45] = "Dash";
		    CharCodes[CharCodes["Slash"] = 47] = "Slash";
		    CharCodes[CharCodes["Zero"] = 48] = "Zero";
		    CharCodes[CharCodes["Nine"] = 57] = "Nine";
		    CharCodes[CharCodes["Semi"] = 59] = "Semi";
		    CharCodes[CharCodes["Lt"] = 60] = "Lt";
		    CharCodes[CharCodes["Eq"] = 61] = "Eq";
		    CharCodes[CharCodes["Gt"] = 62] = "Gt";
		    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
		    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
		    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
		    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
		    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
		    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
		    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
		    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
		    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
		})(CharCodes || (CharCodes = {}));
		/** All the states the tokenizer can be in. */
		var State;
		(function (State) {
		    State[State["Text"] = 1] = "Text";
		    State[State["BeforeTagName"] = 2] = "BeforeTagName";
		    State[State["InTagName"] = 3] = "InTagName";
		    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
		    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
		    State[State["InClosingTagName"] = 6] = "InClosingTagName";
		    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
		    // Attributes
		    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
		    State[State["InAttributeName"] = 9] = "InAttributeName";
		    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
		    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
		    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
		    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
		    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
		    // Declarations
		    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
		    State[State["InDeclaration"] = 16] = "InDeclaration";
		    // Processing instructions
		    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
		    // Comments & CDATA
		    State[State["BeforeComment"] = 18] = "BeforeComment";
		    State[State["CDATASequence"] = 19] = "CDATASequence";
		    State[State["InSpecialComment"] = 20] = "InSpecialComment";
		    State[State["InCommentLike"] = 21] = "InCommentLike";
		    // Special tags
		    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
		    State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
		    State[State["InSpecialTag"] = 24] = "InSpecialTag";
		    State[State["BeforeEntity"] = 25] = "BeforeEntity";
		    State[State["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
		    State[State["InNamedEntity"] = 27] = "InNamedEntity";
		    State[State["InNumericEntity"] = 28] = "InNumericEntity";
		    State[State["InHexEntity"] = 29] = "InHexEntity";
		})(State || (State = {}));
		function isWhitespace(c) {
		    return (c === CharCodes.Space ||
		        c === CharCodes.NewLine ||
		        c === CharCodes.Tab ||
		        c === CharCodes.FormFeed ||
		        c === CharCodes.CarriageReturn);
		}
		function isEndOfTagSection(c) {
		    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
		}
		function isNumber(c) {
		    return c >= CharCodes.Zero && c <= CharCodes.Nine;
		}
		function isASCIIAlpha(c) {
		    return ((c >= CharCodes.LowerA && c <= CharCodes.LowerZ) ||
		        (c >= CharCodes.UpperA && c <= CharCodes.UpperZ));
		}
		function isHexDigit(c) {
		    return ((c >= CharCodes.UpperA && c <= CharCodes.UpperF) ||
		        (c >= CharCodes.LowerA && c <= CharCodes.LowerF));
		}
		var QuoteType;
		(function (QuoteType) {
		    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
		    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
		    QuoteType[QuoteType["Single"] = 2] = "Single";
		    QuoteType[QuoteType["Double"] = 3] = "Double";
		})(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
		/**
		 * Sequences used to match longer strings.
		 *
		 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
		 * sequences with an increased offset.
		 */
		var Sequences = {
		    Cdata: new Uint8Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]),
		    CdataEnd: new Uint8Array([0x5d, 0x5d, 0x3e]),
		    CommentEnd: new Uint8Array([0x2d, 0x2d, 0x3e]),
		    ScriptEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]),
		    StyleEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]),
		    TitleEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]), // `</title`
		};
		var Tokenizer = /** @class */ (function () {
		    function Tokenizer(_a, cbs) {
		        var _b = _a.xmlMode, xmlMode = _b === void 0 ? false : _b, _c = _a.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
		        this.cbs = cbs;
		        /** The current state the tokenizer is in. */
		        this.state = State.Text;
		        /** The read buffer. */
		        this.buffer = "";
		        /** The beginning of the section that is currently being read. */
		        this.sectionStart = 0;
		        /** The index within the buffer that we are currently looking at. */
		        this.index = 0;
		        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
		        this.baseState = State.Text;
		        /** For special parsing behavior inside of script and style tags. */
		        this.isSpecial = false;
		        /** Indicates whether the tokenizer has been paused. */
		        this.running = true;
		        /** The offset of the current buffer. */
		        this.offset = 0;
		        this.currentSequence = undefined;
		        this.sequenceIndex = 0;
		        this.trieIndex = 0;
		        this.trieCurrent = 0;
		        /** For named entities, the index of the value. For numeric entities, the code point. */
		        this.entityResult = 0;
		        this.entityExcess = 0;
		        this.xmlMode = xmlMode;
		        this.decodeEntities = decodeEntities;
		        this.entityTrie = xmlMode ? decode_js_1.xmlDecodeTree : decode_js_1.htmlDecodeTree;
		    }
		    Tokenizer.prototype.reset = function () {
		        this.state = State.Text;
		        this.buffer = "";
		        this.sectionStart = 0;
		        this.index = 0;
		        this.baseState = State.Text;
		        this.currentSequence = undefined;
		        this.running = true;
		        this.offset = 0;
		    };
		    Tokenizer.prototype.write = function (chunk) {
		        this.offset += this.buffer.length;
		        this.buffer = chunk;
		        this.parse();
		    };
		    Tokenizer.prototype.end = function () {
		        if (this.running)
		            this.finish();
		    };
		    Tokenizer.prototype.pause = function () {
		        this.running = false;
		    };
		    Tokenizer.prototype.resume = function () {
		        this.running = true;
		        if (this.index < this.buffer.length + this.offset) {
		            this.parse();
		        }
		    };
		    /**
		     * The current index within all of the written data.
		     */
		    Tokenizer.prototype.getIndex = function () {
		        return this.index;
		    };
		    /**
		     * The start of the current section.
		     */
		    Tokenizer.prototype.getSectionStart = function () {
		        return this.sectionStart;
		    };
		    Tokenizer.prototype.stateText = function (c) {
		        if (c === CharCodes.Lt ||
		            (!this.decodeEntities && this.fastForwardTo(CharCodes.Lt))) {
		            if (this.index > this.sectionStart) {
		                this.cbs.ontext(this.sectionStart, this.index);
		            }
		            this.state = State.BeforeTagName;
		            this.sectionStart = this.index;
		        }
		        else if (this.decodeEntities && c === CharCodes.Amp) {
		            this.state = State.BeforeEntity;
		        }
		    };
		    Tokenizer.prototype.stateSpecialStartSequence = function (c) {
		        var isEnd = this.sequenceIndex === this.currentSequence.length;
		        var isMatch = isEnd
		            ? // If we are at the end of the sequence, make sure the tag name has ended
		                isEndOfTagSection(c)
		            : // Otherwise, do a case-insensitive comparison
		                (c | 0x20) === this.currentSequence[this.sequenceIndex];
		        if (!isMatch) {
		            this.isSpecial = false;
		        }
		        else if (!isEnd) {
		            this.sequenceIndex++;
		            return;
		        }
		        this.sequenceIndex = 0;
		        this.state = State.InTagName;
		        this.stateInTagName(c);
		    };
		    /** Look for an end tag. For <title> tags, also decode entities. */
		    Tokenizer.prototype.stateInSpecialTag = function (c) {
		        if (this.sequenceIndex === this.currentSequence.length) {
		            if (c === CharCodes.Gt || isWhitespace(c)) {
		                var endOfText = this.index - this.currentSequence.length;
		                if (this.sectionStart < endOfText) {
		                    // Spoof the index so that reported locations match up.
		                    var actualIndex = this.index;
		                    this.index = endOfText;
		                    this.cbs.ontext(this.sectionStart, endOfText);
		                    this.index = actualIndex;
		                }
		                this.isSpecial = false;
		                this.sectionStart = endOfText + 2; // Skip over the `</`
		                this.stateInClosingTagName(c);
		                return; // We are done; skip the rest of the function.
		            }
		            this.sequenceIndex = 0;
		        }
		        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
		            this.sequenceIndex += 1;
		        }
		        else if (this.sequenceIndex === 0) {
		            if (this.currentSequence === Sequences.TitleEnd) {
		                // We have to parse entities in <title> tags.
		                if (this.decodeEntities && c === CharCodes.Amp) {
		                    this.state = State.BeforeEntity;
		                }
		            }
		            else if (this.fastForwardTo(CharCodes.Lt)) {
		                // Outside of <title> tags, we can fast-forward.
		                this.sequenceIndex = 1;
		            }
		        }
		        else {
		            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
		            this.sequenceIndex = Number(c === CharCodes.Lt);
		        }
		    };
		    Tokenizer.prototype.stateCDATASequence = function (c) {
		        if (c === Sequences.Cdata[this.sequenceIndex]) {
		            if (++this.sequenceIndex === Sequences.Cdata.length) {
		                this.state = State.InCommentLike;
		                this.currentSequence = Sequences.CdataEnd;
		                this.sequenceIndex = 0;
		                this.sectionStart = this.index + 1;
		            }
		        }
		        else {
		            this.sequenceIndex = 0;
		            this.state = State.InDeclaration;
		            this.stateInDeclaration(c); // Reconsume the character
		        }
		    };
		    /**
		     * When we wait for one specific character, we can speed things up
		     * by skipping through the buffer until we find it.
		     *
		     * @returns Whether the character was found.
		     */
		    Tokenizer.prototype.fastForwardTo = function (c) {
		        while (++this.index < this.buffer.length + this.offset) {
		            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
		                return true;
		            }
		        }
		        /*
		         * We increment the index at the end of the `parse` loop,
		         * so set it to `buffer.length - 1` here.
		         *
		         * TODO: Refactor `parse` to increment index before calling states.
		         */
		        this.index = this.buffer.length + this.offset - 1;
		        return false;
		    };
		    /**
		     * Comments and CDATA end with `-->` and `]]>`.
		     *
		     * Their common qualities are:
		     * - Their end sequences have a distinct character they start with.
		     * - That character is then repeated, so we have to check multiple repeats.
		     * - All characters but the start character of the sequence can be skipped.
		     */
		    Tokenizer.prototype.stateInCommentLike = function (c) {
		        if (c === this.currentSequence[this.sequenceIndex]) {
		            if (++this.sequenceIndex === this.currentSequence.length) {
		                if (this.currentSequence === Sequences.CdataEnd) {
		                    this.cbs.oncdata(this.sectionStart, this.index, 2);
		                }
		                else {
		                    this.cbs.oncomment(this.sectionStart, this.index, 2);
		                }
		                this.sequenceIndex = 0;
		                this.sectionStart = this.index + 1;
		                this.state = State.Text;
		            }
		        }
		        else if (this.sequenceIndex === 0) {
		            // Fast-forward to the first character of the sequence
		            if (this.fastForwardTo(this.currentSequence[0])) {
		                this.sequenceIndex = 1;
		            }
		        }
		        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
		            // Allow long sequences, eg. --->, ]]]>
		            this.sequenceIndex = 0;
		        }
		    };
		    /**
		     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
		     *
		     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
		     * We allow anything that wouldn't end the tag.
		     */
		    Tokenizer.prototype.isTagStartChar = function (c) {
		        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
		    };
		    Tokenizer.prototype.startSpecial = function (sequence, offset) {
		        this.isSpecial = true;
		        this.currentSequence = sequence;
		        this.sequenceIndex = offset;
		        this.state = State.SpecialStartSequence;
		    };
		    Tokenizer.prototype.stateBeforeTagName = function (c) {
		        if (c === CharCodes.ExclamationMark) {
		            this.state = State.BeforeDeclaration;
		            this.sectionStart = this.index + 1;
		        }
		        else if (c === CharCodes.Questionmark) {
		            this.state = State.InProcessingInstruction;
		            this.sectionStart = this.index + 1;
		        }
		        else if (this.isTagStartChar(c)) {
		            var lower = c | 0x20;
		            this.sectionStart = this.index;
		            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
		                this.startSpecial(Sequences.TitleEnd, 3);
		            }
		            else {
		                this.state =
		                    !this.xmlMode && lower === Sequences.ScriptEnd[2]
		                        ? State.BeforeSpecialS
		                        : State.InTagName;
		            }
		        }
		        else if (c === CharCodes.Slash) {
		            this.state = State.BeforeClosingTagName;
		        }
		        else {
		            this.state = State.Text;
		            this.stateText(c);
		        }
		    };
		    Tokenizer.prototype.stateInTagName = function (c) {
		        if (isEndOfTagSection(c)) {
		            this.cbs.onopentagname(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		    };
		    Tokenizer.prototype.stateBeforeClosingTagName = function (c) {
		        if (isWhitespace(c)) ;
		        else if (c === CharCodes.Gt) {
		            this.state = State.Text;
		        }
		        else {
		            this.state = this.isTagStartChar(c)
		                ? State.InClosingTagName
		                : State.InSpecialComment;
		            this.sectionStart = this.index;
		        }
		    };
		    Tokenizer.prototype.stateInClosingTagName = function (c) {
		        if (c === CharCodes.Gt || isWhitespace(c)) {
		            this.cbs.onclosetag(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.state = State.AfterClosingTagName;
		            this.stateAfterClosingTagName(c);
		        }
		    };
		    Tokenizer.prototype.stateAfterClosingTagName = function (c) {
		        // Skip everything until ">"
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.state = State.Text;
		            this.baseState = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    };
		    Tokenizer.prototype.stateBeforeAttributeName = function (c) {
		        if (c === CharCodes.Gt) {
		            this.cbs.onopentagend(this.index);
		            if (this.isSpecial) {
		                this.state = State.InSpecialTag;
		                this.sequenceIndex = 0;
		            }
		            else {
		                this.state = State.Text;
		            }
		            this.baseState = this.state;
		            this.sectionStart = this.index + 1;
		        }
		        else if (c === CharCodes.Slash) {
		            this.state = State.InSelfClosingTag;
		        }
		        else if (!isWhitespace(c)) {
		            this.state = State.InAttributeName;
		            this.sectionStart = this.index;
		        }
		    };
		    Tokenizer.prototype.stateInSelfClosingTag = function (c) {
		        if (c === CharCodes.Gt) {
		            this.cbs.onselfclosingtag(this.index);
		            this.state = State.Text;
		            this.baseState = State.Text;
		            this.sectionStart = this.index + 1;
		            this.isSpecial = false; // Reset special state, in case of self-closing special tags
		        }
		        else if (!isWhitespace(c)) {
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		    };
		    Tokenizer.prototype.stateInAttributeName = function (c) {
		        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
		            this.cbs.onattribname(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.state = State.AfterAttributeName;
		            this.stateAfterAttributeName(c);
		        }
		    };
		    Tokenizer.prototype.stateAfterAttributeName = function (c) {
		        if (c === CharCodes.Eq) {
		            this.state = State.BeforeAttributeValue;
		        }
		        else if (c === CharCodes.Slash || c === CharCodes.Gt) {
		            this.cbs.onattribend(QuoteType.NoValue, this.index);
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		        else if (!isWhitespace(c)) {
		            this.cbs.onattribend(QuoteType.NoValue, this.index);
		            this.state = State.InAttributeName;
		            this.sectionStart = this.index;
		        }
		    };
		    Tokenizer.prototype.stateBeforeAttributeValue = function (c) {
		        if (c === CharCodes.DoubleQuote) {
		            this.state = State.InAttributeValueDq;
		            this.sectionStart = this.index + 1;
		        }
		        else if (c === CharCodes.SingleQuote) {
		            this.state = State.InAttributeValueSq;
		            this.sectionStart = this.index + 1;
		        }
		        else if (!isWhitespace(c)) {
		            this.sectionStart = this.index;
		            this.state = State.InAttributeValueNq;
		            this.stateInAttributeValueNoQuotes(c); // Reconsume token
		        }
		    };
		    Tokenizer.prototype.handleInAttributeValue = function (c, quote) {
		        if (c === quote ||
		            (!this.decodeEntities && this.fastForwardTo(quote))) {
		            this.cbs.onattribdata(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.cbs.onattribend(quote === CharCodes.DoubleQuote
		                ? QuoteType.Double
		                : QuoteType.Single, this.index);
		            this.state = State.BeforeAttributeName;
		        }
		        else if (this.decodeEntities && c === CharCodes.Amp) {
		            this.baseState = this.state;
		            this.state = State.BeforeEntity;
		        }
		    };
		    Tokenizer.prototype.stateInAttributeValueDoubleQuotes = function (c) {
		        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
		    };
		    Tokenizer.prototype.stateInAttributeValueSingleQuotes = function (c) {
		        this.handleInAttributeValue(c, CharCodes.SingleQuote);
		    };
		    Tokenizer.prototype.stateInAttributeValueNoQuotes = function (c) {
		        if (isWhitespace(c) || c === CharCodes.Gt) {
		            this.cbs.onattribdata(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.cbs.onattribend(QuoteType.Unquoted, this.index);
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		        else if (this.decodeEntities && c === CharCodes.Amp) {
		            this.baseState = this.state;
		            this.state = State.BeforeEntity;
		        }
		    };
		    Tokenizer.prototype.stateBeforeDeclaration = function (c) {
		        if (c === CharCodes.OpeningSquareBracket) {
		            this.state = State.CDATASequence;
		            this.sequenceIndex = 0;
		        }
		        else {
		            this.state =
		                c === CharCodes.Dash
		                    ? State.BeforeComment
		                    : State.InDeclaration;
		        }
		    };
		    Tokenizer.prototype.stateInDeclaration = function (c) {
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.cbs.ondeclaration(this.sectionStart, this.index);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    };
		    Tokenizer.prototype.stateInProcessingInstruction = function (c) {
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    };
		    Tokenizer.prototype.stateBeforeComment = function (c) {
		        if (c === CharCodes.Dash) {
		            this.state = State.InCommentLike;
		            this.currentSequence = Sequences.CommentEnd;
		            // Allow short comments (eg. <!-->)
		            this.sequenceIndex = 2;
		            this.sectionStart = this.index + 1;
		        }
		        else {
		            this.state = State.InDeclaration;
		        }
		    };
		    Tokenizer.prototype.stateInSpecialComment = function (c) {
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.cbs.oncomment(this.sectionStart, this.index, 0);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    };
		    Tokenizer.prototype.stateBeforeSpecialS = function (c) {
		        var lower = c | 0x20;
		        if (lower === Sequences.ScriptEnd[3]) {
		            this.startSpecial(Sequences.ScriptEnd, 4);
		        }
		        else if (lower === Sequences.StyleEnd[3]) {
		            this.startSpecial(Sequences.StyleEnd, 4);
		        }
		        else {
		            this.state = State.InTagName;
		            this.stateInTagName(c); // Consume the token again
		        }
		    };
		    Tokenizer.prototype.stateBeforeEntity = function (c) {
		        // Start excess with 1 to include the '&'
		        this.entityExcess = 1;
		        this.entityResult = 0;
		        if (c === CharCodes.Number) {
		            this.state = State.BeforeNumericEntity;
		        }
		        else if (c === CharCodes.Amp) ;
		        else {
		            this.trieIndex = 0;
		            this.trieCurrent = this.entityTrie[0];
		            this.state = State.InNamedEntity;
		            this.stateInNamedEntity(c);
		        }
		    };
		    Tokenizer.prototype.stateInNamedEntity = function (c) {
		        this.entityExcess += 1;
		        this.trieIndex = (0, decode_js_1.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
		        if (this.trieIndex < 0) {
		            this.emitNamedEntity();
		            this.index--;
		            return;
		        }
		        this.trieCurrent = this.entityTrie[this.trieIndex];
		        var masked = this.trieCurrent & decode_js_1.BinTrieFlags.VALUE_LENGTH;
		        // If the branch is a value, store it and continue
		        if (masked) {
		            // The mask is the number of bytes of the value, including the current byte.
		            var valueLength = (masked >> 14) - 1;
		            // If we have a legacy entity while parsing strictly, just skip the number of bytes
		            if (!this.allowLegacyEntity() && c !== CharCodes.Semi) {
		                this.trieIndex += valueLength;
		            }
		            else {
		                // Add 1 as we have already incremented the excess
		                var entityStart = this.index - this.entityExcess + 1;
		                if (entityStart > this.sectionStart) {
		                    this.emitPartial(this.sectionStart, entityStart);
		                }
		                // If this is a surrogate pair, consume the next two bytes
		                this.entityResult = this.trieIndex;
		                this.trieIndex += valueLength;
		                this.entityExcess = 0;
		                this.sectionStart = this.index + 1;
		                if (valueLength === 0) {
		                    this.emitNamedEntity();
		                }
		            }
		        }
		    };
		    Tokenizer.prototype.emitNamedEntity = function () {
		        this.state = this.baseState;
		        if (this.entityResult === 0) {
		            return;
		        }
		        var valueLength = (this.entityTrie[this.entityResult] & decode_js_1.BinTrieFlags.VALUE_LENGTH) >>
		            14;
		        switch (valueLength) {
		            case 1: {
		                this.emitCodePoint(this.entityTrie[this.entityResult] &
		                    ~decode_js_1.BinTrieFlags.VALUE_LENGTH);
		                break;
		            }
		            case 2: {
		                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
		                break;
		            }
		            case 3: {
		                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
		                this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
		            }
		        }
		    };
		    Tokenizer.prototype.stateBeforeNumericEntity = function (c) {
		        if ((c | 0x20) === CharCodes.LowerX) {
		            this.entityExcess++;
		            this.state = State.InHexEntity;
		        }
		        else {
		            this.state = State.InNumericEntity;
		            this.stateInNumericEntity(c);
		        }
		    };
		    Tokenizer.prototype.emitNumericEntity = function (strict) {
		        var entityStart = this.index - this.entityExcess - 1;
		        var numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
		        if (numberStart !== this.index) {
		            // Emit leading data if any
		            if (entityStart > this.sectionStart) {
		                this.emitPartial(this.sectionStart, entityStart);
		            }
		            this.sectionStart = this.index + Number(strict);
		            this.emitCodePoint((0, decode_js_1.replaceCodePoint)(this.entityResult));
		        }
		        this.state = this.baseState;
		    };
		    Tokenizer.prototype.stateInNumericEntity = function (c) {
		        if (c === CharCodes.Semi) {
		            this.emitNumericEntity(true);
		        }
		        else if (isNumber(c)) {
		            this.entityResult = this.entityResult * 10 + (c - CharCodes.Zero);
		            this.entityExcess++;
		        }
		        else {
		            if (this.allowLegacyEntity()) {
		                this.emitNumericEntity(false);
		            }
		            else {
		                this.state = this.baseState;
		            }
		            this.index--;
		        }
		    };
		    Tokenizer.prototype.stateInHexEntity = function (c) {
		        if (c === CharCodes.Semi) {
		            this.emitNumericEntity(true);
		        }
		        else if (isNumber(c)) {
		            this.entityResult = this.entityResult * 16 + (c - CharCodes.Zero);
		            this.entityExcess++;
		        }
		        else if (isHexDigit(c)) {
		            this.entityResult =
		                this.entityResult * 16 + ((c | 0x20) - CharCodes.LowerA + 10);
		            this.entityExcess++;
		        }
		        else {
		            if (this.allowLegacyEntity()) {
		                this.emitNumericEntity(false);
		            }
		            else {
		                this.state = this.baseState;
		            }
		            this.index--;
		        }
		    };
		    Tokenizer.prototype.allowLegacyEntity = function () {
		        return (!this.xmlMode &&
		            (this.baseState === State.Text ||
		                this.baseState === State.InSpecialTag));
		    };
		    /**
		     * Remove data that has already been consumed from the buffer.
		     */
		    Tokenizer.prototype.cleanup = function () {
		        // If we are inside of text or attributes, emit what we already have.
		        if (this.running && this.sectionStart !== this.index) {
		            if (this.state === State.Text ||
		                (this.state === State.InSpecialTag && this.sequenceIndex === 0)) {
		                this.cbs.ontext(this.sectionStart, this.index);
		                this.sectionStart = this.index;
		            }
		            else if (this.state === State.InAttributeValueDq ||
		                this.state === State.InAttributeValueSq ||
		                this.state === State.InAttributeValueNq) {
		                this.cbs.onattribdata(this.sectionStart, this.index);
		                this.sectionStart = this.index;
		            }
		        }
		    };
		    Tokenizer.prototype.shouldContinue = function () {
		        return this.index < this.buffer.length + this.offset && this.running;
		    };
		    /**
		     * Iterates through the buffer, calling the function corresponding to the current state.
		     *
		     * States that are more likely to be hit are higher up, as a performance improvement.
		     */
		    Tokenizer.prototype.parse = function () {
		        while (this.shouldContinue()) {
		            var c = this.buffer.charCodeAt(this.index - this.offset);
		            switch (this.state) {
		                case State.Text: {
		                    this.stateText(c);
		                    break;
		                }
		                case State.SpecialStartSequence: {
		                    this.stateSpecialStartSequence(c);
		                    break;
		                }
		                case State.InSpecialTag: {
		                    this.stateInSpecialTag(c);
		                    break;
		                }
		                case State.CDATASequence: {
		                    this.stateCDATASequence(c);
		                    break;
		                }
		                case State.InAttributeValueDq: {
		                    this.stateInAttributeValueDoubleQuotes(c);
		                    break;
		                }
		                case State.InAttributeName: {
		                    this.stateInAttributeName(c);
		                    break;
		                }
		                case State.InCommentLike: {
		                    this.stateInCommentLike(c);
		                    break;
		                }
		                case State.InSpecialComment: {
		                    this.stateInSpecialComment(c);
		                    break;
		                }
		                case State.BeforeAttributeName: {
		                    this.stateBeforeAttributeName(c);
		                    break;
		                }
		                case State.InTagName: {
		                    this.stateInTagName(c);
		                    break;
		                }
		                case State.InClosingTagName: {
		                    this.stateInClosingTagName(c);
		                    break;
		                }
		                case State.BeforeTagName: {
		                    this.stateBeforeTagName(c);
		                    break;
		                }
		                case State.AfterAttributeName: {
		                    this.stateAfterAttributeName(c);
		                    break;
		                }
		                case State.InAttributeValueSq: {
		                    this.stateInAttributeValueSingleQuotes(c);
		                    break;
		                }
		                case State.BeforeAttributeValue: {
		                    this.stateBeforeAttributeValue(c);
		                    break;
		                }
		                case State.BeforeClosingTagName: {
		                    this.stateBeforeClosingTagName(c);
		                    break;
		                }
		                case State.AfterClosingTagName: {
		                    this.stateAfterClosingTagName(c);
		                    break;
		                }
		                case State.BeforeSpecialS: {
		                    this.stateBeforeSpecialS(c);
		                    break;
		                }
		                case State.InAttributeValueNq: {
		                    this.stateInAttributeValueNoQuotes(c);
		                    break;
		                }
		                case State.InSelfClosingTag: {
		                    this.stateInSelfClosingTag(c);
		                    break;
		                }
		                case State.InDeclaration: {
		                    this.stateInDeclaration(c);
		                    break;
		                }
		                case State.BeforeDeclaration: {
		                    this.stateBeforeDeclaration(c);
		                    break;
		                }
		                case State.BeforeComment: {
		                    this.stateBeforeComment(c);
		                    break;
		                }
		                case State.InProcessingInstruction: {
		                    this.stateInProcessingInstruction(c);
		                    break;
		                }
		                case State.InNamedEntity: {
		                    this.stateInNamedEntity(c);
		                    break;
		                }
		                case State.BeforeEntity: {
		                    this.stateBeforeEntity(c);
		                    break;
		                }
		                case State.InHexEntity: {
		                    this.stateInHexEntity(c);
		                    break;
		                }
		                case State.InNumericEntity: {
		                    this.stateInNumericEntity(c);
		                    break;
		                }
		                default: {
		                    // `this._state === State.BeforeNumericEntity`
		                    this.stateBeforeNumericEntity(c);
		                }
		            }
		            this.index++;
		        }
		        this.cleanup();
		    };
		    Tokenizer.prototype.finish = function () {
		        if (this.state === State.InNamedEntity) {
		            this.emitNamedEntity();
		        }
		        // If there is remaining data, emit it in a reasonable way
		        if (this.sectionStart < this.index) {
		            this.handleTrailingData();
		        }
		        this.cbs.onend();
		    };
		    /** Handle any trailing data. */
		    Tokenizer.prototype.handleTrailingData = function () {
		        var endIndex = this.buffer.length + this.offset;
		        if (this.state === State.InCommentLike) {
		            if (this.currentSequence === Sequences.CdataEnd) {
		                this.cbs.oncdata(this.sectionStart, endIndex, 0);
		            }
		            else {
		                this.cbs.oncomment(this.sectionStart, endIndex, 0);
		            }
		        }
		        else if (this.state === State.InNumericEntity &&
		            this.allowLegacyEntity()) {
		            this.emitNumericEntity(false);
		            // All trailing data will have been consumed
		        }
		        else if (this.state === State.InHexEntity &&
		            this.allowLegacyEntity()) {
		            this.emitNumericEntity(false);
		            // All trailing data will have been consumed
		        }
		        else if (this.state === State.InTagName ||
		            this.state === State.BeforeAttributeName ||
		            this.state === State.BeforeAttributeValue ||
		            this.state === State.AfterAttributeName ||
		            this.state === State.InAttributeName ||
		            this.state === State.InAttributeValueSq ||
		            this.state === State.InAttributeValueDq ||
		            this.state === State.InAttributeValueNq ||
		            this.state === State.InClosingTagName) ;
		        else {
		            this.cbs.ontext(this.sectionStart, endIndex);
		        }
		    };
		    Tokenizer.prototype.emitPartial = function (start, endIndex) {
		        if (this.baseState !== State.Text &&
		            this.baseState !== State.InSpecialTag) {
		            this.cbs.onattribdata(start, endIndex);
		        }
		        else {
		            this.cbs.ontext(start, endIndex);
		        }
		    };
		    Tokenizer.prototype.emitCodePoint = function (cp) {
		        if (this.baseState !== State.Text &&
		            this.baseState !== State.InSpecialTag) {
		            this.cbs.onattribentity(cp);
		        }
		        else {
		            this.cbs.ontextentity(cp);
		        }
		    };
		    return Tokenizer;
		}());
		exports.default = Tokenizer;
		
	} (Tokenizer));
	return Tokenizer;
}var hasRequiredParser$1;

function requireParser$1 () {
	if (hasRequiredParser$1) return Parser;
	hasRequiredParser$1 = 1;
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	Object.defineProperty(Parser, "__esModule", { value: true });
	Parser.Parser = void 0;
	var Tokenizer_js_1 = __importStar(requireTokenizer());
	var decode_js_1 = requireDecode();
	var formTags = new Set([
	    "input",
	    "option",
	    "optgroup",
	    "select",
	    "button",
	    "datalist",
	    "textarea",
	]);
	var pTag = new Set(["p"]);
	var tableSectionTags = new Set(["thead", "tbody"]);
	var ddtTags = new Set(["dd", "dt"]);
	var rtpTags = new Set(["rt", "rp"]);
	var openImpliesClose = new Map([
	    ["tr", new Set(["tr", "th", "td"])],
	    ["th", new Set(["th"])],
	    ["td", new Set(["thead", "th", "td"])],
	    ["body", new Set(["head", "link", "script"])],
	    ["li", new Set(["li"])],
	    ["p", pTag],
	    ["h1", pTag],
	    ["h2", pTag],
	    ["h3", pTag],
	    ["h4", pTag],
	    ["h5", pTag],
	    ["h6", pTag],
	    ["select", formTags],
	    ["input", formTags],
	    ["output", formTags],
	    ["button", formTags],
	    ["datalist", formTags],
	    ["textarea", formTags],
	    ["option", new Set(["option"])],
	    ["optgroup", new Set(["optgroup", "option"])],
	    ["dd", ddtTags],
	    ["dt", ddtTags],
	    ["address", pTag],
	    ["article", pTag],
	    ["aside", pTag],
	    ["blockquote", pTag],
	    ["details", pTag],
	    ["div", pTag],
	    ["dl", pTag],
	    ["fieldset", pTag],
	    ["figcaption", pTag],
	    ["figure", pTag],
	    ["footer", pTag],
	    ["form", pTag],
	    ["header", pTag],
	    ["hr", pTag],
	    ["main", pTag],
	    ["nav", pTag],
	    ["ol", pTag],
	    ["pre", pTag],
	    ["section", pTag],
	    ["table", pTag],
	    ["ul", pTag],
	    ["rt", rtpTags],
	    ["rp", rtpTags],
	    ["tbody", tableSectionTags],
	    ["tfoot", tableSectionTags],
	]);
	var voidElements = new Set([
	    "area",
	    "base",
	    "basefont",
	    "br",
	    "col",
	    "command",
	    "embed",
	    "frame",
	    "hr",
	    "img",
	    "input",
	    "isindex",
	    "keygen",
	    "link",
	    "meta",
	    "param",
	    "source",
	    "track",
	    "wbr",
	]);
	var foreignContextElements = new Set(["math", "svg"]);
	var htmlIntegrationElements = new Set([
	    "mi",
	    "mo",
	    "mn",
	    "ms",
	    "mtext",
	    "annotation-xml",
	    "foreignobject",
	    "desc",
	    "title",
	]);
	var reNameEnd = /\s|\//;
	var Parser$1 = /** @class */ (function () {
	    function Parser(cbs, options) {
	        if (options === void 0) { options = {}; }
	        var _a, _b, _c, _d, _e;
	        this.options = options;
	        /** The start index of the last event. */
	        this.startIndex = 0;
	        /** The end index of the last event. */
	        this.endIndex = 0;
	        /**
	         * Store the start index of the current open tag,
	         * so we can update the start index for attributes.
	         */
	        this.openTagStart = 0;
	        this.tagname = "";
	        this.attribname = "";
	        this.attribvalue = "";
	        this.attribs = null;
	        this.stack = [];
	        this.foreignContext = [];
	        this.buffers = [];
	        this.bufferOffset = 0;
	        /** The index of the last written buffer. Used when resuming after a `pause()`. */
	        this.writeIndex = 0;
	        /** Indicates whether the parser has finished running / `.end` has been called. */
	        this.ended = false;
	        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
	        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
	        this.lowerCaseAttributeNames =
	            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
	        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_js_1.default)(this.options, this);
	        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
	    }
	    // Tokenizer event handlers
	    /** @internal */
	    Parser.prototype.ontext = function (start, endIndex) {
	        var _a, _b;
	        var data = this.getSlice(start, endIndex);
	        this.endIndex = endIndex - 1;
	        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
	        this.startIndex = endIndex;
	    };
	    /** @internal */
	    Parser.prototype.ontextentity = function (cp) {
	        var _a, _b;
	        /*
	         * Entities can be emitted on the character, or directly after.
	         * We use the section start here to get accurate indices.
	         */
	        var index = this.tokenizer.getSectionStart();
	        this.endIndex = index - 1;
	        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0, decode_js_1.fromCodePoint)(cp));
	        this.startIndex = index;
	    };
	    Parser.prototype.isVoidElement = function (name) {
	        return !this.options.xmlMode && voidElements.has(name);
	    };
	    /** @internal */
	    Parser.prototype.onopentagname = function (start, endIndex) {
	        this.endIndex = endIndex;
	        var name = this.getSlice(start, endIndex);
	        if (this.lowerCaseTagNames) {
	            name = name.toLowerCase();
	        }
	        this.emitOpenTag(name);
	    };
	    Parser.prototype.emitOpenTag = function (name) {
	        var _a, _b, _c, _d;
	        this.openTagStart = this.startIndex;
	        this.tagname = name;
	        var impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
	        if (impliesClose) {
	            while (this.stack.length > 0 &&
	                impliesClose.has(this.stack[this.stack.length - 1])) {
	                var element = this.stack.pop();
	                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, true);
	            }
	        }
	        if (!this.isVoidElement(name)) {
	            this.stack.push(name);
	            if (foreignContextElements.has(name)) {
	                this.foreignContext.push(true);
	            }
	            else if (htmlIntegrationElements.has(name)) {
	                this.foreignContext.push(false);
	            }
	        }
	        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
	        if (this.cbs.onopentag)
	            this.attribs = {};
	    };
	    Parser.prototype.endOpenTag = function (isImplied) {
	        var _a, _b;
	        this.startIndex = this.openTagStart;
	        if (this.attribs) {
	            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
	            this.attribs = null;
	        }
	        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
	            this.cbs.onclosetag(this.tagname, true);
	        }
	        this.tagname = "";
	    };
	    /** @internal */
	    Parser.prototype.onopentagend = function (endIndex) {
	        this.endIndex = endIndex;
	        this.endOpenTag(false);
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.onclosetag = function (start, endIndex) {
	        var _a, _b, _c, _d, _e, _f;
	        this.endIndex = endIndex;
	        var name = this.getSlice(start, endIndex);
	        if (this.lowerCaseTagNames) {
	            name = name.toLowerCase();
	        }
	        if (foreignContextElements.has(name) ||
	            htmlIntegrationElements.has(name)) {
	            this.foreignContext.pop();
	        }
	        if (!this.isVoidElement(name)) {
	            var pos = this.stack.lastIndexOf(name);
	            if (pos !== -1) {
	                if (this.cbs.onclosetag) {
	                    var count = this.stack.length - pos;
	                    while (count--) {
	                        // We know the stack has sufficient elements.
	                        this.cbs.onclosetag(this.stack.pop(), count !== 0);
	                    }
	                }
	                else
	                    this.stack.length = pos;
	            }
	            else if (!this.options.xmlMode && name === "p") {
	                // Implicit open before close
	                this.emitOpenTag("p");
	                this.closeCurrentTag(true);
	            }
	        }
	        else if (!this.options.xmlMode && name === "br") {
	            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
	            (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, "br");
	            (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
	            (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
	        }
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.onselfclosingtag = function (endIndex) {
	        this.endIndex = endIndex;
	        if (this.options.xmlMode ||
	            this.options.recognizeSelfClosing ||
	            this.foreignContext[this.foreignContext.length - 1]) {
	            this.closeCurrentTag(false);
	            // Set `startIndex` for next node
	            this.startIndex = endIndex + 1;
	        }
	        else {
	            // Ignore the fact that the tag is self-closing.
	            this.onopentagend(endIndex);
	        }
	    };
	    Parser.prototype.closeCurrentTag = function (isOpenImplied) {
	        var _a, _b;
	        var name = this.tagname;
	        this.endOpenTag(isOpenImplied);
	        // Self-closing tags will be on the top of the stack
	        if (this.stack[this.stack.length - 1] === name) {
	            // If the opening tag isn't implied, the closing tag has to be implied.
	            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
	            this.stack.pop();
	        }
	    };
	    /** @internal */
	    Parser.prototype.onattribname = function (start, endIndex) {
	        this.startIndex = start;
	        var name = this.getSlice(start, endIndex);
	        this.attribname = this.lowerCaseAttributeNames
	            ? name.toLowerCase()
	            : name;
	    };
	    /** @internal */
	    Parser.prototype.onattribdata = function (start, endIndex) {
	        this.attribvalue += this.getSlice(start, endIndex);
	    };
	    /** @internal */
	    Parser.prototype.onattribentity = function (cp) {
	        this.attribvalue += (0, decode_js_1.fromCodePoint)(cp);
	    };
	    /** @internal */
	    Parser.prototype.onattribend = function (quote, endIndex) {
	        var _a, _b;
	        this.endIndex = endIndex;
	        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === Tokenizer_js_1.QuoteType.Double
	            ? '"'
	            : quote === Tokenizer_js_1.QuoteType.Single
	                ? "'"
	                : quote === Tokenizer_js_1.QuoteType.NoValue
	                    ? undefined
	                    : null);
	        if (this.attribs &&
	            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
	            this.attribs[this.attribname] = this.attribvalue;
	        }
	        this.attribvalue = "";
	    };
	    Parser.prototype.getInstructionName = function (value) {
	        var index = value.search(reNameEnd);
	        var name = index < 0 ? value : value.substr(0, index);
	        if (this.lowerCaseTagNames) {
	            name = name.toLowerCase();
	        }
	        return name;
	    };
	    /** @internal */
	    Parser.prototype.ondeclaration = function (start, endIndex) {
	        this.endIndex = endIndex;
	        var value = this.getSlice(start, endIndex);
	        if (this.cbs.onprocessinginstruction) {
	            var name = this.getInstructionName(value);
	            this.cbs.onprocessinginstruction("!".concat(name), "!".concat(value));
	        }
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.onprocessinginstruction = function (start, endIndex) {
	        this.endIndex = endIndex;
	        var value = this.getSlice(start, endIndex);
	        if (this.cbs.onprocessinginstruction) {
	            var name = this.getInstructionName(value);
	            this.cbs.onprocessinginstruction("?".concat(name), "?".concat(value));
	        }
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.oncomment = function (start, endIndex, offset) {
	        var _a, _b, _c, _d;
	        this.endIndex = endIndex;
	        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
	        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.oncdata = function (start, endIndex, offset) {
	        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
	        this.endIndex = endIndex;
	        var value = this.getSlice(start, endIndex - offset);
	        if (this.options.xmlMode || this.options.recognizeCDATA) {
	            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
	            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
	            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
	        }
	        else {
	            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, "[CDATA[".concat(value, "]]"));
	            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
	        }
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.onend = function () {
	        var _a, _b;
	        if (this.cbs.onclosetag) {
	            // Set the end index for all remaining tags
	            this.endIndex = this.startIndex;
	            for (var index = this.stack.length; index > 0; this.cbs.onclosetag(this.stack[--index], true))
	                ;
	        }
	        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
	    };
	    /**
	     * Resets the parser to a blank state, ready to parse a new HTML document
	     */
	    Parser.prototype.reset = function () {
	        var _a, _b, _c, _d;
	        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
	        this.tokenizer.reset();
	        this.tagname = "";
	        this.attribname = "";
	        this.attribs = null;
	        this.stack.length = 0;
	        this.startIndex = 0;
	        this.endIndex = 0;
	        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
	        this.buffers.length = 0;
	        this.bufferOffset = 0;
	        this.writeIndex = 0;
	        this.ended = false;
	    };
	    /**
	     * Resets the parser, then parses a complete document and
	     * pushes it to the handler.
	     *
	     * @param data Document to parse.
	     */
	    Parser.prototype.parseComplete = function (data) {
	        this.reset();
	        this.end(data);
	    };
	    Parser.prototype.getSlice = function (start, end) {
	        while (start - this.bufferOffset >= this.buffers[0].length) {
	            this.shiftBuffer();
	        }
	        var slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
	        while (end - this.bufferOffset > this.buffers[0].length) {
	            this.shiftBuffer();
	            slice += this.buffers[0].slice(0, end - this.bufferOffset);
	        }
	        return slice;
	    };
	    Parser.prototype.shiftBuffer = function () {
	        this.bufferOffset += this.buffers[0].length;
	        this.writeIndex--;
	        this.buffers.shift();
	    };
	    /**
	     * Parses a chunk of data and calls the corresponding callbacks.
	     *
	     * @param chunk Chunk to parse.
	     */
	    Parser.prototype.write = function (chunk) {
	        var _a, _b;
	        if (this.ended) {
	            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
	            return;
	        }
	        this.buffers.push(chunk);
	        if (this.tokenizer.running) {
	            this.tokenizer.write(chunk);
	            this.writeIndex++;
	        }
	    };
	    /**
	     * Parses the end of the buffer and clears the stack, calls onend.
	     *
	     * @param chunk Optional final chunk to parse.
	     */
	    Parser.prototype.end = function (chunk) {
	        var _a, _b;
	        if (this.ended) {
	            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".end() after done!"));
	            return;
	        }
	        if (chunk)
	            this.write(chunk);
	        this.ended = true;
	        this.tokenizer.end();
	    };
	    /**
	     * Pauses parsing. The parser won't emit events until `resume` is called.
	     */
	    Parser.prototype.pause = function () {
	        this.tokenizer.pause();
	    };
	    /**
	     * Resumes parsing after `pause` was called.
	     */
	    Parser.prototype.resume = function () {
	        this.tokenizer.resume();
	        while (this.tokenizer.running &&
	            this.writeIndex < this.buffers.length) {
	            this.tokenizer.write(this.buffers[this.writeIndex++]);
	        }
	        if (this.ended)
	            this.tokenizer.end();
	    };
	    /**
	     * Alias of `write`, for backwards compatibility.
	     *
	     * @param chunk Chunk to parse.
	     * @deprecated
	     */
	    Parser.prototype.parseChunk = function (chunk) {
	        this.write(chunk);
	    };
	    /**
	     * Alias of `end`, for backwards compatibility.
	     *
	     * @param chunk Optional final chunk to parse.
	     * @deprecated
	     */
	    Parser.prototype.done = function (chunk) {
	        this.end(chunk);
	    };
	    return Parser;
	}());
	Parser.Parser = Parser$1;
	
	return Parser;
}var lib$4 = {};var lib$3 = {};var hasRequiredLib$5;

function requireLib$5 () {
	if (hasRequiredLib$5) return lib$3;
	hasRequiredLib$5 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
		/** Types of elements found in htmlparser2's DOM */
		var ElementType;
		(function (ElementType) {
		    /** Type for the root element of a document */
		    ElementType["Root"] = "root";
		    /** Type for Text */
		    ElementType["Text"] = "text";
		    /** Type for <? ... ?> */
		    ElementType["Directive"] = "directive";
		    /** Type for <!-- ... --> */
		    ElementType["Comment"] = "comment";
		    /** Type for <script> tags */
		    ElementType["Script"] = "script";
		    /** Type for <style> tags */
		    ElementType["Style"] = "style";
		    /** Type for Any tag */
		    ElementType["Tag"] = "tag";
		    /** Type for <![CDATA[ ... ]]> */
		    ElementType["CDATA"] = "cdata";
		    /** Type for <!doctype ...> */
		    ElementType["Doctype"] = "doctype";
		})(ElementType = exports.ElementType || (exports.ElementType = {}));
		/**
		 * Tests whether an element is a tag or not.
		 *
		 * @param elem Element to test
		 */
		function isTag(elem) {
		    return (elem.type === ElementType.Tag ||
		        elem.type === ElementType.Script ||
		        elem.type === ElementType.Style);
		}
		exports.isTag = isTag;
		// Exports for backwards compatibility
		/** Type for the root element of a document */
		exports.Root = ElementType.Root;
		/** Type for Text */
		exports.Text = ElementType.Text;
		/** Type for <? ... ?> */
		exports.Directive = ElementType.Directive;
		/** Type for <!-- ... --> */
		exports.Comment = ElementType.Comment;
		/** Type for <script> tags */
		exports.Script = ElementType.Script;
		/** Type for <style> tags */
		exports.Style = ElementType.Style;
		/** Type for Any tag */
		exports.Tag = ElementType.Tag;
		/** Type for <![CDATA[ ... ]]> */
		exports.CDATA = ElementType.CDATA;
		/** Type for <!doctype ...> */
		exports.Doctype = ElementType.Doctype; 
	} (lib$3));
	return lib$3;
}var node$1 = {};var hasRequiredNode$1;

function requireNode$1 () {
	if (hasRequiredNode$1) return node$1;
	hasRequiredNode$1 = 1;
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        if (typeof b !== "function" && b !== null)
	            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	Object.defineProperty(node$1, "__esModule", { value: true });
	node$1.cloneNode = node$1.hasChildren = node$1.isDocument = node$1.isDirective = node$1.isComment = node$1.isText = node$1.isCDATA = node$1.isTag = node$1.Element = node$1.Document = node$1.CDATA = node$1.NodeWithChildren = node$1.ProcessingInstruction = node$1.Comment = node$1.Text = node$1.DataNode = node$1.Node = void 0;
	var domelementtype_1 = requireLib$5();
	/**
	 * This object will be used as the prototype for Nodes when creating a
	 * DOM-Level-1-compliant structure.
	 */
	var Node = /** @class */ (function () {
	    function Node() {
	        /** Parent of the node */
	        this.parent = null;
	        /** Previous sibling */
	        this.prev = null;
	        /** Next sibling */
	        this.next = null;
	        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
	        this.startIndex = null;
	        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
	        this.endIndex = null;
	    }
	    Object.defineProperty(Node.prototype, "parentNode", {
	        // Read-write aliases for properties
	        /**
	         * Same as {@link parent}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.parent;
	        },
	        set: function (parent) {
	            this.parent = parent;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "previousSibling", {
	        /**
	         * Same as {@link prev}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.prev;
	        },
	        set: function (prev) {
	            this.prev = prev;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "nextSibling", {
	        /**
	         * Same as {@link next}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.next;
	        },
	        set: function (next) {
	            this.next = next;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    /**
	     * Clone this node, and optionally its children.
	     *
	     * @param recursive Clone child nodes as well.
	     * @returns A clone of the node.
	     */
	    Node.prototype.cloneNode = function (recursive) {
	        if (recursive === void 0) { recursive = false; }
	        return cloneNode(this, recursive);
	    };
	    return Node;
	}());
	node$1.Node = Node;
	/**
	 * A node that contains some data.
	 */
	var DataNode = /** @class */ (function (_super) {
	    __extends(DataNode, _super);
	    /**
	     * @param data The content of the data node
	     */
	    function DataNode(data) {
	        var _this = _super.call(this) || this;
	        _this.data = data;
	        return _this;
	    }
	    Object.defineProperty(DataNode.prototype, "nodeValue", {
	        /**
	         * Same as {@link data}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.data;
	        },
	        set: function (data) {
	            this.data = data;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return DataNode;
	}(Node));
	node$1.DataNode = DataNode;
	/**
	 * Text within the document.
	 */
	var Text = /** @class */ (function (_super) {
	    __extends(Text, _super);
	    function Text() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.type = domelementtype_1.ElementType.Text;
	        return _this;
	    }
	    Object.defineProperty(Text.prototype, "nodeType", {
	        get: function () {
	            return 3;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return Text;
	}(DataNode));
	node$1.Text = Text;
	/**
	 * Comments within the document.
	 */
	var Comment = /** @class */ (function (_super) {
	    __extends(Comment, _super);
	    function Comment() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.type = domelementtype_1.ElementType.Comment;
	        return _this;
	    }
	    Object.defineProperty(Comment.prototype, "nodeType", {
	        get: function () {
	            return 8;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return Comment;
	}(DataNode));
	node$1.Comment = Comment;
	/**
	 * Processing instructions, including doc types.
	 */
	var ProcessingInstruction = /** @class */ (function (_super) {
	    __extends(ProcessingInstruction, _super);
	    function ProcessingInstruction(name, data) {
	        var _this = _super.call(this, data) || this;
	        _this.name = name;
	        _this.type = domelementtype_1.ElementType.Directive;
	        return _this;
	    }
	    Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
	        get: function () {
	            return 1;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return ProcessingInstruction;
	}(DataNode));
	node$1.ProcessingInstruction = ProcessingInstruction;
	/**
	 * A `Node` that can have children.
	 */
	var NodeWithChildren = /** @class */ (function (_super) {
	    __extends(NodeWithChildren, _super);
	    /**
	     * @param children Children of the node. Only certain node types can have children.
	     */
	    function NodeWithChildren(children) {
	        var _this = _super.call(this) || this;
	        _this.children = children;
	        return _this;
	    }
	    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
	        // Aliases
	        /** First child of the node. */
	        get: function () {
	            var _a;
	            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
	        /** Last child of the node. */
	        get: function () {
	            return this.children.length > 0
	                ? this.children[this.children.length - 1]
	                : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
	        /**
	         * Same as {@link children}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.children;
	        },
	        set: function (children) {
	            this.children = children;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return NodeWithChildren;
	}(Node));
	node$1.NodeWithChildren = NodeWithChildren;
	var CDATA = /** @class */ (function (_super) {
	    __extends(CDATA, _super);
	    function CDATA() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.type = domelementtype_1.ElementType.CDATA;
	        return _this;
	    }
	    Object.defineProperty(CDATA.prototype, "nodeType", {
	        get: function () {
	            return 4;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return CDATA;
	}(NodeWithChildren));
	node$1.CDATA = CDATA;
	/**
	 * The root node of the document.
	 */
	var Document = /** @class */ (function (_super) {
	    __extends(Document, _super);
	    function Document() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.type = domelementtype_1.ElementType.Root;
	        return _this;
	    }
	    Object.defineProperty(Document.prototype, "nodeType", {
	        get: function () {
	            return 9;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return Document;
	}(NodeWithChildren));
	node$1.Document = Document;
	/**
	 * An element within the DOM.
	 */
	var Element = /** @class */ (function (_super) {
	    __extends(Element, _super);
	    /**
	     * @param name Name of the tag, eg. `div`, `span`.
	     * @param attribs Object mapping attribute names to attribute values.
	     * @param children Children of the node.
	     */
	    function Element(name, attribs, children, type) {
	        if (children === void 0) { children = []; }
	        if (type === void 0) { type = name === "script"
	            ? domelementtype_1.ElementType.Script
	            : name === "style"
	                ? domelementtype_1.ElementType.Style
	                : domelementtype_1.ElementType.Tag; }
	        var _this = _super.call(this, children) || this;
	        _this.name = name;
	        _this.attribs = attribs;
	        _this.type = type;
	        return _this;
	    }
	    Object.defineProperty(Element.prototype, "nodeType", {
	        get: function () {
	            return 1;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Element.prototype, "tagName", {
	        // DOM Level 1 aliases
	        /**
	         * Same as {@link name}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.name;
	        },
	        set: function (name) {
	            this.name = name;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Element.prototype, "attributes", {
	        get: function () {
	            var _this = this;
	            return Object.keys(this.attribs).map(function (name) {
	                var _a, _b;
	                return ({
	                    name: name,
	                    value: _this.attribs[name],
	                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
	                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
	                });
	            });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return Element;
	}(NodeWithChildren));
	node$1.Element = Element;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node is a `Element`, `false` otherwise.
	 */
	function isTag(node) {
	    return (0, domelementtype_1.isTag)(node);
	}
	node$1.isTag = isTag;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
	 */
	function isCDATA(node) {
	    return node.type === domelementtype_1.ElementType.CDATA;
	}
	node$1.isCDATA = isCDATA;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `Text`, `false` otherwise.
	 */
	function isText(node) {
	    return node.type === domelementtype_1.ElementType.Text;
	}
	node$1.isText = isText;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `Comment`, `false` otherwise.
	 */
	function isComment(node) {
	    return node.type === domelementtype_1.ElementType.Comment;
	}
	node$1.isComment = isComment;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
	 */
	function isDirective(node) {
	    return node.type === domelementtype_1.ElementType.Directive;
	}
	node$1.isDirective = isDirective;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
	 */
	function isDocument(node) {
	    return node.type === domelementtype_1.ElementType.Root;
	}
	node$1.isDocument = isDocument;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has children, `false` otherwise.
	 */
	function hasChildren(node) {
	    return Object.prototype.hasOwnProperty.call(node, "children");
	}
	node$1.hasChildren = hasChildren;
	/**
	 * Clone a node, and optionally its children.
	 *
	 * @param recursive Clone child nodes as well.
	 * @returns A clone of the node.
	 */
	function cloneNode(node, recursive) {
	    if (recursive === void 0) { recursive = false; }
	    var result;
	    if (isText(node)) {
	        result = new Text(node.data);
	    }
	    else if (isComment(node)) {
	        result = new Comment(node.data);
	    }
	    else if (isTag(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
	        children.forEach(function (child) { return (child.parent = clone_1); });
	        if (node.namespace != null) {
	            clone_1.namespace = node.namespace;
	        }
	        if (node["x-attribsNamespace"]) {
	            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
	        }
	        if (node["x-attribsPrefix"]) {
	            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
	        }
	        result = clone_1;
	    }
	    else if (isCDATA(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_2 = new CDATA(children);
	        children.forEach(function (child) { return (child.parent = clone_2); });
	        result = clone_2;
	    }
	    else if (isDocument(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_3 = new Document(children);
	        children.forEach(function (child) { return (child.parent = clone_3); });
	        if (node["x-mode"]) {
	            clone_3["x-mode"] = node["x-mode"];
	        }
	        result = clone_3;
	    }
	    else if (isDirective(node)) {
	        var instruction = new ProcessingInstruction(node.name, node.data);
	        if (node["x-name"] != null) {
	            instruction["x-name"] = node["x-name"];
	            instruction["x-publicId"] = node["x-publicId"];
	            instruction["x-systemId"] = node["x-systemId"];
	        }
	        result = instruction;
	    }
	    else {
	        throw new Error("Not implemented yet: ".concat(node.type));
	    }
	    result.startIndex = node.startIndex;
	    result.endIndex = node.endIndex;
	    if (node.sourceCodeLocation != null) {
	        result.sourceCodeLocation = node.sourceCodeLocation;
	    }
	    return result;
	}
	node$1.cloneNode = cloneNode;
	function cloneChildren(childs) {
	    var children = childs.map(function (child) { return cloneNode(child, true); });
	    for (var i = 1; i < children.length; i++) {
	        children[i].prev = children[i - 1];
	        children[i - 1].next = children[i];
	    }
	    return children;
	}
	return node$1;
}var hasRequiredLib$4;

function requireLib$4 () {
	if (hasRequiredLib$4) return lib$4;
	hasRequiredLib$4 = 1;
	(function (exports) {
		var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.DomHandler = void 0;
		var domelementtype_1 = requireLib$5();
		var node_js_1 = requireNode$1();
		__exportStar(requireNode$1(), exports);
		// Default options
		var defaultOpts = {
		    withStartIndices: false,
		    withEndIndices: false,
		    xmlMode: false,
		};
		var DomHandler = /** @class */ (function () {
		    /**
		     * @param callback Called once parsing has completed.
		     * @param options Settings for the handler.
		     * @param elementCB Callback whenever a tag is closed.
		     */
		    function DomHandler(callback, options, elementCB) {
		        /** The elements of the DOM */
		        this.dom = [];
		        /** The root element for the DOM */
		        this.root = new node_js_1.Document(this.dom);
		        /** Indicated whether parsing has been completed. */
		        this.done = false;
		        /** Stack of open tags. */
		        this.tagStack = [this.root];
		        /** A data node that is still being written to. */
		        this.lastNode = null;
		        /** Reference to the parser instance. Used for location information. */
		        this.parser = null;
		        // Make it possible to skip arguments, for backwards-compatibility
		        if (typeof options === "function") {
		            elementCB = options;
		            options = defaultOpts;
		        }
		        if (typeof callback === "object") {
		            options = callback;
		            callback = undefined;
		        }
		        this.callback = callback !== null && callback !== void 0 ? callback : null;
		        this.options = options !== null && options !== void 0 ? options : defaultOpts;
		        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
		    }
		    DomHandler.prototype.onparserinit = function (parser) {
		        this.parser = parser;
		    };
		    // Resets the handler back to starting state
		    DomHandler.prototype.onreset = function () {
		        this.dom = [];
		        this.root = new node_js_1.Document(this.dom);
		        this.done = false;
		        this.tagStack = [this.root];
		        this.lastNode = null;
		        this.parser = null;
		    };
		    // Signals the handler that parsing is done
		    DomHandler.prototype.onend = function () {
		        if (this.done)
		            return;
		        this.done = true;
		        this.parser = null;
		        this.handleCallback(null);
		    };
		    DomHandler.prototype.onerror = function (error) {
		        this.handleCallback(error);
		    };
		    DomHandler.prototype.onclosetag = function () {
		        this.lastNode = null;
		        var elem = this.tagStack.pop();
		        if (this.options.withEndIndices) {
		            elem.endIndex = this.parser.endIndex;
		        }
		        if (this.elementCB)
		            this.elementCB(elem);
		    };
		    DomHandler.prototype.onopentag = function (name, attribs) {
		        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
		        var element = new node_js_1.Element(name, attribs, undefined, type);
		        this.addNode(element);
		        this.tagStack.push(element);
		    };
		    DomHandler.prototype.ontext = function (data) {
		        var lastNode = this.lastNode;
		        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
		            lastNode.data += data;
		            if (this.options.withEndIndices) {
		                lastNode.endIndex = this.parser.endIndex;
		            }
		        }
		        else {
		            var node = new node_js_1.Text(data);
		            this.addNode(node);
		            this.lastNode = node;
		        }
		    };
		    DomHandler.prototype.oncomment = function (data) {
		        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
		            this.lastNode.data += data;
		            return;
		        }
		        var node = new node_js_1.Comment(data);
		        this.addNode(node);
		        this.lastNode = node;
		    };
		    DomHandler.prototype.oncommentend = function () {
		        this.lastNode = null;
		    };
		    DomHandler.prototype.oncdatastart = function () {
		        var text = new node_js_1.Text("");
		        var node = new node_js_1.CDATA([text]);
		        this.addNode(node);
		        text.parent = node;
		        this.lastNode = text;
		    };
		    DomHandler.prototype.oncdataend = function () {
		        this.lastNode = null;
		    };
		    DomHandler.prototype.onprocessinginstruction = function (name, data) {
		        var node = new node_js_1.ProcessingInstruction(name, data);
		        this.addNode(node);
		    };
		    DomHandler.prototype.handleCallback = function (error) {
		        if (typeof this.callback === "function") {
		            this.callback(error, this.dom);
		        }
		        else if (error) {
		            throw error;
		        }
		    };
		    DomHandler.prototype.addNode = function (node) {
		        var parent = this.tagStack[this.tagStack.length - 1];
		        var previousSibling = parent.children[parent.children.length - 1];
		        if (this.options.withStartIndices) {
		            node.startIndex = this.parser.startIndex;
		        }
		        if (this.options.withEndIndices) {
		            node.endIndex = this.parser.endIndex;
		        }
		        parent.children.push(node);
		        if (previousSibling) {
		            node.prev = previousSibling;
		            previousSibling.next = node;
		        }
		        node.parent = parent;
		        this.lastNode = null;
		    };
		    return DomHandler;
		}());
		exports.DomHandler = DomHandler;
		exports.default = DomHandler; 
	} (lib$4));
	return lib$4;
}var lib$2 = {};var stringify = {};var lib$1 = {};var lib = {};var encode = {};var encodeHtml = {};var hasRequiredEncodeHtml;

function requireEncodeHtml () {
	if (hasRequiredEncodeHtml) return encodeHtml;
	hasRequiredEncodeHtml = 1;
	// Generated using scripts/write-encode-map.ts
	Object.defineProperty(encodeHtml, "__esModule", { value: true });
	function restoreDiff(arr) {
	    for (var i = 1; i < arr.length; i++) {
	        arr[i][0] += arr[i - 1][0] + 1;
	    }
	    return arr;
	}
	// prettier-ignore
	encodeHtml.default = new Map(/* #__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* #__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* #__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* #__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
	
	return encodeHtml;
}var _escape = {};var hasRequired_escape;

function require_escape () {
	if (hasRequired_escape) return _escape;
	hasRequired_escape = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.getCodePoint = exports.xmlReplacer = void 0;
		exports.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
		var xmlCodeMap = new Map([
		    [34, "&quot;"],
		    [38, "&amp;"],
		    [39, "&apos;"],
		    [60, "&lt;"],
		    [62, "&gt;"],
		]);
		// For compatibility with node < 4, we wrap `codePointAt`
		exports.getCodePoint = 
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		String.prototype.codePointAt != null
		    ? function (str, index) { return str.codePointAt(index); }
		    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
		        function (c, index) {
		            return (c.charCodeAt(index) & 0xfc00) === 0xd800
		                ? (c.charCodeAt(index) - 0xd800) * 0x400 +
		                    c.charCodeAt(index + 1) -
		                    0xdc00 +
		                    0x10000
		                : c.charCodeAt(index);
		        };
		/**
		 * Encodes all non-ASCII characters, as well as characters not valid in XML
		 * documents using XML entities.
		 *
		 * If a character has no equivalent entity, a
		 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
		 */
		function encodeXML(str) {
		    var ret = "";
		    var lastIdx = 0;
		    var match;
		    while ((match = exports.xmlReplacer.exec(str)) !== null) {
		        var i = match.index;
		        var char = str.charCodeAt(i);
		        var next = xmlCodeMap.get(char);
		        if (next !== undefined) {
		            ret += str.substring(lastIdx, i) + next;
		            lastIdx = i + 1;
		        }
		        else {
		            ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports.getCodePoint)(str, i).toString(16), ";");
		            // Increase by 1 if we have a surrogate pair
		            lastIdx = exports.xmlReplacer.lastIndex += Number((char & 0xfc00) === 0xd800);
		        }
		    }
		    return ret + str.substr(lastIdx);
		}
		exports.encodeXML = encodeXML;
		/**
		 * Encodes all non-ASCII characters, as well as characters not valid in XML
		 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
		 *
		 * Have a look at `escapeUTF8` if you want a more concise output at the expense
		 * of reduced transportability.
		 *
		 * @param data String to escape.
		 */
		exports.escape = encodeXML;
		/**
		 * Creates a function that escapes all characters matched by the given regular
		 * expression using the given map of characters to escape to their entities.
		 *
		 * @param regex Regular expression to match characters to escape.
		 * @param map Map of characters to escape to their entities.
		 *
		 * @returns Function that escapes all characters matched by the given regular
		 * expression using the given map of characters to escape to their entities.
		 */
		function getEscaper(regex, map) {
		    return function escape(data) {
		        var match;
		        var lastIdx = 0;
		        var result = "";
		        while ((match = regex.exec(data))) {
		            if (lastIdx !== match.index) {
		                result += data.substring(lastIdx, match.index);
		            }
		            // We know that this character will be in the map.
		            result += map.get(match[0].charCodeAt(0));
		            // Every match will be of length 1
		            lastIdx = match.index + 1;
		        }
		        return result + data.substring(lastIdx);
		    };
		}
		/**
		 * Encodes all characters not valid in XML documents using XML entities.
		 *
		 * Note that the output will be character-set dependent.
		 *
		 * @param data String to escape.
		 */
		exports.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
		/**
		 * Encodes all characters that have to be escaped in HTML attributes,
		 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
		 *
		 * @param data String to escape.
		 */
		exports.escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
		    [34, "&quot;"],
		    [38, "&amp;"],
		    [160, "&nbsp;"],
		]));
		/**
		 * Encodes all characters that have to be escaped in HTML text,
		 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
		 *
		 * @param data String to escape.
		 */
		exports.escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
		    [38, "&amp;"],
		    [60, "&lt;"],
		    [62, "&gt;"],
		    [160, "&nbsp;"],
		]));
		
	} (_escape));
	return _escape;
}var hasRequiredEncode;

function requireEncode () {
	if (hasRequiredEncode) return encode;
	hasRequiredEncode = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(encode, "__esModule", { value: true });
	encode.encodeNonAsciiHTML = encode.encodeHTML = void 0;
	var encode_html_js_1 = __importDefault(requireEncodeHtml());
	var escape_js_1 = require_escape();
	var htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
	/**
	 * Encodes all characters in the input using HTML entities. This includes
	 * characters that are valid ASCII characters in HTML documents, such as `#`.
	 *
	 * To get a more compact output, consider using the `encodeNonAsciiHTML`
	 * function, which will only encode characters that are not valid in HTML
	 * documents, as well as non-ASCII characters.
	 *
	 * If a character has no equivalent entity, a numeric hexadecimal reference
	 * (eg. `&#xfc;`) will be used.
	 */
	function encodeHTML(data) {
	    return encodeHTMLTrieRe(htmlReplacer, data);
	}
	encode.encodeHTML = encodeHTML;
	/**
	 * Encodes all non-ASCII characters, as well as characters not valid in HTML
	 * documents using HTML entities. This function will not encode characters that
	 * are valid in HTML documents, such as `#`.
	 *
	 * If a character has no equivalent entity, a numeric hexadecimal reference
	 * (eg. `&#xfc;`) will be used.
	 */
	function encodeNonAsciiHTML(data) {
	    return encodeHTMLTrieRe(escape_js_1.xmlReplacer, data);
	}
	encode.encodeNonAsciiHTML = encodeNonAsciiHTML;
	function encodeHTMLTrieRe(regExp, str) {
	    var ret = "";
	    var lastIdx = 0;
	    var match;
	    while ((match = regExp.exec(str)) !== null) {
	        var i = match.index;
	        ret += str.substring(lastIdx, i);
	        var char = str.charCodeAt(i);
	        var next = encode_html_js_1.default.get(char);
	        if (typeof next === "object") {
	            // We are in a branch. Try to match the next char.
	            if (i + 1 < str.length) {
	                var nextChar = str.charCodeAt(i + 1);
	                var value = typeof next.n === "number"
	                    ? next.n === nextChar
	                        ? next.o
	                        : undefined
	                    : next.n.get(nextChar);
	                if (value !== undefined) {
	                    ret += value;
	                    lastIdx = regExp.lastIndex += 1;
	                    continue;
	                }
	            }
	            next = next.v;
	        }
	        // We might have a tree node without a value; skip and use a numeric entity.
	        if (next !== undefined) {
	            ret += next;
	            lastIdx = i + 1;
	        }
	        else {
	            var cp = (0, escape_js_1.getCodePoint)(str, i);
	            ret += "&#x".concat(cp.toString(16), ";");
	            // Increase by 1 if we have a surrogate pair
	            lastIdx = regExp.lastIndex += Number(cp !== char);
	        }
	    }
	    return ret + str.substr(lastIdx);
	}
	
	return encode;
}var hasRequiredLib$3;

function requireLib$3 () {
	if (hasRequiredLib$3) return lib;
	hasRequiredLib$3 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLAttribute = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.DecodingMode = exports.EntityDecoder = exports.encodeHTML5 = exports.encodeHTML4 = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = exports.EncodingMode = exports.EntityLevel = void 0;
		var decode_js_1 = requireDecode();
		var encode_js_1 = requireEncode();
		var escape_js_1 = require_escape();
		/** The level of entities to support. */
		var EntityLevel;
		(function (EntityLevel) {
		    /** Support only XML entities. */
		    EntityLevel[EntityLevel["XML"] = 0] = "XML";
		    /** Support HTML entities, which are a superset of XML entities. */
		    EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
		})(EntityLevel = exports.EntityLevel || (exports.EntityLevel = {}));
		var EncodingMode;
		(function (EncodingMode) {
		    /**
		     * The output is UTF-8 encoded. Only characters that need escaping within
		     * XML will be escaped.
		     */
		    EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
		    /**
		     * The output consists only of ASCII characters. Characters that need
		     * escaping within HTML, and characters that aren't ASCII characters will
		     * be escaped.
		     */
		    EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
		    /**
		     * Encode all characters that have an equivalent entity, as well as all
		     * characters that are not ASCII characters.
		     */
		    EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
		    /**
		     * Encode all characters that have to be escaped in HTML attributes,
		     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
		     */
		    EncodingMode[EncodingMode["Attribute"] = 3] = "Attribute";
		    /**
		     * Encode all characters that have to be escaped in HTML text,
		     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
		     */
		    EncodingMode[EncodingMode["Text"] = 4] = "Text";
		})(EncodingMode = exports.EncodingMode || (exports.EncodingMode = {}));
		/**
		 * Decodes a string with entities.
		 *
		 * @param data String to decode.
		 * @param options Decoding options.
		 */
		function decode(data, options) {
		    if (options === void 0) { options = EntityLevel.XML; }
		    var level = typeof options === "number" ? options : options.level;
		    if (level === EntityLevel.HTML) {
		        var mode = typeof options === "object" ? options.mode : undefined;
		        return (0, decode_js_1.decodeHTML)(data, mode);
		    }
		    return (0, decode_js_1.decodeXML)(data);
		}
		exports.decode = decode;
		/**
		 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
		 *
		 * @param data String to decode.
		 * @param options Decoding options.
		 * @deprecated Use `decode` with the `mode` set to `Strict`.
		 */
		function decodeStrict(data, options) {
		    var _a;
		    if (options === void 0) { options = EntityLevel.XML; }
		    var opts = typeof options === "number" ? { level: options } : options;
		    (_a = opts.mode) !== null && _a !== void 0 ? _a : (opts.mode = decode_js_1.DecodingMode.Strict);
		    return decode(data, opts);
		}
		exports.decodeStrict = decodeStrict;
		/**
		 * Encodes a string with entities.
		 *
		 * @param data String to encode.
		 * @param options Encoding options.
		 */
		function encode(data, options) {
		    if (options === void 0) { options = EntityLevel.XML; }
		    var opts = typeof options === "number" ? { level: options } : options;
		    // Mode `UTF8` just escapes XML entities
		    if (opts.mode === EncodingMode.UTF8)
		        return (0, escape_js_1.escapeUTF8)(data);
		    if (opts.mode === EncodingMode.Attribute)
		        return (0, escape_js_1.escapeAttribute)(data);
		    if (opts.mode === EncodingMode.Text)
		        return (0, escape_js_1.escapeText)(data);
		    if (opts.level === EntityLevel.HTML) {
		        if (opts.mode === EncodingMode.ASCII) {
		            return (0, encode_js_1.encodeNonAsciiHTML)(data);
		        }
		        return (0, encode_js_1.encodeHTML)(data);
		    }
		    // ASCII and Extensive are equivalent
		    return (0, escape_js_1.encodeXML)(data);
		}
		exports.encode = encode;
		var escape_js_2 = require_escape();
		Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function () { return escape_js_2.encodeXML; } });
		Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return escape_js_2.escape; } });
		Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function () { return escape_js_2.escapeUTF8; } });
		Object.defineProperty(exports, "escapeAttribute", { enumerable: true, get: function () { return escape_js_2.escapeAttribute; } });
		Object.defineProperty(exports, "escapeText", { enumerable: true, get: function () { return escape_js_2.escapeText; } });
		var encode_js_2 = requireEncode();
		Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
		Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function () { return encode_js_2.encodeNonAsciiHTML; } });
		// Legacy aliases (deprecated)
		Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
		Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
		var decode_js_2 = requireDecode();
		Object.defineProperty(exports, "EntityDecoder", { enumerable: true, get: function () { return decode_js_2.EntityDecoder; } });
		Object.defineProperty(exports, "DecodingMode", { enumerable: true, get: function () { return decode_js_2.DecodingMode; } });
		Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function () { return decode_js_2.decodeXML; } });
		Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
		Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
		Object.defineProperty(exports, "decodeHTMLAttribute", { enumerable: true, get: function () { return decode_js_2.decodeHTMLAttribute; } });
		// Legacy aliases (deprecated)
		Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
		Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
		Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
		Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
		Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function () { return decode_js_2.decodeXML; } });
		
	} (lib));
	return lib;
}var foreignNames = {};var hasRequiredForeignNames;

function requireForeignNames () {
	if (hasRequiredForeignNames) return foreignNames;
	hasRequiredForeignNames = 1;
	Object.defineProperty(foreignNames, "__esModule", { value: true });
	foreignNames.attributeNames = foreignNames.elementNames = void 0;
	foreignNames.elementNames = new Map([
	    "altGlyph",
	    "altGlyphDef",
	    "altGlyphItem",
	    "animateColor",
	    "animateMotion",
	    "animateTransform",
	    "clipPath",
	    "feBlend",
	    "feColorMatrix",
	    "feComponentTransfer",
	    "feComposite",
	    "feConvolveMatrix",
	    "feDiffuseLighting",
	    "feDisplacementMap",
	    "feDistantLight",
	    "feDropShadow",
	    "feFlood",
	    "feFuncA",
	    "feFuncB",
	    "feFuncG",
	    "feFuncR",
	    "feGaussianBlur",
	    "feImage",
	    "feMerge",
	    "feMergeNode",
	    "feMorphology",
	    "feOffset",
	    "fePointLight",
	    "feSpecularLighting",
	    "feSpotLight",
	    "feTile",
	    "feTurbulence",
	    "foreignObject",
	    "glyphRef",
	    "linearGradient",
	    "radialGradient",
	    "textPath",
	].map(function (val) { return [val.toLowerCase(), val]; }));
	foreignNames.attributeNames = new Map([
	    "definitionURL",
	    "attributeName",
	    "attributeType",
	    "baseFrequency",
	    "baseProfile",
	    "calcMode",
	    "clipPathUnits",
	    "diffuseConstant",
	    "edgeMode",
	    "filterUnits",
	    "glyphRef",
	    "gradientTransform",
	    "gradientUnits",
	    "kernelMatrix",
	    "kernelUnitLength",
	    "keyPoints",
	    "keySplines",
	    "keyTimes",
	    "lengthAdjust",
	    "limitingConeAngle",
	    "markerHeight",
	    "markerUnits",
	    "markerWidth",
	    "maskContentUnits",
	    "maskUnits",
	    "numOctaves",
	    "pathLength",
	    "patternContentUnits",
	    "patternTransform",
	    "patternUnits",
	    "pointsAtX",
	    "pointsAtY",
	    "pointsAtZ",
	    "preserveAlpha",
	    "preserveAspectRatio",
	    "primitiveUnits",
	    "refX",
	    "refY",
	    "repeatCount",
	    "repeatDur",
	    "requiredExtensions",
	    "requiredFeatures",
	    "specularConstant",
	    "specularExponent",
	    "spreadMethod",
	    "startOffset",
	    "stdDeviation",
	    "stitchTiles",
	    "surfaceScale",
	    "systemLanguage",
	    "tableValues",
	    "targetX",
	    "targetY",
	    "textLength",
	    "viewBox",
	    "viewTarget",
	    "xChannelSelector",
	    "yChannelSelector",
	    "zoomAndPan",
	].map(function (val) { return [val.toLowerCase(), val]; }));
	return foreignNames;
}var hasRequiredLib$2;

function requireLib$2 () {
	if (hasRequiredLib$2) return lib$1;
	hasRequiredLib$2 = 1;
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	Object.defineProperty(lib$1, "__esModule", { value: true });
	lib$1.render = void 0;
	/*
	 * Module dependencies
	 */
	var ElementType = __importStar(requireLib$5());
	var entities_1 = requireLib$3();
	/**
	 * Mixed-case SVG and MathML tags & attributes
	 * recognized by the HTML parser.
	 *
	 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
	 */
	var foreignNames_js_1 = requireForeignNames();
	var unencodedElements = new Set([
	    "style",
	    "script",
	    "xmp",
	    "iframe",
	    "noembed",
	    "noframes",
	    "plaintext",
	    "noscript",
	]);
	function replaceQuotes(value) {
	    return value.replace(/"/g, "&quot;");
	}
	/**
	 * Format attributes
	 */
	function formatAttributes(attributes, opts) {
	    var _a;
	    if (!attributes)
	        return;
	    var encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false
	        ? replaceQuotes
	        : opts.xmlMode || opts.encodeEntities !== "utf8"
	            ? entities_1.encodeXML
	            : entities_1.escapeAttribute;
	    return Object.keys(attributes)
	        .map(function (key) {
	        var _a, _b;
	        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
	        if (opts.xmlMode === "foreign") {
	            /* Fix up mixed-case attribute names */
	            key = (_b = foreignNames_js_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
	        }
	        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
	            return key;
	        }
	        return "".concat(key, "=\"").concat(encode(value), "\"");
	    })
	        .join(" ");
	}
	/**
	 * Self-enclosing tags
	 */
	var singleTag = new Set([
	    "area",
	    "base",
	    "basefont",
	    "br",
	    "col",
	    "command",
	    "embed",
	    "frame",
	    "hr",
	    "img",
	    "input",
	    "isindex",
	    "keygen",
	    "link",
	    "meta",
	    "param",
	    "source",
	    "track",
	    "wbr",
	]);
	/**
	 * Renders a DOM node or an array of DOM nodes to a string.
	 *
	 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
	 *
	 * @param node Node to be rendered.
	 * @param options Changes serialization behavior
	 */
	function render(node, options) {
	    if (options === void 0) { options = {}; }
	    var nodes = "length" in node ? node : [node];
	    var output = "";
	    for (var i = 0; i < nodes.length; i++) {
	        output += renderNode(nodes[i], options);
	    }
	    return output;
	}
	lib$1.render = render;
	lib$1.default = render;
	function renderNode(node, options) {
	    switch (node.type) {
	        case ElementType.Root:
	            return render(node.children, options);
	        // @ts-expect-error We don't use `Doctype` yet
	        case ElementType.Doctype:
	        case ElementType.Directive:
	            return renderDirective(node);
	        case ElementType.Comment:
	            return renderComment(node);
	        case ElementType.CDATA:
	            return renderCdata(node);
	        case ElementType.Script:
	        case ElementType.Style:
	        case ElementType.Tag:
	            return renderTag(node, options);
	        case ElementType.Text:
	            return renderText(node, options);
	    }
	}
	var foreignModeIntegrationPoints = new Set([
	    "mi",
	    "mo",
	    "mn",
	    "ms",
	    "mtext",
	    "annotation-xml",
	    "foreignObject",
	    "desc",
	    "title",
	]);
	var foreignElements = new Set(["svg", "math"]);
	function renderTag(elem, opts) {
	    var _a;
	    // Handle SVG / MathML in HTML
	    if (opts.xmlMode === "foreign") {
	        /* Fix up mixed-case element names */
	        elem.name = (_a = foreignNames_js_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
	        /* Exit foreign mode at integration points */
	        if (elem.parent &&
	            foreignModeIntegrationPoints.has(elem.parent.name)) {
	            opts = __assign(__assign({}, opts), { xmlMode: false });
	        }
	    }
	    if (!opts.xmlMode && foreignElements.has(elem.name)) {
	        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
	    }
	    var tag = "<".concat(elem.name);
	    var attribs = formatAttributes(elem.attribs, opts);
	    if (attribs) {
	        tag += " ".concat(attribs);
	    }
	    if (elem.children.length === 0 &&
	        (opts.xmlMode
	            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
	                opts.selfClosingTags !== false
	            : // User explicitly asked for self-closing tags, even in HTML mode
	                opts.selfClosingTags && singleTag.has(elem.name))) {
	        if (!opts.xmlMode)
	            tag += " ";
	        tag += "/>";
	    }
	    else {
	        tag += ">";
	        if (elem.children.length > 0) {
	            tag += render(elem.children, opts);
	        }
	        if (opts.xmlMode || !singleTag.has(elem.name)) {
	            tag += "</".concat(elem.name, ">");
	        }
	    }
	    return tag;
	}
	function renderDirective(elem) {
	    return "<".concat(elem.data, ">");
	}
	function renderText(elem, opts) {
	    var _a;
	    var data = elem.data || "";
	    // If entities weren't decoded, no need to encode them back
	    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false &&
	        !(!opts.xmlMode &&
	            elem.parent &&
	            unencodedElements.has(elem.parent.name))) {
	        data =
	            opts.xmlMode || opts.encodeEntities !== "utf8"
	                ? (0, entities_1.encodeXML)(data)
	                : (0, entities_1.escapeText)(data);
	    }
	    return data;
	}
	function renderCdata(elem) {
	    return "<![CDATA[".concat(elem.children[0].data, "]]>");
	}
	function renderComment(elem) {
	    return "<!--".concat(elem.data, "-->");
	}
	return lib$1;
}var hasRequiredStringify$1;

function requireStringify$1 () {
	if (hasRequiredStringify$1) return stringify;
	hasRequiredStringify$1 = 1;
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(stringify, "__esModule", { value: true });
	stringify.innerText = stringify.textContent = stringify.getText = stringify.getInnerHTML = stringify.getOuterHTML = void 0;
	var domhandler_1 = requireLib$4();
	var dom_serializer_1 = __importDefault(requireLib$2());
	var domelementtype_1 = requireLib$5();
	/**
	 * @category Stringify
	 * @deprecated Use the `dom-serializer` module directly.
	 * @param node Node to get the outer HTML of.
	 * @param options Options for serialization.
	 * @returns `node`'s outer HTML.
	 */
	function getOuterHTML(node, options) {
	    return (0, dom_serializer_1.default)(node, options);
	}
	stringify.getOuterHTML = getOuterHTML;
	/**
	 * @category Stringify
	 * @deprecated Use the `dom-serializer` module directly.
	 * @param node Node to get the inner HTML of.
	 * @param options Options for serialization.
	 * @returns `node`'s inner HTML.
	 */
	function getInnerHTML(node, options) {
	    return (0, domhandler_1.hasChildren)(node)
	        ? node.children.map(function (node) { return getOuterHTML(node, options); }).join("")
	        : "";
	}
	stringify.getInnerHTML = getInnerHTML;
	/**
	 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
	 *
	 * @category Stringify
	 * @deprecated Use `textContent` instead.
	 * @param node Node to get the inner text of.
	 * @returns `node`'s inner text.
	 */
	function getText(node) {
	    if (Array.isArray(node))
	        return node.map(getText).join("");
	    if ((0, domhandler_1.isTag)(node))
	        return node.name === "br" ? "\n" : getText(node.children);
	    if ((0, domhandler_1.isCDATA)(node))
	        return getText(node.children);
	    if ((0, domhandler_1.isText)(node))
	        return node.data;
	    return "";
	}
	stringify.getText = getText;
	/**
	 * Get a node's text content. Ignores comments.
	 *
	 * @category Stringify
	 * @param node Node to get the text content of.
	 * @returns `node`'s text content.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
	 */
	function textContent(node) {
	    if (Array.isArray(node))
	        return node.map(textContent).join("");
	    if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
	        return textContent(node.children);
	    }
	    if ((0, domhandler_1.isText)(node))
	        return node.data;
	    return "";
	}
	stringify.textContent = textContent;
	/**
	 * Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
	 *
	 * @category Stringify
	 * @param node Node to get the inner text of.
	 * @returns `node`'s inner text.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
	 */
	function innerText(node) {
	    if (Array.isArray(node))
	        return node.map(innerText).join("");
	    if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
	        return innerText(node.children);
	    }
	    if ((0, domhandler_1.isText)(node))
	        return node.data;
	    return "";
	}
	stringify.innerText = innerText;
	
	return stringify;
}var traversal = {};var hasRequiredTraversal;

function requireTraversal () {
	if (hasRequiredTraversal) return traversal;
	hasRequiredTraversal = 1;
	Object.defineProperty(traversal, "__esModule", { value: true });
	traversal.prevElementSibling = traversal.nextElementSibling = traversal.getName = traversal.hasAttrib = traversal.getAttributeValue = traversal.getSiblings = traversal.getParent = traversal.getChildren = void 0;
	var domhandler_1 = requireLib$4();
	/**
	 * Get a node's children.
	 *
	 * @category Traversal
	 * @param elem Node to get the children of.
	 * @returns `elem`'s children, or an empty array.
	 */
	function getChildren(elem) {
	    return (0, domhandler_1.hasChildren)(elem) ? elem.children : [];
	}
	traversal.getChildren = getChildren;
	/**
	 * Get a node's parent.
	 *
	 * @category Traversal
	 * @param elem Node to get the parent of.
	 * @returns `elem`'s parent node, or `null` if `elem` is a root node.
	 */
	function getParent(elem) {
	    return elem.parent || null;
	}
	traversal.getParent = getParent;
	/**
	 * Gets an elements siblings, including the element itself.
	 *
	 * Attempts to get the children through the element's parent first. If we don't
	 * have a parent (the element is a root node), we walk the element's `prev` &
	 * `next` to get all remaining nodes.
	 *
	 * @category Traversal
	 * @param elem Element to get the siblings of.
	 * @returns `elem`'s siblings, including `elem`.
	 */
	function getSiblings(elem) {
	    var _a, _b;
	    var parent = getParent(elem);
	    if (parent != null)
	        return getChildren(parent);
	    var siblings = [elem];
	    var prev = elem.prev, next = elem.next;
	    while (prev != null) {
	        siblings.unshift(prev);
	        (_a = prev, prev = _a.prev);
	    }
	    while (next != null) {
	        siblings.push(next);
	        (_b = next, next = _b.next);
	    }
	    return siblings;
	}
	traversal.getSiblings = getSiblings;
	/**
	 * Gets an attribute from an element.
	 *
	 * @category Traversal
	 * @param elem Element to check.
	 * @param name Attribute name to retrieve.
	 * @returns The element's attribute value, or `undefined`.
	 */
	function getAttributeValue(elem, name) {
	    var _a;
	    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
	}
	traversal.getAttributeValue = getAttributeValue;
	/**
	 * Checks whether an element has an attribute.
	 *
	 * @category Traversal
	 * @param elem Element to check.
	 * @param name Attribute name to look for.
	 * @returns Returns whether `elem` has the attribute `name`.
	 */
	function hasAttrib(elem, name) {
	    return (elem.attribs != null &&
	        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
	        elem.attribs[name] != null);
	}
	traversal.hasAttrib = hasAttrib;
	/**
	 * Get the tag name of an element.
	 *
	 * @category Traversal
	 * @param elem The element to get the name for.
	 * @returns The tag name of `elem`.
	 */
	function getName(elem) {
	    return elem.name;
	}
	traversal.getName = getName;
	/**
	 * Returns the next element sibling of a node.
	 *
	 * @category Traversal
	 * @param elem The element to get the next sibling of.
	 * @returns `elem`'s next sibling that is a tag, or `null` if there is no next
	 * sibling.
	 */
	function nextElementSibling(elem) {
	    var _a;
	    var next = elem.next;
	    while (next !== null && !(0, domhandler_1.isTag)(next))
	        (_a = next, next = _a.next);
	    return next;
	}
	traversal.nextElementSibling = nextElementSibling;
	/**
	 * Returns the previous element sibling of a node.
	 *
	 * @category Traversal
	 * @param elem The element to get the previous sibling of.
	 * @returns `elem`'s previous sibling that is a tag, or `null` if there is no
	 * previous sibling.
	 */
	function prevElementSibling(elem) {
	    var _a;
	    var prev = elem.prev;
	    while (prev !== null && !(0, domhandler_1.isTag)(prev))
	        (_a = prev, prev = _a.prev);
	    return prev;
	}
	traversal.prevElementSibling = prevElementSibling;
	
	return traversal;
}var manipulation = {};var hasRequiredManipulation;

function requireManipulation () {
	if (hasRequiredManipulation) return manipulation;
	hasRequiredManipulation = 1;
	Object.defineProperty(manipulation, "__esModule", { value: true });
	manipulation.prepend = manipulation.prependChild = manipulation.append = manipulation.appendChild = manipulation.replaceElement = manipulation.removeElement = void 0;
	/**
	 * Remove an element from the dom
	 *
	 * @category Manipulation
	 * @param elem The element to be removed
	 */
	function removeElement(elem) {
	    if (elem.prev)
	        elem.prev.next = elem.next;
	    if (elem.next)
	        elem.next.prev = elem.prev;
	    if (elem.parent) {
	        var childs = elem.parent.children;
	        var childsIndex = childs.lastIndexOf(elem);
	        if (childsIndex >= 0) {
	            childs.splice(childsIndex, 1);
	        }
	    }
	    elem.next = null;
	    elem.prev = null;
	    elem.parent = null;
	}
	manipulation.removeElement = removeElement;
	/**
	 * Replace an element in the dom
	 *
	 * @category Manipulation
	 * @param elem The element to be replaced
	 * @param replacement The element to be added
	 */
	function replaceElement(elem, replacement) {
	    var prev = (replacement.prev = elem.prev);
	    if (prev) {
	        prev.next = replacement;
	    }
	    var next = (replacement.next = elem.next);
	    if (next) {
	        next.prev = replacement;
	    }
	    var parent = (replacement.parent = elem.parent);
	    if (parent) {
	        var childs = parent.children;
	        childs[childs.lastIndexOf(elem)] = replacement;
	        elem.parent = null;
	    }
	}
	manipulation.replaceElement = replaceElement;
	/**
	 * Append a child to an element.
	 *
	 * @category Manipulation
	 * @param parent The element to append to.
	 * @param child The element to be added as a child.
	 */
	function appendChild(parent, child) {
	    removeElement(child);
	    child.next = null;
	    child.parent = parent;
	    if (parent.children.push(child) > 1) {
	        var sibling = parent.children[parent.children.length - 2];
	        sibling.next = child;
	        child.prev = sibling;
	    }
	    else {
	        child.prev = null;
	    }
	}
	manipulation.appendChild = appendChild;
	/**
	 * Append an element after another.
	 *
	 * @category Manipulation
	 * @param elem The element to append after.
	 * @param next The element be added.
	 */
	function append(elem, next) {
	    removeElement(next);
	    var parent = elem.parent;
	    var currNext = elem.next;
	    next.next = currNext;
	    next.prev = elem;
	    elem.next = next;
	    next.parent = parent;
	    if (currNext) {
	        currNext.prev = next;
	        if (parent) {
	            var childs = parent.children;
	            childs.splice(childs.lastIndexOf(currNext), 0, next);
	        }
	    }
	    else if (parent) {
	        parent.children.push(next);
	    }
	}
	manipulation.append = append;
	/**
	 * Prepend a child to an element.
	 *
	 * @category Manipulation
	 * @param parent The element to prepend before.
	 * @param child The element to be added as a child.
	 */
	function prependChild(parent, child) {
	    removeElement(child);
	    child.parent = parent;
	    child.prev = null;
	    if (parent.children.unshift(child) !== 1) {
	        var sibling = parent.children[1];
	        sibling.prev = child;
	        child.next = sibling;
	    }
	    else {
	        child.next = null;
	    }
	}
	manipulation.prependChild = prependChild;
	/**
	 * Prepend an element before another.
	 *
	 * @category Manipulation
	 * @param elem The element to prepend before.
	 * @param prev The element be added.
	 */
	function prepend(elem, prev) {
	    removeElement(prev);
	    var parent = elem.parent;
	    if (parent) {
	        var childs = parent.children;
	        childs.splice(childs.indexOf(elem), 0, prev);
	    }
	    if (elem.prev) {
	        elem.prev.next = prev;
	    }
	    prev.parent = parent;
	    prev.prev = elem.prev;
	    prev.next = elem;
	    elem.prev = prev;
	}
	manipulation.prepend = prepend;
	
	return manipulation;
}var querying = {};var hasRequiredQuerying;

function requireQuerying () {
	if (hasRequiredQuerying) return querying;
	hasRequiredQuerying = 1;
	Object.defineProperty(querying, "__esModule", { value: true });
	querying.findAll = querying.existsOne = querying.findOne = querying.findOneChild = querying.find = querying.filter = void 0;
	var domhandler_1 = requireLib$4();
	/**
	 * Search a node and its children for nodes passing a test function. If `node` is not an array, it will be wrapped in one.
	 *
	 * @category Querying
	 * @param test Function to test nodes on.
	 * @param node Node to search. Will be included in the result set if it matches.
	 * @param recurse Also consider child nodes.
	 * @param limit Maximum number of nodes to return.
	 * @returns All nodes passing `test`.
	 */
	function filter(test, node, recurse, limit) {
	    if (recurse === void 0) { recurse = true; }
	    if (limit === void 0) { limit = Infinity; }
	    return find(test, Array.isArray(node) ? node : [node], recurse, limit);
	}
	querying.filter = filter;
	/**
	 * Search an array of nodes and their children for nodes passing a test function.
	 *
	 * @category Querying
	 * @param test Function to test nodes on.
	 * @param nodes Array of nodes to search.
	 * @param recurse Also consider child nodes.
	 * @param limit Maximum number of nodes to return.
	 * @returns All nodes passing `test`.
	 */
	function find(test, nodes, recurse, limit) {
	    var result = [];
	    /** Stack of the arrays we are looking at. */
	    var nodeStack = [nodes];
	    /** Stack of the indices within the arrays. */
	    var indexStack = [0];
	    for (;;) {
	        // First, check if the current array has any more elements to look at.
	        if (indexStack[0] >= nodeStack[0].length) {
	            // If we have no more arrays to look at, we are done.
	            if (indexStack.length === 1) {
	                return result;
	            }
	            // Otherwise, remove the current array from the stack.
	            nodeStack.shift();
	            indexStack.shift();
	            // Loop back to the start to continue with the next array.
	            continue;
	        }
	        var elem = nodeStack[0][indexStack[0]++];
	        if (test(elem)) {
	            result.push(elem);
	            if (--limit <= 0)
	                return result;
	        }
	        if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
	            /*
	             * Add the children to the stack. We are depth-first, so this is
	             * the next array we look at.
	             */
	            indexStack.unshift(0);
	            nodeStack.unshift(elem.children);
	        }
	    }
	}
	querying.find = find;
	/**
	 * Finds the first element inside of an array that matches a test function. This is an alias for `Array.prototype.find`.
	 *
	 * @category Querying
	 * @param test Function to test nodes on.
	 * @param nodes Array of nodes to search.
	 * @returns The first node in the array that passes `test`.
	 * @deprecated Use `Array.prototype.find` directly.
	 */
	function findOneChild(test, nodes) {
	    return nodes.find(test);
	}
	querying.findOneChild = findOneChild;
	/**
	 * Finds one element in a tree that passes a test.
	 *
	 * @category Querying
	 * @param test Function to test nodes on.
	 * @param nodes Node or array of nodes to search.
	 * @param recurse Also consider child nodes.
	 * @returns The first node that passes `test`.
	 */
	function findOne(test, nodes, recurse) {
	    if (recurse === void 0) { recurse = true; }
	    var elem = null;
	    for (var i = 0; i < nodes.length && !elem; i++) {
	        var node = nodes[i];
	        if (!(0, domhandler_1.isTag)(node)) {
	            continue;
	        }
	        else if (test(node)) {
	            elem = node;
	        }
	        else if (recurse && node.children.length > 0) {
	            elem = findOne(test, node.children, true);
	        }
	    }
	    return elem;
	}
	querying.findOne = findOne;
	/**
	 * Checks if a tree of nodes contains at least one node passing a test.
	 *
	 * @category Querying
	 * @param test Function to test nodes on.
	 * @param nodes Array of nodes to search.
	 * @returns Whether a tree of nodes contains at least one node passing the test.
	 */
	function existsOne(test, nodes) {
	    return nodes.some(function (checked) {
	        return (0, domhandler_1.isTag)(checked) &&
	            (test(checked) || existsOne(test, checked.children));
	    });
	}
	querying.existsOne = existsOne;
	/**
	 * Search an array of nodes and their children for elements passing a test function.
	 *
	 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
	 *
	 * @category Querying
	 * @param test Function to test nodes on.
	 * @param nodes Array of nodes to search.
	 * @returns All nodes passing `test`.
	 */
	function findAll(test, nodes) {
	    var result = [];
	    var nodeStack = [nodes];
	    var indexStack = [0];
	    for (;;) {
	        if (indexStack[0] >= nodeStack[0].length) {
	            if (nodeStack.length === 1) {
	                return result;
	            }
	            // Otherwise, remove the current array from the stack.
	            nodeStack.shift();
	            indexStack.shift();
	            // Loop back to the start to continue with the next array.
	            continue;
	        }
	        var elem = nodeStack[0][indexStack[0]++];
	        if (!(0, domhandler_1.isTag)(elem))
	            continue;
	        if (test(elem))
	            result.push(elem);
	        if (elem.children.length > 0) {
	            indexStack.unshift(0);
	            nodeStack.unshift(elem.children);
	        }
	    }
	}
	querying.findAll = findAll;
	
	return querying;
}var legacy = {};var hasRequiredLegacy;

function requireLegacy () {
	if (hasRequiredLegacy) return legacy;
	hasRequiredLegacy = 1;
	Object.defineProperty(legacy, "__esModule", { value: true });
	legacy.getElementsByTagType = legacy.getElementsByTagName = legacy.getElementById = legacy.getElements = legacy.testElement = void 0;
	var domhandler_1 = requireLib$4();
	var querying_js_1 = requireQuerying();
	/**
	 * A map of functions to check nodes against.
	 */
	var Checks = {
	    tag_name: function (name) {
	        if (typeof name === "function") {
	            return function (elem) { return (0, domhandler_1.isTag)(elem) && name(elem.name); };
	        }
	        else if (name === "*") {
	            return domhandler_1.isTag;
	        }
	        return function (elem) { return (0, domhandler_1.isTag)(elem) && elem.name === name; };
	    },
	    tag_type: function (type) {
	        if (typeof type === "function") {
	            return function (elem) { return type(elem.type); };
	        }
	        return function (elem) { return elem.type === type; };
	    },
	    tag_contains: function (data) {
	        if (typeof data === "function") {
	            return function (elem) { return (0, domhandler_1.isText)(elem) && data(elem.data); };
	        }
	        return function (elem) { return (0, domhandler_1.isText)(elem) && elem.data === data; };
	    },
	};
	/**
	 * Returns a function to check whether a node has an attribute with a particular
	 * value.
	 *
	 * @param attrib Attribute to check.
	 * @param value Attribute value to look for.
	 * @returns A function to check whether the a node has an attribute with a
	 *   particular value.
	 */
	function getAttribCheck(attrib, value) {
	    if (typeof value === "function") {
	        return function (elem) { return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]); };
	    }
	    return function (elem) { return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value; };
	}
	/**
	 * Returns a function that returns `true` if either of the input functions
	 * returns `true` for a node.
	 *
	 * @param a First function to combine.
	 * @param b Second function to combine.
	 * @returns A function taking a node and returning `true` if either of the input
	 *   functions returns `true` for the node.
	 */
	function combineFuncs(a, b) {
	    return function (elem) { return a(elem) || b(elem); };
	}
	/**
	 * Returns a function that executes all checks in `options` and returns `true`
	 * if any of them match a node.
	 *
	 * @param options An object describing nodes to look for.
	 * @returns A function that executes all checks in `options` and returns `true`
	 *   if any of them match a node.
	 */
	function compileTest(options) {
	    var funcs = Object.keys(options).map(function (key) {
	        var value = options[key];
	        return Object.prototype.hasOwnProperty.call(Checks, key)
	            ? Checks[key](value)
	            : getAttribCheck(key, value);
	    });
	    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
	}
	/**
	 * Checks whether a node matches the description in `options`.
	 *
	 * @category Legacy Query Functions
	 * @param options An object describing nodes to look for.
	 * @param node The element to test.
	 * @returns Whether the element matches the description in `options`.
	 */
	function testElement(options, node) {
	    var test = compileTest(options);
	    return test ? test(node) : true;
	}
	legacy.testElement = testElement;
	/**
	 * Returns all nodes that match `options`.
	 *
	 * @category Legacy Query Functions
	 * @param options An object describing nodes to look for.
	 * @param nodes Nodes to search through.
	 * @param recurse Also consider child nodes.
	 * @param limit Maximum number of nodes to return.
	 * @returns All nodes that match `options`.
	 */
	function getElements(options, nodes, recurse, limit) {
	    if (limit === void 0) { limit = Infinity; }
	    var test = compileTest(options);
	    return test ? (0, querying_js_1.filter)(test, nodes, recurse, limit) : [];
	}
	legacy.getElements = getElements;
	/**
	 * Returns the node with the supplied ID.
	 *
	 * @category Legacy Query Functions
	 * @param id The unique ID attribute value to look for.
	 * @param nodes Nodes to search through.
	 * @param recurse Also consider child nodes.
	 * @returns The node with the supplied ID.
	 */
	function getElementById(id, nodes, recurse) {
	    if (recurse === void 0) { recurse = true; }
	    if (!Array.isArray(nodes))
	        nodes = [nodes];
	    return (0, querying_js_1.findOne)(getAttribCheck("id", id), nodes, recurse);
	}
	legacy.getElementById = getElementById;
	/**
	 * Returns all nodes with the supplied `tagName`.
	 *
	 * @category Legacy Query Functions
	 * @param tagName Tag name to search for.
	 * @param nodes Nodes to search through.
	 * @param recurse Also consider child nodes.
	 * @param limit Maximum number of nodes to return.
	 * @returns All nodes with the supplied `tagName`.
	 */
	function getElementsByTagName(tagName, nodes, recurse, limit) {
	    if (recurse === void 0) { recurse = true; }
	    if (limit === void 0) { limit = Infinity; }
	    return (0, querying_js_1.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
	}
	legacy.getElementsByTagName = getElementsByTagName;
	/**
	 * Returns all nodes with the supplied `type`.
	 *
	 * @category Legacy Query Functions
	 * @param type Element type to look for.
	 * @param nodes Nodes to search through.
	 * @param recurse Also consider child nodes.
	 * @param limit Maximum number of nodes to return.
	 * @returns All nodes with the supplied `type`.
	 */
	function getElementsByTagType(type, nodes, recurse, limit) {
	    if (recurse === void 0) { recurse = true; }
	    if (limit === void 0) { limit = Infinity; }
	    return (0, querying_js_1.filter)(Checks["tag_type"](type), nodes, recurse, limit);
	}
	legacy.getElementsByTagType = getElementsByTagType;
	
	return legacy;
}var helpers = {};var hasRequiredHelpers;

function requireHelpers () {
	if (hasRequiredHelpers) return helpers;
	hasRequiredHelpers = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.uniqueSort = exports.compareDocumentPosition = exports.DocumentPosition = exports.removeSubsets = void 0;
		var domhandler_1 = requireLib$4();
		/**
		 * Given an array of nodes, remove any member that is contained by another
		 * member.
		 *
		 * @category Helpers
		 * @param nodes Nodes to filter.
		 * @returns Remaining nodes that aren't contained by other nodes.
		 */
		function removeSubsets(nodes) {
		    var idx = nodes.length;
		    /*
		     * Check if each node (or one of its ancestors) is already contained in the
		     * array.
		     */
		    while (--idx >= 0) {
		        var node = nodes[idx];
		        /*
		         * Remove the node if it is not unique.
		         * We are going through the array from the end, so we only
		         * have to check nodes that preceed the node under consideration in the array.
		         */
		        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
		            nodes.splice(idx, 1);
		            continue;
		        }
		        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
		            if (nodes.includes(ancestor)) {
		                nodes.splice(idx, 1);
		                break;
		            }
		        }
		    }
		    return nodes;
		}
		exports.removeSubsets = removeSubsets;
		/**
		 * @category Helpers
		 * @see {@link http://dom.spec.whatwg.org/#dom-node-comparedocumentposition}
		 */
		var DocumentPosition;
		(function (DocumentPosition) {
		    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
		    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
		    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
		    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
		    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
		})(DocumentPosition = exports.DocumentPosition || (exports.DocumentPosition = {}));
		/**
		 * Compare the position of one node against another node in any other document,
		 * returning a bitmask with the values from {@link DocumentPosition}.
		 *
		 * Document order:
		 * > There is an ordering, document order, defined on all the nodes in the
		 * > document corresponding to the order in which the first character of the
		 * > XML representation of each node occurs in the XML representation of the
		 * > document after expansion of general entities. Thus, the document element
		 * > node will be the first node. Element nodes occur before their children.
		 * > Thus, document order orders element nodes in order of the occurrence of
		 * > their start-tag in the XML (after expansion of entities). The attribute
		 * > nodes of an element occur after the element and before its children. The
		 * > relative order of attribute nodes is implementation-dependent.
		 *
		 * Source:
		 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
		 *
		 * @category Helpers
		 * @param nodeA The first node to use in the comparison
		 * @param nodeB The second node to use in the comparison
		 * @returns A bitmask describing the input nodes' relative position.
		 *
		 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
		 * a description of these values.
		 */
		function compareDocumentPosition(nodeA, nodeB) {
		    var aParents = [];
		    var bParents = [];
		    if (nodeA === nodeB) {
		        return 0;
		    }
		    var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
		    while (current) {
		        aParents.unshift(current);
		        current = current.parent;
		    }
		    current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
		    while (current) {
		        bParents.unshift(current);
		        current = current.parent;
		    }
		    var maxIdx = Math.min(aParents.length, bParents.length);
		    var idx = 0;
		    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
		        idx++;
		    }
		    if (idx === 0) {
		        return DocumentPosition.DISCONNECTED;
		    }
		    var sharedParent = aParents[idx - 1];
		    var siblings = sharedParent.children;
		    var aSibling = aParents[idx];
		    var bSibling = bParents[idx];
		    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
		        if (sharedParent === nodeB) {
		            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
		        }
		        return DocumentPosition.FOLLOWING;
		    }
		    if (sharedParent === nodeA) {
		        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
		    }
		    return DocumentPosition.PRECEDING;
		}
		exports.compareDocumentPosition = compareDocumentPosition;
		/**
		 * Sort an array of nodes based on their relative position in the document,
		 * removing any duplicate nodes. If the array contains nodes that do not belong
		 * to the same document, sort order is unspecified.
		 *
		 * @category Helpers
		 * @param nodes Array of DOM nodes.
		 * @returns Collection of unique nodes, sorted in document order.
		 */
		function uniqueSort(nodes) {
		    nodes = nodes.filter(function (node, i, arr) { return !arr.includes(node, i + 1); });
		    nodes.sort(function (a, b) {
		        var relative = compareDocumentPosition(a, b);
		        if (relative & DocumentPosition.PRECEDING) {
		            return -1;
		        }
		        else if (relative & DocumentPosition.FOLLOWING) {
		            return 1;
		        }
		        return 0;
		    });
		    return nodes;
		}
		exports.uniqueSort = uniqueSort;
		
	} (helpers));
	return helpers;
}var feeds = {};var hasRequiredFeeds;

function requireFeeds () {
	if (hasRequiredFeeds) return feeds;
	hasRequiredFeeds = 1;
	Object.defineProperty(feeds, "__esModule", { value: true });
	feeds.getFeed = void 0;
	var stringify_js_1 = requireStringify$1();
	var legacy_js_1 = requireLegacy();
	/**
	 * Get the feed object from the root of a DOM tree.
	 *
	 * @category Feeds
	 * @param doc - The DOM to to extract the feed from.
	 * @returns The feed.
	 */
	function getFeed(doc) {
	    var feedRoot = getOneElement(isValidFeed, doc);
	    return !feedRoot
	        ? null
	        : feedRoot.name === "feed"
	            ? getAtomFeed(feedRoot)
	            : getRssFeed(feedRoot);
	}
	feeds.getFeed = getFeed;
	/**
	 * Parse an Atom feed.
	 *
	 * @param feedRoot The root of the feed.
	 * @returns The parsed feed.
	 */
	function getAtomFeed(feedRoot) {
	    var _a;
	    var childs = feedRoot.children;
	    var feed = {
	        type: "atom",
	        items: (0, legacy_js_1.getElementsByTagName)("entry", childs).map(function (item) {
	            var _a;
	            var children = item.children;
	            var entry = { media: getMediaElements(children) };
	            addConditionally(entry, "id", "id", children);
	            addConditionally(entry, "title", "title", children);
	            var href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
	            if (href) {
	                entry.link = href;
	            }
	            var description = fetch("summary", children) || fetch("content", children);
	            if (description) {
	                entry.description = description;
	            }
	            var pubDate = fetch("updated", children);
	            if (pubDate) {
	                entry.pubDate = new Date(pubDate);
	            }
	            return entry;
	        }),
	    };
	    addConditionally(feed, "id", "id", childs);
	    addConditionally(feed, "title", "title", childs);
	    var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
	    if (href) {
	        feed.link = href;
	    }
	    addConditionally(feed, "description", "subtitle", childs);
	    var updated = fetch("updated", childs);
	    if (updated) {
	        feed.updated = new Date(updated);
	    }
	    addConditionally(feed, "author", "email", childs, true);
	    return feed;
	}
	/**
	 * Parse a RSS feed.
	 *
	 * @param feedRoot The root of the feed.
	 * @returns The parsed feed.
	 */
	function getRssFeed(feedRoot) {
	    var _a, _b;
	    var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
	    var feed = {
	        type: feedRoot.name.substr(0, 3),
	        id: "",
	        items: (0, legacy_js_1.getElementsByTagName)("item", feedRoot.children).map(function (item) {
	            var children = item.children;
	            var entry = { media: getMediaElements(children) };
	            addConditionally(entry, "id", "guid", children);
	            addConditionally(entry, "title", "title", children);
	            addConditionally(entry, "link", "link", children);
	            addConditionally(entry, "description", "description", children);
	            var pubDate = fetch("pubDate", children) || fetch("dc:date", children);
	            if (pubDate)
	                entry.pubDate = new Date(pubDate);
	            return entry;
	        }),
	    };
	    addConditionally(feed, "title", "title", childs);
	    addConditionally(feed, "link", "link", childs);
	    addConditionally(feed, "description", "description", childs);
	    var updated = fetch("lastBuildDate", childs);
	    if (updated) {
	        feed.updated = new Date(updated);
	    }
	    addConditionally(feed, "author", "managingEditor", childs, true);
	    return feed;
	}
	var MEDIA_KEYS_STRING = ["url", "type", "lang"];
	var MEDIA_KEYS_INT = [
	    "fileSize",
	    "bitrate",
	    "framerate",
	    "samplingrate",
	    "channels",
	    "duration",
	    "height",
	    "width",
	];
	/**
	 * Get all media elements of a feed item.
	 *
	 * @param where Nodes to search in.
	 * @returns Media elements.
	 */
	function getMediaElements(where) {
	    return (0, legacy_js_1.getElementsByTagName)("media:content", where).map(function (elem) {
	        var attribs = elem.attribs;
	        var media = {
	            medium: attribs["medium"],
	            isDefault: !!attribs["isDefault"],
	        };
	        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
	            var attrib = MEDIA_KEYS_STRING_1[_i];
	            if (attribs[attrib]) {
	                media[attrib] = attribs[attrib];
	            }
	        }
	        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
	            var attrib = MEDIA_KEYS_INT_1[_a];
	            if (attribs[attrib]) {
	                media[attrib] = parseInt(attribs[attrib], 10);
	            }
	        }
	        if (attribs["expression"]) {
	            media.expression = attribs["expression"];
	        }
	        return media;
	    });
	}
	/**
	 * Get one element by tag name.
	 *
	 * @param tagName Tag name to look for
	 * @param node Node to search in
	 * @returns The element or null
	 */
	function getOneElement(tagName, node) {
	    return (0, legacy_js_1.getElementsByTagName)(tagName, node, true, 1)[0];
	}
	/**
	 * Get the text content of an element with a certain tag name.
	 *
	 * @param tagName Tag name to look for.
	 * @param where Node to search in.
	 * @param recurse Whether to recurse into child nodes.
	 * @returns The text content of the element.
	 */
	function fetch(tagName, where, recurse) {
	    if (recurse === void 0) { recurse = false; }
	    return (0, stringify_js_1.textContent)((0, legacy_js_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
	}
	/**
	 * Adds a property to an object if it has a value.
	 *
	 * @param obj Object to be extended
	 * @param prop Property name
	 * @param tagName Tag name that contains the conditionally added property
	 * @param where Element to search for the property
	 * @param recurse Whether to recurse into child nodes.
	 */
	function addConditionally(obj, prop, tagName, where, recurse) {
	    if (recurse === void 0) { recurse = false; }
	    var val = fetch(tagName, where, recurse);
	    if (val)
	        obj[prop] = val;
	}
	/**
	 * Checks if an element is a feed root node.
	 *
	 * @param value The name of the element to check.
	 * @returns Whether an element is a feed root node.
	 */
	function isValidFeed(value) {
	    return value === "rss" || value === "feed" || value === "rdf:RDF";
	}
	
	return feeds;
}var hasRequiredLib$1;

function requireLib$1 () {
	if (hasRequiredLib$1) return lib$2;
	hasRequiredLib$1 = 1;
	(function (exports) {
		var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
		__exportStar(requireStringify$1(), exports);
		__exportStar(requireTraversal(), exports);
		__exportStar(requireManipulation(), exports);
		__exportStar(requireQuerying(), exports);
		__exportStar(requireLegacy(), exports);
		__exportStar(requireHelpers(), exports);
		__exportStar(requireFeeds(), exports);
		/** @deprecated Use these methods from `domhandler` directly. */
		var domhandler_1 = requireLib$4();
		Object.defineProperty(exports, "isTag", { enumerable: true, get: function () { return domhandler_1.isTag; } });
		Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function () { return domhandler_1.isCDATA; } });
		Object.defineProperty(exports, "isText", { enumerable: true, get: function () { return domhandler_1.isText; } });
		Object.defineProperty(exports, "isComment", { enumerable: true, get: function () { return domhandler_1.isComment; } });
		Object.defineProperty(exports, "isDocument", { enumerable: true, get: function () { return domhandler_1.isDocument; } });
		Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function () { return domhandler_1.hasChildren; } });
		
	} (lib$2));
	return lib$2;
}var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib$5;
	hasRequiredLib = 1;
	(function (exports) {
		var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
		    Object.defineProperty(o, "default", { enumerable: true, value: v });
		}) : function(o, v) {
		    o["default"] = v;
		});
		var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
		    if (mod && mod.__esModule) return mod;
		    var result = {};
		    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
		    __setModuleDefault(result, mod);
		    return result;
		};
		var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.DomUtils = exports.parseFeed = exports.getFeed = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DefaultHandler = exports.DomHandler = exports.Parser = void 0;
		var Parser_js_1 = requireParser$1();
		var Parser_js_2 = requireParser$1();
		Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return Parser_js_2.Parser; } });
		var domhandler_1 = requireLib$4();
		var domhandler_2 = requireLib$4();
		Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function () { return domhandler_2.DomHandler; } });
		// Old name for DomHandler
		Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function () { return domhandler_2.DomHandler; } });
		// Helper methods
		/**
		 * Parses the data, returns the resulting document.
		 *
		 * @param data The data that should be parsed.
		 * @param options Optional options for the parser and DOM builder.
		 */
		function parseDocument(data, options) {
		    var handler = new domhandler_1.DomHandler(undefined, options);
		    new Parser_js_1.Parser(handler, options).end(data);
		    return handler.root;
		}
		exports.parseDocument = parseDocument;
		/**
		 * Parses data, returns an array of the root nodes.
		 *
		 * Note that the root nodes still have a `Document` node as their parent.
		 * Use `parseDocument` to get the `Document` node instead.
		 *
		 * @param data The data that should be parsed.
		 * @param options Optional options for the parser and DOM builder.
		 * @deprecated Use `parseDocument` instead.
		 */
		function parseDOM(data, options) {
		    return parseDocument(data, options).children;
		}
		exports.parseDOM = parseDOM;
		/**
		 * Creates a parser instance, with an attached DOM handler.
		 *
		 * @param callback A callback that will be called once parsing has been completed.
		 * @param options Optional options for the parser and DOM builder.
		 * @param elementCallback An optional callback that will be called every time a tag has been completed inside of the DOM.
		 */
		function createDomStream(callback, options, elementCallback) {
		    var handler = new domhandler_1.DomHandler(callback, options, elementCallback);
		    return new Parser_js_1.Parser(handler, options);
		}
		exports.createDomStream = createDomStream;
		var Tokenizer_js_1 = requireTokenizer();
		Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function () { return __importDefault(Tokenizer_js_1).default; } });
		/*
		 * All of the following exports exist for backwards-compatibility.
		 * They should probably be removed eventually.
		 */
		exports.ElementType = __importStar(requireLib$5());
		var domutils_1 = requireLib$1();
		var domutils_2 = requireLib$1();
		Object.defineProperty(exports, "getFeed", { enumerable: true, get: function () { return domutils_2.getFeed; } });
		var parseFeedDefaultOptions = { xmlMode: true };
		/**
		 * Parse a feed.
		 *
		 * @param feed The feed that should be parsed, as a string.
		 * @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
		 */
		function parseFeed(feed, options) {
		    if (options === void 0) { options = parseFeedDefaultOptions; }
		    return (0, domutils_1.getFeed)(parseDOM(feed, options));
		}
		exports.parseFeed = parseFeed;
		exports.DomUtils = __importStar(requireLib$1());
		
	} (lib$5));
	return lib$5;
}var escapeStringRegexp;
var hasRequiredEscapeStringRegexp;

function requireEscapeStringRegexp () {
	if (hasRequiredEscapeStringRegexp) return escapeStringRegexp;
	hasRequiredEscapeStringRegexp = 1;

	escapeStringRegexp = string => {
		if (typeof string !== 'string') {
			throw new TypeError('Expected a string');
		}

		// Escape characters with special meaning either inside or outside character sets.
		// Use a simple backslash escape when it’s always valid, and a \unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
		return string
			.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
			.replace(/-/g, '\\x2d');
	};
	return escapeStringRegexp;
}var isPlainObject = {};var hasRequiredIsPlainObject;

function requireIsPlainObject () {
	if (hasRequiredIsPlainObject) return isPlainObject;
	hasRequiredIsPlainObject = 1;

	Object.defineProperty(isPlainObject, '__esModule', { value: true });

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	function isObject(o) {
	  return Object.prototype.toString.call(o) === '[object Object]';
	}

	function isPlainObject$1(o) {
	  var ctor,prot;

	  if (isObject(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (ctor === undefined) return true;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObject(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	}

	isPlainObject.isPlainObject = isPlainObject$1;
	return isPlainObject;
}var cjs;
var hasRequiredCjs;

function requireCjs () {
	if (hasRequiredCjs) return cjs;
	hasRequiredCjs = 1;

	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
				return Object.propertyIsEnumerable.call(target, symbol)
			})
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function propertyIsOnObject(object, property) {
		try {
			return property in object
		} catch(_) {
			return false
		}
	}

	// Protects from prototype poisoning and unexpected merging up the prototype chain.
	function propertyIsUnsafe(target, key) {
		return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		getKeys(source).forEach(function(key) {
			if (propertyIsUnsafe(target, key)) {
				return
			}

			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			} else {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
		// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
		// implementations can use it. The caller may not replace it.
		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	cjs = deepmerge_1;
	return cjs;
}var parseSrcset = {exports: {}};/**
 * Srcset Parser
 *
 * By Alex Bell |  MIT License
 *
 * JS Parser for the string value that appears in markup <img srcset="here">
 *
 * @returns Array [{url: _, d: _, w: _, h:_}, ...]
 *
 * Based super duper closely on the reference algorithm at:
 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
 *
 * Most comments are copied in directly from the spec
 * (except for comments in parens).
 */

var hasRequiredParseSrcset;

function requireParseSrcset () {
	if (hasRequiredParseSrcset) return parseSrcset.exports;
	hasRequiredParseSrcset = 1;
	(function (module) {
		(function (root, factory) {
			if (module.exports) {
				// Node. Does not work with strict CommonJS, but
				// only CommonJS-like environments that support module.exports,
				// like Node.
				module.exports = factory();
			} else {
				// Browser globals (root is window)
				root.parseSrcset = factory();
			}
		}(commonjsGlobal, function () {

			// 1. Let input be the value passed to this algorithm.
			return function (input) {

				// UTILITY FUNCTIONS

				// Manual is faster than RegEx
				// http://bjorn.tipling.com/state-and-regular-expressions-in-javascript
				// http://jsperf.com/whitespace-character/5
				function isSpace(c) {
					return (c === "\u0020" || // space
					c === "\u0009" || // horizontal tab
					c === "\u000A" || // new line
					c === "\u000C" || // form feed
					c === "\u000D");  // carriage return
				}

				function collectCharacters(regEx) {
					var chars,
						match = regEx.exec(input.substring(pos));
					if (match) {
						chars = match[ 0 ];
						pos += chars.length;
						return chars;
					}
				}

				var inputLength = input.length,

					// (Don't use \s, to avoid matching non-breaking space)
					regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
					regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
					regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
					regexTrailingCommas = /[,]+$/,
					regexNonNegativeInteger = /^\d+$/,

					// ( Positive or negative or unsigned integers or decimals, without or without exponents.
					// Must include at least one digit.
					// According to spec tests any decimal point must be followed by a digit.
					// No leading plus sign is allowed.)
					// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
					regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,

					url,
					descriptors,
					currentDescriptor,
					state,
					c,

					// 2. Let position be a pointer into input, initially pointing at the start
					//    of the string.
					pos = 0,

					// 3. Let candidates be an initially empty source set.
					candidates = [];

				// 4. Splitting loop: Collect a sequence of characters that are space
				//    characters or U+002C COMMA characters. If any U+002C COMMA characters
				//    were collected, that is a parse error.
				while (true) {
					collectCharacters(regexLeadingCommasOrSpaces);

					// 5. If position is past the end of input, return candidates and abort these steps.
					if (pos >= inputLength) {
						return candidates; // (we're done, this is the sole return path)
					}

					// 6. Collect a sequence of characters that are not space characters,
					//    and let that be url.
					url = collectCharacters(regexLeadingNotSpaces);

					// 7. Let descriptors be a new empty list.
					descriptors = [];

					// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
					//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
					//         more than one character, that is a parse error.
					if (url.slice(-1) === ",") {
						url = url.replace(regexTrailingCommas, "");
						// (Jump ahead to step 9 to skip tokenization and just push the candidate).
						parseDescriptors();

						//	Otherwise, follow these substeps:
					} else {
						tokenize();
					} // (close else of step 8)

					// 16. Return to the step labeled splitting loop.
				} // (Close of big while loop.)

				/**
				 * Tokenizes descriptor properties prior to parsing
				 * Returns undefined.
				 */
				function tokenize() {

					// 8.1. Descriptor tokeniser: Skip whitespace
					collectCharacters(regexLeadingSpaces);

					// 8.2. Let current descriptor be the empty string.
					currentDescriptor = "";

					// 8.3. Let state be in descriptor.
					state = "in descriptor";

					while (true) {

						// 8.4. Let c be the character at position.
						c = input.charAt(pos);

						//  Do the following depending on the value of state.
						//  For the purpose of this step, "EOF" is a special character representing
						//  that position is past the end of input.

						// In descriptor
						if (state === "in descriptor") {
							// Do the following, depending on the value of c:

							// Space character
							// If current descriptor is not empty, append current descriptor to
							// descriptors and let current descriptor be the empty string.
							// Set state to after descriptor.
							if (isSpace(c)) {
								if (currentDescriptor) {
									descriptors.push(currentDescriptor);
									currentDescriptor = "";
									state = "after descriptor";
								}

								// U+002C COMMA (,)
								// Advance position to the next character in input. If current descriptor
								// is not empty, append current descriptor to descriptors. Jump to the step
								// labeled descriptor parser.
							} else if (c === ",") {
								pos += 1;
								if (currentDescriptor) {
									descriptors.push(currentDescriptor);
								}
								parseDescriptors();
								return;

								// U+0028 LEFT PARENTHESIS (()
								// Append c to current descriptor. Set state to in parens.
							} else if (c === "\u0028") {
								currentDescriptor = currentDescriptor + c;
								state = "in parens";

								// EOF
								// If current descriptor is not empty, append current descriptor to
								// descriptors. Jump to the step labeled descriptor parser.
							} else if (c === "") {
								if (currentDescriptor) {
									descriptors.push(currentDescriptor);
								}
								parseDescriptors();
								return;

								// Anything else
								// Append c to current descriptor.
							} else {
								currentDescriptor = currentDescriptor + c;
							}
							// (end "in descriptor"

							// In parens
						} else if (state === "in parens") {

							// U+0029 RIGHT PARENTHESIS ())
							// Append c to current descriptor. Set state to in descriptor.
							if (c === ")") {
								currentDescriptor = currentDescriptor + c;
								state = "in descriptor";

								// EOF
								// Append current descriptor to descriptors. Jump to the step labeled
								// descriptor parser.
							} else if (c === "") {
								descriptors.push(currentDescriptor);
								parseDescriptors();
								return;

								// Anything else
								// Append c to current descriptor.
							} else {
								currentDescriptor = currentDescriptor + c;
							}

							// After descriptor
						} else if (state === "after descriptor") {

							// Do the following, depending on the value of c:
							// Space character: Stay in this state.
							if (isSpace(c)) ; else if (c === "") {
								parseDescriptors();
								return;

								// Anything else
								// Set state to in descriptor. Set position to the previous character in input.
							} else {
								state = "in descriptor";
								pos -= 1;

							}
						}

						// Advance position to the next character in input.
						pos += 1;

						// Repeat this step.
					} // (close while true loop)
				}

				/**
				 * Adds descriptor properties to a candidate, pushes to the candidates array
				 * @return undefined
				 */
				// Declared outside of the while loop so that it's only created once.
				function parseDescriptors() {

					// 9. Descriptor parser: Let error be no.
					var pError = false,

						// 10. Let width be absent.
						// 11. Let density be absent.
						// 12. Let future-compat-h be absent. (We're implementing it now as h)
						w, d, h, i,
						candidate = {},
						desc, lastChar, value, intVal, floatVal;

					// 13. For each descriptor in descriptors, run the appropriate set of steps
					// from the following list:
					for (i = 0 ; i < descriptors.length; i++) {
						desc = descriptors[ i ];

						lastChar = desc[ desc.length - 1 ];
						value = desc.substring(0, desc.length - 1);
						intVal = parseInt(value, 10);
						floatVal = parseFloat(value);

						// If the descriptor consists of a valid non-negative integer followed by
						// a U+0077 LATIN SMALL LETTER W character
						if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

							// If width and density are not both absent, then let error be yes.
							if (w || d) {pError = true;}

							// Apply the rules for parsing non-negative integers to the descriptor.
							// If the result is zero, let error be yes.
							// Otherwise, let width be the result.
							if (intVal === 0) {pError = true;} else {w = intVal;}

							// If the descriptor consists of a valid floating-point number followed by
							// a U+0078 LATIN SMALL LETTER X character
						} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

							// If width, density and future-compat-h are not all absent, then let error
							// be yes.
							if (w || d || h) {pError = true;}

							// Apply the rules for parsing floating-point number values to the descriptor.
							// If the result is less than zero, let error be yes. Otherwise, let density
							// be the result.
							if (floatVal < 0) {pError = true;} else {d = floatVal;}

							// If the descriptor consists of a valid non-negative integer followed by
							// a U+0068 LATIN SMALL LETTER H character
						} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

							// If height and density are not both absent, then let error be yes.
							if (h || d) {pError = true;}

							// Apply the rules for parsing non-negative integers to the descriptor.
							// If the result is zero, let error be yes. Otherwise, let future-compat-h
							// be the result.
							if (intVal === 0) {pError = true;} else {h = intVal;}

							// Anything else, Let error be yes.
						} else {pError = true;}
					} // (close step 13 for loop)

					// 15. If error is still no, then append a new image source to candidates whose
					// URL is url, associated with a width width if not absent and a pixel
					// density density if not absent. Otherwise, there is a parse error.
					if (!pError) {
						candidate.url = url;
						if (w) { candidate.w = w;}
						if (d) { candidate.d = d;}
						if (h) { candidate.h = h;}
						candidates.push(candidate);
					} else if (console && console.log) {
						console.log("Invalid srcset descriptor found in '" +
							input + "' at '" + desc + "'.");
					}
				} // (close parseDescriptors fn)

			}
		})); 
	} (parseSrcset));
	return parseSrcset.exports;
}var picocolors_browser = {exports: {}};var hasRequiredPicocolors_browser;

function requirePicocolors_browser () {
	if (hasRequiredPicocolors_browser) return picocolors_browser.exports;
	hasRequiredPicocolors_browser = 1;
	var x=String;
	var create=function() {return {isColorSupported:false,reset:x,bold:x,dim:x,italic:x,underline:x,inverse:x,hidden:x,strikethrough:x,black:x,red:x,green:x,yellow:x,blue:x,magenta:x,cyan:x,white:x,gray:x,bgBlack:x,bgRed:x,bgGreen:x,bgYellow:x,bgBlue:x,bgMagenta:x,bgCyan:x,bgWhite:x}};
	picocolors_browser.exports=create();
	picocolors_browser.exports.createColors = create;
	return picocolors_browser.exports;
}var _nodeResolve_empty = {};var _nodeResolve_empty$1=/*#__PURE__*/Object.freeze({__proto__:null,default:_nodeResolve_empty});var require$$2 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);var cssSyntaxError;
var hasRequiredCssSyntaxError;

function requireCssSyntaxError () {
	if (hasRequiredCssSyntaxError) return cssSyntaxError;
	hasRequiredCssSyntaxError = 1;

	let pico = requirePicocolors_browser();

	let terminalHighlight = require$$2;

	class CssSyntaxError extends Error {
	  constructor(message, line, column, source, file, plugin) {
	    super(message);
	    this.name = 'CssSyntaxError';
	    this.reason = message;

	    if (file) {
	      this.file = file;
	    }
	    if (source) {
	      this.source = source;
	    }
	    if (plugin) {
	      this.plugin = plugin;
	    }
	    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
	      if (typeof line === 'number') {
	        this.line = line;
	        this.column = column;
	      } else {
	        this.line = line.line;
	        this.column = line.column;
	        this.endLine = column.line;
	        this.endColumn = column.column;
	      }
	    }

	    this.setMessage();

	    if (Error.captureStackTrace) {
	      Error.captureStackTrace(this, CssSyntaxError);
	    }
	  }

	  setMessage() {
	    this.message = this.plugin ? this.plugin + ': ' : '';
	    this.message += this.file ? this.file : '<css input>';
	    if (typeof this.line !== 'undefined') {
	      this.message += ':' + this.line + ':' + this.column;
	    }
	    this.message += ': ' + this.reason;
	  }

	  showSourceCode(color) {
	    if (!this.source) return ''

	    let css = this.source;
	    if (color == null) color = pico.isColorSupported;
	    if (terminalHighlight) {
	      if (color) css = terminalHighlight(css);
	    }

	    let lines = css.split(/\r?\n/);
	    let start = Math.max(this.line - 3, 0);
	    let end = Math.min(this.line + 2, lines.length);

	    let maxWidth = String(end).length;

	    let mark, aside;
	    if (color) {
	      let { bold, gray, red } = pico.createColors(true);
	      mark = text => bold(red(text));
	      aside = text => gray(text);
	    } else {
	      mark = aside = str => str;
	    }

	    return lines
	      .slice(start, end)
	      .map((line, index) => {
	        let number = start + 1 + index;
	        let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';
	        if (number === this.line) {
	          let spacing =
	            aside(gutter.replace(/\d/g, ' ')) +
	            line.slice(0, this.column - 1).replace(/[^\t]/g, ' ');
	          return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^')
	        }
	        return ' ' + aside(gutter) + line
	      })
	      .join('\n')
	  }

	  toString() {
	    let code = this.showSourceCode();
	    if (code) {
	      code = '\n\n' + code + '\n';
	    }
	    return this.name + ': ' + this.message + code
	  }
	}

	cssSyntaxError = CssSyntaxError;
	CssSyntaxError.default = CssSyntaxError;
	return cssSyntaxError;
}var symbols = {};var hasRequiredSymbols;

function requireSymbols () {
	if (hasRequiredSymbols) return symbols;
	hasRequiredSymbols = 1;

	symbols.isClean = Symbol('isClean');

	symbols.my = Symbol('my');
	return symbols;
}var stringifier;
var hasRequiredStringifier;

function requireStringifier () {
	if (hasRequiredStringifier) return stringifier;
	hasRequiredStringifier = 1;

	const DEFAULT_RAW = {
	  after: '\n',
	  beforeClose: '\n',
	  beforeComment: '\n',
	  beforeDecl: '\n',
	  beforeOpen: ' ',
	  beforeRule: '\n',
	  colon: ': ',
	  commentLeft: ' ',
	  commentRight: ' ',
	  emptyBody: '',
	  indent: '    ',
	  semicolon: false
	};

	function capitalize(str) {
	  return str[0].toUpperCase() + str.slice(1)
	}

	class Stringifier {
	  constructor(builder) {
	    this.builder = builder;
	  }

	  atrule(node, semicolon) {
	    let name = '@' + node.name;
	    let params = node.params ? this.rawValue(node, 'params') : '';

	    if (typeof node.raws.afterName !== 'undefined') {
	      name += node.raws.afterName;
	    } else if (params) {
	      name += ' ';
	    }

	    if (node.nodes) {
	      this.block(node, name + params);
	    } else {
	      let end = (node.raws.between || '') + (semicolon ? ';' : '');
	      this.builder(name + params + end, node);
	    }
	  }

	  beforeAfter(node, detect) {
	    let value;
	    if (node.type === 'decl') {
	      value = this.raw(node, null, 'beforeDecl');
	    } else if (node.type === 'comment') {
	      value = this.raw(node, null, 'beforeComment');
	    } else if (detect === 'before') {
	      value = this.raw(node, null, 'beforeRule');
	    } else {
	      value = this.raw(node, null, 'beforeClose');
	    }

	    let buf = node.parent;
	    let depth = 0;
	    while (buf && buf.type !== 'root') {
	      depth += 1;
	      buf = buf.parent;
	    }

	    if (value.includes('\n')) {
	      let indent = this.raw(node, null, 'indent');
	      if (indent.length) {
	        for (let step = 0; step < depth; step++) value += indent;
	      }
	    }

	    return value
	  }

	  block(node, start) {
	    let between = this.raw(node, 'between', 'beforeOpen');
	    this.builder(start + between + '{', node, 'start');

	    let after;
	    if (node.nodes && node.nodes.length) {
	      this.body(node);
	      after = this.raw(node, 'after');
	    } else {
	      after = this.raw(node, 'after', 'emptyBody');
	    }

	    if (after) this.builder(after);
	    this.builder('}', node, 'end');
	  }

	  body(node) {
	    let last = node.nodes.length - 1;
	    while (last > 0) {
	      if (node.nodes[last].type !== 'comment') break
	      last -= 1;
	    }

	    let semicolon = this.raw(node, 'semicolon');
	    for (let i = 0; i < node.nodes.length; i++) {
	      let child = node.nodes[i];
	      let before = this.raw(child, 'before');
	      if (before) this.builder(before);
	      this.stringify(child, last !== i || semicolon);
	    }
	  }

	  comment(node) {
	    let left = this.raw(node, 'left', 'commentLeft');
	    let right = this.raw(node, 'right', 'commentRight');
	    this.builder('/*' + left + node.text + right + '*/', node);
	  }

	  decl(node, semicolon) {
	    let between = this.raw(node, 'between', 'colon');
	    let string = node.prop + between + this.rawValue(node, 'value');

	    if (node.important) {
	      string += node.raws.important || ' !important';
	    }

	    if (semicolon) string += ';';
	    this.builder(string, node);
	  }

	  document(node) {
	    this.body(node);
	  }

	  raw(node, own, detect) {
	    let value;
	    if (!detect) detect = own;

	    // Already had
	    if (own) {
	      value = node.raws[own];
	      if (typeof value !== 'undefined') return value
	    }

	    let parent = node.parent;

	    if (detect === 'before') {
	      // Hack for first rule in CSS
	      if (!parent || (parent.type === 'root' && parent.first === node)) {
	        return ''
	      }

	      // `root` nodes in `document` should use only their own raws
	      if (parent && parent.type === 'document') {
	        return ''
	      }
	    }

	    // Floating child without parent
	    if (!parent) return DEFAULT_RAW[detect]

	    // Detect style by other nodes
	    let root = node.root();
	    if (!root.rawCache) root.rawCache = {};
	    if (typeof root.rawCache[detect] !== 'undefined') {
	      return root.rawCache[detect]
	    }

	    if (detect === 'before' || detect === 'after') {
	      return this.beforeAfter(node, detect)
	    } else {
	      let method = 'raw' + capitalize(detect);
	      if (this[method]) {
	        value = this[method](root, node);
	      } else {
	        root.walk(i => {
	          value = i.raws[own];
	          if (typeof value !== 'undefined') return false
	        });
	      }
	    }

	    if (typeof value === 'undefined') value = DEFAULT_RAW[detect];

	    root.rawCache[detect] = value;
	    return value
	  }

	  rawBeforeClose(root) {
	    let value;
	    root.walk(i => {
	      if (i.nodes && i.nodes.length > 0) {
	        if (typeof i.raws.after !== 'undefined') {
	          value = i.raws.after;
	          if (value.includes('\n')) {
	            value = value.replace(/[^\n]+$/, '');
	          }
	          return false
	        }
	      }
	    });
	    if (value) value = value.replace(/\S/g, '');
	    return value
	  }

	  rawBeforeComment(root, node) {
	    let value;
	    root.walkComments(i => {
	      if (typeof i.raws.before !== 'undefined') {
	        value = i.raws.before;
	        if (value.includes('\n')) {
	          value = value.replace(/[^\n]+$/, '');
	        }
	        return false
	      }
	    });
	    if (typeof value === 'undefined') {
	      value = this.raw(node, null, 'beforeDecl');
	    } else if (value) {
	      value = value.replace(/\S/g, '');
	    }
	    return value
	  }

	  rawBeforeDecl(root, node) {
	    let value;
	    root.walkDecls(i => {
	      if (typeof i.raws.before !== 'undefined') {
	        value = i.raws.before;
	        if (value.includes('\n')) {
	          value = value.replace(/[^\n]+$/, '');
	        }
	        return false
	      }
	    });
	    if (typeof value === 'undefined') {
	      value = this.raw(node, null, 'beforeRule');
	    } else if (value) {
	      value = value.replace(/\S/g, '');
	    }
	    return value
	  }

	  rawBeforeOpen(root) {
	    let value;
	    root.walk(i => {
	      if (i.type !== 'decl') {
	        value = i.raws.between;
	        if (typeof value !== 'undefined') return false
	      }
	    });
	    return value
	  }

	  rawBeforeRule(root) {
	    let value;
	    root.walk(i => {
	      if (i.nodes && (i.parent !== root || root.first !== i)) {
	        if (typeof i.raws.before !== 'undefined') {
	          value = i.raws.before;
	          if (value.includes('\n')) {
	            value = value.replace(/[^\n]+$/, '');
	          }
	          return false
	        }
	      }
	    });
	    if (value) value = value.replace(/\S/g, '');
	    return value
	  }

	  rawColon(root) {
	    let value;
	    root.walkDecls(i => {
	      if (typeof i.raws.between !== 'undefined') {
	        value = i.raws.between.replace(/[^\s:]/g, '');
	        return false
	      }
	    });
	    return value
	  }

	  rawEmptyBody(root) {
	    let value;
	    root.walk(i => {
	      if (i.nodes && i.nodes.length === 0) {
	        value = i.raws.after;
	        if (typeof value !== 'undefined') return false
	      }
	    });
	    return value
	  }

	  rawIndent(root) {
	    if (root.raws.indent) return root.raws.indent
	    let value;
	    root.walk(i => {
	      let p = i.parent;
	      if (p && p !== root && p.parent && p.parent === root) {
	        if (typeof i.raws.before !== 'undefined') {
	          let parts = i.raws.before.split('\n');
	          value = parts[parts.length - 1];
	          value = value.replace(/\S/g, '');
	          return false
	        }
	      }
	    });
	    return value
	  }

	  rawSemicolon(root) {
	    let value;
	    root.walk(i => {
	      if (i.nodes && i.nodes.length && i.last.type === 'decl') {
	        value = i.raws.semicolon;
	        if (typeof value !== 'undefined') return false
	      }
	    });
	    return value
	  }

	  rawValue(node, prop) {
	    let value = node[prop];
	    let raw = node.raws[prop];
	    if (raw && raw.value === value) {
	      return raw.raw
	    }

	    return value
	  }

	  root(node) {
	    this.body(node);
	    if (node.raws.after) this.builder(node.raws.after);
	  }

	  rule(node) {
	    this.block(node, this.rawValue(node, 'selector'));
	    if (node.raws.ownSemicolon) {
	      this.builder(node.raws.ownSemicolon, node, 'end');
	    }
	  }

	  stringify(node, semicolon) {
	    /* c8 ignore start */
	    if (!this[node.type]) {
	      throw new Error(
	        'Unknown AST node type ' +
	          node.type +
	          '. ' +
	          'Maybe you need to change PostCSS stringifier.'
	      )
	    }
	    /* c8 ignore stop */
	    this[node.type](node, semicolon);
	  }
	}

	stringifier = Stringifier;
	Stringifier.default = Stringifier;
	return stringifier;
}var stringify_1;
var hasRequiredStringify;

function requireStringify () {
	if (hasRequiredStringify) return stringify_1;
	hasRequiredStringify = 1;

	let Stringifier = requireStringifier();

	function stringify(node, builder) {
	  let str = new Stringifier(builder);
	  str.stringify(node);
	}

	stringify_1 = stringify;
	stringify.default = stringify;
	return stringify_1;
}var node;
var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node;
	hasRequiredNode = 1;

	let { isClean, my } = requireSymbols();
	let CssSyntaxError = requireCssSyntaxError();
	let Stringifier = requireStringifier();
	let stringify = requireStringify();

	function cloneNode(obj, parent) {
	  let cloned = new obj.constructor();

	  for (let i in obj) {
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
	      /* c8 ignore next 2 */
	      continue
	    }
	    if (i === 'proxyCache') continue
	    let value = obj[i];
	    let type = typeof value;

	    if (i === 'parent' && type === 'object') {
	      if (parent) cloned[i] = parent;
	    } else if (i === 'source') {
	      cloned[i] = value;
	    } else if (Array.isArray(value)) {
	      cloned[i] = value.map(j => cloneNode(j, cloned));
	    } else {
	      if (type === 'object' && value !== null) value = cloneNode(value);
	      cloned[i] = value;
	    }
	  }

	  return cloned
	}

	class Node {
	  constructor(defaults = {}) {
	    this.raws = {};
	    this[isClean] = false;
	    this[my] = true;

	    for (let name in defaults) {
	      if (name === 'nodes') {
	        this.nodes = [];
	        for (let node of defaults[name]) {
	          if (typeof node.clone === 'function') {
	            this.append(node.clone());
	          } else {
	            this.append(node);
	          }
	        }
	      } else {
	        this[name] = defaults[name];
	      }
	    }
	  }

	  addToError(error) {
	    error.postcssNode = this;
	    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
	      let s = this.source;
	      error.stack = error.stack.replace(
	        /\n\s{4}at /,
	        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
	      );
	    }
	    return error
	  }

	  after(add) {
	    this.parent.insertAfter(this, add);
	    return this
	  }

	  assign(overrides = {}) {
	    for (let name in overrides) {
	      this[name] = overrides[name];
	    }
	    return this
	  }

	  before(add) {
	    this.parent.insertBefore(this, add);
	    return this
	  }

	  cleanRaws(keepBetween) {
	    delete this.raws.before;
	    delete this.raws.after;
	    if (!keepBetween) delete this.raws.between;
	  }

	  clone(overrides = {}) {
	    let cloned = cloneNode(this);
	    for (let name in overrides) {
	      cloned[name] = overrides[name];
	    }
	    return cloned
	  }

	  cloneAfter(overrides = {}) {
	    let cloned = this.clone(overrides);
	    this.parent.insertAfter(this, cloned);
	    return cloned
	  }

	  cloneBefore(overrides = {}) {
	    let cloned = this.clone(overrides);
	    this.parent.insertBefore(this, cloned);
	    return cloned
	  }

	  error(message, opts = {}) {
	    if (this.source) {
	      let { end, start } = this.rangeBy(opts);
	      return this.source.input.error(
	        message,
	        { column: start.column, line: start.line },
	        { column: end.column, line: end.line },
	        opts
	      )
	    }
	    return new CssSyntaxError(message)
	  }

	  getProxyProcessor() {
	    return {
	      get(node, prop) {
	        if (prop === 'proxyOf') {
	          return node
	        } else if (prop === 'root') {
	          return () => node.root().toProxy()
	        } else {
	          return node[prop]
	        }
	      },

	      set(node, prop, value) {
	        if (node[prop] === value) return true
	        node[prop] = value;
	        if (
	          prop === 'prop' ||
	          prop === 'value' ||
	          prop === 'name' ||
	          prop === 'params' ||
	          prop === 'important' ||
	          /* c8 ignore next */
	          prop === 'text'
	        ) {
	          node.markDirty();
	        }
	        return true
	      }
	    }
	  }

	  markDirty() {
	    if (this[isClean]) {
	      this[isClean] = false;
	      let next = this;
	      while ((next = next.parent)) {
	        next[isClean] = false;
	      }
	    }
	  }

	  next() {
	    if (!this.parent) return undefined
	    let index = this.parent.index(this);
	    return this.parent.nodes[index + 1]
	  }

	  positionBy(opts, stringRepresentation) {
	    let pos = this.source.start;
	    if (opts.index) {
	      pos = this.positionInside(opts.index, stringRepresentation);
	    } else if (opts.word) {
	      stringRepresentation = this.toString();
	      let index = stringRepresentation.indexOf(opts.word);
	      if (index !== -1) pos = this.positionInside(index, stringRepresentation);
	    }
	    return pos
	  }

	  positionInside(index, stringRepresentation) {
	    let string = stringRepresentation || this.toString();
	    let column = this.source.start.column;
	    let line = this.source.start.line;

	    for (let i = 0; i < index; i++) {
	      if (string[i] === '\n') {
	        column = 1;
	        line += 1;
	      } else {
	        column += 1;
	      }
	    }

	    return { column, line }
	  }

	  prev() {
	    if (!this.parent) return undefined
	    let index = this.parent.index(this);
	    return this.parent.nodes[index - 1]
	  }

	  rangeBy(opts) {
	    let start = {
	      column: this.source.start.column,
	      line: this.source.start.line
	    };
	    let end = this.source.end
	      ? {
	        column: this.source.end.column + 1,
	        line: this.source.end.line
	      }
	      : {
	        column: start.column + 1,
	        line: start.line
	      };

	    if (opts.word) {
	      let stringRepresentation = this.toString();
	      let index = stringRepresentation.indexOf(opts.word);
	      if (index !== -1) {
	        start = this.positionInside(index, stringRepresentation);
	        end = this.positionInside(index + opts.word.length, stringRepresentation);
	      }
	    } else {
	      if (opts.start) {
	        start = {
	          column: opts.start.column,
	          line: opts.start.line
	        };
	      } else if (opts.index) {
	        start = this.positionInside(opts.index);
	      }

	      if (opts.end) {
	        end = {
	          column: opts.end.column,
	          line: opts.end.line
	        };
	      } else if (opts.endIndex) {
	        end = this.positionInside(opts.endIndex);
	      } else if (opts.index) {
	        end = this.positionInside(opts.index + 1);
	      }
	    }

	    if (
	      end.line < start.line ||
	      (end.line === start.line && end.column <= start.column)
	    ) {
	      end = { column: start.column + 1, line: start.line };
	    }

	    return { end, start }
	  }

	  raw(prop, defaultType) {
	    let str = new Stringifier();
	    return str.raw(this, prop, defaultType)
	  }

	  remove() {
	    if (this.parent) {
	      this.parent.removeChild(this);
	    }
	    this.parent = undefined;
	    return this
	  }

	  replaceWith(...nodes) {
	    if (this.parent) {
	      let bookmark = this;
	      let foundSelf = false;
	      for (let node of nodes) {
	        if (node === this) {
	          foundSelf = true;
	        } else if (foundSelf) {
	          this.parent.insertAfter(bookmark, node);
	          bookmark = node;
	        } else {
	          this.parent.insertBefore(bookmark, node);
	        }
	      }

	      if (!foundSelf) {
	        this.remove();
	      }
	    }

	    return this
	  }

	  root() {
	    let result = this;
	    while (result.parent && result.parent.type !== 'document') {
	      result = result.parent;
	    }
	    return result
	  }

	  toJSON(_, inputs) {
	    let fixed = {};
	    let emitInputs = inputs == null;
	    inputs = inputs || new Map();
	    let inputsNextIndex = 0;

	    for (let name in this) {
	      if (!Object.prototype.hasOwnProperty.call(this, name)) {
	        /* c8 ignore next 2 */
	        continue
	      }
	      if (name === 'parent' || name === 'proxyCache') continue
	      let value = this[name];

	      if (Array.isArray(value)) {
	        fixed[name] = value.map(i => {
	          if (typeof i === 'object' && i.toJSON) {
	            return i.toJSON(null, inputs)
	          } else {
	            return i
	          }
	        });
	      } else if (typeof value === 'object' && value.toJSON) {
	        fixed[name] = value.toJSON(null, inputs);
	      } else if (name === 'source') {
	        let inputId = inputs.get(value.input);
	        if (inputId == null) {
	          inputId = inputsNextIndex;
	          inputs.set(value.input, inputsNextIndex);
	          inputsNextIndex++;
	        }
	        fixed[name] = {
	          end: value.end,
	          inputId,
	          start: value.start
	        };
	      } else {
	        fixed[name] = value;
	      }
	    }

	    if (emitInputs) {
	      fixed.inputs = [...inputs.keys()].map(input => input.toJSON());
	    }

	    return fixed
	  }

	  toProxy() {
	    if (!this.proxyCache) {
	      this.proxyCache = new Proxy(this, this.getProxyProcessor());
	    }
	    return this.proxyCache
	  }

	  toString(stringifier = stringify) {
	    if (stringifier.stringify) stringifier = stringifier.stringify;
	    let result = '';
	    stringifier(this, i => {
	      result += i;
	    });
	    return result
	  }

	  warn(result, text, opts) {
	    let data = { node: this };
	    for (let i in opts) data[i] = opts[i];
	    return result.warn(text, data)
	  }

	  get proxyOf() {
	    return this
	  }
	}

	node = Node;
	Node.default = Node;
	return node;
}var declaration;
var hasRequiredDeclaration;

function requireDeclaration () {
	if (hasRequiredDeclaration) return declaration;
	hasRequiredDeclaration = 1;

	let Node = requireNode();

	class Declaration extends Node {
	  constructor(defaults) {
	    if (
	      defaults &&
	      typeof defaults.value !== 'undefined' &&
	      typeof defaults.value !== 'string'
	    ) {
	      defaults = { ...defaults, value: String(defaults.value) };
	    }
	    super(defaults);
	    this.type = 'decl';
	  }

	  get variable() {
	    return this.prop.startsWith('--') || this.prop[0] === '$'
	  }
	}

	declaration = Declaration;
	Declaration.default = Declaration;
	return declaration;
}var nonSecure;
var hasRequiredNonSecure;

function requireNonSecure () {
	if (hasRequiredNonSecure) return nonSecure;
	hasRequiredNonSecure = 1;
	let urlAlphabet =
	  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
	let customAlphabet = (alphabet, defaultSize = 21) => {
	  return (size = defaultSize) => {
	    let id = '';
	    let i = size;
	    while (i--) {
	      id += alphabet[(Math.random() * alphabet.length) | 0];
	    }
	    return id
	  }
	};
	let nanoid = (size = 21) => {
	  let id = '';
	  let i = size;
	  while (i--) {
	    id += urlAlphabet[(Math.random() * 64) | 0];
	  }
	  return id
	};
	nonSecure = { nanoid, customAlphabet };
	return nonSecure;
}var previousMap;
var hasRequiredPreviousMap;

function requirePreviousMap () {
	if (hasRequiredPreviousMap) return previousMap;
	hasRequiredPreviousMap = 1;

	let { SourceMapConsumer, SourceMapGenerator } = require$$2;
	let { existsSync, readFileSync } = require$$2;
	let { dirname, join } = require$$2;

	function fromBase64(str) {
	  if (Buffer) {
	    return Buffer.from(str, 'base64').toString()
	  } else {
	    /* c8 ignore next 2 */
	    return window.atob(str)
	  }
	}

	class PreviousMap {
	  constructor(css, opts) {
	    if (opts.map === false) return
	    this.loadAnnotation(css);
	    this.inline = this.startWith(this.annotation, 'data:');

	    let prev = opts.map ? opts.map.prev : undefined;
	    let text = this.loadMap(opts.from, prev);
	    if (!this.mapFile && opts.from) {
	      this.mapFile = opts.from;
	    }
	    if (this.mapFile) this.root = dirname(this.mapFile);
	    if (text) this.text = text;
	  }

	  consumer() {
	    if (!this.consumerCache) {
	      this.consumerCache = new SourceMapConsumer(this.text);
	    }
	    return this.consumerCache
	  }

	  decodeInline(text) {
	    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
	    let baseUri = /^data:application\/json;base64,/;
	    let charsetUri = /^data:application\/json;charset=utf-?8,/;
	    let uri = /^data:application\/json,/;

	    if (charsetUri.test(text) || uri.test(text)) {
	      return decodeURIComponent(text.substr(RegExp.lastMatch.length))
	    }

	    if (baseCharsetUri.test(text) || baseUri.test(text)) {
	      return fromBase64(text.substr(RegExp.lastMatch.length))
	    }

	    let encoding = text.match(/data:application\/json;([^,]+),/)[1];
	    throw new Error('Unsupported source map encoding ' + encoding)
	  }

	  getAnnotationURL(sourceMapString) {
	    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, '').trim()
	  }

	  isMap(map) {
	    if (typeof map !== 'object') return false
	    return (
	      typeof map.mappings === 'string' ||
	      typeof map._mappings === 'string' ||
	      Array.isArray(map.sections)
	    )
	  }

	  loadAnnotation(css) {
	    let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
	    if (!comments) return

	    // sourceMappingURLs from comments, strings, etc.
	    let start = css.lastIndexOf(comments.pop());
	    let end = css.indexOf('*/', start);

	    if (start > -1 && end > -1) {
	      // Locate the last sourceMappingURL to avoid pickin
	      this.annotation = this.getAnnotationURL(css.substring(start, end));
	    }
	  }

	  loadFile(path) {
	    this.root = dirname(path);
	    if (existsSync(path)) {
	      this.mapFile = path;
	      return readFileSync(path, 'utf-8').toString().trim()
	    }
	  }

	  loadMap(file, prev) {
	    if (prev === false) return false

	    if (prev) {
	      if (typeof prev === 'string') {
	        return prev
	      } else if (typeof prev === 'function') {
	        let prevPath = prev(file);
	        if (prevPath) {
	          let map = this.loadFile(prevPath);
	          if (!map) {
	            throw new Error(
	              'Unable to load previous source map: ' + prevPath.toString()
	            )
	          }
	          return map
	        }
	      } else if (prev instanceof SourceMapConsumer) {
	        return SourceMapGenerator.fromSourceMap(prev).toString()
	      } else if (prev instanceof SourceMapGenerator) {
	        return prev.toString()
	      } else if (this.isMap(prev)) {
	        return JSON.stringify(prev)
	      } else {
	        throw new Error(
	          'Unsupported previous source map format: ' + prev.toString()
	        )
	      }
	    } else if (this.inline) {
	      return this.decodeInline(this.annotation)
	    } else if (this.annotation) {
	      let map = this.annotation;
	      if (file) map = join(dirname(file), map);
	      return this.loadFile(map)
	    }
	  }

	  startWith(string, start) {
	    if (!string) return false
	    return string.substr(0, start.length) === start
	  }

	  withContent() {
	    return !!(
	      this.consumer().sourcesContent &&
	      this.consumer().sourcesContent.length > 0
	    )
	  }
	}

	previousMap = PreviousMap;
	PreviousMap.default = PreviousMap;
	return previousMap;
}var input;
var hasRequiredInput;

function requireInput () {
	if (hasRequiredInput) return input;
	hasRequiredInput = 1;

	let { SourceMapConsumer, SourceMapGenerator } = require$$2;
	let { fileURLToPath, pathToFileURL } = require$$2;
	let { isAbsolute, resolve } = require$$2;
	let { nanoid } = requireNonSecure();

	let terminalHighlight = require$$2;
	let CssSyntaxError = requireCssSyntaxError();
	let PreviousMap = requirePreviousMap();

	let fromOffsetCache = Symbol('fromOffsetCache');

	let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
	let pathAvailable = Boolean(resolve && isAbsolute);

	class Input {
	  constructor(css, opts = {}) {
	    if (
	      css === null ||
	      typeof css === 'undefined' ||
	      (typeof css === 'object' && !css.toString)
	    ) {
	      throw new Error(`PostCSS received ${css} instead of CSS string`)
	    }

	    this.css = css.toString();

	    if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
	      this.hasBOM = true;
	      this.css = this.css.slice(1);
	    } else {
	      this.hasBOM = false;
	    }

	    if (opts.from) {
	      if (
	        !pathAvailable ||
	        /^\w+:\/\//.test(opts.from) ||
	        isAbsolute(opts.from)
	      ) {
	        this.file = opts.from;
	      } else {
	        this.file = resolve(opts.from);
	      }
	    }

	    if (pathAvailable && sourceMapAvailable) {
	      let map = new PreviousMap(this.css, opts);
	      if (map.text) {
	        this.map = map;
	        let file = map.consumer().file;
	        if (!this.file && file) this.file = this.mapResolve(file);
	      }
	    }

	    if (!this.file) {
	      this.id = '<input css ' + nanoid(6) + '>';
	    }
	    if (this.map) this.map.file = this.from;
	  }

	  error(message, line, column, opts = {}) {
	    let result, endLine, endColumn;

	    if (line && typeof line === 'object') {
	      let start = line;
	      let end = column;
	      if (typeof start.offset === 'number') {
	        let pos = this.fromOffset(start.offset);
	        line = pos.line;
	        column = pos.col;
	      } else {
	        line = start.line;
	        column = start.column;
	      }
	      if (typeof end.offset === 'number') {
	        let pos = this.fromOffset(end.offset);
	        endLine = pos.line;
	        endColumn = pos.col;
	      } else {
	        endLine = end.line;
	        endColumn = end.column;
	      }
	    } else if (!column) {
	      let pos = this.fromOffset(line);
	      line = pos.line;
	      column = pos.col;
	    }

	    let origin = this.origin(line, column, endLine, endColumn);
	    if (origin) {
	      result = new CssSyntaxError(
	        message,
	        origin.endLine === undefined
	          ? origin.line
	          : { column: origin.column, line: origin.line },
	        origin.endLine === undefined
	          ? origin.column
	          : { column: origin.endColumn, line: origin.endLine },
	        origin.source,
	        origin.file,
	        opts.plugin
	      );
	    } else {
	      result = new CssSyntaxError(
	        message,
	        endLine === undefined ? line : { column, line },
	        endLine === undefined ? column : { column: endColumn, line: endLine },
	        this.css,
	        this.file,
	        opts.plugin
	      );
	    }

	    result.input = { column, endColumn, endLine, line, source: this.css };
	    if (this.file) {
	      if (pathToFileURL) {
	        result.input.url = pathToFileURL(this.file).toString();
	      }
	      result.input.file = this.file;
	    }

	    return result
	  }

	  fromOffset(offset) {
	    let lastLine, lineToIndex;
	    if (!this[fromOffsetCache]) {
	      let lines = this.css.split('\n');
	      lineToIndex = new Array(lines.length);
	      let prevIndex = 0;

	      for (let i = 0, l = lines.length; i < l; i++) {
	        lineToIndex[i] = prevIndex;
	        prevIndex += lines[i].length + 1;
	      }

	      this[fromOffsetCache] = lineToIndex;
	    } else {
	      lineToIndex = this[fromOffsetCache];
	    }
	    lastLine = lineToIndex[lineToIndex.length - 1];

	    let min = 0;
	    if (offset >= lastLine) {
	      min = lineToIndex.length - 1;
	    } else {
	      let max = lineToIndex.length - 2;
	      let mid;
	      while (min < max) {
	        mid = min + ((max - min) >> 1);
	        if (offset < lineToIndex[mid]) {
	          max = mid - 1;
	        } else if (offset >= lineToIndex[mid + 1]) {
	          min = mid + 1;
	        } else {
	          min = mid;
	          break
	        }
	      }
	    }
	    return {
	      col: offset - lineToIndex[min] + 1,
	      line: min + 1
	    }
	  }

	  mapResolve(file) {
	    if (/^\w+:\/\//.test(file)) {
	      return file
	    }
	    return resolve(this.map.consumer().sourceRoot || this.map.root || '.', file)
	  }

	  origin(line, column, endLine, endColumn) {
	    if (!this.map) return false
	    let consumer = this.map.consumer();

	    let from = consumer.originalPositionFor({ column, line });
	    if (!from.source) return false

	    let to;
	    if (typeof endLine === 'number') {
	      to = consumer.originalPositionFor({ column: endColumn, line: endLine });
	    }

	    let fromUrl;

	    if (isAbsolute(from.source)) {
	      fromUrl = pathToFileURL(from.source);
	    } else {
	      fromUrl = new URL(
	        from.source,
	        this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile)
	      );
	    }

	    let result = {
	      column: from.column,
	      endColumn: to && to.column,
	      endLine: to && to.line,
	      line: from.line,
	      url: fromUrl.toString()
	    };

	    if (fromUrl.protocol === 'file:') {
	      if (fileURLToPath) {
	        result.file = fileURLToPath(fromUrl);
	      } else {
	        /* c8 ignore next 2 */
	        throw new Error(`file: protocol is not available in this PostCSS build`)
	      }
	    }

	    let source = consumer.sourceContentFor(from.source);
	    if (source) result.source = source;

	    return result
	  }

	  toJSON() {
	    let json = {};
	    for (let name of ['hasBOM', 'css', 'file', 'id']) {
	      if (this[name] != null) {
	        json[name] = this[name];
	      }
	    }
	    if (this.map) {
	      json.map = { ...this.map };
	      if (json.map.consumerCache) {
	        json.map.consumerCache = undefined;
	      }
	    }
	    return json
	  }

	  get from() {
	    return this.file || this.id
	  }
	}

	input = Input;
	Input.default = Input;

	if (terminalHighlight && terminalHighlight.registerInput) {
	  terminalHighlight.registerInput(Input);
	}
	return input;
}var mapGenerator;
var hasRequiredMapGenerator;

function requireMapGenerator () {
	if (hasRequiredMapGenerator) return mapGenerator;
	hasRequiredMapGenerator = 1;

	let { SourceMapConsumer, SourceMapGenerator } = require$$2;
	let { dirname, relative, resolve, sep } = require$$2;
	let { pathToFileURL } = require$$2;

	let Input = requireInput();

	let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
	let pathAvailable = Boolean(dirname && resolve && relative && sep);

	class MapGenerator {
	  constructor(stringify, root, opts, cssString) {
	    this.stringify = stringify;
	    this.mapOpts = opts.map || {};
	    this.root = root;
	    this.opts = opts;
	    this.css = cssString;
	    this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute;

	    this.memoizedFileURLs = new Map();
	    this.memoizedPaths = new Map();
	    this.memoizedURLs = new Map();
	  }

	  addAnnotation() {
	    let content;

	    if (this.isInline()) {
	      content =
	        'data:application/json;base64,' + this.toBase64(this.map.toString());
	    } else if (typeof this.mapOpts.annotation === 'string') {
	      content = this.mapOpts.annotation;
	    } else if (typeof this.mapOpts.annotation === 'function') {
	      content = this.mapOpts.annotation(this.opts.to, this.root);
	    } else {
	      content = this.outputFile() + '.map';
	    }
	    let eol = '\n';
	    if (this.css.includes('\r\n')) eol = '\r\n';

	    this.css += eol + '/*# sourceMappingURL=' + content + ' */';
	  }

	  applyPrevMaps() {
	    for (let prev of this.previous()) {
	      let from = this.toUrl(this.path(prev.file));
	      let root = prev.root || dirname(prev.file);
	      let map;

	      if (this.mapOpts.sourcesContent === false) {
	        map = new SourceMapConsumer(prev.text);
	        if (map.sourcesContent) {
	          map.sourcesContent = map.sourcesContent.map(() => null);
	        }
	      } else {
	        map = prev.consumer();
	      }

	      this.map.applySourceMap(map, from, this.toUrl(this.path(root)));
	    }
	  }

	  clearAnnotation() {
	    if (this.mapOpts.annotation === false) return

	    if (this.root) {
	      let node;
	      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
	        node = this.root.nodes[i];
	        if (node.type !== 'comment') continue
	        if (node.text.indexOf('# sourceMappingURL=') === 0) {
	          this.root.removeChild(i);
	        }
	      }
	    } else if (this.css) {
	      this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, '');
	    }
	  }

	  generate() {
	    this.clearAnnotation();
	    if (pathAvailable && sourceMapAvailable && this.isMap()) {
	      return this.generateMap()
	    } else {
	      let result = '';
	      this.stringify(this.root, i => {
	        result += i;
	      });
	      return [result]
	    }
	  }

	  generateMap() {
	    if (this.root) {
	      this.generateString();
	    } else if (this.previous().length === 1) {
	      let prev = this.previous()[0].consumer();
	      prev.file = this.outputFile();
	      this.map = SourceMapGenerator.fromSourceMap(prev);
	    } else {
	      this.map = new SourceMapGenerator({ file: this.outputFile() });
	      this.map.addMapping({
	        generated: { column: 0, line: 1 },
	        original: { column: 0, line: 1 },
	        source: this.opts.from
	          ? this.toUrl(this.path(this.opts.from))
	          : '<no source>'
	      });
	    }

	    if (this.isSourcesContent()) this.setSourcesContent();
	    if (this.root && this.previous().length > 0) this.applyPrevMaps();
	    if (this.isAnnotation()) this.addAnnotation();

	    if (this.isInline()) {
	      return [this.css]
	    } else {
	      return [this.css, this.map]
	    }
	  }

	  generateString() {
	    this.css = '';
	    this.map = new SourceMapGenerator({ file: this.outputFile() });

	    let line = 1;
	    let column = 1;

	    let noSource = '<no source>';
	    let mapping = {
	      generated: { column: 0, line: 0 },
	      original: { column: 0, line: 0 },
	      source: ''
	    };

	    let lines, last;
	    this.stringify(this.root, (str, node, type) => {
	      this.css += str;

	      if (node && type !== 'end') {
	        mapping.generated.line = line;
	        mapping.generated.column = column - 1;
	        if (node.source && node.source.start) {
	          mapping.source = this.sourcePath(node);
	          mapping.original.line = node.source.start.line;
	          mapping.original.column = node.source.start.column - 1;
	          this.map.addMapping(mapping);
	        } else {
	          mapping.source = noSource;
	          mapping.original.line = 1;
	          mapping.original.column = 0;
	          this.map.addMapping(mapping);
	        }
	      }

	      lines = str.match(/\n/g);
	      if (lines) {
	        line += lines.length;
	        last = str.lastIndexOf('\n');
	        column = str.length - last;
	      } else {
	        column += str.length;
	      }

	      if (node && type !== 'start') {
	        let p = node.parent || { raws: {} };
	        let childless =
	          node.type === 'decl' || (node.type === 'atrule' && !node.nodes);
	        if (!childless || node !== p.last || p.raws.semicolon) {
	          if (node.source && node.source.end) {
	            mapping.source = this.sourcePath(node);
	            mapping.original.line = node.source.end.line;
	            mapping.original.column = node.source.end.column - 1;
	            mapping.generated.line = line;
	            mapping.generated.column = column - 2;
	            this.map.addMapping(mapping);
	          } else {
	            mapping.source = noSource;
	            mapping.original.line = 1;
	            mapping.original.column = 0;
	            mapping.generated.line = line;
	            mapping.generated.column = column - 1;
	            this.map.addMapping(mapping);
	          }
	        }
	      }
	    });
	  }

	  isAnnotation() {
	    if (this.isInline()) {
	      return true
	    }
	    if (typeof this.mapOpts.annotation !== 'undefined') {
	      return this.mapOpts.annotation
	    }
	    if (this.previous().length) {
	      return this.previous().some(i => i.annotation)
	    }
	    return true
	  }

	  isInline() {
	    if (typeof this.mapOpts.inline !== 'undefined') {
	      return this.mapOpts.inline
	    }

	    let annotation = this.mapOpts.annotation;
	    if (typeof annotation !== 'undefined' && annotation !== true) {
	      return false
	    }

	    if (this.previous().length) {
	      return this.previous().some(i => i.inline)
	    }
	    return true
	  }

	  isMap() {
	    if (typeof this.opts.map !== 'undefined') {
	      return !!this.opts.map
	    }
	    return this.previous().length > 0
	  }

	  isSourcesContent() {
	    if (typeof this.mapOpts.sourcesContent !== 'undefined') {
	      return this.mapOpts.sourcesContent
	    }
	    if (this.previous().length) {
	      return this.previous().some(i => i.withContent())
	    }
	    return true
	  }

	  outputFile() {
	    if (this.opts.to) {
	      return this.path(this.opts.to)
	    } else if (this.opts.from) {
	      return this.path(this.opts.from)
	    } else {
	      return 'to.css'
	    }
	  }

	  path(file) {
	    if (this.mapOpts.absolute) return file
	    if (file.charCodeAt(0) === 60 /* `<` */) return file
	    if (/^\w+:\/\//.test(file)) return file
	    let cached = this.memoizedPaths.get(file);
	    if (cached) return cached

	    let from = this.opts.to ? dirname(this.opts.to) : '.';

	    if (typeof this.mapOpts.annotation === 'string') {
	      from = dirname(resolve(from, this.mapOpts.annotation));
	    }

	    let path = relative(from, file);
	    this.memoizedPaths.set(file, path);

	    return path
	  }

	  previous() {
	    if (!this.previousMaps) {
	      this.previousMaps = [];
	      if (this.root) {
	        this.root.walk(node => {
	          if (node.source && node.source.input.map) {
	            let map = node.source.input.map;
	            if (!this.previousMaps.includes(map)) {
	              this.previousMaps.push(map);
	            }
	          }
	        });
	      } else {
	        let input = new Input(this.css, this.opts);
	        if (input.map) this.previousMaps.push(input.map);
	      }
	    }

	    return this.previousMaps
	  }

	  setSourcesContent() {
	    let already = {};
	    if (this.root) {
	      this.root.walk(node => {
	        if (node.source) {
	          let from = node.source.input.from;
	          if (from && !already[from]) {
	            already[from] = true;
	            let fromUrl = this.usesFileUrls
	              ? this.toFileUrl(from)
	              : this.toUrl(this.path(from));
	            this.map.setSourceContent(fromUrl, node.source.input.css);
	          }
	        }
	      });
	    } else if (this.css) {
	      let from = this.opts.from
	        ? this.toUrl(this.path(this.opts.from))
	        : '<no source>';
	      this.map.setSourceContent(from, this.css);
	    }
	  }

	  sourcePath(node) {
	    if (this.mapOpts.from) {
	      return this.toUrl(this.mapOpts.from)
	    } else if (this.usesFileUrls) {
	      return this.toFileUrl(node.source.input.from)
	    } else {
	      return this.toUrl(this.path(node.source.input.from))
	    }
	  }

	  toBase64(str) {
	    if (Buffer) {
	      return Buffer.from(str).toString('base64')
	    } else {
	      return window.btoa(unescape(encodeURIComponent(str)))
	    }
	  }

	  toFileUrl(path) {
	    let cached = this.memoizedFileURLs.get(path);
	    if (cached) return cached

	    if (pathToFileURL) {
	      let fileURL = pathToFileURL(path).toString();
	      this.memoizedFileURLs.set(path, fileURL);

	      return fileURL
	    } else {
	      throw new Error(
	        '`map.absolute` option is not available in this PostCSS build'
	      )
	    }
	  }

	  toUrl(path) {
	    let cached = this.memoizedURLs.get(path);
	    if (cached) return cached

	    if (sep === '\\') {
	      path = path.replace(/\\/g, '/');
	    }

	    let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent);
	    this.memoizedURLs.set(path, url);

	    return url
	  }
	}

	mapGenerator = MapGenerator;
	return mapGenerator;
}var comment;
var hasRequiredComment;

function requireComment () {
	if (hasRequiredComment) return comment;
	hasRequiredComment = 1;

	let Node = requireNode();

	class Comment extends Node {
	  constructor(defaults) {
	    super(defaults);
	    this.type = 'comment';
	  }
	}

	comment = Comment;
	Comment.default = Comment;
	return comment;
}var container;
var hasRequiredContainer;

function requireContainer () {
	if (hasRequiredContainer) return container;
	hasRequiredContainer = 1;

	let { isClean, my } = requireSymbols();
	let Declaration = requireDeclaration();
	let Comment = requireComment();
	let Node = requireNode();

	let parse, Rule, AtRule, Root;

	function cleanSource(nodes) {
	  return nodes.map(i => {
	    if (i.nodes) i.nodes = cleanSource(i.nodes);
	    delete i.source;
	    return i
	  })
	}

	function markDirtyUp(node) {
	  node[isClean] = false;
	  if (node.proxyOf.nodes) {
	    for (let i of node.proxyOf.nodes) {
	      markDirtyUp(i);
	    }
	  }
	}

	class Container extends Node {
	  append(...children) {
	    for (let child of children) {
	      let nodes = this.normalize(child, this.last);
	      for (let node of nodes) this.proxyOf.nodes.push(node);
	    }

	    this.markDirty();

	    return this
	  }

	  cleanRaws(keepBetween) {
	    super.cleanRaws(keepBetween);
	    if (this.nodes) {
	      for (let node of this.nodes) node.cleanRaws(keepBetween);
	    }
	  }

	  each(callback) {
	    if (!this.proxyOf.nodes) return undefined
	    let iterator = this.getIterator();

	    let index, result;
	    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
	      index = this.indexes[iterator];
	      result = callback(this.proxyOf.nodes[index], index);
	      if (result === false) break

	      this.indexes[iterator] += 1;
	    }

	    delete this.indexes[iterator];
	    return result
	  }

	  every(condition) {
	    return this.nodes.every(condition)
	  }

	  getIterator() {
	    if (!this.lastEach) this.lastEach = 0;
	    if (!this.indexes) this.indexes = {};

	    this.lastEach += 1;
	    let iterator = this.lastEach;
	    this.indexes[iterator] = 0;

	    return iterator
	  }

	  getProxyProcessor() {
	    return {
	      get(node, prop) {
	        if (prop === 'proxyOf') {
	          return node
	        } else if (!node[prop]) {
	          return node[prop]
	        } else if (
	          prop === 'each' ||
	          (typeof prop === 'string' && prop.startsWith('walk'))
	        ) {
	          return (...args) => {
	            return node[prop](
	              ...args.map(i => {
	                if (typeof i === 'function') {
	                  return (child, index) => i(child.toProxy(), index)
	                } else {
	                  return i
	                }
	              })
	            )
	          }
	        } else if (prop === 'every' || prop === 'some') {
	          return cb => {
	            return node[prop]((child, ...other) =>
	              cb(child.toProxy(), ...other)
	            )
	          }
	        } else if (prop === 'root') {
	          return () => node.root().toProxy()
	        } else if (prop === 'nodes') {
	          return node.nodes.map(i => i.toProxy())
	        } else if (prop === 'first' || prop === 'last') {
	          return node[prop].toProxy()
	        } else {
	          return node[prop]
	        }
	      },

	      set(node, prop, value) {
	        if (node[prop] === value) return true
	        node[prop] = value;
	        if (prop === 'name' || prop === 'params' || prop === 'selector') {
	          node.markDirty();
	        }
	        return true
	      }
	    }
	  }

	  index(child) {
	    if (typeof child === 'number') return child
	    if (child.proxyOf) child = child.proxyOf;
	    return this.proxyOf.nodes.indexOf(child)
	  }

	  insertAfter(exist, add) {
	    let existIndex = this.index(exist);
	    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse();
	    existIndex = this.index(exist);
	    for (let node of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node);

	    let index;
	    for (let id in this.indexes) {
	      index = this.indexes[id];
	      if (existIndex < index) {
	        this.indexes[id] = index + nodes.length;
	      }
	    }

	    this.markDirty();

	    return this
	  }

	  insertBefore(exist, add) {
	    let existIndex = this.index(exist);
	    let type = existIndex === 0 ? 'prepend' : false;
	    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex], type).reverse();
	    existIndex = this.index(exist);
	    for (let node of nodes) this.proxyOf.nodes.splice(existIndex, 0, node);

	    let index;
	    for (let id in this.indexes) {
	      index = this.indexes[id];
	      if (existIndex <= index) {
	        this.indexes[id] = index + nodes.length;
	      }
	    }

	    this.markDirty();

	    return this
	  }

	  normalize(nodes, sample) {
	    if (typeof nodes === 'string') {
	      nodes = cleanSource(parse(nodes).nodes);
	    } else if (Array.isArray(nodes)) {
	      nodes = nodes.slice(0);
	      for (let i of nodes) {
	        if (i.parent) i.parent.removeChild(i, 'ignore');
	      }
	    } else if (nodes.type === 'root' && this.type !== 'document') {
	      nodes = nodes.nodes.slice(0);
	      for (let i of nodes) {
	        if (i.parent) i.parent.removeChild(i, 'ignore');
	      }
	    } else if (nodes.type) {
	      nodes = [nodes];
	    } else if (nodes.prop) {
	      if (typeof nodes.value === 'undefined') {
	        throw new Error('Value field is missed in node creation')
	      } else if (typeof nodes.value !== 'string') {
	        nodes.value = String(nodes.value);
	      }
	      nodes = [new Declaration(nodes)];
	    } else if (nodes.selector) {
	      nodes = [new Rule(nodes)];
	    } else if (nodes.name) {
	      nodes = [new AtRule(nodes)];
	    } else if (nodes.text) {
	      nodes = [new Comment(nodes)];
	    } else {
	      throw new Error('Unknown node type in node creation')
	    }

	    let processed = nodes.map(i => {
	      /* c8 ignore next */
	      if (!i[my]) Container.rebuild(i);
	      i = i.proxyOf;
	      if (i.parent) i.parent.removeChild(i);
	      if (i[isClean]) markDirtyUp(i);
	      if (typeof i.raws.before === 'undefined') {
	        if (sample && typeof sample.raws.before !== 'undefined') {
	          i.raws.before = sample.raws.before.replace(/\S/g, '');
	        }
	      }
	      i.parent = this.proxyOf;
	      return i
	    });

	    return processed
	  }

	  prepend(...children) {
	    children = children.reverse();
	    for (let child of children) {
	      let nodes = this.normalize(child, this.first, 'prepend').reverse();
	      for (let node of nodes) this.proxyOf.nodes.unshift(node);
	      for (let id in this.indexes) {
	        this.indexes[id] = this.indexes[id] + nodes.length;
	      }
	    }

	    this.markDirty();

	    return this
	  }

	  push(child) {
	    child.parent = this;
	    this.proxyOf.nodes.push(child);
	    return this
	  }

	  removeAll() {
	    for (let node of this.proxyOf.nodes) node.parent = undefined;
	    this.proxyOf.nodes = [];

	    this.markDirty();

	    return this
	  }

	  removeChild(child) {
	    child = this.index(child);
	    this.proxyOf.nodes[child].parent = undefined;
	    this.proxyOf.nodes.splice(child, 1);

	    let index;
	    for (let id in this.indexes) {
	      index = this.indexes[id];
	      if (index >= child) {
	        this.indexes[id] = index - 1;
	      }
	    }

	    this.markDirty();

	    return this
	  }

	  replaceValues(pattern, opts, callback) {
	    if (!callback) {
	      callback = opts;
	      opts = {};
	    }

	    this.walkDecls(decl => {
	      if (opts.props && !opts.props.includes(decl.prop)) return
	      if (opts.fast && !decl.value.includes(opts.fast)) return

	      decl.value = decl.value.replace(pattern, callback);
	    });

	    this.markDirty();

	    return this
	  }

	  some(condition) {
	    return this.nodes.some(condition)
	  }

	  walk(callback) {
	    return this.each((child, i) => {
	      let result;
	      try {
	        result = callback(child, i);
	      } catch (e) {
	        throw child.addToError(e)
	      }
	      if (result !== false && child.walk) {
	        result = child.walk(callback);
	      }

	      return result
	    })
	  }

	  walkAtRules(name, callback) {
	    if (!callback) {
	      callback = name;
	      return this.walk((child, i) => {
	        if (child.type === 'atrule') {
	          return callback(child, i)
	        }
	      })
	    }
	    if (name instanceof RegExp) {
	      return this.walk((child, i) => {
	        if (child.type === 'atrule' && name.test(child.name)) {
	          return callback(child, i)
	        }
	      })
	    }
	    return this.walk((child, i) => {
	      if (child.type === 'atrule' && child.name === name) {
	        return callback(child, i)
	      }
	    })
	  }

	  walkComments(callback) {
	    return this.walk((child, i) => {
	      if (child.type === 'comment') {
	        return callback(child, i)
	      }
	    })
	  }

	  walkDecls(prop, callback) {
	    if (!callback) {
	      callback = prop;
	      return this.walk((child, i) => {
	        if (child.type === 'decl') {
	          return callback(child, i)
	        }
	      })
	    }
	    if (prop instanceof RegExp) {
	      return this.walk((child, i) => {
	        if (child.type === 'decl' && prop.test(child.prop)) {
	          return callback(child, i)
	        }
	      })
	    }
	    return this.walk((child, i) => {
	      if (child.type === 'decl' && child.prop === prop) {
	        return callback(child, i)
	      }
	    })
	  }

	  walkRules(selector, callback) {
	    if (!callback) {
	      callback = selector;

	      return this.walk((child, i) => {
	        if (child.type === 'rule') {
	          return callback(child, i)
	        }
	      })
	    }
	    if (selector instanceof RegExp) {
	      return this.walk((child, i) => {
	        if (child.type === 'rule' && selector.test(child.selector)) {
	          return callback(child, i)
	        }
	      })
	    }
	    return this.walk((child, i) => {
	      if (child.type === 'rule' && child.selector === selector) {
	        return callback(child, i)
	      }
	    })
	  }

	  get first() {
	    if (!this.proxyOf.nodes) return undefined
	    return this.proxyOf.nodes[0]
	  }

	  get last() {
	    if (!this.proxyOf.nodes) return undefined
	    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
	  }
	}

	Container.registerParse = dependant => {
	  parse = dependant;
	};

	Container.registerRule = dependant => {
	  Rule = dependant;
	};

	Container.registerAtRule = dependant => {
	  AtRule = dependant;
	};

	Container.registerRoot = dependant => {
	  Root = dependant;
	};

	container = Container;
	Container.default = Container;

	/* c8 ignore start */
	Container.rebuild = node => {
	  if (node.type === 'atrule') {
	    Object.setPrototypeOf(node, AtRule.prototype);
	  } else if (node.type === 'rule') {
	    Object.setPrototypeOf(node, Rule.prototype);
	  } else if (node.type === 'decl') {
	    Object.setPrototypeOf(node, Declaration.prototype);
	  } else if (node.type === 'comment') {
	    Object.setPrototypeOf(node, Comment.prototype);
	  } else if (node.type === 'root') {
	    Object.setPrototypeOf(node, Root.prototype);
	  }

	  node[my] = true;

	  if (node.nodes) {
	    node.nodes.forEach(child => {
	      Container.rebuild(child);
	    });
	  }
	};
	/* c8 ignore stop */
	return container;
}var document$1;
var hasRequiredDocument;

function requireDocument () {
	if (hasRequiredDocument) return document$1;
	hasRequiredDocument = 1;

	let Container = requireContainer();

	let LazyResult, Processor;

	class Document extends Container {
	  constructor(defaults) {
	    // type needs to be passed to super, otherwise child roots won't be normalized correctly
	    super({ type: 'document', ...defaults });

	    if (!this.nodes) {
	      this.nodes = [];
	    }
	  }

	  toResult(opts = {}) {
	    let lazy = new LazyResult(new Processor(), this, opts);

	    return lazy.stringify()
	  }
	}

	Document.registerLazyResult = dependant => {
	  LazyResult = dependant;
	};

	Document.registerProcessor = dependant => {
	  Processor = dependant;
	};

	document$1 = Document;
	Document.default = Document;
	return document$1;
}var warning;
var hasRequiredWarning;

function requireWarning () {
	if (hasRequiredWarning) return warning;
	hasRequiredWarning = 1;

	class Warning {
	  constructor(text, opts = {}) {
	    this.type = 'warning';
	    this.text = text;

	    if (opts.node && opts.node.source) {
	      let range = opts.node.rangeBy(opts);
	      this.line = range.start.line;
	      this.column = range.start.column;
	      this.endLine = range.end.line;
	      this.endColumn = range.end.column;
	    }

	    for (let opt in opts) this[opt] = opts[opt];
	  }

	  toString() {
	    if (this.node) {
	      return this.node.error(this.text, {
	        index: this.index,
	        plugin: this.plugin,
	        word: this.word
	      }).message
	    }

	    if (this.plugin) {
	      return this.plugin + ': ' + this.text
	    }

	    return this.text
	  }
	}

	warning = Warning;
	Warning.default = Warning;
	return warning;
}var result;
var hasRequiredResult;

function requireResult () {
	if (hasRequiredResult) return result;
	hasRequiredResult = 1;

	let Warning = requireWarning();

	class Result {
	  constructor(processor, root, opts) {
	    this.processor = processor;
	    this.messages = [];
	    this.root = root;
	    this.opts = opts;
	    this.css = undefined;
	    this.map = undefined;
	  }

	  toString() {
	    return this.css
	  }

	  warn(text, opts = {}) {
	    if (!opts.plugin) {
	      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
	        opts.plugin = this.lastPlugin.postcssPlugin;
	      }
	    }

	    let warning = new Warning(text, opts);
	    this.messages.push(warning);

	    return warning
	  }

	  warnings() {
	    return this.messages.filter(i => i.type === 'warning')
	  }

	  get content() {
	    return this.css
	  }
	}

	result = Result;
	Result.default = Result;
	return result;
}var tokenize;
var hasRequiredTokenize;

function requireTokenize () {
	if (hasRequiredTokenize) return tokenize;
	hasRequiredTokenize = 1;

	const SINGLE_QUOTE = "'".charCodeAt(0);
	const DOUBLE_QUOTE = '"'.charCodeAt(0);
	const BACKSLASH = '\\'.charCodeAt(0);
	const SLASH = '/'.charCodeAt(0);
	const NEWLINE = '\n'.charCodeAt(0);
	const SPACE = ' '.charCodeAt(0);
	const FEED = '\f'.charCodeAt(0);
	const TAB = '\t'.charCodeAt(0);
	const CR = '\r'.charCodeAt(0);
	const OPEN_SQUARE = '['.charCodeAt(0);
	const CLOSE_SQUARE = ']'.charCodeAt(0);
	const OPEN_PARENTHESES = '('.charCodeAt(0);
	const CLOSE_PARENTHESES = ')'.charCodeAt(0);
	const OPEN_CURLY = '{'.charCodeAt(0);
	const CLOSE_CURLY = '}'.charCodeAt(0);
	const SEMICOLON = ';'.charCodeAt(0);
	const ASTERISK = '*'.charCodeAt(0);
	const COLON = ':'.charCodeAt(0);
	const AT = '@'.charCodeAt(0);

	const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
	const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
	const RE_BAD_BRACKET = /.[\r\n"'(/\\]/;
	const RE_HEX_ESCAPE = /[\da-f]/i;

	tokenize = function tokenizer(input, options = {}) {
	  let css = input.css.valueOf();
	  let ignore = options.ignoreErrors;

	  let code, next, quote, content, escape;
	  let escaped, escapePos, prev, n, currentToken;

	  let length = css.length;
	  let pos = 0;
	  let buffer = [];
	  let returned = [];

	  function position() {
	    return pos
	  }

	  function unclosed(what) {
	    throw input.error('Unclosed ' + what, pos)
	  }

	  function endOfFile() {
	    return returned.length === 0 && pos >= length
	  }

	  function nextToken(opts) {
	    if (returned.length) return returned.pop()
	    if (pos >= length) return

	    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;

	    code = css.charCodeAt(pos);

	    switch (code) {
	      case NEWLINE:
	      case SPACE:
	      case TAB:
	      case CR:
	      case FEED: {
	        next = pos;
	        do {
	          next += 1;
	          code = css.charCodeAt(next);
	        } while (
	          code === SPACE ||
	          code === NEWLINE ||
	          code === TAB ||
	          code === CR ||
	          code === FEED
	        )

	        currentToken = ['space', css.slice(pos, next)];
	        pos = next - 1;
	        break
	      }

	      case OPEN_SQUARE:
	      case CLOSE_SQUARE:
	      case OPEN_CURLY:
	      case CLOSE_CURLY:
	      case COLON:
	      case SEMICOLON:
	      case CLOSE_PARENTHESES: {
	        let controlChar = String.fromCharCode(code);
	        currentToken = [controlChar, controlChar, pos];
	        break
	      }

	      case OPEN_PARENTHESES: {
	        prev = buffer.length ? buffer.pop()[1] : '';
	        n = css.charCodeAt(pos + 1);
	        if (
	          prev === 'url' &&
	          n !== SINGLE_QUOTE &&
	          n !== DOUBLE_QUOTE &&
	          n !== SPACE &&
	          n !== NEWLINE &&
	          n !== TAB &&
	          n !== FEED &&
	          n !== CR
	        ) {
	          next = pos;
	          do {
	            escaped = false;
	            next = css.indexOf(')', next + 1);
	            if (next === -1) {
	              if (ignore || ignoreUnclosed) {
	                next = pos;
	                break
	              } else {
	                unclosed('bracket');
	              }
	            }
	            escapePos = next;
	            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
	              escapePos -= 1;
	              escaped = !escaped;
	            }
	          } while (escaped)

	          currentToken = ['brackets', css.slice(pos, next + 1), pos, next];

	          pos = next;
	        } else {
	          next = css.indexOf(')', pos + 1);
	          content = css.slice(pos, next + 1);

	          if (next === -1 || RE_BAD_BRACKET.test(content)) {
	            currentToken = ['(', '(', pos];
	          } else {
	            currentToken = ['brackets', content, pos, next];
	            pos = next;
	          }
	        }

	        break
	      }

	      case SINGLE_QUOTE:
	      case DOUBLE_QUOTE: {
	        quote = code === SINGLE_QUOTE ? "'" : '"';
	        next = pos;
	        do {
	          escaped = false;
	          next = css.indexOf(quote, next + 1);
	          if (next === -1) {
	            if (ignore || ignoreUnclosed) {
	              next = pos + 1;
	              break
	            } else {
	              unclosed('string');
	            }
	          }
	          escapePos = next;
	          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
	            escapePos -= 1;
	            escaped = !escaped;
	          }
	        } while (escaped)

	        currentToken = ['string', css.slice(pos, next + 1), pos, next];
	        pos = next;
	        break
	      }

	      case AT: {
	        RE_AT_END.lastIndex = pos + 1;
	        RE_AT_END.test(css);
	        if (RE_AT_END.lastIndex === 0) {
	          next = css.length - 1;
	        } else {
	          next = RE_AT_END.lastIndex - 2;
	        }

	        currentToken = ['at-word', css.slice(pos, next + 1), pos, next];

	        pos = next;
	        break
	      }

	      case BACKSLASH: {
	        next = pos;
	        escape = true;
	        while (css.charCodeAt(next + 1) === BACKSLASH) {
	          next += 1;
	          escape = !escape;
	        }
	        code = css.charCodeAt(next + 1);
	        if (
	          escape &&
	          code !== SLASH &&
	          code !== SPACE &&
	          code !== NEWLINE &&
	          code !== TAB &&
	          code !== CR &&
	          code !== FEED
	        ) {
	          next += 1;
	          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
	            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
	              next += 1;
	            }
	            if (css.charCodeAt(next + 1) === SPACE) {
	              next += 1;
	            }
	          }
	        }

	        currentToken = ['word', css.slice(pos, next + 1), pos, next];

	        pos = next;
	        break
	      }

	      default: {
	        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
	          next = css.indexOf('*/', pos + 2) + 1;
	          if (next === 0) {
	            if (ignore || ignoreUnclosed) {
	              next = css.length;
	            } else {
	              unclosed('comment');
	            }
	          }

	          currentToken = ['comment', css.slice(pos, next + 1), pos, next];
	          pos = next;
	        } else {
	          RE_WORD_END.lastIndex = pos + 1;
	          RE_WORD_END.test(css);
	          if (RE_WORD_END.lastIndex === 0) {
	            next = css.length - 1;
	          } else {
	            next = RE_WORD_END.lastIndex - 2;
	          }

	          currentToken = ['word', css.slice(pos, next + 1), pos, next];
	          buffer.push(currentToken);
	          pos = next;
	        }

	        break
	      }
	    }

	    pos++;
	    return currentToken
	  }

	  function back(token) {
	    returned.push(token);
	  }

	  return {
	    back,
	    endOfFile,
	    nextToken,
	    position
	  }
	};
	return tokenize;
}var atRule;
var hasRequiredAtRule;

function requireAtRule () {
	if (hasRequiredAtRule) return atRule;
	hasRequiredAtRule = 1;

	let Container = requireContainer();

	class AtRule extends Container {
	  constructor(defaults) {
	    super(defaults);
	    this.type = 'atrule';
	  }

	  append(...children) {
	    if (!this.proxyOf.nodes) this.nodes = [];
	    return super.append(...children)
	  }

	  prepend(...children) {
	    if (!this.proxyOf.nodes) this.nodes = [];
	    return super.prepend(...children)
	  }
	}

	atRule = AtRule;
	AtRule.default = AtRule;

	Container.registerAtRule(AtRule);
	return atRule;
}var root;
var hasRequiredRoot;

function requireRoot () {
	if (hasRequiredRoot) return root;
	hasRequiredRoot = 1;

	let Container = requireContainer();

	let LazyResult, Processor;

	class Root extends Container {
	  constructor(defaults) {
	    super(defaults);
	    this.type = 'root';
	    if (!this.nodes) this.nodes = [];
	  }

	  normalize(child, sample, type) {
	    let nodes = super.normalize(child);

	    if (sample) {
	      if (type === 'prepend') {
	        if (this.nodes.length > 1) {
	          sample.raws.before = this.nodes[1].raws.before;
	        } else {
	          delete sample.raws.before;
	        }
	      } else if (this.first !== sample) {
	        for (let node of nodes) {
	          node.raws.before = sample.raws.before;
	        }
	      }
	    }

	    return nodes
	  }

	  removeChild(child, ignore) {
	    let index = this.index(child);

	    if (!ignore && index === 0 && this.nodes.length > 1) {
	      this.nodes[1].raws.before = this.nodes[index].raws.before;
	    }

	    return super.removeChild(child)
	  }

	  toResult(opts = {}) {
	    let lazy = new LazyResult(new Processor(), this, opts);
	    return lazy.stringify()
	  }
	}

	Root.registerLazyResult = dependant => {
	  LazyResult = dependant;
	};

	Root.registerProcessor = dependant => {
	  Processor = dependant;
	};

	root = Root;
	Root.default = Root;

	Container.registerRoot(Root);
	return root;
}var list_1;
var hasRequiredList;

function requireList () {
	if (hasRequiredList) return list_1;
	hasRequiredList = 1;

	let list = {
	  comma(string) {
	    return list.split(string, [','], true)
	  },

	  space(string) {
	    let spaces = [' ', '\n', '\t'];
	    return list.split(string, spaces)
	  },

	  split(string, separators, last) {
	    let array = [];
	    let current = '';
	    let split = false;

	    let func = 0;
	    let inQuote = false;
	    let prevQuote = '';
	    let escape = false;

	    for (let letter of string) {
	      if (escape) {
	        escape = false;
	      } else if (letter === '\\') {
	        escape = true;
	      } else if (inQuote) {
	        if (letter === prevQuote) {
	          inQuote = false;
	        }
	      } else if (letter === '"' || letter === "'") {
	        inQuote = true;
	        prevQuote = letter;
	      } else if (letter === '(') {
	        func += 1;
	      } else if (letter === ')') {
	        if (func > 0) func -= 1;
	      } else if (func === 0) {
	        if (separators.includes(letter)) split = true;
	      }

	      if (split) {
	        if (current !== '') array.push(current.trim());
	        current = '';
	        split = false;
	      } else {
	        current += letter;
	      }
	    }

	    if (last || current !== '') array.push(current.trim());
	    return array
	  }
	};

	list_1 = list;
	list.default = list;
	return list_1;
}var rule;
var hasRequiredRule;

function requireRule () {
	if (hasRequiredRule) return rule;
	hasRequiredRule = 1;

	let Container = requireContainer();
	let list = requireList();

	class Rule extends Container {
	  constructor(defaults) {
	    super(defaults);
	    this.type = 'rule';
	    if (!this.nodes) this.nodes = [];
	  }

	  get selectors() {
	    return list.comma(this.selector)
	  }

	  set selectors(values) {
	    let match = this.selector ? this.selector.match(/,\s*/) : null;
	    let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
	    this.selector = values.join(sep);
	  }
	}

	rule = Rule;
	Rule.default = Rule;

	Container.registerRule(Rule);
	return rule;
}var parser;
var hasRequiredParser;

function requireParser () {
	if (hasRequiredParser) return parser;
	hasRequiredParser = 1;

	let Declaration = requireDeclaration();
	let tokenizer = requireTokenize();
	let Comment = requireComment();
	let AtRule = requireAtRule();
	let Root = requireRoot();
	let Rule = requireRule();

	const SAFE_COMMENT_NEIGHBOR = {
	  empty: true,
	  space: true
	};

	function findLastWithPosition(tokens) {
	  for (let i = tokens.length - 1; i >= 0; i--) {
	    let token = tokens[i];
	    let pos = token[3] || token[2];
	    if (pos) return pos
	  }
	}

	class Parser {
	  constructor(input) {
	    this.input = input;

	    this.root = new Root();
	    this.current = this.root;
	    this.spaces = '';
	    this.semicolon = false;
	    this.customProperty = false;

	    this.createTokenizer();
	    this.root.source = { input, start: { column: 1, line: 1, offset: 0 } };
	  }

	  atrule(token) {
	    let node = new AtRule();
	    node.name = token[1].slice(1);
	    if (node.name === '') {
	      this.unnamedAtrule(node, token);
	    }
	    this.init(node, token[2]);

	    let type;
	    let prev;
	    let shift;
	    let last = false;
	    let open = false;
	    let params = [];
	    let brackets = [];

	    while (!this.tokenizer.endOfFile()) {
	      token = this.tokenizer.nextToken();
	      type = token[0];

	      if (type === '(' || type === '[') {
	        brackets.push(type === '(' ? ')' : ']');
	      } else if (type === '{' && brackets.length > 0) {
	        brackets.push('}');
	      } else if (type === brackets[brackets.length - 1]) {
	        brackets.pop();
	      }

	      if (brackets.length === 0) {
	        if (type === ';') {
	          node.source.end = this.getPosition(token[2]);
	          node.source.end.offset++;
	          this.semicolon = true;
	          break
	        } else if (type === '{') {
	          open = true;
	          break
	        } else if (type === '}') {
	          if (params.length > 0) {
	            shift = params.length - 1;
	            prev = params[shift];
	            while (prev && prev[0] === 'space') {
	              prev = params[--shift];
	            }
	            if (prev) {
	              node.source.end = this.getPosition(prev[3] || prev[2]);
	              node.source.end.offset++;
	            }
	          }
	          this.end(token);
	          break
	        } else {
	          params.push(token);
	        }
	      } else {
	        params.push(token);
	      }

	      if (this.tokenizer.endOfFile()) {
	        last = true;
	        break
	      }
	    }

	    node.raws.between = this.spacesAndCommentsFromEnd(params);
	    if (params.length) {
	      node.raws.afterName = this.spacesAndCommentsFromStart(params);
	      this.raw(node, 'params', params);
	      if (last) {
	        token = params[params.length - 1];
	        node.source.end = this.getPosition(token[3] || token[2]);
	        node.source.end.offset++;
	        this.spaces = node.raws.between;
	        node.raws.between = '';
	      }
	    } else {
	      node.raws.afterName = '';
	      node.params = '';
	    }

	    if (open) {
	      node.nodes = [];
	      this.current = node;
	    }
	  }

	  checkMissedSemicolon(tokens) {
	    let colon = this.colon(tokens);
	    if (colon === false) return

	    let founded = 0;
	    let token;
	    for (let j = colon - 1; j >= 0; j--) {
	      token = tokens[j];
	      if (token[0] !== 'space') {
	        founded += 1;
	        if (founded === 2) break
	      }
	    }
	    // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
	    // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
	    // And because we need it after that one we do +1 to get the next one.
	    throw this.input.error(
	      'Missed semicolon',
	      token[0] === 'word' ? token[3] + 1 : token[2]
	    )
	  }

	  colon(tokens) {
	    let brackets = 0;
	    let token, type, prev;
	    for (let [i, element] of tokens.entries()) {
	      token = element;
	      type = token[0];

	      if (type === '(') {
	        brackets += 1;
	      }
	      if (type === ')') {
	        brackets -= 1;
	      }
	      if (brackets === 0 && type === ':') {
	        if (!prev) {
	          this.doubleColon(token);
	        } else if (prev[0] === 'word' && prev[1] === 'progid') {
	          continue
	        } else {
	          return i
	        }
	      }

	      prev = token;
	    }
	    return false
	  }

	  comment(token) {
	    let node = new Comment();
	    this.init(node, token[2]);
	    node.source.end = this.getPosition(token[3] || token[2]);
	    node.source.end.offset++;

	    let text = token[1].slice(2, -2);
	    if (/^\s*$/.test(text)) {
	      node.text = '';
	      node.raws.left = text;
	      node.raws.right = '';
	    } else {
	      let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
	      node.text = match[2];
	      node.raws.left = match[1];
	      node.raws.right = match[3];
	    }
	  }

	  createTokenizer() {
	    this.tokenizer = tokenizer(this.input);
	  }

	  decl(tokens, customProperty) {
	    let node = new Declaration();
	    this.init(node, tokens[0][2]);

	    let last = tokens[tokens.length - 1];
	    if (last[0] === ';') {
	      this.semicolon = true;
	      tokens.pop();
	    }

	    node.source.end = this.getPosition(
	      last[3] || last[2] || findLastWithPosition(tokens)
	    );
	    node.source.end.offset++;

	    while (tokens[0][0] !== 'word') {
	      if (tokens.length === 1) this.unknownWord(tokens);
	      node.raws.before += tokens.shift()[1];
	    }
	    node.source.start = this.getPosition(tokens[0][2]);

	    node.prop = '';
	    while (tokens.length) {
	      let type = tokens[0][0];
	      if (type === ':' || type === 'space' || type === 'comment') {
	        break
	      }
	      node.prop += tokens.shift()[1];
	    }

	    node.raws.between = '';

	    let token;
	    while (tokens.length) {
	      token = tokens.shift();

	      if (token[0] === ':') {
	        node.raws.between += token[1];
	        break
	      } else {
	        if (token[0] === 'word' && /\w/.test(token[1])) {
	          this.unknownWord([token]);
	        }
	        node.raws.between += token[1];
	      }
	    }

	    if (node.prop[0] === '_' || node.prop[0] === '*') {
	      node.raws.before += node.prop[0];
	      node.prop = node.prop.slice(1);
	    }

	    let firstSpaces = [];
	    let next;
	    while (tokens.length) {
	      next = tokens[0][0];
	      if (next !== 'space' && next !== 'comment') break
	      firstSpaces.push(tokens.shift());
	    }

	    this.precheckMissedSemicolon(tokens);

	    for (let i = tokens.length - 1; i >= 0; i--) {
	      token = tokens[i];
	      if (token[1].toLowerCase() === '!important') {
	        node.important = true;
	        let string = this.stringFrom(tokens, i);
	        string = this.spacesFromEnd(tokens) + string;
	        if (string !== ' !important') node.raws.important = string;
	        break
	      } else if (token[1].toLowerCase() === 'important') {
	        let cache = tokens.slice(0);
	        let str = '';
	        for (let j = i; j > 0; j--) {
	          let type = cache[j][0];
	          if (str.trim().indexOf('!') === 0 && type !== 'space') {
	            break
	          }
	          str = cache.pop()[1] + str;
	        }
	        if (str.trim().indexOf('!') === 0) {
	          node.important = true;
	          node.raws.important = str;
	          tokens = cache;
	        }
	      }

	      if (token[0] !== 'space' && token[0] !== 'comment') {
	        break
	      }
	    }

	    let hasWord = tokens.some(i => i[0] !== 'space' && i[0] !== 'comment');

	    if (hasWord) {
	      node.raws.between += firstSpaces.map(i => i[1]).join('');
	      firstSpaces = [];
	    }
	    this.raw(node, 'value', firstSpaces.concat(tokens), customProperty);

	    if (node.value.includes(':') && !customProperty) {
	      this.checkMissedSemicolon(tokens);
	    }
	  }

	  doubleColon(token) {
	    throw this.input.error(
	      'Double colon',
	      { offset: token[2] },
	      { offset: token[2] + token[1].length }
	    )
	  }

	  emptyRule(token) {
	    let node = new Rule();
	    this.init(node, token[2]);
	    node.selector = '';
	    node.raws.between = '';
	    this.current = node;
	  }

	  end(token) {
	    if (this.current.nodes && this.current.nodes.length) {
	      this.current.raws.semicolon = this.semicolon;
	    }
	    this.semicolon = false;

	    this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	    this.spaces = '';

	    if (this.current.parent) {
	      this.current.source.end = this.getPosition(token[2]);
	      this.current.source.end.offset++;
	      this.current = this.current.parent;
	    } else {
	      this.unexpectedClose(token);
	    }
	  }

	  endFile() {
	    if (this.current.parent) this.unclosedBlock();
	    if (this.current.nodes && this.current.nodes.length) {
	      this.current.raws.semicolon = this.semicolon;
	    }
	    this.current.raws.after = (this.current.raws.after || '') + this.spaces;
	    this.root.source.end = this.getPosition(this.tokenizer.position());
	  }

	  freeSemicolon(token) {
	    this.spaces += token[1];
	    if (this.current.nodes) {
	      let prev = this.current.nodes[this.current.nodes.length - 1];
	      if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
	        prev.raws.ownSemicolon = this.spaces;
	        this.spaces = '';
	      }
	    }
	  }

	  // Helpers

	  getPosition(offset) {
	    let pos = this.input.fromOffset(offset);
	    return {
	      column: pos.col,
	      line: pos.line,
	      offset
	    }
	  }

	  init(node, offset) {
	    this.current.push(node);
	    node.source = {
	      input: this.input,
	      start: this.getPosition(offset)
	    };
	    node.raws.before = this.spaces;
	    this.spaces = '';
	    if (node.type !== 'comment') this.semicolon = false;
	  }

	  other(start) {
	    let end = false;
	    let type = null;
	    let colon = false;
	    let bracket = null;
	    let brackets = [];
	    let customProperty = start[1].startsWith('--');

	    let tokens = [];
	    let token = start;
	    while (token) {
	      type = token[0];
	      tokens.push(token);

	      if (type === '(' || type === '[') {
	        if (!bracket) bracket = token;
	        brackets.push(type === '(' ? ')' : ']');
	      } else if (customProperty && colon && type === '{') {
	        if (!bracket) bracket = token;
	        brackets.push('}');
	      } else if (brackets.length === 0) {
	        if (type === ';') {
	          if (colon) {
	            this.decl(tokens, customProperty);
	            return
	          } else {
	            break
	          }
	        } else if (type === '{') {
	          this.rule(tokens);
	          return
	        } else if (type === '}') {
	          this.tokenizer.back(tokens.pop());
	          end = true;
	          break
	        } else if (type === ':') {
	          colon = true;
	        }
	      } else if (type === brackets[brackets.length - 1]) {
	        brackets.pop();
	        if (brackets.length === 0) bracket = null;
	      }

	      token = this.tokenizer.nextToken();
	    }

	    if (this.tokenizer.endOfFile()) end = true;
	    if (brackets.length > 0) this.unclosedBracket(bracket);

	    if (end && colon) {
	      if (!customProperty) {
	        while (tokens.length) {
	          token = tokens[tokens.length - 1][0];
	          if (token !== 'space' && token !== 'comment') break
	          this.tokenizer.back(tokens.pop());
	        }
	      }
	      this.decl(tokens, customProperty);
	    } else {
	      this.unknownWord(tokens);
	    }
	  }

	  parse() {
	    let token;
	    while (!this.tokenizer.endOfFile()) {
	      token = this.tokenizer.nextToken();

	      switch (token[0]) {
	        case 'space':
	          this.spaces += token[1];
	          break

	        case ';':
	          this.freeSemicolon(token);
	          break

	        case '}':
	          this.end(token);
	          break

	        case 'comment':
	          this.comment(token);
	          break

	        case 'at-word':
	          this.atrule(token);
	          break

	        case '{':
	          this.emptyRule(token);
	          break

	        default:
	          this.other(token);
	          break
	      }
	    }
	    this.endFile();
	  }

	  precheckMissedSemicolon(/* tokens */) {
	    // Hook for Safe Parser
	  }

	  raw(node, prop, tokens, customProperty) {
	    let token, type;
	    let length = tokens.length;
	    let value = '';
	    let clean = true;
	    let next, prev;

	    for (let i = 0; i < length; i += 1) {
	      token = tokens[i];
	      type = token[0];
	      if (type === 'space' && i === length - 1 && !customProperty) {
	        clean = false;
	      } else if (type === 'comment') {
	        prev = tokens[i - 1] ? tokens[i - 1][0] : 'empty';
	        next = tokens[i + 1] ? tokens[i + 1][0] : 'empty';
	        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
	          if (value.slice(-1) === ',') {
	            clean = false;
	          } else {
	            value += token[1];
	          }
	        } else {
	          clean = false;
	        }
	      } else {
	        value += token[1];
	      }
	    }
	    if (!clean) {
	      let raw = tokens.reduce((all, i) => all + i[1], '');
	      node.raws[prop] = { raw, value };
	    }
	    node[prop] = value;
	  }

	  rule(tokens) {
	    tokens.pop();

	    let node = new Rule();
	    this.init(node, tokens[0][2]);

	    node.raws.between = this.spacesAndCommentsFromEnd(tokens);
	    this.raw(node, 'selector', tokens);
	    this.current = node;
	  }

	  spacesAndCommentsFromEnd(tokens) {
	    let lastTokenType;
	    let spaces = '';
	    while (tokens.length) {
	      lastTokenType = tokens[tokens.length - 1][0];
	      if (lastTokenType !== 'space' && lastTokenType !== 'comment') break
	      spaces = tokens.pop()[1] + spaces;
	    }
	    return spaces
	  }

	  // Errors

	  spacesAndCommentsFromStart(tokens) {
	    let next;
	    let spaces = '';
	    while (tokens.length) {
	      next = tokens[0][0];
	      if (next !== 'space' && next !== 'comment') break
	      spaces += tokens.shift()[1];
	    }
	    return spaces
	  }

	  spacesFromEnd(tokens) {
	    let lastTokenType;
	    let spaces = '';
	    while (tokens.length) {
	      lastTokenType = tokens[tokens.length - 1][0];
	      if (lastTokenType !== 'space') break
	      spaces = tokens.pop()[1] + spaces;
	    }
	    return spaces
	  }

	  stringFrom(tokens, from) {
	    let result = '';
	    for (let i = from; i < tokens.length; i++) {
	      result += tokens[i][1];
	    }
	    tokens.splice(from, tokens.length - from);
	    return result
	  }

	  unclosedBlock() {
	    let pos = this.current.source.start;
	    throw this.input.error('Unclosed block', pos.line, pos.column)
	  }

	  unclosedBracket(bracket) {
	    throw this.input.error(
	      'Unclosed bracket',
	      { offset: bracket[2] },
	      { offset: bracket[2] + 1 }
	    )
	  }

	  unexpectedClose(token) {
	    throw this.input.error(
	      'Unexpected }',
	      { offset: token[2] },
	      { offset: token[2] + 1 }
	    )
	  }

	  unknownWord(tokens) {
	    throw this.input.error(
	      'Unknown word',
	      { offset: tokens[0][2] },
	      { offset: tokens[0][2] + tokens[0][1].length }
	    )
	  }

	  unnamedAtrule(node, token) {
	    throw this.input.error(
	      'At-rule without name',
	      { offset: token[2] },
	      { offset: token[2] + token[1].length }
	    )
	  }
	}

	parser = Parser;
	return parser;
}var parse_1;
var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse_1;
	hasRequiredParse = 1;

	let Container = requireContainer();
	let Parser = requireParser();
	let Input = requireInput();

	function parse(css, opts) {
	  let input = new Input(css, opts);
	  let parser = new Parser(input);
	  try {
	    parser.parse();
	  } catch (e) {
	    throw e
	  }

	  return parser.root
	}

	parse_1 = parse;
	parse.default = parse;

	Container.registerParse(parse);
	return parse_1;
}var lazyResult;
var hasRequiredLazyResult;

function requireLazyResult () {
	if (hasRequiredLazyResult) return lazyResult;
	hasRequiredLazyResult = 1;

	let { isClean, my } = requireSymbols();
	let MapGenerator = requireMapGenerator();
	let stringify = requireStringify();
	let Container = requireContainer();
	let Document = requireDocument();
	let Result = requireResult();
	let parse = requireParse();
	let Root = requireRoot();

	const TYPE_TO_CLASS_NAME = {
	  atrule: 'AtRule',
	  comment: 'Comment',
	  decl: 'Declaration',
	  document: 'Document',
	  root: 'Root',
	  rule: 'Rule'
	};

	const PLUGIN_PROPS = {
	  AtRule: true,
	  AtRuleExit: true,
	  Comment: true,
	  CommentExit: true,
	  Declaration: true,
	  DeclarationExit: true,
	  Document: true,
	  DocumentExit: true,
	  Once: true,
	  OnceExit: true,
	  postcssPlugin: true,
	  prepare: true,
	  Root: true,
	  RootExit: true,
	  Rule: true,
	  RuleExit: true
	};

	const NOT_VISITORS = {
	  Once: true,
	  postcssPlugin: true,
	  prepare: true
	};

	const CHILDREN = 0;

	function isPromise(obj) {
	  return typeof obj === 'object' && typeof obj.then === 'function'
	}

	function getEvents(node) {
	  let key = false;
	  let type = TYPE_TO_CLASS_NAME[node.type];
	  if (node.type === 'decl') {
	    key = node.prop.toLowerCase();
	  } else if (node.type === 'atrule') {
	    key = node.name.toLowerCase();
	  }

	  if (key && node.append) {
	    return [
	      type,
	      type + '-' + key,
	      CHILDREN,
	      type + 'Exit',
	      type + 'Exit-' + key
	    ]
	  } else if (key) {
	    return [type, type + '-' + key, type + 'Exit', type + 'Exit-' + key]
	  } else if (node.append) {
	    return [type, CHILDREN, type + 'Exit']
	  } else {
	    return [type, type + 'Exit']
	  }
	}

	function toStack(node) {
	  let events;
	  if (node.type === 'document') {
	    events = ['Document', CHILDREN, 'DocumentExit'];
	  } else if (node.type === 'root') {
	    events = ['Root', CHILDREN, 'RootExit'];
	  } else {
	    events = getEvents(node);
	  }

	  return {
	    eventIndex: 0,
	    events,
	    iterator: 0,
	    node,
	    visitorIndex: 0,
	    visitors: []
	  }
	}

	function cleanMarks(node) {
	  node[isClean] = false;
	  if (node.nodes) node.nodes.forEach(i => cleanMarks(i));
	  return node
	}

	let postcss = {};

	class LazyResult {
	  constructor(processor, css, opts) {
	    this.stringified = false;
	    this.processed = false;

	    let root;
	    if (
	      typeof css === 'object' &&
	      css !== null &&
	      (css.type === 'root' || css.type === 'document')
	    ) {
	      root = cleanMarks(css);
	    } else if (css instanceof LazyResult || css instanceof Result) {
	      root = cleanMarks(css.root);
	      if (css.map) {
	        if (typeof opts.map === 'undefined') opts.map = {};
	        if (!opts.map.inline) opts.map.inline = false;
	        opts.map.prev = css.map;
	      }
	    } else {
	      let parser = parse;
	      if (opts.syntax) parser = opts.syntax.parse;
	      if (opts.parser) parser = opts.parser;
	      if (parser.parse) parser = parser.parse;

	      try {
	        root = parser(css, opts);
	      } catch (error) {
	        this.processed = true;
	        this.error = error;
	      }

	      if (root && !root[my]) {
	        /* c8 ignore next 2 */
	        Container.rebuild(root);
	      }
	    }

	    this.result = new Result(processor, root, opts);
	    this.helpers = { ...postcss, postcss, result: this.result };
	    this.plugins = this.processor.plugins.map(plugin => {
	      if (typeof plugin === 'object' && plugin.prepare) {
	        return { ...plugin, ...plugin.prepare(this.result) }
	      } else {
	        return plugin
	      }
	    });
	  }

	  async() {
	    if (this.error) return Promise.reject(this.error)
	    if (this.processed) return Promise.resolve(this.result)
	    if (!this.processing) {
	      this.processing = this.runAsync();
	    }
	    return this.processing
	  }

	  catch(onRejected) {
	    return this.async().catch(onRejected)
	  }

	  finally(onFinally) {
	    return this.async().then(onFinally, onFinally)
	  }

	  getAsyncError() {
	    throw new Error('Use process(css).then(cb) to work with async plugins')
	  }

	  handleError(error, node) {
	    let plugin = this.result.lastPlugin;
	    try {
	      if (node) node.addToError(error);
	      this.error = error;
	      if (error.name === 'CssSyntaxError' && !error.plugin) {
	        error.plugin = plugin.postcssPlugin;
	        error.setMessage();
	      } else if (plugin.postcssVersion) {
	        if ("production" !== 'production') ;
	      }
	    } catch (err) {
	      /* c8 ignore next 3 */
	      // eslint-disable-next-line no-console
	      if (console && console.error) console.error(err);
	    }
	    return error
	  }

	  prepareVisitors() {
	    this.listeners = {};
	    let add = (plugin, type, cb) => {
	      if (!this.listeners[type]) this.listeners[type] = [];
	      this.listeners[type].push([plugin, cb]);
	    };
	    for (let plugin of this.plugins) {
	      if (typeof plugin === 'object') {
	        for (let event in plugin) {
	          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
	            throw new Error(
	              `Unknown event ${event} in ${plugin.postcssPlugin}. ` +
	                `Try to update PostCSS (${this.processor.version} now).`
	            )
	          }
	          if (!NOT_VISITORS[event]) {
	            if (typeof plugin[event] === 'object') {
	              for (let filter in plugin[event]) {
	                if (filter === '*') {
	                  add(plugin, event, plugin[event][filter]);
	                } else {
	                  add(
	                    plugin,
	                    event + '-' + filter.toLowerCase(),
	                    plugin[event][filter]
	                  );
	                }
	              }
	            } else if (typeof plugin[event] === 'function') {
	              add(plugin, event, plugin[event]);
	            }
	          }
	        }
	      }
	    }
	    this.hasListener = Object.keys(this.listeners).length > 0;
	  }

	  async runAsync() {
	    this.plugin = 0;
	    for (let i = 0; i < this.plugins.length; i++) {
	      let plugin = this.plugins[i];
	      let promise = this.runOnRoot(plugin);
	      if (isPromise(promise)) {
	        try {
	          await promise;
	        } catch (error) {
	          throw this.handleError(error)
	        }
	      }
	    }

	    this.prepareVisitors();
	    if (this.hasListener) {
	      let root = this.result.root;
	      while (!root[isClean]) {
	        root[isClean] = true;
	        let stack = [toStack(root)];
	        while (stack.length > 0) {
	          let promise = this.visitTick(stack);
	          if (isPromise(promise)) {
	            try {
	              await promise;
	            } catch (e) {
	              let node = stack[stack.length - 1].node;
	              throw this.handleError(e, node)
	            }
	          }
	        }
	      }

	      if (this.listeners.OnceExit) {
	        for (let [plugin, visitor] of this.listeners.OnceExit) {
	          this.result.lastPlugin = plugin;
	          try {
	            if (root.type === 'document') {
	              let roots = root.nodes.map(subRoot =>
	                visitor(subRoot, this.helpers)
	              );

	              await Promise.all(roots);
	            } else {
	              await visitor(root, this.helpers);
	            }
	          } catch (e) {
	            throw this.handleError(e)
	          }
	        }
	      }
	    }

	    this.processed = true;
	    return this.stringify()
	  }

	  runOnRoot(plugin) {
	    this.result.lastPlugin = plugin;
	    try {
	      if (typeof plugin === 'object' && plugin.Once) {
	        if (this.result.root.type === 'document') {
	          let roots = this.result.root.nodes.map(root =>
	            plugin.Once(root, this.helpers)
	          );

	          if (isPromise(roots[0])) {
	            return Promise.all(roots)
	          }

	          return roots
	        }

	        return plugin.Once(this.result.root, this.helpers)
	      } else if (typeof plugin === 'function') {
	        return plugin(this.result.root, this.result)
	      }
	    } catch (error) {
	      throw this.handleError(error)
	    }
	  }

	  stringify() {
	    if (this.error) throw this.error
	    if (this.stringified) return this.result
	    this.stringified = true;

	    this.sync();

	    let opts = this.result.opts;
	    let str = stringify;
	    if (opts.syntax) str = opts.syntax.stringify;
	    if (opts.stringifier) str = opts.stringifier;
	    if (str.stringify) str = str.stringify;

	    let map = new MapGenerator(str, this.result.root, this.result.opts);
	    let data = map.generate();
	    this.result.css = data[0];
	    this.result.map = data[1];

	    return this.result
	  }

	  sync() {
	    if (this.error) throw this.error
	    if (this.processed) return this.result
	    this.processed = true;

	    if (this.processing) {
	      throw this.getAsyncError()
	    }

	    for (let plugin of this.plugins) {
	      let promise = this.runOnRoot(plugin);
	      if (isPromise(promise)) {
	        throw this.getAsyncError()
	      }
	    }

	    this.prepareVisitors();
	    if (this.hasListener) {
	      let root = this.result.root;
	      while (!root[isClean]) {
	        root[isClean] = true;
	        this.walkSync(root);
	      }
	      if (this.listeners.OnceExit) {
	        if (root.type === 'document') {
	          for (let subRoot of root.nodes) {
	            this.visitSync(this.listeners.OnceExit, subRoot);
	          }
	        } else {
	          this.visitSync(this.listeners.OnceExit, root);
	        }
	      }
	    }

	    return this.result
	  }

	  then(onFulfilled, onRejected) {
	    return this.async().then(onFulfilled, onRejected)
	  }

	  toString() {
	    return this.css
	  }

	  visitSync(visitors, node) {
	    for (let [plugin, visitor] of visitors) {
	      this.result.lastPlugin = plugin;
	      let promise;
	      try {
	        promise = visitor(node, this.helpers);
	      } catch (e) {
	        throw this.handleError(e, node.proxyOf)
	      }
	      if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
	        return true
	      }
	      if (isPromise(promise)) {
	        throw this.getAsyncError()
	      }
	    }
	  }

	  visitTick(stack) {
	    let visit = stack[stack.length - 1];
	    let { node, visitors } = visit;

	    if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
	      stack.pop();
	      return
	    }

	    if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
	      let [plugin, visitor] = visitors[visit.visitorIndex];
	      visit.visitorIndex += 1;
	      if (visit.visitorIndex === visitors.length) {
	        visit.visitors = [];
	        visit.visitorIndex = 0;
	      }
	      this.result.lastPlugin = plugin;
	      try {
	        return visitor(node.toProxy(), this.helpers)
	      } catch (e) {
	        throw this.handleError(e, node)
	      }
	    }

	    if (visit.iterator !== 0) {
	      let iterator = visit.iterator;
	      let child;
	      while ((child = node.nodes[node.indexes[iterator]])) {
	        node.indexes[iterator] += 1;
	        if (!child[isClean]) {
	          child[isClean] = true;
	          stack.push(toStack(child));
	          return
	        }
	      }
	      visit.iterator = 0;
	      delete node.indexes[iterator];
	    }

	    let events = visit.events;
	    while (visit.eventIndex < events.length) {
	      let event = events[visit.eventIndex];
	      visit.eventIndex += 1;
	      if (event === CHILDREN) {
	        if (node.nodes && node.nodes.length) {
	          node[isClean] = true;
	          visit.iterator = node.getIterator();
	        }
	        return
	      } else if (this.listeners[event]) {
	        visit.visitors = this.listeners[event];
	        return
	      }
	    }
	    stack.pop();
	  }

	  walkSync(node) {
	    node[isClean] = true;
	    let events = getEvents(node);
	    for (let event of events) {
	      if (event === CHILDREN) {
	        if (node.nodes) {
	          node.each(child => {
	            if (!child[isClean]) this.walkSync(child);
	          });
	        }
	      } else {
	        let visitors = this.listeners[event];
	        if (visitors) {
	          if (this.visitSync(visitors, node.toProxy())) return
	        }
	      }
	    }
	  }

	  warnings() {
	    return this.sync().warnings()
	  }

	  get content() {
	    return this.stringify().content
	  }

	  get css() {
	    return this.stringify().css
	  }

	  get map() {
	    return this.stringify().map
	  }

	  get messages() {
	    return this.sync().messages
	  }

	  get opts() {
	    return this.result.opts
	  }

	  get processor() {
	    return this.result.processor
	  }

	  get root() {
	    return this.sync().root
	  }

	  get [Symbol.toStringTag]() {
	    return 'LazyResult'
	  }
	}

	LazyResult.registerPostcss = dependant => {
	  postcss = dependant;
	};

	lazyResult = LazyResult;
	LazyResult.default = LazyResult;

	Root.registerLazyResult(LazyResult);
	Document.registerLazyResult(LazyResult);
	return lazyResult;
}var noWorkResult;
var hasRequiredNoWorkResult;

function requireNoWorkResult () {
	if (hasRequiredNoWorkResult) return noWorkResult;
	hasRequiredNoWorkResult = 1;

	let MapGenerator = requireMapGenerator();
	let stringify = requireStringify();
	let parse = requireParse();
	const Result = requireResult();

	class NoWorkResult {
	  constructor(processor, css, opts) {
	    css = css.toString();
	    this.stringified = false;

	    this._processor = processor;
	    this._css = css;
	    this._opts = opts;
	    this._map = undefined;
	    let root;

	    let str = stringify;
	    this.result = new Result(this._processor, root, this._opts);
	    this.result.css = css;

	    let self = this;
	    Object.defineProperty(this.result, 'root', {
	      get() {
	        return self.root
	      }
	    });

	    let map = new MapGenerator(str, root, this._opts, css);
	    if (map.isMap()) {
	      let [generatedCSS, generatedMap] = map.generate();
	      if (generatedCSS) {
	        this.result.css = generatedCSS;
	      }
	      if (generatedMap) {
	        this.result.map = generatedMap;
	      }
	    }
	  }

	  async() {
	    if (this.error) return Promise.reject(this.error)
	    return Promise.resolve(this.result)
	  }

	  catch(onRejected) {
	    return this.async().catch(onRejected)
	  }

	  finally(onFinally) {
	    return this.async().then(onFinally, onFinally)
	  }

	  sync() {
	    if (this.error) throw this.error
	    return this.result
	  }

	  then(onFulfilled, onRejected) {

	    return this.async().then(onFulfilled, onRejected)
	  }

	  toString() {
	    return this._css
	  }

	  warnings() {
	    return []
	  }

	  get content() {
	    return this.result.css
	  }

	  get css() {
	    return this.result.css
	  }

	  get map() {
	    return this.result.map
	  }

	  get messages() {
	    return []
	  }

	  get opts() {
	    return this.result.opts
	  }

	  get processor() {
	    return this.result.processor
	  }

	  get root() {
	    if (this._root) {
	      return this._root
	    }

	    let root;
	    let parser = parse;

	    try {
	      root = parser(this._css, this._opts);
	    } catch (error) {
	      this.error = error;
	    }

	    if (this.error) {
	      throw this.error
	    } else {
	      this._root = root;
	      return root
	    }
	  }

	  get [Symbol.toStringTag]() {
	    return 'NoWorkResult'
	  }
	}

	noWorkResult = NoWorkResult;
	NoWorkResult.default = NoWorkResult;
	return noWorkResult;
}var processor;
var hasRequiredProcessor;

function requireProcessor () {
	if (hasRequiredProcessor) return processor;
	hasRequiredProcessor = 1;

	let NoWorkResult = requireNoWorkResult();
	let LazyResult = requireLazyResult();
	let Document = requireDocument();
	let Root = requireRoot();

	class Processor {
	  constructor(plugins = []) {
	    this.version = '8.4.31';
	    this.plugins = this.normalize(plugins);
	  }

	  normalize(plugins) {
	    let normalized = [];
	    for (let i of plugins) {
	      if (i.postcss === true) {
	        i = i();
	      } else if (i.postcss) {
	        i = i.postcss;
	      }

	      if (typeof i === 'object' && Array.isArray(i.plugins)) {
	        normalized = normalized.concat(i.plugins);
	      } else if (typeof i === 'object' && i.postcssPlugin) {
	        normalized.push(i);
	      } else if (typeof i === 'function') {
	        normalized.push(i);
	      } else if (typeof i === 'object' && (i.parse || i.stringify)) ; else {
	        throw new Error(i + ' is not a PostCSS plugin')
	      }
	    }
	    return normalized
	  }

	  process(css, opts = {}) {
	    if (
	      this.plugins.length === 0 &&
	      typeof opts.parser === 'undefined' &&
	      typeof opts.stringifier === 'undefined' &&
	      typeof opts.syntax === 'undefined'
	    ) {
	      return new NoWorkResult(this, css, opts)
	    } else {
	      return new LazyResult(this, css, opts)
	    }
	  }

	  use(plugin) {
	    this.plugins = this.plugins.concat(this.normalize([plugin]));
	    return this
	  }
	}

	processor = Processor;
	Processor.default = Processor;

	Root.registerProcessor(Processor);
	Document.registerProcessor(Processor);
	return processor;
}var fromJSON_1;
var hasRequiredFromJSON;

function requireFromJSON () {
	if (hasRequiredFromJSON) return fromJSON_1;
	hasRequiredFromJSON = 1;

	let Declaration = requireDeclaration();
	let PreviousMap = requirePreviousMap();
	let Comment = requireComment();
	let AtRule = requireAtRule();
	let Input = requireInput();
	let Root = requireRoot();
	let Rule = requireRule();

	function fromJSON(json, inputs) {
	  if (Array.isArray(json)) return json.map(n => fromJSON(n))

	  let { inputs: ownInputs, ...defaults } = json;
	  if (ownInputs) {
	    inputs = [];
	    for (let input of ownInputs) {
	      let inputHydrated = { ...input, __proto__: Input.prototype };
	      if (inputHydrated.map) {
	        inputHydrated.map = {
	          ...inputHydrated.map,
	          __proto__: PreviousMap.prototype
	        };
	      }
	      inputs.push(inputHydrated);
	    }
	  }
	  if (defaults.nodes) {
	    defaults.nodes = json.nodes.map(n => fromJSON(n, inputs));
	  }
	  if (defaults.source) {
	    let { inputId, ...source } = defaults.source;
	    defaults.source = source;
	    if (inputId != null) {
	      defaults.source.input = inputs[inputId];
	    }
	  }
	  if (defaults.type === 'root') {
	    return new Root(defaults)
	  } else if (defaults.type === 'decl') {
	    return new Declaration(defaults)
	  } else if (defaults.type === 'rule') {
	    return new Rule(defaults)
	  } else if (defaults.type === 'comment') {
	    return new Comment(defaults)
	  } else if (defaults.type === 'atrule') {
	    return new AtRule(defaults)
	  } else {
	    throw new Error('Unknown node type: ' + json.type)
	  }
	}

	fromJSON_1 = fromJSON;
	fromJSON.default = fromJSON;
	return fromJSON_1;
}var postcss_1;
var hasRequiredPostcss;

function requirePostcss () {
	if (hasRequiredPostcss) return postcss_1;
	hasRequiredPostcss = 1;

	let CssSyntaxError = requireCssSyntaxError();
	let Declaration = requireDeclaration();
	let LazyResult = requireLazyResult();
	let Container = requireContainer();
	let Processor = requireProcessor();
	let stringify = requireStringify();
	let fromJSON = requireFromJSON();
	let Document = requireDocument();
	let Warning = requireWarning();
	let Comment = requireComment();
	let AtRule = requireAtRule();
	let Result = requireResult();
	let Input = requireInput();
	let parse = requireParse();
	let list = requireList();
	let Rule = requireRule();
	let Root = requireRoot();
	let Node = requireNode();

	function postcss(...plugins) {
	  if (plugins.length === 1 && Array.isArray(plugins[0])) {
	    plugins = plugins[0];
	  }
	  return new Processor(plugins)
	}

	postcss.plugin = function plugin(name, initializer) {
	  let warningPrinted = false;
	  function creator(...args) {
	    // eslint-disable-next-line no-console
	    if (console && console.warn && !warningPrinted) {
	      warningPrinted = true;
	      // eslint-disable-next-line no-console
	      console.warn(
	        name +
	          ': postcss.plugin was deprecated. Migration guide:\n' +
	          'https://evilmartians.com/chronicles/postcss-8-plugin-migration'
	      );
	      if (process.env.LANG && process.env.LANG.startsWith('cn')) {
	        /* c8 ignore next 7 */
	        // eslint-disable-next-line no-console
	        console.warn(
	          name +
	            ': 里面 postcss.plugin 被弃用. 迁移指南:\n' +
	            'https://www.w3ctech.com/topic/2226'
	        );
	      }
	    }
	    let transformer = initializer(...args);
	    transformer.postcssPlugin = name;
	    transformer.postcssVersion = new Processor().version;
	    return transformer
	  }

	  let cache;
	  Object.defineProperty(creator, 'postcss', {
	    get() {
	      if (!cache) cache = creator();
	      return cache
	    }
	  });

	  creator.process = function (css, processOpts, pluginOpts) {
	    return postcss([creator(pluginOpts)]).process(css, processOpts)
	  };

	  return creator
	};

	postcss.stringify = stringify;
	postcss.parse = parse;
	postcss.fromJSON = fromJSON;
	postcss.list = list;

	postcss.comment = defaults => new Comment(defaults);
	postcss.atRule = defaults => new AtRule(defaults);
	postcss.decl = defaults => new Declaration(defaults);
	postcss.rule = defaults => new Rule(defaults);
	postcss.root = defaults => new Root(defaults);
	postcss.document = defaults => new Document(defaults);

	postcss.CssSyntaxError = CssSyntaxError;
	postcss.Declaration = Declaration;
	postcss.Container = Container;
	postcss.Processor = Processor;
	postcss.Document = Document;
	postcss.Comment = Comment;
	postcss.Warning = Warning;
	postcss.AtRule = AtRule;
	postcss.Result = Result;
	postcss.Input = Input;
	postcss.Rule = Rule;
	postcss.Root = Root;
	postcss.Node = Node;

	LazyResult.registerPostcss(postcss);

	postcss_1 = postcss;
	postcss.default = postcss;
	return postcss_1;
}var sanitizeHtml_1;
var hasRequiredSanitizeHtml;

function requireSanitizeHtml () {
	if (hasRequiredSanitizeHtml) return sanitizeHtml_1;
	hasRequiredSanitizeHtml = 1;
	const htmlparser = requireLib();
	const escapeStringRegexp = requireEscapeStringRegexp();
	const { isPlainObject } = requireIsPlainObject();
	const deepmerge = requireCjs();
	const parseSrcset = requireParseSrcset();
	const { parse: postcssParse } = requirePostcss();
	// Tags that can conceivably represent stand-alone media.
	const mediaTags = [
	  'img', 'audio', 'video', 'picture', 'svg',
	  'object', 'map', 'iframe', 'embed'
	];
	// Tags that are inherently vulnerable to being used in XSS attacks.
	const vulnerableTags = [ 'script', 'style' ];

	function each(obj, cb) {
	  if (obj) {
	    Object.keys(obj).forEach(function (key) {
	      cb(obj[key], key);
	    });
	  }
	}

	// Avoid false positives with .__proto__, .hasOwnProperty, etc.
	function has(obj, key) {
	  return ({}).hasOwnProperty.call(obj, key);
	}

	// Returns those elements of `a` for which `cb(a)` returns truthy
	function filter(a, cb) {
	  const n = [];
	  each(a, function(v) {
	    if (cb(v)) {
	      n.push(v);
	    }
	  });
	  return n;
	}

	function isEmptyObject(obj) {
	  for (const key in obj) {
	    if (has(obj, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	function stringifySrcset(parsedSrcset) {
	  return parsedSrcset.map(function(part) {
	    if (!part.url) {
	      throw new Error('URL missing');
	    }

	    return (
	      part.url +
	      (part.w ? ` ${part.w}w` : '') +
	      (part.h ? ` ${part.h}h` : '') +
	      (part.d ? ` ${part.d}x` : '')
	    );
	  }).join(', ');
	}

	sanitizeHtml_1 = sanitizeHtml;

	// A valid attribute name.
	// We use a tolerant definition based on the set of strings defined by
	// html.spec.whatwg.org/multipage/parsing.html#before-attribute-name-state
	// and html.spec.whatwg.org/multipage/parsing.html#attribute-name-state .
	// The characters accepted are ones which can be appended to the attribute
	// name buffer without triggering a parse error:
	//   * unexpected-equals-sign-before-attribute-name
	//   * unexpected-null-character
	//   * unexpected-character-in-attribute-name
	// We exclude the empty string because it's impossible to get to the after
	// attribute name state with an empty attribute name buffer.
	const VALID_HTML_ATTRIBUTE_NAME = /^[^\0\t\n\f\r /<=>]+$/;

	// Ignore the _recursing flag; it's there for recursive
	// invocation as a guard against this exploit:
	// https://github.com/fb55/htmlparser2/issues/105

	function sanitizeHtml(html, options, _recursing) {
	  if (html == null) {
	    return '';
	  }
	  if (typeof html === 'number') {
	    html = html.toString();
	  }

	  let result = '';
	  // Used for hot swapping the result variable with an empty string in order to "capture" the text written to it.
	  let tempResult = '';

	  function Frame(tag, attribs) {
	    const that = this;
	    this.tag = tag;
	    this.attribs = attribs || {};
	    this.tagPosition = result.length;
	    this.text = ''; // Node inner text
	    this.mediaChildren = [];

	    this.updateParentNodeText = function() {
	      if (stack.length) {
	        const parentFrame = stack[stack.length - 1];
	        parentFrame.text += that.text;
	      }
	    };

	    this.updateParentNodeMediaChildren = function() {
	      if (stack.length && mediaTags.includes(this.tag)) {
	        const parentFrame = stack[stack.length - 1];
	        parentFrame.mediaChildren.push(this.tag);
	      }
	    };
	  }

	  options = Object.assign({}, sanitizeHtml.defaults, options);
	  options.parser = Object.assign({}, htmlParserDefaults, options.parser);

	  const tagAllowed = function (name) {
	    return options.allowedTags === false || (options.allowedTags || []).indexOf(name) > -1;
	  };

	  // vulnerableTags
	  vulnerableTags.forEach(function (tag) {
	    if (tagAllowed(tag) && !options.allowVulnerableTags) {
	      console.warn(`\n\n⚠️ Your \`allowedTags\` option includes, \`${tag}\`, which is inherently\nvulnerable to XSS attacks. Please remove it from \`allowedTags\`.\nOr, to disable this warning, add the \`allowVulnerableTags\` option\nand ensure you are accounting for this risk.\n\n`);
	    }
	  });

	  // Tags that contain something other than HTML, or where discarding
	  // the text when the tag is disallowed makes sense for other reasons.
	  // If we are not allowing these tags, we should drop their content too.
	  // For other tags you would drop the tag but keep its content.
	  const nonTextTagsArray = options.nonTextTags || [
	    'script',
	    'style',
	    'textarea',
	    'option'
	  ];
	  let allowedAttributesMap;
	  let allowedAttributesGlobMap;
	  if (options.allowedAttributes) {
	    allowedAttributesMap = {};
	    allowedAttributesGlobMap = {};
	    each(options.allowedAttributes, function(attributes, tag) {
	      allowedAttributesMap[tag] = [];
	      const globRegex = [];
	      attributes.forEach(function(obj) {
	        if (typeof obj === 'string' && obj.indexOf('*') >= 0) {
	          globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, '.*'));
	        } else {
	          allowedAttributesMap[tag].push(obj);
	        }
	      });
	      if (globRegex.length) {
	        allowedAttributesGlobMap[tag] = new RegExp('^(' + globRegex.join('|') + ')$');
	      }
	    });
	  }
	  const allowedClassesMap = {};
	  const allowedClassesGlobMap = {};
	  const allowedClassesRegexMap = {};
	  each(options.allowedClasses, function(classes, tag) {
	    // Implicitly allows the class attribute
	    if (allowedAttributesMap) {
	      if (!has(allowedAttributesMap, tag)) {
	        allowedAttributesMap[tag] = [];
	      }
	      allowedAttributesMap[tag].push('class');
	    }

	    allowedClassesMap[tag] = classes;

	    if (Array.isArray(classes)) {
	      const globRegex = [];
	      allowedClassesMap[tag] = [];
	      allowedClassesRegexMap[tag] = [];
	      classes.forEach(function(obj) {
	        if (typeof obj === 'string' && obj.indexOf('*') >= 0) {
	          globRegex.push(escapeStringRegexp(obj).replace(/\\\*/g, '.*'));
	        } else if (obj instanceof RegExp) {
	          allowedClassesRegexMap[tag].push(obj);
	        } else {
	          allowedClassesMap[tag].push(obj);
	        }
	      });
	      if (globRegex.length) {
	        allowedClassesGlobMap[tag] = new RegExp('^(' + globRegex.join('|') + ')$');
	      }
	    }
	  });

	  const transformTagsMap = {};
	  let transformTagsAll;
	  each(options.transformTags, function(transform, tag) {
	    let transFun;
	    if (typeof transform === 'function') {
	      transFun = transform;
	    } else if (typeof transform === 'string') {
	      transFun = sanitizeHtml.simpleTransform(transform);
	    }
	    if (tag === '*') {
	      transformTagsAll = transFun;
	    } else {
	      transformTagsMap[tag] = transFun;
	    }
	  });

	  let depth;
	  let stack;
	  let skipMap;
	  let transformMap;
	  let skipText;
	  let skipTextDepth;
	  let addedText = false;

	  initializeState();

	  const parser = new htmlparser.Parser({
	    onopentag: function(name, attribs) {
	      // If `enforceHtmlBoundary` is `true` and this has found the opening
	      // `html` tag, reset the state.
	      if (options.enforceHtmlBoundary && name === 'html') {
	        initializeState();
	      }

	      if (skipText) {
	        skipTextDepth++;
	        return;
	      }
	      const frame = new Frame(name, attribs);
	      stack.push(frame);

	      let skip = false;
	      const hasText = !!frame.text;
	      let transformedTag;
	      if (has(transformTagsMap, name)) {
	        transformedTag = transformTagsMap[name](name, attribs);

	        frame.attribs = attribs = transformedTag.attribs;

	        if (transformedTag.text !== undefined) {
	          frame.innerText = transformedTag.text;
	        }

	        if (name !== transformedTag.tagName) {
	          frame.name = name = transformedTag.tagName;
	          transformMap[depth] = transformedTag.tagName;
	        }
	      }
	      if (transformTagsAll) {
	        transformedTag = transformTagsAll(name, attribs);

	        frame.attribs = attribs = transformedTag.attribs;
	        if (name !== transformedTag.tagName) {
	          frame.name = name = transformedTag.tagName;
	          transformMap[depth] = transformedTag.tagName;
	        }
	      }

	      if (!tagAllowed(name) || (options.disallowedTagsMode === 'recursiveEscape' && !isEmptyObject(skipMap)) || (options.nestingLimit != null && depth >= options.nestingLimit)) {
	        skip = true;
	        skipMap[depth] = true;
	        if (options.disallowedTagsMode === 'discard') {
	          if (nonTextTagsArray.indexOf(name) !== -1) {
	            skipText = true;
	            skipTextDepth = 1;
	          }
	        }
	        skipMap[depth] = true;
	      }
	      depth++;
	      if (skip) {
	        if (options.disallowedTagsMode === 'discard') {
	          // We want the contents but not this tag
	          return;
	        }
	        tempResult = result;
	        result = '';
	      }
	      result += '<' + name;

	      if (name === 'script') {
	        if (options.allowedScriptHostnames || options.allowedScriptDomains) {
	          frame.innerText = '';
	        }
	      }

	      if (!allowedAttributesMap || has(allowedAttributesMap, name) || allowedAttributesMap['*']) {
	        each(attribs, function(value, a) {
	          if (!VALID_HTML_ATTRIBUTE_NAME.test(a)) {
	            // This prevents part of an attribute name in the output from being
	            // interpreted as the end of an attribute, or end of a tag.
	            delete frame.attribs[a];
	            return;
	          }
	          // If the value is empty, and this is a known non-boolean attribute, delete it
	          // List taken from https://html.spec.whatwg.org/multipage/indices.html#attributes-3
	          if (value === '' && (options.nonBooleanAttributes.includes(a) || options.nonBooleanAttributes.includes('*'))) {
	            delete frame.attribs[a];
	            return;
	          }
	          // check allowedAttributesMap for the element and attribute and modify the value
	          // as necessary if there are specific values defined.
	          let passedAllowedAttributesMapCheck = false;
	          if (!allowedAttributesMap ||
	            (has(allowedAttributesMap, name) && allowedAttributesMap[name].indexOf(a) !== -1) ||
	            (allowedAttributesMap['*'] && allowedAttributesMap['*'].indexOf(a) !== -1) ||
	            (has(allowedAttributesGlobMap, name) && allowedAttributesGlobMap[name].test(a)) ||
	            (allowedAttributesGlobMap['*'] && allowedAttributesGlobMap['*'].test(a))) {
	            passedAllowedAttributesMapCheck = true;
	          } else if (allowedAttributesMap && allowedAttributesMap[name]) {
	            for (const o of allowedAttributesMap[name]) {
	              if (isPlainObject(o) && o.name && (o.name === a)) {
	                passedAllowedAttributesMapCheck = true;
	                let newValue = '';
	                if (o.multiple === true) {
	                  // verify the values that are allowed
	                  const splitStrArray = value.split(' ');
	                  for (const s of splitStrArray) {
	                    if (o.values.indexOf(s) !== -1) {
	                      if (newValue === '') {
	                        newValue = s;
	                      } else {
	                        newValue += ' ' + s;
	                      }
	                    }
	                  }
	                } else if (o.values.indexOf(value) >= 0) {
	                  // verified an allowed value matches the entire attribute value
	                  newValue = value;
	                }
	                value = newValue;
	              }
	            }
	          }
	          if (passedAllowedAttributesMapCheck) {
	            if (options.allowedSchemesAppliedToAttributes.indexOf(a) !== -1) {
	              if (naughtyHref(name, value)) {
	                delete frame.attribs[a];
	                return;
	              }
	            }

	            if (name === 'script' && a === 'src') {

	              let allowed = true;

	              try {
	                const parsed = parseUrl(value);

	                if (options.allowedScriptHostnames || options.allowedScriptDomains) {
	                  const allowedHostname = (options.allowedScriptHostnames || []).find(function (hostname) {
	                    return hostname === parsed.url.hostname;
	                  });
	                  const allowedDomain = (options.allowedScriptDomains || []).find(function(domain) {
	                    return parsed.url.hostname === domain || parsed.url.hostname.endsWith(`.${domain}`);
	                  });
	                  allowed = allowedHostname || allowedDomain;
	                }
	              } catch (e) {
	                allowed = false;
	              }

	              if (!allowed) {
	                delete frame.attribs[a];
	                return;
	              }
	            }

	            if (name === 'iframe' && a === 'src') {
	              let allowed = true;
	              try {
	                const parsed = parseUrl(value);

	                if (parsed.isRelativeUrl) {
	                  // default value of allowIframeRelativeUrls is true
	                  // unless allowedIframeHostnames or allowedIframeDomains specified
	                  allowed = has(options, 'allowIframeRelativeUrls')
	                    ? options.allowIframeRelativeUrls
	                    : (!options.allowedIframeHostnames && !options.allowedIframeDomains);
	                } else if (options.allowedIframeHostnames || options.allowedIframeDomains) {
	                  const allowedHostname = (options.allowedIframeHostnames || []).find(function (hostname) {
	                    return hostname === parsed.url.hostname;
	                  });
	                  const allowedDomain = (options.allowedIframeDomains || []).find(function(domain) {
	                    return parsed.url.hostname === domain || parsed.url.hostname.endsWith(`.${domain}`);
	                  });
	                  allowed = allowedHostname || allowedDomain;
	                }
	              } catch (e) {
	                // Unparseable iframe src
	                allowed = false;
	              }
	              if (!allowed) {
	                delete frame.attribs[a];
	                return;
	              }
	            }
	            if (a === 'srcset') {
	              try {
	                let parsed = parseSrcset(value);
	                parsed.forEach(function(value) {
	                  if (naughtyHref('srcset', value.url)) {
	                    value.evil = true;
	                  }
	                });
	                parsed = filter(parsed, function(v) {
	                  return !v.evil;
	                });
	                if (!parsed.length) {
	                  delete frame.attribs[a];
	                  return;
	                } else {
	                  value = stringifySrcset(filter(parsed, function(v) {
	                    return !v.evil;
	                  }));
	                  frame.attribs[a] = value;
	                }
	              } catch (e) {
	                // Unparseable srcset
	                delete frame.attribs[a];
	                return;
	              }
	            }
	            if (a === 'class') {
	              const allowedSpecificClasses = allowedClassesMap[name];
	              const allowedWildcardClasses = allowedClassesMap['*'];
	              const allowedSpecificClassesGlob = allowedClassesGlobMap[name];
	              const allowedSpecificClassesRegex = allowedClassesRegexMap[name];
	              const allowedWildcardClassesGlob = allowedClassesGlobMap['*'];
	              const allowedClassesGlobs = [
	                allowedSpecificClassesGlob,
	                allowedWildcardClassesGlob
	              ]
	                .concat(allowedSpecificClassesRegex)
	                .filter(function (t) {
	                  return t;
	                });
	              if (allowedSpecificClasses && allowedWildcardClasses) {
	                value = filterClasses(value, deepmerge(allowedSpecificClasses, allowedWildcardClasses), allowedClassesGlobs);
	              } else {
	                value = filterClasses(value, allowedSpecificClasses || allowedWildcardClasses, allowedClassesGlobs);
	              }
	              if (!value.length) {
	                delete frame.attribs[a];
	                return;
	              }
	            }
	            if (a === 'style') {
	              if (options.parseStyleAttributes) {
	                try {
	                  const abstractSyntaxTree = postcssParse(name + ' {' + value + '}');
	                  const filteredAST = filterCss(abstractSyntaxTree, options.allowedStyles);

	                  value = stringifyStyleAttributes(filteredAST);

	                  if (value.length === 0) {
	                    delete frame.attribs[a];
	                    return;
	                  }
	                } catch (e) {
	                  if (typeof window !== 'undefined') {
	                    console.warn('Failed to parse "' + name + ' {' + value + '}' + '", If you\'re running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547');
	                  }
	                  delete frame.attribs[a];
	                  return;
	                }
	              } else if (options.allowedStyles) {
	                throw new Error('allowedStyles option cannot be used together with parseStyleAttributes: false.');
	              }
	            }
	            result += ' ' + a;
	            if (value && value.length) {
	              result += '="' + escapeHtml(value, true) + '"';
	            }
	          } else {
	            delete frame.attribs[a];
	          }
	        });
	      }
	      if (options.selfClosing.indexOf(name) !== -1) {
	        result += ' />';
	      } else {
	        result += '>';
	        if (frame.innerText && !hasText && !options.textFilter) {
	          result += escapeHtml(frame.innerText);
	          addedText = true;
	        }
	      }
	      if (skip) {
	        result = tempResult + escapeHtml(result);
	        tempResult = '';
	      }
	    },
	    ontext: function(text) {
	      if (skipText) {
	        return;
	      }
	      const lastFrame = stack[stack.length - 1];
	      let tag;

	      if (lastFrame) {
	        tag = lastFrame.tag;
	        // If inner text was set by transform function then let's use it
	        text = lastFrame.innerText !== undefined ? lastFrame.innerText : text;
	      }

	      if (options.disallowedTagsMode === 'discard' && ((tag === 'script') || (tag === 'style'))) {
	        // htmlparser2 gives us these as-is. Escaping them ruins the content. Allowing
	        // script tags is, by definition, game over for XSS protection, so if that's
	        // your concern, don't allow them. The same is essentially true for style tags
	        // which have their own collection of XSS vectors.
	        result += text;
	      } else {
	        const escaped = escapeHtml(text, false);
	        if (options.textFilter && !addedText) {
	          result += options.textFilter(escaped, tag);
	        } else if (!addedText) {
	          result += escaped;
	        }
	      }
	      if (stack.length) {
	        const frame = stack[stack.length - 1];
	        frame.text += text;
	      }
	    },
	    onclosetag: function(name, isImplied) {

	      if (skipText) {
	        skipTextDepth--;
	        if (!skipTextDepth) {
	          skipText = false;
	        } else {
	          return;
	        }
	      }

	      const frame = stack.pop();
	      if (!frame) {
	        // Do not crash on bad markup
	        return;
	      }

	      if (frame.tag !== name) {
	        // Another case of bad markup.
	        // Push to stack, so that it will be used in future closing tags.
	        stack.push(frame);
	        return;
	      }

	      skipText = options.enforceHtmlBoundary ? name === 'html' : false;
	      depth--;
	      const skip = skipMap[depth];
	      if (skip) {
	        delete skipMap[depth];
	        if (options.disallowedTagsMode === 'discard') {
	          frame.updateParentNodeText();
	          return;
	        }
	        tempResult = result;
	        result = '';
	      }

	      if (transformMap[depth]) {
	        name = transformMap[depth];
	        delete transformMap[depth];
	      }

	      if (options.exclusiveFilter && options.exclusiveFilter(frame)) {
	        result = result.substr(0, frame.tagPosition);
	        return;
	      }

	      frame.updateParentNodeMediaChildren();
	      frame.updateParentNodeText();

	      if (
	        // Already output />
	        options.selfClosing.indexOf(name) !== -1 ||
	        // Escaped tag, closing tag is implied
	        (isImplied && !tagAllowed(name) && [ 'escape', 'recursiveEscape' ].indexOf(options.disallowedTagsMode) >= 0)
	      ) {
	        if (skip) {
	          result = tempResult;
	          tempResult = '';
	        }
	        return;
	      }

	      result += '</' + name + '>';
	      if (skip) {
	        result = tempResult + escapeHtml(result);
	        tempResult = '';
	      }
	      addedText = false;
	    }
	  }, options.parser);
	  parser.write(html);
	  parser.end();

	  return result;

	  function initializeState() {
	    result = '';
	    depth = 0;
	    stack = [];
	    skipMap = {};
	    transformMap = {};
	    skipText = false;
	    skipTextDepth = 0;
	  }

	  function escapeHtml(s, quote) {
	    if (typeof (s) !== 'string') {
	      s = s + '';
	    }
	    if (options.parser.decodeEntities) {
	      s = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	      if (quote) {
	        s = s.replace(/"/g, '&quot;');
	      }
	    }
	    // TODO: this is inadequate because it will pass `&0;`. This approach
	    // will not work, each & must be considered with regard to whether it
	    // is followed by a 100% syntactically valid entity or not, and escaped
	    // if it is not. If this bothers you, don't set parser.decodeEntities
	    // to false. (The default is true.)
	    s = s.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, '&amp;') // Match ampersands not part of existing HTML entity
	      .replace(/</g, '&lt;')
	      .replace(/>/g, '&gt;');
	    if (quote) {
	      s = s.replace(/"/g, '&quot;');
	    }
	    return s;
	  }

	  function naughtyHref(name, href) {
	    // Browsers ignore character codes of 32 (space) and below in a surprising
	    // number of situations. Start reading here:
	    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet#Embedded_tab
	    // eslint-disable-next-line no-control-regex
	    href = href.replace(/[\x00-\x20]+/g, '');
	    // Clobber any comments in URLs, which the browser might
	    // interpret inside an XML data island, allowing
	    // a javascript: URL to be snuck through
	    while (true) {
	      const firstIndex = href.indexOf('<!--');
	      if (firstIndex === -1) {
	        break;
	      }
	      const lastIndex = href.indexOf('-->', firstIndex + 4);
	      if (lastIndex === -1) {
	        break;
	      }
	      href = href.substring(0, firstIndex) + href.substring(lastIndex + 3);
	    }
	    // Case insensitive so we don't get faked out by JAVASCRIPT #1
	    // Allow more characters after the first so we don't get faked
	    // out by certain schemes browsers accept
	    const matches = href.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
	    if (!matches) {
	      // Protocol-relative URL starting with any combination of '/' and '\'
	      if (href.match(/^[/\\]{2}/)) {
	        return !options.allowProtocolRelative;
	      }

	      // No scheme
	      return false;
	    }
	    const scheme = matches[1].toLowerCase();

	    if (has(options.allowedSchemesByTag, name)) {
	      return options.allowedSchemesByTag[name].indexOf(scheme) === -1;
	    }

	    return !options.allowedSchemes || options.allowedSchemes.indexOf(scheme) === -1;
	  }

	  function parseUrl(value) {
	    value = value.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, '$1//');
	    if (value.startsWith('relative:')) {
	      // An attempt to exploit our workaround for base URLs being
	      // mandatory for relative URL validation in the WHATWG
	      // URL parser, reject it
	      throw new Error('relative: exploit attempt');
	    }
	    // naughtyHref is in charge of whether protocol relative URLs
	    // are cool. Here we are concerned just with allowed hostnames and
	    // whether to allow relative URLs.
	    //
	    // Build a placeholder "base URL" against which any reasonable
	    // relative URL may be parsed successfully
	    let base = 'relative://relative-site';
	    for (let i = 0; (i < 100); i++) {
	      base += `/${i}`;
	    }

	    const parsed = new URL(value, base);

	    const isRelativeUrl = parsed && parsed.hostname === 'relative-site' && parsed.protocol === 'relative:';
	    return {
	      isRelativeUrl,
	      url: parsed
	    };
	  }
	  /**
	   * Filters user input css properties by allowlisted regex attributes.
	   * Modifies the abstractSyntaxTree object.
	   *
	   * @param {object} abstractSyntaxTree  - Object representation of CSS attributes.
	   * @property {array[Declaration]} abstractSyntaxTree.nodes[0] - Each object cointains prop and value key, i.e { prop: 'color', value: 'red' }.
	   * @param {object} allowedStyles       - Keys are properties (i.e color), value is list of permitted regex rules (i.e /green/i).
	   * @return {object}                    - The modified tree.
	   */
	  function filterCss(abstractSyntaxTree, allowedStyles) {
	    if (!allowedStyles) {
	      return abstractSyntaxTree;
	    }

	    const astRules = abstractSyntaxTree.nodes[0];
	    let selectedRule;

	    // Merge global and tag-specific styles into new AST.
	    if (allowedStyles[astRules.selector] && allowedStyles['*']) {
	      selectedRule = deepmerge(
	        allowedStyles[astRules.selector],
	        allowedStyles['*']
	      );
	    } else {
	      selectedRule = allowedStyles[astRules.selector] || allowedStyles['*'];
	    }

	    if (selectedRule) {
	      abstractSyntaxTree.nodes[0].nodes = astRules.nodes.reduce(filterDeclarations(selectedRule), []);
	    }

	    return abstractSyntaxTree;
	  }

	  /**
	   * Extracts the style attributes from an AbstractSyntaxTree and formats those
	   * values in the inline style attribute format.
	   *
	   * @param  {AbstractSyntaxTree} filteredAST
	   * @return {string}             - Example: "color:yellow;text-align:center !important;font-family:helvetica;"
	   */
	  function stringifyStyleAttributes(filteredAST) {
	    return filteredAST.nodes[0].nodes
	      .reduce(function(extractedAttributes, attrObject) {
	        extractedAttributes.push(
	          `${attrObject.prop}:${attrObject.value}${attrObject.important ? ' !important' : ''}`
	        );
	        return extractedAttributes;
	      }, [])
	      .join(';');
	  }

	  /**
	    * Filters the existing attributes for the given property. Discards any attributes
	    * which don't match the allowlist.
	    *
	    * @param  {object} selectedRule             - Example: { color: red, font-family: helvetica }
	    * @param  {array} allowedDeclarationsList   - List of declarations which pass the allowlist.
	    * @param  {object} attributeObject          - Object representing the current css property.
	    * @property {string} attributeObject.type   - Typically 'declaration'.
	    * @property {string} attributeObject.prop   - The CSS property, i.e 'color'.
	    * @property {string} attributeObject.value  - The corresponding value to the css property, i.e 'red'.
	    * @return {function}                        - When used in Array.reduce, will return an array of Declaration objects
	    */
	  function filterDeclarations(selectedRule) {
	    return function (allowedDeclarationsList, attributeObject) {
	      // If this property is allowlisted...
	      if (has(selectedRule, attributeObject.prop)) {
	        const matchesRegex = selectedRule[attributeObject.prop].some(function(regularExpression) {
	          return regularExpression.test(attributeObject.value);
	        });

	        if (matchesRegex) {
	          allowedDeclarationsList.push(attributeObject);
	        }
	      }
	      return allowedDeclarationsList;
	    };
	  }

	  function filterClasses(classes, allowed, allowedGlobs) {
	    if (!allowed) {
	      // The class attribute is allowed without filtering on this tag
	      return classes;
	    }
	    classes = classes.split(/\s+/);
	    return classes.filter(function(clss) {
	      return allowed.indexOf(clss) !== -1 || allowedGlobs.some(function(glob) {
	        return glob.test(clss);
	      });
	    }).join(' ');
	  }
	}

	// Defaults are accessible to you so that you can use them as a starting point
	// programmatically if you wish

	const htmlParserDefaults = {
	  decodeEntities: true
	};
	sanitizeHtml.defaults = {
	  allowedTags: [
	    // Sections derived from MDN element categories and limited to the more
	    // benign categories.
	    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
	    // Content sectioning
	    'address', 'article', 'aside', 'footer', 'header',
	    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup',
	    'main', 'nav', 'section',
	    // Text content
	    'blockquote', 'dd', 'div', 'dl', 'dt', 'figcaption', 'figure',
	    'hr', 'li', 'main', 'ol', 'p', 'pre', 'ul',
	    // Inline text semantics
	    'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn',
	    'em', 'i', 'kbd', 'mark', 'q',
	    'rb', 'rp', 'rt', 'rtc', 'ruby',
	    's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr',
	    // Table content
	    'caption', 'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th',
	    'thead', 'tr'
	  ],
	  // Tags that cannot be boolean
	  nonBooleanAttributes: [
	    'abbr', 'accept', 'accept-charset', 'accesskey', 'action',
	    'allow', 'alt', 'as', 'autocapitalize', 'autocomplete',
	    'blocking', 'charset', 'cite', 'class', 'color', 'cols',
	    'colspan', 'content', 'contenteditable', 'coords', 'crossorigin',
	    'data', 'datetime', 'decoding', 'dir', 'dirname', 'download',
	    'draggable', 'enctype', 'enterkeyhint', 'fetchpriority', 'for',
	    'form', 'formaction', 'formenctype', 'formmethod', 'formtarget',
	    'headers', 'height', 'hidden', 'high', 'href', 'hreflang',
	    'http-equiv', 'id', 'imagesizes', 'imagesrcset', 'inputmode',
	    'integrity', 'is', 'itemid', 'itemprop', 'itemref', 'itemtype',
	    'kind', 'label', 'lang', 'list', 'loading', 'low', 'max',
	    'maxlength', 'media', 'method', 'min', 'minlength', 'name',
	    'nonce', 'optimum', 'pattern', 'ping', 'placeholder', 'popover',
	    'popovertarget', 'popovertargetaction', 'poster', 'preload',
	    'referrerpolicy', 'rel', 'rows', 'rowspan', 'sandbox', 'scope',
	    'shape', 'size', 'sizes', 'slot', 'span', 'spellcheck', 'src',
	    'srcdoc', 'srclang', 'srcset', 'start', 'step', 'style',
	    'tabindex', 'target', 'title', 'translate', 'type', 'usemap',
	    'value', 'width', 'wrap',
	    // Event handlers
	    'onauxclick', 'onafterprint', 'onbeforematch', 'onbeforeprint',
	    'onbeforeunload', 'onbeforetoggle', 'onblur', 'oncancel',
	    'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose',
	    'oncontextlost', 'oncontextmenu', 'oncontextrestored', 'oncopy',
	    'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend',
	    'ondragenter', 'ondragleave', 'ondragover', 'ondragstart',
	    'ondrop', 'ondurationchange', 'onemptied', 'onended',
	    'onerror', 'onfocus', 'onformdata', 'onhashchange', 'oninput',
	    'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup',
	    'onlanguagechange', 'onload', 'onloadeddata', 'onloadedmetadata',
	    'onloadstart', 'onmessage', 'onmessageerror', 'onmousedown',
	    'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout',
	    'onmouseover', 'onmouseup', 'onoffline', 'ononline', 'onpagehide',
	    'onpageshow', 'onpaste', 'onpause', 'onplay', 'onplaying',
	    'onpopstate', 'onprogress', 'onratechange', 'onreset', 'onresize',
	    'onrejectionhandled', 'onscroll', 'onscrollend',
	    'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect',
	    'onslotchange', 'onstalled', 'onstorage', 'onsubmit', 'onsuspend',
	    'ontimeupdate', 'ontoggle', 'onunhandledrejection', 'onunload',
	    'onvolumechange', 'onwaiting', 'onwheel'
	  ],
	  disallowedTagsMode: 'discard',
	  allowedAttributes: {
	    a: [ 'href', 'name', 'target' ],
	    // We don't currently allow img itself by default, but
	    // these attributes would make sense if we did.
	    img: [ 'src', 'srcset', 'alt', 'title', 'width', 'height', 'loading' ]
	  },
	  // Lots of these won't come up by default because we don't allow them
	  selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
	  // URL schemes we permit
	  allowedSchemes: [ 'http', 'https', 'ftp', 'mailto', 'tel' ],
	  allowedSchemesByTag: {},
	  allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
	  allowProtocolRelative: true,
	  enforceHtmlBoundary: false,
	  parseStyleAttributes: true
	};

	sanitizeHtml.simpleTransform = function(newTagName, newAttribs, merge) {
	  merge = (merge === undefined) ? true : merge;
	  newAttribs = newAttribs || {};

	  return function(tagName, attribs) {
	    let attrib;
	    if (merge) {
	      for (attrib in newAttribs) {
	        attribs[attrib] = newAttribs[attrib];
	      }
	    } else {
	      attribs = newAttribs;
	    }

	    return {
	      tagName: newTagName,
	      attribs: attribs
	    };
	  };
	};
	return sanitizeHtml_1;
}(function (module, exports) {
	(function (global, factory) {
	    module.exports = factory() ;
	}(commonjsGlobal, (function () {
	    var sanitizeHtml = requireSanitizeHtml();

	    var Vue3Sanitize = {
	      install: function install(app, options) {
	        app.config.globalProperties.$sanitize = function (dirty) {
	          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	          return sanitizeHtml(dirty, opts || options);
	        };
	      },
	      defaults: sanitizeHtml.defaults
	    };

	    return Vue3Sanitize;

	})));
	
} (vue3Sanitize));

var vue3SanitizeExports = vue3Sanitize.exports;
var Vue3Sanitize = /*@__PURE__*/getDefaultExportFromCjs(vue3SanitizeExports);const _hoisted_1 = {
    key: 0,
    style: { "marginTop": "12%", "marginBottom": "12%", "background": "var(--color-background-mute)", "display": "flex", "flex-direction": "column" }
};
var script = defineComponent({
    __name: 'Home',
    setup(__props) {
        const collapsed = ref(true);
        const isLoading = ref(true);
        const posts = ref();
        window.app.use(createPinia());
        window.app.use(Vue3Sanitize, {
            allowedTags: ['a', 'b', 'i', 'font', 'br', 'div'],
            allowedAttributes: {
                a: ['href'],
                font: ['size']
            },
            disallowedTagsMode: 'escape'
        });
        const p = usePostsApi();
        onMounted(() => {
            if (p.posts.length > 0) {
                posts.value = p.posts;
                isLoading.value = false;
            }
            else {
                p.getPosts()
                    .then((val) => {
                    if (val) {
                        posts.value = val;
                        isLoading.value = false;
                    }
                });
            }
        });
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock(Fragment, null, [
                createVNode(script$5),
                createVNode(script$4, {
                    collapsed: collapsed.value,
                    setCollapsed: (val) => collapsed.value = val
                }, null, 8, ["collapsed", "setCollapsed"]),
                createVNode(script$3, {
                    toggleSidebar: () => collapsed.value = !collapsed.value
                }, null, 8, ["toggleSidebar"]),
                (isLoading.value)
                    ? (openBlock(), createBlock(script$1, {
                        key: 0,
                        style: { "margin-top": "12%" }
                    }))
                    : createCommentVNode("v-if", true),
                createVNode(Transition, { appear: "" }, {
                    default: withCtx(() => [
                        (!isLoading.value)
                            ? (openBlock(), createElementBlock("div", _hoisted_1, [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(posts.value, (item) => {
                                    return (openBlock(), createBlock(script$2, {
                                        item: item,
                                        key: item.id
                                    }, null, 8, ["item"]));
                                }), 128))
                            ]))
                            : createCommentVNode("v-if", true)
                    ]),
                    _: 1
                })
            ], 64));
        };
    }
});var css_248z = "/* color palette from <https://github.com/vuejs/theme> */\n@font-face {\n  font-family: 'Cabin';\n  font-style: normal;\n  font-weight: 400;\n  font-stretch: 100%;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/cabin/v26/u-4X0qWljRw-PfU81xCKCpdpbgZJl6XFpfEd7eA9BIxxkV2EH7alxw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n[data-v-fae5bece]:root {\n  --vt-c-white: #ffffff;\n  --vt-c-white-soft: #f8f8f8;\n  --vt-c-white-mute: #f2f2f2;\n\n  --vt-c-black: #1e1e1e;\n  --vt-c-black-soft: #222222;\n  --c-black-mute: #282828;\n\n  --c-indigo: #262E34;\n  --c-primary: #a3f7bf;\n  --c-secondary: #29a19c;\n\n  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);\n  --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);\n  --c-divider-dark-1: #435055;\n  --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);\n\n  --vt-c-text-light-1: var(--vt-c-indigo);\n  --vt-c-text-light-2: rgba(60, 60, 60, 0.66);\n  --vt-c-text-dark-1: var(--vt-c-white);\n  --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);\n}\n/* semantic color variables for this project */\n[data-v-fae5bece]:root {\n  --color-background: var(--vt-c-black);\n  --color-background-soft: var(--vt-c-black-soft);\n  --color-background-mute: var(--c-black-mute);\n\n  --color-border: var(--vt-c-divider-dark-2);\n  --color-border-secondary: var(--c-divider-dark-1);\n\n  --color-heading: var(--vt-c-text-dark-1);\n  --color-text: var(--vt-c-text-dark-2);\n\n  --color-primary: var(--c-primary);\n\n  --section-gap: 160px;\n\n  --bottom-menu-height: 70px;\n}\n@media (max-width: 480px) {\n[data-v-fae5bece]:root {\n    --bottom-menu-height: 50px;\n}\n}\n/* @media (prefers-color-scheme: dark) {\n  :root {\n    --color-background: var(--vt-c-black);\n    --color-background-soft: var(--vt-c-black-soft);\n    --color-background-mute: var(--c-black-mute);\n\n    --color-border: var(--vt-c-divider-dark-2);\n    --color-border-secondary: var(--c-divider-dark-1);\n\n    --color-heading: var(--vt-c-text-dark-1);\n    --color-text: var(--vt-c-text-dark-2);\n  }\n} */\n*[data-v-fae5bece],\n*[data-v-fae5bece]::before,\n*[data-v-fae5bece]::after {\n  box-sizing: border-box;\n  margin: 0;\n}\nbody[data-v-fae5bece] {\n  min-height: 100vh;\n  color: var(--color-text);\n  background: var(--color-background);\n  transition:\n    color 0.5s,\n    background-color 0.5s;\n  line-height: 1.6;\n  font-family: 'Cabin', sans-serif;\n  font-size: 15px;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n#app[data-v-fae5bece] {\n  max-width: 1280px;\n  margin: 0 auto;\n  font-weight: normal;\n}\na[data-v-fae5bece],\n.green[data-v-fae5bece] {\n  text-decoration: none;\n  color: var(--c-primary);\n  transition: 0.3s;\n  cursor: pointer;\n}\n@media (hover: hover) {\na[data-v-fae5bece]:hover {\n    background-color: hsla(160, 100%, 37%, 0.2);\n}\n}\n@media (min-width: 1024px) {\nbody[data-v-fae5bece] {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    place-items: center;\n}\n}\ntextarea[data-v-fae5bece] {\n  font-family:\n    'Cabin',\n    sans-serif;\n}\nhr[data-v-fae5bece] {\n  border: 1px solid var(--c-divider-dark-1);\n  border-radius: 2px;\n}\nblockquote[data-v-fae5bece] {\n  border-left: 2px solid var(--c-divider-dark-1);\n  border-radius: 1px;\n  padding-left: 25px;\n  font-size: 16px;\n}\nbutton[data-v-fae5bece], input[data-v-fae5bece] {\n  font-family: 'Cabin', sans-serif;\n}\nmeter[data-v-fae5bece] {\n  width: 90%;\n  height: 13px;\n  margin-top: 25px;\n  background: #a3f7bf44;\n  border-radius: 25px;\n}\nmeter[data-v-fae5bece]::-webkit-meter-bar {\n  background: var(--c-secondary);\n}\nmeter[data-v-fae5bece]:-moz-meter-optimum::-moz-meter-bar  {\n  background: var(--c-secondary);\n  border-radius: 25px;\n}\n.avatar[data-v-fae5bece] {\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border: 2px solid var(--color-primary);\n}\n.avatar-small[data-v-fae5bece] {\n    width: 35px;\n    height: 35px;\n    border-radius: 25px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border: 2px solid var(--color-primary);\n}\n.userinfo[data-v-fae5bece] {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.username[data-v-fae5bece] {\n    font-size: 18px;\n    color: white;\n    font-weight: bold;\n    margin-left: 15px;\n    margin-right: 10px;\n}\n.username-small[data-v-fae5bece] {\n    font-size: 16px;\n    color: white;\n    font-weight: bold;\n    margin-left: 15px;\n    margin-right: 10px;\n}\n@media (max-width: 480px) {\n.username[data-v-fae5bece] {\n        font-size: 16px;\n}\n.avatar[data-v-fae5bece] {\n        width: 35px;\n        height: 35px;\n}\n.post-buttons > button > svg[data-v-fae5bece] {\n        height: 25px !important;\n        width: 25px !important;\n}\n.post-more-options > svg[data-v-fae5bece] {\n        height: 18px !important;\n}\n}\n.btn-primary[data-v-fae5bece] {\n    border: 0px;\n    background-color: var(--c-secondary);\n    padding: 10px;\n    padding-left: 25px;\n    padding-right: 25px;\n    border-radius: 10px;\n    font-size: 16px;\n    cursor: pointer;\n}\n.btn-secondary[data-v-fae5bece] {\n    border: 1px solid var(--c-secondary);\n    background: transparent;\n    color: white;\n    padding: 10px;\n    padding-left: 25px;\n    padding-right: 25px;\n    border-radius: 10px;\n    font-size: 16px;\n    cursor: pointer;\n}\n.btn-primary[data-v-fae5bece]:active, .btn-secondary[data-v-fae5bece]:active {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    transition: all 0.1s cubic-bezier(0.17, 0.89, 0.24, 1.11);\n}\n.rounded[data-v-fae5bece] {\n    border-radius: 20px;\n}\n.btn-small[data-v-fae5bece] {\n    padding: 6px;\n    padding-left: 18px;\n    padding-right: 18px;\n}\n.close-btn[data-v-fae5bece] {\n    background: var(--color-background-soft);\n    border: 0px;\n    margin-left: 5%;\n    margin-top: 20px;\n    padding: 5px;\n    padding-bottom: 4px;\n    border-radius: 10px;\n}\n.loader[data-v-fae5bece] {\n    width: 48px;\n    height: 48px;\n    border: 5px solid var(--c-divider-dark-1);\n    border-top-color: var(--c-secondary);\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    -webkit-animation: rotation-fae5bece 1s cubic-bezier(0.525, 0.005, 0.500, 0.890) infinite;\n            animation: rotation-fae5bece 1s cubic-bezier(0.525, 0.005, 0.500, 0.890) infinite;\n}\n@-webkit-keyframes rotation-fae5bece {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes rotation-fae5bece {\n0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n.container[data-v-fae5bece] {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-top: 20px;\n    padding-bottom: var(--bottom-menu-height);\n}\n@media (max-width: 480px) {\n.v-enter-active[data-v-fae5bece],\n    .v-leave-active[data-v-fae5bece] {\n        transition: opacity 0.2s ease-in;\n}\n.v-enter-from[data-v-fae5bece],\n    .v-leave-to[data-v-fae5bece] {\n        opacity: 0;\n}\n}\n\n";
styleInject(css_248z);script.__scopeId = "data-v-fae5bece";
script.__file = "src/views/Home.vue";export{script as default};