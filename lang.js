function applyLang(lang){

    localStorage.setItem("lang", lang);

    // تقدر تضيف ترجمة هنا لكل الصفحات
}

window.onload = function(){
    let lang = localStorage.getItem("lang") || "ar";
    applyLang(lang);
}