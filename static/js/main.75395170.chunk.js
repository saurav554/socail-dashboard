(this["webpackJsonpsocial-dashboard"]=this["webpackJsonpsocial-dashboard"]||[]).push([[0],{31:function(e,t,a){e.exports=a(58)},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),o=a.n(r),s=a(10),c=a(1),u=a(29),i=a(11),m=a(12),h=a(14),d=a(13),p=a(9),E=a.n(p),g=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(u.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),E.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){var a=t.data.find((function(t){return t.email==e.state.email}));a?(localStorage.setItem("storedId",a.id),e.setState({users:a})):(alert("Email is not registered"),e.setState({email:""}))}))},e.state={email:"",users:[]},e}return Object(m.a)(a,[{key:"render",value:function(){return console.log(this.state),l.a.createElement("div",null,0!=localStorage.length?l.a.createElement(c.a,{to:"/userProfile/".concat(localStorage.getItem("storedId"))}):l.a.createElement("div",null,l.a.createElement("h2",null," Login "),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange,placeholder:"enter email and press enter"}))))}}]),a}(l.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleOut=function(){localStorage.clear(),e.setState({status:!0})},e.state={user:[],posts:[],status:!1},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(0!=localStorage.length){var t=localStorage.getItem("storedId");E.a.get("https://jsonplaceholder.typicode.com/users/".concat(t)).then((function(t){var a=t.data;e.setState({user:a})})).catch((function(e){console.log(e)})),E.a.get("https://jsonplaceholder.typicode.com/posts?userId=".concat(t)).then((function(t){var a=t.data;e.setState({posts:a})})).catch((function(e){console.log(e)}))}else alert("you are not logged in"),this.setState({status:!0})}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.status&&l.a.createElement(c.a,{to:"/"}),l.a.createElement("button",{onClick:this.handleOut},"Log out"),l.a.createElement("h2",null,"Name:-",this.state.user.name),l.a.createElement("h2",null,"Email:-",this.state.user.email),l.a.createElement("h2",null,"Phone:-",this.state.user.phone),l.a.createElement("h2",null,"Website:-",this.state.user.website),l.a.createElement("hr",null),l.a.createElement("h1",null,"Posts made"),l.a.createElement("ul",null,this.state.posts.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.body),l.a.createElement("hr",null))}))))}}]),a}(l.a.Component);var b=function(e){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(c.b,{path:"/",component:g}),l.a.createElement(c.b,{path:"/",component:f})))};o.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.75395170.chunk.js.map