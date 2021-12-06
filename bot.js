const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


console.log('Bot on');
//console.log(`Coloque a palavra chave: ${quest}`)
const lugar = readlineSync.question ('Coloque a palavra chave: ') || 'floripa'
async function robo() {
  const browser = await puppeteer.launch({ headless: false });
  var cont
  for(cont=0;cont<10;cont++){
   const page = await browser.newPage();
    const qualquerUrl = `https://www.google.com/search?q=chaveiro+24+horas+${lugar}&oq=chaveiro+24+horas+${lugar}&aqs=chrome..69i57j0i22i30l5.6518j0j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(qualquerUrl);
    await page.click('.sVXRqc');
  
   }
  setTimeout(async function(){
    await browser.close();
   },15000);
  }
  var cont2
  //for(cont2=0;cont2<4;cont2++){
    //robo();
  //}

async function robo2() {
   const browser = await puppeteer.launch({ headless: false });
    var cont
    for(cont=0;cont<10;cont++){
     const page = await browser.newPage();
      const qualquerUrl = `https://www.google.com/search?q=chaveiro+24+horas+${lugar}&oq=chaveiro+24+horas+${lugar}&aqs=chrome..69i57j0i22i30l5.6518j0j7&sourceid=chrome&ie=UTF-8`;
      await page.goto(qualquerUrl);
      await page.click('.LC20lb.MBeuO.DKV0Md');
    
     }
    setTimeout(async function(){
      await browser.close();
     },15000);
    }
    //var cont2
    //for(cont2=0;cont2<4;cont2++){
    //  robo();
    //}
    var cont2
    for(cont2=0;cont2<6;cont2++){
      robo2();
    }