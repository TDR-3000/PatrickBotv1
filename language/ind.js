const a = '```'

exports.wait = () => {
	return`*❕ Tunggu | PatrickBot sedang memproses*`
}

exports.succes = () => {
	return`*Berhasil!*`
}

exports.lvlon = () => {
	return`*Mengaktifkan Mode Leveling di dalam group ini*`
}

exports.lvloff = () => {
	return`*Mematikan Mode Leveling di dalam group ini*`
}

exports.lvlnul = () => {
	return`*Level anda di database masih kosong*`
}

exports.baned = () => {
	return`*Maaf, anda telah dibanned karena melanggar aturan\nketik _.report pesan_ jika ada masalah*`
}

exports.lvlnoon = () => {
	return`*Maaf, Mode Level tidak diaktifkan di dalam group ini\nKetik #leveling 1 untuk mengaktifkan*`
}

exports.noregis = () => {
	return`Halo, anda belum terdaftar di dalam PatrickBot
Silahkan ketik .login nama|umur untuk mendaftar!`
}

exports.rediregis = () => {
	return`*Anda sudah terdaftar di database PatrickBot*`
}

exports.stikga = () => {
	return`*Gagal!, Coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*Maaf, fitur ini hanya untuk pengguna Premium*`
}

exports.ownerb = () => {
	return`*Maaf, fitur ini hanya untuk owner PatrickBot*`
}

exports.ownerg = () => {
	return`*Maaf, fitur ini hanya tersedia di dalam Group*`
}

exports.admin = () => {
	return`*Maaf, fitur ini hanya untuk Admin Group*`
}

exports.badmin = () => {
	return`*Maaf, fitur ini bekerja ketika PatrickBot menjadi Admin Group*`
}

exports.nsfwoff = () => {
	return`*Maaf, Mode NSFW tidak diaktifkan di dalam group ini\nKetik #nsfw 1 untuk mengaktifkan*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*Maaf, Mungkin Format Salah | Text kosong*`
}

exports.clears = () => {
	return`*Menghapus seluruh chat di PatrickBot Selesai*`
}

exports.pc = () => {
	return`*「 Account 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*Terimakasih telah mendaftar di PatrickBot.\nSilahkan ketik .rules untuk melihat Aturan PatrickBot\nKetik .menu untuk melihat Menu PatrickBot`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

//Owner Menu
exports.ownermenu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangkua, process, dayss, hourss, minutess, secondss, dasss, hosss, minsss, secoss, dino, jame, menite, deteki, time, premi) => {
	return`
☐ *About User*
>  ${a}Nama : ${pushname}${a}
>  ${a}Ub : Ub${uangku}${a}
>  ${a}User : ${premi}${a}
>  ${a}XP : ${getLevelingXp(sender)}${a}
>  ${a}Level : ${getLevelingLevel(sender)}${a}
>  ${a}User register : ${_registered.length}${a}
    ───────────────
>  ${a}Menuju Idul Fitri${a} : ${dayss} Hari ${hourss} Jam                            
>  ${a}Menuju Idul Adha${a} : ${dasss} Hari ${hosss} Jam    
>  ${a}Menuju TahunBaru${a} : ${dino} Hari ${jame} Jam 
   ───────────────
   ${a}Waktu | Tanggal${a} : ${time}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ 
❏ *Owner Menu*
 ☐ ${a}${prefix}addbadword${a} v
 ☐ ${a}${prefix}delbadword${a} v
 ☐ ${a}${prefix}nobadword${a} v
 ☐ ${a}${prefix}receive${a} v
 ☐ ${a}${prefix}setppbot${a} <foto>v
 ☐ ${a}${prefix}bc${a} <teks>v
 ☐ ${a}${prefix}bcgc${a} <teks>v
 ☐ ${a}${prefix}kickall${a} v
 ☐ ${a}${prefix}setreply${a} <teks> v
 ☐ ${a}${prefix}event${a} 1 | 0 v
 ☐ ${a}${prefix}antidelete${a}  v
 ☐ ${a}${prefix}hidetag${a} 
 ☐ ${a}${prefix}setmemberlimit${a} <limit> v
 ☐ ${a}${prefix}setlimit${a} <limit> v
 ☐ ${a}${prefix}setkeyprem${a} <key>
 ☐ ${a}${prefix}addprem${a} 6281xxx v
 ☐ ${a}${prefix}unprem${a}6281xxxx v
 ☐ ${a}${prefix}addadminbot${a} 6281xxx v
 ☐ ${a}${prefix}unadminbot${a} 6281xxx v
 ☐ ${a}${prefix}resetsay${a} v
 ☐ ${a}${prefix}totaluser${a} v
 ☐ ${a}${prefix}ban${a} 6281xxxxx v
 ☐ ${a}${prefix}unban${a} 6281xxxx v
 ☐ ${a}${prefix}setprefix${a} <simbol> v
 ☐ ${a}${prefix}setreply${a} <teks> v
 ☐ ${a}${prefix}clearall${a}v
 ☐ ${a}${prefix}block${a} 6281xxxxxv
 ☐ ${a}${prefix}unblock${a} 6281xxxxv
 ☐ ${a}${prefix}leave${a} v
 ☐ ${a}${prefix}clone${a} @tag v
 ☐ ${a}${prefix}setppbot${a} <foto>v
───────────────
`
}


exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, process, dayss, hourss, minutess, secondss, dasss, hosss, minsss, secoss, dino, jame, menite, deteki, time, premi) => { 
	return `
☐ *About User*
>  Nama : ${pushname}
>  Uang : Ub ${uangku}
>  User : ${premi}${a}
>  XP : ${getLevelingXp(sender)}/${reqXp}${a}
>  Level : ${getLevelingLevel(sender)}${a}
>  ${a}User register : ${_registered.length}${a}
    ───────────────
>  ${a}Menuju Idul Fitri${a} : ${dayss} Hari ${hourss} Jam
>  ${a}Menuju TahunBaru${a} : ${dino} Hari ${jame} Jam 
   ───────────────
   ${a}Waktu | Tanggal${a} : ${time}
   
   ☐ *_About PatrickBot_*
>  ${prefix}ownermenu
>  ${prefix}marketmenu
>  ${prefix}makermenu
>  ${prefix}vipmenu
>  ${prefix}fontmenu
>  ${prefix}encryptmenu
>  ${prefix}funmenu
>  ${prefix}groupmenu
>  ${prefix}islammenu
>  ${prefix}mediamenu
>  ${prefix}infomenu
>  ${prefix}cloudstorage
>  ${prefix}fullmenu
───────────────
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ 
☐ *_About PatrickBot_*
>  ${prefix}report
>  ${prefix}info
>  ${prefix}donasi
>  ${prefix}owner
>  ${prefix}limit
>  ${prefix}bahasa
>  ${prefix}blocklist
>  ${prefix}banlist
>  ${prefix}translate
>  ${prefix}listadminbot
>  ${prefix}listprem
>  ${prefix}listban
>  ${prefix}translate
───────────────
☐ *_Market PatrickBot_*
>  *${prefix}spamchatwa* 17.500 Ub
>  *${prefix}spin* 10.000 Ub
>  *${prefix}fftourserti* 7.000 Ub
>  *${prefix}pubgtourserti* 7.000 Ub
>  *${prefix}mltourserti* 6.500 Ub
>  *${prefix}cariuang* 750 Ub
>  *${prefix}boomchat* 32.500 Ub
>  *${prefix}nulis* 9.000 Ub
>  *${prefix}nulispolio* 9.000 Ub
>  *${prefix}nulis1* 32.500 Ub
>  *${prefix}nulis2* 9.000 Ub
>  *${prefix}nulisbkiri* 9.000 Ub
> ︎ *${prefix}join* LinkGroup 5.000 Ub
───────────────
☐ *_Aksesibilitas_*
>  *${prefix}nobadword* Enable | Disable
>  *${prefix}leveling* Enable | Disable
>  *${prefix}nsfw* 1 | 0
>  *${prefix}simih* 1 | 0
>  *${prefix}welcome* 1 | 0 
>  *${prefix}antidelete*
>  *${prefix}antilink* 1 | 0 
───────────────
☐ *All Menu & Update_*
>  *${prefix}animemenu*
> ︎ *${prefix}ownermenu* 
> ︎ *${prefix}nsfwmenu* 
> ︎ *${prefix}covidindo* 
>  *${prefix}covidglobal*
> ︎ *${prefix}infogempa* 
> ︎ *${prefix}nsfwmenu* 
> ︎ *${prefix}covidindo* 
> ︎ *${prefix}reedem* <key>
> ︎ *${prefix}addsay* <teks>
> ︎ *${prefix}saylist*
> ︎ *${prefix}say* 
> ︎ *${prefix}menujuhari* (Fix)
> ︎ *${prefix}afk* <Alasan>
───────────────
☐ *_Maker Menu_*
>  *${prefix}sticker* ( Video, Max 8 Detik)
> ︎ *${prefix}attp* <teks>
> ︎ *${prefix}makequote* <teks>
> ︎ *${prefix}ttp* <teks>
>  *${prefix}toimg* <reply sticker>
>  *${prefix}pubg* <teks1|teks2>
> ︎ *${prefix}phlogo* <teks1|teks2>
>  *${prefix}glitchtext* <teks1|teks2>
>  *${prefix}ocr* 
>  *${prefix}ktpmaker* 
>  *${prefix}jokerlogo*
>  *${prefix}toxic*
>  *${prefix}triggered* 
───────────────
☐ *_Only VIP_*
> ︎ *${prefix}fftourserti2* <teks>
> ︎ *${prefix}fftourserti3* <teks>
> ︎ *${prefix}fftourserti4* <teks>
>  *${prefix}fftourserti5* <teks>
>  *${prefix}pubgtourserti2* <teks>
>  *${prefix}pubgtourserti3* <teks>
>  *${prefix}pubgtourserti4* <teks>
>  *${prefix}pubgtourserti5* <teks>
>  *${prefix}mltourserti2* <teks>
>  *${prefix}mltourserti3* <teks>
>  *${prefix}mltourserti4* <teks>
>  *${prefix}mltourserti5* <teks>
>  *${prefix}hidetag2* 
> ︎ *${prefix}spamcall*
> ︎ *${prefix}spamtext*
───────────────
☐ *_Link Shortcut_*
>  *${prefix}bitly* <link>
>  *${prefix}cuttly* <link>
───────────────
☐ *_Font Menu_*
> ︎ *${prefix}fspongebob*
> ︎ *${prefix}ftank*
>  *${prefix}fhacker*
> ︎ *${prefix}fhacker1*
>  *${prefix}fsarangeo*
> ︎ *${prefix}fimpostor*
>  *${prefix}fsoviet*
> ︎ *${prefix}fhelicopter*
>  *${prefix}fcow*
>  *${prefix}fcess*
>  *${prefix}fitik*
> ︎ *${prefix}fkereta*
> ︎ *${prefix}fcoffe*
───────────────
☐ *_Encrypt Menu_*
> ︎ *${prefix}base64enc*
> ︎ *${prefix}base64dec*
> ︎ *${prefix}base32enc*
>  *${prefix}base32dec*
>  *${prefix}sha1enc*
>  *${prefix}sha256enc*
>  *${prefix}sha512enc*
>  *${prefix}encbinary*
>  *${prefix}decbinary*
───────────────
☐ *_Fun Menu_*
>  *${prefix}mining*
>  *${prefix}hilih* <teks>
>  *${prefix}wiki* <teks>
>  *${prefix}1cak* <teks>
>  *${prefix}playstore* <nama apk>
>  *${prefix}bisakah* <teks>
>  *${prefix}kapankah* <teks>
>  *${prefix}ganteng* 
>  *${prefix}beban* 
>  *${prefix}cantik* 
>  *${prefix}apakah* <teks>
>  *${prefix}seberapagay* @tagmember
>  *${prefix}rate* <teks>
>  *${prefix}truth*
>  *${prefix}dare*
>  *${prefix}hobby*
>  *${prefix}memeindo*
>  *${prefix}cerpen*
>  *${prefix}asupan*
>  *${prefix}fitnah*
>  *${prefix}kalkulator*
>  *${prefix}pasangan*
>  *${prefix}ntahlah*
>  *${prefix}slap*
>  *${prefix}katadoi*
>  *${prefix}katakatadilan*
>  *${prefix}quotes*
>  *${prefix}caklontong*
>  *${prefix}tebakgambar*
>  *${prefix}kbbi* <teks>
>  *${prefix}dadu*
>  *${prefix}artinama*
───────────────
☐ *_Group Menu_*
>  *${prefix}group* buka | tutup
>  *${prefix}groupinfo*
>  *${prefix}add* 62881xxxx
>  *${prefix}kick* @tag
>  *${prefix}hedsot* @tag
>  *${prefix}linkgrup*
>  *${prefix}promote* @tag
>  *${prefix}demote* @tag
>  *${prefix}setname* _teks_
>  *${prefix}setdesc* _teks_
>  *${prefix}tagall* 
>  *${prefix}level*
>  *${prefix}listonline*
>  *${prefix}listadmin*
>  *${prefix}delete*
>  *${prefix}ciumadmin*
───────────────
☐ *_Islam Menu_*
>  *${prefix}quran*
>  *${prefix}quotesislami*
>  *${prefix}listsurah*
───────────────
☐ *_Media Menu_*
>  *${prefix}beritahoax*
>  *${prefix}brainly* <teks>
>  *${prefix}pinterest* <teks>
>  *${prefix}meme*
>  *${prefix}gemok* <nominal>
>  *${prefix}slowmo* <nominal>
>  *${prefix}tupai* <nominal>
>  *${prefix}tomp3* <video>
>  *${prefix}bass* <nominal>
>  *${prefix}tts* <teks>
>  *${prefix}lirik*
>  *${prefix}ssweb*
>  *${prefix}map*
>  *${prefix}stalkig* <username>
>  *${prefix}asupan*
───────────────
☐ *_About User_* 
>  *${prefix}limit*
>  *${prefix}buylimit*
>  *${prefix}dompet*
>  *${prefix}leaderboard*
>  *${prefix}level*
───────────────
☐ *_Cloud Storage_* 
>  *${prefix}addimage* <reply image>
> ︎ *${prefix}addvn* <reply vn>
> ︎ *${prefix}addvideo* <reply video>
> ︎ *${prefix}addstiker*  <reply stiker>
>  *${prefix}getstiker*
> ︎ *${prefix}getvn* 
> ︎ *${prefix}getimage* 
>  *${prefix}getvideo*
> ︎ *${prefix}listvideo* 
> ︎ *${prefix}listvn* 
>  *${prefix}liststiker*
> ︎ *${prefix}listimage* 
───────────────
          ❰ *_ThxTo_*  ❱
   >  *Allah SWT*
   >  *ITSMAZGH* 
   >  *Memans* 
   >  *Yogi PW* 
   >  *Affis Junianto*
   >  *ArugaZ*
   >  *Ramlan ID* 
       >  *Anker* 
       >  *Zitsraa* 
   >  *Miku* 
   >  *All Creator Bot*
┗━━⊱  ⸨ *PatrickBot* ⸩  ⊰━━━ 
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 Selamat ${pushname} 」*
╭─────────────────
│  ◩ *Nama* : ${pushname}
│  ◩ *Nomer* : wa.me/${sender.split("@")[0]}
│  ◩ *Xp* : ${getLevelingXp(sender)}
│  ◩ *Limit* : +3
│  ◩ *Role* :  ${role}
│  ◩ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
╰─────────────────
   *Follow Juga : @ouv.patrick*
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} Limit Hari Ini Habis*\n*Beli Limit Untuk Mendapatkan Limit/ Naik Level*`
}

exports.limitcount = (isPrem, isAdmin, isOwner, limitCounts) => {
	return`
Jumlah Limit anda hari ini adalah *${isPrem || isAdmin || isOwner ? 'Unlimited' : `${limitCounts}`}*
Catatan : Untuk mendapatkan limit ketik _.buylimit nominal_ untuk membeli`
}


exports.acces = () => {
	return`*Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan*`
}

exports.uangkau = (pushname, sender, uangkau, time) => {
	return`
               *Info Saldo*
> *Nama* : ${pushname}
> *RekBot* : ${sender.split("@")[0]}
> *Saldo* : Ub   ${uangkau}

                                        ${time}
  Melayani Dimanapun dan Kapanpun
                *PatrickBot ATM*
`
}

exports.premadd = (pnom) => {
	return`*「 Premium Add 」*

*Name* : ${pnom}
*Expired* : 30 Day\n*Thanks For Order Premium*`
}

exports.dellprem = (hnom) => {
	return`*「 Premium Exp 」*

*Name* : ${hnom}
*Expired* : Now\n*Thanks For Order Premium, Back Soon :D*`
}

exports.premon = (pushname) => {
	return`Maaf *${pushname}* Anda Bukan User Premium | VIP`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}