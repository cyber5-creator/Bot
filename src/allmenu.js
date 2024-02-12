const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}

exports.allmenu =  ( isPremium,thisHit, sender, prefix, pushname) => {

return `

*INFO USER*

🍀 *Nama* : ${pushname}
🍀 *Status* : ${isPremium ? 'Premium':'Free'}
🍀 *Limit* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
🍀 *Limit Game* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}


`}

exports.fitur = (prefix) => {
return``+readmore+`
*Group Menu*
1. .setnamegc ⌕
2. .setdesc ⌕
3. .setppgc ⌕
4. .infogc ⌕
5. .getppgc ⌕
6. .cekmember ⌕
7. .closegroup ⌕
8. .opengroup ⌕
9. .hidetag ⌕
10. .tagall ⌕
11. .promote ⌕
12. .demote ⌕
13. .kick ⌕
14. .add ⌕
15. .resetlinkgc ⌕
16. .linkgc ⌕
17. .ban ⌕
18. .unban ⌕
19. .listgc ⌕
20. .afk ⌕
21. .delete ⌕
22. .profil ⌕
23. .intro ⌕
24. .topbalance ⌕

*Download Menu*
25. .play ⌕
26. .playmp4 ⌕
27. .ytmp3 ⌕
28. .instagram ⌕
29. .ttpoto ⌕
30. .tiktok ⌕
31. .ttaudio ⌕
32. .song ⌕

*Tools Menu*
33. .translate ⌕
34. .kalkulator ⌕
35. .nobg ⌕
36. .pinterest ⌕
37. .gimage ⌕
38. .remini ⌕
39. .jarak ❌
40. .get ⌕
41. .flaming1 - 6 ⌕
42. .wattpad ⌕
43. .playstore ⌕
44. .brainly ⌕

*Primbon Menu* 
45. .artinama ⌕
46. .artimimpi ⌕
47. .kecocokanpasangan ⌕
48. .ramalancinta ⌕
49. .kecocokannama ⌕
50. .jadiannikah ⌕
51. .sifatusaha ⌕
52. .rezeki ⌕
53. .pekerjaan ⌕
54. .nasib ⌕
55. .penyakit ⌕
56. .artitarot ⌕
57. .fengshui ⌕
58. .haribaik ⌕
59. .harisangar ⌕
60. .harisial ⌕
61. .harinaga ⌕
62. .peruntungan ⌕
63. .weton ⌕
64. .karakter ⌕
65. .masasubur ⌕
66. .zodiak ⌕
67. .wangy ⌕

*Sticker Menu*
68. .sticker
69. .smeme
70. .swm
71. .qc
72. .ttp
73. .attp
74. .mukelu
75. .gurastick
76. .lovestick
77. .dogestick
78. .paimon
79. .tele
80. .cry
81. .kill
82. .hug
83. .pat
84. .lick
85. .kiss
86. .bite
87. .yeet
88. .bully
89. .bonk
90. .wink
91. .poke
92. .nom
93. .slap
94. .smile
95. .wave
96. .awoo
97. .blush
98. .smug
99. .glomp
100. .happy
101. .dance
102. .cringe
103. .cuddle
104. .highfive
105. .handhold

*Fun Menu*
106. .bucinserti
107. .pacarsertifikat
108. .tololsertifikat
109. .bagaimanakah
110. .bisakah
111. .apakah
112. .kapankah
113. .cekwatak
114. .cekhobby
115. .cekmenek
116. .cekkontol
117. .cebelapaimutciaku
118. .tiktokghea
119. .tiktokpanrika
120. .tiktokbocil
121. .tiktokkayes
122. .cosplayangel
123. .videogalau
124. .wibuvid
125. .chinese
126. .hijab
127. .indo
128. .japanese
129. .korean
130. .malay
131. .randomgirl
132. .randomboy
133. .thai
134. .vietnamese
135. cecan
136. cogan
137. .hacker
138. .pubg
139. .boneka

*Game Menu*
140. .tebakkata
141. .matematika
142. .tekateki
143. .susunkata
144. .tebakkimia
145. .tebaklirik
146. .tebakgambar
147. .caklontong
148. .family100
149. .tebaklirik
150. .claim
151. .shop
152. .transfer
153. .limit

*Anonymouse Menu*
154. .confes
155. .menfes

*Convert Menu*
156. .kodebahasa
157. .tts
158. .toimg
159. .tovn
160. .tovideo
161. .tomp3
162. .togif
163. .tourl
164. .terbalik
165. .bass
166. .deep
167. .earrape
168. .fast 
169. .nightcore
170. .fat
171. .reverse
172. .robot
173. .smooth
174. .slow
175. .tupai

*Islamic Menu*
176. .kisahnabi
177. .alquran ❌
178. .islamic

*Anime Menu*
179. .randomanime
170. .anime
171. .naotomori
172. .loli
173. .cosplay
174. .husbu
175. .milf
176. .wallml

*Text Pro Menu*
177. .pornhub
178. .glitch
179. .avenger
180. .space
181. .marvelstudio
182. .ninjalogo
183. .lionlogo
184. .wolflogo
185. .steel3d
186. .wallgravity
187. .blackpink
188. .neon
189. .greenneon
190. .advanceglow
191. .futureneon
192. .sandwriting
193. .sandsummer
194. .sandengraved
195. .metaldark
196. .neonlight
197. .holographic
198. .text1917
199. .minion
200. .deluxesilver
201. .newyearcard
202. .bloodfrosted
203. .halloween
204. .jokerlogo
205. .fireworksparkle
206. .natureleaves
207. .bokeh
208. .toxic
209. .strawberry
210. .bok3d
211. .breakwall
212. .icecold
213. .luxury
214. .cloud
215. .summersand
216. .horrorblood
217. .thunder

*Random Menu*
218. .nsfw
219. .walpaper
220. .memeindo
221. .ppcp
222. .pantun
223. .motivasi
224. .katabijak
225. .dilanquote
226. .truth
227. .dare
228. .infocuaca
229. .mountain
230. .programing
231. .technology

*Setting Menu*
232. .setbio
233. .setppbot ❌
234. .setnamebot
235. .clearsesi
236. .delsampah

*Storage Menu* 
237. .addvn
238. .delvn
239. .listvn
240. .addimage
241. .delimage
242. .listimage
243. .delvideo
244. .addvideo
245. .listvideo
246. .addsticker
247. .delsticker
248. .liststicker

*Owner Menu*
249. .getcase
250. .addprem
251. .delprem
252. .public
253. .self
254. .addsewa
255. .listsewa
256. .bcgc
257. .ceksewa
258. .join
259. .joincall 
260. .adderror
261. .delerror
262. .listerror
263. .clearerror
264. .addcmdowner
265. .delcmdowner
266. .listcmdowner
267. .addcmdprem
268. .delcmdprem
269. .listcmdprem
270. .addcmdlimit
271. .delcmdlimit
272. .listcmdlimit
`
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})


