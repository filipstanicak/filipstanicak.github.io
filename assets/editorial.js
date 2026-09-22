/* Progressive enhancement: all content stays available without animation. */
(() => {
  document.querySelectorAll('[data-expertise]').forEach(link => link.addEventListener('click', () => {
    document.querySelector(`.chip[data-filter="${link.dataset.expertise}"]`)?.click();
  }));
  const translateControls = () => {
    const en = document.documentElement.lang === 'en';
    const visible = [...document.querySelectorAll('#projectGrid .project')].filter(card => !card.hidden).length;
    document.querySelector('.project-count').textContent = en ? `${visible} of 8 client projects` : `${visible} von 8 Kundenprojekten`;
  };
  translateControls();
  document.querySelectorAll('[data-lang-set], .chip').forEach(button => button.addEventListener('click', translateControls));
  const navLinks = [...document.querySelectorAll('.nav__links a')];
  const updateNavigation = () => {
    const offset = document.querySelector('.nav').offsetHeight + 160;
    let active = null;
    navLinks.forEach(link => {
      if (document.querySelector(link.hash).getBoundingClientRect().top <= offset) active = link;
    });
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4) active = navLinks.at(-1);
    navLinks.forEach(link => {
      if (link === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  let scheduled = false;
  addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(() => { updateNavigation(); scheduled = false; }); }
  }, {passive:true});
  addEventListener('resize', updateNavigation);
  updateNavigation();
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  const quote = document.querySelector('.intro-quote');
  let motion;
  const buildMotion = () => {
    motion?.revert();
    quote.textContent = quote.textContent;
    motion = gsap.matchMedia();
    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const words = quote.textContent.trim().split(/\s+/);
      quote.replaceChildren(...words.flatMap((word, index) => {
        const span = document.createElement('span');
        span.className = 'word'; span.textContent = word;
        return index ? [document.createTextNode(' '), span] : [span];
      }));
      gsap.fromTo(quote.querySelectorAll('.word'), {opacity:.65}, {opacity:1,stagger:.08,ease:'none',scrollTrigger:{trigger:quote,start:'top 92%',end:'center 55%',scrub:1}});
    });
    motion.add('(min-width: 1000px) and (prefers-reduced-motion: no-preference)', () => {
      // Filterable cards must stay in normal flow: pin spacers reserve stale
      // heights when filters, disclosures or translations change the layout.
      document.querySelectorAll('.project--featured:not([hidden]) .case-evidence').forEach(evidence => {
        gsap.fromTo(evidence, {opacity:.8}, {opacity:1,ease:'none',scrollTrigger:{trigger:evidence,start:'top 95%',end:'top 60%',scrub:true}});
      });
    });
    ScrollTrigger.refresh();
  };
  buildMotion();
  document.querySelectorAll('[data-lang-set]').forEach(button => button.addEventListener('click', () => {
    translateControls(); buildMotion();
  }));
  document.querySelectorAll('.chip').forEach(button => button.addEventListener('click', buildMotion));
  document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', buildMotion));
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  document.querySelectorAll('img').forEach(image => image.addEventListener('load', () => ScrollTrigger.refresh()));
})();
