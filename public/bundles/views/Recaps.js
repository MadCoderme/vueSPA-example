import {openBlock,createElementBlock,createStaticVNode,defineComponent,ref,createElementVNode,normalizeStyle,withDirectives,createVNode,vShow,pushScopeId,popScopeId}from'vue';const _hoisted_1$1 = { class: "info-list" };
const _hoisted_2$1 = /*#__PURE__*/createStaticVNode("<div class=\"info-block\" data-v-24556b8d><h3 data-v-24556b8d><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-24556b8d><path d=\"M18 12C17.45 12 17 12.45 17 13V18.22C17 18.77 16.55 19.22 16 19.22H6C5.45 19.22 5 18.77 5 18.22V8C5 7.45 5.45 7 6 7H11C11.55 7 12 6.55 12 6C12 5.45 11.55 5 11 5H5C3.9 5 3 5.9 3 7V19C3 20.1 3.9 21 5 21H17C18.1 21 19 20.1 19 19V13C19 12.45 18.55 12 18 12ZM21.02 5H19V2.98C19 2.44 18.56 2 18.02 2H17.99C17.44 2 17 2.44 17 2.98V5H14.99C14.45 5 14.01 5.44 14 5.98V6.01C14 6.56 14.44 7 14.99 7H17V9.01C17 9.55 17.44 10 17.99 9.99H18.02C18.56 9.99 19 9.55 19 9.01V7H21.02C21.56 7 22 6.56 22 6.02V5.98C22 5.44 21.56 5 21.02 5Z\" fill=\"#A3F7BF\" fill-opacity=\"0.6\" data-v-24556b8d></path><path d=\"M14 9H8C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9ZM14 12H8C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14H14C14.55 14 15 13.55 15 13C15 12.45 14.55 12 14 12ZM14 15H8C7.45 15 7 15.45 7 16C7 16.55 7.45 17 8 17H14C14.55 17 15 16.55 15 16C15 15.45 14.55 15 14 15Z\" fill=\"#A3F7BF\" fill-opacity=\"0.6\" data-v-24556b8d></path></svg> 1 </h3><p data-v-24556b8d>Posts Created</p></div><div class=\"info-block\" data-v-24556b8d><h3 data-v-24556b8d><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-24556b8d><path d=\"M21.6328 6.64688C21.3187 5.91946 20.8657 5.26029 20.2992 4.70625C19.7323 4.15056 19.064 3.70896 18.3305 3.40547C17.5699 3.08952 16.7541 2.92779 15.9305 2.92969C14.775 2.92969 13.6477 3.24609 12.668 3.84375C12.4336 3.98672 12.2109 4.14375 12 4.31485C11.7891 4.14375 11.5664 3.98672 11.332 3.84375C10.3523 3.24609 9.225 2.92969 8.06953 2.92969C7.2375 2.92969 6.43125 3.08906 5.66953 3.40547C4.93359 3.71016 4.27031 4.14844 3.70078 4.70625C3.13359 5.25966 2.6805 5.91899 2.36719 6.64688C2.04141 7.40391 1.875 8.20781 1.875 9.03516C1.875 9.81563 2.03438 10.6289 2.35078 11.4563C2.61563 12.1477 2.99531 12.8648 3.48047 13.5891C4.24922 14.7352 5.30625 15.9305 6.61875 17.1422C8.79375 19.1508 10.9477 20.5383 11.0391 20.5945L11.5945 20.9508C11.8406 21.1078 12.157 21.1078 12.4031 20.9508L12.9586 20.5945C13.05 20.5359 15.2016 19.1508 17.3789 17.1422C18.6914 15.9305 19.7484 14.7352 20.5172 13.5891C21.0023 12.8648 21.3844 12.1477 21.6469 11.4563C21.9633 10.6289 22.1227 9.81563 22.1227 9.03516C22.125 8.20781 21.9586 7.40391 21.6328 6.64688ZM12 19.0969C12 19.0969 3.65625 13.7508 3.65625 9.03516C3.65625 6.64688 5.63203 4.71094 8.06953 4.71094C9.78281 4.71094 11.2688 5.66719 12 7.06406C12.7313 5.66719 14.2172 4.71094 15.9305 4.71094C18.368 4.71094 20.3438 6.64688 20.3438 9.03516C20.3438 13.7508 12 19.0969 12 19.0969Z\" fill=\"#A3F7BF\" fill-opacity=\"0.6\" data-v-24556b8d></path></svg> 15 </h3><p data-v-24556b8d>Loved Posts</p></div><div class=\"info-block\" data-v-24556b8d><h3 data-v-24556b8d><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-24556b8d><path d=\"M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89472 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 13.488 3.36 14.891 4 16.127L3 21L7.873 20C9.109 20.64 10.513 21 12 21Z\" stroke=\"#A3F7BF\" stroke-opacity=\"0.6\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-24556b8d></path></svg> 3 </h3><p data-v-24556b8d>Comments</p></div><div class=\"info-block\" data-v-24556b8d><h3 data-v-24556b8d><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-24556b8d><path d=\"M13.4297 9.86719C12.8883 9.86719 12.4688 10.2867 12.4688 10.8047C12.4688 11.3227 12.8883 11.7422 13.4297 11.7422C13.9242 11.7422 14.3438 11.3227 14.3438 10.8047C14.3438 10.2867 13.9242 9.86719 13.4297 9.86719ZM6.86719 9.86719C6.32578 9.86719 5.90625 10.2867 5.90625 10.8047C5.90625 11.3227 6.32578 11.7422 6.86719 11.7422C7.36172 11.7422 7.78125 11.3227 7.78125 10.8047C7.78125 10.2867 7.36172 9.86719 6.86719 9.86719Z\" fill=\"#A3F7BF\" fill-opacity=\"0.6\" data-v-24556b8d></path><path d=\"M20.9531 8.08594C19.8257 6.53907 18.2507 5.50547 16.5234 5.03907V5.04141C16.1226 4.5961 15.6702 4.18594 15.164 3.82032C11.3273 1.03125 5.94134 1.88203 3.14056 5.71875C0.883525 8.83594 0.979619 13.0289 3.28118 16.0078L3.29993 19.1156C3.29993 19.1906 3.31165 19.2656 3.33509 19.3359C3.45931 19.732 3.88118 19.95 4.27493 19.8258L7.24212 18.8906C8.02728 19.1695 8.83821 19.3289 9.64446 19.3734L9.63274 19.3828C11.721 20.9039 14.4585 21.3609 16.9687 20.5313L19.9476 21.5016C20.0226 21.525 20.0999 21.5391 20.1796 21.5391C20.5945 21.5391 20.9296 21.2039 20.9296 20.7891V17.6484C22.9945 14.8453 23.0484 10.9711 20.9531 8.08594ZM7.57024 17.2266L7.28899 17.1094L4.96868 17.8359L4.94524 15.3984L4.75774 15.1875C2.77493 12.7688 2.64368 9.2836 4.49993 6.72657C6.75931 3.62813 11.0906 2.94375 14.1796 5.17969C17.2781 7.43203 17.9648 11.7563 15.7265 14.8359C13.8491 17.4117 10.4882 18.3633 7.57024 17.2266ZM19.4062 16.8281L19.2187 17.0625L19.2421 19.5L16.9452 18.7266L16.664 18.8438C15.3515 19.3313 13.9523 19.3711 12.6562 19.0078L12.6515 19.0055C14.3835 18.4734 15.9538 17.3953 17.0859 15.8438C18.8765 13.3758 19.1671 10.275 18.1265 7.63125L18.1406 7.64063C18.6796 8.02735 19.1742 8.51016 19.5937 9.09375C21.2952 11.4281 21.1992 14.6063 19.4062 16.8281Z\" fill=\"#A3F7BF\" fill-opacity=\"0.6\" data-v-24556b8d></path><path d=\"M10.1484 9.86719C9.60703 9.86719 9.1875 10.2867 9.1875 10.8047C9.1875 11.3227 9.60703 11.7422 10.1484 11.7422C10.643 11.7422 11.0625 11.3227 11.0625 10.8047C11.0625 10.2867 10.643 9.86719 10.1484 9.86719Z\" fill=\"#A3F7BF\" fill-opacity=\"0.6\" data-v-24556b8d></path></svg> 0 </h3><p data-v-24556b8d>Discussions</p></div><div class=\"info-block\" data-v-24556b8d><h3 data-v-24556b8d><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-24556b8d><path d=\"M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z\" stroke=\"#A3F7BF\" stroke-opacity=\"0.6\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-24556b8d></path><path d=\"M12 7V12L15 15\" stroke=\"#A3F7BF\" stroke-opacity=\"0.6\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-v-24556b8d></path></svg> 27 </h3><p data-v-24556b8d>mins Spent</p></div><div class=\"info-block\" data-v-24556b8d><h3 data-v-24556b8d><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" data-v-24556b8d><path d=\"M9.125 2C8.56141 2 8.02091 2.22388 7.6224 2.6224C7.22388 3.02091 7 3.56141 7 4.125V19.875C7 20.4386 7.22388 20.9791 7.6224 21.3776C8.02091 21.7761 8.56141 22 9.125 22H14.875C15.4386 22 15.9791 21.7761 16.3776 21.3776C16.7761 20.9791 17 20.4386 17 19.875V4.125C17 3.56141 16.7761 3.02091 16.3776 2.6224C15.9791 2.22388 15.4386 2 14.875 2H9.125ZM8.25 6.375H10.375C10.5408 6.375 10.6997 6.30915 10.8169 6.19194C10.9342 6.07473 11 5.91576 11 5.75C11 5.58424 10.9342 5.42527 10.8169 5.30806C10.6997 5.19085 10.5408 5.125 10.375 5.125H8.25V4.125C8.25 3.642 8.642 3.25 9.125 3.25H14.875C15.358 3.25 15.75 3.642 15.75 4.125V19.875C15.75 20.1071 15.6578 20.3296 15.4937 20.4937C15.3296 20.6578 15.1071 20.75 14.875 20.75H9.125C8.89294 20.75 8.67038 20.6578 8.50628 20.4937C8.34219 20.3296 8.25 20.1071 8.25 19.875V18.875H10.375C10.5408 18.875 10.6997 18.8092 10.8169 18.6919C10.9342 18.5747 11 18.4158 11 18.25C11 18.0842 10.9342 17.9253 10.8169 17.8081C10.6997 17.6908 10.5408 17.625 10.375 17.625H8.25V15.75H12.375C12.5408 15.75 12.6997 15.6842 12.8169 15.5669C12.9342 15.4497 13 15.2908 13 15.125C13 14.9592 12.9342 14.8003 12.8169 14.6831C12.6997 14.5658 12.5408 14.5 12.375 14.5H8.25V12.625H10.375C10.5408 12.625 10.6997 12.5592 10.8169 12.4419C10.9342 12.3247 11 12.1658 11 12C11 11.8342 10.9342 11.6753 10.8169 11.5581C10.6997 11.4408 10.5408 11.375 10.375 11.375H8.25V9.5H12.375C12.5408 9.5 12.6997 9.43415 12.8169 9.31694C12.9342 9.19973 13 9.04076 13 8.875C13 8.70924 12.9342 8.55027 12.8169 8.43306C12.6997 8.31585 12.5408 8.25 12.375 8.25H8.25V6.375Z\" fill=\"#A3F7BF\" fill-opacity=\"0.6\" data-v-24556b8d></path></svg> 12 </h3><p data-v-24556b8d>meters Scrolled</p></div>", 6);
const _hoisted_8$1 = [
  _hoisted_2$1
];

function render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [..._hoisted_8$1]))
}function styleInject(css, ref) {
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
}var css_248z$1 = "\n.info-list[data-v-24556b8d] {\n    display: grid;\n    grid-template-columns: auto auto;\n    gap: 15px;\n    margin-top: 25px;\n}\n@media (max-width: 480px) {\n.info-list[data-v-24556b8d] {\n        grid-template-columns: auto;\n}\n}\n.info-block[data-v-24556b8d] {\n    padding: 20px;\n    background-color: var(--c-black-mute);\n    width: 150px;\n    border: 1px solid #a3f7bf88;\n    border-radius: 10px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-bottom: 20px;\n}\n.info-block > h3[data-v-24556b8d] {\n    color: white;\n    font-weight: bold;\n    font-size: 22px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.info-block > h3 > svg[data-v-24556b8d] {\n    margin-right: 5px;\n}\n.info-block > p[data-v-24556b8d] {\n    color: #ababab;\n}\n";
styleInject(css_248z$1);const script$1 = {};

script$1.render = render;
script$1.__scopeId = "data-v-24556b8d";
script$1.__file = "src/components/RecapInfo.vue";const _withScopeId = n => (pushScopeId("data-v-61ea604e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = _withScopeId(() => createElementVNode("h2", { class: "title" }, "Your Recaps", -1));
const _hoisted_3 = _withScopeId(() => createElementVNode("br", null, null, -1));
const _hoisted_4 = { class: "panel-menu" };
const _hoisted_5 = _withScopeId(() => createElementVNode("span", { style: { "width": "95%", "background-color": "var(--c-primary)", "height": "2px", "border-radius": "2px", "opacity": "0.7" } }, null, -1));
const _hoisted_6 = { class: "tabs-wrapper" };
const _hoisted_7 = _withScopeId(() => createElementVNode("span", { class: "loader" }, null, -1));
const _hoisted_8 = [
    _hoisted_7
];
const _hoisted_9 = _withScopeId(() => createElementVNode("span", { class: "loader" }, null, -1));
const _hoisted_10 = [
    _hoisted_9
];
var script = defineComponent({
    __name: 'Recaps',
    setup(__props) {
        const panel = ref(0);
        return (_ctx, _cache) => {
            return (openBlock(), createElementBlock("div", _hoisted_1, [
                _hoisted_2,
                _hoisted_3,
                createElementVNode("div", _hoisted_4, [
                    createElementVNode("button", {
                        onClick: _cache[0] || (_cache[0] = ($event) => (panel.value = 0))
                    }, [
                        createElementVNode("p", {
                            style: normalizeStyle({ color: panel.value == 0 ? 'white' : '' })
                        }, "Yesterday", 4)
                    ]),
                    createElementVNode("button", {
                        onClick: _cache[1] || (_cache[1] = ($event) => (panel.value = 1))
                    }, [
                        createElementVNode("p", {
                            style: normalizeStyle({ color: panel.value == 1 ? 'white' : '' })
                        }, "Last Week", 4)
                    ]),
                    createElementVNode("button", {
                        onClick: _cache[2] || (_cache[2] = ($event) => (panel.value = 2))
                    }, [
                        createElementVNode("p", {
                            style: normalizeStyle({ color: panel.value == 2 ? 'white' : '' })
                        }, "Last Month", 4)
                    ])
                ]),
                _hoisted_5,
                createElementVNode("div", _hoisted_6, [
                    withDirectives(createElementVNode("div", null, [
                        createVNode(script$1)
                    ], 512), [
                        [vShow, panel.value == 0]
                    ]),
                    withDirectives(createElementVNode("div", null, [..._hoisted_8], 512), [
                        [vShow, panel.value == 1]
                    ]),
                    withDirectives(createElementVNode("div", null, [..._hoisted_10], 512), [
                        [vShow, panel.value == 2]
                    ])
                ])
            ]));
        };
    }
});var css_248z = "\n.container[data-v-61ea604e] {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-top: 20px;\n    padding-bottom: var(--bottom-menu-height);\n}\n.title[data-v-61ea604e] {\n    color: white;\n    font-weight: bold;\n}\n.panel-menu[data-v-61ea604e] {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    width: 90%;\n    -webkit-justify-content: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    margin-bottom: 10px;\n    margin-top: 30px;\n}\n.panel-menu > button[data-v-61ea604e] {\n    width: 100%;\n    background: transparent;\n    border: none;\n    color: rgba(255, 255, 255, 0.6);\n    font-size: 18px;\n    border-radius: 10px;\n    padding: 2px;\n    cursor: pointer;\n}\n.panel-menu > button[data-v-61ea604e]:hover {\n    background-color: var(--c-black-mute);\n}\n";
styleInject(css_248z);script.__scopeId = "data-v-61ea604e";
script.__file = "src/views/Recaps.vue";export{script as default};