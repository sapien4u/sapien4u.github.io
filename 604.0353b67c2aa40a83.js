"use strict";(self.webpackChunkngGenericTool=self.webpackChunkngGenericTool||[]).push([[604],{6604:(mt,V,d)=>{d.r(V),d.d(V,{WordPuzzleModule:()=>b});var _=d(6895),$=d(8996);class F{}F.blank="__";var M=(()=>{return(r=M||(M={}))[r.Ordered=1]="Ordered",r[r.Shuffled=2]="Shuffled",M;var r})(),o=d(4650),y=d(9646);class C{constructor(){this.wordList=["ACE","ACT","ADD","AGE","AGO","AID","AIM","AIR","ALL","AND","ANT","ANY","APE","APP","ARC","ARE","ARM","ART","ASH","ASK","ATE","AXE","BAD","BAG","BAM","BAN","BAR","BAT","BAY","BED","BEE","BEG","BET","BIB","BID","BIG","BIN","BIO","BIT","BOB","BOW","BOX","BOY","BRO","BUB","BUD","BUG","BUN","BUS","BUT","BUY","BYE","CAB","CAM","CAN","CAP","CAR","CAT","COB","COM","CON","COP","COT","COW","CRY","CUB","CUP","CUT","DAB","DAD","DAM","DAY","DEN","DEV","DEW","DID","DIE","DIG","DIM","DIP","DOC","DOG","DOT","DRY","DUE","DUG","DYE","EAR","EAT","ECO","EGG","EGO","ELF","END","EYE","FAN","FAR","FAT","FAX","FEE","FEW","FIG","FIN","FIT","FIX","FLU","FLY","FOE","FOG","FOR","FOX","FRY","FUN","GAP","GAS","GEL","GEM","GET","GIN","GOD","GOT","GUM","GUN","GUT","GUY","GYM","HAD","HAM","HAS","HAT","HEN","HER","HEY","HIM","HIS","HIT","HOT","HOW","HUG","HUT","ICE","ILL","INK","JAB","JAM","JAR","JAW","JET","JIB","JOB","JOE","JOG","JOY","JUG","KEG","KEY","KIT","LAG","LAW","LAY","LEG","LET","LIE","LIT","LOT","LOW","MAC","MAD","MAM","MAN","MAP","MAS","MAT","MAX","MAY","MEN","MET","MIC","MID","MIN","MIX","MOB","MOM","MUD","MUG","MUM","NAP","NET","NEW","NOD","NOT","NOW","NUN","NUT","OAK","OAR","ODD","OLD","ONE","OUR","OUT","OWE","OWL","OWN","PAD","PAN","PAT","PAW","PAX","PAY","PEA","PEG","PEN","PET","PIC","PIG","PIN","PIT","PIX","POD","POP","POT","POX","PUB","PUP","PUT","QUE","RAG","RAM","RAN","RAP","RAT","RAW","RAY","RED","REP","RIB","RIG","RIM","ROD","ROW","RUB","RUG","RUN","SAC","SAD","SAP","SAT","SAW","SAX","SAY","SEA","SEC","SEE","SET","SHE","SHY","SIM","SIN","SIP","SIR","SIS","SIT","SIX","SOB","SON","SOW","SPA","SPY","SUN","TAB","TAJ","TAN","TAP","TAR","TAX","TEA","TEE","TEN","THE","TIC","TIE","TIN","TIP","TOE","TON","TOP","TOW","TOY","TUG","TWO","USE","VAN","VEG","VET","VIM","WAR","WAS","WAX","WAY","WEB","WET","WHO","WHY","WIG","WIN","WIT","WIZ","WON","WOW","XED","YAK","YEP","YES","YET","YOU","YUM","YUP","ZAP","ZAX","ZEN","ZIP","ZOO"]}getWordList(){return this.wordList}getWordListAsync(){return(0,y.of)(this.wordList)}}C.\u0275fac=function(t){return new(t||C)},C.\u0275prov=o.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"});class I{constructor(){}shuffle(t){let n,e=t.length;for(;0!=e;)n=Math.floor(Math.random()*e),e--,[t[e],t[n]]=[t[n],t[e]];return t}setBlanks(t){const e=[];return t.forEach(n=>{var s=Math.floor(Math.random()*n.length),i=n.substring(s,s+1);e.push(n.replace(i,F.blank))}),e}sliceIntoChunks(t,e){const n=[];for(let s=0;s<t.length;s+=e){const i=t.slice(s,s+e);n.push(i)}return n}getRadomSlicedListOfWords(t,e){var n=Math.floor(Math.random()*(t.length-e));return t.slice(n,n+e)}validateOrderedList(t,e){let n=0;return t.forEach(s=>{0==s.indexOf(F.blank)&&n++}),!(n>.3*e&&(console.log("reset",n,.3*e),1))}}I.\u0275fac=function(t){return new(t||I)},I.\u0275prov=o.Yz7({token:I,factory:I.\u0275fac,providedIn:"root"});var p=d(4006),X=d(495),O=d(3238),j=d(1281),Ee=d(2843),ye=d(4128),Ce=d(727),J=d(8505),f=d(4004),Ie=d(262),Te=d(8746),Se=d(3099),_e=d(5698),we=d(4351),Re=d(9300);class q{}class g{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const n=e.indexOf(":");if(n>0){const s=e.slice(0,n),i=s.toLowerCase(),a=e.slice(n+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(a):this.headers.set(i,[a])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let n=t[e];const s=e.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(this.headers.set(s,n),this.maybeSetNormalizedName(e,s))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof g?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new g;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof g?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(t.name,e);const s=("a"===t.op?this.headers.get(e):void 0)||[];s.push(...n),this.headers.set(e,s);break;case"d":const i=t.value;if(i){let a=this.headers.get(e);if(!a)return;a=a.filter(l=>-1===i.indexOf(l)),0===a.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class Ae{encodeKey(t){return ee(t)}encodeValue(t){return ee(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const Fe=/%(\d[a-f0-9])/gi,Me={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ee(r){return encodeURIComponent(r).replace(Fe,(t,e)=>Me[e]??t)}function D(r){return`${r}`}class v{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new Ae,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function be(r,t){const e=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[a,l]=-1==i?[t.decodeKey(s),""]:[t.decodeKey(s.slice(0,i)),t.decodeValue(s.slice(i+1))],c=e.get(a)||[];c.push(l),e.set(a,c)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const n=t.fromObject[e],s=Array.isArray(n)?n.map(D):[D(n)];this.map.set(e,s)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(n=>{const s=t[n];Array.isArray(s)?s.forEach(i=>{e.push({param:n,value:i,op:"a"})}):e.push({param:n,value:s,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new v({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(D(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let n=this.map.get(t.param)||[];const s=n.indexOf(D(t.value));-1!==s&&n.splice(s,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class Oe{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function te(r){return typeof ArrayBuffer<"u"&&r instanceof ArrayBuffer}function ne(r){return typeof Blob<"u"&&r instanceof Blob}function re(r){return typeof FormData<"u"&&r instanceof FormData}class N{constructor(t,e,n,s){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function Ne(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==n?n:null,i=s):i=n,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new g),this.context||(this.context=new Oe),this.params){const a=this.params.toString();if(0===a.length)this.urlWithParams=e;else{const l=e.indexOf("?");this.urlWithParams=e+(-1===l?"?":l<e.length-1?"&":"")+a}}else this.params=new v,this.urlWithParams=e}serializeBody(){return null===this.body?null:te(this.body)||ne(this.body)||re(this.body)||function He(r){return typeof URLSearchParams<"u"&&r instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof v?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||re(this.body)?null:ne(this.body)?this.body.type||null:te(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,n=t.url||this.url,s=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,a=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,l=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let c=t.headers||this.headers,h=t.params||this.params;const E=t.context??this.context;return void 0!==t.setHeaders&&(c=Object.keys(t.setHeaders).reduce((L,m)=>L.set(m,t.setHeaders[m]),c)),t.setParams&&(h=Object.keys(t.setParams).reduce((L,m)=>L.set(m,t.setParams[m]),h)),new N(e,n,i,{params:h,headers:c,context:E,reportProgress:l,responseType:s,withCredentials:a})}}var u=(()=>((u=u||{})[u.Sent=0]="Sent",u[u.UploadProgress=1]="UploadProgress",u[u.ResponseHeader=2]="ResponseHeader",u[u.DownloadProgress=3]="DownloadProgress",u[u.Response=4]="Response",u[u.User=5]="User",u))();class xe{constructor(t,e=200,n="OK"){this.headers=t.headers||new g,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class G extends xe{constructor(t={}){super(t),this.type=u.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new G({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}function Y(r,t){return{body:t,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials}}let K=(()=>{class r{constructor(e){this.handler=e}request(e,n,s={}){let i;if(e instanceof N)i=e;else{let c,h;c=s.headers instanceof g?s.headers:new g(s.headers),s.params&&(h=s.params instanceof v?s.params:new v({fromObject:s.params})),i=new N(e,n,void 0!==s.body?s.body:null,{headers:c,context:s.context,params:h,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const a=(0,y.of)(i).pipe((0,we.b)(c=>this.handler.handle(c)));if(e instanceof N||"events"===s.observe)return a;const l=a.pipe((0,Re.h)(c=>c instanceof G));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return l.pipe((0,f.U)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe((0,f.U)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe((0,f.U)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return l.pipe((0,f.U)(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:(new v).append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,s={}){return this.request("PATCH",e,Y(s,n))}post(e,n,s={}){return this.request("POST",e,Y(s,n))}put(e,n,s={}){return this.request("PUT",e,Y(s,n))}}return r.\u0275fac=function(e){return new(e||r)(o.LFG(q))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac}),r})();var ue=d(1481);const Ge=["*"];let U;function H(r){return function Ye(){if(void 0===U&&(U=null,typeof window<"u")){const r=window;void 0!==r.trustedTypes&&(U=r.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return U}()?.createHTML(r)||r}function he(r){return Error(`Unable to find icon with the name "${r}"`)}function pe(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function fe(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}class T{constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}}let z=(()=>{class r{constructor(e,n,s,i){this._httpClient=e,this._sanitizer=n,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=s}addSvgIcon(e,n,s){return this.addSvgIconInNamespace("",e,n,s)}addSvgIconLiteral(e,n,s){return this.addSvgIconLiteralInNamespace("",e,n,s)}addSvgIconInNamespace(e,n,s,i){return this._addSvgIconConfig(e,n,new T(s,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,s,i){const a=this._sanitizer.sanitize(o.q3G.HTML,s);if(!a)throw fe(s);const l=H(a);return this._addSvgIconConfig(e,n,new T("",l,i))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,s){return this._addSvgIconSetConfig(e,new T(n,null,s))}addSvgIconSetLiteralInNamespace(e,n,s){const i=this._sanitizer.sanitize(o.q3G.HTML,n);if(!i)throw fe(n);const a=H(i);return this._addSvgIconSetConfig(e,new T("",a,s))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){const n=this._sanitizer.sanitize(o.q3G.RESOURCE_URL,e);if(!n)throw pe(e);const s=this._cachedIconsByUrl.get(n);return s?(0,y.of)(W(s)):this._loadSvgIconFromConfig(new T(e,null)).pipe((0,J.b)(i=>this._cachedIconsByUrl.set(n,i)),(0,f.U)(i=>W(i)))}getNamedSvgIcon(e,n=""){const s=me(n,e);let i=this._svgIconConfigs.get(s);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(n,e),i)return this._svgIconConfigs.set(s,i),this._getSvgFromConfig(i);const a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):(0,Ee._)(he(s))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?(0,y.of)(W(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe((0,f.U)(n=>W(n)))}_getSvgFromIconSetConfigs(e,n){const s=this._extractIconWithNameFromAnySet(e,n);if(s)return(0,y.of)(s);const i=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe((0,Ie.K)(l=>{const h=`Loading icon set URL: ${this._sanitizer.sanitize(o.q3G.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(h)),(0,y.of)(null)})));return(0,ye.D)(i).pipe((0,f.U)(()=>{const a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw he(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let s=n.length-1;s>=0;s--){const i=n[s];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){const a=this._svgElementFromConfig(i),l=this._extractSvgIconFromSet(a,e,i.options);if(l)return l}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe((0,J.b)(n=>e.svgText=n),(0,f.U)(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?(0,y.of)(null):this._fetchIcon(e).pipe((0,J.b)(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,s){const i=e.querySelector(`[id="${n}"]`);if(!i)return null;const a=i.cloneNode(!0);if(a.removeAttribute("id"),"svg"===a.nodeName.toLowerCase())return this._setSvgAttributes(a,s);if("symbol"===a.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(a),s);const l=this._svgElementFromString(H("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,s)}_svgElementFromString(e){const n=this._document.createElement("DIV");n.innerHTML=e;const s=n.querySelector("svg");if(!s)throw Error("<svg> tag not found");return s}_toSvgElement(e){const n=this._svgElementFromString(H("<svg></svg>")),s=e.attributes;for(let i=0;i<s.length;i++){const{name:a,value:l}=s[i];"id"!==a&&n.setAttribute(a,l)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[i].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){const{url:n,options:s}=e,i=s?.withCredentials??!1;if(!this._httpClient)throw function Ke(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==n)throw Error(`Cannot fetch icon from URL "${n}".`);const a=this._sanitizer.sanitize(o.q3G.RESOURCE_URL,n);if(!a)throw pe(n);const l=this._inProgressUrlFetches.get(a);if(l)return l;const c=this._httpClient.get(a,{responseType:"text",withCredentials:i}).pipe((0,f.U)(h=>H(h)),(0,Te.x)(()=>this._inProgressUrlFetches.delete(a)),(0,Se.B)());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,n,s){return this._svgIconConfigs.set(me(e,n),s),this}_addSvgIconSetConfig(e,n){const s=this._iconSetConfigs.get(e);return s?s.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){const n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let s=0;s<this._resolvers.length;s++){const i=this._resolvers[s](n,e);if(i)return Ve(i)?new T(i.url,null,i.options):new T(i,null)}}}return r.\u0275fac=function(e){return new(e||r)(o.LFG(K,8),o.LFG(ue.H7),o.LFG(_.K0,8),o.LFG(o.qLn))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function W(r){return r.cloneNode(!0)}function me(r,t){return r+":"+t}function Ve(r){return!(!r.url||!r.options)}const $e=(0,O.pj)(class{constructor(r){this._elementRef=r}}),Qe=new o.OlP("MAT_ICON_DEFAULT_OPTIONS"),et=new o.OlP("mat-icon-location",{providedIn:"root",factory:function tt(){const r=(0,o.f3M)(_.K0),t=r?r.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),ge=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],nt=ge.map(r=>`[${r}]`).join(", "),rt=/^url\(['"]?#(.*?)['"]?\)$/;let ot=(()=>{class r extends $e{constructor(e,n,s,i,a,l){super(e),this._iconRegistry=n,this._location=i,this._errorHandler=a,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=Ce.w0.EMPTY,l&&(l.color&&(this.color=this.defaultColor=l.color),l.fontSet&&(this.fontSet=l.fontSet)),s||e.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(e){this._inline=(0,j.Ig)(e)}get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}get fontSet(){return this._fontSet}set fontSet(e){const n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(e){const n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_splitIconName(e){if(!e)return["",""];const n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const e=this._elementsWithExternalReferences;if(e&&e.size){const n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();const n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){const e=this._elementRef.nativeElement;let n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){const s=e.childNodes[n];(1!==s.nodeType||"svg"===s.nodeName.toLowerCase())&&s.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(s=>s.length>0);this._previousFontSetClass.forEach(s=>e.classList.remove(s)),n.forEach(s=>e.classList.add(s)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return"string"==typeof e?e.trim().split(" ")[0]:e}_prependPathToReferences(e){const n=this._elementsWithExternalReferences;n&&n.forEach((s,i)=>{s.forEach(a=>{i.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){const n=e.querySelectorAll(nt),s=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<n.length;i++)ge.forEach(a=>{const l=n[i],c=l.getAttribute(a),h=c?c.match(rt):null;if(h){let E=s.get(l);E||(E=[],s.set(l,E)),E.push({name:a,value:h[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){const[n,s]=this._splitIconName(e);n&&(this._svgNamespace=n),s&&(this._svgName=s),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(s,n).pipe((0,_e.q)(1)).subscribe(i=>this._setSvgElement(i),i=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${n}:${s}! ${i.message}`))})}}}return r.\u0275fac=function(e){return new(e||r)(o.Y36(o.SBq),o.Y36(z),o.$8M("aria-hidden"),o.Y36(et),o.Y36(o.qLn),o.Y36(Qe,8))},r.\u0275cmp=o.Xpm({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:8,hostBindings:function(e,n){2&e&&(o.uIk("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),o.ekj("mat-icon-inline",n.inline)("mat-icon-no-color","primary"!==n.color&&"accent"!==n.color&&"warn"!==n.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[o.qOj],ngContentSelectors:Ge,decls:1,vars:0,template:function(e,n){1&e&&(o.F$t(),o.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),r})(),st=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[O.BQ,O.BQ]}),r})(),it=(()=>{class r{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(e){this._vertical=(0,j.Ig)(e)}get inset(){return this._inset}set inset(e){this._inset=(0,j.Ig)(e)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,n){2&e&&(o.uIk("aria-orientation",n.vertical?"vertical":"horizontal"),o.ekj("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,n){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0}),r})(),at=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[O.BQ,O.BQ]}),r})();function lt(r,t){if(1&r){const e=o.EpF();o.TgZ(0,"div",6)(1,"div",7),o._uU(2),o.TgZ(3,"input",8),o.NdJ("ngModelChange",function(s){const a=o.CHM(e).$implicit;return o.KtG(a[2]=s)}),o.qZA(),o._uU(4),o.qZA()()}if(2&r){const e=t.$implicit,n=o.oxw();o.xp6(2),o.hij(" ",e[0]," "),o.xp6(1),o.s9C("placeholder",n.blank),o.Q6J("ngModel",e[2]),o.xp6(1),o.HOy(" ",e[1]," ----- ",e[2]," ----- ",e[3]," ----- ",e[4]," ")}}class x{constructor(t,e){this.puzzleDataService=t,this.puzzleLogicService=e,this.blank=F.blank,this.mode=2,this.wordMinLimit=1,this.wordMaxLimit=10,this.noOfWords=5,this.wordList=[],this.wordListToRender=[],this.wordListBlanksToRender=[]}ngOnInit(){this.wordList=this.puzzleDataService.getWordList()}loadWords(){console.log("loadWords"),this.noOfWords>this.wordMaxLimit?this.noOfWords=this.wordMaxLimit:this.noOfWords<this.wordMinLimit&&(this.noOfWords=this.wordMinLimit);let t=this.prepareWordsToRender();this.wordListBlanksToRender=this.prepBlanks(t)}prepareWordsToRender(){Object.assign(this.wordListToRender,this.wordList),this.mode==M.Shuffled&&(this.wordListToRender=this.puzzleLogicService.shuffle(this.wordListToRender)),this.wordListToRender=this.puzzleLogicService.getRadomSlicedListOfWords(this.wordListToRender,this.noOfWords);let t=this.puzzleLogicService.setBlanks(this.wordListToRender);return this.mode==M.Ordered&&(this.puzzleLogicService.validateOrderedList(t,this.noOfWords)||(t=this.prepareWordsToRender())),t}prepBlanks(t){const e=[];return t.forEach(n=>{const s=n.split(F.blank);e.push(s)}),e}finish(){console.log("finish"),this.wordListBlanksToRender.forEach((t,e)=>{if(null==t[2])t[3]="Empty",t[4]=this.wordListToRender[e];else{const n=(t[0]+t[2]+t[1]).toUpperCase();this.wordList.find(i=>i===n)?(t[3]="Correct",t[4]=n!=this.wordListToRender[e]?n+"("+this.wordListToRender[e]+")":n):(t[3]="Wrong",t[4]=this.wordListToRender[e])}})}}function ct(r,t){if(1&r&&(o.TgZ(0,"div",7)(1,"div",8),o._uU(2),o.qZA()()),2&r){const e=t.$implicit;o.xp6(2),o.hij(" ",e," ")}}function dt(r,t){if(1&r&&(o.TgZ(0,"div",4)(1,"div",5),o._uU(2),o.qZA(),o.YNc(3,ct,3,1,"div",6),o.qZA()),2&r){const e=t.$implicit,n=t.index;o.xp6(2),o.hij(" ",n+1," "),o.xp6(1),o.Q6J("ngForOf",e)}}function ut(r,t){if(1&r&&(o.TgZ(0,"div",7)(1,"div",8),o._uU(2),o.qZA()()),2&r){const e=t.$implicit;o.xp6(2),o.hij(" ",e," ")}}function ht(r,t){if(1&r&&(o.TgZ(0,"div",4)(1,"div",5),o._uU(2),o.qZA(),o.YNc(3,ut,3,1,"div",6),o.qZA()),2&r){const e=t.$implicit,n=t.index;o.xp6(2),o.hij(" ",n+1," "),o.xp6(1),o.Q6J("ngForOf",e)}}x.\u0275fac=function(t){return new(t||x)(o.Y36(C),o.Y36(I))},x.\u0275cmp=o.Xpm({type:x,selectors:[["app-fill-blanks"]],decls:25,vars:6,consts:[["name","wordCount","type","number","max","10","min","1","placeholder","Number of words","required","","onkeydown","return false;","ondrop","return false;",3,"ngModel","ngModelChange"],["aria-label","Select a mode",3,"ngModel","ngModelChange"],[3,"value"],["type","button",3,"click"],["class","word",4,"ngFor","ngForOf"],["mat-fab","","extended",""],[1,"word"],[1,"wordData"],["name","blanks","type","text","maxlength","1","minlength","1","required","",1,"blanks",3,"ngModel","placeholder","ngModelChange"]],template:function(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1,"fill-blanks works!"),o.qZA(),o.TgZ(2,"div")(3,"div"),o._uU(4," Number of words: "),o.TgZ(5,"input",0),o.NdJ("ngModelChange",function(s){return e.noOfWords=s}),o.qZA()(),o.TgZ(6,"div")(7,"mat-radio-group",1),o.NdJ("ngModelChange",function(s){return e.mode=s}),o.TgZ(8,"mat-radio-button",2),o._uU(9,"Ordered"),o.qZA(),o.TgZ(10,"mat-radio-button",2),o._uU(11,"Shuffled"),o.qZA()()(),o.TgZ(12,"div")(13,"button",3),o.NdJ("click",function(){return e.loadWords()}),o._uU(14),o.qZA()(),o.TgZ(15,"div"),o.YNc(16,lt,5,7,"div",4),o.qZA(),o.TgZ(17,"div")(18,"button",3),o.NdJ("click",function(){return e.finish()}),o._uU(19,"Finish"),o.qZA()(),o._UZ(20,"mat-divider"),o.TgZ(21,"button",5)(22,"mat-icon"),o._uU(23,"home"),o.qZA(),o._uU(24," Home "),o.qZA()()),2&t&&(o.xp6(5),o.Q6J("ngModel",e.noOfWords),o.xp6(2),o.Q6J("ngModel",e.mode),o.xp6(1),o.Q6J("value",1),o.xp6(2),o.Q6J("value",2),o.xp6(4),o.hij("Load ",e.noOfWords," Word(s)"),o.xp6(2),o.Q6J("ngForOf",e.wordListBlanksToRender))},dependencies:[_.sg,p.Fj,p.wV,p.JJ,p.Q7,p.wO,p.nD,p.qQ,p.Fd,p.On,X.VQ,X.U0,ot,it],styles:[".blanks[_ngcontent-%COMP%]{text-transform:uppercase!important;width:15px!important;border:none!important;margin:0!important}"]});class P{constructor(t,e){this.puzzleDataService=t,this.puzzleLogicService=e,this.wordList=[],this.wordListRandomized=[],this.wordListRandomizedBlanks=[],this.wordListChunks=[],this.wordListChunksBlanks=[]}ngOnInit(){this.puzzleDataService.getWordListAsync().subscribe(t=>this.wordList=t)}orderedWords(){console.log("orderedWords"),Object.assign(this.wordListRandomized,this.wordList),this.renderWordsToUI()}shuffleWords(){console.log("shuffleWords"),Object.assign(this.wordListRandomized,this.wordList),this.wordListRandomized=this.puzzleLogicService.shuffle(this.wordListRandomized),this.renderWordsToUI()}renderWordsToUI(){this.wordListRandomizedBlanks=this.puzzleLogicService.setBlanks(this.wordListRandomized),this.wordListChunks=this.puzzleLogicService.sliceIntoChunks(this.wordListRandomized,7),this.wordListChunksBlanks=this.puzzleLogicService.sliceIntoChunks(this.wordListRandomizedBlanks,7)}}P.\u0275fac=function(t){return new(t||P)(o.Y36(C),o.Y36(I))},P.\u0275cmp=o.Xpm({type:P,selectors:[["app-word-blanks"]],decls:10,vars:2,consts:[["type","button",3,"click"],[1,"wordContainer","flex-container"],["class","wordWrap",4,"ngFor","ngForOf"],[1,"wordContainer","flex-container","containerBg"],[1,"wordWrap"],[1,"wordData","wordSeeThrough"],["class","word",4,"ngFor","ngForOf"],[1,"word"],[1,"wordData"]],template:function(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1,"word-blanks works!"),o.qZA(),o.TgZ(2,"button",0),o.NdJ("click",function(){return e.orderedWords()}),o._uU(3,"Ordered"),o.qZA(),o.TgZ(4,"button",0),o.NdJ("click",function(){return e.shuffleWords()}),o._uU(5,"Shuffle"),o.qZA(),o.TgZ(6,"div",1),o.YNc(7,dt,4,2,"div",2),o.qZA(),o.TgZ(8,"div",3),o.YNc(9,ht,4,2,"div",2),o.qZA()),2&t&&(o.xp6(7),o.Q6J("ngForOf",e.wordListChunksBlanks),o.xp6(2),o.Q6J("ngForOf",e.wordListChunks))},dependencies:[_.sg],styles:[".flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;background-color:#1e90ff}.flex-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#f1f1f1;width:100px;margin:10px;text-align:center;line-height:40px;font-size:20px}.word[_ngcontent-%COMP%]{background-color:#7fffd4;margin:1px;padding:1px}.wordData[_ngcontent-%COMP%]{background-color:#0ff;margin:1px;padding:1px;font-weight:700}.wordSeeThrough[_ngcontent-%COMP%]{color:#1e90ff}.containerBg[_ngcontent-%COMP%]{background-color:bisque}"]});const pt=[{path:"",component:P},{path:"fill",component:x}];class A{}A.\u0275fac=function(t){return new(t||A)},A.\u0275mod=o.oAB({type:A}),A.\u0275inj=o.cJS({imports:[$.Bz.forChild(pt),$.Bz]});var ft=d(9080);class b{}b.\u0275fac=function(t){return new(t||b)},b.\u0275mod=o.oAB({type:b}),b.\u0275inj=o.cJS({imports:[_.ez,p.u5,X.Fk,st,at,ft._t,A]})}}]);