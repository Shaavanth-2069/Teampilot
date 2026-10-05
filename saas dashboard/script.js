
const TEAM_KEY = "saasforge-team-v1";
const defaultTeam = [
  {name:"G.SHAAVANTH",role:"Team Leader",detail:"Product & Project Lead",email:"shaavanth@example.com",status:"Active"},
  {name:"Y.CHAKRADHAR REDDY",role:"UI Developer",detail:"Frontend & Interaction",email:"chakradharr@example.com",status:"Active"},
  {name:"M.SURYA NIVAS REDDY",role:"UI Developer",detail:"Dashboard & Data UI",email:"suryanivas@example.com",status:"Active"},
];
function getTeam(){try{return JSON.parse(localStorage.getItem(TEAM_KEY))||defaultTeam}catch{return defaultTeam}}
function saveTeam(t){localStorage.setItem(TEAM_KEY,JSON.stringify(t)); renderTeam?.(); renderMemberCards?.(); renderContactLeader?.()}
function initials(name){return name.split(/\s+/).map(x=>x[0]).join("").slice(0,2).toUpperCase()}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function openTeamEditor(index){
  const t=getTeam(), m=t[index];
  const modal=document.querySelector("#teamModal"); if(!modal)return;
  modal.querySelector("[name=name]").value=m.name; modal.querySelector("[name=role]").value=m.role;
  modal.querySelector("[name=detail]").value=m.detail; modal.querySelector("[name=email]").value=m.email;
  modal.dataset.index=index; modal.classList.add("open");
}
function closeModal(){document.querySelectorAll(".modal").forEach(x=>x.classList.remove("open"))}
document.addEventListener("click",e=>{
  if(e.target.matches("[data-close]")) closeModal();
  if(e.target.classList.contains("modal")) closeModal();
});
const form=document.querySelector("#teamForm");
if(form) form.addEventListener("submit",e=>{
  e.preventDefault(); const i=+document.querySelector("#teamModal").dataset.index; const t=getTeam();
  const fd=new FormData(form); t[i]={...t[i],name:fd.get("name"),role:fd.get("role"),detail:fd.get("detail"),email:fd.get("email")}; saveTeam(t); closeModal();
});
function renderMemberCards(){
  const box=document.querySelector("#memberCards"); if(!box)return;
  box.innerHTML=getTeam().map((m,i)=>`<article class="card tilt reveal visible"><div class="avatar">${initials(m.name)}</div><h3>${esc(m.name)}</h3><p class="muted">${esc(m.role)} · ${esc(m.detail)}</p><p>${esc(m.email)}</p><button class="btn" onclick="openTeamEditor(${i})">Edit member</button></article>`).join("");
}

function renderContactLeader(){
  const m=getTeam()[0];
  document.querySelectorAll('[data-leader-name]').forEach(x=>x.textContent=m.name);
  document.querySelectorAll('[data-leader-role]').forEach(x=>x.textContent=m.role+' · '+m.detail);
  document.querySelectorAll('[data-leader-email]').forEach(x=>{x.textContent=m.email; if(x.tagName==='A')x.href='mailto:'+m.email});
  document.querySelectorAll('[data-team-names]').forEach(x=>x.textContent=getTeam().slice(1).map(a=>a.name).join(' · '));
}

function renderTeam(){
  const body=document.querySelector("#teamTableBody"); if(!body)return;
  body.innerHTML=getTeam().map((m,i)=>`<tr><td><span class="avatar">${initials(m.name)}</span>${esc(m.name)}</td><td>${esc(m.role)}</td><td>${esc(m.detail)}</td><td><span class="status">${esc(m.status)}</span></td><td><button class="btn" onclick="openTeamEditor(${i})">Edit</button></td></tr>`).join("");
}
function setupReveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
  document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
}
function setupTilt(){
  document.querySelectorAll(".tilt").forEach(el=>{
    el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*7}deg) translateY(-4px)`});
    el.addEventListener("pointerleave",()=>el.style.transform="");
  });
}
function setupCounter(){
  const screen=document.querySelector("#counterScreen"), n=document.querySelector("#counterNumber"); if(!screen||!n)return;
  let start=performance.now(), duration=3000;
  function tick(now){let p=Math.min((now-start)/duration,1), eased=1-Math.pow(1-p,3); n.textContent=Math.floor(eased*100); if(p<1)requestAnimationFrame(tick); else{n.textContent="100";setTimeout(()=>screen.classList.add("done"),450)}}
  requestAnimationFrame(tick);
}
function setupYear(){document.querySelectorAll("[data-year]").forEach(x=>x.textContent=new Date().getFullYear())}
function setupSearch(inputSel,itemSel){
  const input=document.querySelector(inputSel); if(!input)return;
  input.addEventListener("input",()=>{const q=input.value.toLowerCase();document.querySelectorAll(itemSel).forEach(x=>x.style.display=x.textContent.toLowerCase().includes(q)?"":"none")});
}
function setupNav(){
  const menu=document.querySelector("[data-menu]"); if(menu)menu.addEventListener("click",()=>document.querySelector(".navlinks").classList.toggle("open"));
}
document.addEventListener("DOMContentLoaded",()=>{setupReveal();setupTilt();setupYear();renderTeam();renderMemberCards();setupNav();});

/* TeamPilot real-time presentation effects */
function setupScroll3D(){
  const update=()=>{
    const y=window.scrollY;
    const vh=window.innerHeight;
    document.documentElement.style.setProperty("--logo-y", `${Math.min(y*.035,38)}px`);
    document.documentElement.style.setProperty("--logo-r", `${Math.sin(y/700)*3}deg`);
    document.documentElement.style.setProperty("--logo-s", `${1+Math.min(y/12000,.035)}`);
    document.querySelectorAll(".scroll-3d").forEach((el,i)=>{
      const r=el.getBoundingClientRect(), center=r.top+r.height/2, delta=(center-vh/2)/vh;
      const rotate=Math.max(-7,Math.min(7,-delta*6));
      const lift=Math.max(-24,Math.min(24,-delta*18));
      el.style.transform=`perspective(1200px) rotateX(${rotate}deg) translate3d(0,${lift}px,0)`;
    });
    document.querySelectorAll(".scroll-scale").forEach(el=>{
      const r=el.getBoundingClientRect(), center=r.top+r.height/2, delta=Math.abs(center-vh/2)/(vh/2);
      const scale=1+Math.max(0,Math.min(.075,1-delta)*.075);
      el.style.setProperty("--scale",scale.toFixed(3));
    });
  };
  window.addEventListener("scroll",update,{passive:true}); update();
}
function setupLiveClock(){
  const nodes=document.querySelectorAll("[data-live-clock]");
  const tick=()=>nodes.forEach(n=>n.textContent=new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit",second:"2-digit"}));
  tick(); setInterval(tick,1000);
}
function setupLiveMetrics(){
  document.querySelectorAll("[data-live-number]").forEach(n=>{
    const base=Number(n.dataset.liveNumber)||1000;
    setInterval(()=>{n.textContent=(base+Math.floor(Math.random()*base*.025)).toLocaleString()},2500);
  });
}
function injectTeamEditor(){
  if(document.querySelector("#teamModal")) return;
  const wrap=document.createElement("div");
  wrap.innerHTML=`<div class="modal" id="teamModal"><div class="modal-box"><div class="modal-head"><h2>Edit team member</h2><button class="close" data-close>×</button></div><form id="teamForm"><div class="form-grid"><div class="field"><label>Name</label><input class="input" name="name" required></div><div class="field"><label>Role</label><input class="input" name="role" required></div><div class="field"><label>Details</label><input class="input" name="detail" required></div><div class="field"><label>Email</label><input class="input" name="email" type="email" required></div></div><div class="actions"><button class="btn primary">Save changes</button><button type="button" class="btn" data-close>Cancel</button></div></form></div></div>`;
  document.body.appendChild(wrap.firstElementChild);
  const f=document.querySelector("#teamForm"); if(f) f.addEventListener("submit",e=>{e.preventDefault(); const i=Number(document.querySelector("#teamModal").dataset.index||0); const t=getTeam(); const fd=new FormData(f); t[i]={...t[i],name:fd.get("name"),role:fd.get("role"),detail:fd.get("detail"),email:fd.get("email")}; saveTeam(t); closeModal();});
  document.querySelectorAll("[data-edit-team]").forEach(btn=>btn.addEventListener("click",()=>openTeamEditor(Number(btn.dataset.editTeam))));
}
const oldDOMContentLoaded = document.addEventListener;
document.addEventListener("DOMContentLoaded",()=>{setupScroll3D();setupLiveClock();setupLiveMetrics();injectTeamEditor();});

/* Post-counter demo flow */
function setupPostCounterDemo(){
  const screen=document.querySelector('#counterScreen');
  const demo=document.querySelector('#postCounterDemo');
  if(!screen||!demo)return;
  demo.classList.add('post-counter-ready');
  const check=()=>{ if(screen.classList.contains('done')){demo.classList.add('visible'); demo.scrollIntoView({behavior:'smooth',block:'start'}); window.removeEventListener('scroll',check);} };
  const obs=new MutationObserver(check); obs.observe(screen,{attributes:true,attributeFilter:['class']});
  setTimeout(check,3800);
}
document.addEventListener('DOMContentLoaded',()=>{setupPostCounterDemo();});

function setupEditButtons(){
  document.addEventListener('click',e=>{const b=e.target.closest('[data-edit-team]');if(b){e.preventDefault();openTeamEditor(Number(b.dataset.editTeam||0));}});
}
document.addEventListener('DOMContentLoaded',()=>{setupEditButtons();renderContactLeader();});
