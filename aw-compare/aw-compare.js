/* ===== AuthorWings Compare Section — JavaScript tab (OPTIONAL: only powers the live sliders + keyboard + memory) ===== */
(function () {
  'use strict';
  var STORE_KEY = 'aw-compare';
  var BARS = ['aw','diy','trad','vanity','hybrid'];
  function money(n){ return '$' + Math.round(n).toLocaleString('en-US'); }
  function amountFor(k, pool){ var a; if(k==='aw')a=pool-5795;else if(k==='diy')a=pool-10000;else if(k==='trad')a=pool*0.15+5000;else if(k==='vanity')a=pool*0.40-8000;else a=pool*0.50-15000; return Math.max(0,a); }
  function init(){
    var root = document.getElementById('aw-compare');
    if (!root || root.__awInit) return; root.__awInit = true;
    var radios = [root.querySelector('#awc-t0'), root.querySelector('#awc-t1'), root.querySelector('#awc-t2')];
    var earn = root.querySelector('[data-role=earn]');
    var yrs  = root.querySelector('[data-role=years]');
    function currentTab(){ for (var i=0;i<3;i++) if (radios[i] && radios[i].checked) return i; return 0; }
    function setTab(i){ if (radios[i]) { radios[i].checked = true; save(); } }
    function save(){ try { localStorage.setItem(STORE_KEY, JSON.stringify({ tab: currentTab(), annualEarn: earn?+earn.value:10000, years: yrs?+yrs.value:5 })); } catch(e){} }
    function load(){ try { var s = JSON.parse(localStorage.getItem(STORE_KEY) || 'null'); if (!s) return; if (typeof s.tab==='number' && radios[s.tab]) radios[s.tab].checked = true; if (earn && typeof s.annualEarn==='number') earn.value = Math.min(40000, Math.max(2000, s.annualEarn)); if (yrs && typeof s.years==='number') yrs.value = Math.min(10, Math.max(1, s.years)); } catch(e){} }
    function update(){
      if (!earn || !yrs) return;
      var annual=+earn.value, years=+yrs.value, pool=annual*years, aL=money(annual), pL=money(pool);
      var amt={}; BARS.forEach(function(k){ amt[k]=amountFor(k,pool); });
      var order=Object.keys(amt).sort(function(a,b){ return amt[b]-amt[a]; });
      var rank={}; order.forEach(function(k,i){ rank[k]=i; });
      var max=1; for (var k in amt) if (amt[k]>max) max=amt[k];
      var mult=(amt.aw/Math.max(amt.trad,1)).toFixed(1);
      var q=function(s){ return root.querySelector(s); };
      q('[data-role=years-title]').textContent = years + ' years';
      q('[data-role=sub]').innerHTML = 'Net author earnings on a book earning <strong class="awc-g">' + aL + '</strong>/yr for ' + years + ' years → <strong class="awc-g">' + pL + '</strong> in total royalties.';
      q('[data-role=hwc]').innerHTML = '<strong class="awc-d">How we compare:</strong> A book earning <strong class="awc-g">' + aL + '</strong> a year for ' + years + ' years generates <strong class="awc-g">' + pL + '</strong> in total royalties. <em>Royalty share</em> is the percentage of every sale the author keeps for the life of the book; <em>net dollars</em> is what actually reaches the author after up-front fees, advances, and time costs. AuthorWings shown at $5,795. Hybrid at a $15,000 fee (midpoint of the $3k–$25k+ range), Vanity at $8,000, Traditional at a $5,000 advance with royalties at the 15% upper bound. DIY net reflects 100% royalties minus 200 hours of unpaid work valued at $50/hr.';
      q('[data-role=slabel-earn]').textContent = aL + '/yr';
      q('[data-role=slabel-years]').textContent = years + ' years';
      BARS.forEach(function(k){ var el=root.querySelector('.awc-barrow[data-key='+k+']'); if(!el) return; el.style.order=rank[k]; el.querySelector('.awc-fill').style.width=Math.max(3,amt[k]/max*100).toFixed(1)+'%'; el.querySelector('.awc-amt').textContent=money(amt[k]); });
      q('[data-role=banner-mult]').textContent = mult + '×';
      q('[data-role=banner-text]').innerHTML = 'More money kept by AuthorWings authors over ' + years + ' years vs. Traditional Publishing on the same book — <strong class="awc-w">' + money(amt.aw) + '</strong> vs. <strong class="awc-w">' + money(amt.trad) + '</strong>. The $5,795 is a one-time fee, paid once, never recurring.';
    }
    load();
    if (earn && yrs){ earn.addEventListener('input', function(){ update(); save(); }); yrs.addEventListener('input', function(){ update(); save(); }); update(); }
    radios.forEach(function(r){ if (r) r.addEventListener('change', save); });
    var section = root.querySelector('section');
    if (section){ section.setAttribute('tabindex','0'); section.addEventListener('keydown', function(e){ if (e.target && e.target.tagName==='INPUT') return; if (e.key==='ArrowRight') setTab((currentTab()+1)%3); else if (e.key==='ArrowLeft') setTab((currentTab()+2)%3); }); }
  }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
