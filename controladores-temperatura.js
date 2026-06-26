(function(){
  function initDtbSeries(){
    const component=document.querySelector('.dtb-component');
    if(!component) return;
    const heroImage=component.querySelector('.dtb-hero__image');
    const productImage=component.querySelector('#dtb-family-product');
    const thumbImage=component.querySelector('#dtb-family-thumb');
    if(heroImage){
      if(productImage) productImage.src=heroImage.src;
      if(thumbImage) thumbImage.src=heroImage.src;
    }
    const buyButton=component.querySelector('#dtb-buy-series');
    const section=component.querySelector('#dtb-series-selector');
    if(buyButton && section){
      buyButton.addEventListener('click',function(event){
        event.preventDefault();
        section.scrollIntoView({behavior:'smooth',block:'start'});
      });
    }
    const option=component.querySelector('#dtb-family-option');
    const detail=component.querySelector('.dtb-family-detail');
    if(option && detail){
      option.addEventListener('click',function(){
        detail.animate([{transform:'translateY(2px)',opacity:.88},{transform:'translateY(0)',opacity:1}],{duration:260,easing:'ease-out'});
      });
    }
    const toggle=component.querySelector('#dtb-show-features');
    const more=component.querySelector('#dtb-family-more');
    if(toggle && more){
      toggle.addEventListener('click',function(){
        const open=more.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded',String(open));
        toggle.textContent=open?'Ocultar catálogo':'Catálogo PDF';
      });
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initDtbSeries);
  else initDtbSeries();
})();

(function(){
  function initDtbModelSelector(){
    const root=document.getElementById('dtb-model-selector');
    if(!root) return;
    const models=[
      {model:'DTB4824RR',size:'4824',panel:'48 x 24 mm',cutout:'44.8 x 22.0 mm',output:'R',outputLabel:'Relé (250 VCA 5 A)',event:false,optional:'Sin entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 4824, salida de relé y salida de relé.',available:true,ceitsaUrl:'https://ceitsa.com.mx/p/DTB4824RR'},
      {model:'DTB4824VR',size:'4824',panel:'48 x 24 mm',cutout:'44.8 x 22.0 mm',output:'V',outputLabel:'Pulso de voltaje (14V Máx. 40mA)',event:false,optional:'Sin entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 4824, salida de voltaje y salida de relé.',available:false,ceitsaUrl:null},
      {model:'DTB4848CR',size:'4848',panel:'48 x 48 mm',cutout:'45.0 x 45.0 mm',output:'C',outputLabel:'Corriente continua (4 a 20 mA)',event:false,optional:'Sin entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 4848, salida de corriente y salida de relé.',available:true,ceitsaUrl:'https://ceitsa.com.mx/p/DTB4848CR'},
      {model:'DTB4848LR',size:'4848',panel:'48 x 48 mm',cutout:'45.0 x 45.0 mm',output:'L',outputLabel:'Voltaje lineal (0~5 V CC, 0~10 V CC)',event:false,optional:'Sin entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 4848, salida de voltaje lineal y salida de relé.',available:true,ceitsaUrl:'https://ceitsa.com.mx/p/DTB4848LR'},
      {model:'DTB4848RR',size:'4848',panel:'48 x 48 mm',cutout:'45.0 x 45.0 mm',output:'R',outputLabel:'Relé (250 VCA 5 A)',event:false,optional:'Sin entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 4848, salida de relé y salida de relé.',available:true,ceitsaUrl:'https://ceitsa.com.mx/p/DTB4848RR'},
      {model:'DTB4848VR',size:'4848',panel:'48 x 48 mm',cutout:'45.0 x 45.0 mm',output:'V',outputLabel:'Pulso de voltaje (14V Máx. 40mA)',event:false,optional:'Sin entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 4848, salida de voltaje y salida de relé.',available:false,ceitsaUrl:null},
      {model:'DTB4896RR',size:'4896',panel:'48 x 96 mm',cutout:'44.5 x 91.5 mm',output:'R',outputLabel:'Relé (250 VCA 5 A)',event:false,optional:'Sin entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 4896, salida de relé y salida de relé.',available:false,ceitsaUrl:null},
      {model:'DTB4896RRE',size:'4896',panel:'48 x 96 mm',cutout:'44.5 x 91.5 mm',output:'R',outputLabel:'Relé (250 VCA 5 A)',event:true,optional:'Entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 4896, salida de relé y salida de relé con función de control de eventos.',available:false,ceitsaUrl:null},
      {model:'DTB4896VR',size:'4896',panel:'48 x 96 mm',cutout:'44.5 x 91.5 mm',output:'V',outputLabel:'Pulso de voltaje (14V Máx. 40mA)',event:false,optional:'Sin entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 4896, salida de voltaje y salida de relé.',available:false,ceitsaUrl:null},
      {model:'DTB9696CRE',size:'9696',panel:'96 x 96 mm',cutout:'91.0 x 91.0 mm',output:'C',outputLabel:'Corriente continua (4 a 20 mA)',event:true,optional:'Entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 9696, salida de corriente y salida de relé con función de control de eventos.',available:false,ceitsaUrl:null},
      {model:'DTB9696RR',size:'9696',panel:'96 x 96 mm',cutout:'91.0 x 91.0 mm',output:'R',outputLabel:'Relé (250 VCA 5 A)',event:false,optional:'Sin entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 9696, salida de relé y salida de relé.',available:false,ceitsaUrl:null},
      {model:'DTB9696RRE',size:'9696',panel:'96 x 96 mm',cutout:'91.0 x 91.0 mm',output:'R',outputLabel:'Relé (250 VCA 5 A)',event:true,optional:'Entrada de eventos',desc:'Controlador de temperatura Delta serie DTB tipo avanzado, tamaño de panel 9696, salida de relé y salida de relé con función de control de eventos.',available:false,ceitsaUrl:null}
    ];
    const state={query:'',size:null,output:null,event:false};
    const list=root.querySelector('#dtb-result-list');
    const count=root.querySelector('#dtb-result-count');
    const title=root.querySelector('#dtb-result-title');
    const help=root.querySelector('#dtb-result-help');
    const search=root.querySelector('#dtb-model-search');
    function baseMatch(m,test){
      if(test.size && m.size!==test.size) return false;
      if(test.output && m.output!==test.output) return false;
      if(test.event && !m.event) return false;
      if(test.query){
        const q=test.query.toLowerCase();
        const hay=[m.model,m.desc,m.outputLabel,m.panel,m.optional].join(' ').toLowerCase();
        if(!hay.includes(q)) return false;
      }
      return true;
    }
    function getResults(){return models.filter(m=>baseMatch(m,state));}
    function canUse(filter,value){
      const test={...state};
      if(filter==='event') test.event=true;
      else test[filter]=value;
      return models.some(m=>baseMatch(m,test));
    }
    function card(m){
      const whatsapp='https://wa.me/5217201185420?text='+encodeURIComponent('Hola, deseo solicitar una cotización para el controlador Delta '+m.model+'.');
      const primary=m.available
        ? `<a class="dtb-card-btn dtb-card-btn--primary" href="${m.ceitsaUrl}" target="_blank" rel="noopener">Comprar en CEITSA</a>`
        : `<a class="dtb-card-btn dtb-card-btn--quote" href="${whatsapp}" target="_blank" rel="noopener">Solicitar cotizaci&oacute;n</a>`;
      const status='Compatible';
      return `<article class="dtb-model-card">
        <div class="dtb-model-card__top"><h4 class="dtb-model-code">${m.model}</h4><span class="dtb-match">${status}</span></div>
        <p class="dtb-model-desc">${m.desc}</p>
        <div class="dtb-chip-row">
          <span class="dtb-chip">Panel ${m.panel}</span>
          <span class="dtb-chip">Recorte ${m.cutout}</span>
          <span class="dtb-chip">${m.outputLabel}</span>
          <span class="dtb-chip">${m.optional}</span>
        </div>
        <div class="dtb-model-actions">${primary}</div>
      </article>`;
    }
    function render(){
      root.querySelectorAll('[data-filter]').forEach(btn=>{
        const filter=btn.dataset.filter;
        const value=btn.dataset.value;
        const selected=filter==='event' ? state.event : state[filter]===value;
        btn.classList.toggle('is-selected',selected);
        btn.disabled=!selected && !canUse(filter,value);
      });
      const results=getResults();
      count.textContent=results.length+' modelo'+(results.length===1?'':'s');
      const active=[state.size,state.output,state.event,state.query].filter(Boolean).length;
      if(!active){
        title.textContent='Catálogo DTB';
        help.textContent='Consulta abierta de los modelos DTB. Los modelos con compra en CEITSA muestran botón azul; los demás muestran botón verde de WhatsApp.';
      }else if(results.length===1){
        title.textContent=results[0].model;
        help.textContent='Modelo encontrado según tu selección.';
      }else{
        title.textContent=results.length+' modelos compatibles';
        help.textContent='Ajusta los filtros para llegar al modelo requerido.';
      }
      list.innerHTML=results.length ? results.map(card).join('') : '<div class="dtb-empty">No existe un modelo DTB disponible con esta combinacion.</div>';
    }
    root.addEventListener('click',function(e){
      const btn=e.target.closest('[data-filter]');
      if(btn){
        const filter=btn.dataset.filter;
        const value=btn.dataset.value;
        if(filter==='event') state.event=!state.event;
        else state[filter]=state[filter]===value?null:value;
        render();
        return;
      }
      const copy=e.target.closest('[data-copy]');
      if(copy){
        const model=copy.dataset.copy;
        if(navigator.clipboard) navigator.clipboard.writeText(model);
        copy.textContent='Copiado';
        setTimeout(()=>copy.textContent='Copiar modelo',1200);
      }
    });
    search.addEventListener('input',function(){state.query=search.value.trim();render();});
    root.querySelector('#dtb-clear-selection').addEventListener('click',function(){state.query='';state.size=null;state.output=null;state.event=false;search.value='';render();});
    render();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initDtbModelSelector);
  else initDtbModelSelector();
})();

(function(){
  function initDtbCodeConfigurator(){
    const root=document.getElementById('dtb-code-configurator');
    if(!root) return;
    const models=[
      {model:'DTB4824RR',size:'4824',out1:'R',out2:'R',event:false,available:true,url:'https://ceitsa.com.mx/p/DTB4824RR'},
      {model:'DTB4824VR',size:'4824',out1:'V',out2:'R',event:false,available:false,url:null},
      {model:'DTB4848CR',size:'4848',out1:'C',out2:'R',event:false,available:true,url:'https://ceitsa.com.mx/p/DTB4848CR'},
      {model:'DTB4848LR',size:'4848',out1:'L',out2:'R',event:false,available:true,url:'https://ceitsa.com.mx/p/DTB4848LR'},
      {model:'DTB4848RR',size:'4848',out1:'R',out2:'R',event:false,available:true,url:'https://ceitsa.com.mx/p/DTB4848RR'},
      {model:'DTB4848VR',size:'4848',out1:'V',out2:'R',event:false,available:false,url:null},
      {model:'DTB4896RR',size:'4896',out1:'R',out2:'R',event:false,available:false,url:null},
      {model:'DTB4896RRE',size:'4896',out1:'R',out2:'R',event:true,available:false,url:null},
      {model:'DTB4896VR',size:'4896',out1:'V',out2:'R',event:false,available:false,url:null},
      {model:'DTB9696CRE',size:'9696',out1:'C',out2:'R',event:true,available:false,url:null},
      {model:'DTB9696RR',size:'9696',out1:'R',out2:'R',event:false,available:false,url:null},
      {model:'DTB9696RRE',size:'9696',out1:'R',out2:'R',event:true,available:false,url:null}
    ];
    const state={size:null,out1:null,out2:null,event:false};
    const els={size:root.querySelector('#dtb-code-size'),out1:root.querySelector('#dtb-code-out1'),out2:root.querySelector('#dtb-code-out2'),event:root.querySelector('#dtb-code-event'),title:root.querySelector('#dtb-code-result-title'),text:root.querySelector('#dtb-code-result-text'),action:root.querySelector('#dtb-code-result-action'),topBuy:root.querySelector('#dtb-code-top-buy')};
    const label={R:'Relé',V:'Pulso de voltaje',C:'DC',L:'Voltaje lineal'};
    function selectedCode(){return 'DTB'+(state.size||'')+(state.out1||'')+(state.out2||'')+(state.event?'E':'');}
    function findModel(){return models.find(m=>m.size===state.size && m.out1===state.out1 && m.out2===state.out2 && m.event===state.event);}
    function configMatches(m,test){
      return (!test.size || m.size===test.size) &&
        (!test.out1 || m.out1===test.out1) &&
        (!test.out2 || m.out2===test.out2) &&
        (test.event ? m.event : true);
    }
    function possible(filter,value){
      const test={...state};
      if(filter==='event') test.event=true;
      else test[filter]=value;
      return models.some(m=>configMatches(m,test));
    }
    function render(){
      els.size.textContent=state.size||'----';
      els.out1.textContent=state.out1||'-';
      els.out2.textContent=state.out2||'-';
      els.event.innerHTML=state.event?'E':'&nbsp;';
      root.querySelectorAll('[data-code-filter]').forEach(btn=>{
        const f=btn.dataset.codeFilter,v=btn.dataset.codeValue;
        const sel=f==='event'?state.event:state[f]===v;
        btn.classList.toggle('is-selected',sel);
        btn.disabled=!sel && !possible(f,v);
      });
      const complete=state.size&&state.out1&&state.out2;
      const model=complete?findModel():null;
      els.action.innerHTML='';
      if(els.topBuy){els.topBuy.classList.remove('is-visible');els.topBuy.removeAttribute('href');}
      if(!complete){
        els.title.textContent='DTB'+(state.size||'----')+(state.out1||'-')+(state.out2||'-')+(state.event?'E':'');
        els.text.textContent='Selecciona tamaño, salida tipo 1 y salida tipo 2 para identificar el modelo.';
        return;
      }
      if(!model){
        els.title.textContent=selectedCode();
        els.text.textContent='Esta combinación no corresponde a uno de los 12 modelos disponibles en la lista.';
        return;
      }
      els.title.textContent=model.model;
      els.text.textContent='Modelo compatible: panel '+model.size+', salida tipo 1 '+label[model.out1]+', salida tipo 2 '+label[model.out2]+(model.event?', con entrada de evento.':'.');
      if(model.available){
        if(els.topBuy){els.topBuy.href=model.url;els.topBuy.classList.add('is-visible');}
        els.action.innerHTML='<a class="dtb-config-btn dtb-config-btn--buy" href="'+model.url+'" target="_blank" rel="noopener">Comprar en CEITSA</a>';
      }else{
        const wa='https://wa.me/5217201185420?text='+encodeURIComponent('Hola, deseo solicitar una cotización para el controlador Delta '+model.model+'.');
        els.action.innerHTML='<a class="dtb-config-btn dtb-config-btn--quote" href="'+wa+'" target="_blank" rel="noopener">Solicitar cotización</a>';
      }
    }
    root.addEventListener('click',e=>{
      const btn=e.target.closest('[data-code-filter]');
      if(btn){
        if(btn.disabled) return;
        const f=btn.dataset.codeFilter,v=btn.dataset.codeValue;
        if(f==='event') state.event=!state.event;
        else state[f]=state[f]===v?null:v;
        render();return;
      }
    });
    root.querySelector('#dtb-code-clear').addEventListener('click',()=>{state.size=null;state.out1=null;state.out2=null;state.event=false;render();});
    render();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initDtbCodeConfigurator);
  else initDtbCodeConfigurator();
})();

(function(){
  function initDtbReferencesToggle(){
    var card=document.getElementById('dtb-reference-card');
    var toggle=document.getElementById('dtb-reference-toggle');
    if(!card || !toggle) return;
    card.classList.remove('is-collapsed');
    toggle.setAttribute('aria-expanded','true');
    toggle.addEventListener('click',function(){
      var collapsed=card.classList.toggle('is-collapsed');
      toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initDtbReferencesToggle);
  else initDtbReferencesToggle();
})();
