(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(18),r=c.n(a),i=(c(47),c(3)),o=(c(48),c(1));var l=function(e){var t=e.trip,c=e.setCurrentTrip,s=e.setEditMode,a=e.editMode,r=Object(n.useState)(t.from),l=Object(i.a)(r,2),d=l[0],j=l[1],b=Object(n.useState)(t.to),u=Object(i.a)(b,2),m=u[0],h=u[1],p=Object(n.useState)(t.depart_date),O=Object(i.a)(p,2),x=O[0],f=O[1],v=Object(n.useState)(t.budget),g=Object(i.a)(v,2),N=g[0],y=g[1];return Object(o.jsxs)("div",{className:"card mt-5 mb-2",children:[Object(o.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(o.jsx)("h4",{children:"Edit Trip"}),Object(o.jsxs)("div",{className:"custom-control custom-switch",children:[Object(o.jsx)("input",{onChange:function(){return s(!a)},checked:a,type:"checkbox",className:"custom-control-input",id:"customSwitch1"}),Object(o.jsx)("label",{className:"custom-control-label",htmlFor:"customSwitch1",children:"Toggle this box exit edit mode"})]})]}),Object(o.jsxs)("form",{className:"ml-4",onSubmit:function(e){e.preventDefault();var n={trip:{from:d,to:m,depart_date:x,budget:N}};fetch("/trips/".concat(t.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){c(e),s(!1)}))},children:[Object(o.jsx)("input",{onChange:function(e){j(e.target.value)},value:d,className:"mb-2 mr-2",type:"text",name:"from",placeholder:"From",required:!0}),Object(o.jsx)("input",{onChange:function(e){h(e.target.value)},value:m,className:"mr-4",type:"text",name:"to",placeholder:"To",required:!0}),Object(o.jsx)("input",{onChange:function(e){f(e.target.value)},value:x,className:"mr-4",type:"date",name:"depart-date",placeholder:"Depart Date",required:!0}),Object(o.jsx)("input",{onChange:function(e){y(e.target.value)},value:N,className:"mr-4",type:"text",name:"budget",placeholder:"Budget",required:!0}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-2 mt-2 mr-6",children:"Submit"})]})]})},d=c(12),j=c(16),b=(c(67),c.p+"static/media/point.fc431e25.png");var u=function(e){var t=e.zoom,c=e.from_latitude,s=e.from_longitude,a=e.to_latitude,r=e.to_longitude,l="pk.eyJ1IjoiYWZ1cm8iLCJhIjoiY2t5ZW4zOWFpMGRqczJxcWtheWNvZHQ2aiJ9.hn3zYWxYhJZv0YcZAVQcsA",u=Object(n.useState)({latitude:(c+a)/2,longitude:(s+r)/2,zoom:t}),m=Object(i.a)(u,2),h=m[0],p=m[1],O=Object(n.useState)({type:"Feature"}),x=Object(i.a)(O,2),f=x[0],v=x[1];return Object(n.useEffect)((function(){fetch("https://api.mapbox.com/directions/v5/mapbox/driving/".concat(s+","+c+";"+r+","+a,"?geometries=geojson&access_token=").concat(l)).then((function(e){return e.json()})).then((function(e){e.routes&&!e.message&&v(Object(d.a)(Object(d.a)({},f),{},{geometry:e.routes[0].geometry}))}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(j.d,{style:{width:"100%",height:"300px"},mapStyle:"mapbox://styles/mapbox/light-v9",accessToken:l,latitude:h.latitude,longitude:h.longitude,zoom:h.zoom,onViewportChange:p,children:[Object(o.jsx)(j.b,{latitude:c,longitude:s,children:Object(o.jsx)("img",{className:"marker-btn",src:b,alt:"LOCATION"})}),Object(o.jsx)(j.b,{latitude:a,longitude:r,children:Object(o.jsx)("img",{className:"marker-btn",src:b,alt:"LOCATION"})}),Object(o.jsx)(j.c,{id:"route",type:"geojson",data:f}),Object(o.jsx)(j.a,{id:"route",type:"line",source:"route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#888","line-width":8}})]})})};var m=function(e){var t=e.trip,c=Object(n.useState)(t),s=Object(i.a)(c,2),a=s[0],r=s[1],d=Object(n.useState)(!1),j=Object(i.a)(d,2),b=j[0],m=j[1],h=0;return t?(a.costs.length>0&&(h=a.costs.map((function(e){return e.amount})).reduce((function(e,t){return e+t}))+a.budget),b?Object(o.jsx)(l,{trip:a,editMode:b,setEditMode:m,setCurrentTrip:r}):Object(o.jsxs)("div",{className:"card mt-5",children:[Object(o.jsx)(u,{zoom:3,from_latitude:a.from_latitude,from_longitude:a.from_longitude,to_latitude:t.to_latitude,to_longitude:t.to_longitude}),Object(o.jsxs)("div",{className:"card-header font-weight-bold d-flex justify-content-between",children:[Object(o.jsx)("h4",{children:"Trip Summary"}),Object(o.jsxs)("div",{className:"custom-control custom-switch",children:[Object(o.jsx)("input",{onChange:function(){return m(!b)},checked:b,type:"checkbox",className:"custom-control-input",id:"customSwitch1"}),Object(o.jsx)("label",{className:"custom-control-label",htmlFor:"customSwitch1",children:"Toggle this box for edit mode"})]})]}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(o.jsxs)("p",{className:"col",children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"From:"})," ",a.from]}),Object(o.jsxs)("p",{className:"col",children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"To:"})," ",a.to]})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-around mt-2",children:[Object(o.jsxs)("p",{className:"col",children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Depart Date:"})," ",a.depart_date]}),Object(o.jsxs)("p",{className:"col",children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Budget:"})," ",a.budget]})]}),Object(o.jsx)("div",{className:"d-flex justify-content-around mt-2",children:Object(o.jsxs)("p",{className:"col",children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Total Expenses:"})," ",h||a.budget]})})]})]})):Object(o.jsx)("h1",{children:"no trip selected please refresh"})};var h=function(e){var t=e.trip,c=e.setHotels,s=(e.setMarkers,Object(n.useRef)("")),a=Object(n.useRef)(""),r=Object(n.useRef)(""),i=Object(n.useRef)("");return Object(o.jsxs)("div",{className:"card mt-5 mb-2",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h4",{children:"New Hotel"})}),Object(o.jsxs)("form",{className:"ml-4",onSubmit:function(e){e.preventDefault();var n=e.currentTarget,o={hotel:{check_in:s.current.value,check_out:a.current.value,location:r.current.value,cost_attributes:{amount:i.current.value}}};fetch("/trips/".concat(t.id,"/hotels"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){c(e),n.reset()}))},children:[Object(o.jsx)("input",{className:" mr-4",ref:s,type:"date",name:"check in",placeholder:"Check in",required:!0}),Object(o.jsx)("input",{className:" mr-4",ref:a,type:"date",name:"check out",placeholder:"Check out",required:!0}),Object(o.jsx)("input",{className:" mr-4",ref:r,type:"text",name:"location",placeholder:"Location",required:!0}),Object(o.jsx)("input",{className:" mr-4",ref:i,type:"number",name:"cost",placeholder:"Cost",required:!0}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-2 mt-2 mr-6",children:"Submit"})]})]})},p=c(31);var O=function(e){var t=e.zoom,c=e.latitude,s=e.longitude,a=e.locations,r=e.point_icon,l=Object(n.useState)({latitude:c,longitude:s,zoom:t}),j=Object(i.a)(l,2),b=j[0],u=j[1];return Object(o.jsx)(p.b,Object(d.a)(Object(d.a)({},b),{},{width:"100%",height:"400px",mapboxApiAccessToken:"pk.eyJ1IjoiYWZ1cm8iLCJhIjoiY2t5ZW4zOWFpMGRqczJxcWtheWNvZHQ2aiJ9.hn3zYWxYhJZv0YcZAVQcsA",onViewportChange:u,children:a.map((function(e){return e.latitude&&e.longitude?Object(o.jsx)(p.a,{latitude:e.latitude,longitude:e.longitude,children:Object(o.jsx)("button",{className:"marker-button",children:Object(o.jsx)("img",{className:"marker-button",src:r,alt:"hotel"})})},e.id):null}))}))},x=c.p+"static/media/hotel.3b300c71.png";var f=function(e){var t=e.trip,c=Object(n.useState)(t.hotels),s=Object(i.a)(c,2),a=s[0],r=s[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(O,{trip:t,zoom:3,point_icon:x,latitude:t.from_latitude,longitude:t.from_longitude,locations:a}),Object(o.jsxs)("div",{className:"card mt-5",children:[Object(o.jsx)("div",{className:"card-header font-weight-bold",children:Object(o.jsx)("h4",{children:"Hotels"})}),Object(o.jsx)("div",{className:"card-body d-flex justify-content-around flex-wrap",children:a.map((function(e,c){return Object(o.jsxs)("div",{className:"card text-white bg-info mb-3 col-12 col-lg-5",children:[Object(o.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(o.jsxs)("h5",{children:["Hotel ",c+1," "]}),Object(o.jsx)("div",{onClick:function(){var c;window.confirm("Delete the item?")&&(c=e.id,fetch("/trips/".concat(t.id,"/hotels/").concat(c),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return r(e)})))},className:"btn btn-danger",children:"X"})]}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Check in:"})," ",e.check_in]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Check out:"})," ",e.check_out]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Location:"})," ",e.location]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Cost:"})," ",e.cost.amount]})]})]},e.id)}))})]}),Object(o.jsx)(h,{trip:t,setHotels:r})]})};var v=function(e){var t=e.trip,c=e.setProviders,s=Object(n.useRef)(""),a=Object(n.useRef)(""),r=Object(n.useRef)(""),i=Object(n.useRef)("");return Object(o.jsxs)("div",{className:"card mt-5 mb-2",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h4",{children:"New Provider"})}),Object(o.jsxs)("form",{className:"ml-4",onSubmit:function(e){e.preventDefault();var n=e.currentTarget,o={provider:{name:s.current.value,date:a.current.value,note:r.current.value,cost_attributes:{amount:i.current.value}}};fetch("/trips/".concat(t.id,"/providers"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(e){c(e),n.reset()}))},children:[Object(o.jsx)("input",{className:"mr-4",ref:s,type:"text",name:"name",placeholder:"Name",required:!0}),Object(o.jsx)("input",{className:"mr-4",ref:a,type:"date",name:"date",placeholder:"Date",required:!0}),Object(o.jsx)("input",{className:"mr-4",ref:r,type:"text",name:"note",placeholder:"Note"}),Object(o.jsx)("input",{className:"mr-4",ref:i,type:"number",name:"cost",placeholder:"Cost",required:!0}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 mb-2 mr-6",children:"Submit"})]})]})};var g=function(e){var t=e.trip,c=Object(n.useState)(t.providers),s=Object(i.a)(c,2),a=s[0],r=s[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"card mt-5",children:[Object(o.jsx)("div",{className:"card-header font-weight-bold",children:Object(o.jsx)("h4",{children:"Providers"})}),Object(o.jsx)("div",{className:"card-body d-flex justify-content-around flex-wrap",children:a.map((function(e,c){return Object(o.jsxs)("div",{className:"card text-white bg-info mb-3 col-12 col-lg-5",children:[Object(o.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(o.jsxs)("h5",{children:["Provider ",c+1]}),Object(o.jsx)("div",{onClick:function(){var c;window.confirm("Delete the item?")&&(c=e.id,fetch("/trips/".concat(t.id,"/providers/").concat(c),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return r(e)})))},className:"btn btn-danger",children:"X"})]}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Name:"})," ",e.name]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Date:"})," ",e.date]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Note:"})," ",e.note]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Cost:"})," ",e.cost.amount]})]})]},e.id)}))})]}),Object(o.jsx)(v,{trip:t,setProviders:r})]})};var N=function(e){var t=e.trip,c=e.setStop,s=Object(n.useRef)(""),a=Object(n.useRef)(""),r=Object(n.useRef)("");return Object(o.jsxs)("div",{className:"card mt-5 mb-2",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h4",{children:"New Stop"})}),Object(o.jsxs)("form",{className:"ml-4",onSubmit:function(e){e.preventDefault();var n=e.currentTarget,i={stop:{stop_reason:s.current.value,note:a.current.value,cost_attributes:{amount:r.current.value}}};fetch("/trips/".concat(t.id,"/stops"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){return e.json()})).then((function(e){c(e),n.reset()}))},children:[Object(o.jsx)("input",{className:" mr-4 ",ref:s,type:"text",name:"stop reason",placeholder:"Stop reason",required:!0}),Object(o.jsx)("input",{className:" mr-4",ref:a,type:"text",name:"notes",placeholder:"Notes"}),Object(o.jsx)("input",{className:" mr-4",ref:r,type:"number",name:"cost",placeholder:"Amount",required:!0}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mt-2 mb-2 mr-6",children:"Submit"})]})]})};var y=function(e){var t=e.trip,c=Object(n.useState)([]),s=Object(i.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){fetch("/trips/".concat(t.id,"/stops")).then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"card mt-5",children:[Object(o.jsx)("div",{className:"card-header font-weight-bold",children:Object(o.jsx)("h4",{children:"Stops"})}),Object(o.jsx)("div",{className:"card-body d-flex justify-content-around flex-wrap",children:a.map((function(e,c){return Object(o.jsxs)("div",{className:"card text-white bg-info mb-3 col-12 col-lg-5",children:[Object(o.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(o.jsxs)("h5",{children:["Stop ",c+1]}),Object(o.jsx)("div",{onClick:function(){var c;window.confirm("Delete the item?")&&(c=e.id,fetch("/trips/".concat(t.id,"/stops/").concat(c),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return r(e)})))},className:"btn btn-danger",children:"X"})]}),Object(o.jsxs)("div",{className:"card-body ",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Stop Reason:"})," ",e.stop_reason," "]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Notes:"})," ",e.note]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Cost:"})," ",e.cost.amount]})]})]},e.id)}))})]}),Object(o.jsx)(N,{trip:t,setStop:r})]})};var w=function(e){e.trip;var t=e.setTrip,c=e.user,s=Object(n.useRef)(""),a=Object(n.useRef)(""),r=Object(n.useRef)(""),i=Object(n.useRef)("false");return Object(o.jsxs)("div",{className:"card mt-5 mb-2",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h2",{children:"New Trip"})}),Object(o.jsxs)("form",{className:"ml-4",onSubmit:function(e){e.preventDefault();var n={trip:{from:s.current.value,to:a.current.value,depart_date:r.current.value,budget:i.current.value,user_id:c.id}};fetch("/trips",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){t(e)}))},children:[Object(o.jsx)("input",{ref:s,className:"mb-2 mr-2",type:"text",name:"from",placeholder:"From",required:!0}),Object(o.jsx)("input",{ref:a,className:"mr-4",type:"text",name:"to",placeholder:"To",required:!0}),Object(o.jsx)("input",{ref:r,className:"mr-4",type:"date",name:"depart-date",placeholder:"Depart Date",required:!0}),Object(o.jsx)("input",{ref:i,className:"mr-4",type:"text",name:"budget",placeholder:"Budget",required:!0}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary mb-2 mt-2 mr-6",children:"Submit"})]})]})},S=c(7),C=c(11);var T=function(e){var t=e.handleLogout;return Object(o.jsx)("div",{children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",style:{backgroundColor:"#0275d8",borderRadius:"10px",fontFamily:"dosis"},children:[Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"/",children:Object(o.jsxs)("h5",{style:{color:"white",margin:"auto",padding:"10px",textDecoration:"none"},children:["Home",Object(o.jsx)("span",{className:"sr-only",children:"(current)"})]})})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(C.b,{to:"/trip",children:Object(o.jsx)("h5",{style:{color:"white",margin:"auto",padding:"10px",textDecoration:"none"},children:"Trip"})})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(C.b,{to:"/hotels",children:Object(o.jsx)("h5",{style:{color:"white",margin:"auto",padding:"10px"},children:"Hotels"})})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(C.b,{to:"/providers",children:Object(o.jsx)("h5",{style:{color:"white",margin:"auto",padding:"10px"},children:"Providers"})})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(C.b,{to:"/stops",children:Object(o.jsx)("h5",{style:{color:"white",margin:"auto",padding:"10px"},children:"Stops"})})})]})}),Object(o.jsx)("button",{className:"btn btn-danger mt-3 mb-3",style:{fontFamily:"dosis"},type:"submit",value:"Add Item",onClick:t,children:"Logout"})]})})};var _=function(e){var t=e.onLogin,c=Object(n.useState)(""),s=Object(i.a)(c,2),a=s[0],r=s[1],l=Object(n.useState)(""),d=Object(i.a)(l,2),j=d[0],b=d[1];return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsx)("div",{className:"col-8",children:Object(o.jsxs)("div",{className:"card mt-5",style:{borderRadius:"10px",fontFamily:"dosis"},children:[Object(o.jsx)("div",{className:"card-header bg-primary",style:{color:"white"},children:Object(o.jsx)("h3",{className:"text-center",children:"Welcome to the Moving Journey Cost!"})}),Object(o.jsx)("h5",{className:"text-center mt-2",children:"User Login:"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email_address:a,password:j})}).then((function(e){return e.json()})).then((function(e){t(e)}))},children:[Object(o.jsxs)("div",{className:" form-group text-center mt-2",children:[Object(o.jsx)("label",{className:"mr-2",htmlFor:"name",children:"Email:"}),Object(o.jsx)("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},required:!0}),Object(o.jsx)("label",{className:"mr-2 ml-2",htmlFor:"name",children:"Password:"}),Object(o.jsx)("input",{type:"password",value:j,onChange:function(e){return b(e.target.value)},required:!0})]}),Object(o.jsx)("p",{className:"text-center",children:Object(o.jsx)("button",{className:"btn btn-primary mt-3 mb-3",type:"submit",children:"Login"})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})]})})})})},k=c(4);var F=function(e){var t=e.setUser,c=Object(n.useState)({name:"",email_address:"",password:"",password_confirmation:""}),s=Object(i.a)(c,2),a=s[0],r=s[1],l=function(e){r(Object(d.a)(Object(d.a)({},a),{},Object(k.a)({},e.target.name,e.target.value)))};return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsx)("div",{className:"col-8",children:Object(o.jsxs)("div",{className:"card mt-2 ",style:{borderRadius:"10px",fontFamily:"dosis"},children:[Object(o.jsx)("div",{className:"card-header bg-primary",style:{color:"white"},children:Object(o.jsx)("h3",{className:"text-center",children:"New User?"})}),Object(o.jsx)("h5",{className:"text-center mt-2",children:"Create Account:"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};fetch("/signup",c).then((function(e){e.ok?e.json().then((function(e){console.log(e),t(e)})):e.json().then((function(e){console.error(e)}))}))},children:[Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("label",{className:"col-6 text-right",htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{className:"col-3",type:"text",name:"name",value:a.name,onChange:function(e){return l(e)},autoComplete:"off",required:!0})]}),Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("label",{className:"col-6 text-right",htmlFor:"email_address",children:"Email:"}),Object(o.jsx)("input",Object(k.a)({className:"col-3",type:"email",required:"email",name:"email_address",value:a.email_address,onChange:function(e){return l(e)},autoComplete:"off"},"required",!0))]}),Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("label",{className:"col-6 text-right",htmlFor:"password",children:"Password:"}),Object(o.jsx)("input",{className:"col-3",type:"password",name:"password",value:a.password,onChange:function(e){return l(e)},autoComplete:"off",required:!0})]}),Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("label",{className:"col-6 text-right",htmlFor:"password",children:"Password Confirmation: "}),Object(o.jsx)("input",{className:"col-3",type:"password",name:"password_confirmation",value:a.password_confirmation,onChange:function(e){return l(e)},autoComplete:"off",required:!0})]}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("button",{className:"btn btn-primary mt-3 mb-3",type:"submit",children:"Sign Up"})})]})]})})})})};var D=function(e){var t=e.trips,c=e.getTrip,s=Object(n.useState)(t),a=Object(i.a)(s,2),r=a[0],l=a[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"card mt-5",children:[Object(o.jsx)("div",{className:"card-header font-weight-bold",children:Object(o.jsx)("h4",{children:"Trips"})}),Object(o.jsx)("div",{className:"card-body d-flex justify-content-around flex-wrap",children:r.map((function(e,t){return Object(o.jsxs)(C.b,{to:"/trip",className:"card text-white bg-info mb-3 col-12 col-lg-5",onClick:function(){return c(e.id)},children:[Object(o.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(o.jsxs)("h5",{children:["Trip ",t]}),Object(o.jsx)("div",{onClick:function(){var t;window.confirm("Delete the item?")&&(t=e.id,fetch("/trips/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return l(e)})))},className:"btn btn-danger",children:"X"})]}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Depart Date:"})," ",e.depart_date]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"From:"})," ",e.from]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"To:"})," ",e.to]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"font-weight-bold",children:"Budget:"})," ",e.budget]})]})]},e.id)}))})]})})};var q=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),r=Object(i.a)(a,2),l=r[0],d=r[1];function j(e){fetch("trips/".concat(e)).then((function(e){return e.json()})).then((function(e){s(e)}))}function b(){fetch("/logout",{method:"DELETE"}).then((function(){d(null),window.location.replace("/")}))}return Object(n.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return d(e)}))}))}),[]),!l||l.error?Object(o.jsxs)("div",{children:[Object(o.jsx)(_,{onLogin:d}),Object(o.jsx)(F,{setUser:d})]}):l.id&&!c.from?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"card mt-5 text-center",children:[Object(o.jsx)("div",{className:"card header bg-light"}),Object(o.jsx)("h1",{children:"Moving Cost Trip"}),Object(o.jsx)("button",{className:"btn btn-danger mt-3 mb-3",style:{fontFamily:"dosis"},type:"submit",value:"Add Item",onClick:b,children:"Logout"})]}),Object(o.jsx)("div",{className:"card mt-5 text-center",children:Object(o.jsx)(D,{trips:l.trips,getTrip:j})}),Object(o.jsx)(w,{user:l,trip:c,setTrip:s})]}):Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(T,{handleLogout:b}),Object(o.jsxs)(S.c,{children:[Object(o.jsx)(S.a,{path:"/hotels",children:Object(o.jsx)(f,{trip:c})}),Object(o.jsx)(S.a,{path:"/providers",children:Object(o.jsx)(g,{trip:c})}),Object(o.jsx)(S.a,{path:"/stops",children:Object(o.jsx)(y,{trip:c})}),Object(o.jsx)(S.a,{path:"/trip",children:Object(o.jsx)(m,{trip:c})}),Object(o.jsx)(S.a,{path:"/",children:Object(o.jsx)(D,{trips:l.trips,getTrip:j})})]})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(C.a,{children:Object(o.jsx)(q,{})})}),document.getElementById("root")),E()}},[[76,1,2]]]);
//# sourceMappingURL=main.1b388062.chunk.js.map