/* PrismJS 1.17.1
https://prismjs.com/download.html#themes=prism-solarizedlight&languages=bash */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,n=0,C={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof _?new _(e.type,C.util.encode(e.content),e.alias):Array.isArray(e)?e.map(C.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function r(e,t){var a,n,i=C.util.type(e);switch(t=t||{},i){case"Object":if(n=C.util.objId(e),t[n])return t[n];for(var o in a={},t[n]=a,e)e.hasOwnProperty(o)&&(a[o]=r(e[o],t));return a;case"Array":return n=C.util.objId(e),t[n]?t[n]:(a=[],t[n]=a,e.forEach(function(e,n){a[n]=r(e,t)}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(n){var r=document.getElementsByTagName("script");for(var t in r)if(r[t].src==n)return r[t]}return null}}},languages:{extend:function(e,n){var r=C.util.clone(C.languages[e]);for(var t in n)r[t]=n[t];return r},insertBefore:function(r,e,n,t){var a=(t=t||C.languages)[r],i={};for(var o in a)if(a.hasOwnProperty(o)){if(o==e)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(o)||(i[o]=a[o])}var s=t[r];return t[r]=i,C.languages.DFS(C.languages,function(e,n){n===s&&e!=r&&(this[e]=i)}),i},DFS:function e(n,r,t,a){a=a||{};var i=C.util.objId;for(var o in n)if(n.hasOwnProperty(o)){r.call(n,o,n[o],t||o);var l=n[o],s=C.util.type(l);"Object"!==s||a[i(l)]?"Array"!==s||a[i(l)]||(a[i(l)]=!0,e(l,r,o,a)):(a[i(l)]=!0,e(l,r,null,a))}}},plugins:{},highlightAll:function(e,n){C.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,r){var t={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",t),t.elements=Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)),C.hooks.run("before-all-elements-highlight",t);for(var a,i=0;a=t.elements[i++];)C.highlightElement(a,!0===n,t.callback)},highlightElement:function(e,n,r){var t=C.util.getLanguage(e),a=C.languages[t];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+t;var i=e.parentNode;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+t);var o={element:e,language:t,grammar:a,code:e.textContent};function l(e){o.highlightedCode=e,C.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,C.hooks.run("after-highlight",o),C.hooks.run("complete",o),r&&r.call(o.element)}if(C.hooks.run("before-sanity-check",o),!o.code)return C.hooks.run("complete",o),void(r&&r.call(o.element));if(C.hooks.run("before-highlight",o),o.grammar)if(n&&u.Worker){var s=new Worker(C.filename);s.onmessage=function(e){l(e.data)},s.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else l(C.highlight(o.code,o.grammar,o.language));else l(C.util.encode(o.code))},highlight:function(e,n,r){var t={code:e,grammar:n,language:r};return C.hooks.run("before-tokenize",t),t.tokens=C.tokenize(t.code,t.grammar),C.hooks.run("after-tokenize",t),_.stringify(C.util.encode(t.tokens),t.language)},matchGrammar:function(e,n,r,t,a,i,o){for(var l in r)if(r.hasOwnProperty(l)&&r[l]){var s=r[l];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(o&&o==l+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=0,m=c.alias;if(h&&!c.pattern.global){var p=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=t,v=a;y<n.length;v+=n[y].length,++y){var k=n[y];if(n.length>e.length)return;if(!(k instanceof _)){if(h&&y!=n.length-1){if(c.lastIndex=v,!(O=c.exec(e)))break;for(var b=O.index+(f&&O[1]?O[1].length:0),w=O.index+O[0].length,A=y,P=v,x=n.length;A<x&&(P<w||!n[A].type&&!n[A-1].greedy);++A)(P+=n[A].length)<=b&&(++y,v=P);if(n[y]instanceof _)continue;S=A-y,k=e.slice(v,P),O.index-=v}else{c.lastIndex=0;var O=c.exec(k),S=1}if(O){f&&(d=O[1]?O[1].length:0);w=(b=O.index+d)+(O=O[0].slice(d)).length;var j=k.slice(0,b),N=k.slice(w),E=[y,S];j&&(++y,v+=j.length,E.push(j));var L=new _(l,g?C.tokenize(O,g):O,m,O,h);if(E.push(L),N&&E.push(N),Array.prototype.splice.apply(n,E),1!=S&&C.matchGrammar(e,n,r,y,v,!0,l+","+u),i)break}else if(i)break}}}}},tokenize:function(e,n){var r=[e],t=n.rest;if(t){for(var a in t)n[a]=t[a];delete n.rest}return C.matchGrammar(e,r,n,0,0,!1),r},hooks:{all:{},add:function(e,n){var r=C.hooks.all;r[e]=r[e]||[],r[e].push(n)},run:function(e,n){var r=C.hooks.all[e];if(r&&r.length)for(var t,a=0;t=r[a++];)t(n)}},Token:_};function _(e,n,r,t,a){this.type=e,this.content=n,this.alias=r,this.length=0|(t||"").length,this.greedy=!!a}if(u.Prism=C,_.stringify=function(e,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return _.stringify(e,n)}).join("");var r={type:e.type,content:_.stringify(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n};if(e.alias){var t=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,t)}C.hooks.run("wrap",r);var a=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(a?" "+a:"")+">"+r.content+"</"+r.tag+">"},!u.document)return u.addEventListener&&(C.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,t=n.code,a=n.immediateClose;u.postMessage(C.highlight(t,C.languages[r],r)),a&&u.close()},!1)),C;var e=C.util.currentScript();if(e&&(C.filename=e.src,e.hasAttribute("data-manual")&&(C.manual=!0)),!C.manual){function r(){C.manual||C.highlightAll()}var t=document.readyState;"loading"===t||"interactive"===t&&e&&e.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return C}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0},{pattern:/(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,greedy:!0,inside:n}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}};for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=n.variable[1].inside,s=0;s<a.length;s++)r[a[s]]=e.languages.bash[a[s]];e.languages.shell=e.languages.bash}(Prism);
