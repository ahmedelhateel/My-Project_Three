const link = document.getElementById('links');
const hind = document.getElementById('hindLinks');
const links = document.getElementById('showLinks');
const secrolToArticle = document.getElementById('secrolToArticle');
const secrollToArticlesLink = document.getElementById('articleLink');
const articles = document.getElementById('articles');
const secrollToGalleryLink = document.getElementById('galleryLink');
const sectionGallery = document.getElementById('gallery');
const secrollToTestimonialsLink = document.getElementById('testimonialsLink');
const sectionTestimonials = document.getElementById('testimonials');
const secrollToTeamLink = document.getElementById('teamLink');
const sectionTeam = document.getElementById('team');
// services
const secrollToServicesLink = document.getElementById('servicesLink');
const sectionServices = document.getElementById('services');
// skills
const secrollToSkillsLink = document.getElementById('skillsLink');
const sectionSkills = document.getElementById('skills');
// works
const secrollToWorksLink = document.getElementById('worksLink');
const sectionWorks = document.getElementById('works');
// events
const secrollToEventsLink = document.getElementById('eventsLink');
const sectionEvents = document.getElementById('events');
// pricing
const secrollToPricingLink = document.getElementById('pricingLink');
const sectionPricing = document.getElementById('pricing');
// videos
const secrollToVideosLink = document.getElementById('videosLink');
const sectionVideos = document.getElementById('videos');
// stats
const secrollToStatsLink = document.getElementById('statsLink');
const sectionStats = document.getElementById('stats');
// discount
const secrollToDiscountLink = document.getElementById('discountLink');
const sectionDiscount = document.getElementById('discount');


function showLinks() {
    links.style.opacity = '1';
    links.style.top = 'calc(100% + 1px)';
    links.style.zIndex = '100';
}
function hindLinks() {
    links.style.opacity = '0';
    links.style.top = 'calc(100% + 50px)';
    links.style.zIndex = '-1';
}

function secrollToArticles() {
    articles.scrollIntoView({behavior: "smooth"});
}
secrolToArticle.addEventListener('click', secrollToArticles);
secrollToArticlesLink.addEventListener('click', secrollToArticles);

function secrollToGallery() {
    sectionGallery.scrollIntoView({behavior: "smooth"});
}
secrollToGalleryLink.addEventListener('click', secrollToGallery);

function secrollToTestimonials() {
    sectionTestimonials.scrollIntoView({behavior: "smooth"});
}
secrollToTestimonialsLink.addEventListener('click', secrollToTestimonials);

function secrollToTeam() {
    sectionTeam.scrollIntoView({behavior: "smooth"});
}
secrollToTeamLink.addEventListener('click', secrollToTeam);

function secrollToServices() {
    sectionServices.scrollIntoView({behavior: "smooth"});
}
secrollToServicesLink.addEventListener('click', secrollToServices);

function secrollToSkills() {
    sectionSkills.scrollIntoView({behavior: "smooth"});
}
secrollToSkillsLink.addEventListener('click', secrollToSkills);

function secrollToWorks() {
    sectionWorks.scrollIntoView({behavior: "smooth"});
}
secrollToWorksLink.addEventListener('click', secrollToWorks);

function secrollToEvents() {
    sectionEvents.scrollIntoView({behavior: "smooth"});
}
secrollToEventsLink.addEventListener('click', secrollToEvents);

function secrollToPricing() {
    sectionPricing.scrollIntoView({behavior: "smooth"});
}
secrollToPricingLink.addEventListener('click', secrollToPricing);

function secrollToVideos() {
    sectionVideos.scrollIntoView({behavior: "smooth"});
}
secrollToVideosLink.addEventListener('click', secrollToVideos);

function secrollToStats() {
    sectionStats.scrollIntoView({behavior: "smooth"});
}
secrollToStatsLink.addEventListener('click', secrollToStats);

function secrollToDiscount() {
    sectionDiscount.scrollIntoView({behavior: "smooth"});
}
secrollToDiscountLink.addEventListener('click', secrollToDiscount);