(function(t){function e(e){for(var n,s,i=e[0],l=e[1],u=e[2],p=0,d=[];p<i.length;p++)s=i[p],a[s]&&d.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"53d5":function(t,e,r){"use strict";var n=r("6f2e"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("el-container",[r("el-header",{attrs:{height:"100px"}},[r("el-col",{attrs:{span:2}},[r("a",{on:{click:function(e){t.$router.go(-1)}}},[r("arrow-left",{staticClass:"header-icon"})],1)]),r("el-col",{attrs:{span:20}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/"}},[r("h1",{staticClass:"text-center header-title"},[t._v("\n            vue-github\n          ")])])],1),r("el-col",{attrs:{span:2}},[r("a",{attrs:{href:"https://github.com/moeen",target:"_blank"}},[r("github-circle",{staticClass:"header-icon"})],1)])],1),r("el-main",[r("router-view")],1),r("el-footer",{staticStyle:{"text-align":"center",color:"#37474F"},attrs:{height:"40px"}},[r("a",{staticClass:"no-decoration",attrs:{href:"https://github.com/moeen/vue-github",target:"_blank"}},[t._v("vue-github")]),t._v(" | "),r("a",{staticClass:"no-decoration",attrs:{href:"https://github.com/moeen",target:"_blank"}},[t._v("Moein")])])],1)],1)},o=[],s=r("22f9"),i=r("57e5"),l={components:{GithubCircle:s["a"],ArrowLeft:i["a"]}},u=l,c=(r("034f"),r("2877")),p=Object(c["a"])(u,a,o,!1,null,null,null);p.options.__file="App.vue";var d=p.exports,f=r("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:22}},[r("el-input",{attrs:{placeholder:"username ..."},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchUsername(e):null}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchUsername}},[t._v("Search")])],1)],1),t.searchResult?[0==t.searchResult.items.length?r("el-alert",{attrs:{title:"Username incorrect",type:"error",description:"We couldn’t find any username matches "+t.username,"show-icon":""}}):t._e(),r("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:20}},t._l(t.searchResult.items,function(e){return r("el-col",{key:e.id,attrs:{xs:12,sm:8,md:4,lg:4,xl:4}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+e.login}},[r("el-card",{staticClass:"transform-card",attrs:{"body-style":{padding:"0px"}}},[r("img",{staticClass:"image",attrs:{src:e.avatar_url}}),r("div",{staticStyle:{padding:"14px","text-align":"center"}},[r("span",[t._v(t._s(e.login))])])])],1)],1)}))]:t._e()],2)},h=[],g={name:"home",data:function(){return{username:""}},methods:{searchUsername:function(){this.$store.dispatch("userSearch",this.username)}},computed:{searchResult:function(){return this.$store.state.UserModule.searchResult}}},_=g,v=(r("c8ca"),Object(c["a"])(_,m,h,!1,null,"6a889272",null));v.options.__file="Home.vue";var b=v.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.userDetail&&t.userRepos?[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[r("el-card",{staticClass:"box-card"},[r("el-col",{attrs:{span:8}},[r("img",{staticStyle:{width:"100%",height:"auto","border-radius":"50%"},attrs:{src:t.userDetail.avatar_url,alt:""}})]),r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:16}},[r("h4",{staticStyle:{"margin-left":"15px"}},[t._v("\n              "+t._s(t.userDetail.name)+"\n            ")]),r("p",{staticStyle:{"margin-left":"15px","font-size":"0.9rem"}},[t._v("\n              "+t._s(t.userDetail.bio)+"\n            ")]),r("el-row",[r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[r("p",[t._v("\n                  "+t._s(t.userDetail.public_repos)+"\n                ")]),r("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("Repositories")])]),r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+t.username+"/followers"}},[r("p",[t._v("\n                    "+t._s(t.userDetail.followers)+"\n                  ")])]),r("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("Followers")])],1),r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+t.username+"/following"}},[r("p",[t._v("\n                    "+t._s(t.userDetail.following)+"\n                  ")])]),r("p",{staticStyle:{"font-size":"0.8rem"}},[t._v("Following")])],1)],1)],1)],1)],1),r("el-col",{attrs:{xs:24,sm:24,md:16,lg:16,xl:16}},[r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},t._l(t.userRepos,function(e){return r("el-col",{key:e.id,staticStyle:{margin:"10px 0 10px 0"},attrs:{span:12}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+t.username+"/"+e.name}},[r("el-card",{staticClass:"box-card transform-card"},[r("h4",{staticStyle:{margin:"0"}},[t._v("\n                    "+t._s(e.name)+"\n                  ")]),r("p",[t._v("\n                    "+t._s(e.description)+"\n                  ")]),r("el-row",[r("el-button",{staticStyle:{padding:"6px 8px 8px 8px"},attrs:{type:"primary",plain:""}},[r("star-outline"),t._v("\n                      "+t._s(e.stargazers_count)+"\n                    ")],1),r("el-button",{staticStyle:{padding:"6px 8px 8px 8px"},attrs:{type:"primary",plain:""}},[r("source-fork"),t._v("\n                      "+t._s(e.forks_count)+"\n                    ")],1),r("el-button",{staticStyle:{padding:"6px 8px 8px 8px",float:"right"},attrs:{type:"warning",plain:""}},[t._v("\n                      "+t._s(e.language)+"\n                    ")])],1)],1)],1)],1)}))],1)],1)],1)]:t._e()],2)},y=[],S=r("7a20"),w=r("166e"),R={name:"user",components:{StarOutline:S["a"],SourceFork:w["a"]},data:function(){return{username:""}},beforeMount:function(){this.username=this.$route.params.username,this.$store.dispatch("userRepos",this.username),this.$store.dispatch("userDetail",this.username)},computed:{userRepos:function(){return this.$store.state.UserModule.userRepos},userDetail:function(){return this.$store.state.UserModule.userDetail}}},E=R,C=Object(c["a"])(E,x,y,!1,null,null,null);C.options.__file="User.vue";var D=C.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},t._l(t.userFollowers,function(e){return r("el-col",{key:e.id,staticClass:"follow-card",attrs:{xs:12,sm:8,md:4,lg:4,xl:4}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+e.login}},[r("el-card",{staticClass:"username-card",attrs:{"body-style":{padding:"0px"}}},[r("img",{staticClass:"image",attrs:{src:e.avatar_url}}),r("div",{staticStyle:{padding:"14px","text-align":"center"}},[r("span",[t._v(t._s(e.login))])])])],1)],1)}))],1)],1)},O=[],T={name:"followers",data:function(){return{}},beforeCreate:function(){var t=this.$route.params.username;this.$store.dispatch("userFollowers",t)},computed:{userFollowers:function(){return this.$store.state.UserModule.userFollowers}}},F=T,$=(r("53d5"),Object(c["a"])(F,k,O,!1,null,"1234b422",null));$.options.__file="Followers.vue";var M=$.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},t._l(t.userFollowing,function(e){return r("el-col",{key:e.id,staticClass:"follow-card",attrs:{xs:12,sm:8,md:4,lg:4,xl:4}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+e.login}},[r("el-card",{staticClass:"username-card",attrs:{"body-style":{padding:"0px"}}},[r("img",{staticClass:"image",attrs:{src:e.avatar_url}}),r("div",{staticStyle:{padding:"14px","text-align":"center"}},[r("span",[t._v(t._s(e.login))])])])],1)],1)}))],1)],1)},L=[],P={name:"following",data:function(){return{}},beforeCreate:function(){var t=this.$route.params.username;this.$store.dispatch("userFollowing",t)},computed:{userFollowing:function(){return this.$store.state.UserModule.userFollowing}}},j=P,A=(r("7297"),Object(c["a"])(j,U,L,!1,null,"2b626265",null));A.options.__file="Following.vue";var z=A.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.repoDetail&&t.repoReadme&&t.repoContributors?[r("el-card",{staticClass:"box-card"},[r("el-row",[r("h2",{staticStyle:{margin:"0",display:"inline"}},[t._v("\n          "+t._s(t.repoDetail.name)+"\n          "),r("a",{staticClass:"no-decoration",attrs:{target:"_blank",href:t.repoDetail.html_url}},[r("web")],1)]),r("el-button",{staticStyle:{padding:"6px 8px 8px 8px",float:"right",display:"inline"},attrs:{type:"warning",plain:""}},[t._v("\n          "+t._s(t.repoDetail.language)+"\n        ")])],1),r("p",{staticStyle:{"font-size":"0.9rem",margin:"2px 0 5px 0"}},[t._v("\n        "+t._s(t.repoDetail.description)+"\n        "),r("a",{attrs:{target:"_blank",href:t.repoDetail.homepage}},[t._v(t._s(t.repoDetail.homepage))])]),r("p",{staticStyle:{margin:"12px 0 0 0","font-size":"0.9rem"}},[t._v("\n        Clone over HTTPS:\n      ")]),r("p",{staticStyle:{"background-color":"#263238",color:"#ECEFF1",padding:"10px","border-radius":"5px",display:"inline-block",margin:"5px 0"}},[t._v("\n        "+t._s(t.repoDetail.clone_url)+"\n      ")]),r("br"),r("p",{staticStyle:{margin:"8px 0 0 0","font-size":"0.9rem"}},[t._v("\n        Clone over SSH:\n      ")]),r("p",{staticStyle:{"background-color":"#263238",color:"#ECEFF1",padding:"10px","border-radius":"5px",display:"inline-block",margin:"5px 0"}},[t._v("\n        "+t._s(t.repoDetail.ssh_url)+"\n      ")]),r("div",{staticStyle:{"border-style":"solid","border-radius":"3px","border-width":"2px",padding:"0 20px","margin-top":"30px","border-color":"#CFD8DC"},domProps:{innerHTML:t._s(t.toMarkdown(t.repoReadme))}})],1),r("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"30px"}},[r("h4",{staticStyle:{margin:"0 0 10px 0"}},[t._v("\n        Contributors\n      ")]),r("el-row",{attrs:{gutter:20}},t._l(t.repoContributors,function(e){return r("el-col",{key:e.id,staticStyle:{margin:"10px 0 10px 0"},attrs:{xs:6,sm:4,md:3,lg:3,xl:3}},[r("router-link",{staticClass:"no-decoration",attrs:{to:"/user/"+e.login}},[r("el-card",{staticClass:"transform-card",attrs:{"body-style":{padding:"0px"}}},[r("img",{staticClass:"image",attrs:{src:e.avatar_url}}),r("div",{staticStyle:{padding:"14px","text-align":"center"}},[r("span",{staticStyle:{"font-size":"0.75  rem"}},[t._v(t._s(e.login))])])])],1)],1)}))],1)]:t._e()],2)},H=[],W=r("4f11"),N=r("0e54"),G={name:"repository",components:{Web:W["a"]},data:function(){return{info:{username:"",repo:""}}},beforeMount:function(){this.info.username=this.$route.params.username,this.info.repo=this.$route.params.repo,this.$store.dispatch("repoDetail",this.info),this.$store.dispatch("repoReadme",this.info),this.$store.dispatch("repoContributors",this.info)},computed:{repoDetail:function(){return this.$store.state.RepoModule.repoDetail},repoReadme:function(){return this.$store.state.RepoModule.repoReadme},repoContributors:function(){return this.$store.state.RepoModule.repoContributors}},methods:{toMarkdown:function(t){return N(t)}}},B=G,J=(r("6450"),Object(c["a"])(B,I,H,!1,null,"27a8d82e",null));J.options.__file="Repository.vue";var q=J.exports;n["default"].use(f["a"]);var K=new f["a"]({base:"/",routes:[{path:"/",name:"home",component:b},{path:"/user/:username",name:"user",component:D},{path:"/user/:username/followers",name:"followers",component:M},{path:"/user/:username/following",name:"following",component:z},{path:"/user/:username/:repo",name:"repository",component:q}]}),Q=r("2f62"),V=(r("386d"),r("bc3a")),X=r.n(V),Y={search:function(t){return X.a.get("https://api.github.com/search/users?q=".concat(t,"&per_page=6"))},userRepos:function(t){return X.a.get("https://api.github.com/users/".concat(t,"/repos"))},userDetail:function(t){return X.a.get("https://api.github.com/users/".concat(t))},followers:function(t){return X.a.get("https://api.github.com/users/".concat(t,"/followers"))},following:function(t){return X.a.get("https://api.github.com/users/".concat(t,"/following"))}},Z={searchResult:null,userRepos:null,userDetail:null,userFollowers:null,userFollowing:null},tt={userSearch:function(t,e){var r=t.commit;Y.search(e).then(function(t){r("SET_SEARCH_RESULT",t.data)})},userRepos:function(t,e){var r=t.commit;Y.userRepos(e).then(function(t){r("SET_USER_REPOS",t.data)})},userDetail:function(t,e){var r=t.commit;Y.userDetail(e).then(function(t){r("SET_USER_DETAIL",t.data)})},userFollowers:function(t,e){var r=t.commit;Y.followers(e).then(function(t){r("SET_USER_FOLLOWERS",t.data)})},userFollowing:function(t,e){var r=t.commit;Y.following(e).then(function(t){r("SET_USER_FOLLOWING",t.data)})}},et={SET_SEARCH_RESULT:function(t,e){t.searchResult=e},SET_USER_REPOS:function(t,e){t.userRepos=e},SET_USER_DETAIL:function(t,e){t.userDetail=e},SET_USER_FOLLOWERS:function(t,e){t.userFollowers=e},SET_USER_FOLLOWING:function(t,e){t.userFollowing=e}},rt={state:Z,actions:tt,mutations:et},nt={repoDetail:function(t,e){return X.a.get("https://api.github.com/repos/".concat(t,"/").concat(e))},repoReadme:function(t,e){return X.a.get("https://api.github.com/repos/".concat(t,"/").concat(e,"/contents/README.md"))},repoContributors:function(t,e){return X.a.get("https://api.github.com/repos/".concat(t,"/").concat(e,"/contributors"))}},at={repoDetail:null,repoReadme:null,repoContributors:null},ot={repoDetail:function(t,e){var r=t.commit;nt.repoDetail(e.username,e.repo).then(function(t){r("SET_REPO_DETAIL",t.data)})},repoReadme:function(t,e){var r=t.commit;nt.repoReadme(e.username,e.repo).then(function(t){r("SET_REPO_README",t.data.content)})},repoContributors:function(t,e){var r=t.commit;nt.repoContributors(e.username,e.repo).then(function(t){r("SET_REPO_CONTRIBUTORS",t.data)})}},st={SET_REPO_DETAIL:function(t,e){t.repoDetail=e},SET_REPO_README:function(t,e){t.repoReadme=atob(e)},SET_REPO_CONTRIBUTORS:function(t,e){t.repoContributors=e}},it={state:at,actions:ot,mutations:st};n["default"].use(Q["a"]);var lt=!1,ut=new Q["a"].Store({modules:{UserModule:rt,RepoModule:it},strict:lt}),ct=r("5c96"),pt=r.n(ct);r("0fae"),r("d48d");n["default"].use(pt.a),n["default"].config.productionTip=!1,new n["default"]({router:K,store:ut,render:function(t){return t(d)}}).$mount("#app")},6450:function(t,e,r){"use strict";var n=r("ab04"),a=r.n(n);a.a},"64a9":function(t,e,r){},"6f2e":function(t,e,r){},7297:function(t,e,r){"use strict";var n=r("a4c2"),a=r.n(n);a.a},"8aa3":function(t,e,r){},a4c2:function(t,e,r){},ab04:function(t,e,r){},c8ca:function(t,e,r){"use strict";var n=r("8aa3"),a=r.n(n);a.a}});
//# sourceMappingURL=app.df2a827f.js.map