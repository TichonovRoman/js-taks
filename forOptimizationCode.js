const data = `city,population,area,density,country
  Shanghai,24256800,6340,3826,China
  Delhi,16787941,1484,11313,India
  Lagos,16060303,1171,13712,Nigeria
  Istanbul,14160467,5461,2593,Turkey
  Tokyo,13513734,2191,6168,Japan
  Sao Paulo,12038175,1521,7914,Brazil
  Mexico City,8874724,1486,5974,Mexico
  London,8673713,1572,5431,United Kingdom
  New York City,8537673,784,10892,United States
  Bangkok,8280925,1569,5279,Thailand`;

function parseData(data){
    return new Promise((resolve) => {

        let max = 0;
        const lines = data.split('\n');
        resolve(lines.slice(1).map(line => {
            const [city, population, area, density, country] = line.split(',');
            const d = parseInt(density);
            if (d > max) max = d;
            return {
                city,
                population,
                area,
                density,
                country,
                relativeDensity: Math.round((density * 100) / max).toString()
            };
        }))
    })
}
function sorting(data) {
    return new Promise((resolve) => {  resolve(data.sort((r1, r2) => r2.relativeDensity - r1.relativeDensity))});
}

function print(data) {
    return new Promise((resolve) => {
            for (const {city, population, area, density, country, relativeDensity} of data) {
                let s = `${city.padEnd(18)}${population.padStart(10)}${area.padStart(8)}${density.padStart(8)}${country.padStart(18)}${relativeDensity.padStart(6)}`;
                console.log(s);
            }
            resolve()
        }
    )
}


parseData(data)
    .then(sorting)
    .then(print)
    .then(() => console.log('Операция закончена'))
    .catch((error) => console.error('Внимание! Выполнение операции закончилось ошибкой:', error));