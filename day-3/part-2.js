const input = [
  '.....#............#....#####.##',
  '.#.#....#......#....##.........',
  '......#.#.#.....###.#.#........',
  '......#...#.....#####....#..##.',
  '...#............##...###.##....',
  '#.....#...#....#......##....##.',
  '#...#.#....#..#..##.##...#.....',
  '.......#..........#..#..#.#....',
  '.#.....#.#.......#..#...#....#.',
  '#..#.##.#..................###.',
  '...#.#.##...##.###.....#..#...#',
  '..#.#...#............#.......#.',
  '#..#.#..#.#....#...#.#.....#..#',
  '#......##....#..#.#.#........#.',
  '....#..#.#.#.##............#..#',
  '....#..#..#...#.#.##......#...#',
  '##...#...........#.....###.#...',
  '..#...#.#...#.#.....#....##.##.',
  '....##...##.#....#.....#.##....',
  '#........##......#......#.#.#.#',
  '....#.#.#.........##......#....',
  '.#......#...#.....##..#....#..#',
  '....#..#.#.....#..........#..#.',
  '..##...#..##................#.#',
  '.....#....#.#..#......#........',
  '........#..#.#......#.#........',
  '.....#.#....##.###....#...#....',
  '...##.#.......#....###..#......',
  '............##.#..#...#........',
  '#..###..#.....#.####...........',
  '.......##.....#......#......#..',
  '#........##..#.....##.......#.#',
  '#.##...#...#...#......##..#.#.#',
  '......#....##.#.#...#...##....#',
  '#..#....##.#......#.......##...',
  '.#..........#..........#....#.#',
  '#.....##......##....#..........',
  '..#.#.....#.#...#........#.....',
  '...#........#..#..#.##..##.....',
  '......###.....#..#...#.###...##',
  '.##.##.......#.......###...#...',
  '#.#..#.#.#....#.....###..#...##',
  '......#.##..........#.......##.',
  '#..#.#.........#.....##...##...',
  '..#...#....#....###.#......#...',
  '.....#..#.######.....#..#.#....',
  '..#.#.....#.....##.#....##.#.##',
  '...#.#.#....#....##..#..#.#.##.',
  '...........#.#...#..#..####....',
  '.........#####.#.#.#...#.##.#..',
  '.......#...#......#.##.#.##....',
  '....#.....#.....###..........#.',
  '.#.###....##.#..#..........#...',
  '#...#.........##.....####....#.',
  '##....##...#..........#........',
  '...#.#.#.#....#..........#.....',
  '.......#....#......##.......#..',
  '.#.#..#.........#.#.##....#....',
  '..#.............#..##.#.##..###',
  '.#.##..............#..#..##..#.',
  '..##.#..#......#...##..#.##...#',
  '......#..#....#....#....##..#..',
  '...#...##.............#..###...',
  '...##....#.#.##........#.....##',
  '....#.#.......#..###..#....####',
  '#...#...##..#.####..#...##....#',
  '.......#..#.##..#...#.#........',
  '###.#......#..##..#......#.##..',
  '#....#............#.....#......',
  '..##...#..##......#..#....#....',
  '.#..##...#....#.#...#...#..#..#',
  '........#....###...#..##..###.#',
  '.........#....#....#..#.#.#...#',
  '.#....###.##...#.#...........##',
  '..#..#.#..#.#.##..#...##.......',
  '##..#.#.#....#...#..#..........',
  '#..#.......#....#..##...####...',
  '............#.#..........##.##.',
  '#...#..#.#....#..#.#....##.....',
  '......#...#...#.##............#',
  '#.....##..###..#.#..#.#.##..#.#',
  '#..#.#..#......#.......##.#....',
  '##..#.#..#...#......#.##...###.',
  '.#....#..............#....#.#..',
  '..#.#..##....#....#..##........',
  '.#.#...#..#.....#.#..##........',
  '.....#..#.#......#....#.#..#.#.',
  '....#.###...###.#.#.....#......',
  '...........#.#....##....##.....',
  '..#..#.##..........#...#...#..#',
  '.....#.###.#..........#........',
  '....#....##........###...#.....',
  '.#.....##.......#....#..##..###',
  '#.....#...............##......#',
  '#..#.#..#.#.#.....#.#...#......',
  '.##.###...#....#..........##...',
  '.#.......#.....................',
  '.#.#....#...##..#...#...##.....',
  '.#.#...#.......#.......#...#...',
  '....#.#..#.#..#...#....##......',
  '....##.....#.##....#.##..##..##',
  '..#............#...###.##..#...',
  '.#..#.........#.##....#....#..#',
  '.#..##..#..#........#.#.##.#.##',
  '.###.#...#...............#...#.',
  '...#.##.##.#......#...#....##.#',
  '#......##.......##...###....#.#',
  '#..##.....##......#.#.##....#.#',
  '...#.#....#.#.#...........##..#',
  '#.....##......##.#..........##.',
  '###....#.#...#.#..####.........',
  '.##.#.#...##..#.....#..#...#...',
  '#.....#.#......#..........#.#..',
  '..###.##.#...................#.',
  '#.............#..#........#.##.',
  '#.#.#.#..#.....##..##.#....#...',
  '...#...#..#...#..##..##........',
  '...##...##..#...##...........#.',
  '.####..#.#.#.##.#.......#......',
  '...#....#.......#......#.......',
  '.....#.#...#...#..##..#..#.....',
  '......#.....###.#..#..#.#..###.',
  '.#....#....#..#..##.....##...#.',
  '.#.............##.###.#...#.#..',
  '#..#..#......#.###............#',
  '##.#..##....#..........#.#.#...',
  '......#........#...#.......##..',
  '....#.#..#..........#.....#.#..',
  '...#..#...#.#...#........#.....',
  '.....##...#....#.........##.##.',
  '....#...#...#.##.##...#....#...',
  '.#..#.....##......#..#.#..#....',
  '........##...##.##......#.#.#.#',
  '.................#..#.....##.#.',
  '...#.....#...#.........#..#.#.#',
  '....##.#.....#........#...#..#.',
  '#...............#..#.....#...#.',
  '.....#..#....#...#.####.#.#....',
  '####.#..#.##...#....#...##.....',
  '#...##..#...####..#....#.#...#.',
  '..#.......#.##..##...#.#.......',
  '...........##.......#....#..#..',
  '#.##....#...#.....#....##......',
  '....##.#.......#..#...##.......',
  '...#.........##.#..#......#.###',
  '.#..#..#....#.#.##....###..###.',
  '....#.#........##........##....',
  '....########....#.#.#.###.#...#',
  '...#.###.###.##......##.......#',
  '.#...#.###.......#..........#..',
  '..#..##.........#............#.',
  '.......##.#...#...##...#...#..#',
  '#.##....#.#...#.....#..#.#.....',
  '..#........#..#.#.#.#....#.##..',
  '...#...#.#.........#...#.#..##.',
  '#....#......#.#...........#..##',
  '...#.#.#..#...##...#...#...#...',
  '###..........#.#..........#....',
  '..#....#.#.#.#............#.#..',
  '....#...#..###...#.#....#......',
  '#...........####......##.#.....',
  '..#..##.#...#.....#..#.......##',
  '#.....#..###.....#...##..##....',
  '##..###..##...........#.#...#..',
  '.....#......#..............#...',
  '#..#.##.###.......#.......#...#',
  '#........#....##......#.#......',
  '.#.#.#...#.......#........#.##.',
  '#..#..##.....#...#.#.#.#..###..',
  '.#.#....#..#..#.#....##.#.#....',
  '..#.#.........####.#...#.#.###.',
  '....##........##....#........#.',
  '................#..........#...',
  '..#...................###.##..#',
  '.........#..#..#.#...#....#.#.#',
  '......#.....###.....#.#..#...#.',
  '.#.#.....#..##............##...',
  '...##......##.#....#...........',
  '...##..##..###.#...##..........',
  '....###...#..#.#......#......#.',
  '....##..............#..#..#.#..',
  '####.......#...##.##..#.#......',
  '.#......#.....#....###..#....#.',
  '.#.......#...##...#..##.#......',
  '#.......#.......#.#....#.#.#..#',
  '........#..#..#............##.#',
  '#.#...#.#..##..#.......##..#...',
  '...#....#...#..........##..#...',
  '#.#...#.##....###......##....#.',
  '#..#...###........#..#....#..#.',
  '#....#....###....#..#.......#..',
  '....#.#........#.............#.',
  '.#.##........##...#...#...#...#',
  '#.....##.....#.......#.#.#.....',
  '.#.##..........##..#....#......',
  '.#..##.##.#...##....#.#....##..',
  '........#.#.##.#....#.#..#....#',
  '..#...........................#',
  '.#...........#....#....#.#..#..',
  '........##...........#...#...#.',
  '..#.....#..#......#..##.......#',
  '..#....###..###...#.#.#..#....#',
  '#..#.#...#......##......#......',
  '...........#...##..##....##....',
  '#.#......###..#.....#.......#.#',
  '#.....#....#....#.#...#...#....',
  '....#...#.......#....##.#..#...',
  '.####..##......##.#........#..#',
  '..###..#.#.....#...........##..',
  '..##.#.#..#....#..#..#.........',
  '..........#.#.#####...#........',
  '.###......##.#....#........#...',
  '.....#..#..#.#..#.........#....',
  '..#....#...#...#...##..........',
  '....#..##.#.........##.#..##...',
  '##.####..#...#.#...#.....#..###',
  '..#..#...#...#.....##....#..#.#',
  '#..##..#.....#....#.#.....##..#',
  '...#...........##.....#......#.',
  '......#...#.....#.#..###.......',
  '.........#.....###.##..#...#...',
  '.#...#.##...#..........#.#..##.',
  '......#.......##.....#.....##..',
  '........###..........#...#.....',
  '##.......###..###...##...#.....',
  '#.#.............#..#..#.#......',
  '..##........#.###.....#....##..',
  '......#...#......#....##......#',
  '..#.....#...##...#.......#..#..',
  '..#.###..##.##...#....#...##.#.',
  '........##...#..#.#..##.....#.#',
  '.......................#......#',
  '..##.###......#.#.............#',
  '....#...........###............',
  '##...##.....#.......##.......#.',
  '...#..##..##..#.#.###..#......#',
  '........#........#.#..#..#.....',
  '.#......#....##..........#...#.',
  '.##...........##....#..........',
  '.#..#....###.......#....#..##..',
  '.....###..........#....#.#.#...',
  '...#....###.#.#......#......#..',
  '#.#.##.#.....#..#........#...#.',
  '...#.##.........#..#.....#.....',
  '.##...##......##...###...#.....',
  '...#.....#.##..#...#..#........',
  '........#............#.#.#..##.',
  '###...#.....#...#..#........##.',
  '##...#..#.....#.#....#.#.#.....',
  '#..##.......#...#.#...##..#....',
  '#...#.##.....#.#..#.##......#.#',
  '..#......#.#.#.##.##..........#',
  '..#.##......#.#.#..##..........',
  '....#..#....#..#..............#',
  '..........###.....##..#........',
  '...#.....##.....#..#.#..#...##.',
  '.#..##.#..#....#.#......#.##...',
  '...#.....#..#.#...#..#.....#.#.',
  '#...#.#......##...#..#...#....#',
  '..#.......##...#..#.......#...#',
  '#.....#...........##.#.........',
  '.#......##.....####...#.......#',
  '........#..#.....#.......#..#..',
  '....#.#...##..##...#..#....#...',
  '#.#......#...#.#.###.....#.....',
  '..##...#.#........#.##....#.#.#',
  '.#....#......#.#...###.#.......',
  '.......#.#...##....#.#....#....',
  '.....##..##...#..#.#.....##..#.',
  '.##..#.#.#....##.#...#.....#...',
  '.#..#..##....#.##.......#...#..',
  '....#.##...#..##......#.....#..',
  '.#..#....##....#...............',
  '..##...#.....###...............',
  '..............#.#.##........#.#',
  '.#.#....#....#...#.#........#..',
  '.##...#...#.#....#....#.#.....#',
  '#..............#......#.####.#.',
  '......#...........#..#.....##..',
  '#.#..##.##.....#......#..#.#..#',
  '##.##..#.##.#.............#...#',
  '...#..#......#....#............',
  '........###.#.#..#...#.....#.##',
  '..#.......#.##.........#..#....',
  '...##.#........##...#.#.##..#..',
  '...#..#......#...#....#........',
  '...........#..#..#...##...#....',
  '...#.....#....#..####..##.....#',
  '.......#..#..#......#.........#',
  '#......#........###.....##....#',
  '..#..#..#.#.#....##...##......#',
  '#.#..#..###.#..#.....####......',
  '.#................#####....#...',
  '.#.........#...#.......#......#',
  '..#.......#######........#.....',
  '..#........#.....#..#...#..#..#',
  '.#..#.#..#....#.#..##...#..#.#.',
  '..#...........#.#...#.#.##.....',
  '...#.#.#....##.###....#...####.',
  '.....#..#.....#..#.#.........#.',
  '......##...#...###............#',
  '..#.#......###..####..#......#.',
  '###.##.#..#......##.#..##.....#',
  '....###...##............#.#....',
  '..#.....##...#...##....#...#...',
  '#.....#.....#...#...#.#..#.....',
  '####..........##.#.#..#.....##.',
  '...#..........#...#...##..##.#.',
  '..........#.........#.#..#..#..',
  '#....###.....#.#...#.......##.#',
  '#..#.##.....#..........#...#...',
  '...#.#.###.......##..#.....#...',
  '#...#.#..#.............#..#.#..',
  '#........#.................#..#',
  '..#.#....#.#..##.#...#..#....#.',
  '#...#..........#...###....#...#',
  '......#.............#....#....#',
  '#.#.......##.......#.#....##..#',
  '##...#....#.............#..#...',
  '........#...###.##.#..###.#...#',
  '...##...#..#..#...##..##......#',
  '..#.......##....#.#.##....#....',
  '.....#....#..#.#...##.#.#.....#',
]

let count = 0
let total = 0
let inputLength = input.length
const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
]
slopes.forEach(slope => {
  count = 0
  let i, x = 0
  let right = slope[0]
  let down = slope[1]
  for (i = down; i < inputLength; i += down) {
    const line = input[i].split('')
    x += right
    const y = x % line.length
    if (line[y] === '#') {
      count += 1
    }
  }
  console.log(count)
  if (total === 0) {
    total = count
  } else {
    total *= count
  }
})

console.log(total)
