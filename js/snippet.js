unblu = {APIKEY: "MZsy5sFESYqU7MawXZgR_w", SERVER: "http://loadtests.unblu-test.com"};
(function() {
	unblu.c = [];
	unblu.registerApiConsumer = function(callback, apiNames) {
		unblu.c.push({a: apiNames, c: callback});
	}
	unblu.setLocale = function(locale) {
		unblu.l = locale;
	}
	function h(a, b, c) {
		if (a.addEventListener) a.addEventListener(b, c, false);
		else if (a.attachEvent) a.attachEvent("on" + b, c, true);
	}
	h(window, "DOMContentLoaded", function() {window["x-unblu-tmp-dom-ready"] = true;}, false);
	h(window, "load", function() {window["x-unblu-tmp-window-alive"] = true;});
	if (!window["x-unblu-tmp-window-name"]) window["x-unblu-tmp-window-name"]=window.name;
	var q = document.getElementsByTagName("script")[0];
	if (q) {
		var g = document.createElement("script");
		g.setAttribute("src", unblu.SERVER + "/unblu/starter.js");
		g.setAttribute("type", "text/javascript");
		g.setAttribute("defer","defer");
		q.parentNode.appendChild(g);
		h(g, "load", function() {});
		h(g, "error", function() {});
	}
})();
