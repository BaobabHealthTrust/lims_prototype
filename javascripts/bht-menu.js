/**
 * Created by chimwemwe on 6/17/15.
 */
"use strict"

var BHTMenu = function () {

    var bMenuElements = {};

    var menus = document.getElementsByClassName("bht-menu");

    for (var i = 0; i < menus.length; i++) {

        menus[i].style.cursor = "pointer";

        menus[i].style.border = "1px solid rgba(255,255,255,0)";

        menus[i].onmouseover = function () {

            this.style.borderBottom = "1px solid #fff";

            bhtMenu.showPopup(this.id);

        }

        menus[i].onmouseout = function (e) {

            if (bhtMenu.checkCursor(e)) {

                bhtMenu.hidePopup();

            }

        }

    }

};

BHTMenu.prototype = {

    __$: function (id) {

        return document.getElementById(id);

    },

    setCurrentControl: function (obj) {

        this.bCurrentControl = obj;

    },

    getCurrentControl: function () {

        return this.bCurrentControl;

    },

    checkCtrl: function (obj) {
        var o = obj;
        var t = o.offsetTop;
        var l = o.offsetLeft + 1;
        var w = o.offsetWidth;
        var h = o.offsetHeight;

        while ((o ? (o.offsetParent != document.body) : false)) {
            o = o.offsetParent;
            t += (o ? o.offsetTop : 0);
            l += (o ? o.offsetLeft : 0);
        }
        return [w, h, t, l];
    },

    showPopup: function (id) {

        if (this.__$("popup")) {

            document.body.removeChild(this.__$("popup"));

        }

        if (this.getCurrentControl() && this.getCurrentControl().id != id) {

            this.getCurrentControl().style.border = "1px solid rgba(255,255,255,0)";

        }

        var pos = this.checkCtrl(this.__$(id));

        this.setCurrentControl(this.__$(id));

        var popup = document.createElement("div");
        popup.id = "popup";
        popup.style.boxShadow = "10px 10px 5px #888888";
        popup.style.border = "1px solid #3465a4";
        popup.style.width = "400px";
        popup.style.height = "400px";
        popup.style.position = "absolute";
        popup.style.top = (pos[1] + pos[2] + 10) + "px";
        popup.style.left = (pos[3] - (200 + (pos[0] / 2))) + "px";
        popup.style.backgroundColor = "#fff";
        popup.style.zIndex = 1200;

        popup.onmouseout = function (e) {

            if (bhtMenu.checkCursor(e)) {

                bhtMenu.hidePopup();

            }

        }

        document.body.appendChild(popup);

        // [w, h, t, l] #3465a4
        var arrow = document.createElement("div");
        arrow.style.width = 0;
        arrow.style.height = 0;
        arrow.style.borderLeft = "10px solid transparent";
        arrow.style.borderRight = "10px solid transparent";
        arrow.style.borderBottom = "10px solid #3465a4";
        arrow.style.position = "absolute";
        arrow.style.left = (265) + "px";
        arrow.style.top = (-10) + "px";
        arrow.style.zIndex = 1200;

        popup.appendChild(arrow);

        var table = document.createElement("table");
        table.width = "100%";
        table.border = "0";

        popup.appendChild(table);

        var tbody = document.createElement("tbody");

        table.appendChild(tbody);

        var tr1 = document.createElement("tr");

        tbody.appendChild(tr1);

        var td1_1 = document.createElement("td");
        td1_1.id = "bMenuHeader";

        td1_1.innerHTML = "&nbsp;";

        tr1.appendChild(td1_1);

        var tr2 = document.createElement("tr");

        tbody.appendChild(tr2);

        var td2_1 = document.createElement("td");
        td2_1.id = "bMenuBody";
        td2_1.style.borderTop = "1px #eee solid";
        td2_1.style.borderBottom = "1px #eee solid";

        td2_1.innerHTML = "&nbsp;";

        tr2.appendChild(td2_1);

        var tr3 = document.createElement("tr");

        tbody.appendChild(tr3);

        var td3_1 = document.createElement("td");
        td3_1.id = "bMenuFooter";

        td3_1.innerHTML = "&nbsp;";

        tr3.appendChild(td3_1);

        var content = document.createElement("div");
        content.id = "bContent";
        content.style.height = "320px";
        content.style.width = "100%";
        content.style.overflowY = "auto";
        content.style.overflowX = "hidden";
        content.style.textAlign = "center";
        content.style.padding = "0px";

        td2_1.appendChild(content);

        this.showMenu(id);

    },

    hidePopup: function () {

        if (this.__$("popup")) {

            document.body.removeChild(this.__$("popup"));

        }

        if (this.getCurrentControl()) {

            this.getCurrentControl().style.border = "1px solid rgba(255,255,255,0)";

        }

    },

    checkCursor: function (e) {

        var x = e.clientX;
        var y = e.clientY;

        if (this.__$("popup") && this.getCurrentControl()) {

            var pos = this.checkCtrl(this.__$("popup"));

            var parentPos = this.checkCtrl(this.getCurrentControl());

            // [w, h, t, l]
            if ((x > pos[3] && x < pos[0] + pos[3] && y > pos[2] && y < (pos[2] + pos[1])) || (x > parentPos[3] &&
                x < (parentPos[3] + parentPos[0]) && y > parentPos[2] && y < (parentPos[2] + parentPos[1] + 20))) {

                return false;

            }

        }

        return true;

    },

    /*
     Expects Menus Hash in this format:

     {
     "control id":{
     "footer[OPTIONAL]":"BUILDER CODE",
     "header[OPTIONAL]":"BUILDER CODE",
     "content":[
     {
     "label":"Link label",
     "icon":"icon image path",
     "link":"link to target path"
     }
     ],
     "submenus":{
        "sub menu id":[
             {
             "label":"Link label",
             "icon":"icon image path",
             "link":"link to target path"
             }
        ]
     }
     }
     }

     */
    setMenus: function (menus) {

        this.bMenuElements = menus;

    },

    /*
     Return content for specific selected control id
     */
    getMenu: function (id) {

        return (this.bMenuElements ? this.bMenuElements[id] : null);

    },

    showSubMenu: function(parent, id){

        if(this.getMenu(parent) && this.__$("bContent")){

            this.__$("bContent").innerHTML = "";

            var elements = this.getMenu(parent)["submenus"][id];

            for(var i = 0; i < elements.length; i++){

                var button = document.createElement("div");
                button.style.width = "90px";
                button.style.height = "90px";
                button.style.display = "inline-block";
                button.style.border = "1px solid rgba(128,128,128,0)";
                button.style.margin = "2px";
                button.style.cursor = "pointer";
                button.style.fontSize = "11px";
                button.setAttribute("action",
                    (elements[i]["link"] ? (elements[i]["link"]).replace(/showSubMenu/g, "bhtMenu.showSubMenu") : ""));

                button.setAttribute("title", (elements[i]["tooltip"] ? (elements[i]["tooltip"]) :
                    (elements[i]["label"] ? elements[i]["label"] : "")));

                button.onclick = function(){

                    if(this.getAttribute("action") != null) {

                        eval(this.getAttribute("action"));

                    }

                }

                button.onmouseover = function(){

                    this.style.border = "1px solid #f3900f";

                }

                button.onmouseout = function(){

                    this.style.border = "1px solid rgba(128,128,128,0)";

                }

                this.__$("bContent").appendChild(button);

                var bTable = document.createElement("table");
                bTable.style.width = "100%";
                bTable.style.marginTop = "5px";
                bTable.style.marginBottom = "5px";

                button.appendChild(bTable);

                var bTbody = document.createElement("tbody");

                bTable.appendChild(bTbody);

                var bTr1 = document.createElement("tr");

                bTbody.appendChild(bTr1);

                var bTd1 = document.createElement("td");
                bTd1.style.textAlign = "center";

                bTr1.appendChild(bTd1);

                var img = document.createElement("img");
                img.setAttribute("height", 40);
                img.setAttribute("src", (elements[i]["icon"] ? elements[i]["icon"] : "/assets/folder.png"));

                bTd1.appendChild(img);

                var bTr2 = document.createElement("tr");

                bTbody.appendChild(bTr2);

                var bTd2 = document.createElement("td");
                bTd2.style.textAlign = "center";

                bTd2.innerHTML = (elements[i]["label"] ? elements[i]["label"] : "&nbsp;");

                bTr2.appendChild(bTd2);


            }

        }

        if(this.__$("bMenuFooter")){

            this.__$("bMenuFooter").innerHTML = "";

            this.__$("bMenuFooter").style.textAlign = "right";

            var back = document.createElement("img");
            back.setAttribute("height", 20);
            back.setAttribute("src", "data:image/png;base64,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");
            back.style.cursor = "pointer";
            back.style.marginRight = "10px";
            back.style.marginTop = "-2px";
            back.setAttribute("tag", parent);

            back.onclick = function(){

                bhtMenu.showMenu(this.getAttribute("tag"));

            }

            this.__$("bMenuFooter").appendChild(back);

        }

    },

    showMenu: function(id){

        if(this.getMenu(id) && this.__$("bContent")){

            this.__$("bContent").innerHTML = "";

            var elements = this.getMenu(id)["content"];

            for(var i = 0; i < elements.length; i++){

                var button = document.createElement("div");

                if((elements[i]["label"] ? elements[i]["label"] : "") != "") {

                    if((elements[i]["label"] ? elements[i]["label"] : "").match(/>([^<]+)</)){

                        button.id = (elements[i]["label"] ? elements[i]["label"] : "").match(/>([^<]+)</)[1].replace(/\s/g, "_").toLowerCase();

                    } else {

                        button.id = (elements[i]["label"] ? elements[i]["label"] : "").replace(/\s/g, "_").toLowerCase();

                    }

                }

                button.style.width = "90px";
                button.style.height = "90px";
                button.style.display = "inline-block";
                button.style.border = "1px solid rgba(128,128,128,0)";
                button.style.margin = "2px";
                button.style.cursor = "pointer";
                button.style.fontSize = "11px";
                button.setAttribute("action",
                    (elements[i]["link"] ? (elements[i]["link"]).replace(/showSubMenu/g, "bhtMenu.showSubMenu") : ""));

                button.setAttribute("title", (elements[i]["tooltip"] ? (elements[i]["tooltip"]) :
                    (elements[i]["label"] ? elements[i]["label"] : "")));

                button.onclick = function(){

                    if(this.getAttribute("action") != null) {

                        eval(this.getAttribute("action"));

                    }

                }

                button.onmouseover = function(){

                    this.style.border = "1px solid #f3900f";

                }

                button.onmouseout = function(){

                    this.style.border = "1px solid rgba(128,128,128,0)";

                }

                this.__$("bContent").appendChild(button);

                var bTable = document.createElement("table");
                bTable.style.width = "100%";
                bTable.style.marginTop = "5px";
                bTable.style.marginBottom = "5px";

                button.appendChild(bTable);

                var bTbody = document.createElement("tbody");

                bTable.appendChild(bTbody);

                var bTr1 = document.createElement("tr");

                bTbody.appendChild(bTr1);

                var bTd1 = document.createElement("td");
                bTd1.style.textAlign = "center";

                bTr1.appendChild(bTd1);

                var img = document.createElement("img");
                img.setAttribute("height", 40);
                img.setAttribute("src", (elements[i]["icon"] ? elements[i]["icon"] : "/assets/folder.png"));

                bTd1.appendChild(img);

                var bTr2 = document.createElement("tr");

                bTbody.appendChild(bTr2);

                var bTd2 = document.createElement("td");
                bTd2.style.textAlign = "center";

                bTd2.innerHTML = (elements[i]["label"] ? elements[i]["label"] : "&nbsp;");

                bTr2.appendChild(bTd2);


            }

        }

        if(this.__$("bMenuFooter")) {

            this.__$("bMenuFooter").innerHTML = "";

        }
    }

}

var bhtMenu = new BHTMenu();

var bhtMenuElements;

var bTimerHandle = setInterval(function () {

    if (bhtMenuElements) {

        clearInterval(bTimerHandle);

        bhtMenu.setMenus(bhtMenuElements);

    }

}, 100);