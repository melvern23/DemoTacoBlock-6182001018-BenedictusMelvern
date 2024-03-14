System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GroupObstacle.ts","./Player.ts"],(function(e){var t,i,a,s,l,r,n,o,c,p,h,u,g,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,a=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){l=e.cclegacy,r=e._decorator,n=e.Node,o=e.Prefab,c=e.instantiate,p=e.randomRangeInt,h=e.Animation,u=e.Component},function(e){g=e.GroupObstacle},function(e){b=e.Player}],execute:function(){var v,y,f,O,d,m,A,C,H;l._RF.push({},"e829b0ypwZDx6ptDJsWlp/I","GameManager",void 0);var P=r.ccclass,x=r.property;e("GameManager",(v=P("GameManager"),y=x({type:n}),f=x({type:n}),O=x({type:o}),v((A=t((m=function(e){function t(){for(var t,i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return t=e.call.apply(e,[this].concat(l))||this,a(t,"ground",A,s(t)),a(t,"playerNode",C,s(t)),a(t,"groupObstacle",H,s(t)),t.baseY=0,t.listObstacleActive=[],t.player=void 0,t.poolObstacle=[],t}i(t,e);var l=t.prototype;return l.start=function(){var e=this;this.baseY=this.ground.getPosition().y+40,this.player=this.playerNode.getComponent(b),setInterval((function(){e.generateObstacle()}),5e3)},l.getObstacle=function(){return c(this.groupObstacle)},l.generateObstacle=function(){var e=this.getObstacle();e.setParent(this.node),e.getComponent(g).setHeight(p(2,4),this.baseY,this.poolObstacle),this.listObstacleActive.push(e)},l.update=function(e){for(var t=0;t<this.listObstacleActive.length;t++){var i=this.listObstacleActive[t],a=i.getComponent(g);if(i.position.x+38+43<=this.playerNode.position.x&&0==a.isHaveCutHeight()){a.setHaveCutHeight(!0);var s=a.getHeight();this.player.cutHeight(s)}if(i.position.x<=this.playerNode.position.x&&0==a.isHaveCheckCollision()){var l=a.getHeight();a.setHaveCheckCollision(!0),this.player.getHeight()>=l?this.player.cutPlayer(l,i):(this.player.playerAnimation=this.player.getComponent(h),this.player.playerAnimation.play(),this.player.gameOver())}i.position.x<=-192&&(this.listObstacleActive[t].active=!1)}for(var r=this.listObstacleActive.length-1;r>=0;r--)if(console.log("cek: j: "+r+" "+this.listObstacleActive[r].active),0==this.listObstacleActive[r].active){var n=this.listObstacleActive[r];this.listObstacleActive.splice(r,1);for(var o=0;o<n.children.length;o++)(n.children[o].name="Obstacle")&&this.poolObstacle.push(n.children[o]);n.removeAllChildren()}},t}(u)).prototype,"ground",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=t(m.prototype,"playerNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=t(m.prototype,"groupObstacle",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=m))||d));l._RF.pop()}}}));

System.register("chunks:///_virtual/GroupObstacle.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,o,r,a,s,c,h,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,s=e.Prefab,c=e.instantiate,h=e.Vec3,l=e.Component}],execute:function(){var u,p,f,v,g;r._RF.push({},"e3dc1/3ga9A3KoN1F69wUIu","GroupObstacle",void 0);var C=a.ccclass,b=a.property;e("GroupObstacle",(u=C("GroupObstacle"),p=b({type:s}),u((g=t((v=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,n(t,"prefabObstacle",g,o(t)),t.height=void 0,t.haveCheckCollision=!1,t.haveCutHeight=!1,t}i(t,e);var r=t.prototype;return r.setHeight=function(e,t,i){this.height=e;for(var n=0;n<e;n++){var o=void 0;(o=(i.length,c(this.prefabObstacle))).setParent(this.node),o.setPosition(new h(0,49*n,0))}this.node.setPosition(new h(192,t,0))},r.isHaveCutHeight=function(){return this.haveCutHeight},r.setHaveCutHeight=function(e){this.haveCutHeight=e},r.isHaveCheckCollision=function(){return this.haveCheckCollision},r.getHeight=function(){return this.height},r.setHaveCheckCollision=function(e){this.haveCheckCollision=e},r.start=function(){},r.update=function(e){this.node.translate(new h(-250*e,0,0))},t}(l)).prototype,"prefabObstacle",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=v))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./GameManager.ts","./GroupObstacle.ts","./Player.ts"],(function(){return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Player.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,o,r,a,s,l,h,c,u,y,p,g,v,f,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.CCFloat,l=t.Node,h=t.Prefab,c=t.Label,u=t.Button,y=t.input,p=t.Input,g=t.instantiate,v=t.Vec3,f=t.director,d=t.Component}],execute:function(){var b,B,k,P,m,w,T,x,z,Y,C,_,H;r._RF.push({},"3503fGiyHZFV5xUcddJY6ZB","Player",void 0);var F=a.ccclass,S=a.property;t("Player",(b=F("Player"),B=S({type:s}),k=S({type:l}),P=S({type:h}),m=S({type:c}),w=S({type:u}),b((z=e((x=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,n(e,"gravity",z,o(e)),n(e,"ground",Y,o(e)),n(e,"prefabBlock",C,o(e)),n(e,"gameoverText",_,o(e)),n(e,"retryButton",H,o(e)),e.vy=0,e.baseY=0,e.hBlock=49,e.height=0,e.playerAnimation=void 0,e.listBlock=[],e}i(e,t);var r=e.prototype;return r.start=function(){this.baseY=this.ground.getPosition().y+40,y.on(p.EventType.TOUCH_START,this.spawnBlock,this),this.gameoverText.node.active=!1,this.retryButton.node.active=!1},r.spawnBlock=function(){var t=g(this.prefabBlock);t.setParent(this.node.parent),t.setPosition(new v(0,this.baseY+this.height*this.hBlock,0)),this.height++,this.listBlock.push(t)},r.cutPlayer=function(t,e){for(var i=0;i<t;i++){this.listBlock.shift().setParent(e,!0)}},r.cutHeight=function(t){this.height-=t},r.update=function(t){this.vy-=this.gravity*t,this.node.translate(new v(0,this.vy*t,0));var e=this.node.getPosition();e.y<this.baseY+this.height*this.hBlock&&(e.y=this.baseY+this.height*this.hBlock);for(var i=0,n=this.listBlock.length-1;n>=0;n--){var o=this.listBlock[n],r=this.baseY+(this.height-1-i)*this.hBlock;o.position.y>r&&(o.translate(new v(0,this.vy*t,0)),o.position.y<r&&o.setPosition(new v(0,r,0))),i++}this.node.setPosition(e)},r.getHeight=function(){return this.height},r.gameOver=function(){this.gameoverText.node.active=!0,this.retryButton.node.active=!0,this.retryButton.node.on(l.EventType.MOUSE_UP,this.retryClicked,this)},r.retryClicked=function(){f.loadScene("scene1"),this.gameoverText.node.active=!1,this.retryButton.node.active=!1},e}(d)).prototype,"gravity",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=e(x.prototype,"ground",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=e(x.prototype,"prefabBlock",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=e(x.prototype,"gameoverText",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=e(x.prototype,"retryButton",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=x))||T));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});