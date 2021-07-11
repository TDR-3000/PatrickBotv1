const a = '```'
/*
Script By : Dappauhuy & Mhank Bar Bar 
Cuman Recode saja bang
Script Bot Ini Terbuka Untuk Semua!! Jangan Diperjual Belikan!!!!!!!
Jangan Lupa Follow @_pa7rick :)

Big Thanks To : Baileys

Thanks To :
MhankBarBar
Patrick
DappaUhy
LeysCoders
ManikBot
NPM Install
MmgWhatsApp
HadiApi
ServantOfEvil
ZekaisApi
ArugaZ
Affis 
Dappa
Arifi Razzaq
Zhirr
Tobz
Mnazria

Thanks For All Creator Bot WhatsApp
*/

/******************* NPM  *******************/
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const { exec } = require("child_process")
const { removeBackgroundFromImageFile } = require('remove.bg')
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone") 
const speed = require('performance-now')
const qrcode = require("qrcode-terminal") 
const crypto = require('crypto')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require('axios')
const Math_js = require('mathjs')
const encodeUrl = require('encodeurl')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const fs = require("fs") 
const cd = 4.32e+7

/******************* LIB & JSON File *******************/
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/plugins/functions')
const { convertSticker } = require('./lib/plugins/swm.js')
const { fetchJson } = require('./lib/plugins/fetcher')
const { recognize } = require('./lib/plugins/ocr')
const { color, bgcolor } = require('./lib/plugins/color')
const { cmdadd } = require('./lib/plugins/totalcmd')
const { animesaran } = require('./lib/animesaran')
const { animesaran2 } = require('./lib/animesaran2')
const { bahasa } = require('./lib/bahasa')
const { listsurah } = require('./lib/listsurah')
const { donasi } = require('./lib/donasi')
const { ind } = require('./language') 


const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
const tebakkata = JSON.parse(fs.readFileSync('./src/tebakkata.json'))
const mathtebak = JSON.parse(fs.readFileSync('./src/mathtebak.json'))
let number1 = JSON.parse(fs.readFileSync('./src/number1.json'))
let number2 = JSON.parse(fs.readFileSync('./src/number2.json'))

const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/json/antivirtex.json'))
const antisticker = JSON.parse(fs.readFileSync('./database/json/antisticker.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const welcome = JSON.parse(fs.readFileSync('./database/json/welcome.json'))

const setiker = JSON.parse(fs.readFileSync('./storage/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./storage/video.json'))
const audionye = JSON.parse(fs.readFileSync('./storage/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./storage/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const patrickadmin = JSON.parse(fs.readFileSync('./database/json/botadmin.json'))
const prem = JSON.parse(fs.readFileSync('./database/json/prem.json'))
const ban = JSON.parse(fs.readFileSync('./database/json/banned.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const bacotrandom = JSON.parse(fs.readFileSync('./src/bacot.json'))
const pepolu = JSON.parse(fs.readFileSync('./src/totalcmd.json'))[0].totalcmd

/******************* Settings  *******************/
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const settingapikey = JSON.parse(fs.readFileSync('./settings/apikey.json'))
const { 
     botName,
     ownerName,
     patrickgrupp,
     numberOwner,
     initialLimit,
     memberLimit,
     numbernye
} = setting

const { 
     KeyZeks,
     KeyZahir,
     KeyLeys,
     KeyXteam,
     KeyDap,
     keyprem,
     shizukaapi
} = settingapikey

const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN:${ownerName}\n`
            + `ORG:Pengembang ${botName}~;\n`  
            + `TEL;type=CELL;type=VOICE;waid=${numberOwner}:+${numberOwner}\n` 
            + 'END:VCARD' 
            
const ownerNumber = [`${numberOwner}@s.whatsapp.net`]
blocked = []   

trial = 'trial24h'
const uang1 = 1500
const uang2 = 3000
const uang3 = 6000
const uang4 = 15000
/******************* XP, Level, Limit, Registered PatrickBot  *******************/
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./database/fileother/level.js')

const {
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser
} = require('./database/fileother/register.js')

const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	limitAdd
} = require('./database/fileother/limitatm.js')

const {
	addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition,
    afkDel
} = require('./database/fileother/afk.js')

const checkAfkUse1r = (mentionedJid) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === mentionedJid) {
            status = i
        }
    })
    return status
}

        const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		           }
		          })
		    if (position !== null) {
		        return prem[position].expired
		        }
		       } 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		          if (Date.now() >= prem[i].expired) {
		              position = i
		            }
		         })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/json/prem.json', JSON.stringify(prem))
		           }
		         }, 1000)
		      } 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		      })
		     return array
		    }
		
/******************* Function PatrickBot  *******************/               
  function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
  }
  
              function addMetadata(packname, author) {
				if (!packname) packname = `Created by @${authorSticker}`; if (!author) author = `${packSticker}`;	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
				const json = {	
					'sticker-pack-name': packname,
					'sticker-pack-publisher': author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	
				if (len < 16) {	
					last = len.toString(16)	
					last = '0' + len	
				} else {	
					last = len.toString(16)	
				}	
				const buf2 = Buffer.from(last, 'hex')	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
				})	
			}


/******************* WA Connection PatrickBot  *******************/               
       const patrick = new WAConnection() 
       patrick.version = [2, 2119, 6]
          patrick.on('qr', qr => {
          qrcode.generate(qr, { small: true })
          console.log(color('Scan This Code with WhatsWeb','aqua'))
          })

       patrick.on('credentials-updated', () => {
	       const authInfo = patrick.base64EncodedAuthInfo()
          console.log(`credentials updated!`)
          fs.writeFileSync('./patrickQR.json', JSON.stringify(authInfo, null, '\t'))
       })
       fs.existsSync('./patrickQR.json') && patrick.loadAuthInfo('./patrickQR.json')
       patrick.connect();


       patrick.on('group-participants-update', async (anu) => {
       if (!welcome.includes(anu.jid)) return
       try {
         const mdata = await patrick.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
         ini_user = patrick.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length         
         try {
               var ppimg = await patrick.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            
         try {
               var ppgc = await patrick.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
         if (anu.action == 'add') {
         	img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${num}&descriminator=${member}&memcount=${member}&gcname=${mdata.subject}&gcicon=${shortgc.data}&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
            teks = `*Hello* *${ini_user.notify}*
Welcome To *${mdata.subject}*
*> Nama:*
*> Umur:*
*> Hobby:*
*> Gender:*
*> Asal Kota:*
*Jika Privasi ketik Private di kolom*
*Semoga Betah di group🌈*`
            patrick.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
         } else 
           if (anu.action == 'remove') {
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/goodbye?nama=${num}&gc=${mdata.subject}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg&member=${mdata.participants.length}&apikey=GFL`)
             teks = `  Goodbye ${namaewa} 👋🍁`
             patrick.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else 
            if (anu.action == 'promote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Selamat anda menjadi admin group!&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
            teks = `◪ Promote Detected\n\n\n├─ Nomor: ${num.replace('@s.whatsapp.net', '')}\n├─ Pesan: Selamat anda menjadi admin group!\n└─ ❏ @${num.split('@')[0]}`
            patrick.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else 
            if (anu.action == 'demote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Awokawok di unadmin, mampus:v&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
            teks = `◪ DEMOTE DETECT\n\n\n├─ Nomor: ${num.replace('@s.whatsapp.net', '')}\n├─ Pesan: Awokawok di unadmin, mampus:v\n└─ ❏ @${num.split('@')[0]}`
            patrick.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
            }
            } catch (e) {
            console.log('Error : %s', color(e, 'red'))
            }
            })
/******************* AntiDelete PatrickBot  *******************/
            patrick.on('message-update', async (mek) => {
		try {
	    const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? patrick.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? patrick.user.jid : patrick.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? patrick.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `0@s.whatsapp.net`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Text
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}`
				patrick.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await patrick.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`)
				const strConversation = `		 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Sticker
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				patrick.sendMessage(from, strConversation, MessageType.text, opt4tag)
				patrick.sendMessage(from, buff, MessageType.sticker, pingbro23)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await patrick.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`)
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Image
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}\`\`\``
				patrick.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
	}
})
/******************* Block & Auto Block PatrickBot  *******************/
	    patrick.on('CB:Blocklist', json => {
		    if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	        }
	        })
           const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
           patrick.on('CB:action,,call', async json => {
           const callerId = json[2][0][1].from;
           console.log('call dari '+ callerId)
           patrick.sendMessage(callerId, 'Auto block system, dont call please', MessageType.text)
           await sleep(4000)
           await patrick.blockUser(callerId, 'add')
           })

/******************* Settings Message PatrickBot*******************/
       patrick.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
        const content = JSON.stringify(mek.message)
        const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM | HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const totalchat = await patrick.chats.all()
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const txt = mek.message.conversation
			const botNumber = patrick.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = patrick.contacts[sender] != undefined ? patrick.contacts[sender].vname || patrick.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await patrick.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SECURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isPrem = prem.includes(sender)
            const isAdmin = patrickadmin.includes(sender) 
            const isAfkOn = checkAfkUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelcome = isGroup ? welcome.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
            const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiSticker = isGroup ? antisticker.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isBanned = ban.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
            const stickers = type === 'stickerMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				patrick.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				patrick.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? patrick.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : patrick.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    patrick.sendMessage(from, teks, image, {quoted:mek})
		    }
		    function monospace(string) {
            return '```' + string + '```'
            }   
		    const costum = (pesan, tipe, target, target2) => {
			patrick.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const patrickhay = (pesan, tipe, target, target2) => {
		    patrick.sendMessage(from, pesan, tipe, { 'contextInfo': {mentionedJid: [sender], 'forwardingScore': 999,'isForwarded': true}, quoted: { 'key': { 'participant': `${target}`, 'remoteJid': '393470602054-1351628616@g.us', 'fromMe': false, 'id': 'B391837A58338BA8186C47E51FFDFD4A' }, 'message': { 'documentMessage': { 'jpegThumbnail': fs.readFileSync('./lib/image/logo.jpeg'), 'mimetype': 'application/octet-stream', 'title': `${target2}`, 'fileLength': '36', 'pageCount': 0, 'fileName': `${target2}` }}, 'messageTimestamp': '1614069378', 'status': 'PENDING'}})
		    }
		    const sendPtt = (teks) => {
		    patrick.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		
/******************* FakeReply Message PatrickBot*******************/
		var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Minggu'; break;
                case 1: hari = 'Senin'; break;
                case 2: hari = 'Selasa'; break;
                case 3: hari = 'Rabu'; break;
                case 4: hari = 'Kamis'; break;
                case 5: hari = 'Jum`at'; break;
                case 6: hari = 'Sabtu'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Januari'; break;
                case 1: bulan1 = 'Februari'; break;
                case 2: bulan1 = 'Maret'; break;
                case 3: bulan1 = 'April'; break;
                case 4: bulan1 = 'Mei'; break;
                case 5: bulan1 = 'Juni'; break;
                case 6: bulan1 = 'Juli'; break;
                case 7: bulan1 = 'Agustus'; break;
                case 8: bulan1 = 'September'; break;
                case 9: bulan1 = 'Oktober'; break;
                case 10: bulan1 = 'November'; break;
                case 11: bulan1 = 'Desember'; break;
            }
            var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
            var tampilJam = '' + jam + ':' + menit + ':' + detik + ' Wib';
            
		    const sekarang = new Date().getTime();
			var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = '🕛 Waktu Tengah Malam'; break;
                case 1: waktoo = '🕐 Waktu Tengah Malam'; break;
                case 2: waktoo = '🕑 Waktu Dini Hari'; break;
                case 3: waktoo = '🕒 Waktu Dini Hari'; break;
                case 4: waktoo = '🕓 Waktu Subuh'; break;
                case 5: waktoo = '🕔 Waktu Subuh'; break;
                case 6: waktoo = `🕕 Selamat Pagi ${pushname}`; break;
                case 7: waktoo = `🕖 Selamat Pagi ${pushname}`; break;
                case 8: waktoo = `🕗 Selamat Pagi ${pushname}`; break;
                case 9: waktoo = `🕘 Selamat Pagi ${pushname}`; break;
                case 10: waktoo = `🕙 Selamat Pagi ${pushname}`; break;
                case 11: waktoo = `🕚 Selamat Siang ${pushname}`; break;
                case 12: waktoo = `🕛 Selamat Siang ${pushname}`; break;
                case 13: waktoo = `🕐 Selamat Siang ${pushname}`; break;
                case 14: waktoo = `🕑 Selamat Siang ${pushname}`; break;
                case 15: waktoo = `🕒 Selamat Sore ${pushname}`; break;
                case 16: waktoo = `🕓 Selamat Sore ${pushname}`; break;
                case 17: waktoo = `🕔 Selamat Sore ${pushname}`; break;
                case 18: waktoo = '🕕 Waktu Maghrib'; break;
                case 19: waktoo = '🕖 Waktu Isya'; break;
                case 20: waktoo = `🕗 Selamat Malam ${pushname}`; break;
                case 21: waktoo = `🕘 Selamat Malam ${pushname}`; break;
                case 22: waktoo = `🕙 Selamat Malam ${pushname}`; break;
                case 23: waktoo = '🕚 Waktu Tengah Malam'; break;
            }
            var tampilUcapan = '' + waktoo;
            
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `🕛 Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `🕐 Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `🕑 Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `🕒 Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `🕓 Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `🕔 Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `🕕 Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `🕖 Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `🕗 Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `🕘 Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `🕙 Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `🕚 Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `🕛 Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `🕐 Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `🕑 Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `🕒 Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `🕓 Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `🕔 Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `🕕 Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `🕖 Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `🕗 Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `🕘 Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `🕙 Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `🕚 Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = '' + waktoonyabro;
           
            const fakestatus = (teks) => {
            patrick.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": ucapanFakereply,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1080,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./lib/image/logo.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }

			/******************* Clock PatrickBot  *******************/               
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `${ucapanFakereply}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('./lib/image/logo.jpeg')} } }
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./lib/image/logo.jpeg') }, 'title': `${ucapanFakereply}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${ucapanFakereply}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanFakereply},;;;\nFN:${ucapanFakereply},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./lib/image/logo.jpeg')}}}        
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
			const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const dater = new Date().toLocaleDateString()
            
/******************* Level & Role PatrickBot  *******************/               
	
	        var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
			
			const levelRole = getLevelingLevel(sender)
          var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 1243) {
   	         role = 'Legends 忍'
   	     }
			
/******************* Check User, Update & Expired PatrickBot  *******************/               
			var premi = '*User*'
			if (isPrem) {
				premi = '*Premium 🏅*'
			} 
			if (isAdmin) {
				premi = `*Admin ${botName} 🎗️*`
			}
			if (isOwner) {
				premi = '*Owner ⚔️*'
			}
			
			expiredCheck()
			updatetext = `Update PatrickBot\nFitur ${prefix}join`
		
/******************* Leveling, ATM & EXP 2 PatrickBot  *******************/               
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
        
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = initialLimit - lmt.limit
                            if (limitCounts <= 0) return patrick.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            patrick.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        patrick.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
		  
           const isLimit = (sender) =>{ 
          	if (isOwner && isPrem && isAdmin) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= initialLimit ) {
              	  position = true
                    patrick.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
                } else {
              	_limit
                  position = true
                  return false
                 }
               }
             }
               if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
                return false
                }
             }
     	
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }

/******************* AntiLink, AntiVirtex & Member Limit PatrickBot  *******************/               
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        patrick.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinadmin")) return reply("Oke, Jangan Kirim Terlalu Sering Cuy")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf ${sender.split("@")[0]} Anda Telah Mengirim Link Grup Lain\nGrup Ini Antilink`)
		        setTimeout( () => {
			        patrick.groupRemove(from, [kic]).catch((e)=>{reply(`*PatrickBot Belum Menjadi Admin, Tidak Dapat Kick*`)})
		        }, 3000)
		        setTimeout( () => {
			        patrick.updatePresence(from, Presence.composing)
			        reply("*3 Second*")
		        }, 2000)
		        setTimeout( () => {
			        patrick.updatePresence(from, Presence.composing)
			        reply("*2 Second*")
		        }, 1000)
		        setTimeout( () => {
			        patrick.updatePresence(from, Presence.composing)
			        reply("*1 Second*")
		        }, 0)
		        }
	
	            if (txt.length > 17000){
                if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply(`${pushname} Adalah Admin Group Kamu Tidak Akan Di kick`)
		       patrick.updatePresence(from, Presence.composing)
		       var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		         costum(monospace(`Virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`))
		         setTimeout( () => {
			     patrick.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			     patrick.blockUser(sender, "add")
		         }, 0)
	             } 
	      
		  if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberLimit) {
						reply(`hmmm...`)
						setTimeout( () => {
 	                           patrick.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								patrick.updatePresence(from, Presence.composing)
								reply("1 Detik")
							}, 4000)
								setTimeout( () => {
								patrick.updatePresence(from, Presence.composing)
								reply("2 Detik")
							}, 3000)
								setTimeout( () => {
								patrick.updatePresence(from, Presence.composing)
								reply("3 Detik")
							}, 2000)
								setTimeout( () => {
								patrick.updatePresence(from, Presence.composing)
								reply("*PatrickBot Akan Keluar Dari Grup*")
							}, 1000)
								setTimeout( () => {
								patrick.updatePresence(from, Presence.composing)
								reply(`*Maaf Group Ini Membernya Sedikit, Wajib ${memberLimit} Member*`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
        //AFK NGULI
	if (isGroup) {
		
         mentioneddd = mek.message[Object.keys(mek.message)[0]].contextInfo ? mek.message[Object.keys(mek.message)[0]].contextInfo.mentionedJid : []
            for (let ment of mentioneddd) {
                 if (checkAfkUse1r(ment, afk)) {
                    const getId = getAfkId(ment, afk)
                    const getReason = getAfkReason(getId, afk)
                    const getTime = getAfkTime(getId, afk)
                    	patrick.sendMessage(from, ind.afkMentioned(getReason, getTime), text)
                  }
                  }
            if (checkAfkUser(sender) && !isCmd && isGroup) {
                afk.splice(getAfkPosition(sender, afk), 1)
                fs.writeFileSync('./database/json/afk.json', JSON.stringify(afk))
                	patrick.sendMessage(from, ind.afkDone(pushname), text)
            }
            
        }
        if (bad.includes(messagesC)) {
		if (!isGroup) return
        if (!isBadWord) return
		if (!isGroupAdmins) return reply('karena kamu adalah admin, bot tidak akan kick kamu')
		if (!isOwner) return reply('karena kamu adalah owner, bot tidak akan kick kamu')
		var Kick = `${sender.split('@')[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ`)
		}, 100)
		setTimeout( () => {
		patrick.groupRemove(from, [Kick]).catch((e) => {reply(`ERROR: ${e}`)}) 
		}, 10)
		setTimeout( () => {
		reply(`_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_\nᴍᴀᴀғ ${pushname} ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ${groupMetadata.subject}`)
		}, 0)
		}
		
		if (stickers.length > 5){
                if (!isGroup) return
		        if (!isAntiSticker) return
		        if (isGroupAdmins) return reply(`${pushname} Adalah Admin Group Kamu Tidak Akan Di kick`)
		       patrick.updatePresence(from, Presence.composing)
		       var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		         costum(monospace(` *「 𝗔𝗡𝗧𝗜 𝗦𝗣𝗔𝗠 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 」*\nKamu telah SPAM STICKER di grup, kamu akan di kick otomatis oleh ${botName}`))
		         setTimeout( () => {
		           reply(`sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ`)
		           }, 100)
		          setTimeout( () => {
		          patrick.groupRemove(from, [Kick]).catch((e) => {reply(`ERROR: ${e}`)}) 
		          }, 10)
		         setTimeout( () => {
			     patrick.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		         }, 0)
	             } 
	
                afikeydap = await fetchJson(`https://dapuhy-api.herokuapp.com/api/getapikey`)
                ApiDappa = afikeydap.apikey
/******************* TebakGambar, TebakKata & Tebak Matematika PatrickBot  *******************/               
            const mentionManik = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByManik = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionManik.push(mentionByManik)
                    
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                    jawaban = tebakgambar[sender.split('@')[0]]
                    const duitnya = number1[Math.floor(Math.random() * (number1.length))]
                    if (budy.toLowerCase() == jawaban) {
                    reply(`Selamat ${pushname} anda telah menebak dengan benar\nAnda Mendapatkan Ub ${duitnya}`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
                    const duitlukita = `${sender.split("@")[0]}@s.whatsapp.net`
                    addKoinUser(duitlukita, duitnya)
                    } else {
                    reply("Gagal coba lagi!")
                    }
                    }
                    
                    if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                    jawabaen = tebakkata[sender.split('@')[0]]
                    const duitnyea = number2[Math.floor(Math.random() * (number2.length))]
                    if (budy.toLowerCase() == jawabaen) {
                    reply(`Selamat ${pushname} anda telah menebak dengan benar\nAnda Mendapatkan Ub ${duitnyea}`)
                    delete tebakkata[sender.split('@')[0]]
                    fs.writeFileSync("./tebakkata.json", JSON.stringify(tebakkata))
                    const duitlukitap = `${sender.split("@")[0]}@s.whatsapp.net`
                    addKoinUser(duitlukitap, duitnyea)
                    } else {
                    reply("Gagal coba lagi!")
                    }
                  }
                  
                   const kuli = number1[Math.floor(Math.random() * (number1.length))]
                   const kuli2 = number1[Math.floor(Math.random() * (number1.length))]
                   const mety = ['+','*']
                   const meti = mety[Math.floor(Math.random() * (mety.length))]
                   soalnyamath = `${kuli} ${meti} ${kuli2}`
                   if (typeof Math_js.evaluate(soalnyamath) !== "number") {
                   	reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				   } else {
					jawapannnya = `${Math_js.evaluate(soalnyamath)}`
				  }
                   
                   if (mathtebak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                    jawabaenm = mathtebak[sender.split('@')[0]]
                    const duitnyeam = number2[Math.floor(Math.random() * (number2.length))]
                    if (budy.toLowerCase() == jawabaenm) {
                    reply(`Selamat ${pushname} anda telah menebak dengan benar\nAnda Mendapatkan Ub ${duitnyeam}`)
                    delete mathtebak[sender.split('@')[0]]
                    fs.writeFileSync("./mathtebak.json", JSON.stringify(mathtebak))
                    const duitlukitap = `${sender.split("@")[0]}@s.whatsapp.net`
                    addKoinUser(duitlukitap, duitnyeam)
                    } else {
                    reply("Gagal coba lagi!")
                    }
                  }
              
/******************* Color & Detector Media PatrickBot  *******************/               
			colors = ['red','white','black','blue','yellow','green']
			
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mInPrivate\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;31mNon\x1b[1;37m]=', ('[\x1b[1;31mError\x1b[1;37m]'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mInGroup\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;31mNon\x1b[1;37m]=', ('[\x1b[1;31mError\x1b[1;37m]'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				
				
//==========================================BATES NGAB==========================================\\
			    case 'help':
				case 'menu':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname, prefix))
					me = patrick.user
					const reqXp = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					const lvl = getLevelingLevel(sender)
					gmenu = await getBuffer(me.imgUrl)
					ngonrona = await fetchJson('http://hadi-api.herokuapp.com/api/corohelp?negara=id') 
					const menunya = `Hello World, ${botName} is here
Created By @_pa7rick


${a}▫️Nama : ${pushname}${a}
${a}▫️User : ${premi}${a}
${a}▫️Uang : Ub.${uangku}${a}
${a}▫️Xp : ${reqXp}${a}
${a}▫️Level : ${lvl}${a}

          Time: ${tampilJam}
          Hari: ${tampilHari}

⦿ *Info Corona Indonesian*
◽ *Kasus:* ${ngonrona.result.terkonfirmasi}
◽ *Meninggal:* ${ngonrona.result.meniggal}
◽ *Sembuh:* ${ngonrona.result.sembuh}

         Update ${botName}?
         Ketik ${prefix}update
         Fitur Error? ketik ${prefix}report bugnya
 
             *</ALL MENU\>*
${a}▫️${prefix}ownermenu${a}
${a}▫️${prefix}adminmenu${a}
${a}▫️${prefix}marketmenu${a}
${a}▫️${prefix}makermenu${a}
${a}▫️${prefix}gamemenu${a}
${a}▫️${prefix}funmenu${a}
${a}▫️${prefix}downloadmenu${a}
${a}▫️${prefix}sertifikatmenu${a}
${a}▫️${prefix}groupmenu${a}
${a}▫️${prefix}islammenu${a}
${a}▫️${prefix}mediamenu${a}
${a}▫️${prefix}othermenu${a}

          ${a}❏ cekprefix${a}
          ${a}❏ ${prefix}info${a}
          ${a}❏ ${prefix}patrickgroup${a}
          ${a}❏ ${prefix}donasi${a}
          ${a}❏ ${prefix}owner${a}
          
          ❏ Runtime : ${kyun(process.uptime())}
          ❏ Total Req : ${pepolu}
          
       ~ ${botName} 2021`
				await patrickhay(menunya, MessageType.text, tescuk, `${ucapanFakereply}`)
				break

//==========================================BATES NGAB==========================================\\
//=============APIKEY ALL==============\\
                case 'igstalk':
                 if (!isRegistered) return reply( ind.noregis())
				 if (isLimit(sender)) return reply(ind.limitend(pusname))
				 if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hmm = await fetchJson(`http://zekais-api.herokuapp.com/igs?username=${q}`)
					buffer = await getBuffer(hmm.data.profilehd)
					hasil = `Fullname : ${hmm.data.fullname}\nPengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.is_verified}\nbio : ${hmm.data.bio}`
					patrick.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
                case 'ssweb':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limits.limitend(pushname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${body.slice(7)}`
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					ssweb = await getBuffer(anu.gambar)
					patrick.sendMessage(from, ssweb, image, {quoted: mek})
					await limitAdd(sender)
					break                
                 case 'spamcall':
					if (isLimit(sender)) return reply(limits.limitend(pushname))
					if (!isRegistered) return reply(ind.noregis())
					if (!isPrem) return reply(ind.ownerb())
		            if (isBanned) return reply(ind.baned())
                    reply('Otw Spam 1x')
                    if (!args[0].startsWith('8')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                    if (args[0].startsWith('88989029718')) return reply('Gagal tidak dapat spam nomer bot')
                    if (args[0].startsWith('81936071585')) return reply('Gagal tidak dapat spam nomer owner')
                    var data = body.slice(10)
                          await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                          await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                          await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                          await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                          await fetchJson(`https://ApiZeks.herokuapp.com/api/spamcall?no=`+data+`&apikey=${KeyZeks}`, {method: 'get'})
                          break
                  case 'spamtext':
					if (isLimit(sender)) return reply(limits.limitend(pushname))
					if (!isRegistered) return reply(ind.noregis())
					if (!isPrem) return reply(ind.premon(pushname))
		            if (isBanned) return reply(ind.baned())
                    reply('Otw Spam 1x')
                        if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                        if (args[0].startsWith('81936071585')) return reply('Gagal tidak dapat spam nomer bot')
                        if (args[0].startsWith('88989029718')) return reply('Gagal tidak dapat spam nomer owner')
                        var data = body.slice(10)
                               await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                               await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                               await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                               await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                               await fetchJson(`https://ApiZeks.herokuapp.com/api/spamcall?no=`+data+`&apikey=${KeyZeks}`, {method: 'get'})
                               break
                    
		           case 'quran':
			        if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
				       anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
				       quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
				       patrick.sendMessage(from, quran, text, {quoted: mek})
				       await limitAdd(sender)
				       break
                    case 'buku':
                  if (!isRegistered) return reply(ind.noregis())
		          if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply('Teksnya mana um')
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://apikeyalpinofc.herokuapp.com/api/nulis?text=AlpinGanteng&apikey=alpinofc&text=${ct}`)
                    patrick.sendMessage(from, buffer, image)
                    break 
                    case 'lirik':    
             		if (!isRegistered) return reply(ind.noregis())
		             if (isBanned) return reply(ind.baned())
                 	if (isLimit(sender)) return reply(ind.limitend(pushname))
                		reply(ind.wait())
					    teks = body.slice(7)
					    anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					    reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					    await limitAdd(sender) 
					    break 
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'memeindo':  
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(limitend(pushname))
				    reply(ind.wait())
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${KeyZeks}`)
					buffer = await getBuffer(memein.result)
					patrick.sendMessage(from, buffer, image, {quoted: mek, caption: '*MEME🗿*'})
					await limitAdd(sender)
					break
               case 'bpfont':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                bp = `${body.slice(8)}`
                anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, { method: 'get' })
                reply(anu.text)
                break
            case 'quotemaker':
	        case 'makequote':
                if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					patrick.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
                 case 'nulislengkap':
                 case 'tulis':
	                patrick.updatePresence(from, Presence.composing)
	                if (!isRegistered) return reply(ind.noregis())
                    if (isBanned) return reply(ind.baned())
                    if (!isPrem) return reply(ind.premon(pushname))
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
			        if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak?? contoh ${prefix}nulis Nama|kelas|text/isi`)
			              reply(ind.wait())
					      tulis = body.slice(7)
				          nama = tulis.split("|")[0];
					      kelas = tulis.split("|")[1];
					      isi = tulis.split("|")[2];
					      nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					      patrick.sendMessage(from, nulis, image, {quoted: mek})
					      await limitAdd(sender) 
					      break  
					case 'nulispolio':
                    case 'tulispolio':
                    case 'nulisfolio':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 IKY baik hati')
                if ( checkATMuser(sender) <= uang3) return reply(`Pastikan Ub Kamu Tercukupi\nHarga: Ub${uang3}`)
				if ( checkATMuser(sender) >= uang3) {
                laysha = body.slice(8)
                reply(ind.wait())
                buff = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${laysha}&APIKEY=${KeyXteam}`)
                patrick.sendMessage(from, buff, image, { quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*' })
                confirmATM(sender, uang3)
                await limitAdd(sender)
                }
                break
             case 'attp':
			    if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
				patrick.sendMessage(from, attp2, sticker, {quoted: mek})
				break
	        case 'ttp':
		        if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp Wajahku Ganteng*`)
				ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${q}`)
				patrick.sendMessage(from, ttp, sticker, {quoted: mek})
				break
            case 'qrcode':
			 if (!isRegistered) return reply(ind.noregis())
		     if (isBanned) return reply(ind.baned())
			 if (isLimit(sender)) return reply(ind.limitend(pushname))
			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return patrick.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
			const butff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			patrick.sendMessage(from, butff, image, {quoted: mek})
			await limitAdd(sender)
			break
                case 'nulis1':
                case 'tulis1':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 Patrick Gans')
                const gzgz = 8999
                if ( checkATMuser(sender) <= gzgz) return reply(`Pastikan Ub Kamu Tercukupi\nNote: 1 Nulis = Ub 8.999`)
				if ( checkATMuser(sender) >= gzgz ) {
                laysha = body.slice(8)
                reply(ind.wait())
                buff = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${laysha}&APIKEY=${KeyXteam}`)
                patrick.sendMessage(from, buff, image, { quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*' })
                confirmATM(sender, gzgz)
                await limitAdd(sender)
                }
                break


//==========================================BATES NGAB==========================================\\
//=============IN MENU==============\\
                case 'donasi':
				case 'donate':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
					patrick.sendMessage(from, donasi(), text)
					break
                case 'info':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					let c = []
				    let geed = []
				    for (mem of totalchat){
					c.push(mem.jid)
				    }
				    for (yes of c){
					if (yes && yes.includes('g.us')){
			        geed.push(yes)
					}
				    }
                    let timestampi = speed();
				    let latensii = speed() - timestampi
                    anu = process.uptime()
					mee = patrick.user
					ca = totalchat
					ginfo = await getBuffer(mee.imgUrl)
					inponya = `    *All Info PatrickBot*
${a}▫️ Name : ${patrick.user.name}${a}
${a}▫️ Browser : ${patrick.browserDescription[1]}${a}
${a}▫️ Speed : ${latensii.toFixed(4)} Second${a}
${a}▫️ Handphone : ${patrick.user.phone.device_manufacturer}${a}
${a}▫️ Versi WA : ${patrick.user.phone.wa_version}${a}

${a}▫️ Group Chat : ${geed.length}${a}
${a}▫️ Personal Chat : ${totalchat.length - geed.length}${a}
${a}▫️ Total Chat : ${totalchat.length}${a}
${a}▫️ Total Block Contact : ${blocked.length}${a}
${a}▫️ Total Register : ${_registered.length}${a}
${a}▫️ Total Premium User : ${prem.length}${a}

        ~ PatrickBot 2021`
				await patrickhay(inponya, MessageType.text, tescuk, `${ucapanFakereply}`)
				break
            case 'admin':
            case 'owner':
            case 'creator':
                  patrick.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  break


//==========================================BATES NGAB==========================================\\
//=============FITUR BELI PREMIUM || REEDEM CODE==============\\
              case 'jadipremium':
				if (!isRegistered) return reply(ind.noregis())
				if (isPrem) return reply(`Maaf ${pushname} Anda Sudah Jadi Premium`)
				if (args.length < 1) return reply('Masukan Key Anda, Contoh : ${prefix}daftarpremium iFajYwn')
		        const jadipremu = 55000
                if ( checkATMuser(sender) <= jadipremu) return reply('Pastikan Ub Kamu Tercukupi\nNote: 1 PREMIUM = Ub 55.000')
                if ( checkATMuser(sender) >= jadipremu ) {
				const jpnom = `${sender.split("@")[0]}@s.whatsapp.net`
				prem.push(jpnom)
                fs.writeFileSync('./database/json/prem.json', JSON.stringify(prem))
                reply(`Selamat *${pushname}*\nAnda Mendapatkan Premium User `)
                confirmATM(sender, jadipremu)
                 }
                break
              case 'reedem':
				if (!isRegistered) return reply(ind.noregis())
				if (isPrem) return reply(`Maaf ${pushname} Anda Sudah Menukarnya`)
				if (args.length < 1) return reply('Masukan Key Anda, Contoh : ${prefix}reedem iFajYwn')
				if (args[0] === `${keyprem}` ) {
				expired = "7d"
				mente = `${sender.split('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/json/prem.json',JSON.stringify(prem))
				reply('Anda Mendapatkan Premium 7 Day')
                } else
                if (args[0] === `pa7rickGanz` ) {
				expired = "30d"
				mente = `${sender.split('@','')}@s.whatsapp.net`
				const ynom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(ynom) 
				fs.writeFileSync('./database/json/prem.json',JSON.stringify(prem))
				reply('Anda Mendapatkan Premium 30 Day')
                } else 
                if (args[0] === `${trial}` ) {
				expired = "1d"
				mente = `${sender.split('@','')}@s.whatsapp.net`
				const onom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(onom) 
				fs.writeFileSync('./database/json/prem.json',JSON.stringify(prem))
				reply('Anda Mendapatkan Premium 24 Jam')
                } else{
                reply('Key Yang Anda Masukan Salah, Silahkan Chat Owner wa.me/${numberOwner}') 
                }
                break
//==========================================BATES NGAB==========================================\\
//=============Premium MENU==============\\
                case 'premiummenu':
					const premiummenu = `  *Premium Menu*
${a}▫️ ${prefix}ceesex${a}
${a}▫️ ${prefix}cersexsearch${a}
${a}▫️ ${prefix}hidetag20${a}
${a}▫️ ${prefix}tagsticker${a}
          
       ~ PatrickBot 2021`
					await patrickhay(premiummenu, MessageType.text, tescuk, `${ucapanFakereply}`)
					break
                    case 'cersex':
                //[❗] case by DappaGanz
				if (!isUser) return reply(ind.noregis)
				if (isBanned) return reply(ind.baned)
				if (!isPremium) return reply(ind.premium)
				if (isLimit(sender)) return reply(ind.limitend)
				reply(ind.wait) 
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=${KeyLeys}`) 
				buffer = await getBuffer(anu.gambar)
				sex = `[ CERITA SEX ]\n\n\nCerita : ${anu.result}`
				patrick.sendMessage(from, buffer, image, {quoted: freply, caption: sex})
				await limitAdd(sender)
				break
				case 'cersexsearch':
                //[❗] case by DappaGanz 
                if (!isUser) return reply(ind.noregis)
                if (isBanned) return reply(ind.baned)
                if (!isPremium) return reply(ind.premium)
                if (isLimit(sender)) return reply(ind.limitend)
                judul = args.join(' ')
				reply(ind.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex-search?q=${judul}&apikey=${KeyLeys}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `[ CERITA SEX SEARCH ]\n\n\nUrl : ${i.url}\nTitle : ${i.title}\nImage : ${i.img}\nCategory : ${i.category}\nPost : ${i.post}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break
//==========================================BATES NGAB==========================================\\
//=============OWNER MENU==============\\
                case 'adminmenu':
					const ademin = `  *Admin Menu*
${a}▫️ ${prefix}ban${a}
${a}▫️ ${prefix}unban${a}
${a}▫️ ${prefix}block${a}
${a}▫️ ${prefix}unblock${a}
${a}▫️ ${prefix}hidetag50${a}
${a}▫️ ${prefix}addprem${a}
${a}▫️ ${prefix}unprem${a}
${a}▫️ ${prefix}delete${a}
${a}▫️ ${prefix}addbadword${a}
${a}▫️ ${prefix}delbadword${a}
${a}▫️ ${prefix}tagsticker${a}

       ☐ *Info PatrickBot*
${a}▫️ cekprefix${a}
${a}▫️ ${prefix}info${a}
${a}▫️ ${prefix}patrickgroup${a}
${a}▫️ ${prefix}donasi${a}
${a}▫️ ${prefix}owner${a}
          
       ~ PatrickBot 2021`
					await patrickhay(ademin, MessageType.text, tescuk, `${ucapanFakereply}`)
					break

				case 'ownermenu':
					const bosnya = `  *Owner Menu*
${a}▫️ ${prefix}event${a} 1 | 0
${a}▫️ ${prefix}receive${a}
${a}▫️ ${prefix}setppbot${a}
${a}▫️ ${prefix}bc${a}
${a}▫️ ${prefix}bcgc${a}
${a}▫️ ${prefix}setreply${a}
${a}▫️ ${prefix}setthumb${a}
${a}▫️ ${prefix}antidelete${a}
${a}▫️ ${prefix}setmemberlimit${a}
${a}▫️ ${prefix}setlimit${a}
${a}▫️ ${prefix}setkey${a}
${a}▫️ ${prefix}addprem${a}
${a}▫️ ${prefix}unprem${a}
${a}▫️ ${prefix}addadminbot${a}
${a}▫️ ${prefix}unadminbot${a}
${a}▫️ ${prefix}totaluser${a}
${a}▫️ ${prefix}ban${a}
${a}▫️ ${prefix}unban${a}
${a}▫️ ${prefix}setprefix${a}
${a}▫️ ${prefix}clearall${a}
${a}▫️ ${prefix}block${a}
${a}▫️ ${prefix}unblock${a} 
${a}▫️ ${prefix}leave${a}
${a}▫️ ${prefix}clone${a}
${a}▫️ ${prefix}setppbot${a}
${a}▫️ ${prefix}readall${a}
          
       ~ PatrickBot 2021

       ☐ *Info PatrickBot*
${a}▫️ cekprefix${a}
${a}▫️ ${prefix}info${a}
${a}▫️ ${prefix}patrickgroup${a}
${a}▫️ ${prefix}donasi${a}
${a}▫️ ${prefix}owner${a}
          
       ~ PatrickBot 2021`
					await patrickhay(bosnya, MessageType.text, tescuk, `${ucapanFakereply}`)
					break
			
				case 'setkey':
                case 'setpremium':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    keyprem = args[0]
                    reply(`KeyPremium berhasil diubah menjadi ${keyprem}`)
                    break
                case 'setkeytrial':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    trial = args[0]
                    reply(`KeyTrial berhasil diubah menjadi ${trial}`)
                    break
				case 'readall':
					if (!isOwner) return reply(ind.ownerb())
					var chats = await patrick.chats.all()
                    chats.map( async ({ jid }) => {
                          await patrick.chatRead(jid)
                    })
					rdl = `${a}Berhasil membaca ${chats.length} Chat !${a}`
					await patrick.sendMessage(from, rdl, MessageType.text, {quoted: Lan})
					console.log(chats.length)
					break
                case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply(ind.acces())
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
					  } else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
					  } else {
						reply(ind.satukos())
					  }
					break
                    case 'resetlimit':
					if (!isOwner) return reply(ind.ownerb())
					var ngonsol = []
					rest = _limit.indexOf([])
					_limit.splice(rest)
					fs.writeFileSync('./database/json/limit.json', JSON.stringify(ngonsol))
					fakestatus(`Limit Telah Direset`)
					break
                    case 'setthumb':
                if (!isOwner) return reply(ind.ownerb)
                if (!isQuotedImage) return reply('reply image nya kak!')
                const dappp = JSON.parse(JSON.stringify(dap).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                const uhuy = await patrick.downloadMediaMessage(dappp)
                fs.unlinkSync(`./lib/image/logo.jpeg`)
                await sleep(2000)
                fs.writeFileSync(`./lib/image/logo.jpeg`, uhuy)
                patrick.sendMessage(from, 'Sukses Ngab!!', text, { sendEphemeral: true, thumbnail: fs.readFileSync('./lib/image/logo.jpeg', 'base64')})
                break
                case 'receive':
				if (!isRegistered) return reply(ind.noregis())
		        if (!isOwner) return reply(ind.ownerb())
				if (!q.includes('|')) return  reply(ind.wrongf())
                  const tujuanfe = q.substring(0, q.indexOf('|') - 1)
                  const jumlahfe = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumlahfe)) return await reply('Maaf, Hanya Angka Yang Diperbolehkan')
                  const tujuantffe = `${tujuanfe.replace("@", '')}@s.whatsapp.net`
                  pajek = 0.000 *  jumlahfe
                  hasiltffe = jumlahfe - pajek
                  addKoinUser(tujuantffe, hasiltffe)
                  reply(`        *Transfer receipt*\n  Pengambilan Ub Berhasil\n\n> From : ${sender.split("@")[0]}\n> To : ${tujuanfe}\n> Jumlah : Ub    ${jumlahfe}\n> Pajak : ${pajek}\n> Serial : ${createSerial(10)}\n  Sisa Saldo Anda : Ub  ${checkATMuser(sender)}\n\n                                       ${time}\n\n          *PatrickBot ATM*`)
                  break
                 case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    patrick.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await patrick.downloadAndSaveMediaMessage(enmedia)
					await patrick.updateProfilePicture(botNumber, media)
					reply('Thx Untuk Foto Profilnya Min')
					break 
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await patrick.chats.all()
					patrick.setMaxListeners(25)
					for (let _ of anu) {
						patrick.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			     case 'block':
				 patrick.updatePresence(from, Presence.composing) 
				 patrick.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner || !isAdmin) return reply(ind.ownerb())
					patrick.blockUser (`${body.slice(7)}@c.us`, "add")
					patrick.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                 case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner || !isAdmin) return reply(ind.ownerb())
				    patrick.blockUser (`${body.slice(9)}@c.us`, "remove")
					patrick.sendMessage(from, `Perintah diterima, Membuka ${body.slice(9)}@c.us`, text)
					break
				  case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => patrick.groupLeave(from))
					break 
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await patrick.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await patrick.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							patrick.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('*_succes broadcast_* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 Patrickbot Broadcast 」*\n\n${body.slice(4)}`)
						}
						reply('*_succes broadcast_* ')
					}
					break
                case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await patrick.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							patrick.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break

                case 'addprem':
				if (isOwner) {
				expired = "30d"
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/json/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0]))
				} else 
				if (isAdmin) {
				expired = "3d"
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/json/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0]))
				}
				break
				
				case 'delprem':
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
 			   for( var i = 0; i < arr.length; i++){ 
 		       if ( arr[i] === mente) { 
    		      	  arr.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/json/prem.json',JSON.stringify(arr))
       			 }
 			    }
				reply(ind.dellprem(args[0]))
				break 
				
                case 'ban':
					if (!isOwner || !isAdmin) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					if (!isOwner || !isAdmin) return reply(ind.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
                 case 'oadmin':
					if (!isOwner) return reply(ind.ownerb())
					admbot = body.slice(6)
					patrickadmin.push(`${admbot}@s.whatsapp.net`)
					fs.writeFileSync('./database/json/admin.json', JSON.stringify(patrickadmin))
					reply(`Nomor wa.me/${admbot} telah dijadikan admin PatrickBot!`)
					break
				case 'odeladmin':
					if (!isOwner) return reply(ind.ownerb())
					admbot = body.slice(8)
					patrickadmin.splice(`${admbot}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/json/admin.json', JSON.stringify(patrickadmin))
					reply(`Nomor wa.me/${admbot} telah di unadmin PatrickBot!`)
					break
				case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    			patrick.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await patrick.getProfilePicture(id)
						buffer = await getBuffer(pp)
						patrick.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'setmemberlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('*Limit wajib angka!*')
                    memberLimit = args[0]
                    reply(`memberLimit berhasil diubah menjadi ${memberLimit}`)
                    break
               case 'setkeyzeks':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    ApiZeks = args[0]
                    reply(`Apikey Zeks berhasil diubah menjadi ${KeyZeks}`)
                    break
               case 'setupdate':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    updatetext = args[0]
                    reply(`update text berhasil diubah menjadi ${updatetext}`)
                    break
               case 'setlimit':
                if (args.length < 1) return
                if (!isOwner) return reply(ind.ownerb())
                if (isNaN(args[0])) return reply('Limit Wajib Angka')
                limit = args[0]
                reply(`*Sukses* Mengubah limit menjadi ➣ : ${limit}`)
                break
                case 'totaluser':
					patrick.updatePresence(from, Presence.composing) 
									
					if (!isRegistered) return reply(ind.noregis())
					if (!isOwner) return reply(ind.ownerb())    
					teks = `╭────「 *TOTAL USER PatrickBot* 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${registered.length}\n╰──────⎿ *${name}* ⏋────`
					patrick.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
                    
                    case 'addbadword':
				if (!isGroup) return reply(ind.groupo)
				if (!isOwner || !isAdmin) return reply(ind.ownerb)
                if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                const bw = body.slice(11)
                bad.push(bw)
                fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                reply('Success Menambahkan Bad Word!')
                break

                case 'delbadword':  
				if (!isGroup) return reply(ind.groupo)
				if (!isOwner || !isAdmin) return reply(ind.ownerb)
                if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                let dbw = body.slice(11)
                bad.splice(dbw)
                fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                reply('Success Menghapu BAD WORD!')
                break 
//==========================================BATES NGAB==========================================\\
//=============MARKET MENU==============\\
 
                case 'marketmenu':
					const marketmenu = `  *Market Menu*
${a}▫️ ${prefix}spamchatwa* 1.000 Ub
${a}▫️ ${prefix}boomchat* 3.500 Ub
${a}▫️ ${prefix}nulis* 9.000 Ub
${a}▫️ ${prefix}nulispolio* 9.000 Ub
${a}▫️ ${prefix}nulis1* 32.500 Ub
${a}▫️ ${prefix}nulis2* 9.000 Ub
${a}▫️ ${prefix}nulisbkiri* 9.000 Ub
${a}▫️ ${prefix}join* LinkGroup 5.000 Ub
${a}▫️ ${prefix}cariuang*
          
       ~ PatrickBot 2021`
					await patrickhay(marketmenu, MessageType.text, tescuk, `${ucapanFakereply}`)
					break			
					
			  case 'spamchatwa':
              case 'spamchat':
              if (isBanned) return reply(ind.baned())
              if (!isRegistered) return reply(ind.noregis())
              if (args.length < 2) return reply(`Mau spamchat ke siapa? Contoh: ${prefix}spamchat 62888193810 tesss\nJangan Tambahkan Apapun!!`)
                if (args[0].startsWith('@')) return reply('Jangan Pake Tanda @ ')
                if (args[0].startsWith('08')) return reply('Gunakan Kode Negara')
                if (!args[0].startsWith('62')) return reply('Gunakan Kode Negara')
                if (args[0].startsWith('6288989029718')) return reply('❌ Gagal, Tidak Dapat Spam Owner PatrickBot')
                if (args[0].startsWith('6281936071585')) return reply('❌ Gagal, Tidak Dapat Spam Bot')
                if (args[0].startsWith('15036534195')) return reply('❌ Gagal, Tidak Dapat Spam Admin PatrickBot')
                if (args[0].startsWith('6289503573870')) return reply('❌ Gagal, Tidak Dapat Spam Admin PatrickBot')
                const wasek = 1000
				if ( checkATMuser(sender) <= wasek) return reply(`Pastikan Ub Kamu Tercukupi\nNote: 1 Spamchat = Ub 15.000\nCek Saldo Anda Dengan Ketik #dompet`)
				if ( checkATMuser(sender) >= wasek ) {
                   mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
         	  	const kontul = body.slice(8)
                   if (kontul.length > 300) return patrick.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                   reply(ind.wait())
                        var nomor = mek.participant
                        const busah = `         *Spam Chat*\n\n> From : @${nomor.split("@s.whatsapp.net")[0]}@bot.id\n> Pesan : ${kontul}`
                        var options = {
                         text: busah,
                         contextInfo: {mentionedJid: [nomor]},
                         }
                     confirmATM(sender, wasek) 
                     patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})
                    .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                     reply('*Berhasil, Melakukan Spamchat ke nomer Tujuan*')
                     }
                     break

                     case 'boomchatwa':
                     case 'boomchat':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 2) return reply(`Mau spamchat ke siapa? Contoh: ${prefix}spamchat 62888193810 tesss\nJangan Tambahkan Apapun!!`)
                if (args[0].startsWith('@')) return reply('Jangan Pake Tanda @ ')
                if (args[0].startsWith('08')) return reply('Gunakan Kode Negara')
                if (!args[0].startsWith('62')) return reply('Gunakan Kode Negara')
                if (args[0].startsWith('6288989029718')) return reply('❌ Gagal, Tidak Dapat Spam Owner PatrickBot')
                if (args[0].startsWith('6281936071585')) return reply('❌ Gagal, Tidak Dapat Spam Bot')
                if (args[0].startsWith('15036534195')) return reply('❌ Gagal, Tidak Dapat Spam Admin PatrickBot')
                if (args[0].startsWith('6289503573870')) return reply('❌ Gagal, Tidak Dapat Spam Admin PatrickBot')
                const wassa = 7500
				if ( checkATMuser(sender) <= wassa) return reply(`Pastikan Ub Kamu Tercukupi\nNote: 1 ${command} = Ub ${wassa}\nCek Saldo Anda Dengan Ketik ${prefix}dompet`)
				if ( checkATMuser(sender) >= wassa ) {
                        mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
          	  		const feja = body.slice(8)
                        if (feja.length > 300) return patrick.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        reply(ind.wait())
                        var nomor = mek.participant
                        const busah = `         *Spam Chat*\n\n> From : @${nomor.split("@s.whatsapp.net")[0]}@bot.id\n> Pesan : ${feja}`
                        var options = {
                         text: busah,
                         contextInfo: {mentionedJid: [nomor]},
                         }
                         confirmATM(sender, wassa) 
                         patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { patrick.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       reply('*Berhasil, Melakukan Spamchat ke nomer Tujuan*')
                       }
                       break

                     case 'cariuang':
                      if (!isRegistered) return reply(ind.noregis())
		              if (isBanned) return reply(ind.baned())
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const duitowner = 999999
                      addKoinUser(sender, mntpner)
                      reply(`Nih Untukmu Owner Ub ${mntpner} `)
                      } else 
                      if (isAdmin) {
                      const duitadmin = 5000
                      addKoinUser(sender, mntpner)
                      reply(`Nih Untukmu Owner Ub ${mntpner} `)
                      } else {
                      	const hahagk = 10
                      	if ( checkATMuser(sender) <= hahagk) return reply(`Pastikan Ada Ub Sisa Minimal 750 Ub`)
				          if ( checkATMuser(sender) >= hahagk ) {
                      const duituser = Math.ceil(Math.random() * 75) + 180
                      await reply(`*Selamat* ${pushname} Kamu Mendapatkan Ub *${minuslu}*`)
                      addKoinUser(sender, minuslu)
                      confirmATM(sender, hahagk)
                      }
                     }
			        break

                   
                   
//==========================================BATES NGAB==========================================\\
//=============MAKER MENU==============\\
				case 'makermenu':
					const mekermenu = `  *Maker Menu*
${a}▫️ ${prefix}csgo${a}
${a}▫️ ${prefix}honey${a}
${a}▫️ ${prefix}silk${a} 
${a}▫️ ${prefix}warface${a}
${a}▫️ ${prefix}gradient${a}
${a}▫️ ${prefix}neon${a}
${a}▫️ ${prefix}matrix${a}
${a}▫️ ${prefix}butterfly${a}
${a}▫️ ${prefix}slide${a} 
${a}▫️ ${prefix}party${a}
${a}▫️ ${prefix}glowmetalic${a}
${a}▫️ ${prefix}rainbowshine${a}
${a}▫️ ${prefix}bokeh${a}
${a}▫️ ${prefix}hartatahta${a} 
${a}▫️ ${prefix}biscuit${a}
${a}▫️ ${prefix}3dunderwater${a} 
${a}▫️ ${prefix}3dglowing${a}
${a}▫️ ${prefix}bearlogo${a}
${a}▫️ ${prefix}cloud${a}
${a}▫️ ${prefix}steel${a}
${a}▫️ ${prefix}8bit${a}
${a}▫️ ${prefix}pubg${a} 
${a}▫️ ${prefix}flaming${a}
${a}▫️ ${prefix}naruto${a}
${a}▫️ ${prefix}brokenglass${a}
${a}▫️ ${prefix}triggered${a} 
${a}▫️ ${prefix}gay${a}
${a}▫️ ${prefix}wanted${a}
${a}▫️ ${prefix}glass${a}
${a}▫️ ${prefix}attp${a}
${a}▫️ ${prefix}makequote${a}
${a}▫️ ${prefix}ttp${a}
${a}▫️ ${prefix}ocr${a} 

          
       ~ PatrickBot 2021`
					await patrickhay(mekermenu, MessageType.text, tescuk, `${ucapanFakereply}`)
					break
					
	            case 'csgo':
                case 'honey':
                case 'silk':
                case 'warface':
                case 'gradient':
                case 'neon':
                case 'matrix':
                case 'butterfly':
                case 'slide':
                case 'party':
                try {
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                teksnya = args.join(' ')
                reply(ind.wait())
                patrickganss = await fetchJson(`https://leyscoders-api.herokuapp.com/api/textmaker/${command}?q=${teksnya}&apikey=${KeyLeys}`)
                hasil = patrickganss.result
                poto = await getBuffer(hasil.url)
                patrick.sendMessage(from, poto, image, {quoted: ftoko})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error!, Harap coba lagi nanti')
				}
                break
                case 'hartatahta':
                try {
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                reply(ind.wait())
                patrickganss = await fetchJson(`https://leyscoders-api.herokuapp.com/api/harta-tahta?teks=${q}&apikey=${KeyLeys}`)
                hasil = patrickganss.result
                poto = await getBuffer(hasil.url)
                patrick.sendMessage(from, poto, image, {quoted: ftoko})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error!, Harap coba lagi nanti')
				}
                break
                case 'bokeh':
                case 'biscuit':
                case '3dunderwater':
                case 'brokenglass':
                case '3dglowing':
                case 'bearlogo':
                case 'cloud':
                case 'steel':
                case '8bit':
                case 'pubg':
                case 'naruto':
                case 'flaming':
                try {
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                teksnya = args.join(' ')
                reply(ind.wait())
                patrickganss = await fetchJson(`https://dapuhy-api.herokuapp.com/api/textpro/${command}?text=DappaUhuy&apikey=${KeyDappa}`)
                hasil = patrickganss.result
                poto = await getBuffer(hasil.url)
                patrick.sendMessage(from, poto, image, {quoted: ftoko})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error!, Harap coba lagi nanti')
				}
                break
                case 'glowmetalic':
                try {
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|ganz`)
                teksnya = body.slice(12)
                reply(ind.wait())
                patrickganss = await getBuffer(`https://leyscoders-api.herokuapp.com/api/textmaker/glow-metalic?q=${teksnya}&apikey=${KeyLeys}`)
                patrick.sendMessage(from, patrickganss, image, {quoted: ftoko})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error!, Harap coba lagi nanti')
				}
                break
                case 'rainbowshine':
                try {
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}|ganz`)
                teksnya = body.slice(1)
                reply(ind.wait())
                patrickganss = await getBuffer(`https://leyscoders-api.herokuapp.com/api/textmaker/rainbow-shine?q=${teksnya}&apikey=${KeyLeys}`)
                patrick.sendMessage(from, patrickganss, image, {quoted: ftoko})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error!, Harap coba lagi nanti')
				}
                break
                case 'triggered':
			    case 'joke':
			    case 'wanted':
			    case 'hitler':
			    case 'circle':
		        if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                reply(ind.wait())
                owgi = await patrick.downloadAndSaveMediaMessage(ger)
                anu = await imgbb("31efea1d3c7a75b32cca2500ea0d5f1e", owgi)
                teks = `${anu.display_url}`
                anu1 = await getBuffer (`https://leyscoders-api.herokuapp.com/api/img/${command}?url=${teks}&apikey=${KeyLeys}`)
                patrick.sendMessage(from, anu1, image, {quoted: mek})
                patrick.sendMessage(from, anu1, document, {quoted: mek})
                reply(`Done Gan Image + Document`)
                } else {
                reply('Gunakan foto!')
                }
                break
			
/******************* Update PatrickBot  *******************/               
                    case 'update':
                    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
                    costum(updatetext, text, tescuk, `${ucapanFakereply}`)
                      break 

//==========================================BATES NGAB==========================================\\
//=============FUN MENU==============\\
				case 'funmenu':
					const funnmenu = `  *Fun Menu*
${a}▫️ ${prefix}apakah${a}
${a}▫️ ${prefix}bisakah${a}
${a}▫️ ${prefix}kapankah${a}
${a}▫️ ${prefix}rate${a}
${a}▫️ ${prefix}tts${a}
${a}▫️ ${prefix}afk${a}
${a}▫️ ${prefix}bpfont${a}
${a}▫️ ${prefix}tictactoe${a}
${a}▫️ ${prefix}seberapagay${a}
${a}▫️ ${prefix}ganteng${a}
${a}▫️ ${prefix}beban${a}
${a}▫️ ${prefix}cantik${a}
${a}▫️ ${prefix}truth${a}
${a}▫️ ${prefix}dare${a}
${a}▫️ ${prefix}igstalk${a}
${a}▫️ ${prefix}leaderboard${a}
${a}▫️ ${prefix}hobby${a}
${a}▫️ ${prefix}memeindo${a}
${a}▫️ ${prefix}brainly${a}
${a}▫️ ${prefix}pinterest${a}
${a}▫️ ${prefix}asupan${a}
${a}▫️ ${prefix}fitnah${a}
${a}▫️ ${prefix}kalkulator${a}
${a}▫️ ${prefix}pasangan${a}
${a}▫️ ${prefix}artinama${a}
          
       ~ PatrickBot 2021`
					await patrickhay(funnmenu, MessageType.text, tescuk, `${ucapanFakereply}`)
					break
                case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					patrick.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
                 case 'ttt':
                 case 'tictatoe':
                if (args.length == 3) return await reply("Lu mau maen ama siapa oy")
                if (args.length == 1) return await reply(`Example: ${prefix}${command} X/O @tag lawan`)
                if (!["x", "o"].includes(args[0].toLowerCase())) return await reply(`Example: ${prefix}${command} X/O @tag lawan`)
                nantang = X
                pelawan = O
                if (args[0].toLowerCase() == "o") {
                    nantang = O
                    pelawan = X
                }
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = sender
                var lawan = args[1]
                    text = `Player 1: @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        text += "\n         "
                    }
                    text += x
                    count += 1
                }
                text += `\n\nPlayer 2: @${lawan.split("@")[0]} (${pelawan})`
                patrick.sendMessage(from, text, extendedText, {contextInfo: {"mentionedJid": [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./lib/plugins/tictactoe.json", JSON.stringify(tictactoe))
                })
                break
                 case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					patrick.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
         		case 'apakah':
       		  if (!isRegistered) return reply(ind.noregis())
		         if (isBanned) return reply(ind.baned())
				 if (isLimit(sender)) return reply(ind.limitend(pushname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					patrick.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'afk':
	                if (!isRegistered) return reply(ind.noregis())
	                if (!isGroup) return reply(ind.groupo())
	                if (isAfkOn) return reply(ind.afkOnAlready())
	                if (isLimit(sender)) return reply(ind.limitend(pushname))
	                limitAdd(sender)
	                reason = body.slice(5)
					if (reason === undefined || reason === ' ' || reason === '') { reason = 'nothing'}
	                addAfkUser(sender, time, reason)
	                reply(ind.afkOn(pushname, reason))
	            break
				case 'rate':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					patrick.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
               case 'seberapagay':
                    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
		               teks = body.slice(1)
		               anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		               hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		               reply(hasil)
		               await limitAdd(sender)
		               break
                case 'ganteng':
					if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
					membr = []
					      const nus = groupMembers
					      const msl = groupMembers
					      const siapss = nus[Math.floor(Math.random() * nus.length)]
					      const sipss = pushname[Math.floor(Math.random() * msl.length)]
					      teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`
					      membr.push(siapss.jid)
					      mentions(teks, membr, true)
					      break
                    case 'beban':
					if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
					membr = []
					      const met = groupMembers
					      const msd = groupMembers
					      const siapsa = met[Math.floor(Math.random() * met.length)]
					      const sipsd = pushname[Math.floor(Math.random() * msd.length)]
					      teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
					      membr.push(siapsa.jid)
					      mentions(teks, membr, true)
					      break
                    case 'cantik':
					if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
					membr = []
					      const meo = groupMembers
					      const msk = groupMembers
					      const siaps = meo[Math.floor(Math.random() * meo.length)]
					      const sips = pushname[Math.floor(Math.random() * msk.length)]
					      teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`
					      membr.push(siaps.jid)
					      mentions(teks, membr, true)
					      break
                    case 'truth':
                    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                         const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					     const ttrth = trut[Math.floor(Math.random() * trut.length)]
					     truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				         patrick.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					     await limitAdd(sender)
				         break
				     case 'dare':
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
				       const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					   const der = dare[Math.floor(Math.random() * dare.length)]
					   tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					   patrick.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					   await limitAdd(sender)
					   break	
					case 'hobby':
                    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','Nonton Wibu']
					const by = hob[Math.floor(Math.random() * hob.length)]
					patrick.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
                    
                    case 'asupan':
			        patrick.updatePresence(from, Presence.composing) 
				    if (!isRegistered) return reply(ind.noregis())
				    data = fs.readFileSync('./lib/asupan.js');
                    jsonData = JSON.parse(data);
                    randIndex = Math.floor(Math.random() * jsonData.length);
                    randKey = jsonData[randIndex];
                    buffer = await getBuffer(randKey.result)
                    patrick.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				    break                   
				    
                    case 'fitnah':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pushname))				
		if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					patrick.sendMessage(from, `${bot}`, text, {quoted: { mek: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
                    case 'kalkulator':
                   if (!isRegistered) return reply( ind.noregis())
				   if (isLimit(sender)) return reply(ind.limitend(pushname))
				   if (isBanned) return reply(ind.baned())
				   if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				   mtk = body.slice(12)
				   if (typeof Math_js.evaluate(mtk) !== "number") {
					 reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				     } else {
					 reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				     }
				     await limitAdd(sender)
				     break
                      
                      
//==========================================BATES NGAB==========================================\\
//=============GROUP MENU==============\\
				case 'groupmenu':
					const groupomenu = `  *Group Menu*
${a}▫️ ${prefix}antivirtex 1 | 0${a}
${a}▫️ ${prefix}antilink 1 | 0${a}
${a}▫️ ${prefix}group buka | tutup${a}
${a}▫️ ${prefix}add 62881xxxx${a}
${a}▫️ ${prefix}hedsot @tag${a}
${a}▫️ ${prefix}promote @tag${a}
${a}▫️ ${prefix}demote @tag${a}
${a}▫️ ${prefix}setname _teks_${a}
${a}▫️ ${prefix}setpp _reply image_${a}
${a}▫️ ${prefix}setdesc _teks_${a}
${a}▫️ ${prefix}groupinfo${a}
${a}▫️ ${prefix}linkgrup${a}
${a}▫️ ${prefix}tagall${a}
${a}▫️ ${prefix}hidetag${a}
${a}▫️ ${prefix}hidetag20${a}
${a}▫️ ${prefix}hidetag50${a}
${a}▫️ ${prefix}tagme${a}
${a}▫️ ${prefix}level${a}
${a}▫️ ${prefix}listonline${a}
${a}▫️ ${prefix}listadmin
${a}▫️ ${prefix}delete${a}
${a}▫️ ${prefix}ciumadmin${a}
          
       ~ PatrickBot 2021`
					await patrickhay(groupomenu, MessageType.text, tescuk, `${ucapanFakereply}`)
					break

               case 'antivirtex':
		        if (!isGroup) return reply(ind.groupo)
                if (!isBotGroupAdmins) return reply(ind.badmin())					
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (args[0] === 'on' ) {
				if (isAntiVirtex) return reply(`[❗] Fitur antivirtex sudah aktif`)
			        antivirtex.push(from)
		            fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
			        reply(`[❗] Berhasil mengaktifkan fitur antivirtex pada group ini`)
		         } else
                if (args[0] === 'off' ) {
				if (!isAntiVirtex) return reply(`[❗] Fitur antivirtex belum aktif`)
				     antivirtex.splice(from, 1)
				     fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
				     reply(`[❗] Berhasil menonaktifkan fitur antivirtex pada group ini`)
		         } else {
				 reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				 }
				 break
                case 'antilinkgrup':
			    case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply(`Ketik *${prefix}${command} on* untuk mengaktifkan\nKetik *${prefix}${command} off* untuk menonaktifkan`)
					if (args[0] === 'on' ) {
						if (isAntiLink) return reply('[❗] Fitur antilink sudah aktif')
						     antilink.push(from)
						     fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						     reply('[❗] Berhasil mengaktifkan fitur antilink pada group ini')
						     patrick.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					    } else 
                        if (args[0] === 'off' ) {
						if (!isAntiLink) return reply('[❗] Fitur antilink belum aktif')
						      var ini = anti.botLangsexOf(from)
						      antilink.splice(ini, 1)
						      fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						      reply('[❗] Berhasil menonaktifkan fitur antilink pada group ini')
					     } else {
						 reply(ind.acces())
					     }
					     break
                         
                         case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                        if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                        media = await patrick.downloadAndSaveMediaMessage(mek)
                        await patrick.updateProfilePicture (from, media)
                        reply('*✔️Berhasil mengganti pp grup*')
					    break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						patrick.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*Berhasil Membuka Group*`)
						patrick.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*Berhasil Menutup Group`)
						patrick.groupSettingChange(from, GroupSettingChange.messageSend, true)
					    }
					    break         
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                patrick.groupUpdateSubject(from, `${body.slice(9)}`)
                patrick.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
			    break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                patrick.groupUpdateDescription(from, `${body.slice(9)}`)
                patrick.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
				break
           	 case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
							teks += `@_.split('@')[0]`
						 }
						mentions(teks, mentioned, true)
						patrick.groupDemoteAdmin(from, mentioned)
					    } else {
						mentions(`YA YAHYA WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
						patrick.groupDemoteAdmin(from, mentioned)
					    }
					    break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						patrick.groupMakeAdmin(from, mentioned)
					    } else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
						patrick.groupMakeAdmin(from, mentioned)
					    }
					    break	
					 
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					    }
					mentions(teks, groupAdmins, true)
					break
                     
                    case 'tagme':
                if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
	            if (!isGroup) return reply(ind.groupo())
					var waw = mek.participant
					const tag = {
					text: `@${waw.split("@s.whatsapp.net")[0]} tagged!`,
					contextInfo: { mentionedJid: [waw] }
					}
					patrick.sendMessage(from, tag, text, {quoted: mek})
					break
				

                case 'bcgc':
                if (!isOwner) return reply(ind.ownerb())
                if (!isGroup) return reply(ind.groupo())
                if (args.length < 1) return reply('Teksnya mana kak >_<')
                anu = await groupMembers
                nom = mek.participant
                if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    buff = await patrick.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                        patrick.sendMessage(_.jid, buff, image, { caption: `*BC GROUP*\n\n➣ Dari Grup : ${groupName}\n➣ Pengirim : wa.me/${(sender.split('@')[0])}\n➣ Pesan : ${body.slice(6)}` })
                        }
                        reply('*_Sukses Broadcast_*')
                    } else {
                    for (let _ of anu) {
                        sendMess(_.jid, `*BC GROUP*\n\n➣ Dari Grup : ${groupName}\n➣ Pengirim : wa.me/${(sender.split('@')[0])}\n➣ Pesan : ${body.slice(6)}`)
                     }
                     reply('*_Sukses Broadcast_*')
                     }
                     break
                     case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
		        if (!isGroupAdmins) return reply(ind.ownerb())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
			    if (!isGroup) return reply(ind.groupo())
					var value = body.slice(9)
					var group = await patrick.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					patrick.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                    case 'hidetag20':
                if (!isRegistered) return reply(ind.noregis())
		        if (!isGroupAdmins) return reply(ind.ownerb())
		        if (!isPrem) return reply(ind.premon())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
			    if (!isGroup) return reply(ind.groupo())
					var value = body.slice(9)
					var group = await patrick.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					await limitAdd(sender)
					break

                case 'hidetag50':
                if (!isRegistered) return reply(ind.noregis())
		        if (!isGroupAdmins) return reply(ind.ownerb())
		        if (!isOwner || !isAdmin) return reply(ind.admin())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
			    if (!isGroup) return reply(ind.groupo())
					var value = body.slice(9)
					var group = await patrick.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					patrick.sendMessage(from, options, text)
                    patrick.sendMessage(from, options, text)
					await limitAdd(sender)
					break
//==========================================BATES NGAB==========================================\\
//=============ISLAM MENU==============\\
				case 'islammenu':
					const islammmenu = `  *Islam Menu*
${a}▫️ ${prefix}quran${a}
${a}▫️ ${prefix}quotesislami${a}
${a}▫️ ${prefix}listsurah${a}
          
       ~ PatrickBot 2021`
					fakestatus(islammmenu)
					break
                     
                     
//==========================================BATES NGAB==========================================\\
//=============GAME MENU==============\\
				case 'gamemenu':
					const gameemenu = `  *Game Menu*
${a}▫️ ${prefix}tebakgambar${a}
${a}▫️ ${prefix}tebakkata${a}
${a}▫️ ${prefix}tebakmatematika${a}
${a}▫️ ${prefix}deltg${a}
${a}▫️ ${prefix}deltk${a}
${a}▫️ ${prefix}delmath${a}
${a}▫️ ${prefix}family100${a}
${a}▫️ ${prefix}buyglimit${a}
${a}▫️ ${prefix}buylimit${a}

          
       ~ PatrickBot 2021`
					await patrickhay(gamemenu, MessageType.text, tescuk, `${ucapanFakereply}`)
					break

		       case 'tebakgambar': 
		            if (!isRegistered) return reply(ind.noregis())
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=${KeyZeks}`)
                    result = get_result.result
                    ini_image = result.soal
                    jawaban = result.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    ini_buffer = await getBuffer(ini_image)
                    patrick.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab Sebelum 30 Detik" })
                   await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                    	reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                case 'tebakkata':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned)
                if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    getresultTK = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tebak-gambar2?apikey=${KeyLeys}`)
                    resultK = getresultTK.result
                    ini_imageK = resultK.soal
                    jawabaen = resultK.jawaban
				    tebakkata[sender.split('@')[0]] = jawabaen.toLowerCase()
                    fs.writeFileSync("./tebakkata.json", JSON.stringify(tebakkata))
                    console.log(jawabaen)
                    patrick.sendMessage(from, ini_imageK, text)
                    await sleep(30000)
                    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawabaen)
                        delete tebakkata[sender.split('@')[0]]
                        fs.writeFileSync("./tebakkata.json", JSON.stringify(tebakkata))
                        }
                        break
                 case 'tebakmatematika':
                 if (!isRegistered) return reply(ind.noregis())
                      if (isBanned) return reply(ind.baned)
                      if (mathtebak.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                         soalmath = `*${soalnyamath}*\n\n*Jawab Sebelum 15 Detik*`                
				         mathtebak[sender.split('@')[0]] = jawapannnya.toLowerCase()
                         fs.writeFileSync("./mathtebak.json", JSON.stringify(mathtebak))
                         console.log(jawapannnya)
                         patrick.sendMessage(from, soalmath, text)
                         await sleep(15000)
                        if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawapannnya)
                        delete mathtebak[sender.split('@')[0]]
                        fs.writeFileSync("./mathtebak.json", JSON.stringify(mathtebak))
                        } 
                        break
                  case 'delmath':
                 if (!isRegistered) return reply(ind.noregis())
                      if (isBanned) return reply(ind.baned)
                      if (!mathtebak.hasOwnProperty(sender.split('@')[0])) return reply(`Maaf, ${prefix}tebakmatematika tidak ada sesi/permainan`)
                        delete mathtebak[sender.split('@')[0]]
                        fs.writeFileSync("./mathtebak.json", JSON.stringify(mathtebak))
                        reply('Berhasil Delete Sesi Tebak Matematika')
                        break
                  case 'deltg':
                 if (!isRegistered) return reply(ind.noregis())
                      if (isBanned) return reply(ind.baned)
                      if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply(`Maaf, ${prefix}tebakgambar tidak ada sesi/permainan`)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./tebakkata.json", JSON.stringify(tebakgambar))
                        reply('Berhasil Delete Sesi Tebak Gambar')
                        break
                  case 'deltk':
                 if (!isRegistered) return reply(ind.noregis())
                      if (isBanned) return reply(ind.baned)
                      if (!tebakkata.hasOwnProperty(sender.split('@')[0])) return reply(`Maaf, ${prefix}tebakmatematika tidak ada sesi/permainan`)
                        delete tebakkata[sender.split('@')[0]]
                        fs.writeFileSync("./tebakkata.json", JSON.stringify(tebakkata))
                        reply('Berhasil Delete Sesi Tebak Kata')
                        break
             
                  case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
		        reply(ind.wait())
				payout = body.slice(10)
				const koinPerlimit = 5000
				const total = koinPerlimit * payout
                if (total < 1 ) return reply(`Minimal Beli 1 Sayang`)
				if ( checkATMuser(sender) <= total) return reply(`Pastikan Ub Kamu Tercukupi`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`        *Successful Payment*\n> *From* : Admin PatrickBot\n> *To* : ${pushname}\n> *Nominal Purchase* : ${payout}\n> *Price Limit* : Ub ${koinPerlimit}/Limit\n> *Saldo Mu* : Ub  ${checkATMuser(sender)}\n> *Serial Number : ${createSerial(10)}\n                                              ${time}\n     Melayani Dimanapun dan Kapanpun\n                *PatrickBot Market*\n`)
				    } 
				    break
                    
                    
//==========================================BATES NGAB==========================================\\
//=============MEDIA MENU==============\\
				case 'mediamenu':
					const mediaamenu = `  *Media Menu*
${a}▫️ ${prefix}sindo (internasional)${a}
${a}▫️ ${prefix}sindo2 (nasional)${a}
${a}▫️ ${prefix}okezone${a}
${a}▫️ ${prefix}kompastv${a}
${a}▫️ ${prefix}bbcnews${a}
${a}▫️ ${prefix}beritanews${a}
${a}▫️ ${prefix}infocuaca${a}
${a}▫️ ${prefix}infogempa${a}
${a}▫️ ${prefix}lirik${a}
${a}▫️ ${prefix}ssweb${a}
${a}▫️ ${prefix}map${a}
${a}▫️ ${prefix}stalkig${a}
          
       ~ PatrickBot 2021`
					await patrickhay(mediaamenu, MessageType.text, tescuk, `${ucapanFakereply}`)
					break

                   case 'sindo':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
				reply(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/sindo/international?apikey=${KeyLeys}`)
				teks = '=================\n'
				for (let i of anu.data) {
				teks += `Judul : ${i.judul}\nWaktu : ${i.waktu}\nTipe : ${i.tipe}\nKutipan : ${i.kutipan}\nLink : ${i.link}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break

				case 'sindo2':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
				reply(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/sindo/nasional?apikey=${KeyLeys}`)
				teks = '=================\n'
				for (let i of anu.data) {
				teks += `Judul : ${i.judul}\nWaktu : ${i.waktu}\nTipe : ${i.tipe}\nKutipan : ${i.kutipan}\nLink : ${i.link}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break

				case 'okezone':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
				reply(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/okezone?apikey=${KeyLeys}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nLink : ${i.url}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break

				case 'kompastv':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
				reply(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/kompas?apikey=${KeyLeys}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nGambar : ${i.img}\nWaktu : ${i.waktu}\nJenis : ${i.jenis}\nLink : ${i.url}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break

				case 'bbcnews':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				reply(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/bbc-news?apikey=${KeyLeys}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nTerbit : ${i.terbit}\nWartawan : ${i.wartawan}\nGambar : ${i.img}\nDeskripsi : ${i.desc}\nLink : ${i.link}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break

				case 'beritanews':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				reply(ind.wait())
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/berita-news?apikey=${KeyLeys}`)
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Judul : ${i.title}\nGambar : ${i.img}\nLink : ${i.url}\n=================\n`
				}
				reply(teks.trim())
				await limitAdd(sender)
				break

                case 'playstore':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply(`text mana broh?\ncontoh : ${prefix + command} telegram`)
                reply(ind.wait())
                get_result = await fetchJson(`https://dapuhy-api.herokuapp.com/api/search/playstore?query=${q}&apikey=PatrickApi`)
                get_result = get_result.result
                ini_txt = 'Play Store Search : \n'
                for (var x of get_result) {
                ini_txt += `Name : ${x.title}\n`
                ini_txt += `Description : ${x.description}\n`
                ini_txt += `Developer : ${x.developer}\n`
                ini_txt += `Rating : ${x.rating}\n`
                ini_txt += `Link : ${x.link}\n`
                    }
                thumb = get_result.icon
                    patrick.sendMessage(from, thumb, image, { quoted: mek, caption: ini_txt })
                reply(ini_txt)
                await limitAdd(sender)
                break
                
                case 'infocuaca':
                //[❗] case by DappaGanz
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
				daerah = args[0]
				reply(ind.wait())
                resultnya = await fetchJson(`http://leyscoders-api.herokuapp.com/api/cuaca?q=${daerah}&apikey=${KeyLeys}`)
                patrickcu = resultnya.result
                textnya = `Daerah : ${patrickcu.Daerah}\n`
                textnya += `Latitude : ${patrickcu.Latitude}\n`
                textnya += `Longitude : ${patrickcu.Longitude}\n`
                textnya += `TimeZone : ${patrickcu.TimeZone}\n`
                textnya += `Tanggal : ${patrickcu.Tanggal}\n`
                textnya += `Waktu : ${patrickcu.Waktu}\n`
                textnya += `Hari : ${patrickcu.Hari}\n`
                textnya += `Cuaca : ${patrickcu.Cuaca}`
                patrick.sendMessage(from, textnya, text, {quoted: fkontak})
                await limitAdd(sender)
                break
                case 'infotsunami':
                //[❗] case by DappaGanz
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
				reply(ind.wait())
                anuu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/info-tsunami?apikey=${KeyLeys}`)
                patricktsi = anuu.result
                textcuk = `Waktu : ${patricktsi.waktu}\n`
                textcuk += `Magnitude : ${patricktsi.magnitude}\n`
                textcuk += `Kedalaman : ${patricktsi.Kedalaman}\n`
                textcuk += `Wilayah : ${patricktsi.Wilayah}\n`
                textcuk += `Koordinat : ${patricktsi.koordinat}\n`
                patrick.sendMessage(from, textcuk, text, {quoted: fkontak})
                await limitAdd(sender)
                break

				case 'dompet':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong, time))
				break
			case 'quotes2':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				quotes = body.slice(1)
				const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				patrick.sendMessage(from, ''+tes+'\n\n_By : PatrickBot._', text, { quoted: mek })
				await limitAdd(sender)
				break
				
                    
			   case 'listsurah':
					if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
					patrick.sendMessage(from, listsurah() , text, tescuk, cr)
					break

			case 'audio':
				 patrick.updatePresence(from, Presence.composing) 
 				if (!isRegistered) return reply(ind.noregis())
		         if (isBanned) return reply(ind.baned())
				 ayam = fs.readFileSync('./lib/music.js');
                 jsonData = JSON.parse(ayam);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                patrick.sendMessage(from, ayam, audio, {mimetype: 'audio/mp3', filename: `.mp3`, quoted: mek})
				break
		
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
		
		case 'delete':
		case 'del':
		case 'd':
			if (!isGroup)return reply(ind.groupo())
			if (!isOwner || !isGroupAdmins || !isAdmin) return reply(`❌ Fitur Ini Khusus Untuk AdminGroup / Owner PatrickBot / Admin Patrickbot`)
			patrick.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
		
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('Maaf, Hanya Angka Yang Diperbolehkan')
                if (jumblah < 500 ) return reply(`Minimal Transfer Ub 5000`)
                if (checkATMuser(sender) < jumblah) return reply(`Pengiriman Tidak Berhasil\nPastikan Saldo Anda Cukup Untuk Melakukan Transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6288989029718@s.whatsapp.net', fee)
                reply(`        *Transfer receipt*\n  Pengiriman Transfer Berhasil\n\n> From : ${sender.split("@")[0]}\n> To : ${tujuan}\n> Jumlah : Ub    ${jumblah}\n> Pajak : ${fee}\n> Serial : ${createSerial(10)}\n  Sisa Saldo Anda : Ub  ${checkATMuser(sender)}\n\n                                       ${time}\n\n          *PatrickBot ATM*`)
                break
                 
           case 'jadian':
             if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (!isRegistered) return reply(ind.noregis())
                jds = []
                const jdii = groupMembers
                const koss = groupMembers
                const akuu = jdii[Math.floor(Math.random() * jdii.length)]
                const diaa = koss[Math.floor(Math.random() * koss.length)]
                teks = `${a}Pencarian Jodoh Ditemukan, Ciee Yang Lagi Jodoh${a}\n*@${akuu.jid.split('@')[0]}  ❤️ @${diaa.jid.split('@')[0]}*`
                jds.push(akuu.jid)
                jds.push(diaa.jid)
                mentions(teks, jds, true)
                await limitAdd(sender)
                break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
		           if (isBanned) return reply(ind.baned())
				   checkLimit(sender)
				   break             
				
			//
					
               
					
					case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					patrick.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				
				
					case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
					patrick.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group PatrickBot~ :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					patrick.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break

		case 'login':
		case 'verify':
		case 'daftar':
        if (isRegistered) return  reply(ind.rediregis())
		try {
		ppimg = await patrick.getProfilePicture(`${sender.split('@')[0]}@c.us`)
		} catch {
		ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		}
		addRegisteredUser(sender)
		imglu = 'https://dappa-result.herokuapp.com/bgverify.jpeg'//ubah sesuka kamu, bisa upload di imgbb.com
                veri = sender
                addATM(sender)
                addLevelingId(sender)
                const kentod = `Terimakasih telah mendaftar di PatrickBot.\nSilahkan Ketik .menu untuk melihat Menu PatrickBot`
                let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${createSerial(10)}&pp=${ppimg}&bg=${imglu}`)
                patrick.sendMessage(from, buff, MessageType.image, {quoted: freply, caption: kentod, contextInfo: {'mentionedJid': [sender]}})
                break
					
                case 'listonline':
            if (!isRegistered) return reply(ind.noregis())
             if (isBanned) return reply(ind.baned())
                if (!isOwner || !isGroupAdmins) return reply(`❌ Fitur Ini Khusus Untuk AdminGrup / Owner PatrickBot`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(patrick.chats.get(ido).presences), patrick.user.jid]
                patrick.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: mek,
                    contextInfo: { mentionedJid: online }
                })
                break
				
               case 'report':
               case 'laporbug':
                if (!isRegistered) return reply(ind.noregis())
                     const pesan = body.slice(10)
                       var nomor = mek.participant
                       const teks1 = `*[ Report Message ]*\n > Nomor : @${nomor.split("@s.whatsapp.net")[0]}\n > Bug : ${pesan}`
                       var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    patrick.sendMessage('6288989029718@s.whatsapp.net', options, text, {quoted: mek})
                    reply('*Pesan Report Telah Terkirim!*')
                    break
				
				case 'pbucin':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
    			if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				patrick.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
		
         	case 'ping':
             case 'speed':
          	if (!isRegistered) return reply(ind.noregis())
		      if (isBanned) return reply(ind.baned())
           	await patrick.sendMessage(from, `Ping!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
		       break
                    case 'patrickgroup':
					case 'patrickgrup':
					case 'gruppatrick':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					patrick.sendMessage(from, `*Patrick Group*\n\n*Group Patrick Bot Official* : \nLink : *${patrickgrupp}*\n\n        ▌│█║▌║▌║║▌║▌║█│▌\n        ▌│█║▌║▌║║▌║▌║█│▌\n   ────「 *Patrick Bot シ︎* 」────`, text, { quoted: mek })
					break 
		case 'quotesislami':
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply(ind.baned())
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					patrick.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply(ind.baned())
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					patrick.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await limitAdd(sender)
					break	
		case 'quotesmotivasi':
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply(ind.baned())
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					patrick.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*\n\n'+ cin })
					await limitAdd(sender)
					break
                case 'level':
		case 'level':
                if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.banon())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
				break 
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = 'Top UserPatrickBot Level Terbesar\\n'
                let leaderboarduang = 'Top UserPatrickBot UB Terbanyak\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*${nom}* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n > *XP* : ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n > *Ub* : _Ub${uang[i].uang}_\n > *Limit* : ${initialLimit - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					patrick.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                
           
		

		
                
                case 'join':
                           if (!q) return reply('Masukan link group')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return reply('pastikan link sudah benar!')
                           if ( checkATMuser(sender) <= uang4) return reply(`Pastikan Ub Kamu Tercukupi\nHarga: Ub.${uang4}`)
				           if ( checkATMuser(sender) >= uang4 ) {
                           var response = await patrick.acceptInvite(codeInvite);
                           console.log(response);
                           reply('```Otw Gan```')
                           confirmATM(sender, uang4)
                           }
                           break

                case 'checkkey':
		        case 'checkpremiumkey':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isGroup) return reply(ind.groupo())
					reply(`*Key premium saat ini adalah ${keyprem}`)
					break

                case 'banlist':
                case 'listban':
				if (!isRegistered) return reply(ind.noregis()) 
				const benn = JSON.parse(fs.readFileSync('./database/json/banned.json'))
				teks = '*==[ List Ban ]==*\n'
				for (let benn of ban){
					teks += `┣➢ @${benn.replace('@s.whatsapp.net','')}\n`
				}
				teks += `𝗧𝗼𝘁𝗮𝗹 : ${ban.length}`
				patrick.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
                break

                case 'premlist':
	            case 'listprem':
	                if (!isRegistered) return reply( ind.noregis())
	                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	                let nomorList = 0
	                const deret = getAllPremiumUser()
	                const arrayPremi = []
	                for (let i = 0; i < deret.length; i++) {
	                    const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	                    arrayPremi.push(getAllPremiumUser()[i])
	                    nomorList++
	                    listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
	                }
	                await reply(listPremi)
	            break

			
			
				
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await patrick.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('kirim foto dengan caption ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
					
				
                
				case 'tts':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return patrick.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return patrick.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara saya kah:v?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('lah teks nya kepanjangan bambang😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							patrick.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
			
				
                 case 'linkgc':
                 case 'linkgrup':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await patrick.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    patrick.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += ` > @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				
			   	
//==========================================BATES NGAB==========================================\\
//=============NO GROUP==============\\
		case 'mutual':
                if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            	break
		case 'next':
                if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            	break

				
                    case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await patrick.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							patrick.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Iyach')
					}
					await limitAdd(sender)
					break

//==========================================BATES NGAB==========================================\\
//=============AKSESIBILITAS MENU==============\\
                case 'nobadword':
                if (!isGroup) return reply(ind.groupo)
                if (!isGroupAdmins) return reply(ind.admin)
                if (args.length < 1) return reply(ind.acces())
                if (args[0] === 'on') {
                if (isBadWord) return reply('Fitur BadWord sudah aktif sebelum nya')
                badword.push(from)
                fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Enable!`)
              	} else if (args[0] === 'off') {
                badword.splice(from, 1)
                fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                reply(`Fitur Badword Disable`)
                } else {
                reply(ind.acces())
                }
                break
               case 'antispamsticker':
               case 'antisticker':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(ind.acces())
                if (args[0] === 'on') {
                if (!isAntiSticker) return reply('Udah On')
                antisticker.push(from)
                fs.writeFileSync('./database/json/badword.json', JSON.stringify(antisticker))
                reply(`Fitur Anti Spam Sticker Enable!\nDilarang Kirim 5 Sticker!`)
              	} else if (args[0] === 'off') {
              	if (isAntiSticker) return reply('Belom on')
                antisticker.splice(from, 1)
                fs.writeFileSync('./database/json/antisticker.json', JSON.stringify(antisticker))
                reply(`Fitur Badword Disable`)
                } else {
                reply(ind.acces())
                }
                break
				case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(ind.acces())
					if (args[0] === 'on' ) {
						if (isSimi) return reply('SUDAH AKTIF !!!')
						samih.push(from)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENGAKTIFKAN FITUR SIMI DI GRUB INI')
					    } else 
                        if (args[0] === 'off' ) {
                        if (!isSimi) return reply('Beloolmmm AKTIF !!!')
						samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENONAKTIFKAN FITUR SIMI DI GRUB INI')
				        } else {
						reply(ind.acces())
					    }
					    break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(ind.acces())
					if (args[0] === 'on') {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Mengaktifkan NSFW di grub ini')
					    } else if (args[0] === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Menonaktifkan NSFW di grub ini')
					    } else {
						reply(ind.acces())
					    }
					    break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(ind.acces())
                if (args[0] === 'on') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                      _leveling.push(from)
                     fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                     } else if (args[0] === 'off') {
                     _leveling.splice(from, 1)
                     fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                     } else {
                     reply(ind.acces())
                     }
					 break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(ind.acces())
					if (args[0] === 'on') {
						if (isWelcome) return reply('*SUDAH AKTIF* !!!')
						welcome.push(from)
						fs.writeFileSync('./database/json/welcome.json', JSON.stringify(welcome))
						reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
					    } else if (args[0] === 'off') {
						welcome.splice(from, 1)
						fs.writeFileSync('./database/json/welcome.json', JSON.stringify(welcome))
						reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
				        } else {
						reply(ind.acces())
				        }
					    break
                       case 'antidelete':
				if (!isGroup) return reply(ind.groupo)
				if (!isOwner) return reply(ind.ownerb)
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return patrick.sendMessage(from, `Penggunaan fitur antidelete :\n\n${prefix}antidelete [aktif/mati] (Untuk grup)\n${prefix}antidelete [ctaktif/ctmati] (untuk semua kontak)\n${prefix}antidelete banct 628558xxxxxxx (banlist kontak)`, MessageType.text, {quoted: fkontak})
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return patrick.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text, {quoted: fkontak})
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						patrick.sendMessage(from, `Succes Enable Antidelete Grup!`, MessageType.text, {quoted: fkontak})
					} else if (!isGroup) {
						patrick.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctaktif`, MessageType.text, {quoted: fkontak})
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return patrick.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text, {quoted: fkontak})
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						patrick.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text, {quoted: fkontak})
					} else if (isGroup) {
						patrick.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete aktif`, MessageType.text, {quoted: fkontak})
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return patrick.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text, {quoted: fkontak})
					if (argz.length === 2 || argz[2].startsWith('0')) return patrick.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text, {quoted: fkontak})
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					patrick.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text, {quoted: fkontak})
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						patrick.sendMessage(from, `Succes disable Antidelete Grup!`, MessageType.text, {quoted: fkontak})
					} else if (!isGroup) {
						patrick.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctmati`, MessageType.text, {quoted: fkontak})
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						patrick.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text, {quoted: fkontak})
					} else if (isGroup) {
						patrick.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete mati`, MessageType.text, {quoted: fkontak})
					}
				}
				break
//==========================================BATES NGAB==========================================\\
//=============DOWNLOAD MENU==============\\
               case 'downloadmenu':
					const downloadmenu = `  *Sertifikat Menu*
${a}▫️ ${prefix}play${a}
${a}▫️ ${prefix}ytmp3${a}
${a}▫️ ${prefix}ytmp4${a}
${a}▫️ ${prefix}tiktokdownload${a}
${a}▫️ ${prefix}igvideo${a}
${a}▫️ ${prefix}igphoto${a}
          
       ~ PatrickBot 2021`
					await patrickhay(downloadmenu, MessageType.text, tescuk, `${ucapanFakereply}`)
					break
					
					case 'play':
					if (!q) return reply(`Yang mau di download apaan?\nContoh : ${prefix}play DJ TUMANEDANG`)
					if (isBanned) return reply(ind.baned)
					if (!isRegistered) return reply(ind.noregis)
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					fakestatus('Lagu Sedang Dicari...')
					anu = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/ytplaymp3?query=${q}&apikey=${KeyDappa}`)
					infomp3 = `*「❗」Lagu Ditemukan*\n> Judul : ${anu.title}\n> Views : ${anu.views}\n> Channel : ${anu.channel}\n\nTunggu!, Sedang Proses Download`
					pla = await getBuffer(anu.thumb)
					play = await getBuffer(anu.url)
					patrick.sendMessage(from, pla, image, { quoted: mek, caption: infomp3 })
					patrick.sendMessage(from, play, audio, { mimetype: 'audio/mp4', quoted: mek })
					break

                   case 'ytmp3':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply(`linknya mana cuy?\ncontoh : ${prefix + command} https://youtu.be/b0md2fEIFpg`)
                reply(ind.wait())
                urlnye = args[0]
                davva = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/ytmp3?url=${urlnye}&apikey=${KeyDappa}`)
                gmteng = davva.result
                hehe = `Judul : ${gmteng.title}\nChannel : ${gmteng.channel}\nPublished : ${gmteng.published}\nViews : ${gmteng.views}`
                tamnel = await getBuffer(gmteng.thumb)
                patrick.sendMessage(from, tamnel, image, {quoted: freply, caption: hehe})
                aumdeo = await getBuffer(gmteng.url)
                patrick.sendMessage(from, aumdeo, audio, {mimetype: 'audio/mp4', filename: `${gmteng.title}.mp4`, quoted: freply})
                await limitAdd(sender)
                break

                    case 'ytmp4':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply(`linknya mana cuy?\ncontoh : ${prefix + command} https://youtu.be/b0md2fEIFpg`)
                reply(ind.wait())
                urlnye = args[0]
                davva = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/ytmp4?url=${urlnye}&apikey=${KeyDappa}`)
                gmteng = davva.result
                hehe = `Judul : ${gmteng.title}\nChannel : ${gmteng.channel}\nPublished : ${gmteng.published}\nViews : ${gmteng.views}`
                tamnel = await getBuffer(gmteng.thumb)
                patrick.sendMessage(from, tamnel, image, {quoted: freply, caption: hehe})
                pimdeo = await getBuffer(gmteng.url)
                patrick.sendMessage(from, pimdeo, video, {mimetype: 'video/mp4', filename: `${gmteng.title}.mp4`, quoted: freply})
                await limitAdd(sender)
                break

                case 'tiktokdownload':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://vm.tiktok.com/ZSJkHUCwK/`)
                reply(ind.wait())
                link = args.join(' ')
                dppa = await fetchJson(`https://dapuhy-api.herokuapp.com/api/socialmedia/tiktokdownload?url=${link}&apikey=${KeyDappa}`)
                wm = await getBuffer(dppa.with_watermark)
                nowm = await getBuffer(dppa.no_watermark)
                patrick.sendMessage(from, wm, video, {quoted: freply, caption: 'nih yang ada watermark'})
                patrick.sendMessage(from, nowm, video, {quoted: freply, caption: 'nih yang no watermark'})
                await limitAdd(sender)
                break

                case 'igvideo':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://www.instagram.com/p/CNzcf8egt27/?igshid=1hbl53id19nqv`)
                reply(ind.wait())
                link = args[0]
                resultnya = await fetchJson(`https://leyscoders-api.herokuapp.com/api/instagram/video?url=${link}&apikey=${KeyLeys}`)
                buffer = await getBuffer(resultnya.result)
                patrick.sendMessage(from, buffer, MessageType.video, {quoted: freply})
                await limitAdd(sender)
                break

                case 'igphoto':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://www.instagram.com/p/CNzQL4cHm4n/?igshid=19n977531z5nz`)
                reply(ind.wait())
                link = args[0]
                resultnya = await fetchJson(`https://leyscoders-api.herokuapp.com/api/instagram/photo?url=${link}&apikey=${KeyLeys}`)
                buffer = await getBuffer(resultnya.result)
                patrick.sendMessage(from, buffer, MessageType.image, {quoted: freply})
                await limitAdd(sender)
                break
//==========================================BATES NGAB==========================================\\
//SERTIFIKAT MENU
                case 'sertimenu':
					const sertimenu = `  *Sertifikat Menu*
${a}▫️ ${prefix}hekelserti${a}
${a}▫️ ${prefix}fftourserti${a}
${a}▫️ ${prefix}fftourserti2${a}
${a}▫️ ${prefix}fftourserti3${a}
${a}▫️ ${prefix}fftourserti4${a}
${a}▫️ ${prefix}fftourserti5${a}
${a}▫️ ${prefix}mltourserti${a}
${a}▫️ ${prefix}mltourserti2${a}
${a}▫️ ${prefix}mltourserti$3{a}
${a}▫️ ${prefix}mltourserti4${a}
${a}▫️ ${prefix}mltourserti5${a}
${a}▫️ ${prefix}pubgtourserti${a}
${a}▫️ ${prefix}pubgtourserti2${a}
${a}▫️ ${prefix}pubgtourserti3${a}
${a}▫️ ${prefix}pubgtourserti4${a}
${a}▫️ ${prefix}pubgtourserti5${a}
          
       ~ PatrickBot 2021`
					await patrickhay(sertimenu, MessageType.text, tescuk, `${ucapanFakereply}`)
					break
				case 'hekelserti':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}hekel ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'fftourserti':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}fftourserti ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'fftourserti2':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}fftourserti2 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'fftourserti3':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}fftourserti3 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'fftourserti4':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}fftourserti4 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'fftourserti5':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}fftourserti5 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'mltourserti':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}mltourserti ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'mltourserti2':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}mltourserti2 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'mltourserti3':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}mltourserti3 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'mltourserti4':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}mltourserti4 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'mltourserti5':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}mltourserti5 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'pubgtourserti':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}pubgtourserti ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'pubgtourserti2':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}pubgtourserti2 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'pubgtourserti3':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}pubgtourserti3 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'pubgtourserti4':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}pubgtourserti4 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break

				case 'pubgtourserti5':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`text mana broh?\ncontoh ${prefix}pubgtourserti5 ${pushname}`)
				reply(ind.wait())
				ct = args.join(' ')
				dapuhy = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				patrick.sendMessage(from, dapuhy, image, {quoted: freply})
				await limitAdd(sender)
				break



//==========================================BATES NGAB==========================================\\
//=============OTHER MENU==============\\
				case 'othermenu':
					const othermenu = `  *Other Menu*
${a}▫️ ${prefix}sticker${a} 
${a}▫️ ${prefix}tagstiker${a} 
${a}▫️ ${prefix}swm${a} 
${a}▫️ ${prefix}toimg${a}  
${a}▫️ ${prefix}ssweb${a}

*▪️ Tools Menu*
${a}▫️ ${prefix}tomp3${a} 
${a}▫️ ${prefix}bass${a}  
${a}▫️ ${prefix}tupai${a}
${a}▫️ ${prefix}slowmo${a} 
${a}▫️ ${prefix}gemok${a}

*▪️ Cloud Menu*
${a}▫️ ${prefix}addimage${a} 
${a}▫️ ${prefix}addvn${a} 
${a}▫️ ${prefix}addvideo${a} 
${a}▫️ ${prefix}addstiker${a}  
${a}▫️ ${prefix}getstiker${a}
${a}▫️ ${prefix}getvn${a} 
${a}▫️ ${prefix}getimage${a} 
${a}▫️ ${prefix}getvideo${a}
${a}▫️ ${prefix}listvideo${a} 
${a}▫️ ${prefix}listvn${a} 
${a}▫️ ${prefix}liststiker${a}
${a}▫️ ${prefix}listimage${a}
          
       ~ PatrickBot 2021`
					await patrickhay(othermenu, MessageType.text, tescuk, `${ucapanFakereply}`)
					break

                case 'stiker': 
				case 'sticker':
				case 's':
				    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await patrick.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							    })
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							    })
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								patrick.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							    })
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await patrick.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							     })
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							    })
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								patrick.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
						        })
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						        } else {
						     reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
				             }
					        break
                case 'tagsticker':
                    if (!isOwner || !isAdmin) return reply("Command only for owner bot")
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await patrick.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await patrick.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                             })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                            }
                        ini_buffer = fs.readFileSync(filePath)
                        patrick.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                        } else {
                        reply(`Tag sticker yang sudah dikirim`)
                        }
                       break
               case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
		        if (isBanned) return reply(ind.baned())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await patrick.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						patrick.sendMessage(from, buffer, image, {quoted: mek, caption: 'tuh dh jadi '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
                case 'swm':
		        case 'stickerwm':
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (type === 'imageMessage' || isQuotedImage){
                    var kls = body.slice(5)
                    var pack = kls.split('|')[0]
                    var author = kls.split('|')[1]
                    const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    const dlfile = await patrick.downloadMediaMessage(getbuff)
                    reply(ind.wait())
                    const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
                    var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
                    var imageBuffer = new Buffer.from(mantap, 'base64');
                    patrick.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: freply})
                    } else {
                    reply('Format Salah!')
                    }
                    await limitAdd(sender)
                    break

                    case 'tomp3':
                    if (!isRegistered) return reply(ind.noregis())
		            if (isBanned) return reply(ind.baned())
		            if (isLimit(sender)) return reply(ind.limitend(pushname))
                	patrick.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await patrick.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						bufferlkj = fs.readFileSync(ran)
						patrick.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					    })
					    await limitAdd(sender) 
					    break 
				case 'slowmo':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await patrick.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				patrick.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
				case 'tupai':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await patrick.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						patrick.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemok':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await patrick.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						patrick.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					    })
				        break
				case 'bass':                 
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await patrick.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						patrick.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					    })
				        break
                case 'getsticker':
				case 'gets':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					namastc = body.slice(12)
					result = fs.readFileSync(`./storage/sticker/${namastc}.webp`)
					patrick.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				case 'liststicker':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					patrick.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
				case 'addstiker':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					if (!isQuotedSticker) return reply('Reply Stikernya!!')
					svst = body.slice(12)
					if (!svst) return reply('Kasih Nama Stikernya!!')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await patrick.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./storage/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./storage/stik.json`, JSON.stringify(setiker))
					patrick.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
				case 'addvn':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					if (!isQuotedAudio) return reply('Reply VNnya!!')
					svst = body.slice(7)
					if (!svst) return reply('Kasih Nama VNnya!?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await patrick.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./storage/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./storage/audio.json', JSON.stringify(audionye))
					patrick.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
				case 'getvn':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./storage/audio/${namastc}.mp3`)
					patrick.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listvn':
				case 'vnlist':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					patrick.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					if (!isQuotedImage) return reply('Reply Imagenya!')
					svst = body.slice(10)
					if (!svst) return reply('Kasih Nama Imagenya!')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await patrick.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./storage/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./storage/image.json', JSON.stringify(imagenye))
					patrick.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
				case 'getimage':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./storage/image/${namastc}.jpeg`)
					patrick.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					patrick.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					if (!isQuotedVideo) return reply('Reply Videonya!!')
					svst = body.slice(10)
					if (!svst) return reply('Kasih Nama Videonya!!')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await patrick.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./storage/video/${svst}.mp4`, delb)
					fs.writeFileSync('./storage/video.json', JSON.stringify(videonye))
					patrick.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./storage/video/${namastc}.mp4`)
					patrick.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
	            if (isBanned) return reply(ind.baned())
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					patrick.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break

				default:
        if (budy.includes(`cekprefix`)) {
                  reply(`*PatrickBot menggunakan Prefix :「 All Prefix 」`)
                  }

           if (budy.includes(`cekonline`)) {
                  reply(`*PatrickBot Online ✔️`)
                  }
			if (body.startsWith(`${prefix}${command}`)) {
                  reply(`*Maaf ${pushname}*, Command *${prefix}${command}* Tidak Ada Di Dalam *${prefix}menu Patrick Bot*`)
			  }
			
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
					} else {
						console.log(color('[ PatrickBot ]','yellow'), ('Command Tidak Ditemukan!!','red'), color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
