(()=>{"use strict";var e={365:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(354),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap);"]),i.push([e.id,':root {\n  --bg: #fafafa;\n  --fg: #171717;\n  --ship: hsl(0, 0%, 80%);\n  --board: hsl(200, 100%, 50%);\n  --border: hsl(0, 0%, 100%, 0.3);\n  --shot: #fafafa;\n  --ship-shot: #ef4444;\n}\n\nbody {\n  font-family: Rubik;\n  background: var(--bg);\n  color: var(--fg);\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem;\n}\n\nmain {\n  display: flex;\n  gap: 3rem;\n  justify-content: center;\n  align-items: center;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n}\n\nsection:first-child {\n  align-items: flex-end;\n}\n\n#player1,\n#player2 {\n  background: var(--board);\n  border-radius: 3px;\n\n  > div {\n    display: flex;\n  }\n}\n\ndiv[data-x][data-y] {\n  width: 2.5rem;\n  aspect-ratio: 1;\n  border: 1px solid var(--border);\n  cursor: pointer;\n}\n\n#player1 .ship {\n  background: var(--ship);\n}\n\n.shot {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.shot::after {\n  content: "";\n  position: absolute;\n  border-radius: 100%;\n  width: 0.9rem;\n  aspect-ratio: 1;\n  background: var(--shot);\n}\n\n.shot.ship::after {\n  background: var(--ship-shot);\n}\n\n.pre-game {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.pre-game .ships:has(.draggable) {\n  display: flex;\n  gap: 1rem;\n}\n\n.draggable {\n  display: flex;\n  cursor: move;\n}\n\n.pre-game .ships:has(.draggable[data-orientation="horizontal"]) {\n  flex-direction: column;\n}\n\n.pre-game .ships:has(.draggable[data-orientation="vertical"]) {\n  flex-direction: row;\n\n  .draggable {\n    flex-direction: column;\n  }\n}\n\n.draggable > div {\n  background: var(--ship);\n  width: 2.5rem;\n  aspect-ratio: 1;\n  border: 1px solid var(--border);\n}\n\n.pre-game button {\n  font-family: inherit;\n  font-size: 0.9rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 3px;\n  background: orange;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  margin-top: 0.5rem;\n\n  &:hover {\n    outline: 2px solid var(--fg);\n  }\n}\n\n.dragover {\n  background: var(--ship);\n}\n\n.dragover.overflow,\n#player1 .ship.dragover {\n  background: var(--ship-shot);\n}\n\n@media only screen and (max-width: 768px) {\n  main {\n    flex-direction: column;\n  }\n\n  div[data-x][data-y] {\n    width: 1.5rem;\n  }\n\n  .draggable > div {\n    width: 1.5rem;\n  }\n\n  section:first-child {\n    align-items: flex-start;\n  }\n}\n',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,4BAA4B;EAC5B,+BAA+B;EAC/B,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,gBAAgB;EAChB,SAAS;EACT,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;EAEE,wBAAwB;EACxB,kBAAkB;;EAElB;IACE,aAAa;EACf;AACF;;AAEA;EACE,aAAa;EACb,eAAe;EACf,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;;EAEnB;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,eAAe;EACf,kBAAkB;;EAElB;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,4BAA4B;AAC9B;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,uBAAuB;EACzB;AACF",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");\n\n:root {\n  --bg: #fafafa;\n  --fg: #171717;\n  --ship: hsl(0, 0%, 80%);\n  --board: hsl(200, 100%, 50%);\n  --border: hsl(0, 0%, 100%, 0.3);\n  --shot: #fafafa;\n  --ship-shot: #ef4444;\n}\n\nbody {\n  font-family: Rubik;\n  background: var(--bg);\n  color: var(--fg);\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 1rem;\n}\n\nmain {\n  display: flex;\n  gap: 3rem;\n  justify-content: center;\n  align-items: center;\n}\n\nsection {\n  display: flex;\n  flex-direction: column;\n}\n\nsection:first-child {\n  align-items: flex-end;\n}\n\n#player1,\n#player2 {\n  background: var(--board);\n  border-radius: 3px;\n\n  > div {\n    display: flex;\n  }\n}\n\ndiv[data-x][data-y] {\n  width: 2.5rem;\n  aspect-ratio: 1;\n  border: 1px solid var(--border);\n  cursor: pointer;\n}\n\n#player1 .ship {\n  background: var(--ship);\n}\n\n.shot {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.shot::after {\n  content: "";\n  position: absolute;\n  border-radius: 100%;\n  width: 0.9rem;\n  aspect-ratio: 1;\n  background: var(--shot);\n}\n\n.shot.ship::after {\n  background: var(--ship-shot);\n}\n\n.pre-game {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.pre-game .ships:has(.draggable) {\n  display: flex;\n  gap: 1rem;\n}\n\n.draggable {\n  display: flex;\n  cursor: move;\n}\n\n.pre-game .ships:has(.draggable[data-orientation="horizontal"]) {\n  flex-direction: column;\n}\n\n.pre-game .ships:has(.draggable[data-orientation="vertical"]) {\n  flex-direction: row;\n\n  .draggable {\n    flex-direction: column;\n  }\n}\n\n.draggable > div {\n  background: var(--ship);\n  width: 2.5rem;\n  aspect-ratio: 1;\n  border: 1px solid var(--border);\n}\n\n.pre-game button {\n  font-family: inherit;\n  font-size: 0.9rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: 3px;\n  background: orange;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  margin-top: 0.5rem;\n\n  &:hover {\n    outline: 2px solid var(--fg);\n  }\n}\n\n.dragover {\n  background: var(--ship);\n}\n\n.dragover.overflow,\n#player1 .ship.dragover {\n  background: var(--ship-shot);\n}\n\n@media only screen and (max-width: 768px) {\n  main {\n    flex-direction: column;\n  }\n\n  div[data-x][data-y] {\n    width: 1.5rem;\n  }\n\n  .draggable > div {\n    width: 1.5rem;\n  }\n\n  section:first-child {\n    align-items: flex-start;\n  }\n}\n'],sourceRoot:""}]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=o[c]||0,A="".concat(c," ").concat(l);o[c]=l+1;var h=n(A),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==h)t[h].references++,t[h].updater(u);else{var p=a(u,r);r.byIndex=s,t.splice(s,0,{identifier:A,updater:p,references:1})}i.push(A)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var d=r(e,a),c=0;c<o.length;c++){var l=n(o[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),s=n(659),d=n.n(s),c=n(56),l=n.n(c),A=n(540),h=n.n(A),u=n(113),p=n.n(u),m=n(365),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=d().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=h(),a()(m.A,f),m.A&&m.A.locals&&m.A.locals;class g{#e;#t;#n;constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;this.#e=e,this.#t=t,this.#n=n}get name(){return this.#e}get gameboard(){return this.#t}receiveAttack(e){return this.#t.receiveAttack(e)}attackEnemy(e,t){return e.receiveAttack(t)}isShipsSunk(){return this.#t.isShipsSunk()}placeShipsRandomly(e){this.#t.clearBoard();for(const t of e){let e=!1;for(;!e;)try{const n=this.#r(t.length);this.#t.placeShip(t,n),e=!0}catch(e){}}}#r(e){let t,n;return Math.random()<.5?(t=this.#a(0,this.#n-e),n=this.#a(0,this.#n-1),Array.from({length:e},((e,r)=>[t+r,n]))):(t=this.#a(0,this.#n-1),n=this.#a(0,this.#n-e),Array.from({length:e},((e,r)=>[t,n+r])))}#a(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}}class y{#o=[];#i=[];get ships(){return this.#o}get shots(){return this.#i}placeShip(e,t){if(e.length!==t.length)throw new Error("Length of the ship should be same as length of the given coordinates");if(this.#o.find((t=>{let{ship:n}=t;return n===e})))throw new Error("Same ship exists within the gameboard");for(const{coordinates:e}of this.#o)for(const n of t)if(e.some((e=>e[0]===n[0]&&e[1]===n[1])))throw new Error("The ship overlaps with another ship");this.#o.push({ship:e,coordinates:t})}receiveAttack(e){if(this.#i.some((t=>{let[n,r]=t;return e[0]===n&&e[1]===r})))throw new Error("This coordinate has been already attacked once");this.#i.push(e);const t=this.#o.find((t=>t.coordinates.some((t=>t[0]===e[0]&&t[1]===e[1]))));return!!t&&(t.ship.hit(),!0)}isShipsSunk(){return this.#o.every((e=>{let{ship:t}=e;return t.isSunk()}))}clearBoard(){this.#o=[],this.#i=[]}}class v{#s;#d;constructor(e){if(e<=0)throw new Error("Length of the Ship should be at-least 1");this.#s=e,this.#d=0}get hits(){return this.#d}get length(){return this.#s}hit(){return this.#d<this.#s&&(this.#d++,!0)}isSunk(){return this.#d>=this.#s}}class E{static drawBoard(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;e.innerHTML="";for(let n=0;n<t;n++){const r=document.createElement("div");for(let e=0;e<t;e++){const t=document.createElement("div");t.setAttribute("data-x",n),t.setAttribute("data-y",e),r.appendChild(t)}e.appendChild(r)}}static drawShips(e,t){for(const[n,r]of t)e.querySelector(`div[data-x='${n}'][data-y='${r}']`).classList.toggle("ship")}static drawShots(e,t){for(const[n,r]of t)e.querySelector(`div[data-x='${n}'][data-y='${r}']`).classList.toggle("shot")}static drawName(){document.querySelector(".player1-name").textContent="You",document.querySelector(".player2-name").textContent="Machine"}static drawPreGameShips(e){const t=document.querySelector(".ships-container"),n=t.querySelector(".ships"),r=document.createElement("p");r.innerHTML="Drag and drop the ships to your board.<br>Click on any ship on the sidebar to rotate.",r.classList.toggle("pre-title"),t.appendChild(r);for(const t of e){const e=document.createElement("div");e.classList.add("draggable"),e.setAttribute("data-len",t),e.setAttribute("data-orientation","horizontal"),e.draggable=!0;for(let n=0;n<t;n++){const t=document.createElement("div");e.appendChild(t)}n.appendChild(e)}const a=document.querySelectorAll(".draggable");for(const e of a)e.addEventListener("click",(()=>{for(const e of a){const t=e.getAttribute("data-orientation");e.setAttribute("data-orientation","horizontal"===t?"vertical":"horizontal")}}))}static drawPreGameRandomButton(){const e=document.querySelector(".pre-game"),t=document.createElement("button");t.textContent="Place randomly",t.classList.add("random"),e.appendChild(t)}static drawPreGameStartButton(){if(document.querySelector(".pre-game .start"))return;const e=document.querySelector(".pre-game"),t=document.createElement("button");t.textContent="Start Game",t.classList.add("start"),e.appendChild(t)}}class b{#c={};#l={};#A=!1;#h;#u=(()=>new Map)();#n=10;constructor(){this.#c=new g("You",new y),this.#l=new g("Machine",new y),this.#h=this.#c,this.#u.set(this.#c,document.querySelector("#player1")),this.updateBoards(),E.drawPreGameShips([2,3,3,4,5]),this.addPreGameDraggableEvents(),E.drawPreGameRandomButton(),this.addPreGameRandomButtonAddEventListener()}startGame(){document.querySelector("main").innerHTML='\n      <section>\n        <p class="player1-name"></p>\n        <div id="player1"></div>\n      </section>\n      <section>\n        <p class="player2-name"></p>\n        <div id="player2"></div>\n      </section>\n    ',this.#A=!0,this.#l.placeShipsRandomly([new v(2),new v(3),new v(3),new v(4),new v(5)]),E.drawName(),this.#u.set(this.#c,document.querySelector("#player1")),this.#u.set(this.#l,document.querySelector("#player2")),this.updateBoards()}addPreGameDraggableEvents(){const e=document.querySelectorAll(".draggable"),t=document.querySelectorAll("div[data-x][data-y]");let n,r=[];for(const t of e)t.addEventListener("dragstart",(()=>{t.classList.add("dragging")})),t.addEventListener("dragend",(()=>{const e=document.querySelectorAll(".overflow");for(const t of e)t.classList.remove("overflow"),t.classList.remove("dragover");if(n===r.length){const e=this.#c.gameboard;for(const[e,t]of r){const n=document.querySelector(`[data-x="${e}"][data-y="${t}"]`);if(n.classList.contains("ship")){for(const e of document.querySelectorAll(".dragover"))e.classList.remove("dragover");return}n.classList.add("ship")}e.placeShip(new v(n),r);for(const e of document.querySelectorAll(".dragover"))e.classList.remove("dragover");document.querySelector(".dragging").remove(),0===document.querySelectorAll(".draggable").length&&(E.drawPreGameStartButton(),this.addPreGameStartButtonAddEventListener())}}));for(const e of t)e.addEventListener("dragover",(()=>{const t=document.querySelector(".dragging");if(!t)return;const a=t.getAttribute("data-orientation"),o=t.getAttribute("data-len"),i=+e.getAttribute("data-x"),s=+e.getAttribute("data-y"),d=[];for(let e=0;e<o;e++)if("horizontal"===a){const t=i,n=s+e;n<this.#n&&n>=0&&d.push([t,n])}else{const t=i+e,n=s;t<this.#n&&t>=0&&d.push([t,n])}for(const e of document.querySelectorAll(".dragover"))e.classList.remove("dragover");for(const e of document.querySelectorAll(".overflow"))e.classList.remove("overflow");for(const[e,t]of d){const n=document.querySelector(`[data-x="${e}"][data-y="${t}"]`);n&&d.length<o?(n.classList.add("dragover"),n.classList.add("overflow")):n&&n.classList.add("dragover")}n=+o,r=d.slice()}))}addPreGameRandomButtonAddEventListener(){document.querySelector(".random").addEventListener("click",(()=>{this.#c.placeShipsRandomly([new v(2),new v(3),new v(3),new v(4),new v(5)]),this.updateBoards(),document.querySelector(".pre-game .ships").innerHTML="",document.querySelector(".pre-game .pre-title").innerHTML="You can place randomly again.<br> Reload the page to place manually.",E.drawPreGameStartButton(),this.addPreGameStartButtonAddEventListener()}))}addPreGameStartButtonAddEventListener(){document.querySelector(".pre-game .start").addEventListener("click",(()=>{this.startGame()}))}updateBoards(){for(const[e,t]of this.#u.entries())E.drawBoard(t),E.drawShips(t,e.gameboard.ships.reduce(((e,t)=>e.concat(t.coordinates)),[])),E.drawShots(t,e.gameboard.shots),this.addBoardEventListeners(t,e)}addBoardEventListeners(e,t){const n=e.querySelectorAll("[data-x][data-y]");for(const e of n)(e.getAttribute("class")?.split(" ")||[]).includes("shot")||e.addEventListener("click",(()=>{const n=e.getAttribute("data-x"),r=e.getAttribute("data-y");this.handleAttack([+n,+r],t)}))}handleAttack(e,t){this.#h!==t&&(t.receiveAttack(e),this.switchPlayer(),this.updateBoards(),t.isShipsSunk()&&this.handleWin())}switchPlayer(){this.#h=this.#h===this.#c?this.#l:this.#c,this.#h===this.#l&&this.handleMachineMove()}handleWin(){setTimeout((()=>{window.alert(`${this.#h.name} won. Reload the window to play again!`)}),1)}handleMachineMove(){let e=!1;for(;!e;){const t=this.#a(0,this.#n-1),n=this.#a(0,this.#n-1);try{this.handleAttack([t,n],this.#c),e=!0}catch(e){}}}#a(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}}window.addEventListener("DOMContentLoaded",(()=>new b))})();
//# sourceMappingURL=index.bundle.js.map