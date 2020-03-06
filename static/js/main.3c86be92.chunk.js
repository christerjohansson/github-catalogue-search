(this["webpackJsonpfront-to-end-react"]=this["webpackJsonpfront-to-end-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/831.5051e951.gif"},22:function(e,t,a){e.exports=a(48)},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),l=a.n(s),c=a(7),i=a.n(c),o=a(18),u=a(2),m=a(3),p=a(5),h=a(4),f=a(6),d=function(e){var t=e.icon,a=e.title;return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("h1",null,r.a.createElement("i",{className:t})," ",a))};d.defaultProps={title:"Github Catalogue Search",icon:"fab fa-github"};var g=d,b=a(19),v=function(e){var t=e.user,a=t.avatar_url,n=t.login,s=t.html_url;return r.a.createElement("div",{className:"card text-center"},r.a.createElement("img",{src:a,alt:"Avatar",className:"round-img",style:{width:"3.75em"}}),r.a.createElement("h3",null,n),r.a.createElement("div",null,r.a.createElement("a",{href:s,className:"btn btn-dark btn-sm my-1"},"Profile")))};v.propType={user:a.n(b).a.object.isRequired};var E=v,y=a(20),C=a.n(y),x=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:C.a,alt:"Loading...",style:{width:"100px",margin:"auto",display:"block"}}))},N={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"1rem"},S=function(e){var t=e.users;return e.loading?r.a.createElement(x,null):r.a.createElement("div",{style:N},t.map((function(e){return r.a.createElement(E,{key:e.id,user:e})})))},j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a.onSubmit=function(e){e.preventDefault(),""===a.state.text?a.props.setAlert("Please enter something to search","danger"):(a.props.searchUsers(a.state.text),a.setState({text:""}))},a.onChange=function(e){return a.setState({text:e.target.value})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showClear,a=e.clearUsers;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit,className:"form"},r.a.createElement("input",{type:"text",name:"text",value:this.state.text,placeholder:"Search our catalogue...",onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"})),t&&r.a.createElement("button",{className:"btn-light btn-block",onClick:a},"Reset"))}}]),t}(n.Component),k=function(e){var t=e.alert;return null!==t&&r.a.createElement("div",{className:"alert alert-".concat(t.type)},r.a.createElement("i",{className:"fas fa-info-circle"})," ",t.msg)},A=a(21),_=a.n(A),O=(a(47),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],loading:!1,alert:null},a.searchUsers=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,_.a.get("https://api.github.com/search/users?q=".concat(t,"&client_id=$\n      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$\n      {process.env.REACT_APP_GITHUB_CLIENT_SECRET}"));case 3:n=e.sent,a.setState({users:n.data.items,loading:!1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.clearUsers=function(){return a.setState({users:[],loading:!1})},a.setAlert=function(e,t){a.setState({alert:{msg:e,type:t}}),setTimeout((function(){return a.setState({alert:null})}),1500)},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement(k,{alert:this.state.alert}),r.a.createElement(j,{searchUsers:this.searchUsers,clearUsers:this.clearUsers,showClear:t.length>0,setAlert:this.setAlert}),r.a.createElement(S,{loading:a,users:t})))}}]),t}(n.Component));l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3c86be92.chunk.js.map