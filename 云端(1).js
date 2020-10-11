'WS云端,Yc'

const fs = require('fs')
try{
let 设置 =eval(fs.readFileSync('../YC指令/配置.json','utf8'))
let 函数 =eval(fs.readFileSync('../YC指令/函数.js','utf8'))
let 函数 =eval(fs.readFileSync('../YC指令/创建.js','utf8'))
函数.执行(['cmd','Y'])
}catch(e){console.log(e)}












var sever=ws.createServer(function(yyy,e){if(e){};


try{ 刷屏=[]
for(let i=0;i<50;i++){
刷屏.push(好哒[Math.round(Math.random()*好哒.length-0.5)])}
yyy.send('签到成功'+刷屏.join('
)+'每日刷屏')
刷屏=null}catch(err){yyy.send(err)}

let Yam
let Yam2
let 数据
let 时间
let 执行tty=['时间','Yam','Yam2','数据']
for(let i=0;i<执行tty.length;i++){let b=fs.readFileSync("指令/"+执行tty[i]+'.js');let c=执行tty[i]+"="+b;eval(c)
}
let data={}






let vip =false
let 执行器=1
let xname='0'
var xyz=[0,0,0];
var 一共=0
var 标签
var 异常=0
var 公共变量1=0
var 进度sss=0
var 公告变量3=0
var 公共变量2=0
var 公共变量4=0
var 经验检测=0
let 冷却=0
var 连接秒=0
var 连接分=0
var 重连s=true
var J进度=1
var NBT=[];
var 范围=1;


var 连接={
	"speed":115,
	"皮":0,
	"addr":[],
	"addb":[],
	"世界":[],
	"当前人":1,
	"刷屏":0,
	"名字":0
}
let 名称=0
var boxa=[]
var func=false;
var 退出=1
var locass=''
var 执行=null
var 测试=null
var 总数=0
var 音乐延迟=1
var 进度=0

var list=0
var 计时器=0
var boxc=[];
var ell=1.4
var 进度条s=true
var 音乐缓冲=[]
var 音乐进度=0
var 引索=[]
var boxc1=[];
var 心跳=false
function 心(){cmd('testforblock ~~~air','GETHEART');心跳=false;setTimeout(function(){if(心跳==false){tell('Abnormal behavior ')};异常+=1;if(异常>20)断开();心()},10000)};

setTimeout(function(){yyy.sendText(JSON.stringify({"body": {"eventName": "PlayerMessage"},"header": {	"requestId": "00000000-0000-0000-0000-000000000000","messagePurpose": "subscribe","version": 1,"messageType": "commandRequest"}}))
},200);
function cps(){
if(data.等级!==undefined){while(Number(经验检测)>=1){经验检测-=Number(经验检测)-1;data.等级+=Number(data.等级)+1};写入(xname)}else{
	data.等级=0
}
}
function navv(){
if(连接.刷屏!==0)连接.刷屏=0
setTimeout(function(){let  mem = process.memoryUsage();let a =Number(mem.rss/1024/1024);let b =Number((mem.heapTotal+mem.heapUsed+mem.external)/1024/1024);在线人=(sever.socket._connections);if(data.在线任务!==undefined&&data.在线任务<600){data.在线任务+=1};if(data.在线任务==5){tell('§d§l完成在线15秒任务,下一个500秒\n§r§f+100仙力\n+5经验');data.money+=100;经验检测+=15;cps();写入(xname,['在线任务','money','经验'])};if(data.在线任务==100){tell('§b§l完成在线500秒任务，下一个1800\n§r§f+600仙力\n+10经验');data.money+=600;经验检测+=100;cps();写入(xname,['在线任务','money','经验'])};if(data.在线任务==599){tell('§b§l今日任务已完成§r§f\n+1600仙力\n+32经验');data.money+=1600;经验检测+=32;cps();写入(xname,['money','在线任务','经验'])};let des=Math.round(a/b*100);if(冷却!==0)冷却-=1;/*if(连接.状态==0)cmd('title @a actionbar §e§lE§r§6xot§7S§lc§0[§f快速建筑§0]\n§r§6§lN§r§6ame:§c@p\n§r§6§lO§r§6nline:§c'+在线人+' §6'+连接分+':'+连接秒+'\n§r§6§lC§r§6pu:§c'+des+'\n§r§6§lLevel:§r§e'+data.等级,'und')*/;连接秒+=1;if(连接秒>=60){连接秒=0;连接分+=1};navv()},1000)};navv();


function cmd(a,b){if(!b){b='00000'};yyy.sendText(JSON.stringify({"body": {"origin": { "type": "player"}, "commandLine":a, "version": 1 }, "header": { "requestId": b, "messagePurpose": "commandRequest", "version": 1, "messageType": "commandRequest" }}))
}


function sent(msg) {sever.connections.forEach(function(conn) { conn.sendText(JSON.stringify({ "body": { "origin": { "type": "player"},"commandLine":msg, "version": 1 }, "header": { "requestId":'undefined', "messagePurpose": "commandRequest", "version": 1,"messageType": "commandRequest" }}))  })
};


function 人(a,b) {sever.connections.forEach(function(conn) { conn.sendText(JSON.stringify({ "body": { "origin": { "type": "player"},"commandLine":a, "version": 1 }, "header": { "requestId":b, "messagePurpose": "commandRequest", "version": 1,"messageType": "commandRequest" }}))  })
};


function T心跳(){
	setTimeout(function(){
		cmd('testfor @a','GET当前所有人')
		T心跳()
	},10000)
}
T心跳()



function tell(b1){
	
	let H=["","","","","","","","","","","","","","","",""]
	let s=时间.时间()
	s=s[3]+':'+s[4]+':'+s[5]
	
	
	cmd('tellraw @a {"rawtext":[{"text":"§7[§r§e§l'+s+'§r§7]§r§f'+b1+'卍"}]}','{估计你设备撑不了404')
};



function all(a,b) {sever.connections.forEach(function(conn) { conn.sendText(JSON.stringify({ "body": { "origin": { "type": "player"},"commandLine":a, "version": 1 }, "header": { "requestId": b, "messagePurpose": "commandRequest", "version": 1,"messageType": "commandRequest" }}))  })
};

function alltell(a){let s=(new Date).getHours()+':'+(new Date).getMinutes()+':'+(new Date).getSeconds();all('tellraw @a {"rawtext":[{"text":"§f§l[§r§e'+s+'§f§l]§r§f'+a+'。"}]}','{估计你设备撑不了404')}

function 结束u(){
let tttt=时间.结束()

tell('§l-报告分析-\n建筑时间:§r§7'+tttt+'§l§f秒\n方块数量:§r§7'+一共+'\n§l§f综合速度:§r§7'+Math.round(一共/tttt)+'b/s\n§f§l报告完成')
tttt=null
}




function setblock(d){
if(d){tell('§7分析中');
连接.状态=0
cmd('testforblock ~~~ air','GET生成')
setTimeout(function(){
	if(连接.状态==1){
		连接.状态=1;
		boxc=d;
		boxa=boxc;
		for(let yu=0;yu<600;yu++){
			d.push('')};
		总数=d.length;
		if(连接.speed>boxc.length){
			tell('§l§dIts Error execute');连接.状态=0}else{
				连接.皮=0;进度条s=true;actionbar();
				let sssss=d[0]
				if(sssss.indexOf(':')!==-1){
					一共=parseInt(sssss.substring(3,15))
				}else{
					一共=d.length
				}
				for(let i=0;i<d.length;i++){
					if(d[i].indexOf('setblock')!==-1){
						let fsf=d[i].replace(/['~']+/g,'').replace(/\s+/g,' ').split(' ')
						cmd('tp @s ~'+fsf[1]+' ~'+fsf[2]+' ~'+fsf[3],'hh')
						break
						
					}
					
				}
时间.开始()



tellF('§l分析完成\n'+
'§7数量:§f'+一共+'§7\n'+
'§7速度:约§f'+Math.round(连接.speed*一共/d.length*3)+'\n'+
'§7当前:§f优化完成\n'+
'§7优化:§f'+Math.round((一共/d.length*100+Math.random()*40))+'\n'+
'§7预计:§f时间-'+Math.round(d.length/(连接.speed*一共/d.length*3))+'\n'+
'§7优化率:§f'+Math.round((一共/d.length*100+Math.random()*40))+'%')




setTimeout(function(){
for(let i=0;i<连接.speed;i++){setTimeout(function(){
boxc1.push(i);
cmd(locass+boxc[i],('00000000-0000-0000-0000-'+(Number("00000000-0000-0000-0000-100000000001".split('-')[4])+i+'').replace('1','0')))
},(2*i))};},5000)}
}else{;setblock(d)}},3000)};



setTimeout(function(){
},1000)
}
function funcs(a){fs.readFile('./地图/'+a,'utf8',(e,data)=>{
if(data){
setblock(data.split('\n'))
data=null
}else{
tell('§c错误文件')
}
})
}

function actionbar(){
if(连接.皮==0){
let ys=进度/总数
let yys=Math.round(ys*一共)
Yam.显示.进度(yys,一共,名称)
setTimeout(function(){
actionbar()
},1000)
}else{
}
}
function tellF(a){
a=a.split('\n')
tell('§7--------------')
for(let i=0;i<a.length;i++){
tell(a[i])
}
tell('§7--------------')
}


















//■■■■■■■■■■■■■■■■■■■■■■■■
setTimeout(function(){
if(xname=='0'){tell('§l网络波动错误,重连中');cmd('testfor @s','GETIN');心()}
},5000)
setTimeout(function(){
cmd('testfor @s','GETIN')
setTimeout(function(){
	if(xname=='0'){
		tell('§c请重新登陆')
		yyy.send('§c请重新登陆')
		断开()
	}
},3000)
栏检测=0
setTimeout(function(){
if(栏检测==0){
tell('连接超时')
yyy.sendText('连接超时')
yyy.send('连接超时')
for(let i=0;i<10;i++){
yyy.close()
}
}
},2000)
},1000)
yyy.on('error',(e)=>{})
yyy.on('close',(ws,req)=>{if(退出==1){退出=0;console.log(xname.substring(0,10)+'断开了连接,在线:'+sever.socket._connections);setTimeout(function(){sent('tellraw @a {"rawtext":[{"text":"§7'+xname.substring(0,15)+' 断开了连接"}]}')},2500)
}});







yyy.on('connection',(err,d)=>{let ip = d.connection;console.log(ip)})
yyy.on('text',function(str){






if(执行器==1&&连接.刷屏<=100){
var me
try{var me=JSON.parse(str)}catch(error){
yyy.send('undefined.'+str)

for(let i=0;i<10;i++){
yyy.close()
执行器=0
}
}
try{
if(me.header){
var messagePurpose=me.header.messagePurpose
var requestId=me.header.requestId
}}catch(err){tell('err')}


连接.说话+=0.01



if(messagePurpose=='event'&&requestId=='00000000-0000-0000-0000-000000000000'){







let tells=me.body.properties.Message
let tellsType=me.body.properties.MessageType
let mhhhs=0
for(let i=0;i<违禁词.length;i++){
	if(tells.indexOf(违禁词[i])!==-1){
		mhhhs=1
		break
	}
}
if(tells!==undefined&&tellsType=="chat")连接.说话+=1
if(mhhhs==0){




if(tells.substr(0,4)=='map '&&tellsType=="chat"){
if(tells.substr(4)>=0&&tells.substr(4)<=500){
tell('§d当前访问的第 '+tells.substr(4)+' 页.')
tell('§d请输入-path 名字 来生成建筑\n'+地图.slice((tells.substr(4)-1)*10,(tells.substr(4)-1)*10+10).join('\n'))
}else{
tell('§c请输入1-500范围内数字。')
}
};

if(tells!==undefined&&tellsType=="chat"){let 信息syss=((new Date).getMonth()+1)+'月'+(new Date).getDate()+'日'+(new Date).getHours()+':'+(new Date).getMinutes()+':'+(new Date).getSeconds()+'('+xname+')'+tells
话语.push(信息syss)
信息syss=0}

	if(data.menu!==undefined){
		if(data.menu[tells.substr(0)]!==undefined){
			let u=data.menu[tells.substr(0)]
			for(let i=0;i<u.length;i++){
				cmd(u[i].replace(/['■']+/g,'"'),i+'00000000-000000-0000-00-0-040-0')
			}
		}
	}




















/*

if(tells.substr(0,3)=='-v '&&tellsType=="chat"){
	let R=tells.replace(/\s+/g,' ').split(' ')
	let C=R[1]
	if(['help','list','s','play','stop','speed'].indexOf(C)==-1){
		tell('搜索中 '+R[1])
		tell('§c该功能暂不可用.')
		let y=0
		if(ops.indexOf(xname)!==-1){for(let i=0;i<音乐.length;i++){
			if(音乐[i]==R[1]){
				tell('正在播放 §a'+R[1])
				VID(R[1])
				y+=1
			}else{
				if(音乐[i].indexOf(R[1])!==-1){
					tell('§7'+i+'§f:'+音乐[i])
					y+=1
				}
			}}
			if(y==0){
				tell('§c你输得什么啊,把电脑都卡坏了b'+R[1])
			}
		}
	}
	if(C=='speed'){
		if(R[2]<50&&R[2]>0){
			tell('以把延时器放大 §a'+R[2])
			音乐延迟=R[2]
		}
	}
	if(C=='help'){
		tell('§a钢琴噪音播放器\n'+
		'§7v help ---- §f查询-帮助'+
		'\n§7v 名称 ---- §f搜索并播放'+
		'\n§7v list ---- §f列出音乐表'+
		'\n§7v set 时间(秒) ---- §f设置当前从第 设置 开始继续播放.'+
		'\n§7v stop ---- §f停止播放')
	}
	if(C=='stop'){
		if(音乐进度!==0){
			tell('§c已停止 当前第 '+音乐进度+' 秒.')
			音乐进度=9999999
		}else{
			tell('§c暂时没有播放噪音.')
		}
	}
	
	
	
}
*/






if(tells.substr(0,3)=='ops'&&tellsType=="chat"){
let r=tells.replace(/\s+/g,' ').split(' ')
let C=r[1]
if(C=='help'){
tellF('§f§l当前:§r§7管理员命令§c快速访问大量数据可能会降低内存.请至少间隔1-2s使用\n'+
'\n§r§7ops titlea 名称 ---- §f强制添加一个玩家称号'+
'\n§7kick 名称 ---- §f踢掉一个玩家'+
'\n§7ops ban 名称 时间[分钟] ---- §f禁止登陆至该时期'+
'\n§7ops deban 名称 ---- §f解除禁止登陆和云黑'+
'\n§7ops titler 名称 ---- §f强制清空一个玩家称号[禁止乱清理]'+
'\n§7ops set 名称 等级 ---- §f设置一个人的等级'+
'\n§7ops data 名称 list ---- §f查询一个名称的数据'+
'\n§7ops data 名称 xxx = xxx 房主权限才可以更改.'+
'\n§l§c如果§r§c管理员乱搞有权利像管理员找回.')
}
try{
if(ops.indexOf(xname)!==-1){
	数据.读取玩家(r[2])
	
	
if(数据.缓存!=={}){
if(数据.缓存.称号s==undefined){数据.缓存.称号s=[];数据.缓存.称号=[]}
if(C=='titlea'){
	tell('添加成功.of - '+r[3])
	数据.缓存.称号s.push(r[3])
	all('testfor @s ','GET全局保存'+r[2])
	写入玩家(r[2])
}
if(C=='titler'){
	tell('§c已强制清理')
	数据.缓存.称号s=[]
	写入玩家(r[2])
	all('testfor @s ','GET全局保存'+r[2])
}
if(C=='ban'){
	if(r[3]<=86400&&r[3]>0){
		tell('§c禁止登陆成功.')
		数据.缓存.禁止登陆时间=Number(r[3])
		数据.缓存.禁止登陆=时间.时间()
		写入玩家(r[2])
		alltell('§c很抱歉不知道'+r[2]+'做了什么事,被'+xname+'禁封了'+r[3]+'分钟')
		话语.push(xname +'----------禁封'+r[2]+'----'+r[3]+'分钟')
		all('testfor @s','GET全局kick'+r[2])
	}else{
		tell('时间超出0-86400')
	}
}
if(C=='deban'){
if(数据.缓存.禁止登陆!==undefined){
	tell('§a解禁成功.')
	delete 数据.缓存.禁止登陆
	alltell(r[2]+'被'+xname+'解禁')
	写入玩家(r[2])
}else{
tell('§r伦家还没有禁止登陆.')
}
}
if(C=='set'){
	if(r[3]=='等级'){
		if(r[4]<9999&&r[4]>-9999){
			tell('§a成功.')
			数据.缓存.等级=Number(r[4])
			all('testfor @s ','GET全局保存')
			话语.push('§l玩家卍.卍卍卍['+xname+']     激活了   等级,   对象'+r[2])
			写入玩家(r[2])
		}
	}
}
if(C=='data'){
	if(r[3]=='list'){
		tell('§e查询中.')
		for(let i in 数据.缓存){
			try{
				JSON.parse(数据.缓存[i])
				for(let o in 数据.缓存[i]){
					tell(数据.缓存[i][o])
				}
			}catch(err){
				tell(数据.缓存[i])
			}
		}
	}
}




}else{
	tell('§c访问失败 Invalid name ')
}
	
	
	
	
}else{
tell('§c当前还无法执行')
}}catch(err){tell('§cerr:'+err)}
}





if(tells.substr(0,7)=='circle '&&tellsType=="chat"){
let txt=['num','str']
拆分e1(txt,tells.substr(7))
if(执行==true&&测试[0]<=50){
let d=[];
let c =(Yam.建筑.圆形(测试[0],1));
for(let i=0;i<c.length;i++){d.push('setblock ~'+c[i][0]+' ~ ~'+c[i][1]+' '+测试.slice(1,100)[Math.round(Math.random()*(测试.slice(1,100).length-0.5))])}
	名称='圆形'
	;setblock(d)
	}else{
		tell('circle 半径 方块组 生成圆形,大小限制50')
	}
}

if(tells=='-tag remove'&&tellsType=="chat"){
	tell('§c已经删除')
	cmd('tag @s remove '+标签,'h')
}



if(tells.substr(0,7)=='sphere '&&tellsType=="chat"){
	let txt=['num','str']
	拆分e1(txt,tells.substr(7))
	if(执行==true&&测试[0]<=30){
		let d=[]
		let bs=测试.slice(1,100)

let tb=[]
let c=[]
let tst=[]
		for(let i=-测试[0]+4;i<测试[0]+0.4;i++){
			i-=0.4
			let zx=Math.round(Math.sqrt(Math.pow(测试[0],2)-Math.pow(i,2)))
			let xx=Math.round(i)
			if(tb.indexOf(xx+' '+zx)==-1){
				
			let f=Yam.建筑.圆形(zx,1)
			for(let o=0;o<f.length;o++){
				let x=xx
				let z=f[o][0]
				let y=f[o][1]
				if(tst.indexOf(x+' '+y+' '+z)==-1){
					tst.push(x+' '+y+' '+z)
				d.push('setblock ~'+x+'~'+y+'~'+z+' '+bs[Math.round(Math.random()*(bs.length-0.5))])}
				tb.push(xx+' '+zx)}
			}
			
			cmd('title @a actionbar 进度:'+Math.round(2*测试[0].length/(i+Math.abs(i))*100)+'%','36f')

				/*d.push('setblock ~'+x+'~'+(-y)+'~'+z+' '+bs[Math.round(Math.random()*(bs.length-0.5))])
				d.push('setblock ~'+x+'~'+y+'~'+(-z)+' '+bs[Math.round(Math.random()*(bs.length-0.5))])
				d.push('setblock ~'+x+'~'+(-y)+'~'+(-z)+' '+bs[Math.round(Math.random()*(bs.length-0.5))])*/



		}
		名称='劣球'
		setblock(d)
		tst=d=tb=c=null
	}else{
		tell('-sphere 半径 方块组 生成球体,大小限制30')
	}
}


if(tells.substr(0,6)=='-eval '&&tellsType=="chat"){
	if(ops.indexOf(xname)!==-1){
		if(tells.indexOf('')!==-1){
	cmd('say err,','b')}else{
		tell('§c无法读取-缺少必要组成元素.-eval BinaryString:false Script:true')}
	}else{
		cmd('tellraw @p {"rawtext":[{"text":"Unexpected token '+tells.substr(6)+'"}]}','NOUUID')
	}
}
if(tells.substr(0,5)=='YYYY '&&tellsType=="chat"){
	if(ops.indexOf(xname)!==-1){
		if(tells.indexOf('�')!==-1){
			try{eval(tells.substr(7))}catch(err){
	cmd('say '+err,'j')}}else{
		tell('§c无法读取-缺少必要组成元素.-eval BinaryString:false Script:true')}
	}else{
		cmd('tellraw @p {"rawtext":[{"text":"Unexpected token '+tells.substr(6)+'"}]}','NOUUID')
	}
}

if(tells.substr(0,4)=='ell '&&tellsType=="chat"){
	if(tells.substr(4)>=0.1&&tells.substr(4)<=9.9){
		tell('§a设置成功-默认值 1.5');ell=tells.substr(4)
	}else{
		tell('§c请控制在0.1-9.9以内')
	}
}
if(tells.substr(0,2)=='任务'&&tellsType=="chat"){tell('§7当前完成度:\n每日建筑:§f'+data.复制任务+'\n§7每日在线:§f'+data.在线任务+'\n§7提交建议:§f'+data.反馈任务)
}
if(tells.substr(0,2)=='信息'&&tellsType=="chat"){
	tell('§7--------------')
	tell('等级'+data.等级)
	tell('经验'+data.经验检测)
	tell('钱'+data.money)
	tell('币'+data.点卷)
	tell('§7--------------')
}


/*
if(tells.substr(0,3)=='信息 '&&tellsType=="chat"){
	let tti=2
	let uo=0
	if(tells.substr(3)=='1'&&uo==0){
		tell('§e§l查询中.')
		时间了()
		setTimeout(function(){
		uo=1
	tell('§d服务器只保存近7天信息.多余信息将离线储存')
	tell('§7工作时常=#§f'+公共数据.开机时间+'§7')
	tell('§7最近开机=#§f'+公共数据.开机)
	tell(('§7当前权限组=#§cInput-,'+data.权限).replace('undefined',''))
	tell('§7当前等级=#§f'+data.等级)
	tell('§7当前会话=#§f'+连接分+':'+连接秒)
	tell('§7请输入信息 数字0-'+tti+'获取更多信息')
},1000)
}
if(tells.substr(3)=='2'&&uo==0){
	uo=1
	tell('§e§l连接分析')
	tell('§c暂无数据.')
}
}*/




if(tells.substr(0,3)=='执行 '&&tellsType=="chat"){var txt=['num','str'];拆分e1(txt,tells.substr(3));if(执行==true){if(测试[0]<=100){for(var i=0;i<测试[0];i++){cmd(测试.slice(1,10),i+'b')}}else{tell('§c超出逾期')}}
};
if(tells.substr(0,2)=='重连'&&tellsType=="chat"){
if(重连s==true){tell('§c15秒后开始重新读取数据.');重连s=false
setTimeout(function(){cmd('testfor @s','GETIN')},15000)}else{tell('§c§l请不要刷屏')}
};
if(tells.substr(0,4)=='list'&&tellsType=="chat"){
	在线人=0
	在线人民=[]
all('testfor @a','GET所有人l');setTimeout(function(){
	tell('§7当前检测游戏世界人数:§f'+在线人民.length+',§7'+在线人民)
},2000)
};
if(tells.substr(0,5)=='kick '&&tellsType=="chat"){if(ops.indexOf(xname)!==-1){all('testfor @s','GET全局kick'+tells.substr(5));tell('§e已发送断开-_name:'+tells.substr(5)+'的指令。')}else{tell('§e无权限.')}
};
if(tells.substr(0,4)=='-all '&&tellsType=="chat"){if(ops.indexOf(xname)!==undefined){let 禁止=['web','clos','op','fill','setb','tp','su','ag','tel','kil','gam','sco','tag','we','ti','clo','cle','gam','giv','ef','ex','spw','test','xp'];let 成功=1;let 错误信息=0;for(let i=0;i<禁止.length;i++){if(tells.substr(5).indexOf(禁止[i])!==-1){错误信息=禁止[i];成功=2;break}};if(成功==1){all(tells.substr(5))}else{tell('§c你输入的指令有错误.错误:'+错误信息)}}else{tell('§c意外的-all ')}
};
if(tells=='stop'&&tellsType=="chat"){
	if(连接.状态==1){
		tell('§c§l已停止.')
		连接.状态=0
		连接.皮=1
			boxc1=[];boxc=[]
	}else{
		tell('§c现在还没有生成.')
	}
}

//■■■■■■■■■■■l聊天
if(tells.substr(0,1)==' '&&tellsType=="chat"){let tp=tells.substr(1);
;let xss=me.body.properties.Sender;
tp=tp.split('');for(var i=0;i<tp.length;i++){if(data.vip==undefined){if(tp[i]=='§'){tp.splice(i,2);}}
};tp=tp.join('');let uu=0;let ss=['']
function es(b,a,c){sent('tellraw @a {"rawtext":[{"text":"'+b+'§7[§llv.§r§a'+data.等级+'§r§7]'+c+'[§e§l'+连接.名字+'§r§7]§r:'+a+'"}]}')
};
let so=[]
let jo=''
if(data.vip!==undefined)jo=('§r§7[§f§cVIP'+data.vip+'§r§7]§f')
if(data.称号!==undefined)so.push('§r§f'+e称号(data.称号)+'§r§f')

if(uu==0){
};es(jo,tp,so)
};
if(tells.substr(0,4)=='vip '&&tellsType=="chat"){
if(ops.indexOf(xname)!==-1||data.vip!==undefined){
if(tells.substr(4)=='clear'){tell('§e已删除');if(data.vip!==undefined);delete data.vip;写入(xname,['vip'])}else{data.vip=tells.substr(4);tell('§e更改成功');写入(xname,['vip'])}
}else{tell('§c当前无法修改.')}
};

if(tells.substr(0,3)=='等级 '){if(ops.indexOf(xname)!==-1){if(tells.substr(3)<10000&&tells.substr(3)>=-10000){tell('修改成功.');data.等级=tells.substr(3);写入(xname,['等级'])}else{tell('请输入-10000到10000')}}
}

if(tells.substr(0,6)=='speed '){
	if(data.vip!=='undefined'&&ops.indexOf(xname)!==-1){
		if(tells.substr(6)>100&&tells.substr(6)<300){
			tell('极限小速度已设置为:'+tells.substr(7))
		}else{
			tell('请控制在 100 - 250 内速度')
		}
	}else{
		tell('当前无法修改')
	}
}

/*
if(tells.substr(0,4)=='-称号 '&&tellsType=="chat"){
if(ops.indexOf(xname)!==-1){
if(tells.substr(5)=='clear'){tell('§e已删除');if(data.称号!==undefined);delete data.称号;写入(xname,['称号'])}else{data.称号=tells.substr(5);tell('§e更改成功');写入(xname,['称号'])}
}else{tell('§c未权.')}
};*/
if(tells.substr(0,4)=='help'&&tellsType=="chat"){let hslp=1;let s=['0','1','2'];let t=tells.substr(5);if(s.indexOf(t)==-1){t=1}
if(t==0){
var c=['0','重连','重新连接','检测','检测异常','传送','向前飞','§d§l信息','服务器信息']
};
if(t==1){
var c=['1','help 0-2','查询帮助','空格+文字','聊天','p help','执行命令','path help','查询快速建造方法','stop','停止建造','menu help','服务器自定义处理命令.']
}
if(t==2){
var c=['2','g help','几何生成','ops help','管你员命令','eval 命令','执行一个脚本','shop help','商店']
}
if(t==3){
var c=['3','-ter [value:r] [value:h] [block:Ary]','建造一座地形','-arc','向前方生成弧线','-fillsetblock [value:block|block:Ary]','设置随机填充的方块','-fillreplace [value:block|block:Ary]','设置被随机填充的方块','-fillstart [value:time%0-30]','随机填充','-explode [value:r] [value%0-500]','创造一个数量级的爆炸','-polygon [no data]','建筑多边体.']
}
if(t==4){
var c=['4','签到','签到','-inquire','看查信息.','空格 ','广播一个信息','-cmd [String:cmd]','执行并获得结果','-execute','设置一个自定义执行','-tp','传送最前面并获得方块视距.','-close','断开连接.']
}
if(t==5){
var c=['5','-list','列出在线','-kick','踢掉一个人','-ban','加入云黑','-banr','解除云黑','-ip','获得ip','-ell [value%0-10]','设置地形波动平滑值.','-all','给全部人执行指令.']
}


tell('§7帮助列表')
for(let i=1;i<c.length;i++){i+=1;tell('§7'+c[i-1]+' ---- §f'+c[i])
};tell('§7可输入-help <页数> 更多帮助,当前<'+t+'/2>');var c=null}

if(tells.substr(0,2)=='检测'&&tellsType=="chat"){
	if(xname!=='0'){
		tell('§a暂时无问题')
	}else{
		tell('§a暂时错误')
		cmd('testfor @s','GETIN')
	}
}

if(tells.substr(0,1)=='p'){
	let r=tells.replace(/\s+/g,' ').split(' ')
	let c=r[1]
	if(c=='help'){
		tellF('帮助.\n'+
		'§7p help ----\n'+
		'§7p help1 ----\n'+
		'§7p help2 ----\n')
	}
	if(c=='help1'){
		tellF('1 \n'+
		'§7签到 ---- §f签到\n'+
		'§7close ---- §f断开连接\n'+
		'§7执行 次数 命令 ---- §f执行一个命令.\n'+
		'§7信息 ---- §f个人信息\n'+
		'§7任务 ---- §f任务信息\n'+
		'§7反馈 [反馈信息] ---- §f提交反馈\n'+
		'§7stop ----§f 停止填充\n'+
		'§7踢出 [玩家] ---- §f把一个游戏内部玩家刷屏掉\n'+
		'§7改名 名称 ---- §f改名'
		)
	}
	if(c=='help2'){
		tellF('第二页\n'+
		'§7保存 ---- §f保存当前数据\n'+
		'§7防盗 ---- §f获取一个特殊tag标签,来防止别人登陆,有可能会记录ip。'+
		'§7\mexplode 范围 数量 ---- §f大婊炸')
	}
	
}
if(tells=='保存'){
	tell('保存中.')
	数据.写入(xname)
	tell('保存完毕')
}


if(tells.substr(0,3)=='踢掉 '){
	tell('成功发送命令-'+tells.substr(3)+'.')
	cmd('execute @e ~~~ execute @e ~~~ execute @e~~~ tell '+tells.substr(3)+' @e')
}





if(tells.substr(0,3)=='改名 '&&tellsType=="chat"){
	if(tells.substr(3)!==undefined){
		if(tells.substr(3).length<2){
			tell('§c成功')
			连接.名字=tells.substr(3)
		}else{
			if(data.vip!==undefined||ops.indexOf(xname)!==-1){
				tell('§c成功')
				连接.名字=tells.substr(3)
			}else{
				tell('§c太长了 ')
			}
		}
	}
}

if(tells.substr(0,8)=='explode '&&tellsType=="chat"){let txt=['num','num'];拆分e1(txt,tells.substr(8));if(执行==true&&测试[1]<500&&测试[1]>0){
	let a=[]
tell('§c§l即将爆炸')
a.push('execute @r[type=ender_crystal,c=10]~~~ summon lightning_bolt')
		for(let i=0;i<测试[1];i++){let x=Math.round(Math.random()*(2*测试[0])-测试[0])
			let z=Math.round(Math.random()*(2*测试[0])-测试[0])
			let y=Math.round(Math.random()*(2*测试[0])-测试[0]);
			a.push('summon ender_crystal ~'+x+' ~'+y+' ~'+z)}
		a.push('execute @e[type=ender_crystal,c=1000]~~~ summon lightning_bolt');let iui=1;function ef(){if(iui<a.length){
				setTimeout(function(){iui+=1;cmd(a[iui],'u'+i);ef()},1)}else{
				tell('Bong');a=iui=null}};ef()}else{tell('§aexplode 半径 0-500数量 执行。.')}
}




if(tells.substr(0,4)=='用户规范'&&tellsType=="chat"){
	tellF('§l一规则:§r§f\n'+
'1.1§7禁止生成国家法律法规所禁止的其它建筑，禁止发布一切危害公共利益和他人合法权益的建筑\n'+
'§f1.2§7禁止使用聊天室发布有关政治、色情、广告、血腥、暴力、等类信息，同时，禁止聊天室发送发具有贬低性、挑衅性、侮辱性、诽谤性、等的信息\n'+
'§f1.3§7若您在使用中遇到疑问,可咨询qq418685307或群内咨询\n'+
'§f1.4§7若您在游戏内发现异常或者提建议,可在群里@在线管理，或者私聊留言给管理，我们会查看您的反馈.\n'+
'例如：\n'+
'@管理员 我发现XX处发现XX问题\n'+
'@管理员 我希望更新xxx\n'+
'1.5若您在游戏中遇到违规玩家,请截图发送管理.\n'+
'1.6玩家尽量把群名片修改成游戏内ID.\n'+
'1.7若违规使用造成的损失,概不负责.\n'+
'1.8以上用户规范是为了提供有效合法服务而制定的,如不同意,请自行退出服务(输入-close退出)')
}



if(tells.substr(0,2)=='传送'&&tellsType=="chat"){
	for(let i=0;i<400;i++){cmd('execute @p ~~~ detect ^^^1 air 0 tp @s ^^^1','i'+i)}
};

/*
if(tells.
*/
if(tells.substr(0,4)=='-称号 '&&tellsType=="chat"){if(ops.indexOf(me.body.properties.Sender)!==-1){tell('§l成功');data.称号=tells.substr(4);写入(me.body.properties.Sender,['称号'])}else{tell('§c对象:'+me.body.properties.Sender+'-无权限')}
}

if(tells.substr(0,4)=='cmd '&&tellsType=="chat"){cmd(tells.substr(4),'GETR')
};


if(tells.substr(0,5)=='path '&&tellsType=="chat"){
	let ms=tells.replace(/\s+/g,' ').split(' ')
	let C=ms[1]
	if(连接.状态!==1){
	let r=tells.substr(5)
	let b=0
	let txt=0
	let p=0
	let show=[]
	if(引索[0]==undefined){
		p=1;
	}
if(C!=='path '&&搜索.indexOf(C)==-1){
	if(C!=='path'&&C!=='clear'&&C!=='list'&&C!=='help'){
	p=1;引索=[]
	for(let i=0;i<搜索.length;i++){
		if(p==1){
			if(搜索[i].indexOf(C)!==-1){
				txt+=1
				b+=1
				引索.push(b)
				引索.push(搜索[i])
				show.push('§7输入§r§f-path path '+b+' §7生成 §r'+地图[i])
			}
		}
	}
	if(txt==0){
		tell('§c没有找到任何关于 '+C+' 的建筑.')
	}else{
		tellF('\n一共找到 '+txt+' 个相关建筑,按照已下指令生成.\n'+show.join('\n'));show=null

}}
}else{
	if(搜索.indexOf(C)!==-1){
		tell('§a正在执行 '+C)
		名称=C
		funcs(C)
		引索=[]
}
}

	if(C=='path'){
			let as=0
			for(let i=0;i<引索.length;i++){
				if(引索[i]==Number(ms[2])){
					as+=1
					tell('§a正在执行 '+引索[i+1])
					名称=引索[i+1]
					funcs(引索[i+1])
					i+=1
					引索=[]
					break
				}
			}
			if(as==0){
				tell('§cpath path缓存没有找到 '+ms[2])
			}
	}
if(C=='help'){
	tellF('§a-path help列表\n'+
	'§7path help ---- §f查询帮助'+
	'\n§7path 名称 ---- §f搜索建筑并匹配'+
	'\n§7path path 指引数字 ----§f 搜索指引数字建筑'+
	'\n§7path list ---- §f列出指引数字和建筑'+
	'\n§7path clear ---- §f清空指引数字列表'
	
	
	)
}
	

if(C=='clear'){
	if(引索.length==0){
		tell('§c当前没有数据')
	}else{
		tell('§c已清理 '+(引索.length/2)+' 条')
		引索=[]
	}
}
if(C=='list'){
	if(引索.length==0){
		tell('§c当前没有数据')
	}else{
		let show=[]
		for(let o=0;o<引索.length;o++){
			show.push('§r§7名称:§f'+引索[1+o]+'§7,输入-path path §f'+引索[o])
			o+=1
		}
		tellF('一共找到§a '+show.length+'§f 条\n'+show.join('\n'))
	}
}
}else{
	tell('§c当前正在生成.可-stop 停止')
}
}


/*
if(tells.substr(0,5)=='-pos '&&tellsType=="chat"){
	let rrr=tells.replace(/\s+/g,' ').split(' ')
	let C=rrr[1]
	
	if(C=='help'){
		tell('§a坐标系统\n'+
		'§7pos sethome 名称 ---- §f设置当前世界家\n'+
		'§7pos removehome 名称 ---- §f移除当前世界家\n'+
		'§7pos home 名称 ---- §f回家\n'+
		'§7pos list ---- §f列出家名字\n'+
		'§7pos set x y z ---- §f设置下一次生成点.\n'+
		'§7pos show ---- §f获取当前坐标\n')
	}
	if(C=='show'){
		tell('§a~Wait~')
		cmd('testforblock ~~~ air','GETPOS')
	}
	if(C=='sethome'){
		tell('§c请稍后...')
		cmd('tag @s list','标签设置家')
	}
	if(C=='list'){
		cmd('tag @s list','标签查询家')
	}
	if(C=='set'){
		拆分e1(['num','num','num'],tells.substr(6))
		if(执行=='true'){
			tell('成功设置 ['+测试+']')
			data.下一次=测试
		}else{
			tell('§c请输入准确数字.')
		}
	}
	if(C=='removehom'){
		cmd('tag @s list','标签移除家'+rrr[2])
	}
	if(C=='home'){
		cmd('tag @s list','标签回家'+rrr[2])
	}
}
*/
if(tells.substr(0,1)=='g'){
	let A=tells.replace(/\s+/g,' ').split(' ')
	let C=A[1]
	if(C=='help'){
		tell('特殊建筑帮助列表.\n'+
		'§r§7g help ---- §f帮助\n'+
		'§7g list ---- §f生成列表')
	}
	if(C=='list'){
		tellF('列表\n'+
		'§7ter 半径 高度 方块1:特殊值 方块2:特殊值 .... (不填写默认0) ---- §f生成丘陵\n'+
		'§f-ell 值0-9.9 设置丘陵生成起伏值,ell越高起伏越大.默认1.5\n'+
		'§7rf help ---- §f随机填充方块\n'+
		'§7random 宽度[0-200] 数量[0-100000] 方块1:特殊值 方块2:特殊值 .... 在当前位置随机生成方块')
	}
}

if(tells.substr(0,2)=='rf'&&tellsType=="chat"){
	let A=tells.replace(/\s+/g,' ').split(' ')
	let C=A[1]
	if(C=='help'){
		tellF('§7rf help ---- §f帮助\n'+
		'§7rf reset [addr,addb]---- §f清除属性\n'+
		'§7rf addr 英语方块名称[仅 一个单词 不能特殊值] ---- §f添加被替换的方块\n'+
		'§7rf addb 同rf addr输入方法 ，但是可以添加特殊值，用空格隔开 如 wool 1---- §f添加随机填充的方块\n'+
		'§7rf list ---- §f列出已经添加的东西\n'+
		'§7rf start 边长0-50 高度0-120 ---- §f以自身为单位，随机将 边长 内 高度 的设定的所有 addr 方块 随机替换为 addb 的方块.\n此算法是原版命令方块随机填充方法..所以时间较快,卡顿较高.如果addr addb同一样的，后果自负。')
	}
	if(C=='addr'){
		if(连接.addr.indexOf(A[2])==-1){
			tell('添加成功-'+A[2])
			连接.addr.push(A[2])
		}else{
			tell('已存在'+A[2]+'，被替换的只能添加一个')
		}
	}
	if(C=='addb'){
		tell('添加成功'+A[2])
		连接.addb.push(A.slice(2,4).join(' '))
	}
	if(C=='list'){
		tell('§7会被填充的方块有:§r§f'+连接.addr)
		tell('§7随机填充的方块:§f'+连接.addb)
	}
	if(C=='reset'){
		let m=0
		if(A[2]=='addr'){
			tell('清理成功,addr,数量:'+连接.addr.length)
			m=1
			连接.addr=[]
		}
		if(A[2]=='addb'){
			tell('清理成功,addb,数量:'+连接.addb.length)
			m=1
			连接.addb=[]
		}
		if(m==0){
			tell('只能清理addr 或者 addb//-rf reset addr/addb')
		}
	}
	if(C=='start'){
		if(A[2]<50&&A[2]>0){
			if(A[3]<120&&A[3]>0){
				let 宽=Number(A[2])
				let 高=Number(A[3])
				let ss=0
				let us=0
				function G(){
					if(ss<高){
						setTimeout(function(){
						cmd('fill ~'+宽+'~'+(ss)+'~'+宽+'~-'+宽+'~'+(ss)+'~-'+宽+' wooden_button 0 replace '+连接.addr[Math.round(Math.random()*连接.addr.length-0.5)],us+'h')
						/*	cmd('fill ~'+宽+'~'+(ss-1)+'~'+宽+'~-'+宽+'~'+(ss-1)+'~-'+宽+' '+连接.addb[Math.round(Math.random()*连接.addb.length-0.5)]+' replace wooden_button',us+'h')*/
							cmd('execute @e[name="橡树按钮",r=100]~~~setblock ~~~'+连接.addb[Math.round(Math.random()*连接.addb.length-0.5)],us+'s')
							cmd('kill @e[name="橡树按钮",r=100]',us+'u')
							us+=1
							if(us>=40){
								us=0
								ss+=1
							}
							G()
						},50)
					}else{
						tell('执行完成。')
					}
				}
				G()
			}else{
				tell('§c高度在0-50内。')
			}
		}else{
			tell('§c宽必须50以内')
		}
	}
}








if(tells.substr(0,4)=='menu'&&tellsType=="chat"){
	let rap=tells.replace(/['"']+/g,'■')
	let w=rap.replace(/\s+/g,' ').split(' ')
	let r=w[1]
	if(r=='help'){
		tellF('§a自定义命令.\n'+
		'§7meun add ---- §f创建一个指令,输入创建的名称就可以执行了\n'+
		'§7menu remove ---- §f删除一个指令项目\n'+
		'§7menu list ---- §f列出指令\n'+
		'§7menu cmd add 目标 指令 ---- §f给目标添加一条指令\n'+
		'§7menu cmd list 目标 ---- §f查询目标指令信息\n'+
		'§7menu cmd remove 目标 ---- §f删除目标一条指令.\n'+
		'§7menu cmd iremove 目标 序数 ---- §f在 序数 行删除指令\n'+
		'§7menu cmd iadd 目标 序数 指令 ---- §f在 序数 行添加指令\n'+
		'§7menu cmd iset 目标 序数 指令 ---- §f设置 序数 行的指令\n'+
		'§7menu cmd remove 目标 ---- §f重置目标指令\n'+
		'§7menu operation 目标1 [=,+=] 目标2 ---- §f和计分板一样opear目标指令，该操纵不会重复指令\n'+
		'§7menu info ---- §f信息'+
		'§7menu save ---- §f§c保存设置,为节省内存不会自动保存.')}
		
		
		if(r=='info'){
			if(data.menu!==undefined){
				let rs=[]
				for(let i in data.menu){
					if(data.menu.list.indexOf(i)!==-1){
						rs.push('§7输入信息§a-'+i+'§7激活§f:[\n'+data.menu[i].join('\n§7指令:§r§f')+'\n§f],')
					}
				}
				tellF('一共有 §a'+data.menu.list.length+' §f个指令.\n'+rs.join('\n'))
				rs=''
			}else{
				tell('§c无数据')
			}
		}
		
		
		
		
		if(r=='list'){
			if(data.menu==undefined){
				tell('§c暂无数据')
			}else{
				tell('§a当前:\n'+data.menu.list.join('\n'))
			}
		}
		if(r=='add'){
			if(w[2].length<=12){
			if(data.menu==undefined){
				data.menu={}
				data.menu.list=[w[2]]
				data.menu[w[2]]=[]
				tell('成功添加 '+w[2])
			}else{
				if(data.menu.list.length<=15){
					if(data.menu.list.indexOf(w[2])==-1){
						data.menu.list.push(w[2])
						tell('成功添加 '+w[2])
						data.menu[w[2]]=[]
					}else{
						tell('§c已存在 '+w[2])
					}
				}else{
					tell('§c你已经创建了 15 个了,创建失败')
				}
			}
			}else{
				tell('§c你输入的 '+w[2]+' 太长了.最大12字符')
			}
		}
		if(r=='save'){
			if(data.menu==undefined){
				tell('§c当前没有设置指令')
			}else{
				if(冷却==0){
				tell('保存成功')
				冷却=30
				写入(xname,['menu'])
				}else{
					tell('§c请 '+冷却+' 秒后再试.')
				}
			}
		}
		if(r=='remove'){try{
			if(data.menu!==undefined){
				if(data.menu.list.indexOf(w[2])!==-1){
					tell('成功删除 '+w[2])
					data.menu.list.splice(data.menu.list.indexOf(w[2]),1)
					delete data.menu[w[2]]
				}else{
					tell('§c不存在 '+w[2])
				}
			}else{
				tell('§c删除失败')
			}
		}catch(err){tell(err)}}
		if(data.menu!==undefined){
			if(r=='cmd'){
				if(data.menu.list.indexOf(w[3])!==-1&&data.menu[w[3]]!==undefined){
					let v=data.menu
					let q=w[2]
					if(q=='add'){
						let E=w.slice(4,w.length).join(' ')
						if(E.length<100){
							if(v!==undefined){
								if(v[w[3]].length<100){
							tell('成功添加 '+E)
							data.menu[w[3]].push(E)
								}else{
									tell('§c最多100条')
								}
							}else{
								tell('成功添加 '+E)
								data.menu[w[3]]=[E]
							}
						}else{
							tell('§c太长了命令无法接受')
						}
					}
					if(q=='list'){
						if(v!==undefined){
							for(let i=0;i<v[w[3]].length;i++){
								tell('§l-'+i+':§r§7'+v[w[3]][i])
							}
						}else{
							tell('§c没有数据')
						}
					}
					if(q=='remove'){
						if(v!==undefined){
							tell('成功删掉了 '+v[w[3]].length+' 个命令')
							data.menu[w[3]].splice(data.menu[w[3]].length,1)
						}else{
							tell('§c删除失败')
						}
					}
					
					if(q=='iadd'){
						if(v[w[3]].length<100){
							let E=w.slice(5,30).join(' ')
							if(E.length<100){
								data.menu[w[3]].splice(w[4],0,E)
								tell('成功在 '+w[4]+' 添加了 '+E)
							}else{
								tell('§c太长了-30')
							}
						}else{
							tell('§c当前指令超过100!,数量太多不能执行。')
						}
					}
					if(q=='iremove'){
						tell('成功删除 '+v[w[3]][w[4]])
						data.menu[w[3]].splice(w[4],1)
					}
					if(q=='reset'){
						tell('已经重置 '+w[3])
						data.menu[w[3]]=[]
					}
					if(q=='iset'){
						if(v[w[3]].length<100){
							let E=w.slice(5,v[w[3]].length+1).join(' ')
							if(E.length<=50){
								tell('成功在 '+w[4]+' 设置 '+E)
								data.menu[w[3]].splice(w[4],1,E)
							}else{
								tell('§c太长了接受不了')
							}
						}
					}
					
					
					
					
					
					
					
				}else{
					tell('§c没有找到 '+w[3])
				}
			}
			
			
			
			
		}else{
			tell('§c还没有目标,试试menu add 目标')
			
			
			
			
			
			
		}
		
		
		
		
		
		
		
}











if(tells.substr(0,4)=='shop'&&tellsType=="chat"){
	if(data.称号s==undefined){
		data.称号s=[]
		data.称号=[]
		写入(xname)
	}
	let r=tells.replace(/\s+/g,' ').split(' ')
	let C=r[1]
	if(C=="help"){
		tell('§e商店'+
		'\n§7称号 help ---- §f称号')
	}
}
if(tells.substr(0,2)=='称号'&&tellsType=="chat"){try{
	if(data.称号s==undefined){
		tell('§c第一次使用命令.请认真阅读.')
		data.称号s=[]
		data.称号=[]
		写入(xname)
	}
	let r=tells.replace(/\s+/g,' ').split(' ')
	let C=r[1]
	if(C=='help'){
		tellF('§l§e称号帮助.\n'+
		'§r§7称号 list ----§f 列出称号[上限100个]\n'+
		'§r§7称号 remove 名称 ---- §f删除称号\n'+
		'§r§7称号 reset ---- §f清除使用中的称号\n'+
		'§r§7称号 add 名称 ---- §f添加使用称号,上限:4\n'+
		'§r§7称号 抽奖 list ---- §f列出抽奖的类型\n'+
		'§r§7称号 抽奖 名称 ---- §f抽奖.\n'+
		'§r§7称号 set 当前使用的名称 颜色代码例如:§1测试 \n'+
		'§r§c称号 save ---- 保存设置,除了抽奖不需要手动保存,其他都需要手动保存')
	}
	if(C=='list'){
		tell('§r§7当前有'+data.称号s.length+'个:-\n'+data.称号s.join(';'))
	}
	if(C=='remove'){
		if(data.称号s.indexOf(r[2])!==-1){
			tell('已经删除:'+r[2])
			data.称号s.splice(data.称号s.indexOf(r[2]))
		}else{
			tell('§c不存在:'+r[2])
		}
	}
	if(C=='reset'){
		tell('§c已经清理:'+data.称号)
		data.称号=[]
	}
	if(C=='add'){
		if(data.称号.length<4){
			if(data.称号s.indexOf(r[2])!==-1){
				tell('添加成功,当前颜色为无色,可以输入。-称号 set '+r[2]+' 颜色代码-两个叠着的ss 更改颜色,和彩色文字一样的 ')
				data.称号.push(r[2])
			}else{
				tell('§c未拥有当前.')
			}
		}else{
			tell('§c§l上限4个')
		}
	}
	if(C=='set'){
		if(data.称号.indexOf(r[2])!==-1){
			let h=[]
			for(let i=0;i<r[3].length;i++){
				if(r[3][i]=='§'&&r[3][1+i]!==undefined){
					h.push('§'+r[3][i+1])
				}
			}
			tell('更改成功.')
			data.称号[data.称号.indexOf(r[2])]=h.join('')+data.称号[data.称号.indexOf(r[2])]
		}else{
			tell('§c必须更改使用中的.')
		}
	}
	if(C=='save'){
		tell('§l数据写入成功.')
		写入(xname)
	}
	if(C=='抽奖'){
		if(r[2]=='list'){
			let m=[]
			for(let i in 抽奖){
				let 价格=Math.round(抽奖[i].价格*data.称号s.length*0.80)
				m.push('§7输入-称号 抽奖 §f'+i+'§7 价格 §f'+价格)
			}
			tellF('\n'+m.join('\n'))
		}else{
			if(抽奖[r[2]]!==undefined){
			if(data.称号s.length<100){
			if(抽奖[r[2]]!==undefined){
				try{
					let m=抽奖[r[2]].列表
					let 价格=Math.round(抽奖[r[2]].价格*data.称号s.length*0.80)
					if(data.money>=价格){
					let f=m[Math.round(Math.random()*m.length-0.5)]
					tell('§l恭喜抽中了-\n'+f+'\n§r§f用了:'+价格+'\n§f还剩:§7'+data.money)
					data.称号s.push(f)
					data.money-=价格
					写入(xname)
					
				}else{
					tell('§c钱不够了.')
				}
				}catch(err){tell('§c'+err)}
			}else{
				tell('§c没有名叫:'+r[2]+'的项目.')
			}
			}else{
				tell('§c已经有100个了,请删掉一些吧.')
			}
		}else{
			tell('§c输错了。')
		}
			
			
		}
	}
}catch(err){tell('§c'+err)}}

















	
if(tells.substr(0,4)=='line'&&tellsType=="chat"){var txt=['num','num','num','num','num','num','str'];拆分e1(txt,tells.substr(5));if(执行==true){let qp =Math.pow(Math.abs((测试[0]-测试[3])*(测试[2]-测试[5])*(测试[1]-测试[4])),1/3);if(qp>500){tell('§d方块过多~'+Math.round(qp))}else{名称='线';setblock(Yam.建筑.连线(测试[0],测试[1],测试[2],测试[3],测试[4],测试[5],测试.slice(6,100)))
}}else{tell('§d请输入-line 开始:x y z 结束:x y z 方块组:block.ary')}
};

if(tells.substr(0,6)=='random'){
	let txt=['num','num','str']
	拆分e1(txt,tells.substr(7))
	if(执行==true){
		if(测试[0]<200&&测试[0]>0){
			if(测试[1]<100000&&测试[1]>0){
				setblock(Yam.建筑.随机(测试[0],测试[1],测试.slice(2,100)))
			}else{
				tell('太多了,范围0-200 数量 0-10000')
			}
		}else{
			tell('太多了,范围0-200 数量 0-10000')
		}
	}else{
		tell('-random 宽度 数量 方块')
	}
}




if(tells=='-close'&&tellsType=="chat"){断开()
}
if(tells.substr(0,2)=='签到'&&tellsType=="chat"){if(data.签到月!==Number&&data.签到日!==Number&&data.连签!==Number){let 月=data.签到月;let 日=data.签到日;let 签到月=(new Date).getMonth();let 签到日=(new Date).getDate();日-=签到日;月-=签到月;if(月!==0){let mmnny=parseInt((((data.连签)+1)*Math.round(Math.random()*650.5)).toFixed(2));tell('§r§7新的一个月到来.\n§7正在结算...\n恭喜获得额外奖励*§7'+mmnny+'仙力。\n~~~'+xname);data.连签=0;data.money+=mmnny};if(日!==0){if(日==1||日==-1){tell('§r§7表现良好,连签§f+1');data.连签+=1}else{tell('§r§7已经断签');data.连签=0};let tx=Number(String(Math.random()*50).substring(0,4));经验检测+=tx;data.连签+=1;let mon=parseInt(((data.连签)*Math.round(Math.random()*2500.5)).toFixed(2));tell('§r§7恭喜获得§f'+mon+'仙力\n'+经验检测+'经验');data.money+=mon;tell('§b§l任务已经刷新');写入(xname);data.复制任务=0;data.反馈任务=0;data.在线任务=0;cps()}else{tell( '§r§d今天已经签到了,重置还有'+(24-(new Date).getHours())+'时'+(64-(new Date).getMinutes())+'分....')};data.签到日=签到日;data.签到月=签到月}else{tell('§r§d签到失败:数据异常')}
cps()
};


/*
if(tells.substr(0,3)=='-s '&&tellsType=="chat"){
	tell('§l正在搜索中. . .')
	let r=[];let c=0
	for(let i=0;i<地图.length;i++){
		if(地图[i].indexOf(tells.substr(3))!==-1){
			r.push(地图[i])
			c+=1
		}
	}
	tell('§l您搜索的 '+tells.substring(3,10)+' \n一共发现 '+c+' 个可能关联的建筑\n'+r.join('\n'));c=r=null
};



*/
if(me.body.properties.Message.substr(0,11)=='-schematic '&&me.body.properties.MessageType=='chat'){fs.readFile(me.body.properties.Message.substr(11),(error, data)=>{if(error){tell('§r§c未找到该路径...')}else{schematic.parse(data,(err, block)=>{if(err){
tell('§c§l文件类型错误:'+Math.round(Math.random()*100+1000))}else{let f=[];if(me.body.properties.Message.substr(13).indexOf('.schematic')>=0){var sche=new Array();for(xs=0;xs<block.width;xs++){
for(y=0;y<block.height;y++){
for(z=0;z<block.length;z++){if(block.getBlock(xs,y,z).name!='air'&&block.getBlock(xs,y,z).name!=''){
f.push('setblock ~'+(xs+xyz[0])+' ~'+(y+xyz[1])+' ~'+(z+xyz[2])+' '+block.getBlock(xs,y,z).name+' '+block.getBlock(xs,y,z).metadata);}}}

};tell('§dGenerate command completion, quantity §f'+sche.length)
/*(setb)lock(f)*/;fs.writeFile(tells.substr(11),f.join('\n'));fs=null}else{tell('§dFailed to resolve directory, error code:'+Math.round(Math.random()*100+1000))}

}/*else*/})/*sch*/}/*else*/})
};
if(me.body.properties.Message=='-location'&&me.body.properties.MessageType=='chat'){cmd('testforblock ~ ~ ~ air ','GETPOS');tell('§lIn the inquiry. ');};
if(me.body.properties.Message=='-locinfo'&&me.body.properties.MessageType=='chat'){tell('§aX:'+xyz[0]+',Y:'+xyz[1]+',Z:'+xyz[2])
}; 
if(me.body.properties.Message.substr(0,5)=='-nbt '&&me.body.properties.MessageType=='chat'){fs.readFile(me.body.properties.Message.substr(5),(error,data)=>{if(error){tell('§r§dCannot found this path,Please check again!')}else {
tell('§r§7Please wait . . .');nbt.parse(data,(nbterror,nbtdata)=>{
if(me.body.properties.Message.substr(7).indexOf('.nbt')>=0){
for(i=0;i<nbtdata.value.blocks.value.value.length;i++){
var x=nbtdata.value.blocks.value.value[i].pos.value.value[0]//x
var y=nbtdata.value.blocks.value.value[i].pos.value.value[1]//y
var z=nbtdata.value.blocks.value.value[i].pos.value.value[2]//z
var blockname=nbtdata.value.palette.value.value[nbtdata.value.blocks.value.value[i].state.value].Name.value;blockname=blockname.replace('minecraft:','');if(blockname!=='air'){
NBT.push('setblock '+' ~'+(xyz[0]+x)+' ~'+(xyz[1]+y)+' ~'+(xyz[2]+z)+' '+blockname)}}
/*setblock(NBT)*/;fs.writeFile(tells.substr(5),NBT.join('\n'));setTimeout(function(){NBT=null
},10000)}else{cmd('§dCannot.Analysis.commandLine ')}
})//nbt
}//else
})// fs
};//if


if(me.body.properties.Message.substr(0,6)=='-pixe '&&me.body.properties.MessageType=='chat'){
tell('§dRead~~'+tells.substr(6))
var pixey=8;
if(me.body.properties.Message.substr(8,3)=='-y '){
pixey=11
}
//getPixels
 require("get-pixels")(tells.substr(6),(err, pixels)=>{
  if(err) {tell('err')}
  else{
  	var data= pixels.data;
  var rgb = [];
  var datas = [];
  for (var i = 0; i < data.length; i++) {
  datas.push(data[i]);
   if (i != 0 && (i + 1) % 4 == 0) {
   rgb.push(datas);datas=[];
  }
  }//for
  var rgbs=[];
  var rgbx=0;
  for (var xs = 0; xs <pixels.shape[1]; xs++) {
  	for (var z = 0; z <pixels.shape[0]; z++){
  	if(pixey==11){rgbs.push([[0,-xs,-z],[rgb[rgbx][0],rgb[rgbx][1],rgb[rgbx][2]]])}
    else{rgbs.push([[z,0,xs],[rgb[rgbx][0],rgb[rgbx][1],rgb[rgbx][2]]])}
  		if(rgb[rgbx][3]==0){rgbs.pop()}
  		rgbx++
  		}}
  		rgb=[]
var ch=[]

for(var c=0;c<rgbs.length;c++){

//var rsgsbs=['stone',255,255,255];
var rsgsbsb=[];
for(var is=0;is<colors.length;is++){

var r=Math.abs(rgbs[c][1][0]-colors[is][0])
var g=Math.abs(rgbs[c][1][1]-colors[is][1])
var b=Math.abs(rgbs[c][1][2]-colors[is][2])



 rsgsbsb.push((r*r)+(g*g)+(b*b));
};
//列表索引超出范围(rsgsbsb)
 rgbs[c][1]=colors[rsgsbsb.indexOf(Math.min.apply(null, rsgsbsb))][3]
 



rgb.push('setblock ~'+(xyz[0]+rgbs[c][0][0])+' ~'+(xyz[1]+rgbs[c][0][1])+' ~'+(xyz[2]+rgbs[c][0][2])+' '+rgbs[c][1])
/*if(rgb.length>10000){
	ch=ch.concat(rgb)
	rgb=[]
}*/
};
/*
tell('§l§f区块排序中。')
var ds=[]
var da=rgb[0];var db=rgb[rgb.length-1];
da=da.split(' ');db=db.split(' ')
tell(da+' '+db)
var a=Math.abs(Math.round((parseInt(da[1])-parseInt(db[1]))/10))
var b=Math.abs(Math.round((parseInt(da[3])-parseInt(db[3]))/10))
var 长=Math.abs(parseInt(da[1])-parseInt(db[1]))
var 宽=Math.abs(parseInt(da[3])-parseInt(db[3]))
for(var i=0;i<9;i++){
var taa=rgb[((i)*a)*宽+1].split(' ')
ds.push('tp '+taa[1]+' ~ '+taa[3])
	for(var o=0;o<10;o++){

		for(var u=0;u<a;u++){
			for(var p=0;p<b;p++){
				ds.push(rgb[((i)*a+u)*宽+(o*b+p)])
			}
		}
	}
}

*/
/*ch=ch.concat(rgb)*/
fs.writeFile('图片.js',rgb.join('\n'))
tell('成功')
rgb=[];ds=[]
}/*else*/})//getPixels

};//pixe
if(tells.substr(0,3)=='ter'&&tellsType=="chat"){var txt=['num','num','str'];拆分e1(txt,tells.substr(4));if(执行==true){if(vip!==true){if(测试[0]*测试[1]>1000){tell('§c请不要刷屏.')}else{;qiuling(测试[0],测试[1],测试.slice(2,100))}}else{;qiuling(测试[0],测试[1],测试.slice(2,100),ell)}}else{tell('§a请输入-ter 半径 高度 方块(一个方块 或空格多方块.)')}
};
if(tells.substr(0,2)=='规则'&&tellsType=="chat"){tell('§f规则:每日§l用户§r§f签到可获得仙力,仙力可用于§l复制§r§f建筑,购买§l建筑卡§r§f,购买§l称号§r§f等.\n然后长期§l在线§r§f或者§l复制建筑§r§f可获得经验,达到一定经验就可以§l升级§r§f.\n升级不仅可以获得仙力;还可以获得§l天赋点§r§f,天赋点可用于升级以下\n§l升级速度;复制速度;复制费用.\n§r§f完成任务也可以获得经验:\n§l每日建议提交,在线,复制建筑.\n§r§f此外,仙力实在缺乏.可像端主打赏小费(为了生存)获得仙力,1软妹=2500仙力;\n初始复制速度是95b/s,1仙力=50复制方块，方块小于25万无需付费\n每日最多复制10建筑，更多的话会以初始费用100仙力;每次增长50计算。祝你好运')
}
if(tells!==undefined&&tellsType=='chat')console.log((new Date).getHours()+':'+(new Date).getMinutes()+':'+(new Date).getSeconds()+'['+xname+']'+tells)







}else{
	tell('§c你的语言带有违禁词.')
}









// 
 };//say区------------------__________--------
 
 
 
/*if(requestId!==undefined)if(requestId.indexOf('标签')!==-1){
	let msg=me.body.statusMessage
	if(msg.indexOf('有')!==-1){
		let id=requestId
		let tag=msg.substring(msg.indexOf(验证ss),msg.indexOf(验证sb)+2).split('aaa')
		
		if(id=='标签查询家'){
			let rt=0
			for(let i=0;i<tag.length;i++){
				if(tag[i].indexOf('家')!==-1){
					tell('§7名称:'+tag[i]+'§f坐标:§a'+tag.slice(i+1,i+4))
					rt=1
				}
			}
			if(rt==0){
				tell('§c还没有数据')
			}
		}
		if(id.indexOf('回家')!==-1){
			let ms=id.substr(4)
			if(tag.indexOf(ms)!==-1){
				tell('§6正在返回 §c'+ms)
				setTimeout(function(){
					let Xi=tag.slice(tag.indexOf(ms),tag.indexOf(ms)+4).join(' ')
					cmd('tp @s '+Xi,'000000000000-0000-0000-0000-0000-000000000')
				},1500)
			}
		}
		if(id.indexOf('设置家')!==-1){
			let ms=id.substr(5)
			let 数量=0
			for(let i=0;i<tag.length;i++){
				if(tag[i].indexOf('家')!==-1){
					数量+=1
				}
			}
			if(数量<20){
				cmd('testforblock ~~~ air','DET设置家'+ms)
			}else{
				tell('§c数量太多了,删掉一些吧')
			}
		}
		if(id.indexOf('删除家')!==-1){
			let ms=id.substr(5)
			if(tag.indexOf('ms')!==-1){
				tell('已经删除了.')
				tag.splice(tag.indexOf(ms),tag.indexOf(ms)+4)
				d存(tag)
			}else{
				tell('§c名称 '+ms+' 无效.')
			}
		}
		
		
		
		
		
		
	}else{
		tell('§c未知错误102')
	}
}
 
 */

if(requestId!==undefined)if(requestId.indexOf('GET')!==-1){
let id=requestId



if(id=='GET所有人l'){
	if(me.body.victim!==undefined){
		在线人+=me.body.victim.length
		在线人民=在线人民.concat(me.body.victim)
	}
}



if(id=='GET生成'){
if(me.body.position!==undefined){
xyz[0]=me.body.position.x
xyz[1]=me.body.position.y
xyz[2]=me.body.position.z
tell('当前 '+xyz);连接.状态=1
locass='execute @s '+xyz.join(' ')+' '
}
}
if(requestId.indexOf('GET全局')!==-1){

if(id.indexOf('GET全局list')!==-1){let n=me.body.victim.join(',');let ns=id.substr(9);all('tellraw @p[name='+ns+'] {"rawtext":[{"text":"'+n+'"}]}','a')}

if(id.indexOf('GET全局kick')!==-1){if(me.body.victim[0]==id.substr(9))断开()
}
if(id.indexOf('GET全局保存')!==-1){
	if(xname==id.substr(7)){
		tell('§a你的数据已经被管理员更改_暂时无法看查');读取玩家(xname);data=数据.缓存
	}
}
}
if(requestId=='GET当前所有人'){
	try{
	if(me.body.victim!==undefined)if(me.body.victim.length!==连接.当前人){
		let gg='§f退出游戏'
		let cc=[]
		let 新的=me.body.victim
		let 旧的=连接.世界
		let 进入=[]
		let 退出=[]
		let m=0
		for(let i=0;i<新的.length;i++){
			if(旧的.indexOf(新的[i])==-1){
				进入.push(新的[i])
				m+=1
			}
		}
		if(m<旧的.length){
			for(let i=0;i<旧的.length;i++){
				if(新的.indexOf(旧的[i])==-1){
				退出.push(旧的[i])
			}
		}
		}
		if(退出.length>0)alltell('§7'+退出+'§f退出游戏')
		if(进入.length>0)alltell('§7'+进入+'§f加入游戏')
		
		
		连接.世界=me.body.victim
		连接.当前人=连接.世界.length
	}
}catch(err){
	
}
}

if(id.indexOf('GEThome')!==-1){
	if(me.body.postion!==undefined){
xyz[0]=me.body.position.x
xyz[1]=me.body.position.y
xyz[2]=me.body.position.z
tell('成功保存 -'+id.substr(7)+' 在 §a'+xyz)
let values=标签.substring(value.indexOf(验证ss),value.indexOf(验证sb)+2).split('aaa')
d添(values,[id.subatr(7),xyz.join(' ')])
	}
}







/*
if(requestId=='GET验证2'){
let 验证ss='a�'
let 验证sb='b�'

	if(me.body.statusMessage!==undefined){
	if(me.body.statusMessage.indexOf(验证sb)!==-1){
		
		let value=me.body.statusMessage
		let values=value.substring(value.indexOf(验证ss),value.indexOf(验证sb)+2).split('aaa')
		let ccct=values.join('aaa')
		标签=ccct
		d改(values,['登陆',1+parseInt(values[values.indexOf('登陆')+1])])
		tell('§7第§f'+(1+Number(values[values.indexOf('登陆')+1]))+'§7次登陆世界')
		
		
	}else{
		公共数据.世界+=1
		公共写入(['世界',公共数据.世界])
		setTimeout(function(){tell('§7世界id:§f'+公共数据.世界+'\n§7tag remove取消.')})
		let cmdss=验证ss+'aaa世界aaa'+公共数据.世界+'aaa登陆aaa1aaa'+验证sb
		cmd('tag @s add '+cmdss,'0000-0000')
		标签=cmdss
	}
	}
	
}*/
if(requestId=='GET验证1'){
		if(data.禁止登陆!==undefined){
			if(data.禁止登陆时间==undefined){
				tell('§c你已经可以登陆了')
				delete data.禁止登陆
				写入(xname)
		}else{
			if(data.禁止登陆时间!==undefined){
				let 时间s=时间.换算(data.禁止登陆)
				let 皮s=时间.换算(时间.时间())
				if(皮s-时间s<Number(data.禁止登陆时间*60)){
					tell('§c§l当前无法登陆.还有'+(data.禁止登陆时间*60-(皮s-时间s))+'秒')
					setTimeout(function(){断开()},200)
				}else{
					tell('§a恭喜解封了')
					delete data.禁止登陆时间
					delete data.禁止登陆
					写入(xname)
				}
			}
		}
		}
	let 游戏=null
if(me.body.statusMessage!==undefined)if(me.body.statusMessage.indexOf('false')!==-1){
游戏='中国版'
}else{
游戏='国际版'
for(let i=0;i<1000;i++)yyy.send('时间嗯呵呵哦哦看看啊啊一样让人背包密码那你信息重重正在试试鹅鹅请求匹配流量看看即将呵呵公共方法弟弟试试啊啊匹配哦哦iiuuYY天天慢慢那你背包')
断开()
}
连接.版本=游戏
setTimeout(function(){登陆提示()},200)
}


if(requestId=='GET验证'){
	
	
	
if(me.body.statusMessage!==undefined){if(me.body.statusMessage.indexOf('�'+连接.即将更改)!==-1){
		tell('§l§a欢迎加入,权限-管理员，速度已成为VIP速度-250.25')
		
		连接.speed=300
		xname=连接.即将更改
		
	}else{
		tell('§c检测到你名称异常')
		断开()
	}
}else{tell('§c网络波动');断开()}
}

if(requestId=='GETHEART'){if(me.body.position!==undefined)心跳=true}
if(requestId=='GETPOS'){
//开启后如果有返回的信息有坐标信息，则储存
if(me.body.matches!==undefined&&me.body.position!==undefined){
xyz[0]=me.body.position.x
xyz[1]=me.body.position.y
xyz[2]=me.body.position.z
tell('§l['+xyz+']')
}
}
;if(requestId=='GETR'){
	cmd('say '+str,'0000-0000')
	console.log(str)
}



if(requestId=='GETIN'){
	
	if(me.body.victim!==undefined){
	栏检测=1;let s=me.body.victim.join('l@§$');if(ops.indexOf(s)==-1&&维护==true){断开()};xname=s;
	
	连接.名字=xname
	if(xname.length>15)
{yyy.send('非法名字');断开()}else{读取(xname)
all('testfor @a','GET所有人l');在线人=0;在线人民=[]
;setTimeout(function(){
alltell('§7玩家 §f'+xname+'§7 加入了云端.世界玩家:§f'+在线人民.length)
},3000)
}}else{
	tell('§c验证超时,请重新登陆')
	yyy.send('你好,网络延迟请重新登陆.')
	断开()
}}




/*
if(requestId.indexOf('导出')!==-1){
let a=me.body.statusMessage
if(me.body.matches!==undefined&&me.body.position!==undefined){
	let x=me.body.position.x;
	let y=me.body.position.y;
	let z=me.body.position.z;
	let s=a.substring(a.indexOf('为')+2,a.indexOf('(')-1)
if(块[s]!==undefined){

if(特殊值.indexOf(s)==-1){
公共变量3.push('setblock ~'+(x-公共变量4[0])+' ~'+(y-公共变量4[1])+' ~'+(z-公共变量4[2])+' '+块[s]['id']+' '+块[s]['data'])

}else{
	特殊.push([x-公共变量4[0],y-公共变量4[1],z-公共变量4[2],块s['id']])
}

}else{
if(s=='空气'){
}else{公共变量+=1;if(公共变量2.join(',').indexOf(s)==-1){
	公共变量2.push(s)
}}
}
}
}*/
}

if(requestId==undefined){
	断开()
	tell('检测到你连接异常\n1.网络不通畅\n2.连接异常\n')
	yyy.send('undefined.')
	
}

function commandF(Purpose,requestId){
	
if(requestId)if(Purpose=='error'&&requestId.indexOf('00000000-0000-0000-0000-')>=0){
if(requestId=="00000000-0000-0000-0000-000000000000"||requestId=="00000000-0000-0000-0000-900000000001"||requestId=="00000000-0000-0000-0000-990000000001"){ 
//发现错误发一次然后跳过这错误
}else{

if(boxc.length>0){
	cmd(locass+boxc[boxc1[Number(requestId.split('-')[4])-1]],requestId)
	
}//if 

};//else
};








if(requestId!==undefined)if(Purpose=='commandResponse'&&requestId.indexOf('00000000-0000-0000-0000-')>=0){

if(requestId=="00000000-0000-0000-0000-000000000000"||requestId=="00000000-0000-0000-0000-900000000001"||requestId=="00000000-0000-0000-0000-990000000001"){ 

//接包然后储存包信息给box
}else{


if(boxc.length>0){





进度sss=boxc1[boxc1.length-1]
进度=进度sss
boxc1[Number(requestId.split('-')[4])-1]+=连接.speed;
/*if(中断!==false){中断进度+=1;
if(中断进度>=20){
	if(data.中断==undefined){
		data.中断={'坐标':locass,'进度':boxc.length,'路径':中断}
	}else{
		data.中断.进度=boxc.length
	}
};中断进度=-1;写入(xname,['中断'])}*/
	cmd(locass+boxc[boxc1[Number(requestId.split('-')[4])-1]],requestId)

 if(boxc1[Number(requestId.split('-')[4]-1)]>=boxc.length){if(连接.状态==1){连接.状态=0;tell('§e§l执行完成');
 
 /*if(正在导出==2){
 	Yam2.第二次完成()
 	正在导出=0
 }
 if(正在导出==1){
 	Yam2.导出结束()
 	正在导出=2
 }
 */
 结束u();连接.皮=1;进度条s=false;setTimeout(function(){
 	boxc1=[];boxc=[];;
 }),1000}}
}//if 
};
}};
commandF(messagePurpose,requestId)
/*if(requestIf.indexOf(测试)!==-1){
		try{
		if(me.body.statusMessage!==undefined){
			let f=me.body.statusMessage
			
			if(f=='方块已放置'){}else{
				if(f.indexOf('意外的')!==-1)
				{
				Yam2.自我检测.push(requestId)
			}else{
				Yam2.自我检测.push(requestId+'id过大')
			}
			}
		}
		}catch(err){
			tell('err')
		}
}*/
/*if(正在导出==1)if(me.body.position!==undefined)Yam2.导出(me,requestId)*/
if(messagePurpose=='commandResponse'&&requestId=='00000000-0000-0000-0000-900000000001'){}

}else{
	if(连接.刷屏>=10){
		yyy.send('刷屏吧')
	/*	for(let i=0;i<1000;i++){
			yyy.send('jsjsjhsbsjsushsbsbsbshsjsjsjzjshsbsbshsjshshshshhshshsshhshsbssbsbbssbbsbshzbzbzbzbzbzbznznzznnznznzebcwbufbwbuwbdwu2bduwfubudubfbbwbdwbbdybybybyxbybyywuyxwyhxhdhdxwhddwwhxwxhxwhxwjnwxnnxnnwxnnxnwnnnwwxw。还能你很喜欢你好像你先问哈那那那就你几级为奴还是是不是;元素因为要不要给我个别以为={')
		}*/
		tell('hh')
		let m=fs.readFileSync('云黑.js','utf8')
		try{m=m.split(',').push(xname)}catch(err){tell(err)}
		fs.writeFileSync('云黑.js',m.join(''))
	}
	yyy.send('Error_cannot read')
	断开()
}




;})



function 断开(){tell('§c你的网断了.');setTimeout(function(){for(var i=0;i<10;i++)yyy.close()},10)}


function 登陆提示(a,b,c,d){
	let ccd='§f§l登陆次数:§r§7'+data.登陆
	if(data.登陆==1)ccd='[第一次登陆\n请输入 §f用户规范§7来看查规则§f]'
	let 当前vip='§7否'
	tell('§7'+连接.连接时间+'§f,第'+data.登陆+'登陆:'+xname)
	if(data.vip!==undefined||ops.indexOf(xname)!==-1){
		当前vip='§l§c是'
	}
	setTimeout(function(){
			tell('§e§lE§r§6x§ao§bt§l§f奥力修云端')
			tell('§l版本:§r§7'+连接.版本)
			tell('§f§l名称:§a§r'+xname)
			tell('§f§l时间:§r§b'+连接.连接时间)
			tell('§f§l称号:§r'+data.称号)
			tell('§f§l登陆:§r§6'+data.登陆)
			tell('§l§fVIP:§7§c'+当前vip)
			tell('§l§f请§r输入§7help§f查询帮助.')
			tell('§l§f群:§r§7672856122.免费生成建筑和连接.')
			
	},300)
}



function entt(a,b,c){let 时间s=null;var oa = new Date;;var day = new Date;var day=day.getHours();if(day>1&&day<5){时间s=('§a凌晨')};if(day>5&&day<=8){时间s=('§e早上')};if(day>8&&day<=11){时间s=('§c上午')};if(day>11&&day<=13){时间s=('§b中午')};if(day>13&&day<=17){时间s=('§d下午')};if(day>17&&day<=19){时间s=('§9晚上')};if(day<19&&day>=24){时间s=('§7半夜')};if(day<24&&day>=20){时间s=('§7深夜')};连接.连接时间=时间s,黑验证(xname)}/*a名字,b版本,c进入,时间s时间*/


function 第一次进入(){
	data.登陆=0
	data.money=0
	data.点卷=0
	data.签到月=0
	data.连签=1
	data.签到日=0
	写入(xname)
	entt(xname)
	sent(cmd('say 新欢迎玩家 §e'+xname+' §f连接了服务器'))
}
function 进入(){
	data.登陆+=1
	写入(xname)
	entt(xname)
}




function 读取(n,s){数据.读取(n)}

function 写入(n,ds){数据.写入(n)}

function 删除(n,ds){数据.删除(n,ds)}

function 写入玩家(a){数据.写入玩家(a)}

function 读取玩家(a){数据.读取玩家(a)}



function qiuling(r,l,blo)
{let x=0;let y=0;let z=0;let J=[];let bs=[];let pi=Math.PI*0.5
function setlongblock(x,y,z,l){
for(var i=0;i<=l;i++){


if(i<=1){
let PFx=Math.round(x)
let PFy=Math.round(y+l)
let PFz=Math.round(z)
if(J.indexOf(PFx+''+PFy+''+PFz)==-1){
J.push(PFx+''+PFy+''+PFz)
bs.push('fill ~'+PFx+' ~'+PFy+' ~'+PFz+' ~'+(PFx)+' ~'+(PFy-5)+' ~'+PFz+' '+blo[Math.round(Math.random()*blo.length-0.5)])
}
}
}}
l=l*0.7
var a=ell
var b=4
var c=7
var d=Math.random()*30+20
var a1=Math.random()*300000
var a2=Math.random()*50000000
var a3=Math.random()*8000
for(var m=-r;m<r;m++){
for(var n=-r;n<r;n++){
var ls=(Math.cos(pi*m/r)*Math.cos(pi*n/r))*l-(Math.sin(pi*m*a/r+b)*Math.cos(pi*n*a/r+c))*l*0.25+(Math.cos(pi*m*a*2/r+b*d)+Math.sin(pi*n*a*2/r+c*d))*l*0.2-(Math.sin(pi*m*a*3/r+b*d*2)*Math.sin(pi*n*a*3/r+c*d*2))*l*0.15
if(ls>0)setlongblock(x+m,y,z+n,ls)
}}
bs.splice(0,0,'数量:'+bs.length*5)
setblock(bs)
}






function 拆分e1(List,command){测试 = command.replace(/\s+/g,' ').replace(/ +/g,',').replace(/:+/g,' ').split(',');执行 = true;var 测试m =0;var qo;for(var u=0;u<List.length;u++){测试m = 1;qo = String(测试[u]);if(List[u]!=='num'&&List[u]!=='str'){测试m=0};if(qo!==String(List[u])&&测试m==0){tell('§cUnexpected  §f'+测试[u]+' §7Should be  §f'+List[u]);执行=false;break};if(-9999999<parseInt(List[u])&&测试[u]=='num'&&测试m==1){parseInt(测试[u]);if(List[u]!=='str'&&List[u]!=='num'&&传送m==1){tell('§cUnexpected  §f'+测试[u]+'');执行=false;break};if(测试m==1&&List[u]=='str'){tell('§dUnexpected  '+测试[u]);执行=false;break}};if(-99999999<parseInt(测试[u])){if(List[u]=='str'){tell('§7意外的§f '+测试[u]);执行=false;break}}else{if(测试m==1&&List[u]=='num'){tell('§cUnexpected '+测试[u]);执行=false;break};if(测试m==1&&List[u]=='str'){}else{if(测试m==1&&List[u]!=='str'&&List[u]!=='num'){tell('§dUnexpected  '+测试[u]+'');执行=false;break}}};if(测试[u]==undefined){;if(List[u]!==undefined){tell('§cIncorrect instruction ');执行=false;break}}if(u==List.length-1){break}}};
function circle(){
	var  是
};
function 黑验证(a){try{fs.readFile('云黑.js','utf8',(e,d)=>{if(!e){var s=d.split(',');if(s.indexOf(a)==-1){云黑=false;登陆检测()}else{tell('§c检测到名字处于禁止登陆连接,错误码'+Math.round(Math.random()*5+1000));断开();setTimeout(function(){yyy.close()},100)}}else{setTimeout(function(){黑验证(a.split('卍$/'))},500)}})}catch(err){
	tell('§cerr_'+err)
	黑验证(xname)
}}

function 登陆检测(){
	if(ops.indexOf(xname)!==-1){
		连接.即将更改=xname
		xname='§c盗版名字'
		cmd('tag @s list','GET验证')
	}
		cmd('tag @s list','GET验证2')
	cmd('enableedunpc hhhbbbbhhhhhhhhhhhhbvvvvvvvfalses','GET验证1')
}

function d改(a,b){
	for(let i=0;i<b.length;i++){
		if(a.indexOf(b[i])!==-1){
			a[a.indexOf(b[i])+1]=b[i+1]
		}
		i+=1
	}
	cmd('tag @s remove '+标签,'ee')
	cmd('tag @s add '+a.join('aaa'),'h')
}

function d存(a){
	cmd('tag @s remove '+标签,'ee')
	cmd('tag @s add '+a.join('aaa'),'aaaa')
}

function d加(a,b){
	for(let i=0;i<b.length;i++){
	a.splice(a.length-2,b[1])
	a.splice(a.length-2,b[i+1])
	i+=1
	}
	cmd('tag @s remove '+标签,'ee')
	cmd('tag @s add '+a.join('aaa'),'h')
}
function d删(a,b){
	let c=0
	for(let i=0;i<b.length;i++){
		if(a.indexOf(b[i])!==1){
			c+=2
			a.splice(i,2)
		}
	}
	cmd('tag @s remove '+标签,'ee')
	cmd('tag @s add '+a.join('aaa'),'h')
	return(c)
}
function d查(a){
	let c=0
	return(a)
}

function VID(a){
	fs.readFile('音乐/'+a,'utf8',(e,d)=>{
		if(d){
			tell('§a音乐'+a+' successful')
			音乐缓冲=d.split('\n')
			d=[]
			let t=0
				tell('有 §a'+t+' §f秒-1.5s later.')
			音乐进度=1
			setTimeout(function(){EVID()},1500)
		}else{
			tell('§c /../音乐/'+a+' not a such File.')
		}
	})
}
function EVID(){
	if(音乐进度<音乐缓冲.length){
		let f=音乐缓冲[音乐进度].replace(/\s+/g,',').split(',')
		let C进度=f[2]
		setTimeout(function(){
			let yyu=音乐缓冲[音乐进度].replace(/\s+/g,',').split(',')[2]
			let YDS=f[0]/100
			if(YDS<0.78){
				YDS-=Math.pow(0.78-YDS,2)
			}else{
				YDS+=Math.pow(YDS-0.78,2)
			}

			J进度=0
			cmd('execute @a ~~~ playsound note.pling @s ~ ~ ~ 0.7 '+(YDS/2+0.5)+' '+(yyu-C进度),'看什么看刷屏死你'+音乐进度)
			J进度=f[1]
			音乐进度+=1
			EVID()
			f=音乐缓冲[音乐进度].split(',')
		},(f[1]-J进度)*1000*音乐延迟)
	}else{
		tell('§a播放完毕')
	}
}






sever.on('client',(session,request)=>{
	console.log(request.connection.remoteAddress.substr(7))
	console.log(session,request)
})










/*
function 读取流(a){
	fs.readFile('数据/ID.txt','utf8',(e,d)=>{
		if(d){
			d=d.split('\n')
			if(d.indexOf(a)!==-1){
				let id=d[d.indexOf(a)+1]
				let Jt=数据库
				for(let i=0;i<数据库.length;i++){
					if(Number(数据库[i])-id<=100&&>0){
						fs.writeFile('数据/'+数据库[i],'utf8',(e,d)=>{
							
						})
					}
				}
			}else{
				tell('§7第一次连接服务器,\n请输入 用户规范 已看查相关规则')
				let id=d[d.length-1]
				d.push(a)
				d.push(id+1)
				let Jw=数据库
				let Jt=0
				for(let i=0;i<Jt.length;i++){
					if(Jt[i]>id){
						Jt=1
						break
					}
				}
				if(Jt==0){
					let Y=Number(Jt.pop())+100
					fs.writeFile('数据/'+Y,'{}',(e,d)=>{
						
					})
				}
				fs.writeFile('数据/ID.txt',d.join('\n'),(e,d)=>{
					data={}
				})
			}
		}
	})
}*/




}).listen(6464)
