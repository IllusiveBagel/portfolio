(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(n,t,e){},14:function(n,t,e){},16:function(n,t,e){"use strict";e.r(t);var o=e(2),i=e.n(o),a=e(4),r=e.n(a),s=(e(13),e(14),e(5)),c=e(6),h=e(8),u=e(7),d=e(1),l=e(0),v=function(n){Object(h.a)(e,n);var t=Object(u.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(c.a)(e,[{key:"componentDidMount",value:function(){this.floatySpace()}},{key:"floatySpace",value:function(){var n,t=["#FF3F8E","#04C2C9","#2E55C1"];n=new d.CanvasSpace("canvas").setup({bgcolor:"#252934"});var e=new d.Form(n),o=[],i=n.size.$divide(1.8),a=-.5*window.innerWidth,r=.05*window.innerWidth;r>150&&(r=150);for(var s=new d.Line(0,a).to(n.size.x,0),c=i.clone(),h=1*Math.min(n.size.x,n.size.y),u=0;u<r;u++){var l=new d.Vector(Math.random()*h-Math.random()*h,Math.random()*h-Math.random()*h);l.moveBy(i).rotate2D(u*Math.PI/r,i),l.brightness=.1,o.push(l)}n.add({animate:function(n,a,r){for(var h=0;h<o.length;h++){var u=o[h];u.rotate2D(d.Const.one_degree/20,i),e.stroke(!1).fill(t[h%3]).point(u,1);var l=new d.Line(u).to(s.getPerpendicularFromPoint(u));Math.abs(l.getDistanceFromPoint(c))<50?o[h].brightness<.3&&(o[h].brightness+=.015):o[h].brightness>.1&&(o[h].brightness-=.01);var v="rgba(255,255,255,"+o[h].brightness+")";e.stroke(v).fill(!0).line(l)}},onMouseAction:function(n,t,e,o){"move"===n&&c.set(t,e)},onTouchAction:function(n,t,e,o){this.onMouseAction(n,t,e)}}),n.bindMouse(),n.play()}},{key:"render",value:function(){return Object(l.jsx)("div",{id:"pt",class:"canvas",children:Object(l.jsx)("canvas",{id:"canvas",width:"1920",height:"1142",style:{width:"1920px",height:"1142px"}})})}}]),e}(i.a.Component);var f=function(){return Object(l.jsx)(v,{})},b=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(t){var e=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;e(n),o(n),i(n),a(n),r(n)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.f50b6b4e.chunk.js.map