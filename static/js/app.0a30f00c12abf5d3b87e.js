webpackJsonp([1],{"/9Nk":function(t,o){},NHnr:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=s("7+uW"),e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"left-nav"},[s("ul",[s("li",[s("i",{staticClass:"icon iconfont icon-goumai"}),t._v(" "),s("div",[t._v("收银")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),s("div",[t._v("店铺")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),s("div",[t._v("商品")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),s("div",[t._v("会员")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-zuanshi"}),t._v(" "),s("div",[t._v("统计")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-gongnengjianyi"}),t._v(" "),s("div",[t._v("设置")])])])])}]};var n={name:"app",components:{leftNav:s("VU/8")({name:"leftNav"},e,!1,function(t){s("/9Nk")},null,null).exports}},i={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("left-nav"),this._v(" "),o("div",{staticClass:"main"},[o("router-view")],1)],1)},staticRenderFns:[]};var l,c=s("VU/8")(n,i,!1,function(t){s("t39c")},null,null).exports,d=s("/ocq"),r=s("bOdI"),u=s.n(r),v=s("mtWM"),p=s.n(v),f=(l={name:"Pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalMoney:0,totalCount:0}},created:function(){var t=this;p.a.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods").then(function(o){console.log(o),t.type0Goods=respose.data[0],t.type1Goods=respose.data[1],t.type2Goods=respose.data[2],t.type3Goods=respose.data[3]}).catch(function(t){console.log(t),alert("网络错误，不能访问")})}},u()(l,"created",function(){var t=this;p.a.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods").then(function(o){t.oftenGoods=o.data}).catch(function(t){alert("网络错误，不能访问")}),p.a.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods").then(function(o){t.type0Goods=o.data[0],t.type1Goods=o.data[1],t.type2Goods=o.data[2],t.type3Goods=o.data[3]}).catch(function(t){alert("网络错误，不能访问")})}),u()(l,"mounted",function(){var t=document.body.clientHeight;console.log(t),document.getElementById("order-list").style.height=t+"px"}),u()(l,"methods",{addOrderList:function(t){this.totalMoney=0,this.totalCount=0;for(var o=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(o=!0);if(o){this.tableData.filter(function(o){return o.goodsId==t.goodsId})[0].count++}else{var a={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(a)}this.getAllMoney()},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(o){return o.goodsId!=t.goodsId}),this.getAllMoney()},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(o){t.totalCount+=o.count,t.totalMoney=t.totalMoney+o.price*o.count})},checkout:function(){0!=this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"结账成功，感谢你又为店里出了一份力！",type:"success"})):this.$message.error("不能空结。老板了解你急切的心情！")}}),l),_={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"pos"},[s("el-row",[s("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[s("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),s("el-table-column",{attrs:{prop:"count",label:"数量",width:"50"}}),t._v(" "),s("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(o){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.delSingleGoods(o.row)}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.addOrderList(o.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),s("div",{staticClass:"totalDiv"},[s("small",[t._v("数量：")]),t._v(t._s(t.totalCount)+"         "),s("small",[t._v("金额：")]),t._v(t._s(t.totalMoney)+"元\n          ")]),t._v(" "),s("div",{staticClass:"div-btn"},[s("el-button",{attrs:{type:"warning",size:"small"}},[t._v("挂单")]),t._v(" "),s("el-button",{attrs:{type:"danger",size:"small"},on:{click:t.delAllGoods}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"success",size:"small"},on:{click:t.checkout}},[t._v("结账")])],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"挂单"}},[t._v("\n          挂单\n        ")]),t._v(" "),s("el-tab-pane",{attrs:{label:"外卖"}},[t._v("\n          外卖\n        ")])],1)],1),t._v(" "),s("el-col",{attrs:{span:17}},[s("div",{staticClass:"often-goods"},[s("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),s("div",{staticClass:"often-goods-list"},[s("ul",t._l(t.oftenGoods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"o-price"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"小食"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])])],1)],1)])],1)],1)},staticRenderFns:[]};var m=s("VU/8")(f,_,!1,function(t){s("VUKv")},"data-v-6a439b34",null).exports;a.default.use(d.a);var h=new d.a({routes:[{path:"/",name:"Pos",component:m}]}),g=s("zL8q"),b=s.n(g);s("tvR6");a.default.config.productionTip=!1,a.default.use(b.a),new a.default({el:"#app",router:h,components:{App:c},template:"<App/>"})},VUKv:function(t,o){},t39c:function(t,o){},tvR6:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.0a30f00c12abf5d3b87e.js.map