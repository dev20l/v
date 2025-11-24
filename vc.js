(() => {
  'use strict';

  const CLICK_URL   = 'https://cdn.pixabay.com/audio/2022/03/10/audio_63c49c13c8.mp3';
  const DING_URL    = 'https://cdn.pixabay.com/audio/2021/09/28/audio_2f2b87b7a9.mp3';
  const SUCCESS_URL = 'https://cdn.pixabay.com/audio/2025/05/12/audio_582a9c9e72.mp3'; 
  const VERIFY_URL  = 'https://cdn.pixabay.com/audio/2024/05/03/audio_6130b029fd.mp3';

  const clickAudio   = document.getElementById('clickSound')   || new Audio(CLICK_URL);
  const dingAudio    = document.getElementById('dingSound')    || new Audio(DING_URL);
  const successAudio = document.getElementById('successSound') || new Audio(SUCCESS_URL);
  const verifyAudio  = document.getElementById('verifySound')  || new Audio(VERIFY_URL);

  [clickAudio, dingAudio, successAudio, verifyAudio].forEach(a => { try { a.preload = 'auto'; } catch(e){} });

  const AC  = window.AudioContext || window.webkitAudioContext;
  const ctx = AC ? new AC() : null;

  let audioUnlocked = false;
  function unlockAudio() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    if (ctx && ctx.state === 'suspended') { ctx.resume().catch(()=>{}); }

    [clickAudio, dingAudio, successAudio, verifyAudio].forEach(a => {
      try {
        a.muted = true;
        const p = a.play();
        if (p && typeof p.then === 'function') {
          p.then(() => { a.pause(); a.currentTime = 0; a.muted = false; }).catch(()=>{});
        }
      } catch(e){}
    });
  }
  document.addEventListener('pointerdown', unlockAudio, { once: true });

  function playAudio(el, { rate = 1, volume = 1 } = {}) {
    if (!el) return;
    try {
      el.pause();
      el.currentTime = 0;
      el.playbackRate = rate;
      el.volume = volume;
      el.play().catch(()=>{});
    } catch(e){}
  }

  function playDecline() {
    if (!ctx) { playAudio(clickAudio, { volume: 0.8 }); return; }
    const now  = ctx.currentTime;
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.28);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.34);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.36);
  }

  function playError() {
    if (!ctx) { playAudio(clickAudio, { volume: 0.6 }); return; }
    const now  = ctx.currentTime;
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(500, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.22);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now); osc.stop(now + 0.30);
  }

  const on   = (el, ev, fn) => el && el.addEventListener(ev, fn, { passive: true });
  const byId = id => document.getElementById(id);

  function watchHiddenFalse(el, cb) {
    if (!el) return;
    let prevHidden = el.hidden;
    const mo = new MutationObserver(() => {
      if (prevHidden !== el.hidden) {
        prevHidden = el.hidden;
        if (!el.hidden) cb(el);
      }
    });
    mo.observe(el, { attributes: true, attributeFilter: ['hidden'] });
  }

  function observeUsernameError(el) {
    if (!el) return;
    const mo = new MutationObserver(() => {
      const visible = !el.hidden && /\busername not found\b/i.test(el.textContent || '');
      if (visible) playError();
    });
    mo.observe(el, { attributes: true, childList: true, characterData: true, subtree: true });
  }

  document.addEventListener('DOMContentLoaded', () => {

    const gallery = byId('gallery');
    if (gallery) {
      gallery.addEventListener('click', (e) => {
        if (e.target.closest('.img-container')) playAudio(clickAudio, { volume: 0.95 });
      });
    }

    on(byId('continue-btn'),       'click', () => playAudio(clickAudio, { volume: 1 }));
    on(byId('popup-cancel'),       'click', () => playDecline());
    on(byId('popup-search'),       'click', () => playAudio(clickAudio, { volume: 1 })); 
    on(byId('edit-btn'),           'click', () => playAudio(clickAudio, { volume: 1 }));
    on(byId('locker-btn'),         'click', () => playAudio(clickAudio, { volume: 1 })); 
    on(byId('cta-accept-inline'),  'click', () => playAudio(clickAudio, { volume: 1 })); 

    watchHiddenFalse(byId('popup-step-success'), () => playAudio(successAudio, { volume: 1 }));

    watchHiddenFalse(byId('post-cta-inline'), () => playAudio(verifyAudio, { volume: 1 }));

    observeUsernameError(byId('popup-user-error'));
  });

  window.GAG_SFX = {
    click:   () => playAudio(clickAudio,   { volume: 1 }),
    ding:    () => playAudio(dingAudio,    { volume: 1 }),
    success: () => playAudio(successAudio, { volume: 1 }),
    verify:  () => playAudio(verifyAudio,  { volume: 1 }),
    decline: playDecline,
    error:   playError
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('#gallery .img-container').forEach(card => {
    card.classList.add('has-claim');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'claim-btn';
    btn.setAttribute('aria-label', 'Claim this reward');
    btn.innerHTML = '<span class="label">Claim</span>';

    btn.addEventListener('click', () => {
      window.GAG_SFX?.click?.();
      card.classList.add('selected');      
      btn.remove();                       )
      if (typeof card.click === 'function') card.click();
      else card.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    card.appendChild(btn);
  });
});



  (function(){
    const ROOT = document.documentElement;
    const BODY = document.body;
    const LOADER = document.getElementById('page-loader');

    ROOT.classList.add('pl-lock'); BODY.classList.add('pl-lock');

    const HIDE_AFTER_MS = 3000;

    function hideLoader(){
      if (!LOADER) return;
      LOADER.classList.add('hide');
      ROOT.classList.remove('pl-lock'); BODY.classList.remove('pl-lock');
      LOADER.addEventListener('transitionend', () => LOADER.remove(), { once:true });
    }

    const t = setTimeout(hideLoader, HIDE_AFTER_MS);

    window.skipLoader = function(){
      clearTimeout(t);
      hideLoader();
    };
  })();
