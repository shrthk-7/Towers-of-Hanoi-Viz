export default function hanoi(
  state,
  setState,
  n,
  from = 0,
  aux = 1,
  to = 2,
  swaps = [1]
) {
  if (n == 1) {
    state[to].push(state[from].pop());
    const stateCopy = JSON.parse(JSON.stringify(state));
    setTimeout(() => {
      setState(stateCopy);
    }, swaps[0]++ * 1000);
    return;
  }

  hanoi(state, setState, n - 1, from, to, aux, swaps);
  state[to].push(state[from].pop());
  const stateCopy = JSON.parse(JSON.stringify(state));
  setTimeout(() => {
    setState(stateCopy);
  }, swaps[0]++ * 1000);
  hanoi(state, setState, n - 1, aux, from, to, swaps);
}
