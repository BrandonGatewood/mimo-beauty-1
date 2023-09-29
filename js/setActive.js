window.onload = function() {
    const currentPage = document.getElementById('body');
    var name = currentPage.className;
    console.log(name);

    if(name == 'homePage') {
        var home = document.getElementById('home');
        if(home) {
            home.classList.add("active");
        }
        else
            console.log("empty");
    }
    else if(name == 'faqPage') {
        var faq = document.getElementById('faq');
        if(faq) {
            faq.classList.add("active");
        }
        else
            console.log("empty");
    }
    else if(name == "cosmeticTattooPage") {
        var services = document.getElementById('services');
        if(services) {
            services.classList.add("active");
        }
        else
            console.log("empty");
    }
    else if(name == "eyelashExtensionPage") {
        var services = document.getElementById('services');
        if(services) {
            services.classList.add("active");
        }
        else
            console.log("empty");
    }
    else if(name == "iplPage") {
        var services = document.getElementById('services');
        if(services) {
            services.classList.add("active");
        }
        else
            console.log("empty");
    }
    else if(name == "otherServicesPage") {
        var services = document.getElementById('services');
        if(services) {
            services.classList.add("active");
        }
        else
            console.log("empty");
    }
};
