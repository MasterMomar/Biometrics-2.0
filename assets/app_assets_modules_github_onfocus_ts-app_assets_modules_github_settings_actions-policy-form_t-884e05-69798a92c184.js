"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_onfocus_ts-app_assets_modules_github_settings_actions-policy-form_t-884e05"],{254:(e,t,i)=>{i.d(t,{ZG:()=>a,q6:()=>l,w4:()=>c});var o=i(8439);let s=!1,n=new o.Z;function r(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of n.matches(t))e.data.call(null,t)}function a(e,t){s||(s=!0,document.addEventListener("focus",r,!0)),n.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function c(e,t,i){function o(t){let s=t.currentTarget;s&&(s.removeEventListener(e,i),s.removeEventListener("blur",o))}a(t,function(t){t.addEventListener(e,i),t.addEventListener("blur",o)})}function l(e,t){function i(e){let{currentTarget:o}=e;o&&(o.removeEventListener("input",t),o.removeEventListener("blur",i))}a(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",i)})}},97538:(e,t,i)=>{var o=i(76006),s=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let n=class ActionsPolicyFormElement extends HTMLElement{connectedCallback(){this.toggleSpecificOptions()}toggleSpecificOptions(){this.selectRadio.checked?this.specificOptions.hidden=!1:this.specificOptions.hidden=!0}};s([o.fA],n.prototype,"specificOptions",void 0),s([o.fA],n.prototype,"selectRadio",void 0),n=s([o.Ih],n)},67691:(e,t,i)=>{var o,s,n,r=i(76006),a=i(4412),c=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let l=class RunnerImageElement extends HTMLElement{async connectedCallback(){await a.x,this.selectRunnerPlatform(),this.customImageUriInput.onkeydown=e=>e.stopPropagation()}selectRunnerPlatform(){let e=this.getSelectedPlatform();this.customImageUriInput.required="custom"===e;let t=this.getSelectedImageVersion(e);t&&(this.updateSelectedImageHint(t),this.machineSpecsDropdown&&this.machineSpecsDropdown.updateOptionsVisibility(e,t))}getSelectedPlatform(){let e=this.platforms.find(e=>e.checked);return e?e.value:"linux-x64"}getSelectedImageVersion(e){return 0===this.imageVersions.length?null:this.imageVersions.find(t=>t.imagePlatform===e&&t.checked)??this.imageVersions[0]}updateSelectedImageHint(e){for(let t of this.selectedImageHints)t.renderContent(e)}};c([r.GO],l.prototype,"platforms",void 0),c([r.GO],l.prototype,"imageVersions",void 0),c([r.GO],l.prototype,"selectedImageHints",void 0),c([r.fA],l.prototype,"customImageUriInput",void 0),c([r.fA],l.prototype,"machineSpecsDropdown",void 0),l=c([r.Ih],l);let d=class MachineSpecsDropdownElement extends HTMLElement{updateOptionsVisibility(e,t){for(let i of this.items)i.setVisibility(e,t);this.updateTabsVisibility();let i=this.getSelectedItem();if(!i||!i.visible){let e=this.getFirstVisibleItem();e?.selectItem(),i=e}i&&this.selectTabByType(i.runnerType)}updateTabsVisibility(){let e=0;for(let t of this.tabs){let i=this.items.some(e=>e.runnerType===t.type&&e.visible);e+=i?1:0,t.setVisibility(i)}this.tabsHeader&&(this.tabsHeader.hidden=e<2)}selectTabByType(e){let t=this.tabs.find(t=>t.type===e);t?.selectTab()}getSelectedItem(){return this.items.find(e=>e.checked)}getFirstVisibleItem(){return this.items.find(e=>e.visible)}};c([r.GO],d.prototype,"tabs",void 0),c([r.GO],d.prototype,"items",void 0),c([r.fA],d.prototype,"tabsHeader",void 0),d=c([r.Ih],d);let p=class MachineSpecsTabElement extends HTMLElement{selectTab(){this.clickArea.click()}setVisibility(e){this.hidden=!e}};c([r.fA],p.prototype,"clickArea",void 0),c([r.Lj],p.prototype,"type",void 0),p=c([r.Ih],p);let u=((o=class MachineSpecsItemElement extends HTMLElement{get checked(){return this.checkbox.checked}get visible(){return!this.hidden}selectItem(){this.checkbox.click()}setVisibility(e,t){this.hidden=!this.shouldBeVisible(e,t)}shouldBeVisible(e,t){return("win-x64"!==e&&"linux-x64"!==e||"gpu_optimized"!==this.runnerType||"Curated"!==t.imageSource)&&!(this.storageGb<t.sizeGb)}constructor(...e){super(...e),this.storageGb=0}}).attrPrefix="",o);c([r.fA],u.prototype,"checkbox",void 0),c([r.Lj],u.prototype,"storageGb",void 0),c([r.Lj],u.prototype,"runnerType",void 0),u=c([r.Ih],u);let h=((s=class RunnerImageVersionElement extends HTMLElement{get checked(){return this.checkbox.checked}constructor(...e){super(...e),this.sizeGb=0}}).attrPrefix="",s);c([r.fA],h.prototype,"checkbox",void 0),c([r.Lj],h.prototype,"sizeGb",void 0),c([r.Lj],h.prototype,"imagePlatform",void 0),c([r.Lj],h.prototype,"imageSource",void 0),c([r.Lj],h.prototype,"imageId",void 0),h=c([r.Ih],h);let m=class RunnerSelectedImageHint extends HTMLElement{renderContent(e){this.innerHTML=this.getContent(e)}getContent(e){let t="";if("Curated"===e.imageSource){let i=this.getCuratedImageInfoUrl(e);t+=`
        <p class='text-small color-fg-muted'>
          GitHub images are kept up to date and secure, containing all the tools you need to get started building and testing your applications. <a class="Link--inTextBlock" href='${i}'>Learn more about images.</a>
        </p>
      `,("ubuntu-latest"===e.imageId||"windows-latest"===e.imageId)&&(t+=`
          <p class="text-small color-fg-muted">
            "Latest" tag matches with standard GitHub-hosted runners latest tag for the images. <a class="Link--inTextBlock" href='https://github.com/actions/runner-images#label-scheme'>Learn more about latest tags. </a>
          </p>
        `)}else"Marketplace"===e.imageSource&&(t+=`
        <p class="text-small color-fg-muted">
          Partner images are created and managed by members of GitHub's Technology Partner Program. <a class="Link--inTextBlock" href="https://github.com/actions/partner-runner-images">Learn more about partner images.</a>
        </p>
      `);return t}getCuratedImageInfoUrl(e){return"codespaces-prebuild"===e.imageId?"https://github.com/github/codespaces":"https://github.com/actions/runner-images/releases"}};m=c([r.Ih],m);var f=i(15345),g=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let b=document.querySelector("input[name='maximum_runners']"),y=class RunnerScalingElement extends HTMLElement{disableSubmitButton(){let e=document.querySelector(".js-submit-custom-hosted-runner-button");e.disabled=!0}enableSubmitButton(){let e=document.querySelector(".js-submit-custom-hosted-runner-button");e.disabled=!1}validateMax(){if(this.resetMaxState(),!this.maxInput.value)return;let e=+this.maxInput.value,t=parseInt(b.max),i=parseInt(b.min);if(e<i){this.maxGroup.classList.add("errored"),this.maxTooLowErrorMessage.hidden=!1,(0,f.N)(this.maxNote),this.disableSubmitButton();return}if(e>t){this.maxGroup.classList.add("errored"),this.maxTooHighErrorMessage.hidden=!1,(0,f.N)(this.maxNote),this.disableSubmitButton();return}}resetMaxState(){this.maxTooHighErrorMessage.hidden=!0,this.maxTooLowErrorMessage.hidden=!0,this.maxGroup.classList.remove("errored"),this.enableSubmitButton()}};g([r.fA],y.prototype,"maxInput",void 0),g([r.fA],y.prototype,"maxGroup",void 0),g([r.fA],y.prototype,"maxTooLowErrorMessage",void 0),g([r.fA],y.prototype,"maxTooHighErrorMessage",void 0),g([r.fA],y.prototype,"maxNote",void 0),y=g([r.Ih],y);var v=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let x=((n=class PublicIpElement extends HTMLElement{connectedCallback(){this.isAllowed=this.hasAttribute("is-allowed")}checkboxChanged(){let e=this.checkbox.checked,t=this.isAllowed;t||e||(this.checkbox.setAttribute("disabled","disabled"),this.description.classList.remove("color-fg-muted"),this.labelSection.classList.add("color-fg-subtle"))}constructor(...e){super(...e),this.isAllowed=!1}}).attrPrefix="",n);v([r.fA],x.prototype,"checkbox",void 0),v([r.fA],x.prototype,"description",void 0),v([r.fA],x.prototype,"labelSection",void 0),v([r.Lj],x.prototype,"isAllowed",void 0),x=v([r.Ih],x)},84700:(e,t,i)=>{var o=i(76006),s=i(58700),n=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let r=class AdvancedSecurityNewReposElement extends HTMLElement{toggle(e){this.checkbox.checked?(this.status.hidden=!0,this.dialog.show(),e.stopPropagation()):(this.status.hidden=!1,(0,s.Bt)(this.form))}confirm(){this.status.hidden=!1,(0,s.Bt)(this.form),this.dialog.open=!1}close(){this.checkbox.checked=!1}};n([o.fA],r.prototype,"checkbox",void 0),n([o.fA],r.prototype,"status",void 0),n([o.fA],r.prototype,"dialog",void 0),n([o.fA],r.prototype,"form",void 0),r=n([o.Ih],r)},87577:(e,t,i)=>{var o=i(76006),s=function(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let n=class StacksPolicyFormElement extends HTMLElement{connectedCallback(){this.submitButton.disabled=!0,this.toggleSpecificOptions()}enableForm(){this.submitButton.disabled=!1}toggleSpecificOptions(){this.selectRadio.checked?this.specificOptions.hidden=!1:this.specificOptions.hidden=!0}};s([o.fA],n.prototype,"specificOptions",void 0),s([o.fA],n.prototype,"submitButton",void 0),s([o.fA],n.prototype,"selectRadio",void 0),n=s([o.Ih],n)},95253:(e,t,i)=>{let o;i.d(t,{Y:()=>u,q:()=>h});var s=i(88149),n=i(86058),r=i(44544),a=i(71643);let{getItem:c}=(0,r.Z)("localStorage"),l="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,s.n)("octolytics");delete e.baseContext,o=new n.R(e)}catch(e){}function p(e){let t=(0,s.n)("octolytics").baseContext||{};if(t)for(let[e,i]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(l)&&(t[e.replace(l,"")]=i,delete t[e]);let i=document.querySelector("meta[name=visitor-payload]");if(i){let e=JSON.parse(atob(i.content));Object.assign(t,e)}let o=new URLSearchParams(window.location.search);for(let[e,i]of o)d.includes(e.toLowerCase())&&(t[e]=i);return t.staff=(0,a.B)().toString(),Object.assign(t,e)}function u(e){o?.sendPageView(p(e))}function h(e,t={}){let i=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,s=i?{service:i}:{};for(let[e,i]of Object.entries(t))null!=i&&(s[e]=`${i}`);o&&(p(s),o.sendEvent(e||"unknown",p(s)))}}}]);
//# sourceMappingURL=app_assets_modules_github_onfocus_ts-app_assets_modules_github_settings_actions-policy-form_t-884e05-599850c9af10.js.map