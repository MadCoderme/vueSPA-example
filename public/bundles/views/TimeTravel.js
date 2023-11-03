import {createElementVNode,createTextVNode,defineComponent,openBlock,createElementBlock,ref,watch,Fragment,renderList,toDisplayString,withDirectives,vModelSelect,normalizeClass,createVNode,pushScopeId,popScopeId}from'vue';function styleInject(css, ref) {
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
}var css_248z$2 = ".avatar {\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border: 2px solid var(--color-primary);\n}\n.avatar-small {\n    width: 35px;\n    height: 35px;\n    border-radius: 25px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border: 2px solid var(--color-primary);\n}\n.userinfo {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.username {\n    font-size: 18px;\n    color: white;\n    font-weight: bold;\n    margin-left: 15px;\n    margin-right: 10px;\n}\n.username-small {\n    font-size: 16px;\n    color: white;\n    font-weight: bold;\n    margin-left: 15px;\n    margin-right: 10px;\n}\n@media (max-width: 480px) {\n    .username {\n        font-size: 16px;\n    }\n    .avatar {\n        width: 35px;\n        height: 35px;\n    }\n    .post-buttons > button > svg {\n        height: 25px !important;\n        width: 25px !important;\n    }\n    .post-more-options > svg {\n        height: 18px !important;\n    }\n}\n.btn-primary {\n    border: 0px;\n    background-color: var(--c-secondary);\n    padding: 10px;\n    padding-left: 25px;\n    padding-right: 25px;\n    border-radius: 10px;\n    font-size: 16px;\n    cursor: pointer;\n}\n.btn-secondary {\n    border: 1px solid var(--c-secondary);\n    background: transparent;\n    color: white;\n    padding: 10px;\n    padding-left: 25px;\n    padding-right: 25px;\n    border-radius: 10px;\n    font-size: 16px;\n    cursor: pointer;\n}\n.btn-primary:active, .btn-secondary:active {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    transition: all 0.1s cubic-bezier(0.17, 0.89, 0.24, 1.11);\n}\n.rounded {\n    border-radius: 20px;\n}\n.btn-small {\n    padding: 6px;\n    padding-left: 18px;\n    padding-right: 18px;\n}\n.close-btn {\n    background: var(--color-background-soft);\n    border: 0px;\n    margin-left: 5%;\n    margin-top: 20px;\n    padding: 5px;\n    padding-bottom: 4px;\n    border-radius: 10px;\n}\n.loader {\n    width: 48px;\n    height: 48px;\n    border: 5px solid var(--c-divider-dark-1);\n    border-top-color: var(--c-secondary);\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    -webkit-animation: rotation 1s cubic-bezier(0.525, 0.005, 0.500, 0.890) infinite;\n            animation: rotation 1s cubic-bezier(0.525, 0.005, 0.500, 0.890) infinite;\n}\n@-webkit-keyframes rotation {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n@keyframes rotation {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n.container {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-top: 20px;\n    padding-bottom: var(--bottom-menu-height);\n}";
styleInject(css_248z$2);var css_248z$1 = "\n.post-body {\n    width: 100%;\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n            align-self: center;\n    max-width: 600px;\n    padding: 5%;\n    background-color: var(--color-background);\n    margin-bottom: 6px;\n    cursor: pointer;\n}\n@media (min-width: 1024px) {\n    .post-body {\n        padding: 0%;\n        padding-top: 3%;\n        padding-bottom: 3%;\n    }\n}\n.post-text {\n    font-size: 17px;\n    color: white;\n    margin-left: 60px;\n}\n@media (max-width: 480px) {\n    .post-text {\n        font-size: 15px;\n        margin-left: 50px;\n    }\n}\n.post-text-small {\n    font-size: 15px;\n    color: white;\n}\n.post-text-detail {\n    font-size: 17px;\n    color: white;\n    margin-left: 10px;\n    margin-top: 20px;\n    margin-bottom: 50px;\n}\n.post-buttons {\n    min-width: 200px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-justify-content: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    margin-top: 5px;\n}\n.post-buttons > button {\n    width: 100%;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: transparent;\n    border: 0px;\n    padding: 10px;\n    border-radius: 10px;\n    color: white;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    transition: 0.5s ease;\n}\n.post-buttons > button[disabled=false]:hover {\n    background-color: #111111;\n    transition: 0.5s;\n}\n.post-buttons button span {\n    margin-left: 5px;\n}\n.post-more-options {\n    float: right;\n    margin-top: -35px;\n    background-color: transparent;\n    border: 0px;\n    padding-left: 5px;\n    padding-right: 5px;\n    border-radius: 5px;\n}\n.post-more-options:hover {\n    background-color: #111111;\n    transition: 0.5s;\n}\n.btn-gift {\n    background-color: transparent;\n    border: 0px;\n    position: absolute;\n    right: 20px;\n}\n.comment-input {\n    position: fixed;\n    bottom: var(--bottom-menu-height);\n    margin-bottom: -3px;\n    left: 0px;\n    width: 100%;\n}\n.comment-input textarea {\n    width: 100%;\n    resize: none;\n    background-color: var(--c-black-mute);\n    border: 0px;\n    color: white;\n    padding-left: 15px;\n    padding-top: 15px;\n}\n.comment-input textarea:focus {\n    outline: none;\n}\n.comment-share-btn, .comment-share-btn-d {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    background: transparent;\n    border: 0px;\n    fill-opacity: 0.8;\n    cursor: pointer;\n}\n.comment-share-btn:hover {\n    fill-opacity: 1;\n}\n.comment-sticker-btn, .comment-sticker-btn-d {\n    position: absolute;\n    top: 15px;\n    background: transparent;\n    border: 0px;\n    fill-opacity: 0.5;\n}\n.comment-sticker-btn {\n    right: 10px;\n    -webkit-animation: moveRight 0.1s ease-out both;\n            animation: moveRight 0.1s ease-out both;\n}\n.comment-sticker-btn-d {\n    right: 0px;\n    -webkit-animation: moveRightD 0.1s ease-out both;\n            animation: moveRightD 0.1s ease-out both;\n}\n@-webkit-keyframes moveRight {\n    0% {\n        right: 45px;\n    }        \n    100% {\n        right: 10px;\n    }\n}\n@keyframes moveRight {\n    0% {\n        right: 45px;\n    }        \n    100% {\n        right: 10px;\n    }\n}\n@-webkit-keyframes moveRightD {\n    0% {\n        right: 15px;\n    }        \n    100% {\n        right: 0px;\n    }\n}\n@keyframes moveRightD {\n    0% {\n        right: 15px;\n    }        \n    100% {\n        right: 0px;\n    }\n}\n.comment-sticker-btn:hover {\n    fill-opacity: 0.9;\n}\n.comment-sticker-btn-2, .comment-sticker-btn-2-d {\n    position: absolute;\n    top: 15px;\n    background: transparent;\n    border: 0px;\n    fill-opacity: 0.5;\n}\n.comment-sticker-btn-2 {\n    -webkit-animation: moveLeft 0.1s ease-out both;\n            animation: moveLeft 0.1s ease-out both;\n}\n.comment-sticker-btn-2-d {\n    -webkit-animation: moveLeftD 0.2s ease-out both;\n            animation: moveLeftD 0.2s ease-out both;\n}\n.comment-sticker-btn-2:hover {\n    fill-opacity: 0.9;\n}\n@-webkit-keyframes moveLeft {\n    0% {\n        right: 10px;\n    }        \n    100% {\n        right: 45px;\n    }\n}\n@keyframes moveLeft {\n    0% {\n        right: 10px;\n    }        \n    100% {\n        right: 45px;\n    }\n}\n@-webkit-keyframes moveLeftD {\n    0% {\n        right: 0px;\n    }        \n    100% {\n        right: 10px;\n    }\n}\n@keyframes moveLeftD {\n    0% {\n        right: 0px;\n    }        \n    100% {\n        right: 10px;\n    }\n}\n.translation-original {\n    margin-bottom: 20px;\n}\n.translation-source {\n    color: var(--c-primary); \n    opacity: 0.5; \n    margin-top: 5px\n}\n.donation-container {\n    display: block;\n    width: 80%;\n    margin: 15px;\n    margin-left: 10%;\n    border-radius: 20px;\n    color: white;\n    overflow: hidden;\n}\n.donation-container > div {\n    height: 100%;\n    width: 100%;\n    padding: 10px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: rgba(0,0,0,0.7);\n    -webkit-backdrop-filter: blur(1px);\n            backdrop-filter: blur(1px);\n}\n.donation-texts {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    width: 90%;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}";
styleInject(css_248z$1);const _hoisted_1$1 = {
    class: "post-body",
    style: { "background-color": "var(--c-black-mute)", "padding-top": "15px" }
};
const _hoisted_2$1 = createElementVNode("div", { class: "userinfo" }, [
    createElementVNode("img", {
        src: "https://plus.unsplash.com/premium_photo-1669800502069-499e172df081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        loading: "lazy",
        class: "avatar"
    }),
    createElementVNode("p", { class: "username" }, "Andrew"),
    createElementVNode("p", null, "2m")
], -1);
const _hoisted_3$1 = createElementVNode("p", { class: "post-text" }, [
    createTextVNode(" Just found out, you can see your posts on specific dates in the past. This feels like a literal time machine! "),
    createElementVNode("br"),
    createTextVNode(" It’s probably going to be a trend 😉 ")
], -1);
const _hoisted_4$1 = createElementVNode("br", null, null, -1);
const _hoisted_5$1 = { style: { "display": "flex", "justify-content": "space-evenly" } };
var script$1 = defineComponent({
    __name: 'PeekPost',
    setup(__props) {
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1$1, [
                _hoisted_2$1,
                _hoisted_3$1,
                _hoisted_4$1,
                createElementVNode("div", _hoisted_5$1, [
                    createElementVNode("button", {
                        class: "btn-secondary rounded",
                        onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.$router.push('/p/1/stats')))
                    }, " View Stats "),
                    createElementVNode("button", {
                        class: "btn-primary rounded",
                        onClick: _cache[1] || (_cache[1] = ($event) => (_ctx.$router.push('/p/1')))
                    }, " View Post ")
                ])
            ]));
        };
    }
});script$1.__file = "src/components/post/PeekPost.vue";const _withScopeId = n => (pushScopeId("data-v-130b6681"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = _withScopeId(() => createElementVNode("h2", { class: "title" }, "Time Travel to the Past", -1));
const _hoisted_3 = { class: "calender" };
const _hoisted_4 = ["value"];
const _hoisted_5 = _withScopeId(() => createElementVNode("option", null, "2023", -1));
const _hoisted_6 = _withScopeId(() => createElementVNode("option", null, "2022", -1));
const _hoisted_7 = [
    _hoisted_5,
    _hoisted_6
];
const _hoisted_8 = { class: "calender-pagination" };
const _hoisted_9 = _withScopeId(() => createElementVNode("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [
    createElementVNode("path", {
        d: "M11.414 12L13.889 14.475L13.182 15.182L10 12L13.182 8.81799L13.889 9.52499L11.414 12Z",
        fill: "#A3F7BF"
    })
], -1));
const _hoisted_10 = [
    _hoisted_9
];
const _hoisted_11 = {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    style: { "transform": "rotate(180deg)" },
    xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_12 = _withScopeId(() => createElementVNode("path", {
    d: "M11.414 12L13.889 14.475L13.182 15.182L10 12L13.182 8.81799L13.889 9.52499L11.414 12Z",
    fill: "#A3F7BF"
}, null, -1));
const _hoisted_13 = [
    _hoisted_12
];
const _hoisted_14 = { class: "dates-list" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = { class: "date-title" };
const _hoisted_17 = { style: { "margin-top": "20px" } };
var script = defineComponent({
    __name: 'TimeTravel',
    setup(__props) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const today = new Date();
        const selectedMonth = ref(today.getMonth());
        const selectedYear = ref(today.getFullYear());
        const startFrom = ref(0);
        const selectedDate = ref(today.getDate());
        watch(selectedMonth, async (newMonth) => {
            let d = new Date();
            d.setFullYear(selectedYear.value);
            d.setMonth(newMonth);
            d.setDate(1);
            startFrom.value = d.getDay();
        });
        function prevMonth() {
            if (selectedMonth.value > 0)
                selectedMonth.value -= 1;
            else {
                selectedMonth.value = 11;
                selectedYear.value -= 1;
            }
        }
        function nextMonth() {
            if (selectedMonth.value < 11)
                selectedMonth.value += 1;
            else {
                selectedMonth.value = 0;
                selectedYear.value += 1;
            }
        }
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1, [
                _hoisted_2,
                createElementVNode("div", _hoisted_3, [
                    createElementVNode("select", {
                        onChange: _cache[0] || (_cache[0] = ($event) => (selectedMonth.value = months.indexOf($event.target.value))),
                        value: months[selectedMonth.value]
                    }, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(months, (item, index) => {
                            return createElementVNode("option", {
                                key: index,
                                style: { "background": "#1e1e1e" }
                            }, toDisplayString(item), 1);
                        }), 64))
                    ], 40, _hoisted_4),
                    withDirectives(createElementVNode("select", {
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ((selectedYear).value = $event))
                    }, [..._hoisted_7], 512), [
                        [vModelSelect, selectedYear.value]
                    ]),
                    createElementVNode("div", _hoisted_8, [
                        createElementVNode("button", {
                            onClick: _cache[2] || (_cache[2] = ($event) => (prevMonth()))
                        }, [..._hoisted_10]),
                        createElementVNode("button", {
                            onClick: _cache[3] || (_cache[3] = ($event) => (nextMonth()))
                        }, [
                            (openBlock(), createElementBlock("svg", _hoisted_11, [..._hoisted_13]))
                        ])
                    ]),
                    createElementVNode("div", _hoisted_14, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(days, (item) => {
                            return createElementVNode("p", {
                                key: item,
                                style: { "color": "#718096" }
                            }, toDisplayString(item), 1);
                        }), 64)),
                        (openBlock(true), createElementBlock(Fragment, null, renderList((30 + startFrom.value), (item) => {
                            return (openBlock(), createElementBlock("p", {
                                onClick: ($event) => (selectedDate.value = item),
                                class: normalizeClass({ 'selected-date': selectedDate.value == item }),
                                key: item
                            }, toDisplayString((item - startFrom.value) > 0 ? (item - startFrom.value) : ''), 11, _hoisted_15));
                        }), 128))
                    ])
                ]),
                createElementVNode("p", _hoisted_16, "Posts on " + toDisplayString(selectedDate.value) + " " + toDisplayString(months[selectedMonth.value]) + " " + toDisplayString(selectedYear.value), 1),
                createElementVNode("div", _hoisted_17, [
                    createVNode(script$1),
                    createVNode(script$1),
                    createVNode(script$1)
                ])
            ]));
        };
    }
});var css_248z = "\n.container[data-v-130b6681] {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-top: 20px;\n    padding-bottom: var(--bottom-menu-height);\n}\n.title[data-v-130b6681] {\n    color: white;\n    font-weight: bold;\n}\n.calender[data-v-130b6681] {\n    padding: 15px;\n    margin: 10px;\n    background: var(--c-black-mute);\n    border-radius: 10px;\n}\n.calender > select[data-v-130b6681] {\n    padding: 7px;\n    margin-inline: 10px;\n    background-color: transparent;\n    border: none;\n    border-radius: 5px;\n    color: var(--c-primary);\n    cursor: pointer;\n}\n.calender > select[data-v-130b6681]:hover {\n    background-color: var(--color-background);\n}\n.calender-pagination[data-v-130b6681] {\n    float: right;\n}\n.calender-pagination > button[data-v-130b6681] {\n    background-color: transparent;\n    padding: 0px;\n    padding-bottom: -8px;\n    border: none;\n    border-radius: 10px;\n    cursor: pointer;\n}\n.calender-pagination > button[data-v-130b6681]:hover {\n    background-color: var(--color-background);\n}\n.dates-list[data-v-130b6681] {\n    margin: 10px;\n    margin-top: 15px;\n    display: grid;\n    grid-template-columns: auto auto auto auto auto auto auto;\n    -webkit-column-gap: 15px;\n            column-gap: 15px;\n}\n.dates-list>p[data-v-130b6681] {\n    text-align: center;\n    font-size: 16px;\n    padding: 2px;\n    color: var(--c-primary);\n    cursor: pointer;\n}\n.selected-date[data-v-130b6681] {\n    background-color: var(--c-secondary);\n    border-radius: 20px;\n    color: white !important;\n}\n.date-title[data-v-130b6681] {\n    -webkit-align-self: flex-start;\n        -ms-flex-item-align: start;\n            align-self: flex-start;\n    margin-left: 30px;\n    margin-top: 30px;\n    color: white;\n    font-size: 18px;\n    font-weight: bold;\n}\n";
styleInject(css_248z);script.__scopeId = "data-v-130b6681";
script.__file = "src/views/TimeTravel.vue";export{script as default};