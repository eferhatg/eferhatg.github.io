function scrollPageTo(a,b=500){const c=function(a,e,b,c){return(a/=c/2,1>a)?b/2*a*a+e:(a--,-b/2*(a*(a-2)-1)+e)};return new Promise((d,e)=>{const f=document.scrollingElement;'string'==typeof a&&(a=document.querySelector(a)||e()),'number'!=typeof a&&(a=a.getBoundingClientRect().top+f.scrollTop);let g=f.scrollTop,h=a-g,i=0,j=20;const k=function(){i+=j;let a=c(i,g,h,b);f.scrollTop=a,i<b?setTimeout(k,j):d()};k()})}document.getElementById('stories').addEventListener('click',function(){scrollPageTo(document.getElementById('section-stories'),2e3)}),document.getElementById('navbar-burger').addEventListener('click',function(){document.querySelector('.navbar-menu').classList.toggle('is-active')}),document.addEventListener('DOMContentLoaded',()=>{// VARIABLES
const a=Array.from(document.querySelectorAll('.underline--magical')),b=[{name:'warmFlame',direction:'90deg',colors:['#ff9a9e','#fad0c4'],positions:['0%','100%']},{name:'youngPassion',direction:'90deg',colors:['#ff8177','#ff867a','#ff8c7f','#f99185','#cf556c','#b12a5b'],positions:['0%','0%','21%','52%','78%','100%']},{name:'newLife',direction:'to right',colors:['#43e97b','#38f9d7'],positions:['0%','100%']},{name:'temptingAzure',direction:'120deg',colors:['#84fab0','#8fd3f4'],positions:['0%','100%']},{name:'ripeMalinka',direction:'120deg',colors:['#f093fb','#f5576c'],positions:['0%','100%']},{name:'trueSunset',direction:'to right',colors:['#fa709a','#fee140'],positions:['0%','100%']},{name:'plumPlate',direction:'135deg',colors:['#667eea','#764ba2'],positions:['0%','100%']},{name:'itmeoBranding',direction:'180deg',colors:['#2af598','#009efd'],positions:['0%','100%']},{name:'deepBlue',direction:'to right',colors:['#6a11cb','#2575fc'],positions:['0%','100%']},{name:'sweetPeriod',direction:'to top',colors:['#3f51b1','#5a55ae','#7b5fac','#8f6aae','#a86aa4','#cc6b8e','#f18271','#f3a469','#f7c978'],positions:['0%','13%','25%','38%','50%','62%','75%','87%','100%']}],c=a=>Math.floor(Math.random()*(a-1)),d=(a,b)=>a.map((a,c)=>`${a} ${b[c]}`).join(', '),e=(a=>b=>{a.forEach(a=>{a.style.backgroundImage=b})})(a),f=a=>`linear-gradient(${a.direction}, ${d(a.colors,a.positions)})`;(async(a,d)=>{const e=b,g=f(e[c(e.length)]);d(g)})(b,e)});