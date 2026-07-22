/* ===== AuthorWings Compare Section — tab keyboard nav + tab memory (earnings sliders removed) ===== */
(function () {
  'use strict';
  var STORE_KEY = 'aw-compare';
  function init(){
    var root = document.getElementById('aw-compare');
    if (!root || root.__awInit) return; root.__awInit = true;
    var radios = [root.querySelector('#awc-t0'), root.querySelector('#awc-t1'), root.querySelector('#awc-t2')];
    function currentTab(){ for (var i=0;i<3;i++) if (radios[i] && radios[i].checked) return i; return 0; }
    function setTab(i){ if (radios[i]) { radios[i].checked = true; save(); } }
    function save(){ try { localStorage.setItem(STORE_KEY, JSON.stringify({ tab: currentTab() })); } catch(e){} }
    function load(){ try { var s = JSON.parse(localStorage.getItem(STORE_KEY) || 'null'); if (s && typeof s.tab==='number' && radios[s.tab]) radios[s.tab].checked = true; } catch(e){} }
    load();
    radios.forEach(function(r){ if (r) r.addEventListener('change', save); });
    var section = root.querySelector('section');
    if (section){ section.setAttribute('tabindex','0'); section.addEventListener('keydown', function(e){ if (e.target && e.target.tagName==='INPUT') return; if (e.key==='ArrowRight') setTab((currentTab()+1)%3); else if (e.key==='ArrowLeft') setTab((currentTab()+2)%3); }); }
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
