const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();

app.use(cors());

// Array X bawaan dari script asli untuk kalkulasi hash seed
const arrayX = [
    932, 106, 613, 1693, 2914, 1241, 83, 2867, 479, 2749, 1382, 11, 1371, 2379, 728, 551, 1975, 1373, 1746, 635, 1107, 879, 2188, 1122, 1839, 824, 467, 1090, 1830, 692, 2298, 1852, 856, 183, 1308, 1829, 871, 2916, 696, 304, 1180, 2903, 2934, 1695, 1011, 104, 234, 1895, 2588, 585, 1903, 2116, 467, 1417, 2781, 1541, 2834, 2378, 2053, 370, 614, 2592, 2900, 1715, 2559, 876, 2391, 1266, 1388, 2447, 383, 1139, 446, 707, 2205, 395, 812, 878, 1199, 1415, 1480, 1160, 603, 1911, 911, 2560, 835, 1371, 2758, 201, 593, 740, 2267, 59, 2437, 1038, 18, 519, 1814, 1644, 2433, 267, 270, 2573, 2174, 1199, 1497, 1766, 71, 1167, 2350, 2352, 2659, 2034, 926, 811, 1327, 1530, 1333, 547, 2155, 1085, 1903, 1018, 1462, 2035, 2341, 718, 1271, 953, 2016, 604, 350, 2158, 197, 581, 322, 692, 1834, 88, 1069, 2089, 1592, 489, 197, 2182, 1441, 232, 355, 904, 2436, 2621, 2937, 93, 1750, 2483, 1856, 2281, 683, 2962, 1656, 2218, 694, 2409, 2771, 792, 2877, 987, 2916, 2234, 2033, 874, 68, 1581, 2932, 2154, 1766, 2014, 1508, 1287, 548, 1681, 2175, 1385, 544, 2491, 2231, 575, 2015, 2445, 944, 2754, 411, 930, 1871, 2020, 705, 427, 1662, 2624, 1115, 1072, 1701, 1259, 478, 1771, 555, 2523, 2102, 1976, 1742, 1551, 1208, 1679, 1223, 248, 1016, 1813, 697, 2663, 493, 2831, 2779, 2391, 2074, 1600, 2292, 323, 2446, 974, 1079, 2635, 374, 1032, 1703, 843, 1993, 1834, 53, 1781, 77, 21, 319, 1761, 2552, 600, 2427, 1625, 2529, 1331, 1525, 578, 1592, 790, 2949, 2480, 780, 2318, 2261, 904, 1972, 1928, 2761, 2012, 1519, 1832, 927, 2155, 1991, 2836, 657, 1191, 323, 1300, 137, 43, 1549, 269, 2508, 245, 2556, 1823, 1114, 1776, 1762, 1332, 390, 2173, 1960, 2834, 569, 1507, 2705, 1674, 1051, 988, 1437, 1, 2516, 1882, 1527, 1727, 1704, 794, 2608, 2471, 1418, 2759, 1381, 1862, 362, 682, 863, 2496, 2657, 945, 434, 2351, 2909, 2166, 2952, 2709, 2568, 2802, 2055, 948, 2630, 410, 1848, 2035, 1175, 2408, 1409, 812, 1009, 1708, 2533, 692, 2874, 1429, 2914, 2675, 524, 754, 891, 1901, 1834, 1934, 2792, 1560, 2490, 1004, 387, 2471, 2868, 2159, 876, 2373, 1353, 134, 72, 2934, 1863, 2813, 2892, 1515, 2493, 367, 528, 2628, 1242, 2499, 994, 1892, 1403, 2125, 2609, 487, 1348, 2750, 164, 1327, 2758, 2238, 1729, 615, 98, 2873, 474, 1927, 2717, 1096, 1261, 1666, 1565, 2802, 1682, 1612, 947, 747, 1859, 1143, 2817, 347, 151, 816, 582, 2001, 1351, 1278, 1232, 866, 1630, 371, 745, 1269, 1274, 1679, 2917, 2633, 1904, 936, 2162, 9, 631, 238, 1753, 1079, 2234, 766, 1876, 2598, 1388, 1373, 385, 1044, 1664, 800, 1286, 2136, 983, 1437
];

const randomSymbols = ['✔❌❌', '❌✔❌', '❌❌✔', '✔❌✔', '❌✔✔', '❌❌❌'];
const randomCounts = [10, 20, 50, 70, 100];

// Endpoint didefinisikan langsung di level router utama "/" karena Vercel sudah mapping otomatis lewat nama file
app.get('/api/rtp-live', async (req, res) => {
  try {
    const targetUrl = 'https://winslot-88.plaz.shop/rtp/';
    
    const { data } = await axios.get(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    let scrapedGames = [];

    let simulatedPath = '/pragmatic'; 
    let xxx = 0;
    for (let i = 0; i < simulatedPath.length; i++) {
        xxx += simulatedPath.charCodeAt(i);
    }

    const d = new Date();
    const date = d.getUTCDate();
    const day = d.getUTCDay() + 1;
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth() + 1;
    const hour = d.getUTCHours();
    
    const lock3Jam = Math.floor(hour / 3);

    $('.hover-pola, .card, .game-item').each((index, element) => {
      let title = $(element).find('.game-name, h5, .title').text().trim();
      
      if (!title) return;

      let baseSeed = day + year * month * date;
      let powerSeed = Math.pow(baseSeed, lock3Jam);
      
      let currentX = arrayX[index % arrayX.length] + xxx;
      let seedFinal = (powerSeed * currentX) + index; 

      const listStatus = ['Bapuk', 'Normal', 'Sangat Gacor'];
      let penentuStatus = listStatus[seedFinal % listStatus.length];

      let rtp = 50; 
      let status = 'Normal';
      let tag = 'TOP';

      if (penentuStatus === 'Bapuk') {
        rtp = (seedFinal % (40 - 10 + 1)) + 10; 
        status = 'Tidak Disarankan'; 
        tag = 'BAD';
      } else if (penentuStatus === 'Sangat Gacor') {
        rtp = (seedFinal % (100 - 80 + 1)) + 80; 
        status = 'Sangat Gacor';
        tag = 'HOT';
      } else {
        rtp = (seedFinal % (80 - 40 + 1)) + 40; 
        status = 'Normal';
        tag = 'TOP';
      }

      let timeString = 'Jam: 00:00 - 00:00';
      let polaArray = null;

      if (status !== 'Tidak Disarankan') {
        let baseHour = (lock3Jam * 3) + 7; 
        let targetInterval = (rtp % 2) + 1; 
        let endHour = (baseHour + targetInterval) % 24;

        let min1 = (rtp % 60);
        let min2 = ((rtp * date) % 60);
        
        let formatBaseHour = baseHour % 24;
        if (formatBaseHour < 10) formatBaseHour = '0' + formatBaseHour;
        if (endHour < 10) endHour = '0' + endHour;
        if (min1 < 10) min1 = '0' + min1;
        if (min2 < 10) min2 = '0' + min2;

        timeString = `Jam: ${formatBaseHour}:${min1} - ${endHour}:${min2}`;

        let n = index % 6;
        let p = [
          (arrayX[n % arrayX.length] + rtp) % 6,
          (arrayX[(2 * n) % arrayX.length] + rtp) % 6,
          (arrayX[(3 * n) % arrayX.length] + rtp) % 6
        ];

        let n2 = index % 5;
        let p2 = [
          (arrayX[(4 * n2) % arrayX.length] + rtp) % 4,
          (arrayX[(5 * n2) % arrayX.length] + rtp) % 5,
          (arrayX[(6 * n2) % arrayX.length] + rtp) % 5
        ];

        for (let j = 0; j < 3; j++) {
          for (let k = 0; k < 3; k++) {
            if (p[j] == p[k] && j != k) {
              p[k] = (p[k] + 1) % 6;
            }
          }
        }

        polaArray = [
          `${randomCounts[p2[0]]} ${randomSymbols[p[0]]}`,
          `${randomCounts[p2[1]]} ${randomSymbols[p[1]]}`,
          `${randomCounts[p2[2]]} ${randomSymbols[p[2]]}`
        ];
      }

      let imgUrl = $(element).find('img').attr('src') || $(element).find('img').attr('data-src') || '';
      if (imgUrl && !imgUrl.startsWith('http')) {
        imgUrl = new URL(imgUrl, targetUrl).href;
      }

      scrapedGames.push({
        id: index + 1,
        title: title,
        rtp: rtp,
        status: status,
        pola: polaArray,
        time: timeString,
        tag: tag,
        image: imgUrl
      });
    });

    res.json({
      status: 'success',
      total_games: scrapedGames.length,
      data: scrapedGames
    });

  } catch (error) {
    console.error("Error Core Generator:", error.message);
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// 🌟 BAGIAN PENTING: Mengekspor aplikasi Express agar dibaca sebagai Serverless Function oleh Vercel
module.exports = app;