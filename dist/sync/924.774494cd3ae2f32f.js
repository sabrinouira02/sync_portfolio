"use strict";(self.webpackChunksync=self.webpackChunksync||[]).push([[924],{4924:(x,d,n)=>{n.r(d),n.d(d,{HomeModule:()=>U});var r=n(6814),l=n(9675);const g=[{_id:1,title:"Installation",category:"card",description:"Installation d'un ficher sur un serveur d\xe9di\xe9 chez ionos",date:"09/07/2023",image:"assets/img/portfolio/installation.png"},{_id:2,title:"(Synchronisation avec d'autres calendriers) Lavarel - Airbnb clone",category:"web",description:"Le BOUTON (Synchroniser avec d'autres calendriers)\nIl est d\xe9j\xe0 programm\xe9 et fonctionnel seulement qu'il fonctionne manuellement j'explique seulement qu'une action humaine doit l'engager pour r\xe9aliser la t\xe2che. J'aimerais l'automatiser J'aimerais que le site Web le fasse de mani\xe8re automatis\xe9e toutes les 30 minutes.\nVoici une petite description qui est r\xe9pertori\xe9e sur le site.\nMontrez aux voyageurs quand ils peuvent r\xe9server !\nVous pouvez toujours mettre \xe0 jour manuellement votre calendrier pour bloquer des dates ou les rendre disponibles.",image:"assets/img/portfolio/calendar-airnbnb.jpg",date:"30/07/2022"},{_id:3,title:"Statistiques sur 100+ fichier d'export HTML de conversations WhatsApp",category:"web",description:"Ces fichiers HTML ont le meme format qu'une conversation WhatsApp classique, messages ecrits, photos, vid\xe9os, notes vocales, diff\xe9rents paricipants aus groupes etc...\nNous aimerions savoir, quel est le temps moyen de r\xe9ponses des messages, combien de messages trait\xe9s par jour, combien de relances par jour, a t-on oubli\xe9 de r\xe9pondre a des clients...",date:"07/06/2022",image:"assets/img/portfolio/export-whatsapp.jpg"},{_id:4,title:"Laravel Email Responsive Tableau Markdown",category:"web",description:"J'ai cr\xe9\xe9 un site sous Laravel, j'ai mis en place un syst\xe8me d'email et celui-ci fonctionne. Par contre j'ai un soucis pour design\xe9 un tableau HTML/CSS avec les markdowns. Je cherche quelqu'un pouvant m'aider a regler ce soucis en installant en local la plateforme et en faisant un lien via mailtrap pour tester le rendu visuelle .\n Je souhaiterais rendre le tableau le tableau responsive via via mediaquery.",image:"assets/img/portfolio/laravel-mail-markdown.jpg",date:"03/04/2022"},{_id:5,title:"Petit script avec node.js",category:"web",description:"J'ai un script en node.js qui fonctionne bien mais je souhaite juste personnaliser.",image:"assets/img/portfolio/coding.jpg",date:"02/04/2022"},{_id:6,title:"Seo for shotz",category:"web",description:"En tant qu'experts en d\xe9veloppement, nous comprenons l'importance cruciale d'une visibilit\xe9 en ligne efficace. Gr\xe2ce \xe0 une combinaison de comp\xe9tences techniques avanc\xe9es et une connaissance approfondie des meilleures pratiques en SEO, nous sommes en mesure d'optimiser ce site pour les moteurs de recherche.",image:"assets/img/portfolio/shotz.png",url:"https://shotzfilm.de/"},{_id:7,title:"Diagnostic Automobile OBD Multimarque",category:"web",description:"Reprenez la main sur le diagnostic de votre v\xe9hicule : les origines de la marque klavkarr.",image:"assets/img/portfolio/klav.png",url:"https://www.outilsobdfacile.fr/"},{_id:8,title:"Creative-Cables",category:"web",description:"Creative-Cables a eu \xe0 c\u0153ur l'aspect cr\xe9atif et le bricolage, se positionnant comme un support valable pour les passionn\xe9s d'ameublement, les designers d'int\xe9rieur, les architectes et tous les clients qui sont \xe0 la recherche d'\xe9clairages fonctionnels avec un grand impact esth\xe9tique.",image:"assets/img/portfolio/creative.png",url:"https://www.creative-cables.be/nl/"},{_id:9,title:"Kris translation",category:"web",description:"High quality translations with a passion for language and a strong belief in cooperation.",image:"assets/img/portfolio/kris.png",url:"https://kristranslation.com/?v=947d7d61cd9a"},{_id:10,title:"Fly Delivery",category:"app",description:"Fly Delivery.",image:"assets/img/portfolio/fly.jpg",date:"02/2024"}];var o=n(6223),e=n(9291),c=n(6306),m=n(5592),Z=n(9862);let p=(()=>{class a{constructor(t){this.http=t,this.blogUrl="https://wp.abay.tn"}getProjects(){return this.http.get(`${this.blogUrl}/wp-json/wp/v2/posts`).pipe((0,c.K)(this.errorHandler))}getSingleProject(t){return this.http.get(`${this.blogUrl}/wp-json/wp/v2/posts/${t}`).pipe((0,c.K)(this.errorHandler))}getCategory(){return this.http.get(`${this.blogUrl}/wp-json/wp/v2/categories`).pipe((0,c.K)(this.errorHandler))}errorHandler(t){return new m.y(i=>{i.error(t)})}static#e=this.\u0275fac=function(i){return new(i||a)(e.LFG(Z.eN))};static#t=this.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var f=n(3911);function h(a,u){if(1&a&&(e.TgZ(0,"div",133)(1,"div",134),e._UZ(2,"img",135),e.qZA(),e.TgZ(3,"div",136)(4,"h4"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA(),e.TgZ(8,"a",137),e._UZ(9,"i",138),e.qZA(),e.TgZ(10,"a",139),e._UZ(11,"i",140),e.qZA()()()),2&a){const t=u.$implicit;e.Q6J("ngClass","col-lg-4 col-md-6 portfolio-item filter-"+t.category.toLowerCase()),e.xp6(2),e.s9C("alt",t.title),e.Q6J("src",t.image,e.LSH),e.xp6(3),e.Oqu(t.title),e.xp6(2),e.Oqu(t.category),e.xp6(1),e.s9C("href",t.image,e.LSH),e.xp6(2),e.MGl("routerLink","portfolio-details/",t._id,"")}}function _(a,u){if(1&a&&(e.TgZ(0,"li")(1,"strong"),e._uU(2,"Project date"),e.qZA(),e._uU(3),e.qZA()),2&a){const t=e.oxw();e.xp6(3),e.hij(": ",null==t.singleProject?null:t.singleProject.date,"")}}function v(a,u){if(1&a&&(e.TgZ(0,"li")(1,"strong"),e._uU(2,"Lien de site"),e.qZA(),e._uU(3,": "),e.TgZ(4,"a",15),e._uU(5),e.qZA()()),2&a){const t=e.oxw();e.xp6(4),e.Q6J("href",t.singleProject.url,e.LSH),e.xp6(1),e.Oqu(t.singleProject.url)}}const b=[{path:"",children:[{path:"",component:(()=>{class a{constructor(t,i){this.projectService=t,this.formBuilder=i,this.isHeaderScrolled=!1,this.portfolios=g,this.name=new o.NI("",[o.kI.required]),this.email=new o.NI("",[o.kI.required,o.kI.email]),this.subject=new o.NI("",[o.kI.required]),this.message=new o.NI("",[o.kI.required,o.kI.maxLength(256)]),this.honeypot=new o.NI(""),this.submitted=!1,this.isLoading=!1,this.time=!1,this.form=this.formBuilder.group({name:this.name,email:this.email,message:this.message,subject:this.subject,honeypot:this.honeypot})}onWindowScroll(){const t=window.scrollY;this.isHeaderScrolled=t>100}ngOnInit(){this.getProjects(),this.getCategory()}getProjects(){this.projectService.getProjects().subscribe(t=>{this.time=!0,this.projects=t,this.projects2=t},t=>{this.errorMessage=t.error.message,console.log(t.error.message,"error")})}getCategory(){this.projectService.getCategory().subscribe(t=>{this.allCategories=t,this.allCategories=this.allCategories.filter(i=>1!=i.id)},t=>{this.errorMessage=t.error.message,console.log(t.error.message,"error")})}filterCategory(t){for(let i=0;i<this.allCategories?.length;i++)if(t.includes(this.allCategories[i].id))return this.allCategories[i].name}iChange(t){this.projects2=this.projects.filter(i=>i.categories.includes(t))}onSubmit(){if("VALID"==this.form.status&&""==this.honeypot.value){console.log("this.form",this.form.value),this.form.disable();var t=new FormData;t.append("name",this.form.get("name")?.value||""),t.append("email",this.form.get("email")?.value||""),t.append("message",this.form.get("message")?.value||""),this.isLoading=!0,this.submitted=!1}}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(p),e.Y36(o.qu))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-home"]],hostBindings:function(i,s){1&i&&e.NdJ("scroll",function(){return s.onWindowScroll()},!1,e.Jf7)},decls:453,vars:143,consts:[["id","hero",1,"d-flex","align-items-center"],[1,"container"],[1,"row"],["data-aos","fade-up","data-aos-delay","200",1,"col-lg-6","d-flex","flex-column","justify-content-center","pt-4","pt-lg-0","order-2","order-lg-1"],[1,"d-flex","justify-content-center","justify-content-lg-start"],["href","#about",1,"btn-get-started","scrollto"],["data-aos","zoom-in","data-aos-delay","200",1,"col-lg-6","order-1","order-lg-2","hero-img"],["src","assets/img/hero-img.png","alt","",1,"img-fluid","animated"],["id","main"],["id","clients",1,"clients","section-bg"],["data-aos","zoom-in",1,"row"],[1,"col-lg-2","col-md-4","col-6","d-flex","align-items-center","justify-content-center"],["src","assets/img/clients/trs.png","alt","",1,"img-fluid"],["src","assets/img/clients/printsmarter.png","alt","",1,"img-fluid",2,"max-width","80%"],["src","assets/img/clients/Gazradonquebec_LOGO.png","alt","",1,"img-fluid"],["src","assets/img/clients/SHOTZ_LOGO.png","alt","",1,"img-fluid"],["src","assets/img/clients/kk.png","alt","",1,"img-fluid"],["src","assets/img/clients/creative-cables-logo.jpg","alt","",1,"img-fluid",2,"max-width","80%"],["id","about",1,"about"],["data-aos","fade-up",1,"container"],[1,"section-title"],[1,"row","content"],[1,"col-lg-6"],[1,"ri-check-double-line"],[1,"col-lg-6","pt-4","pt-lg-0"],["href","#",1,"btn-learn-more"],["id","why-us",1,"why-us","section-bg"],["data-aos","fade-up",1,"container-fluid"],[1,"col-lg-7","d-flex","flex-column","justify-content-center","align-items-stretch","order-2","order-lg-1"],[1,"content"],[1,"accordion-list"],["data-bs-toggle","collapse","data-bs-target","#accordion-list-1",1,"collapse"],[1,"bx","bx-chevron-down","icon-show"],[1,"bx","bx-chevron-up","icon-close"],["id","accordion-list-1","data-bs-parent",".accordion-list",1,"collapse","show"],["data-bs-toggle","collapse","data-bs-target","#accordion-list-2",1,"collapsed"],["id","accordion-list-2","data-bs-parent",".accordion-list",1,"collapse"],["data-bs-toggle","collapse","data-bs-target","#accordion-list-3",1,"collapsed"],["id","accordion-list-3","data-bs-parent",".accordion-list",1,"collapse"],[1,"col-lg-5","align-items-stretch","order-1","order-lg-2","img"],["src","assets/img/why-us.png","alt","",1,"img-fluid","animated","slide-animation"],["id","services",1,"services","section-bg"],["data-aos","zoom-in","data-aos-delay","100",1,"col-xl-4","col-md-6","d-flex","align-items-stretch"],[1,"icon-box"],[1,"icon"],[1,"bi","bi-gear"],["href",""],["data-aos","zoom-in","data-aos-delay","200",1,"col-xl-4","col-md-6","d-flex","align-items-stretch","mt-4","mt-md-0"],[1,"bi","bi-display"],["data-aos","zoom-in","data-aos-delay","300",1,"col-xl-4","col-md-6","d-flex","align-items-stretch","mt-4","mt-xl-0"],[1,"bi","bi-reply"],["data-aos","zoom-in","data-aos-delay","400",1,"col-xl-4","col-md-6","d-flex","align-items-stretch","mt-4","mt-xl-0"],[1,"bi","bi-envelope-fill"],[1,"bi","bi-chat-fill"],[1,"bi","bi-phone-fill"],["id","cta",1,"cta"],["data-aos","zoom-in",1,"container"],[1,"col-lg-9","text-center","text-lg-start"],[1,"col-lg-3","cta-btn-container","text-center"],["href","#contact",1,"cta-btn","align-middle"],["id","portfolio",1,"portfolio"],["id","portfolio-flters","data-aos","fade-up","data-aos-delay","100",1,"d-flex","justify-content-center"],["data-filter","*",1,"filter-active"],["data-filter",".filter-app"],["data-filter",".filter-card"],["data-filter",".filter-web"],["data-aos","fade-up","data-aos-delay","200",1,"row","portfolio-container"],[3,"ngClass",4,"ngFor","ngForOf"],["id","team",1,"team","section-bg"],["data-aos","zoom-in","data-aos-delay","100",1,"col-lg-6"],[1,"member","d-flex","align-items-start"],[1,"pic"],["src","assets/img/team/team-1.jpg","alt","",1,"img-fluid"],[1,"member-info"],[1,"social"],[1,"ri-twitter-fill"],[1,"ri-facebook-fill"],[1,"ri-instagram-fill"],[1,"ri-linkedin-box-fill"],["data-aos","zoom-in","data-aos-delay","200",1,"col-lg-6","mt-4","mt-lg-0"],["src","assets/img/team/team-2.jpg","alt","",1,"img-fluid"],["href","https://www.linkedin.com/in/haroun-bayoudh-008811210/"],["data-aos","zoom-in","data-aos-delay","300",1,"col-lg-6","mt-4"],["src","assets/img/team/team-3.jpg","alt","",1,"img-fluid"],["href","https://www.linkedin.com/in/karimbouzid/"],["data-aos","zoom-in","data-aos-delay","400",1,"col-lg-6","mt-4"],["src","assets/img/team/team-4.jpg","alt","",1,"img-fluid"],["href","https://www.linkedin.com/in/sabri-nouira/"],["id","faq",1,"faq","section-bg"],[1,"faq-list"],["data-aos","fade-up","data-aos-delay","100"],[1,"bx","bx-help-circle","icon-help"],["data-bs-toggle","collapse","data-bs-target","#faq-list-1",1,"collapse"],["id","faq-list-1","data-bs-parent",".faq-list",1,"collapse","show"],["data-aos","fade-up","data-aos-delay","200"],["data-bs-toggle","collapse","data-bs-target","#faq-list-2",1,"collapsed"],["id","faq-list-2","data-bs-parent",".faq-list",1,"collapse"],["data-aos","fade-up","data-aos-delay","300"],["data-bs-toggle","collapse","data-bs-target","#faq-list-3",1,"collapsed"],["id","faq-list-3","data-bs-parent",".faq-list",1,"collapse"],["data-aos","fade-up","data-aos-delay","400"],["data-bs-toggle","collapse","data-bs-target","#faq-list-4",1,"collapsed"],["id","faq-list-4","data-bs-parent",".faq-list",1,"collapse"],["data-aos","fade-up","data-aos-delay","500"],["data-bs-toggle","collapse","data-bs-target","#faq-list-5",1,"collapsed"],["id","faq-list-5","data-bs-parent",".faq-list",1,"collapse"],["id","contact",1,"contact"],[1,"col-lg-5","d-flex","align-items-stretch"],[1,"info"],[1,"address"],[1,"bi","bi-geo-alt"],[1,"email"],[1,"bi","bi-envelope"],[1,"phone"],[1,"bi","bi-phone"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.64486600203523!2d10.970455339764815!3d35.644539634996654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13021624d8ada3d7%3A0xb3d7901e39eb53ad!2zSlhWQytRNUbYjCDZhtmH2Kwg2LfYsdin2KjZhNizLCBUYWJ1bGJhaA!5e0!3m2!1sfr!2stn!4v1700821594953!5m2!1sfr!2stn","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],[1,"col-lg-7","mt-5","mt-lg-0","d-flex","align-items-stretch"],["method","post",1,"php-email-form",3,"formGroup","ngSubmit"],[1,"form-group","col-md-6"],["for","name"],["type","text","id","name","required","",1,"form-control",3,"formControl"],["type","email","id","email","required","",1,"form-control",3,"formControl"],[1,"form-group"],["type","text","id","subject","required","",1,"form-control",3,"formControl"],["rows","10","required","",1,"form-control",3,"formControl"],["type","text",1,"hidden",3,"formControl"],[1,"my-3"],[1,"loading"],[1,"error-message"],[1,"sent-message"],[1,"text-center"],["type","submit",3,"disabled"],[1,"center-text",3,"ngClass"],[3,"ngClass"],[1,"portfolio-img"],[1,"img-fluid",3,"src","alt"],[1,"portfolio-info"],["data-gallery","portfolioGallery","title","Voir l'image",1,"portfolio-lightbox","preview-link",3,"href"],[1,"bx","bx-plus"],["title","More Details",1,"details-link",3,"routerLink"],[1,"bx","bx-link"]],template:function(i,s){1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"h2"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"div",4)(11,"a",5),e._uU(12),e.ALo(13,"translate"),e.qZA()()(),e.TgZ(14,"div",6),e._UZ(15,"img",7),e.qZA()()()(),e.TgZ(16,"main",8)(17,"section",9)(18,"div",1)(19,"div",10)(20,"div",11),e._UZ(21,"img",12),e.qZA(),e.TgZ(22,"div",11),e._UZ(23,"img",13),e.qZA(),e.TgZ(24,"div",11),e._UZ(25,"img",14),e.qZA(),e.TgZ(26,"div",11),e._UZ(27,"img",15),e.qZA(),e.TgZ(28,"div",11),e._UZ(29,"img",16),e.qZA(),e.TgZ(30,"div",11),e._UZ(31,"img",17),e.qZA()()()(),e.TgZ(32,"section",18)(33,"div",19)(34,"div",20)(35,"h2"),e._uU(36),e.ALo(37,"translate"),e.qZA()(),e.TgZ(38,"div",21)(39,"div",22)(40,"p"),e._uU(41),e.ALo(42,"translate"),e.qZA(),e.TgZ(43,"ul")(44,"li"),e._UZ(45,"i",23),e._uU(46),e.ALo(47,"translate"),e.qZA(),e.TgZ(48,"li"),e._UZ(49,"i",23),e._uU(50),e.ALo(51,"translate"),e.qZA(),e.TgZ(52,"li"),e._UZ(53,"i",23),e._uU(54),e.ALo(55,"translate"),e.qZA(),e.TgZ(56,"li"),e._UZ(57,"i",23),e._uU(58),e.ALo(59,"translate"),e.qZA()()(),e.TgZ(60,"div",24)(61,"p"),e._uU(62),e.ALo(63,"translate"),e.qZA(),e.TgZ(64,"a",25),e._uU(65),e.ALo(66,"translate"),e.qZA()()()()(),e.TgZ(67,"section",26)(68,"div",27)(69,"div",2)(70,"div",28)(71,"div",29)(72,"h3"),e._uU(73,"Eum ipsam laborum deleniti "),e.TgZ(74,"strong"),e._uU(75,"velit pariatur architecto aut nihil"),e.qZA()(),e.TgZ(76,"p"),e._uU(77," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit "),e.qZA()(),e.TgZ(78,"div",30)(79,"ul")(80,"li")(81,"a",31)(82,"span"),e._uU(83,"01"),e.qZA(),e._uU(84," Non consectetur a erat nam at lectus urna duis? "),e._UZ(85,"i",32)(86,"i",33),e.qZA(),e.TgZ(87,"div",34)(88,"p"),e._uU(89," Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. "),e.qZA()()(),e.TgZ(90,"li")(91,"a",35)(92,"span"),e._uU(93,"02"),e.qZA(),e._uU(94," Feugiat scelerisque varius morbi enim nunc? "),e._UZ(95,"i",32)(96,"i",33),e.qZA(),e.TgZ(97,"div",36)(98,"p"),e._uU(99," Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui. "),e.qZA()()(),e.TgZ(100,"li")(101,"a",37)(102,"span"),e._uU(103,"03"),e.qZA(),e._uU(104," Dolor sit amet consectetur adipiscing elit? "),e._UZ(105,"i",32)(106,"i",33),e.qZA(),e.TgZ(107,"div",38)(108,"p"),e._uU(109," Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis "),e.qZA()()()()()(),e.TgZ(110,"div",39),e._UZ(111,"img",40),e._uU(112," \xa0 "),e.qZA()()()(),e.TgZ(113,"section",41)(114,"div",19)(115,"div",20)(116,"h2"),e._uU(117),e.ALo(118,"translate"),e.qZA(),e.TgZ(119,"h4"),e._uU(120),e.ALo(121,"translate"),e.qZA()(),e.TgZ(122,"div",2)(123,"div",42)(124,"div",43)(125,"div",44),e._UZ(126,"i",45),e.qZA(),e.TgZ(127,"h4")(128,"a",46),e._uU(129),e.ALo(130,"translate"),e.qZA()(),e.TgZ(131,"p"),e._uU(132),e.ALo(133,"translate"),e.qZA()()(),e.TgZ(134,"div",47)(135,"div",43)(136,"div",44),e._UZ(137,"i",48),e.qZA(),e.TgZ(138,"h4")(139,"a",46),e._uU(140),e.ALo(141,"translate"),e.qZA()(),e.TgZ(142,"p"),e._uU(143),e.ALo(144,"translate"),e.qZA()()(),e.TgZ(145,"div",49)(146,"div",43)(147,"div",44),e._UZ(148,"i",50),e.qZA(),e.TgZ(149,"h4")(150,"a",46),e._uU(151),e.ALo(152,"translate"),e.qZA()(),e.TgZ(153,"p"),e._uU(154),e.ALo(155,"translate"),e.qZA()()()(),e._UZ(156,"br"),e.TgZ(157,"div",2)(158,"div",51)(159,"div",43)(160,"div",44),e._UZ(161,"i",52),e.qZA(),e.TgZ(162,"h4")(163,"a",46),e._uU(164),e.ALo(165,"translate"),e.qZA()(),e.TgZ(166,"p"),e._uU(167),e.ALo(168,"translate"),e.qZA()()(),e.TgZ(169,"div",49)(170,"div",43)(171,"div",44),e._UZ(172,"i",53),e.qZA(),e.TgZ(173,"h4")(174,"a",46),e._uU(175),e.ALo(176,"translate"),e.qZA()(),e.TgZ(177,"p"),e._uU(178),e.ALo(179,"translate"),e.qZA()()(),e.TgZ(180,"div",47)(181,"div",43)(182,"div",44),e._UZ(183,"i",54),e.qZA(),e.TgZ(184,"h4")(185,"a",46),e._uU(186),e.ALo(187,"translate"),e.qZA()(),e.TgZ(188,"p"),e._uU(189),e.ALo(190,"translate"),e.qZA()()()()()(),e.TgZ(191,"section",55)(192,"div",56)(193,"div",2)(194,"div",57)(195,"h3"),e._uU(196),e.ALo(197,"translate"),e.qZA(),e.TgZ(198,"p"),e._uU(199),e.ALo(200,"translate"),e.qZA()(),e.TgZ(201,"div",58)(202,"a",59),e._uU(203),e.ALo(204,"translate"),e.qZA()()()()(),e.TgZ(205,"section",60)(206,"div",19)(207,"div",20)(208,"h2"),e._uU(209),e.ALo(210,"translate"),e.qZA(),e.TgZ(211,"p"),e._uU(212),e.ALo(213,"translate"),e.qZA()(),e.TgZ(214,"ul",61)(215,"li",62),e._uU(216,"All"),e.qZA(),e.TgZ(217,"li",63),e._uU(218,"App"),e.qZA(),e.TgZ(219,"li",64),e._uU(220,"Card"),e.qZA(),e.TgZ(221,"li",65),e._uU(222,"Web"),e.qZA()(),e.TgZ(223,"div",66),e.YNc(224,h,12,7,"div",67),e.qZA()()(),e.TgZ(225,"section",68)(226,"div",19)(227,"div",20)(228,"h2"),e._uU(229),e.ALo(230,"translate"),e.qZA(),e.TgZ(231,"h4"),e._uU(232),e.ALo(233,"translate"),e.qZA()(),e.TgZ(234,"div",2)(235,"div",69)(236,"div",70)(237,"div",71),e._UZ(238,"img",72),e.qZA(),e.TgZ(239,"div",73)(240,"h4"),e._uU(241,"Aymen"),e.qZA(),e._UZ(242,"br")(243,"br"),e.TgZ(244,"span"),e._uU(245,"ARCHITECT DEVELOPMENT"),e.qZA(),e._UZ(246,"br"),e.TgZ(247,"div",74)(248,"a",46),e._UZ(249,"i",75),e.qZA(),e.TgZ(250,"a",46),e._UZ(251,"i",76),e.qZA(),e.TgZ(252,"a",46),e._UZ(253,"i",77),e.qZA(),e.TgZ(254,"a",46),e._UZ(255,"i",78),e.qZA()()()()(),e.TgZ(256,"div",79)(257,"div",70)(258,"div",71),e._UZ(259,"img",80),e.qZA(),e.TgZ(260,"div",73)(261,"h4"),e._uU(262,"Haroun"),e.qZA(),e._UZ(263,"br")(264,"br"),e.TgZ(265,"span"),e._uU(266,"FULL STACK DEVELOPER"),e.qZA(),e._UZ(267,"br"),e.TgZ(268,"div",74)(269,"a",46),e._UZ(270,"i",75),e.qZA(),e.TgZ(271,"a",46),e._UZ(272,"i",76),e.qZA(),e.TgZ(273,"a",46),e._UZ(274,"i",77),e.qZA(),e.TgZ(275,"a",81),e._UZ(276,"i",78),e.qZA()()()()(),e.TgZ(277,"div",82)(278,"div",70)(279,"div",71),e._UZ(280,"img",83),e.qZA(),e.TgZ(281,"div",73)(282,"h4"),e._uU(283,"Karim"),e.qZA(),e._UZ(284,"br")(285,"br"),e.TgZ(286,"span"),e._uU(287,"MOBILE APPLICATION DEVELOPER"),e.qZA(),e._UZ(288,"br"),e.TgZ(289,"div",74)(290,"a",46),e._UZ(291,"i",75),e.qZA(),e.TgZ(292,"a",46),e._UZ(293,"i",76),e.qZA(),e.TgZ(294,"a",46),e._UZ(295,"i",77),e.qZA(),e.TgZ(296,"a",84),e._UZ(297,"i",78),e.qZA()()()()(),e.TgZ(298,"div",85)(299,"div",70)(300,"div",71),e._UZ(301,"img",86),e.qZA(),e.TgZ(302,"div",73)(303,"h4"),e._uU(304,"Sabri"),e.qZA(),e._UZ(305,"br")(306,"br"),e.TgZ(307,"span"),e._uU(308,"FULL STACK DEVELOPER"),e.qZA(),e._UZ(309,"br"),e.TgZ(310,"div",74)(311,"a",46),e._UZ(312,"i",75),e.qZA(),e.TgZ(313,"a",46),e._UZ(314,"i",76),e.qZA(),e.TgZ(315,"a",46),e._UZ(316,"i",77),e.qZA(),e.TgZ(317,"a",87),e._UZ(318,"i",78),e.qZA()()()()()()()(),e.TgZ(319,"section",88)(320,"div",19)(321,"div",20)(322,"h2"),e._uU(323,"Frequently Asked Questions"),e.qZA(),e.TgZ(324,"p"),e._uU(325,"Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."),e.qZA()(),e.TgZ(326,"div",89)(327,"ul")(328,"li",90),e._UZ(329,"i",91),e.TgZ(330,"a",92),e._uU(331,"Non consectetur a erat nam at lectus urna duis? "),e._UZ(332,"i",32)(333,"i",33),e.qZA(),e.TgZ(334,"div",93)(335,"p"),e._uU(336," Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. "),e.qZA()()(),e.TgZ(337,"li",94),e._UZ(338,"i",91),e.TgZ(339,"a",95),e._uU(340,"Feugiat scelerisque varius morbi enim nunc? "),e._UZ(341,"i",32)(342,"i",33),e.qZA(),e.TgZ(343,"div",96)(344,"p"),e._uU(345," Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui. "),e.qZA()()(),e.TgZ(346,"li",97),e._UZ(347,"i",91),e.TgZ(348,"a",98),e._uU(349,"Dolor sit amet consectetur adipiscing elit? "),e._UZ(350,"i",32)(351,"i",33),e.qZA(),e.TgZ(352,"div",99)(353,"p"),e._uU(354," Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis "),e.qZA()()(),e.TgZ(355,"li",100),e._UZ(356,"i",91),e.TgZ(357,"a",101),e._uU(358,"Tempus quam pellentesque nec nam aliquam sem et tortor consequat? "),e._UZ(359,"i",32)(360,"i",33),e.qZA(),e.TgZ(361,"div",102)(362,"p"),e._uU(363," Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in. "),e.qZA()()(),e.TgZ(364,"li",103),e._UZ(365,"i",91),e.TgZ(366,"a",104),e._uU(367,"Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? "),e._UZ(368,"i",32)(369,"i",33),e.qZA(),e.TgZ(370,"div",105)(371,"p"),e._uU(372," Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. "),e.qZA()()()()()()(),e.TgZ(373,"section",106)(374,"div",19)(375,"div",20)(376,"h2"),e._uU(377),e.ALo(378,"translate"),e.qZA(),e.TgZ(379,"p"),e._uU(380),e.ALo(381,"translate"),e.qZA()(),e.TgZ(382,"div",2)(383,"div",107)(384,"div",108)(385,"div",109),e._UZ(386,"i",110),e.TgZ(387,"h4"),e._uU(388),e.ALo(389,"translate"),e.qZA(),e.TgZ(390,"p"),e._uU(391,"Teboulba, Monastir, Tunisia"),e.qZA()(),e.TgZ(392,"div",111),e._UZ(393,"i",112),e.TgZ(394,"h4"),e._uU(395),e.ALo(396,"translate"),e.qZA(),e.TgZ(397,"p"),e._uU(398,"contact@sync.tn"),e.qZA()(),e.TgZ(399,"div",113),e._UZ(400,"i",114),e.TgZ(401,"h4"),e._uU(402),e.ALo(403,"translate"),e.qZA(),e.TgZ(404,"p"),e._uU(405,"+216 99 676 111"),e.qZA()(),e.TgZ(406,"div",113),e._UZ(407,"i",114),e.TgZ(408,"h4"),e._uU(409),e.ALo(410,"translate"),e.qZA(),e.TgZ(411,"p"),e._uU(412,"+216 51 873 655"),e.qZA()(),e._UZ(413,"iframe",115),e.qZA()(),e.TgZ(414,"div",116)(415,"form",117),e.NdJ("ngSubmit",function(){return s.onSubmit()}),e.TgZ(416,"div",2)(417,"div",118)(418,"label",119),e._uU(419),e.ALo(420,"translate"),e.qZA(),e._UZ(421,"input",120),e.qZA(),e.TgZ(422,"div",118)(423,"label",119),e._uU(424),e.ALo(425,"translate"),e.qZA(),e._UZ(426,"input",121),e.qZA()(),e.TgZ(427,"div",122)(428,"label",119),e._uU(429),e.ALo(430,"translate"),e.qZA(),e._UZ(431,"input",123),e.qZA(),e.TgZ(432,"div",122)(433,"label",119),e._uU(434),e.ALo(435,"translate"),e.qZA(),e._UZ(436,"textarea",124),e.qZA(),e._UZ(437,"input",125),e.TgZ(438,"div",126)(439,"div",127),e._uU(440,"Loading"),e.qZA(),e._UZ(441,"div",128),e.TgZ(442,"div",129),e._uU(443),e.ALo(444,"translate"),e.qZA()(),e.TgZ(445,"div",130)(446,"button",131),e._uU(447),e.ALo(448,"translate"),e.qZA()(),e._UZ(449,"input",125),e.TgZ(450,"div",132)(451,"span"),e._uU(452),e.qZA()()()()()()()()),2&i&&(e.xp6(5),e.hij("",e.lcZ(6,55,"premier_titre")," "),e.xp6(3),e.Oqu(e.lcZ(9,57,"sous_premier_titre")),e.xp6(4),e.Oqu(e.lcZ(13,59,"get_started")),e.xp6(24),e.Oqu(e.lcZ(37,61,"about_us")),e.xp6(5),e.hij(" ",e.lcZ(42,63,"best_SYNC_solution")," "),e.xp6(5),e.hij(" ",e.lcZ(47,65,"award_Winning")," "),e.xp6(4),e.hij(" ",e.lcZ(51,67,"professional_Staff"),""),e.xp6(4),e.hij(" ",e.lcZ(55,69,"24/7_Support")," "),e.xp6(4),e.hij(" ",e.lcZ(59,71,"fair_Prices")," "),e.xp6(4),e.hij(" ",e.lcZ(63,73,"linking_service")," "),e.xp6(3),e.Oqu(e.lcZ(66,75,"learn_More")),e.xp6(52),e.Oqu(e.lcZ(118,77,"services")),e.xp6(3),e.Oqu(e.lcZ(121,79,"what_Solutions")),e.xp6(9),e.Oqu(e.lcZ(130,81,"SYNC_Optimization")),e.xp6(3),e.Oqu(e.lcZ(133,83,"optimization_is")),e.xp6(8),e.Oqu(e.lcZ(141,85,"Web_Development")),e.xp6(3),e.Oqu(e.lcZ(144,87,"Web_design_refers")),e.xp6(8),e.Oqu(e.lcZ(152,89,"Social_Media_Marketing")),e.xp6(3),e.Oqu(e.lcZ(155,91,"Social_media_marketing_refers")),e.xp6(10),e.Oqu(e.lcZ(165,93,"Email_Marketing")),e.xp6(3),e.Oqu(e.lcZ(168,95,"Email_marketing_refers")),e.xp6(8),e.Oqu(e.lcZ(176,97,"sms/mms_Advertising")),e.xp6(3),e.Oqu(e.lcZ(179,99,"sms/mms_Advertising_refers")),e.xp6(8),e.Oqu(e.lcZ(187,101,"App_Development")),e.xp6(3),e.Oqu(e.lcZ(190,103,"App_development_refers")),e.xp6(7),e.Oqu(e.lcZ(197,105,"devis-gratuit")),e.xp6(3),e.Oqu(e.lcZ(200,107,"devis-gratuit-text")),e.xp6(4),e.Oqu(e.lcZ(204,109,"devis-gratuit")),e.xp6(6),e.Oqu(e.lcZ(210,111,"portfolio")),e.xp6(3),e.Oqu(e.lcZ(213,113,"portfolio-text")),e.xp6(12),e.Q6J("ngForOf",s.portfolios),e.xp6(5),e.Oqu(e.lcZ(230,115,"team")),e.xp6(3),e.Oqu(e.lcZ(233,117,"meet_Our")),e.xp6(145),e.Oqu(e.lcZ(378,119,"contact")),e.xp6(3),e.Oqu(e.lcZ(381,121,"do_you_have_any_questions")),e.xp6(8),e.hij("",e.lcZ(389,123,"location"),":"),e.xp6(7),e.hij("",e.lcZ(396,125,"email"),":"),e.xp6(7),e.hij("",e.lcZ(403,127,"call")," 1:"),e.xp6(7),e.hij("",e.lcZ(410,129,"call")," 2:"),e.xp6(6),e.Q6J("formGroup",s.form),e.xp6(4),e.Oqu(e.lcZ(420,131,"your_Name")),e.xp6(2),e.Q6J("formControl",s.name),e.xp6(3),e.Oqu(e.lcZ(425,133,"your_Email")),e.xp6(2),e.Q6J("formControl",s.email),e.xp6(3),e.Oqu(e.lcZ(430,135,"subject")),e.xp6(2),e.Q6J("formControl",s.subject),e.xp6(3),e.Oqu(e.lcZ(435,137,"message")),e.xp6(2),e.Q6J("formControl",s.message),e.xp6(1),e.Q6J("formControl",s.honeypot),e.xp6(6),e.Oqu(e.lcZ(444,139,"Your_message_has")),e.xp6(3),e.Q6J("disabled",s.isLoading),e.xp6(1),e.Oqu(e.lcZ(448,141,"send_Message")),e.xp6(2),e.Q6J("formControl",s.honeypot),e.xp6(1),e.Q6J("ngClass",s.submitted?"visible":"hidden"),e.xp6(2),e.Oqu(s.responseMessage))},dependencies:[r.mk,r.sg,l.rH,o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.oH,o.sg,f.X$],styles:['.stats[_ngcontent-%COMP%]{--default-color: #ffffff;--default-color-rgb: 255, 255, 255;--background-color: #000000;--background-color-rgb: 0, 0, 0;position:relative;padding:120px 0}.stats[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;inset:0;display:block;width:100%;height:100%;object-fit:cover;z-index:1}.stats[_ngcontent-%COMP%]:before{content:"";background:rgba(var(--background-color-rgb),.6);position:absolute;inset:0;z-index:2}.stats[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{position:relative;z-index:3}.stats[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%]{padding:30px;width:100%}.stats[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:48px;display:block;color:#fff;font-weight:700}.stats[_ngcontent-%COMP%]   .stats-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0;margin:0;font-family:var(--heading-font);font-size:16px;font-weight:700;color:rgba(var(--default-color-rgb),.6)}.team[_ngcontent-%COMP%]   .member[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:180px}iframe[_ngcontent-%COMP%]{width:470px}@media (max-width: 768px){iframe[_ngcontent-%COMP%]{width:330px}}@keyframes _ngcontent-%COMP%_slide{0%{transform:translateY(0)}50%{transform:translateY(20px)}to{transform:translateY(0)}}.slide-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slide 3s ease-in-out infinite}.portfolio-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}@media (min-width: 1200px){.portfolio[_ngcontent-%COMP%]{margin:120px 80px 200px}.article[_ngcontent-%COMP%]{width:33.33%}.portfolio-image[_ngcontent-%COMP%]{width:400px;height:400px;border-radius:3px}}@media (max-width: 1200px){.portfolio[_ngcontent-%COMP%]{margin:120px 80px 300%}.article[_ngcontent-%COMP%]{width:50%}.portfolio-image[_ngcontent-%COMP%]{width:400px;height:400px;border-radius:3px}}@media (max-width: 768px){.portfolio[_ngcontent-%COMP%]{margin:120px 80px 60%}.article[_ngcontent-%COMP%]{width:100%}.portfolio-image[_ngcontent-%COMP%]{width:300px;height:320px;border-radius:3px}}.article[_ngcontent-%COMP%]:hover{opacity:.5;cursor:pointer;transform:scale(.95);transition:transform 1.5s ease}.hidden[_ngcontent-%COMP%]{display:none}']})}return a})()},{path:"portfolio-details/:id",component:(()=>{class a{constructor(t,i){this.route=t,this.projectService=i,this.portfolios=g}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),console.log("portfolios",this.portfolios),this.singleProject=this.portfolios.find(t=>t._id.toString()===this.id)}eliminerCaracteres(t){return t?.slice(3,-5)}formatDate(t){return t?new Date(t).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}):""}getCategory(){this.projectService.getCategory().subscribe(t=>{this.allCategories=t},t=>{this.errorMessage=t.error.message,console.log(t.error.message,"error")})}filterCategory(t){for(let i=0;i<this.allCategories?.length;i++)if(t&&t.includes(this.allCategories[i].id))return this.allCategories[i].name}getSingleProject(){this.projectService.getSingleProject(this.id).subscribe(t=>{this.singleProject=t},t=>{this.errorMessage=t.error.message,console.log(t.error.message,"error")})}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(l.gz),e.Y36(p))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-portfolio-details"]],decls:36,vars:7,consts:[["id","main"],["id","breadcrumbs",1,"breadcrumbs"],[1,"container"],["routerLink","/"],["id","portfolio-details",1,"portfolio-details"],[1,"row","gy-4"],[1,"col-lg-8"],[1,"portfolio-details-slider","swiper"],[1,"swiper-wrapper","align-items-center"],[3,"src","alt"],[1,"swiper-pagination"],[1,"col-lg-4"],[1,"portfolio-info"],[4,"ngIf"],[1,"portfolio-description"],["target","_blank",3,"href"]],template:function(i,s){1&i&&(e.TgZ(0,"main",0)(1,"section",1)(2,"div",2)(3,"ol")(4,"li")(5,"a",3),e._uU(6,"Home"),e.qZA()(),e.TgZ(7,"li"),e._uU(8,"Project Details"),e.qZA()(),e.TgZ(9,"h2"),e._uU(10),e.qZA()()(),e.TgZ(11,"section",4)(12,"div",2)(13,"div",5)(14,"div",6)(15,"div",7)(16,"div",8),e._UZ(17,"img",9),e.qZA(),e._UZ(18,"div",10),e.qZA()(),e.TgZ(19,"div",11)(20,"div",12)(21,"h3"),e._uU(22,"Project information"),e.qZA(),e.TgZ(23,"ul")(24,"li")(25,"strong"),e._uU(26,"Category"),e.qZA(),e._uU(27,": "),e.TgZ(28,"p"),e._uU(29),e.qZA()(),e.YNc(30,_,4,1,"li",13),e.YNc(31,v,6,2,"li",13),e.qZA()(),e.TgZ(32,"div",14)(33,"h2"),e._uU(34,"This is project description"),e.qZA(),e._uU(35),e.qZA()()()()()()),2&i&&(e.xp6(10),e.hij("",null==s.singleProject?null:s.singleProject.title," Details"),e.xp6(7),e.s9C("alt",null==s.singleProject?null:s.singleProject.title),e.Q6J("src","../../../"+(null==s.singleProject?null:s.singleProject.image),e.LSH),e.xp6(12),e.Oqu(null==s.singleProject?null:s.singleProject.category),e.xp6(1),e.Q6J("ngIf",s.singleProject.date),e.xp6(1),e.Q6J("ngIf",s.singleProject.url),e.xp6(4),e.hij(" ",null==s.singleProject?null:s.singleProject.description," "))},dependencies:[r.O5,l.rH]})}return a})()}]}];let A=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=e.oAB({type:a});static#i=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(b),l.Bz]})}return a})(),U=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=e.oAB({type:a});static#i=this.\u0275inj=e.cJS({imports:[r.ez,A]})}return a})()}}]);