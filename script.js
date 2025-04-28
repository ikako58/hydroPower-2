// script.js

// --- Language Translation ---
const translations = {
  en: {
    title: "Hydropower Station",
    nav_about: "About Us", nav_services: "Services", nav_news: "News", nav_resources: "Resources",
    landing_heading: "Innovators building a\nsustainable future",
    about_title: "About Us", about_description: "At Power Station, we are committed to revolutionizing the energy landscape\nwith innovative sustainable solutions.", about_link: "For more info",
    services_title: "Services",
    service1_title: "Electricity Generation", service1_text: "We provide clean, renewable electricity with low operational costs through hydropower stations. Reliable and efficient in regions with steady water flow.",
    service2_title: "Water Supply Management", service2_text: "Efficiently managing water supplies to support agriculture, industry, and community needs, ensuring sustainable usage for the future.",
    service3_title: "Flood Control", service3_text: "Controlling and managing floods through well-designed dam systems, protecting communities and promoting safety during heavy rainfall seasons.",
    news_title: "News",
    news1_text: "Hydropower expansion project kicks off in the northern region to boost clean energy production.",
    news2_text: "Major river cleanup effort enhances environmental safety around power stations.",
    news3_text: "New innovations in turbine technology improve energy efficiency by 20%.",
    news4_text: "Government partnership announced to develop new renewable energy projects nationwide.",
    resources_title: "Resources",
    resource1_title: "Energy Reports", resource1_link: "View Reports",
    resource2_title: "Case Studies", resource2_link: "Explore Cases",
    resource3_title: "Technology Updates", resource3_link: "Latest Updates",
    footer_logo: "PowerStation", footer_slogan: "Innovating for a better future.",
    footer_links_title: "Quick Links", footer_contact_title: "Contact", footer_bottom: "© 2025 PowerStation. All Rights Reserved."
  },
  ka: {
    title: "ჰიდროელექტროსადგური",
    nav_about: "ჩვენს შესახებ", nav_services: "სერვისები", nav_news: "სიახლეები", nav_resources: "რესურსები",
    landing_heading: "ინოვატორები, რომლებიც ქმნიან\nმდგრად მომავალს",
    about_title: "ჩვენს შესახებ", about_description: "Power Station-ის მისიაა ენერგეტიკის ლანდშაფტის რევოლუცია\nინოვაციური და მდგრადი გადაწყვეტილებებით.", about_link: "დეტალურად",
    services_title: "სერვისები",
    service1_title: "ელექტროენერგიის დაწარმოება", service1_text: "ჩვენ ვაწვდით სუფთა, განახლებად ელექტროენერგიას დაბალი საოპერაციო ხარჯებით, ჰიდროელექტროსადგურების საშუალებით. სანდო და ეფექტურია წყლის სტაბილური ნაკადის მქონე რეგიონებში.",
    service2_title: "წყლის მიწოდების მართვა", service2_text: "წყლის რესურსების ეფექტური მართვა სოფლის მეურნეობის, ინდუსტრიისა და საზოგადოების საჭიროებებისთვის, მდგრადი გამოყენების უზრუნველსაყოფად.",
    service3_title: "წყალდიდობის კონტროლი", service3_text: "დამაკმაყოფილებელი წყალმომარაგების სისტემებით წყალდიდობის მართვა, რაც იცავს საზოგადოებას და ზრდის უსაფრთხოებას წვიმიან სეზონებში.",
    news_title: "სიახლეები",
    news1_text: "ჰიდროელექტროსადგურის გაფართოების პროექტი დაიწყო ჩრდილოეთ რეგიონში, სუფთა ენერგიის წარმოების გასაზრდელად.",
    news2_text: "მთავარი მდინარის გაწმენდითი სამუშაოები აუმჯობესებს ეკოლოგიურ უსაფრთხოებას ელექტროსადგურების გარშემო.",
    news3_text: "ტურბინის ტექნოლოგიაში ახალი ინოვაციები ზრდის ენერგოეფექტურობას 20%-ით.",
    news4_text: "გამოცხადდა სამთავრობო პარტნიორობა განახლებადი ენერგიის ახალი პროექტების განვითარების მიზნით.",
    resources_title: "რესურსები",
    resource1_title: "ენერგიის ანგარიშები", resource1_link: "ანგარიშების ნახვა",
    resource2_title: "ქეისების კვლევა", resource2_link: "ქეისების გამოკვლევა",
    resource3_title: "ტექნოლოგიური სიახლეები", resource3_link: "ბოლო განახლებები",
    footer_logo: "PowerStation", footer_slogan: "ინოვაცია უკეთესი მომავლისთვის.",
    footer_links_title: "სწრაფი ბმულები", footer_contact_title: "კონტაქტი", footer_bottom: "© 2025 PowerStation. ყველა უფლება დაცულია."
  }
};

let currentLanguage = 'en';
document.getElementById('languageToggle').addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'ka' : 'en';
  document.getElementById('languageToggle').textContent = currentLanguage === 'en' ? 'ქართული' : 'English';
  document.querySelectorAll('[data-key]').forEach(el => {
    el.textContent = translations[currentLanguage][el.getAttribute('data-key')];
  });
});

// --- Dark/Light Mode Toggle ---
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = 'Light Mode';
}
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.innerHTML = nav.classList.contains('active') 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// --- Carousel ---
const images = document.querySelectorAll('.carousel-image');
let idx = 0;
function showNext() {
  images[idx].classList.remove('active');
  idx = (idx+1) % images.length;
  images[idx].classList.add('active');
}
setInterval(showNext, 4000);