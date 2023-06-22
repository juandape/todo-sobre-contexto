import { candidates } from '../assets/data.js';

export async function getCandidates() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(candidates);
    }, 3000);
  })
}

