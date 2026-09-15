
(function(){
  "use strict";

  /* ---------------------------- DATA ---------------------------- */
  var TEAM = [
    {
      slug:"lina",
      name:"Lina Dhingra",
      role:"Producer / Director",
      initials:"LD",
      photo:"images/image-b255a464031c34c4.webp",
      bio:[
        "Lina Dhingra is a globally connected producer, consultant, and emerging director whose career spans film finance, international co-productions, festival strategy, and publicity. Beginning with TIFF, Berlinale, and IFFI Goa, she built extensive relationships across Bollywood, Hollywood, and international cinema, leveraging her multilingual skills and global network.",
        "She has collaborated on acclaimed projects including The Square (Academy Award-nominated; Netflix), Meet the Patels (Hot Docs Audience Award), and Angry Indian Goddesses (TIFF Audience Award), and led high-impact festival campaigns including the Cannes activation for The Black Prince. Her producing credits include Black Angel, The Black Prince, Mumbai's King, Riddle of the Black Cat, and Galaxy Built on Hope.",
        "Mentored by Oscar-winning producer Geralyn Dreyfous and acclaimed producer Don Carmody, Lina brings creative vision, strategic expertise, and international perspective to her work. She is currently directing her debut documentary, SuperMONK, filmed over three years in the Himalayas."
      ],
      links:[{label:"Website", href:"https://karmapro.ca/our-founder/"},{label:"IMDb", href:"https://www.imdb.com/name/nm2722559/"}]
    },
    {
      slug:"richard",
      name:"Richard Schenkman",
      role:"Producer / Director",
      initials:"RS",
      photo:"images/image-53cd45205aa16837.webp",
      bio:[
        "Richard Schenkman is an award-winning writer, director and producer whose work spans documentary, narrative film, television, and educational media. He began his career at MTV, creating promos, news segments and documentary programs, before founding his own production company and producing and directing for major networks and brands.",
        "His feature credits include The Pompatus of Love, Went to Coney Island on a Mission from God... Be Back by Five, A Diva's Christmas Carol, and the internationally acclaimed cult film The Man From Earth, which explores philosophy, science, religion and human nature and has inspired a worldwide audience.",
        "His documentaries include Dead on Arrival: The Punk Documentary That Almost Never Was, examining music, commerce and artistic freedom through the story of the Sex Pistols. Schenkman has taught filmmaking and directing at USC, CalArts, Los Angeles Film School and Columbia College Hollywood."
      ],
      links:[{label:"Website", href:"https://karmapro.ca/richard/"},{label:"IMDb", href:"https://www.imdb.com/name/nm0770942/"}]
    },
    {
      slug:"robert",
      name:"Robert Maylor",
      role:"Producer, Lawyer",
      initials:"RM",
      photo:"images/image-eabc0d0a7472fc8d.webp",
      bio:[
        "Robert A. Maylor is a Jamaican-American producer and lawyer working at the intersection of Caribbean storytelling and the international screen marketplace. Through Mental Telepathy Pictures, he develops and produces distinctive stories from the Caribbean and its diaspora for global audiences.",
        "He produced Sprinter, executive produced by Jada Pinkett Smith and Will Smith, which swept the American Black Film Festival and went on to win more than a dozen festival prizes, with distribution across North America, Europe, Africa, and Latin America. As Head of Business Affairs & Producer at CINECOM, Jamaica's leading production services company, his credits include Bob Marley: One Love, Black Cake, and Get Millie Black.",
        "A Princeton and USC Peter Stark Producing Program graduate, Maylor is also a California Bar member and TorinoFilmLab and Film Independent Producing Lab alumnus."
      ],
      links:[]
    }
  ];

  /* Project crew — photos live here once and are referenced by slug from each
     project's team list, so someone on two titles isn't duplicated. */
  var CREW = [
    {slug:"giuseppe", name:"Giuseppe Maria Blasi", photo:"images/image-dcec87d159bb161b.webp"},
    {slug:"leah", name:"Leah Natasha Thomas", photo:"images/image-031073532739d83c.webp"},
    {slug:"rashi", name:"Rashi Bindra", photo:"images/image-f7e6cacd1381cde5.webp"},
    {slug:"roger", name:"Roger Singh", photo:"images/image-ce85feeb1fc89e75.webp"},
    {slug:"shweta", name:"Shweta Robert", photo:"images/image-fc334f980f2f1ee8.webp"},
    {slug:"smriti", name:"Smriti Middha", photo:"images/image-c369c3315b220e33.webp"}
  ];


  /* shared: also used in the SuperMONK stills strip */
  var IMG_THIKSEY = "images/image-d3243e1229ce63f0.webp";

  var PROJECTS = [
    {
      slug:"supermonk", workingTitle:true, title:"SuperMONK", type:"Documentary Feature Film", status:"In Production", founder:"lina",
      format:"Documentary Feature Film | 90 minutes",
      featured:true, tone:1, heroImage:"images/image-ffebfc68de74133a.webp", poster:"images/image-5646723a9301c7c4.webp",
      stills:["images/image-d2ca7afd901b024d.webp","images/image-f436c4b69c5cbaa8.webp","images/image-3bedf6ab097c6c9a.webp",IMG_THIKSEY],
      stillsPosition:["center 15%","center 20%","center","center"],
      team:[
        {ref:"lina", role:"Director & Producer"},
        {ref:"richard", role:"Writer & Producer"},
        {ref:"leah", role:"Producer"},
        {ref:"roger", role:"Cinematographer"},
        {ref:"giuseppe", role:"Fundraising"},
        {ref:"rashi", role:"Stylist / Creative Consultant"},
        {ref:"smriti", role:"Digital Marketing Specialist"},
        {ref:"shweta", role:"Creative & Brand Consultant"}
      ],
      synopsis:[
        "In a world overwhelmed by noise, anxiety, distraction, and division, an ancient civilization has spent centuries studying the human mind from the inside out.",
        "SUPERMONK is a cinematic journey into compassion, consciousness, resilience, and the search for meaning in the modern age."
      ],
      credits:[{role:"A Film By", name:"Lina Dhingra"}],
      festivals:[]
    },
    {
      slug:"48-heures", workingTitle:true, title:"48 Heures", type:"Erotic & Psychological Romance", status:"In Development", founder:"lina",
      format:"Feature Film | 100 minutes | Erotic & Psychological Romance",
      featured:true, tone:2, heroImage:"images/image-7f6f5b8c70bb1754.webp", poster:"images/image-d20debdc49152dd0.webp",
      team:[
        {ref:"lina", role:"Director & Producer"},
        {ref:"richard", role:"Writer & Producer"},
        {ref:"smriti", role:"Digital Marketing Specialist"},
        {ref:"shweta", role:"Creative & Brand Consultant"}
      ],
      synopsis:"When a disillusioned film producer flees her failing marriage for the South of France, a whirlwind romance with a magnetic stranger feels like salvation \u2014 until his dark edges surface, and the love she\u2019s chasing begins to look dangerously like a trap.",
      credits:[{role:"A Film By", name:"karmaLINA Films"}],
      festivals:[]
    },
    {
      slug:"ponzi", title:"Ponzi", type:"Financial Thriller", status:"In Development", founder:"lina",
      featured:true, tone:6, heroImage:"images/image-e0e2b2ed3ea906c6.webp", poster:"images/image-f8497a77a1b0b3fd.webp",
      team:[],
      synopsis:"After losing her savings to an elaborate investment scam, a young woman sets out to expose the people who deceived her\u2014only to discover that her story is part of a vast, global Ponzi economy that has claimed countless victims, from ordinary investors to the victims of pandemic-era crypto schemes.",
      credits:[{role:"A Film By", name:"karmaLINA Films"}],
      festivals:[]
    },
    {
      slug:"conviction", title:"Conviction", type:"Crime Drama", status:"In Development", founder:"lina",
      featured:true, tone:3, heroImage:"images/image-0f7c878042c1fb36.webp", poster:"images/image-8a442754318a57a5.webp",
      team:[],
      synopsis:"After her father kills her mother, a young woman faces an incomprehensible choice: abandon the man responsible for the worst tragedy of her life, or fight to save him from a justice system she believes has failed them both.",
      credits:[{role:"A Film By", name:"karmaLINA Films"}],
      festivals:[]
    }
  ];

  var FESTIVALS = [
    {slug:"tiff", name:"Toronto International Film Festival", logo:"images/image-f929b320887de263.webp"},
    {slug:"cannes", name:"Festival de Cannes", logo:"images/image-f9c26ff5492af711.webp"},
    {slug:"berlinale", name:"Berlin International Film Festival", logo:"images/image-8fe7937baa3068cb.svg"},
    {slug:"iffi", name:"International Film Festival of India, Goa", logo:"images/image-d31486dcfa1e66d5.webp"},
    {slug:"traverse", name:"Traverse City Film Festival", logo:"images/image-f65c0465899800dc.webp"},
    {slug:"austin", name:"Austin Film Festival", logo:"images/image-e78673ba08ae9217.webp"},
    {slug:"oldenburg", name:"Oldenburg International Film Festival", logo:"images/image-a66f0e116b3d793a.webp"},
    {slug:"rhodeisland", name:"Rhode Island International Film Festival", logo:"images/image-ad8d2825df8d0218.webp"},
    {slug:"worldfest", name:"WorldFest Flagstaff", logo:"images/image-680bad0d75c7b33e.webp"}
  ];

  var byslug = {};
  PROJECTS.forEach(function(p){ byslug[p.slug]=p; });

  /* Hero carousel — placeholder tone art + motif per slide. Once real stills
     are supplied, give a slide an "image" (URL or data URI) and it will be
     used as the background-image in place of the tone gradient. */
  var HERO_SLIDES = [
    {tone:1, motif:"mountain", image:"images/image-a617d006416f85a1.webp"},
    {tone:5, motif:"crown", image:"images/image-a247b2fef617dce4.webp", imagePosition:"center 25%"},
    {tone:3, image:IMG_THIKSEY},
    {tone:2, video:"media/banner-3.mp4", poster:"media/banner-3-poster.jpg"}
  ];

  /* ---------------------------- RENDER HELPERS ---------------------------- */

  function loadBackground(el){
    el.setAttribute("style", el.getAttribute("data-bg-style"));
    el.removeAttribute("data-bg-style");
  }
  var backgroundObserver = "IntersectionObserver" in window ? new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ loadBackground(entry.target); backgroundObserver.unobserve(entry.target); }
    });
  }, {rootMargin:"300px"}) : null;
  function observeBackgrounds(){
    if(backgroundObserver) backgroundObserver.disconnect();
    document.querySelectorAll(".view.active [data-bg-style]").forEach(function(el){
      if(backgroundObserver) backgroundObserver.observe(el); else loadBackground(el);
    });
  }

  function toneClass(n){ return "tone-"+(((n-1)%6)+1); }

  /* When a project has a real `poster` photo, layer a legibility scrim over it
     instead of the flat tone gradient; falls back to the tone treatment otherwise. */
  function artStyle(imageUrl, position){
    if(!imageUrl) return "";
    return ' data-bg-style="background-image:linear-gradient(0deg, rgba(var(--media-scrim),.92) 0%, rgba(var(--media-scrim),.08) 45%, transparent 72%), url(&quot;'+imageUrl+'&quot;); background-size:cover; background-position:'+(position||"center")+';"';
  }

  function posterCard(p){
    var a=document.createElement("a");
    a.className="card-link";
    a.href="#/projects/"+p.slug;
    var mark = p.poster ? "" : '<div class="mark">'+p.title.charAt(0)+'</div>';
    a.innerHTML =
      '<div class="poster"><div class="tint '+toneClass(p.tone)+'"'+artStyle(p.poster, p.posterPosition)+'></div>'+mark+
      '<div class="frame-info"><span class="p-type">'+p.type+'</span><div class="p-title">'+p.title+'</div></div></div>'+
      '<div class="card-caption"><span class="t">'+p.title+'</span><span class="g">'+p.status+'</span></div>'+
      (p.workingTitle ? '<span class="card-note">Working Titles</span>' : "");
    return a;
  }

  var heroTimer=null;
  function initHeroCarousel(){
    var track=document.getElementById("heroCarousel");
    if(!track || track.dataset.built) return;
    track.dataset.built="1";

    // Preserve the first image already rendered by HTML; create later slides on demand.
    for(var slideIndex=track.children.length; slideIndex<HERO_SLIDES.length; slideIndex++){
      var placeholder=document.createElement("div");
      placeholder.className="hero-slide";
      placeholder.dataset.i=slideIndex;
      track.appendChild(placeholder);
    }
    function ensureSlide(i){
      var el=track.children[i];
      if(el.children.length) return;
      var s=HERO_SLIDES[i];
      if(s.video){
        el.innerHTML='<video muted loop playsinline preload="none" poster="'+s.poster+'"><source src="'+s.video+'" type="video/mp4"></video>';
        el.querySelector("video").muted=true;
      } else {
        var art=document.createElement("div");
        art.className="art "+toneClass(s.tone);
        art.style.backgroundImage='url("'+s.image+'")';
        art.style.backgroundSize="cover";
        art.style.backgroundPosition=s.imagePosition||"center";
        el.appendChild(art);
      }
    }

    var dots=document.getElementById("heroDots");
    dots.innerHTML = HERO_SLIDES.map(function(s,i){
      return '<button aria-label="Show slide '+(i+1)+'"'+(i===0?' class="active"':"")+' data-i="'+i+'"></button>';
    }).join("");

    var slideEls = track.querySelectorAll(".hero-slide");
    var dotEls = dots.querySelectorAll("button");
    var idx=0;

    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function playSlide(i){
      slideEls.forEach(function(el, n){
        var v = el.querySelector("video");
        if(!v) return;
        if(n === i && !reduced){
          var pr = v.play();
          if(pr && pr.catch) pr.catch(function(){});
        } else {
          v.pause();
          if(n !== i) { try{ v.currentTime = 0; }catch(e){} }
        }
      });
    }

    function paint(i){
      ensureSlide(i);
      slideEls[idx].classList.remove("active");
      dotEls[idx].classList.remove("active");
      idx=i;
      slideEls[idx].classList.add("active");
      dotEls[idx].classList.add("active");
      playSlide(idx);
    }
    playSlide(0);

    var wm = document.getElementById("heroWatermark");
    var darkLogo = document.querySelector(".wordmark-dark-logo");
    if(wm && darkLogo) wm.src = darkLogo.src;

    dots.addEventListener("click", function(e){
      var b=e.target.closest("button");
      if(!b) return;
      paint(parseInt(b.getAttribute("data-i"),10));
      restartTimer();
    });

    function restartTimer(){
      if(heroTimer) clearInterval(heroTimer);
      if(reduced || HERO_SLIDES.length<2) return;
      heroTimer=setInterval(function(){
        if(!document.hidden && track.closest(".view").classList.contains("active")) paint((idx+1)%HERO_SLIDES.length);
      }, 6000);
    }
    restartTimer();

    var cue=document.getElementById("heroScrollCue");
    cue.addEventListener("click", function(){
      var intro=document.querySelector(".hero-intro");
      if(intro) intro.scrollIntoView({behavior: reduced ? "auto" : "smooth"});
    });
  }

  function festBySlug(slug){
    return FESTIVALS.filter(function(f){return f.slug===slug;})[0] || null;
  }
  function festTile(f){
    return '<div><div class="fest-tile"><img loading="lazy" decoding="async" src="'+f.logo+'" alt="'+f.name+'"></div>'+
           '<span class="fest-name">'+f.name+'</span></div>';
  }
  var AWARDS_BY_PERSON = {
    festLina:["tiff","cannes","berlinale","iffi","traverse"],
    festRichard:["austin","oldenburg","rhodeisland","worldfest"]
  };
  function renderAwards(){
    Object.keys(AWARDS_BY_PERSON).forEach(function(id){
      var el = document.getElementById(id);
      if(!el) return;
      el.innerHTML = AWARDS_BY_PERSON[id].map(festBySlug).filter(Boolean).map(festTile).join("");
    });
  }

  function renderHome(){
    initHeroCarousel();

    var feat = document.getElementById("homeFeatured");
    feat.innerHTML="";
    PROJECTS.filter(function(p){return p.featured;}).forEach(function(p){ feat.appendChild(posterCard(p)); });

    var lau = document.getElementById("homeLaurels");
    lau.innerHTML = FESTIVALS.map(festTile).join("");
  }

  function renderTeam(){
    var grid = document.getElementById("teamGrid");
    grid.innerHTML="";
    TEAM.forEach(function(t){
      var btn=document.createElement("button");
      btn.className="team-card";
      btn.setAttribute("data-slug", t.slug);
      var art = t.photo
        ? '<div class="headshot" data-bg-style="background-image:url(&quot;'+t.photo+'&quot;); background-size:cover; background-position:center;"></div>'
        : '<div class="headshot"><div class="initials">'+t.initials+'</div></div>';
      btn.innerHTML =
        art+
        '<div class="name">'+t.name+'</div>'+
        '<div class="role">'+t.role+'</div>'+
        '<div class="prompt">View full bio →</div>';
      btn.addEventListener("click", function(){ openBio(t.slug); });
      grid.appendChild(btn);
    });
  }

  function renderProjectsGrid(){
    var grid=document.getElementById("projectsGrid");
    grid.innerHTML="";
    PROJECTS.forEach(function(p){ grid.appendChild(posterCard(p)); });
  }

  function renderProject(slug){
    var p = byslug[slug];
    if(!p){ location.hash="#/projects"; return; }

    document.getElementById("pdType").textContent=p.type;
    document.getElementById("pdTitle").textContent=p.title;
    document.getElementById("pdStatus").textContent=p.status;
    var heroTint=document.querySelector("#pdHero .tint");
    heroTint.className="tint "+toneClass(p.tone);
    if(p.heroImage){
      heroTint.style.backgroundImage = 'url("'+p.heroImage+'")';
      heroTint.style.backgroundSize = "cover";
      heroTint.style.backgroundPosition = p.heroImagePosition || "center";
    } else {
      heroTint.style.backgroundImage = "";
      heroTint.style.backgroundSize = "";
      heroTint.style.backgroundPosition = "";
    }

    document.getElementById("pdFormat").textContent = p.format || "";
    var syn = document.getElementById("pdSynopsis");
    syn.innerHTML = "";
    (Array.isArray(p.synopsis) ? p.synopsis : [p.synopsis]).forEach(function(para){
      var el = document.createElement("p");
      el.textContent = para;
      syn.appendChild(el);
    });

    var pdTint = document.querySelector("#pdPoster .tint");
    pdTint.className="tint "+toneClass(p.tone);
    if(p.poster){
      pdTint.style.backgroundImage = 'linear-gradient(0deg, rgba(var(--media-scrim),.92) 0%, rgba(var(--media-scrim),.08) 45%, transparent 72%), url("'+p.poster+'")';
      pdTint.style.backgroundSize = "cover";
      pdTint.style.backgroundPosition = p.posterPosition || "center";
    } else {
      pdTint.style.backgroundImage = "";
      pdTint.style.backgroundSize = "";
      pdTint.style.backgroundPosition = "";
    }
    document.getElementById("pdPosterMark").textContent = p.poster ? "" : p.title.charAt(0);

    document.getElementById("pdCredits").innerHTML = p.credits.map(function(c){
      return '<span class="role">'+c.role+'</span>'+c.name;
    }).join("<br>");

    document.getElementById("pdSocial").innerHTML =
      '<a href="mailto:info@karmalinafilms.com" aria-label="Email">✉</a>'+
      '<a href="#/contact" aria-label="Contact">@</a>';

    /* Only titles with real stills show the section at all — no placeholder tiles. */
    var gal = document.getElementById("pdGallery");
    var stills = p.stills || [];
    document.getElementById("pdStillsSection").hidden = stills.length === 0;
    gal.innerHTML = "";
    stills.forEach(function(srcUrl, i){
      var pos = (p.stillsPosition && p.stillsPosition[i]) || "center";
      var d = document.createElement("div");
      d.className = "still";
      d.innerHTML = '<div class="tint" data-bg-style="background-image:url(&quot;'+srcUrl+'&quot;); background-size:cover; background-position:'+pos+';"></div>';
      gal.appendChild(d);
    });

    var teamWrap = document.getElementById("pdTeam");
    function initialsOf(name){
      return name.split(" ").map(function(w){return w.charAt(0);}).join("").slice(0,2).toUpperCase();
    }
    function personBySlug(slug){
      return TEAM.filter(function(x){return x.slug===slug;})[0] ||
             CREW.filter(function(x){return x.slug===slug;})[0] || null;
    }
    var members = (p.team||[]).map(function(m){
      var ref = (typeof m === "string") ? m : m.ref;
      if(ref){
        var t = personBySlug(ref);
        if(!t) return null;
        /* A project role (e.g. "Writer & Producer" here vs "Producer / Director"
           company-wide) wins over the person's default role. Only people with a
           bio are clickable through to the drawer. */
        return {
          name:t.name,
          role:(typeof m === "object" && m.role) ? m.role : (t.role||""),
          initials:t.initials||initialsOf(t.name),
          slug:t.bio ? t.slug : null,
          photo:t.photo||null
        };
      }
      return {name:m.name, role:m.role||"", initials:initialsOf(m.name), slug:null, photo:m.photo||null};
    }).filter(Boolean);
    document.getElementById("pdTeamSection").hidden = members.length === 0;
    if(members.length){
      teamWrap.innerHTML = members.map(function(t){
        var tag = t.slug ? "button" : "div";
        var art = t.photo
          ? '<div class="headshot" data-bg-style="background-image:url(&quot;'+t.photo+'&quot;); background-size:cover; background-position:center;"></div>'
          : '<div class="headshot"><div class="initials">'+t.initials+'</div></div>';
        var roleHTML = t.role ? '<span class="role">'+t.role+'</span>' : "";
        return "<"+tag+' class="team-mini-card"'+(t.slug?' data-slug="'+t.slug+'"':"")+">"+
          art+
          '<div class="name">'+t.name+'</div>'+
          roleHTML+
          "</"+tag+">";
      }).join("");
      teamWrap.querySelectorAll(".team-mini-card[data-slug]").forEach(function(btn){
        btn.addEventListener("click", function(){ openBio(btn.getAttribute("data-slug")); });
      });
    } else {
      teamWrap.innerHTML = "";
    }

    var otherWrap = document.getElementById("pdOtherProjects");
    otherWrap.innerHTML = "";
    PROJECTS.filter(function(o){ return o.slug!==p.slug; })
      .sort(function(a,b){ return (b.featured?1:0)-(a.featured?1:0); })
      .slice(0,3)
      .forEach(function(o){ otherWrap.appendChild(posterCard(o)); });

    window.scrollTo(0,0);
  }

  /* ---------------------------- BIO DRAWER ---------------------------- */
  var drawer=document.getElementById("bioDrawer");
  var backdrop=document.getElementById("drawerBackdrop");
  function openBio(slug){
    var t=TEAM.filter(function(x){return x.slug===slug;})[0];
    if(!t) return;
    document.getElementById("drawerName").textContent=t.name;
    document.getElementById("drawerRole").textContent=t.role;
    document.getElementById("drawerBio").innerHTML = t.bio.map(function(p){return "<p>"+p+"</p>";}).join("");
    document.getElementById("drawerLinks").innerHTML = t.links.map(function(l){
      return '<a class="link-arrow" href="'+l.href+'" target="_blank" rel="noopener">'+l.label+' ↗</a>';
    }).join("");
    drawer.classList.add("open");
    backdrop.classList.add("open");
    document.getElementById("drawerClose").focus();
  }
  function closeBio(){
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
  }
  document.getElementById("drawerClose").addEventListener("click", closeBio);
  backdrop.addEventListener("click", closeBio);
  document.addEventListener("keydown", function(e){ if(e.key==="Escape") closeBio(); });

  /* ---------------------------- ROUTER ---------------------------- */
  var views = document.querySelectorAll(".view");
  var navLinks = document.querySelectorAll("nav.primary a");

  function route(){
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/").filter(Boolean);
    var name = parts[0] || "home";

    var viewName = name;
    if(name==="projects" && parts[1]){ viewName="project"; }

    views.forEach(function(v){ v.classList.toggle("active", v.getAttribute("data-view")===viewName); });

    navLinks.forEach(function(a){
      var r=a.getAttribute("data-route");
      a.removeAttribute("aria-current");
      if(r===name || (r==="projects" && viewName==="project")) a.setAttribute("aria-current","page");
    });

    if(viewName==="home") renderHome();
    if(viewName==="about") renderTeam();
    if(viewName==="projects") renderProjectsGrid();
    if(viewName==="awards") renderAwards();
    if(viewName==="project") renderProject(parts[1]);

    observeBackgrounds();
    if(viewName!=="home") document.querySelectorAll("#heroCarousel video").forEach(function(v){v.pause();});
    closeMobileNav();
    closeBio();
    window.scrollTo(0,0);
  }
  /* Stop the browser restoring the previous scroll offset on hash navigation,
     which otherwise lands you mid-page on the page you just opened. */
  if("scrollRestoration" in history){ history.scrollRestoration = "manual"; }
  window.addEventListener("hashchange", route);

  /* ---------------------------- MOBILE NAV ---------------------------- */
  var navEl=document.getElementById("primaryNav");
  var toggle=document.getElementById("navToggle");
  toggle.addEventListener("click", function(){
    var open = navEl.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true":"false");
  });
  function closeMobileNav(){ navEl.classList.remove("open"); toggle.setAttribute("aria-expanded","false"); }

  /* ---------------------------- THEME TOGGLE ---------------------------- */
  var root=document.documentElement;
  var themeBtn=document.getElementById("themeToggle");
  themeBtn.addEventListener("click", function(){
    var cur = root.getAttribute("data-theme");
    var mql = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var next;
    if(!cur){ next = mql ? "light" : "dark"; }
    else if(cur==="dark"){ next="light"; }
    else { next="dark"; }
    root.setAttribute("data-theme", next);
    try{ localStorage.setItem("kl-theme", next); }catch(e){}
  });
  try{
    var saved=localStorage.getItem("kl-theme");
    if(saved) root.setAttribute("data-theme", saved);
  }catch(e){}

  /* ---------------------------- INIT ---------------------------- */
  route();
})();
