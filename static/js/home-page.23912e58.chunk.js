(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{71:function(t,e,n){"use strict";n.r(e);var a=n(32),r=n.n(a),i=n(33),c=n(34),s=n(35),o=n(40),u=n(39),h=n(0),l=n(36),p=n.n(l),v=n(9),d=n(1),b=function(t){Object(o.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={movies:""},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c2a3095b3c93af2cd3988a9dd6f9ca00");case 2:e=t.sent,this.setState({movies:e.data.results});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.movies;return Object(d.jsx)(d.Fragment,{children:t.length>0&&Object(d.jsx)("ul",{children:t.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)(v.b,{to:"/movies/".concat(t.id),children:t.original_title})},t.id)}))})})}}]),n}(h.Component);e.default=b}}]);
//# sourceMappingURL=home-page.23912e58.chunk.js.map