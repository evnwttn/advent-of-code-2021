let input = [
  { direction: "forward", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 8 },
  { direction: "up", value: 6 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 9 },
  { direction: "down", value: 7 },
  { direction: "up", value: 9 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 8 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 1 },
  { direction: "up", value: 8 },
  { direction: "up", value: 9 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 5 },
  { direction: "up", value: 9 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 9 },
  { direction: "down", value: 7 },
  { direction: "down", value: 4 },
  { direction: "down", value: 6 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 5 },
  { direction: "up", value: 4 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 1 },
  { direction: "up", value: 3 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 8 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 7 },
  { direction: "down", value: 7 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 5 },
  { direction: "up", value: 8 },
  { direction: "down", value: 6 },
  { direction: "up", value: 2 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 7 },
  { direction: "down", value: 7 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 1 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 1 },
  { direction: "down", value: 9 },
  { direction: "down", value: 1 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 8 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 9 },
  { direction: "up", value: 8 },
  { direction: "down", value: 9 },
  { direction: "down", value: 3 },
  { direction: "down", value: 5 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 2 },
  { direction: "down", value: 5 },
  { direction: "down", value: 2 },
  { direction: "up", value: 6 },
  { direction: "down", value: 5 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 1 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 7 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 7 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 9 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 9 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 6 },
  { direction: "up", value: 5 },
  { direction: "down", value: 5 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 1 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 5 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 9 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 2 },
  { direction: "up", value: 8 },
  { direction: "forward", value: 7 },
  { direction: "up", value: 7 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 5 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 3 },
  { direction: "down", value: 7 },
  { direction: "down", value: 6 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 8 },
  { direction: "up", value: 3 },
  { direction: "down", value: 7 },
  { direction: "down", value: 2 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 1 },
  { direction: "down", value: 5 },
  { direction: "down", value: 9 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 3 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 9 },
  { direction: "down", value: 6 },
  { direction: "up", value: 6 },
  { direction: "up", value: 3 },
  { direction: "down", value: 2 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 7 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 5 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 3 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 5 },
  { direction: "down", value: 7 },
  { direction: "down", value: 1 },
  { direction: "down", value: 2 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 1 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 7 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 7 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 2 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 5 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 7 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 9 },
  { direction: "up", value: 2 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 7 },
  { direction: "up", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 8 },
  { direction: "down", value: 4 },
  { direction: "down", value: 2 },
  { direction: "down", value: 9 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 3 },
  { direction: "down", value: 9 },
  { direction: "down", value: 9 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 7 },
  { direction: "down", value: 8 },
  { direction: "up", value: 4 },
  { direction: "up", value: 3 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 9 },
  { direction: "up", value: 1 },
  { direction: "up", value: 9 },
  { direction: "up", value: 7 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 4 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 9 },
  { direction: "up", value: 3 },
  { direction: "up", value: 3 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 3 },
  { direction: "down", value: 3 },
  { direction: "down", value: 4 },
  { direction: "up", value: 6 },
  { direction: "down", value: 7 },
  { direction: "down", value: 1 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 9 },
  { direction: "up", value: 8 },
  { direction: "up", value: 5 },
  { direction: "down", value: 7 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 1 },
  { direction: "down", value: 4 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 6 },
  { direction: "down", value: 2 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 5 },
  { direction: "down", value: 2 },
  { direction: "down", value: 9 },
  { direction: "up", value: 2 },
  { direction: "up", value: 3 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 8 },
  { direction: "down", value: 4 },
  { direction: "up", value: 4 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 7 },
  { direction: "down", value: 1 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 4 },
  { direction: "down", value: 4 },
  { direction: "down", value: 5 },
  { direction: "down", value: 9 },
  { direction: "down", value: 1 },
  { direction: "down", value: 7 },
  { direction: "up", value: 2 },
  { direction: "down", value: 6 },
  { direction: "up", value: 9 },
  { direction: "down", value: 3 },
  { direction: "down", value: 1 },
  { direction: "down", value: 8 },
  { direction: "down", value: 4 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 7 },
  { direction: "up", value: 9 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 3 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 5 },
  { direction: "up", value: 9 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 5 },
  { direction: "up", value: 4 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 3 },
  { direction: "down", value: 5 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 8 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 7 },
  { direction: "up", value: 3 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 9 },
  { direction: "down", value: 4 },
  { direction: "down", value: 8 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 4 },
  { direction: "up", value: 5 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 8 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 6 },
  { direction: "down", value: 9 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 1 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 2 },
  { direction: "up", value: 9 },
  { direction: "down", value: 1 },
  { direction: "up", value: 8 },
  { direction: "forward", value: 9 },
  { direction: "up", value: 8 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 2 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 4 },
  { direction: "up", value: 3 },
  { direction: "up", value: 5 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 8 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 2 },
  { direction: "down", value: 3 },
  { direction: "down", value: 2 },
  { direction: "up", value: 4 },
  { direction: "forward", value: 5 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 9 },
  { direction: "up", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 5 },
  { direction: "up", value: 7 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 9 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 8 },
  { direction: "down", value: 2 },
  { direction: "up", value: 9 },
  { direction: "down", value: 4 },
  { direction: "down", value: 4 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 9 },
  { direction: "down", value: 9 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 9 },
  { direction: "up", value: 8 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 1 },
  { direction: "down", value: 6 },
  { direction: "up", value: 8 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 8 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 2 },
  { direction: "up", value: 8 },
  { direction: "up", value: 5 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 4 },
  { direction: "up", value: 1 },
  { direction: "up", value: 3 },
  { direction: "up", value: 2 },
  { direction: "down", value: 9 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 4 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 3 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 3 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 5 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 3 },
  { direction: "down", value: 6 },
  { direction: "up", value: 2 },
  { direction: "up", value: 2 },
  { direction: "down", value: 1 },
  { direction: "up", value: 7 },
  { direction: "down", value: 9 },
  { direction: "up", value: 1 },
  { direction: "up", value: 4 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 4 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 7 },
  { direction: "up", value: 8 },
  { direction: "up", value: 3 },
  { direction: "down", value: 5 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 1 },
  { direction: "up", value: 8 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 2 },
  { direction: "down", value: 6 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 8 },
  { direction: "up", value: 7 },
  { direction: "down", value: 7 },
  { direction: "down", value: 2 },
  { direction: "up", value: 5 },
  { direction: "up", value: 2 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 3 },
  { direction: "up", value: 4 },
  { direction: "down", value: 2 },
  { direction: "up", value: 2 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 2 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 4 },
  { direction: "down", value: 3 },
  { direction: "up", value: 6 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 3 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 9 },
  { direction: "down", value: 8 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 3 },
  { direction: "down", value: 5 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 9 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 9 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 7 },
  { direction: "up", value: 3 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 5 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 7 },
  { direction: "up", value: 7 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 3 },
  { direction: "forward", value: 2 },
  { direction: "up", value: 7 },
  { direction: "down", value: 3 },
  { direction: "down", value: 4 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 5 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 1 },
  { direction: "down", value: 2 },
  { direction: "up", value: 4 },
  { direction: "forward", value: 2 },
  { direction: "up", value: 5 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 6 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 5 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 4 },
  { direction: "down", value: 1 },
  { direction: "down", value: 9 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 9 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 3 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 4 },
  { direction: "up", value: 4 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 4 },
  { direction: "down", value: 5 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 2 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 8 },
  { direction: "up", value: 5 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 8 },
  { direction: "up", value: 9 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 3 },
  { direction: "up", value: 6 },
  { direction: "down", value: 7 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 1 },
  { direction: "down", value: 5 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 2 },
  { direction: "up", value: 1 },
  { direction: "down", value: 2 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 9 },
  { direction: "down", value: 1 },
  { direction: "up", value: 8 },
  { direction: "down", value: 5 },
  { direction: "down", value: 2 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 2 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 6 },
  { direction: "down", value: 1 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 2 },
  { direction: "down", value: 3 },
  { direction: "up", value: 7 },
  { direction: "down", value: 3 },
  { direction: "down", value: 2 },
  { direction: "up", value: 8 },
  { direction: "up", value: 7 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 8 },
  { direction: "up", value: 2 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 1 },
  { direction: "up", value: 3 },
  { direction: "up", value: 1 },
  { direction: "down", value: 4 },
  { direction: "up", value: 6 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 7 },
  { direction: "down", value: 2 },
  { direction: "down", value: 6 },
  { direction: "down", value: 2 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 1 },
  { direction: "up", value: 8 },
  { direction: "up", value: 6 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 9 },
  { direction: "down", value: 5 },
  { direction: "up", value: 7 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 5 },
  { direction: "up", value: 5 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 4 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 1 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 6 },
  { direction: "forward", value: 9 },
  { direction: "up", value: 5 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 3 },
  { direction: "up", value: 3 },
  { direction: "up", value: 9 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 6 },
  { direction: "up", value: 5 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 2 },
  { direction: "down", value: 5 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 2 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 2 },
  { direction: "up", value: 1 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 9 },
  { direction: "down", value: 1 },
  { direction: "down", value: 1 },
  { direction: "down", value: 8 },
  { direction: "up", value: 4 },
  { direction: "up", value: 9 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 3 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 9 },
  { direction: "up", value: 2 },
  { direction: "down", value: 9 },
  { direction: "down", value: 8 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 6 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 5 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 3 },
  { direction: "down", value: 5 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 5 },
  { direction: "up", value: 3 },
  { direction: "up", value: 8 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 8 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 9 },
  { direction: "up", value: 1 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 1 },
  { direction: "down", value: 5 },
  { direction: "up", value: 6 },
  { direction: "down", value: 9 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 3 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 4 },
  { direction: "down", value: 4 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 8 },
  { direction: "down", value: 2 },
  { direction: "up", value: 7 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 7 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 9 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 1 },
  { direction: "up", value: 3 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 2 },
  { direction: "down", value: 2 },
  { direction: "up", value: 9 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 1 },
  { direction: "down", value: 5 },
  { direction: "down", value: 4 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 4 },
  { direction: "down", value: 4 },
  { direction: "down", value: 9 },
  { direction: "down", value: 3 },
  { direction: "up", value: 3 },
  { direction: "down", value: 3 },
  { direction: "up", value: 8 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 1 },
  { direction: "forward", value: 5 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 2 },
  { direction: "forward", value: 7 },
  { direction: "down", value: 7 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 6 },
  { direction: "up", value: 5 },
  { direction: "down", value: 4 },
  { direction: "down", value: 8 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 7 },
  { direction: "up", value: 3 },
  { direction: "down", value: 3 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 8 },
  { direction: "forward", value: 5 },
  { direction: "down", value: 1 },
  { direction: "up", value: 6 },
  { direction: "down", value: 3 },
  { direction: "up", value: 2 },
  { direction: "down", value: 6 },
  { direction: "up", value: 7 },
  { direction: "down", value: 4 },
  { direction: "up", value: 2 },
  { direction: "forward", value: 4 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 9 },
  { direction: "up", value: 1 },
  { direction: "forward", value: 7 },
  { direction: "up", value: 7 },
  { direction: "forward", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 1 },
  { direction: "down", value: 5 },
  { direction: "down", value: 3 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 9 },
  { direction: "down", value: 5 },
  { direction: "up", value: 2 },
  { direction: "down", value: 6 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 6 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 7 },
  { direction: "up", value: 6 },
  { direction: "down", value: 9 },
  { direction: "forward", value: 4 },
  { direction: "up", value: 1 },
  { direction: "up", value: 6 },
  { direction: "up", value: 3 },
  { direction: "forward", value: 9 },
  { direction: "forward", value: 3 },
  { direction: "forward", value: 9 },
  { direction: "down", value: 7 },
  { direction: "forward", value: 6 },
  { direction: "down", value: 6 },
  { direction: "forward", value: 8 },
];

function partOne() {
  let forward = 0;
  let depth = 0;
  let aim = 0;
  for (var i in input) {
    if (input[i].direction === "forward") {
      forward += input[i].value;
      let factor = aim * input[i].value;
      depth += factor;
    } else if (input[i].direction === "up") {
      aim -= input[i].value;
    } else if (input[i].direction === "down") {
      aim += input[i].value;
    }
  }
  console.log(depth);
  console.log(forward);
  console.log(depth * forward);
}

partOne();
