/**
 * Created by chimwemwe on 10/20/15.
 */

var selectedSection;

function loadSectionMenu(section) {

    clearInterval(bTimerHandle);

    bhtMenuElements = {
        "tasks": {
            "content": [],
            "submenus": {
                "files": []
            }
        },
        "settings": {
            "content": [],
            "submenus": {
                "downloads": []
            }
        }
    }

    if(selectedSection) {

        selectedSection.removeAttribute("class");

    }

    switch(section) {

        case "microbiology":
            loadMicrobiologyMenu();
            break;

        case "haematology":
            loadHaematologyMenu();
            break;

        case "bloodbank":
            loadBloodBankMenu();
            break;

        case "pcr":
            loadPCRMenu();
            break;

        case "serology":
            loadSerologyMenu();
            break;

        case "biochemistry":
            loadBiochemistryMenu();
            break;

        case "parasitology":
            loadParasitologyMenu();
            break;

    }

    bTimerHandle = setInterval(function () {

        if (bhtMenuElements) {

            clearTimeout(bTimerHandle);

            bhtMenu.setMenus(bhtMenuElements);

        }

    }, 100);

}

function navigateTo(path, category, func, params) {

    if (bhtMenu) {

        bhtMenu.hidePopup();

    }

    document.getElementById('iframe').contentWindow.location = path;

    if (func && params) {

        setTimeout(function () {

            callFunction(func, params);

        }, 200);

    }

}

function loadMicrobiologyMenu() {

    if(__$("sectionMicrobiology")) {

        selectedSection = __$("sectionMicrobiology");

        selectedSection.className = "selectedSection";

    }

    if(__$("section")){

        __$("section").innerHTML = "Microbiology";

    }

    if(__$("iframe")) {

        __$("iframe").setAttribute("src", "views/microbiology/home.html");

    }

    var content = {
        "label": "<span style='font-size: 11px;'>Ascitic fluid</span>",
        "icon": "images/ascitic_fluid.png",
        "link": "navigateTo('views/microbiology/ascitic_fluid.html', 'Ascitic fluid')",
        "tooltip": "Ascitic fluid"
    }

    bhtMenuElements["tasks"]["content"].push(content);

    var content = {
        "label": "<span style='font-size: 11px;'>Blood culture</span>",
        "icon": "images/blood_culture.png",
        "link": "navigateTo('views/microbiology/blood_culture.html', 'Blood culture')",
        "tooltip": "Blood culture"
    }

    bhtMenuElements["tasks"]["content"].push(content);

    var content = {
        "label": "<span style='font-size: 11px;'>CSF</span>",
        "icon": "images/csf.png",
        "link": "navigateTo('views/microbiology/csf.html', 'CSF')",
        "tooltip": "CSF"
    }

    bhtMenuElements["tasks"]["content"].push(content);

    var content = {
        "label": "<span style='font-size: 11px;'>Peripheral blood smear</span>",
        "icon": "images/peripheral_blood_smear.png",
        "link": "navigateTo('views/microbiology/peripheral_blood_smear.html', 'Peripheral blood smear')",
        "tooltip": "Peripheral blood smear"
    }

    bhtMenuElements["tasks"]["content"].push(content);

    var content = {
        "label": "<span style='font-size: 11px;'>Pleural fluid</span>",
        "icon": "images/pleural_fluid.png",
        "link": "navigateTo('views/microbiology/pleural_fluid.html', 'Pleural fluid')",
        "tooltip": "Pleural fluid"
    }

    bhtMenuElements["tasks"]["content"].push(content);

    var content = {
        "label": "<span style='font-size: 11px;'>Pus</span>",
        "icon": "images/pus.png",
        "link": "navigateTo('views/microbiology/pus.html', 'Pus')",
        "tooltip": "Pus"
    }

    bhtMenuElements["tasks"]["content"].push(content);

    var content = {
        "label": "<span style='font-size: 11px;'>Sputum Tb microscopy</span>",
        "icon": "images/sputum_tb_microscopy.png",
        "link": "navigateTo('views/microbiology/sputum_tb_microscopy.html', 'Sputum Tb microscopy')",
        "tooltip": "Sputum Tb microscopy"
    }

    bhtMenuElements["tasks"]["content"].push(content);

    var content = {
        "label": "<span style='font-size: 11px;'>Swabs</span>",
        "icon": "images/swabs.png",
        "link": "navigateTo('views/microbiology/swabs.html', 'Swabs')",
        "tooltip": "Swabs"
    }

    bhtMenuElements["tasks"]["content"].push(content);

    var content = {
        "label": "<span style='font-size: 11px;'>TB Tests</span>",
        "icon": "images/tb_tests.png",
        "link": "navigateTo('views/microbiology/tb_tests.html', 'TB Tests')",
        "tooltip": "TB Tests"
    }

    bhtMenuElements["tasks"]["content"].push(content);

    var content = {
        "label": "<span style='font-size: 11px;'>Urine culture</span>",
        "icon": "images/urine_culture.png",
        "link": "navigateTo('views/microbiology/urine_culture.html', 'Urine culture')",
        "tooltip": "Urine culture"
    }

    bhtMenuElements["tasks"]["content"].push(content);

    var content = {
        "label": "<span style='font-size: 11px;'>Xpert MTB/RIF</span>",
        "icon": "images/xpert_mtb_rif.png",
        "link": "navigateTo('views/microbiology/xpert_mtb_rif.html', 'Xpert MTB/RIF')",
        "tooltip": "Xpert MTB/RIF"
    }

    bhtMenuElements["tasks"]["content"].push(content);

}

function loadParasitologyMenu() {

    if (__$("sectionParasitology")) {

        selectedSection = __$("sectionParasitology");

        selectedSection.className = "selectedSection";

    }

    if (__$("section")) {

        __$("section").innerHTML = "Parasitology";

    }

    if (__$("iframe")) {

        __$("iframe").setAttribute("src", "views/parasitology/home.html");

    }

}

function loadHaematologyMenu() {

    if (__$("sectionHaematology")) {

        selectedSection = __$("sectionHaematology");

        selectedSection.className = "selectedSection";

    }

    if (__$("section")) {

        __$("section").innerHTML = "Haematology";

    }

    if (__$("iframe")) {

        __$("iframe").setAttribute("src", "views/haematology/home.html");

    }

}

function loadBloodBankMenu() {

    if (__$("sectionBloodBank")) {

        selectedSection = __$("sectionBloodBank");

        selectedSection.className = "selectedSection";

    }

    if (__$("section")) {

        __$("section").innerHTML = "Blood bank";

    }

    if (__$("iframe")) {

        __$("iframe").setAttribute("src", "views/bloodbank/home.html");

    }

}

function loadPCRMenu() {

    if (__$("sectionPCR")) {

        selectedSection = __$("sectionPCR");

        selectedSection.className = "selectedSection";

    }

    if (__$("section")) {

        __$("section").innerHTML = "PCR";

    }

    if (__$("iframe")) {

        __$("iframe").setAttribute("src", "views/pcr/home.html");

    }

}

function loadSerologyMenu() {

    if (__$("sectionSerology")) {

        selectedSection = __$("sectionSerology");

        selectedSection.className = "selectedSection";

    }

    if (__$("section")) {

        __$("section").innerHTML = "Serology";

    }

    if (__$("iframe")) {

        __$("iframe").setAttribute("src", "views/serology/home.html");

    }

}

function loadBiochemistryMenu() {

    if (__$("sectionBiochemistry")) {

        selectedSection = __$("sectionBiochemistry");

        selectedSection.className = "selectedSection";

    }

    if (__$("section")) {

        __$("section").innerHTML = "Biochemistry";

    }

    if (__$("iframe")) {

        __$("iframe").setAttribute("src", "views/biochemistry/home.html");

    }

}