(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=(n(16),n(17),n(18),n(2)),l=n.n(s),c=n(8),u=n(5),d=n(6),h=n(7),m=n(1),p=n(10),y=n(9);n(20);var v,f,g,b,k,S="#6EA4BF",E=function(e){Object(p.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={array:[]},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(m.a)(a)),a.onSizeSliderChange=a.onSizeSliderChange.bind(Object(m.a)(a)),a.onSpeedSliderChange=a.onSpeedSliderChange.bind(Object(m.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowDimensions),this.updateWindowDimensions(),v=100,k=100,f=Math.floor(g/(2*v)),this.resetArray()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){g=.9*window.innerWidth,b=.9*window.innerHeight}},{key:"displayAnimations",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r,o,i,s,u,d,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.length,a=document.getElementsByClassName("array-bar"),r=0;case 3:if(!(r<n)){e.next=32;break}return o=Object(c.a)(t[r],2),i=o[0],s=o[1],u=a[i].style,d=a[s].style,console.log(a[i].style.height),console.log(a[s].style.height),u.backgroundColor="#383683",d.backgroundColor="#383683",e.next=13,w(k);case 13:if(!(parseInt(a[i].style.height)>parseInt(a[s].style.height))){e.next=23;break}return h=a[s].style.height,a[s].style.height=a[i].style.height,a[i].style.height=h,u.backgroundColor="#97DB4F",d.backgroundColor="#97DB4F",e.next=21,w(k);case 21:e.next=27;break;case 23:return u.backgroundColor="#D64933",d.backgroundColor="#D64933",e.next=27,w(k);case 27:u.backgroundColor="#6EA4BF",d.backgroundColor="#6EA4BF";case 29:r++,e.next=3;break;case 32:return S="#97DB4F",this.forceUpdate(),e.next=36,w(1e3);case 36:S="#6EA4BF",this.forceUpdate();case 38:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"BubbleSort",value:function(){var e=function(e){for(var t,n=[],a=e.length;a>0;a--){t=0;for(var r=1;r<a;r++){var o=e[r-1],i=e[r];n.push([r-1,r]),o>i&&(e[r-1]=i,e[r]=o,t=r)}if(!t)break;a=t+1}return n}(this.state.array);this.displayAnimations(e)}},{key:"MergeSort",value:function(){var e=(this.state.array,[]);this.displayAnimations(e)}},{key:"HeapSort",value:function(){var e=(this.state.array,[]);this.displayAnimations(e)}},{key:"QuickSort",value:function(){var e=(this.state.array,[]);this.displayAnimations(e)}},{key:"InsertionSort",value:function(){var e=(this.state.array,[]);this.displayAnimations(e)}},{key:"resetArray",value:function(){for(var e,t,n=[],a=0;a<v;a++)n.push((e=10,t=b,Math.floor(Math.random()*(t-e+1)+e)));this.setState({array:n})}},{key:"onSizeSliderChange",value:function(e){v=e.target.value,f=Math.floor(g/(2*v)),this.resetArray()}},{key:"onSpeedSliderChange",value:function(e){k=1e3-e.target.value}},{key:"render",value:function(){var e=this,t=this.state.array;return r.a.createElement("div",{className:"total-container"},r.a.createElement("div",{className:"array-container"},t.map((function(e,t){return r.a.createElement("div",{className:"array-bar",key:t,style:{backgroundColor:S,height:"".concat(e,"px"),width:"".concat(f,"px")}})}))),r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.resetArray()}},"Generate New Array"),r.a.createElement("button",{onClick:function(){return e.MergeSort()}},"Merge Sort"),r.a.createElement("button",{onClick:function(){return e.BubbleSort()}},"Bubble Sort"),r.a.createElement("button",{onClick:function(){return e.HeapSort()}},"Heap Sort"),r.a.createElement("button",{onClick:function(){return e.QuickSort()}},"Quick Sort"),r.a.createElement("button",{onClick:function(){return e.InsertionSort()}},"Insertion Sort")),r.a.createElement("div",null,r.a.createElement("label",null,"Size \xa0"),r.a.createElement("input",{class:"size-slider",type:"range",min:"4",max:"300",value:this.state.value,onChange:this.onSizeSliderChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Speed"),r.a.createElement("input",{class:"size-slider",type:"range",min:"1",max:"1000",value:this.state.value,onChange:this.onSpeedSliderChange}))))}}]),n}(r.a.Component);function w(e){return new Promise((function(t){return setTimeout(t,e)}))}var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.7e07fff9.chunk.js.map