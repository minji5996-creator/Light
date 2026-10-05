const groups=['기본 구성과 명암','빛의 방향과 역할','빛의 성질과 패턴','시간·환경·색'];
const items=[
['three','3점 조명','Three-Point Lighting',0,'세 개의 빛으로 형태, 그림자, 윤곽을 각각 조절합니다.','주광은 앞쪽 사선, 보조광은 반대편 앞쪽, 후면광은 뒤쪽 위에 둡니다.','보조광을 끄면 그림자가 짙어지고, 후면광을 끄면 윤곽이 배경에 묻힙니다.'],
['key','주광','Key Light',0,'피사체의 형태와 주된 그림자를 결정하는 중심 조명입니다.','대표 예시는 앞쪽 약 45° 사선 위입니다. 장면의 의도에 따라 위치를 바꿀 수 있습니다.','밝은 면의 위치와 코 그림자의 방향을 보세요. 주광은 특정 배치가 아니라 역할 이름입니다.'],
['high','하이키','High-Key Lighting',0,'밝은 톤이 많고 그림자가 옅은, 낮은 대비의 스타일입니다.','큰 광원과 충분한 보조광을 사용하고 배경도 밝게 조절합니다.','밝은 부분이 날아가는 과다 노출과 다릅니다. 밝은 화면에서도 표면 디테일을 유지합니다.'],
['low','로우키','Low-Key Lighting',0,'어두운 톤을 넓게 남기고 필요한 부분만 밝히는 스타일입니다.','주광의 범위를 제한하고 보조광과 주변 반사를 줄입니다.','화면 전체를 무작정 어둡게 하기보다, 시선을 모을 부분의 밝기를 남깁니다.'],
['chi','키아로스쿠로','Chiaroscuro',0,'큰 명암 대비로 피사체의 부피와 형태를 극적으로 드러냅니다.','한쪽에서 빛을 제한적으로 비추고 반대쪽의 반사광을 억제합니다.','밝은 덩어리와 어두운 덩어리가 형태를 어떻게 나누는지 보세요. 로우키와 함께 쓸 수 있습니다.'],
['rem','렘브란트','Rembrandt Lighting',0,'그림자 쪽 눈 아래에 작은 삼각형 빛이 남는 인물 조명입니다.','주광을 앞쪽 사선 위에 두고, 코 그림자가 볼 그림자와 만나도록 위치를 조절합니다.','삼각형은 빛나는 표시가 아니라 그림자에 둘러싸인 밝은 피부입니다. 얼굴에 따라 각도가 달라집니다.'],
['fill','보조광','Fill Light',1,'주광이 만든 그림자를 밝혀 명암 대비를 조절합니다.','주광 반대편이나 카메라 가까이에 부드럽고 약한 빛을 둡니다.','보조광을 늘릴수록 그림자가 옅어집니다. 별도의 강한 그림자가 생기지 않게 조절합니다.'],
['back','후면광','Backlight',1,'뒤에서 비춰 피사체를 배경과 분리합니다.','카메라 기준 피사체 뒤쪽, 보통 약간 높은 곳에 둡니다.','얼굴 앞면보다 머리와 어깨에 빛이 생깁니다. 정면 밝기는 별도 주광으로 조절합니다.'],
['side','측면광','Side Lighting',1,'옆에서 들어오는 빛이 밝은 면과 어두운 면을 나눕니다.','대표적으로 카메라 시선 기준 약 90° 옆에 광원을 둡니다.','표면 굴곡과 질감이 강조됩니다. 완전한 반반 분할은 얼굴과 조명의 방향에 따라 달라집니다.'],
['up','아래 조명','Uplighting',1,'아래에서 위로 비추며 평소와 반대 방향의 그림자를 만듭니다.','피사체 얼굴보다 낮은 위치에서 위를 향해 비춥니다.','코 그림자가 위로 향합니다. 익숙하지 않은 그림자 때문에 불안하거나 초현실적으로 보입니다.'],
['cross','교차 조명','Cross Lighting',1,'서로 다른 방향의 두 빛이 형태를 교차해서 드러냅니다.','피사체 양쪽에서 서로 교차하는 방향으로 비춥니다.','양쪽에 하이라이트가 생깁니다. 두 조명의 세기를 다르게 하면 형태가 덜 평평해집니다.'],
['kicker','키커 조명','Kicker Light',1,'뒤쪽 측면에서 볼·턱·어깨의 특정 부분을 강조합니다.','피사체 뒤 사선에 좁은 범위의 빛을 배치합니다.','후면광보다 측면 피부까지 닿는 강조광을 보세요. 다른 조명 용어와 범위가 겹칠 수 있습니다.'],
['edge','윤곽 조명','Edge Light',1,'피사체 가장자리에 얇은 빛의 테두리를 만듭니다.','뒤쪽 사선에서 비추고 카메라에 직접 빛이 들어오지 않게 조절합니다.','림 라이트라고도 부릅니다. 후면광은 위치, 윤곽광은 보이는 효과에 초점을 둔 표현입니다.'],
['broad','브로드 조명','Broad Lighting',1,'카메라에 넓게 보이는 얼굴 쪽을 밝힙니다.','얼굴을 약간 돌린 뒤, 카메라에 더 많이 보이는 볼 쪽으로 주광을 옮깁니다.','얼굴의 넓은 면이 밝게 보입니다. 얼굴 회전 방향이 바뀌면 조명 배치도 함께 달라집니다.'],
['short','쇼트 조명','Short Lighting',1,'카메라에 좁게 보이는 얼굴 쪽을 밝힙니다.','얼굴을 돌리고 카메라에서 멀어지는 볼 쪽으로 주광을 비춥니다.','카메라에 넓게 보이는 면은 그림자에 들어갑니다. 브로드 조명과 밝은 면을 비교하세요.'],
['eye','아이 라이트','Eye Light',1,'눈에 작은 반사광을 만들어 시선과 생동감을 살립니다.','눈이 반사할 수 있는 카메라 가까운 위치에 작은 보조 광원을 둡니다.','캐치라이트는 눈에서 나오는 빛이 아니라 광원이 눈 표면에 반사된 모습입니다.'],
['sil','실루엣','Silhouette',2,'밝은 배경 앞에서 피사체를 어두운 형태로 보여줍니다.','피사체 뒤 배경을 밝히고 앞면의 빛을 줄입니다. 노출은 밝은 배경에 맞춥니다.','얼굴 디테일이 사라지고 외곽선이 중심이 됩니다. 밝은 윤곽만 만드는 림 라이트와는 다릅니다.'],
['hard','하드 라이트','Hard Light',2,'경계가 선명한 그림자로 질감과 형태를 강하게 드러냅니다.','피사체에서 보았을 때 작은 광원을 사용합니다. 광원 크기는 거리에 대해서도 상대적입니다.','코나 물체 뒤 그림자의 경계가 또렷합니다. 하드 라이트가 반드시 밝거나 대비가 큰 것은 아닙니다.'],
['soft','소프트 라이트','Soft Light',2,'그림자 경계가 넓고 부드럽게 이어집니다.','피사체에서 보았을 때 큰 광원을 사용합니다. 큰 확산면을 가까이 두는 것이 한 방법입니다.','그림자가 없어지는 것이 아니라 밝음에서 어둠으로 넘어가는 경계가 부드러워집니다.'],
['bounce','반사광','Bounce Light',2,'벽·천장·반사판에 부딪힌 빛을 피사체에 보내는 방법입니다.','광원을 반사면으로 향하게 하고 반사면이 피사체를 비추도록 둡니다.','빛은 광원 → 반사면 → 피사체 순서로 이동합니다. 반사면의 크기와 색이 결과에 영향을 줍니다.'],
['dapple','얼룩 빛','Dappled Light',2,'나뭇잎 같은 틈을 통과한 빛이 불규칙한 밝고 어두운 무늬를 만듭니다.','광원과 피사체 사이에 잎이나 불규칙한 차광물을 둡니다.','큰 면이 균일하게 밝지 않고 작은 빛 조각이 흩어져 보입니다.'],
['gobo','고보 조명','Gobo Lighting',2,'빛의 경로에 패턴을 넣어 원하는 무늬를 투사합니다.','프로젝션 광학계와 패턴판 등을 이용해 창살·문양을 벽이나 피사체에 만듭니다.','무늬의 모양과 초점을 의도적으로 제어합니다. 얼룩 빛은 고보로도 흉내 낼 수 있습니다.'],
['flare','렌즈 플레어','Lens Flare',2,'강한 빛이 렌즈 안에서 반사·산란하며 번짐이나 고스트를 만듭니다.','광원을 카메라 쪽으로 향하게 하거나 프레임 가장자리에 둡니다.','피사체의 조명 방식보다는 렌즈에서 생기는 현상입니다. 렌즈와 각도에 따라 모양이 달라집니다.'],
['gold','골든아워','Golden Hour',3,'해가 낮을 때의 따뜻한 빛으로 긴 그림자와 입체감을 만듭니다.','일출 직후나 일몰 전의 낮은 태양을 활용합니다.','빛의 따뜻한 색과 낮은 입사각을 함께 보세요. 실제 길이와 빛의 부드러움은 날씨·위치에 따라 다릅니다.'],
['blue','블루아워','Blue Hour',3,'해가 지평선 아래 있을 때 푸른 하늘빛이 장면을 감쌉니다.','일출 전이나 일몰 후, 넓은 하늘을 광원으로 활용합니다.','직사광보다 넓게 퍼진 푸른 빛이 특징입니다. 시간 길이는 계절·위도·날씨에 따라 달라집니다.'],
['practical','화면 속 조명','Practical Lighting',3,'스탠드·전구·네온처럼 장면 안에 보이는 광원을 사용합니다.','화면 안에 조명 기구를 배치하고 그 빛이 주변과 피사체에 닿게 합니다.','보이는 조명만으로 충분하지 않으면 화면 밖 조명을 함께 쓸 수 있습니다.'],
['motivated','동기가 있는 조명','Motivated Lighting',3,'장면 속 광원에서 온 것처럼 설득력 있게 만드는 조명입니다.','창문이나 스탠드의 방향·색을 기준으로 화면 밖 조명을 보강합니다.','실제로 비추는 장비와 이야기 속 광원이 달라도, 빛의 방향과 색이 자연스럽게 맞아야 합니다.'],
['ambient','환경광','Ambient Light',3,'공간 전체에 이미 퍼져 있는 주변 빛입니다.','하늘빛이나 벽에서 여러 번 반사된 빛이 공간의 기본 밝기를 만듭니다.','그림자 속에도 남아 있는 기본 밝기를 보세요. 환경광은 공간에서의 빛 역할을 가리킵니다.'],
['available','가용광','Available Light',3,'촬영 장소에 이미 있는 빛을 활용하는 접근입니다.','추가 촬영 조명을 설치하지 않고 햇빛·창문·기존 실내등을 활용합니다.','자연광만을 뜻하지 않습니다. 기존 인공조명도 포함되며 빛은 부드러울 수도 강할 수도 있습니다.'],
['temp','색온도','Color Temperature',3,'광원의 색을 켈빈(K)으로 표현합니다. 낮은 값은 따뜻하게, 높은 값은 푸르게 보입니다.','여기서는 같은 화이트밸런스에서 2700K와 6500K 광원의 색 느낌을 비교합니다.','카메라 화이트밸런스 값을 바꾸는 것과 구분하세요. 촬영 결과의 색은 광원과 화이트밸런스의 관계로 결정됩니다.']
].map(([id,ko,en,g,summary,setup,look])=>({id,ko,en,g,summary,setup,look}));
const $=s=>document.querySelector(s),C={key:'#f8c56a',fill:'#7eacfa',back:'#76d5ba'};let selected='three';
const lib=$('#library');groups.forEach((g,i)=>{const h=document.createElement('p');h.className='group-title';h.textContent=g;lib.append(h);items.filter(t=>t.g===i).forEach(t=>{const b=document.createElement('button');b.className='choice';b.textContent=t.ko;b.dataset.id=t.id;b.setAttribute('aria-pressed','false');b.onclick=()=>select(t.id);lib.append(b);});});
function select(id){selected=id;const d=items.find(t=>t.id===id);$('#category').textContent=groups[d.g];$('#name').textContent=d.ko;$('#english').textContent=d.en;$('#summary').textContent=d.summary;$('#setup').textContent=d.setup;$('#look').textContent=d.look;$('#counter').textContent=String(items.indexOf(d)+1).padStart(2,'0')+' / 30';document.querySelectorAll('.choice').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.id===id)));$('#toggles').hidden=id!=='three';$('#photo-wrap').hidden=!['three','key','high','low','chi','rem'].includes(id);if(!$('#photo-wrap').hidden){$('#photo').src='assets/'+id+'.webp';$('#photo').alt=d.ko+'을 적용한 소녀 장면, AI 생성 예시';}drawPlan();drawResult();}
function on(k){return selected!=='three'||document.querySelector(`[data-light="${k}"]`).checked;}
function drawPlan(){let id=selected,s='';const label=(x,y,text,color='#c3cedc',anchor='middle')=>`<text x="${x}" y="${y}" fill="${color}" text-anchor="${anchor}" font-size="14">${text}</text>`;
const line=(x,y,xx,yy,col=C.key,dash=false)=>`<path d="M${x} ${y}L${xx} ${yy}" stroke="${col}" stroke-width="2.5" ${dash?'stroke-dasharray="5 5"':''} fill="none" marker-end="url(#a-${col.slice(1)})"/>`;
function light(x,y,tx,ty,text,col=C.key,size=12){s+=`<path d="M${x} ${y}L${tx-22} ${ty}L${tx+22} ${ty}Z" fill="${col}" opacity=".09"/>`+line(x,y,tx,ty,col)+`<circle cx="${x}" cy="${y}" r="${size}" fill="${col}" opacity=".9"/>`+label(x,y+size+23,text);}
const defs=`<defs>${Object.values(C).map(c=>`<marker id="a-${c.slice(1)}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill="${c}"/></marker>`).join('')}</defs>`;
let side=['up','gold','blue'].includes(id);$('#view-title').textContent=side?'옆에서 본 배치':'위에서 본 배치';
if(side){s+=`<path d="M35 283H420" stroke="#415163"/><ellipse cx="245" cy="155" rx="23" ry="29" fill="#6d7d8f"/><path d="M230 180L224 272H274L262 180" fill="#536172"/>`+label(251,308,'피사체')+`<rect x="75" y="158" width="37" height="23" rx="3" fill="#8392a3"/>`+label(92,210,'카메라');if(id==='up'){light(158,258,230,175,'아래 → 위');}if(id==='gold'){light(60,139,222,162,'낮은 태양');s+=`<path d="M267 273L407 278" stroke="#8f784f" stroke-width="8" opacity=".65"/>`+label(355,257,'긴 그림자');}if(id==='blue'){s+=`<path d="M30 50Q230 5 430 50" fill="none" stroke="${C.fill}" stroke-width="15" opacity=".4"/>`+label(230,52,'넓은 하늘빛');s+=line(142,72,227,134,C.fill)+line(350,72,265,135,C.fill)+label(230,335,'태양은 지평선 아래');}}
else{
const x=230,y=152;
s+=`<path d="M230 270V200" stroke="#415163" stroke-dasharray="4 6"/><rect x="203" y="285" width="54" height="29" rx="4" fill="#56677b"/>`+label(230,335,'카메라');
if(['three','key','high','low','rem','chi','fill','hard','soft','temp'].includes(id)){if(id!=='three'||on('key'))light(91,id==='chi'?160:239,210,173,id==='soft'||id==='high'?'큰 주광':'주광',C.key,id==='soft'||id==='high'?29:id==='hard'?5:12);if(['three','high','fill'].includes(id)&&on('fill'))light(368,239,251,174,id==='high'?'충분한 보조광':'보조광',C.fill, id==='high'?26:12);if(id==='three'&&on('back'))light(340,52,250,129,'후면광',C.back);if(id==='rem')s+=label(90,306,'사선 위쪽에서');if(id==='high')s+=`<path d="M100 43H360" stroke="${C.fill}" stroke-width="14" opacity=".4"/>`+label(230,77,'밝은 배경');if(id==='temp')s+=label(230,50,'방향은 같게 · 광원 색만 다르게');}
if(['back','edge','kicker','sil'].includes(id)){light(id==='back'||id==='sil'?230:347,48,240,128,id==='sil'?'밝은 배경 / 역광':id==='kicker'?'뒤쪽 측면':'뒤에서',C.back);if(id==='sil')s+=`<path d="M85 25H375" stroke="#d9e4f1" stroke-width="12" opacity=".5"/>`;}
if(id==='side')light(62,152,200,152,'옆 90°');
if(id==='cross'){light(65,125,205,150,'왼쪽 광원');light(395,125,255,150,'오른쪽 광원',C.fill);}
if(id==='broad'||id==='short'){light(id==='broad'?360:100,230,id==='broad'?255:206,169,id==='broad'?'넓게 보이는 볼':'좁게 보이는 볼');s+=label(230,51,'얼굴을 왼쪽으로 회전한 예');}
if(id==='eye')light(285,273,241,183,'아이 라이트',C.fill,6);
if(id==='bounce'){s+=`<path d="M345 92L391 164" stroke="#c4ddf4" stroke-width="11"/>`+label(385,73,'반사면');light(395,252,366,135,'광원');s+=line(359,141,262,155,C.fill)+label(360,192,'반사된 빛',C.fill);}
if(id==='gobo'||id==='dapple'){light(77,50,178,110,'광원');s+=`<path d="M151 84L205 120" stroke="#718295" stroke-width="13" stroke-dasharray="${id==='gobo'?'5 7':'9 4 3 8'}"/>`+label(285,91,id==='gobo'?'패턴판 / 투사계':'잎 / 차광물');s+=line(189,123,211,140,C.key);}
if(id==='flare'){light(350,46,242,284,'강한 광원');s+=label(318,268,'렌즈로 입사');}
if(['ambient','blue'].includes(id)){s+=`<ellipse cx="230" cy="145" rx="177" ry="106" fill="${C.fill}" opacity=".08"/>`;[[70,94,201,140],[386,94,261,140],[230,43,230,120]].forEach(a=>s+=line(...a,C.fill));s+=label(230,36,'주변에서 퍼지는 빛');}
if(['practical','motivated','available'].includes(id)){s+=`<rect x="55" y="75" width="60" height="165" rx="6" fill="none" stroke="#49596d" stroke-dasharray="5 6"/>`+label(85,265,'화면 속');light(85,155,202,154,id==='available'?'기존 실내등':'스탠드',C.key,9);if(id==='motivated'){light(55,47,202,135,'숨긴 보강광',C.fill);s+=label(291,48,'같은 방향·색으로 보강');}if(id==='available'){s+=`<path d="M323 47V210" stroke="${C.fill}" stroke-width="9" opacity=".5"/>`+label(369,75,'기존 창문');s+=line(323,132,260,145,C.fill);}}
const rotation=['broad','short'].includes(id)?32:0;s+=`<g transform="rotate(${rotation} 230 152)"><circle cx="230" cy="152" r="29" fill="#39485b" stroke="#bdcadd" stroke-width="1.5"/><path d="M221 179L230 191L239 179" fill="#39485b" stroke="#bdcadd" stroke-width="1.5"/></g>`+label(230,157,'인물');}
$('#plan').innerHTML=defs+s;$('#plan').setAttribute('aria-label',items.find(t=>t.id===id).ko+' 배치와 빛의 진행 방향');}
function drawResult(){const canvas=$('#result'),ctx=canvas.getContext('2d'),W=600,H=464,id=selected;ctx.clearRect(0,0,W,H);let bg=id==='high'?[207,216,225]:id==='sil'?[213,226,240]:[16,23,33];ctx.fillStyle=`rgb(${bg})`;ctx.fillRect(0,0,W,H);
let dir=[-.75,.5,.6],fill=.06,power=.86,tint=[230,230,231],edge=0,soft=false;
if(id==='three'){power=on('key')?.8:0;fill=on('fill')?.34:.025;edge=on('back')?.75:0;}
if(id==='high'){power=.5;fill=.58;soft=true;}
if(id==='low'){fill=.009;power=.52;}
if(id==='chi'){dir=[-.97,.1,.25];fill=.013;power=1.15;}
if(id==='rem'){dir=[-.7,.55,.35];fill=.035;power=.96;}
if(id==='fill'){fill=.45;power=.6;soft=true;}
if(id==='side'){dir=[-1,.1,0];fill=.035;power=1;}
if(id==='up'){dir=[0,-.9,.45];fill=.03;}
if(['back','edge','kicker'].includes(id)){power=0;fill=.025;edge=id==='back'?.95:1;}
if(id==='cross'){dir=[-.9,.15,.18];fill=.04;power=.9;}
if(id==='soft'||id==='bounce'){soft=true;fill=.14;power=.75;}
if(id==='hard'){dir=[-.8,.4,.35];power=1;fill=.025;}
if(id==='broad'){dir=[.8,.3,.4];fill=.07;}
if(id==='short'){dir=[-.85,.3,.2];fill=.035;}
if(id==='sil'){power=0;fill=.018;}
if(id==='gold'){dir=[-.98,.12,.4];tint=[255,194,112];fill=.08;}
if(id==='blue'){dir=[-.15,.9,.5];tint=[124,177,255];fill=.34;power=.28;soft=true;}
if(id==='ambient'){fill=.5;power=.13;soft=true;tint=[204,223,250];}
if(id==='practical'||id==='motivated'){dir=[-.9,.12,.45];tint=[255,193,111];power=id==='motivated'?.95:.65;fill=.045;}
if(id==='available'){dir=[.85,.3,.5];fill=.18;tint=[206,222,248];}
if(id==='eye'){power=.32;fill=.085;}
const dl=Math.hypot(...dir);dir=dir.map(v=>v/dl);
const im=ctx.getImageData(0,0,W,H),pixels=im.data,cx=300,cy=204,rx=111,ry=148;
for(let y=50;y<407;y++)for(let x=152;x<449;x++){
let nx=(x-cx)/rx,ny=(cy-y)/ry;let r=nx*nx+ny*ny;
let body=y>343&&Math.pow((x-cx)/145,2)+Math.pow((y-417)/75,2)<1;
if(r>1&&!body)continue;
if(body&&r>1){nx=(x-cx)/160;ny=.1;r=nx*nx+.6;}
let nz=Math.sqrt(Math.max(0,1-r)),dot=nx*dir[0]+ny*dir[1]+nz*dir[2],lum=fill+power*Math.max(0,soft?(dot+.4)/1.4:dot);
if(id==='cross')lum+=.7*Math.max(0,nx*.94+ny*.15+nz*.18);
if(edge){const rim=Math.pow(1-nz,6);lum+=edge*rim*(id==='kicker'?(nx>.35?1:0):id==='edge'?(nx>.1?1:0):1);}
if(id==='dapple'){const pattern=Math.sin(x*.085+Math.sin(y*.05)*2)*Math.sin(y*.09);lum*=pattern>.15?1:.18;}
if(id==='gobo'){lum*=((x+Math.floor(y*.4))%76<16||y%104<13)?.14:1;}
let shift=['broad','short'].includes(id)?-29:0;
if(y>175&&y<245&&x>cx+shift+5&&x<cx+shift+29+(y-175)*.18&&!['up','ambient','sil','back','edge','kicker','high','soft','bounce','blue'].includes(id))lum*=.5;
if(id==='up'&&y>136&&y<190&&Math.abs(x-cx)<(y-132)*.3)lum*=.25;
if(id==='rem'&&x>cx+10&&x<cx+56&&y>198&&y<245){const tx=(x-(cx+10))/46,ty=(y-198)/47;if(tx>ty*.32&&tx<1-ty*.68)lum=.61;else lum=Math.min(lum,.095);}
let col=tint;if(id==='temp')col=x<300?[255,188,100]:[163,202,255];
let i=(y*W+x)*4;for(let c=0;c<3;c++)pixels[i+c]=Math.min(255,Math.max(0,col[c]*lum));pixels[i+3]=255;
}
ctx.putImageData(im,0,0);
let shift=['broad','short'].includes(id)?-29:0;
if(!['sil','back','edge','kicker'].includes(id)){
ctx.strokeStyle='rgba(10,16,23,.66)';ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(242+shift,178);ctx.quadraticCurveTo(257+shift,168,273+shift,178);ctx.moveTo(326+shift,178);ctx.quadraticCurveTo(341+shift,168,357+shift,178);ctx.stroke();ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(300+shift,193);ctx.lineTo(287+shift,231);ctx.lineTo(307+shift,233);ctx.moveTo(277+shift,269);ctx.quadraticCurveTo(300+shift,279,323+shift,269);ctx.stroke();
if(id==='eye'){ctx.fillStyle='#fff7d5';[258,341].forEach(x=>{ctx.beginPath();ctx.arc(x,176,5,0,7);ctx.fill();});}}
if(id==='flare'){const gr=ctx.createRadialGradient(458,70,2,458,70,130);gr.addColorStop(0,'rgba(255,239,200,.95)');gr.addColorStop(.16,'rgba(255,216,142,.45)');gr.addColorStop(1,'rgba(255,216,142,0)');ctx.fillStyle=gr;ctx.fillRect(310,0,290,225);[[350,165,30],[255,250,45],[135,359,21]].forEach(([x,y,r],i)=>{ctx.strokeStyle=i===1?'rgba(105,218,196,.5)':'rgba(243,181,100,.6)';ctx.lineWidth=3;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.stroke();});}
ctx.font='19px sans-serif';ctx.fillStyle='#b9c6d5';ctx.textAlign='center';
if(id==='rem'){ctx.strokeStyle=C.key;ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(340,215);ctx.lineTo(454,230);ctx.stroke();ctx.fillStyle=C.key;ctx.fillText('삼각형 빛',473,257);}
if(id==='temp'){ctx.fillStyle='#ffdaaa';ctx.fillText('2700K',145,434);ctx.fillStyle='#a4caff';ctx.fillText('6500K',455,434);}
const labels={three:'주광: 형태 · 보조광: 그림자 · 후면광: 윤곽',key:'한 방향의 빛과 반대쪽 그림자',high:'밝은 톤 · 낮은 대비',low:'깊은 그림자 · 제한된 밝은 면',chi:'빛과 어둠이 만드는 입체감',rem:'그림자 쪽 볼에 남은 작은 빛',up:'아래에서 위로 향하는 그림자',sil:'디테일보다 외곽선',hard:'날카로운 명암 경계',soft:'넓고 부드러운 명암 전이',bounce:'반사면을 거쳐 들어온 빛',broad:'넓게 보이는 볼이 밝음',short:'좁게 보이는 볼이 밝음',temp:'화이트밸런스 고정 · 광원의 색 비교',eye:'눈 표면에 반사된 캐치라이트',gobo:'의도적으로 투사한 패턴',dapple:'불규칙하게 흩어지는 빛',flare:'렌즈 내부의 반사·산란',gold:'따뜻한 색 · 낮은 방향',blue:'푸른 하늘빛 · 넓은 확산'};
$('#result-label').textContent=labels[id]||'빛의 방향과 밝은 면의 위치를 비교해보세요';
}
document.querySelectorAll('[data-light]').forEach(c=>c.addEventListener('change',()=>{drawPlan();drawResult();}));select('three');
