qx.$$packageData['8192']={"locales":{},"resources":{"qx/icon/Tango/32/status/dialog-information.png":[32,32,"png","qx"]},"translations":{"en":{}}};
qx.Part.$$notifyLoad("8192", function() {
(function(){var a="widgetbrowser.pages.Basic",b="Label",c="icon/32/status/dialog-information.png",d="middle",e="Image",f="Atom";qx.Class.define(a,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);var g=this.__yN=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));this.add(g,{top:0});this.initWidgets();},members:{__yN:null,initWidgets:function(){var h=this._widgets;var k=new qx.ui.basic.Label(b).set({alignY:d});h.push(k);this.__yN.add(k);var i=new qx.ui.basic.Atom(e,c);h.push(i);this.__yN.add(i);var j=new qx.ui.basic.Atom(f,c);h.push(j);this.__yN.add(j);}}});})();
});