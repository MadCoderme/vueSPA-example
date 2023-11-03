import {defineComponent,openBlock,createElementBlock,createElementVNode,pushScopeId,popScopeId,createStaticVNode,ref,createVNode,withDirectives,createTextVNode,toDisplayString,vShow,Fragment,renderList}from'vue';const _withScopeId$1 = n => (pushScopeId("data-v-0eca37cb"), n = n(), popScopeId(), n);
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
script$1.__file = "src/components/SearchBar.vue";const _withScopeId = n => (pushScopeId("data-v-1a1d373c"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = { class: "suggestions" };
const _hoisted_3 = { style: { "color": "white" } };
const _hoisted_4 = { class: "hashtags-popular" };
const _hoisted_5 = _withScopeId(() => createElementVNode("h2", null, "#", -1));
const _hoisted_6 = _withScopeId(() => createElementVNode("p", { style: { "color": "#ababab" } }, "Used 5k times in last 24h", -1));
const _hoisted_7 = _withScopeId(() => createElementVNode("button", null, [
    createElementVNode("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [
        createElementVNode("path", {
            d: "M18 12C17.45 12 17 12.45 17 13V18.22C17 18.77 16.55 19.22 16 19.22H6C5.45 19.22 5 18.77 5 18.22V8C5 7.45 5.45 7 6 7H11C11.55 7 12 6.55 12 6C12 5.45 11.55 5 11 5H5C3.9 5 3 5.9 3 7V19C3 20.1 3.9 21 5 21H17C18.1 21 19 20.1 19 19V13C19 12.45 18.55 12 18 12ZM21.02 5H19V2.98C19 2.44 18.56 2 18.02 2H17.99C17.44 2 17 2.44 17 2.98V5H14.99C14.45 5 14.01 5.44 14 5.98V6.01C14 6.56 14.44 7 14.99 7H17V9.01C17 9.55 17.44 10 17.99 9.99H18.02C18.56 9.99 19 9.55 19 9.01V7H21.02C21.56 7 22 6.56 22 6.02V5.98C22 5.44 21.56 5 21.02 5Z",
            fill: "#A3F7BF",
            "fill-opacity": "0.6"
        }),
        createElementVNode("path", {
            d: "M14 9H8C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9ZM14 12H8C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14H14C14.55 14 15 13.55 15 13C15 12.45 14.55 12 14 12ZM14 15H8C7.45 15 7 15.45 7 16C7 16.55 7.45 17 8 17H14C14.55 17 15 16.55 15 16C15 15.45 14.55 15 14 15Z",
            fill: "#A3F7BF",
            "fill-opacity": "0.6"
        })
    ])
], -1));
const _hoisted_8 = createStaticVNode("<a style=\"align-self:flex-end;margin-right:8%;margin-bottom:10px;\" data-v-1a1d373c>More...</a><div class=\"map\" data-v-1a1d373c><svg width=\"25\" height=\"25\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-1a1d373c><path d=\"M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM10 18L12 16L13 15V13H11V12L10 11H7V14L9 16V17.931C5.06 17.436 2 14.072 2 10L3 11H5V9H7L10 6V4H8L7 3V2.589C8.92313 1.80478 11.0769 1.80478 13 2.589V4L12 5V7L13 8L16.13 4.87C16.8914 5.78093 17.4401 6.85022 17.736 8H16L14 10V12L15 13H17L17.286 13.286C16.029 16.061 13.239 18 10 18Z\" fill=\"white\" data-v-1a1d373c></path></svg><div class=\"map-option\" data-v-1a1d373c><div class=\"overlay-map\" data-v-1a1d373c></div><div class=\"overlay\" data-v-1a1d373c></div><p data-v-1a1d373c>Explore Trends Map</p></div></div>", 2);
const _hoisted_10 = { class: "interests" };
const _hoisted_11 = {
    width: "25",
    height: "24",
    viewBox: "0 0 20 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { "margin-bottom": "10px" }
};
const _hoisted_12 = _withScopeId(() => createElementVNode("path", {
    d: "M0 9L5 0L10 9H0ZM5 19C3.9 19 2.95833 18.6083 2.175 17.825C1.39167 17.0417 1 16.1 1 15C1 13.8833 1.39167 12.9373 2.175 12.162C2.95833 11.3867 3.9 10.9993 5 11C6.1 11 7.04167 11.3917 7.825 12.175C8.60833 12.9583 9 13.9 9 15C9 16.1 8.60833 17.0417 7.825 17.825C7.04167 18.6083 6.1 19 5 19ZM5 17C5.55 17 6.021 16.804 6.413 16.412C6.805 16.02 7.00067 15.5493 7 15C7 14.45 6.804 13.979 6.412 13.587C6.02 13.195 5.54933 12.9993 5 13C4.45 13 3.979 13.196 3.587 13.588C3.195 13.98 2.99933 14.4507 3 15C3 15.55 3.196 16.021 3.588 16.413C3.98 16.805 4.45067 17.0007 5 17ZM3.4 7H6.6L5 4.125L3.4 7ZM11 19V11H19V19H11ZM13 17H17V13H13V17ZM15 9C14.05 8.2 13.254 7.525 12.612 6.975C11.97 6.425 11.4577 5.94167 11.075 5.525C10.6917 5.10833 10.4167 4.71667 10.25 4.35C10.0833 3.98333 10 3.59167 10 3.175C10 2.425 10.2627 1.79167 10.788 1.275C11.3133 0.758333 11.9673 0.5 12.75 0.5C13.2 0.5 13.621 0.604333 14.013 0.813C14.405 1.02167 14.734 1.309 15 1.675C15.2667 1.30833 15.596 1.021 15.988 0.813C16.38 0.605 16.8007 0.500667 17.25 0.5C18.0333 0.5 18.6877 0.758333 19.213 1.275C19.7383 1.79167 20.0007 2.425 20 3.175C20 3.59167 19.9167 3.98333 19.75 4.35C19.5833 4.71667 19.3083 5.10833 18.925 5.525C18.5417 5.94167 18.029 6.425 17.387 6.975C16.745 7.525 15.9493 8.2 15 9ZM15 6.375C16.2 5.375 17 4.66667 17.4 4.25C17.8 3.83333 18 3.49167 18 3.225C18 3.00833 17.9373 2.83333 17.812 2.7C17.6867 2.56667 17.516 2.5 17.3 2.5C17.1333 2.5 16.9707 2.54567 16.812 2.637C16.6533 2.72833 16.4577 2.891 16.225 3.125L15 4.3L13.775 3.125C13.5417 2.89167 13.3457 2.729 13.187 2.637C13.0283 2.545 12.866 2.49933 12.7 2.5C12.4833 2.5 12.3127 2.56667 12.188 2.7C12.0633 2.83333 12.0007 3.00833 12 3.225C12 3.49167 12.2 3.83333 12.6 4.25C13 4.66667 13.8 5.375 15 6.375Z",
    fill: "white"
}, null, -1));
const _hoisted_13 = [
    _hoisted_12
];
const _hoisted_14 = _withScopeId(() => createElementVNode("p", { class: "interest-hashtag" }, "#Programming", -1));
const _hoisted_15 = _withScopeId(() => createElementVNode("p", null, "Relavant: #webdev, #css, #programmerhumour...", -1));
const _hoisted_16 = [
    _hoisted_14,
    _hoisted_15
];
var script = defineComponent({
    __name: 'Search',
    setup(__props) {
        const key = ref('');
        function handleSearch(e) {
            key.value = e.value;
        }
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1, [
                createVNode(script$1, {
                    style: { "width": "85%", "margin-top": "10%" },
                    onOnChange: handleSearch
                }),
                withDirectives(createElementVNode("div", _hoisted_2, [
                    createElementVNode("p", {
                        onClick: _cache[0] || (_cache[0] = ($event) => (_ctx.$router.push('/search/results?keyword=' + key.value)))
                    }, [
                        createTextVNode(" Search: "),
                        createElementVNode("span", _hoisted_3, toDisplayString(key.value), 1)
                    ])
                ], 512), [
                    [vShow, key.value]
                ]),
                createElementVNode("div", _hoisted_4, [
                    _hoisted_5,
                    (openBlock(), createElementBlock(Fragment, null, renderList(3, (item) => {
                        return createElementVNode("div", { key: item }, [
                            createElementVNode("p", {
                                class: "hashtag",
                                onClick: _cache[1] || (_cache[1] = ($event) => (_ctx.$router.push({ path: '/search/results', query: { hashtags: 'aiKillsJobs' } })))
                            }, " aiKillsjobs "),
                            _hoisted_6,
                            _hoisted_7
                        ]);
                    }), 64))
                ]),
                _hoisted_8,
                createElementVNode("div", _hoisted_10, [
                    (openBlock(), createElementBlock("svg", _hoisted_11, [..._hoisted_13])),
                    (openBlock(), createElementBlock(Fragment, null, renderList(3, (item) => {
                        return createElementVNode("div", {
                            key: item,
                            onClick: _cache[2] || (_cache[2] = ($event) => (_ctx.$router.push({ path: '/search/results', query: { hashtags: 'programming' } })))
                        }, [..._hoisted_16]);
                    }), 64))
                ])
            ]));
        };
    }
});var css_248z = "\n.container[data-v-1a1d373c] {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-bottom: 20%;\n}\n.hashtags-popular[data-v-1a1d373c] {\n    width: 100%;\n    padding: 5%;\n    color: white;\n}\n.hashtags-popular > h2[data-v-1a1d373c] {\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n.hashtags-popular > div[data-v-1a1d373c] {\n    cursor: pointer;\n    margin-bottom: 20px;\n}\n.hashtags-popular > div > button[data-v-1a1d373c] {\n    float: right;\n    margin-top: -45px;\n    background: transparent;\n    border: none;\n    border-radius: 10px;\n    padding: 5px;\n    padding-bottom: 2px;\n    cursor: pointer;\n}\n.hashtags-popular > div > button[data-v-1a1d373c]:hover {\n    background: var(--c-black-mute);\n}\n.hashtag[data-v-1a1d373c] {\n    font-size: 18px;\n    font-weight: bold;\n}\n.map[data-v-1a1d373c], .interests[data-v-1a1d373c] {\n    width: 100%;\n    padding: 5%;\n}\n.map-option[data-v-1a1d373c] {\n    width: 100%;\n    height: 10vh;\n    margin-top: 25px;\n    overflow: hidden;\n    border-radius: 20px;\n    cursor: pointer;\n}\n.map-option > p[data-v-1a1d373c] {\n    color: white;\n    font-size: 20px;\n    font-weight: bold;\n    text-align: center;\n    position: absolute;\n    -webkit-align-self: center;\n        -ms-flex-item-align: center;\n            align-self: center;\n    margin-top: -6.5vh;\n    left: 0px;\n    right: 0px;\n}\n.overlay-map[data-v-1a1d373c] {\n    background-image: url('https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/[-77.043686,38.892035,-77.028923,38.904192]/400x400?access_token=pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg');\n    background-size: cover;\n    -webkit-filter: blur(1px);\n            filter: blur(1px);\n    width: 100%;\n    height: 100%;\n}\n.overlay[data-v-1a1d373c] {\n    background: rgba(0,0,0,0.7);\n    position: absolute;\n    width: 90%;\n    height: 10vh;\n    margin-top: -10vh;\n    border-radius: 20px;\n    border: 2px solid var(--c-primary);\n}\n.interests > div[data-v-1a1d373c] {\n    margin-bottom: 20px;\n    cursor: pointer;\n}\n.interest-hashtag[data-v-1a1d373c] {\n    color: white;\n    font-size: 18px;\n    font-weight: bold;\n}\n.suggestions[data-v-1a1d373c] {\n    background-color: var(--c-black-mute);\n    width: 85%;\n    padding: 10px;\n    border-radius: 10px;\n    margin-top: 5px;\n    padding-left: 20px;\n    color: #ababab;\n}\n.suggestions > p[data-v-1a1d373c] {\n    cursor: pointer;\n}\n";
styleInject(css_248z);script.__scopeId = "data-v-1a1d373c";
script.__file = "src/views/Search.vue";export{script as default};