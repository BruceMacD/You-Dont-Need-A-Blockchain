(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(4),c=a(6),r=a(5),s=a(7),o=a(0),l=a.n(o),d=a(10),u=a.n(d),m=a(2),h=a(1),p=a.n(h),v=(a(16),a(8)),f=a.n(v),w=function(e){e.classes;var t=e.clickHandle,a=e.children;return l.a.createElement("div",{role:"button",className:"button",onClick:function(){return t()}},a)},b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={selected:!1},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.props.disabled||(this.props.onClick(e),this.setState({selected:!0}))}},{key:"color",value:function(e,t){return e===t?t?"cg":"cr":"cw"}},{key:"render",value:function(){var e=this,t=this.state.selected,a=this.props,n=a.choice,i=a.disabled,c=a.topSelected;return l.a.createElement("div",{className:"quiz__options ac",onClick:function(){return e.handleClick(n.answer)}},l.a.createElement("div",{className:"".concat(i&&!t?this.color(c,n.answer):""," ").concat(t?n.answer?"cg":"cr":"cw")},n.item))}}]),t}(l.a.Component),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={selected:null,choice:!1,disabled:!1,answerShow:!1,hiding:!1},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"handleStop",value:function(e){var t=this;!1===this.state.disabled&&(this.setState({selected:e,disabled:!0,hiding:!0}),setTimeout(function(){t.setState({answerShow:!0})},700),setTimeout(function(){t.setState({choice:!0,hiding:!1})},500))}},{key:"handleNext",value:function(e){var t=this;e?(this.state.selected&&this.props.pushAnswer(),setTimeout(function(){t.props.next()},10)):this.handleStop(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.selected,n=t.choice,i=t.hiding,c=t.answerShow,r=this.props.item,s=r.question,o=r.choices,d=r.fact;return l.a.createElement("div",{className:"quiz__main"},l.a.createElement("div",{className:"quiz__container container--xl mha"},n&&!i?l.a.createElement("div",{className:"px2 quiz__material anwser container--q mha"},l.a.createElement("div",{className:p()("quiz__material_answer",{active:n&&c})},l.a.createElement("div",null,l.a.createElement("h3",{className:"cw"},a?"":"You Don't Need a Blockchain"),l.a.createElement("div",{className:"cw",dangerouslySetInnerHTML:{__html:d}})))):l.a.createElement("div",{className:p()("px2 quiz__material question container--q mha")},l.a.createElement("h4",{className:p()("cw quiz__material_question",{hiding:i})},s)),l.a.createElement("div",{className:"quiz__selections"},l.a.createElement("div",{className:"quiz__selections_nest"},l.a.createElement("div",{className:p()("px1 f jcc aic mha")},o.map(function(t){return l.a.createElement(b,{key:t.id,topSelected:a,choice:t,disabled:e.state.disabled,size:t.fontSize,onClick:function(t){return e.handleNext(t)}})})),l.a.createElement("div",{className:"f jcc aic"},n&&l.a.createElement("div",{className:p()("f jce quiz__options_next",{visible:n&&c})}))))))}}]),t}(o.Component),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"f jcc aic site"},l.a.createElement("div",null,l.a.createElement(m.Strider,{activeIndex:"0",transitionSpeed:300},l.a.createElement(m.Step,null,function(e){var t=e.next,a=(e.goTo,e.active),n=e.hiding;e.activeIndex;return l.a.createElement("div",{className:p()("step__wrapper",{"is-active":a,"is-hiding":n})},l.a.createElement(_,{next:t}))}),l.a.createElement(m.Step,null,function(t){var a=t.next,n=(t.goTo,t.active),i=t.hiding,c=t.activeIndex;return l.a.createElement("div",{className:p()("step__wrapper",{"is-active":n,"is-hiding":i})},l.a.createElement(E,Object.assign({},e.props,{pushAnswer:function(){return e.setState({})},number:c,next:a,item:f.a[c]})))}),l.a.createElement(m.Step,null,function(t){var a=t.next,n=(t.goTo,t.active),i=t.hiding,c=t.activeIndex;return l.a.createElement("div",{className:p()("step__wrapper",{"is-active":n,"is-hiding":i})},l.a.createElement(E,Object.assign({},e.props,{pushAnswer:function(){return e.setState({})},number:c,next:a,item:f.a[c]})))}),l.a.createElement(m.Step,null,function(t){var a=t.next,n=(t.goTo,t.active),i=t.hiding,c=t.activeIndex;return l.a.createElement("div",{className:p()("step__wrapper",{"is-active":n,"is-hiding":i})},l.a.createElement(E,Object.assign({},e.props,{pushAnswer:function(){return e.setState({})},number:c,next:a,item:f.a[c]})))}),l.a.createElement(m.Step,null,function(t){var a=t.next,n=(t.goTo,t.active),i=t.hiding,c=t.activeIndex;return l.a.createElement("div",{className:p()("step__wrapper",{"is-active":n,"is-hiding":i})},l.a.createElement(E,Object.assign({},e.props,{pushAnswer:function(){return e.setState({})},number:c,next:a,item:f.a[c]})))}),l.a.createElement(m.Step,null,function(t){var a=t.next,n=(t.goTo,t.active),i=t.hiding,c=t.activeIndex;return l.a.createElement("div",{className:p()("step__wrapper",{"is-active":n,"is-hiding":i})},l.a.createElement(E,Object.assign({},e.props,{pushAnswer:function(){return e.setState({})},number:c,next:a,item:f.a[c]})))}),l.a.createElement(m.Step,null,function(t){var a=t.next,n=(t.goTo,t.active),i=t.hiding,c=t.activeIndex;return l.a.createElement("div",{className:p()("step__wrapper",{"is-active":n,"is-hiding":i})},l.a.createElement(E,Object.assign({},e.props,{pushAnswer:function(){return e.setState({})},number:c,next:a,item:f.a[c]})))}),l.a.createElement(m.Step,null,function(t){var a=t.active,n=t.hiding;t.activeIndex;return l.a.createElement("div",{className:p()("step__wrapper",{"is-active":a,"is-hiding":n})},l.a.createElement(N,e.props))}))))}}]),t}(l.a.Component),_=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"You Don't Need a Blockchain"),l.a.createElement(w,{classes:"f jcb mt1 regular bold cw",clickHandle:function(){return e.props.next()}},"I think I need a Blockchain"))}}]),t}(l.a.Component),N=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"mha container--q"},l.a.createElement("h4",null,"You Might Need a Blockchain"))}}]),t}(l.a.Component);u.a.render(l.a.createElement(g,null),document.getElementById("root"))},8:function(e,t){e.exports={1:{question:"Do you need a shared consistent data store?",fact:"If you don't need a consistent data store, you don't need a Blockchain. Consider a spreadsheet.",choices:[{id:Math.random(),item:"YES",answer:!0},{id:Math.random(),item:"NO",answer:!1}]},2:{question:"Does more than one entity need to contribute data?",fact:"Blockchains are usually used when data comes from multiple entities. Consider using a database.",choices:[{id:Math.random(),item:"YES",answer:!0},{id:Math.random(),item:"NO",answer:!1},{id:Math.random(),item:"NO... BUT I NEED AUDITING",answer:!0}]},3:{question:"Will data records ever need to be updated or deleted once they are written?",fact:"Blockchains do not allow for modification of historical data. Consider a database.",choices:[{id:Math.random(),item:"YES",answer:!0},{id:Math.random(),item:"NO",answer:!1}]},4:{question:"Sensitive identifiers will not be written to the data store?",fact:"You should not write sensitive information to a Blockchain that requires long term confidentiality. Try an encrypted database.",choices:[{id:Math.random(),item:"YES",answer:!0},{id:Math.random(),item:"NO",answer:!1}]},5:{question:"Are entities with write access having a hard time deciding who should be in control of the data store?",fact:"If there are no trust issues over who runs the data store a traditional database should suffice.",choices:[{id:Math.random(),item:"YES",answer:!0},{id:Math.random(),item:"NO",answer:!1}]},6:{question:"Do you want a tamperproof log of all writes to the data store?",fact:"If you don't need to audit what happened and when it happened a database will suffice.",choices:[{id:Math.random(),item:"YES",answer:!0},{id:Math.random(),item:"NO",answer:!1}]}}}},[[11,2,1]]]);
//# sourceMappingURL=main.05457b0b.chunk.js.map