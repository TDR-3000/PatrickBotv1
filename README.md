<div align="center">
<img src="https://i.ibb.co/bB3nV9R/logo.jpg" alt="PatrickBot" width="400" />

# PatrickBotv1

> PatrickBot Adalah Bot Whatsapp

<p align="center">
  <a href="https://github.com/PatrickStar720"><img title="Author" src="https://img.shields.io/badge/Author-PatrickStar720-darkred.svg?style=for-the-badge&logo=github" /></a>
</p>

<p align="center">
  <a href="https://github.com/IndonesianDev/whatsapp-bot#Requirements">Persyaratan</a> •
  <a href="https://github.com/IndonesianDev/whatsapp-bot#installation">Cara Penginstalan</a> •
  <a href="https://github.com/IndonesianDev/whatsapp-bot#features">Fiturnya</a> •
  <a href="https://github.com/IndonesianDev/whatsapp-bot#thanks-to">Terimakasih Kepada</a> •
  <a href="https://github.com/IndonesianDev/whatsapp-bott#license">lisensi</a>
</p>
  
<h4 align="center">
<a href=>Cara Install</a>
</h4>
</div>

# installation
## 📝 Cloning this repo
```bash
> git clone https://github.com/IndonesianDev/whatsapp-bot
> cd whatsapp-bot
```

## ✍️ Edit filenya
Edit value yang diperlukan di `settings/setting.json`.
```json
{
    "limitCount": 10,
    "ownerNumber": "",
    "memberLimit": 10,
    "groupLimit": 50,
    "medialimitCount": "5",
    "prefix": "/",
    "vhtearkey": "Your Apikey In Here",
    "apikeyz": "Your Apikey In Here",
    "lolhuman": "Your Apikey In Here",
    "apizeks": "Your Apikey In Here"
}

```

`ownerBot`: your WhatsApp number.  

`prefix`: bot's prefix.  

`vhtearkey`: VHTear API token. Anda bisa mendapatkannya https://api.vhtear.com/ dengan membeli kunci API Nya dan harga 25k Perbulan.

`apikeyz`: Hujan Api token. Anda Bisa Mendapatkannya https://hujanapi.xyz silahkan daftar untuk mendapatkan apikey ,  limit 100/day.

`lolhuman`: Lolhuman token. Anda bisa Mendapatkannya Di https://lolhuman.herokuapp.com/ silahkan daftar untuk mendapatkan apikey

`apizeks` : Api vinz token. Anda bisa mendapatkanya di https://zeks.xyz/ silahkan daftar untuk mendapatkan apikey 

Untuk Mendapatkan Apikey nya , daftar akun terlebih dahulu di website tersebut

## 🔍 Menginstal dependensi
```bash
> npm install
```

## 🆗 Menjalankan bot
Regular node:
```bash
> npm start
```

PM2:
```bash
> pm2 start index.js
> pm2 monit
```

PM2 with cron job (restart after 5 hours):
```bash
> pm2 start index.js --cron "* */5 * * *"
> pm2 monit
```

Setelah itu pindai kode QR menggunakan WhatsApp Anda di ponsel Anda!

# Features


|     Sticker Maker     | Availability |
| :-------------------: | :----------: |
| Send/reply image      |      ✔️      |
| Send/reply GIF        |      ✔️      |
| Send/reply MP4        |      ✔️      |
| Text to sticker       |      ✔️      |
| Text to sticker GIF   |      ✔️      |
| Take Sticker          |      ✔️      |
| Add  Sticker          |      ✔️      |
| Get  Sticker          |      ✔️      |
| Del  Sticker          |      ✔️      |
| List Sticker          |      ✔️      |
| Sticker to image      |      ✔️      |

|     Money Feature     | Availability |
| :-------------------: | :----------: |
| Money Check           |      ✔️      |
| Buy Limit             |      ✔️      |
| Transfer Money        |     ✔️      |

|      Downloader     | Availability |
| :-----------------: | :----------: |
| Facebook video      |      ✔️      |
| YouTube audio/video |      ✔️      |
| TikTok              |      ✔️      |
| TikTok NoWm         |      ✔️      |
| Instagram video     |      ✔️      |
| Instagram story     |      ✔️      |
| Layarkaca21 film    |      ✔️      |

|        Other        | Availability |
| :-----------------: | :----------: |
| Say                 |      ✔️      |
| Lyric finder        |      ✔️      |
| Shortlink maker     |      ✔️      |
| Wikipedia           |      ✔️      |
| KBBI search         |      ✔️      |
| IG stalk            |      ✔️      |
| SpekHp              |      ✔️      |
| Food receipt finder |      ✔️      |
| TTS                 |      ✔️      |
| AFK                 |      ✔️      |
| Distance            |      ✔️      |
| Find sticker        |      ✔️      |
| List surah          |      ✔️      |
| Math                |      ✔️      |
| Surah               |      ✔️      |
| Random contact      |      ✔️      |
| Play YouTube        |      ✔️      |
| Tafsir Al-Qur'an    |      ✔️      |
| LK21                |      ✔️      |
| Reminder            |      ✔️      |
| Tebak Gambar        |      ✔️      |
| Truth Of Dare       |      ✔️      |
| Next Kuiz           |      ✔️      |
| Stop Kuiz           |      ✔️      |
| Kuis Mtk            |      ✔️      |
| Stop Mtk            |      ✔️      |
| Point              |      ✔️      |
| Image to URL        |      ✔️      |
| Jadwal sholat       |      ✔️      |
| To Mp3              |      ✔️      |
| Bass                |      ✔️      |
| Line sticker latest |      ✔️      |
| Quiziz Hack         |      ✔️      |
| Image To Text       |      ✔️      |
| Cek ongkir          |      ✔️      |

|          Fun          | Availability |
| :-------------------: | :----------: |
| Send                  |      ✔️      |
| Mutualan              |      ✔️      |
| Harta tahta maker     |      ✔️      |
| Zodiac                |      ✔️      |
| Write on paper        |      ✔️      |
| Missing person maker  |      ✔️      |
| Valentine frame maker |      ✔️      |
| Glitch text maker     |      ✔️      |
| SimSimi               |      ✔️      |
| Blackpink logo maker  |      ✔️      |
| Pornhub logo maker    |      ✔️      |
| Galaxy text maker     |      ✔️      |
| TikTok asupan         |      ✔️      |
| PH comment maker      |      ✔️      |
| Triggered effect      |      ✔️      |
| Deep fry effect       |      ✔️      |
| Kiss someone          |      ✔️      |
| 3D Text               |      ✔️      |
| Freefire logo         |      ✔️      |
| Freefire banner       |      ✔️      |

|      WIBU AREA     | Availability |
| :----------------: | :----------: |
| Random neko girl   |      ✔️      |
| Random wallpaper   |      ✔️      |
| Kusonime scrapper  |      ✔️      |
| Komiku scrapper    |      ✔️      |
| Anime tracer       |      ✔️      |
| Random waifu       |      ✔️      |
| Loli Video         |      ✔️      |

|        Bot       | Availability |
| :--------------: | :----------: |
| Bot usage status |      ✔️      |
| Blocked list     |      ✔️      |
| Ping             |      ✔️      |
| Delete message   |      ✔️      |
| Report bug       |      ✔️      |

|        Owner       | Availability |
| :----------------: | :----------: |
| Broadcast          |      ✔️      |
| Clear all messages |      ✔️      |
| Leave all groups   |      ✔️      |
| Ban                |      ✔️      |
| Add premium user   |      ✔️      |
| Add Sewa group     |      ✔️      |
| Halal & Haram      |      ✔️      |
| Setpictmenu        |      ✔️      |


|    Moderation    | Availability |
| :--------------: | :----------: |
| Add              |      ✔️      |
| Kick             |      ✔️      |
| Promote          |      ✔️      |
| Demote           |      ✔️      |
| Leave bot        |      ✔️      |
| Tag All          |      ✔️      |
| Set Icon Grup    |      ✔️      |
| Anti-group link  |      ✔️      |
| Toogle welcome   |      ✔️      |
| Auto-sticker     |      ✔️      |
| Mute group       |      ✔️      |

|        18+         | Availability |
| :----------------: | :----------: |
| Fetish             |      ✔️      |
| Waifu NSFW         |      ✔️      |
| Waifu 18+          |      ✔️      |
| Xvideos            |      ✔️      |
| Xvidl              |      ✔️      |
| Xnxx               |      ✔️      |
| Xnxxdl             |      ✔️      |
| nHentai downloader |      ✔️      |


# Thanks to
* [`open-wa/wa-automate-nodejs`](https://github.com/open-wa/wa-automate-nodejs)
* [`AlvioAdjiJanuar`](https://github.com/AlvioAdjiJanuar)
* [`SlavyanDesu`](https://github.com/SlavyanDesu/BocchiBot)
* [`VideFrelan`](https://github.com/VideFrelan)
* [`dxxoo`](https://github.com/dxxoo)
