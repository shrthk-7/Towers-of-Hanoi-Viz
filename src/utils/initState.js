export default function initState(numberOfDiscs) {
  let arr = [];
  for (let i = numberOfDiscs; i > 0; i--) {
    arr.push(i);
  }
  return [arr, [], []];
}
