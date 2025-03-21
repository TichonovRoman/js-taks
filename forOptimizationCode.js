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

    const lines = data.split('\n');
    const table = new Array(lines.length - 1);
    let max = 0;

    for (let i = 1; i <= lines.length - 1; i++) {
            const cells = lines[i].split(',');
            const threeElement = cells[3];
            const d = parseInt(threeElement);
            if (d > max) max = d;

        const a = Math.round(( threeElement * 100) / max).toString();
        table[i - 1] = [cells[0], cells[1], cells[2], threeElement, cells[4], a];
    }

    table.sort((r1, r2) => r2[5] - r1[5]);
    for (const row of table) {
        let s = `${row[0].padEnd(18)}${row[1].padStart(10)}${row[2].padStart(8)}${row[3].padStart(8)}${row[4].padStart(18)}${row[5].padStart(6)}`;
        console.log(s);
    }