import { parties } from './parteien.js';
import { drawSector } from './canvas.js';

const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;

const sum = parties.reduce((sum, current) => sum + current.seats, 0);
console.log(sum);

function prepareSector() {
  let seat: number = 0;
  for (const party of parties) {
    console.log(seat);
    drawSector(
      canvas,
      Math.PI + (Math.PI / sum) * seat,
      (Math.PI / sum) * party.seats,
      party.color
    );
    seat += party.seats;
  }
}
prepareSector();
