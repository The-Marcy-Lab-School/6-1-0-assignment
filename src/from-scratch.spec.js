const path = require('path');
const ScoreCounter = require('score-tests');
const { reverse, fibRec, fibIter, binarySearch } = require('./from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  describe('reverse', () => {
    it('can reverse a simple string', () => {
      expect(reverse('hello')).toEqual('olleh');
      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('can reverse a string with spaces', () => {
      expect(reverse('hello world')).toEqual('dlrow olleh');
      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('can reverse a numeric string', () => {
      expect(reverse('123456789')).toEqual('987654321');
      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('is written recursively', () => {
      expect(reverse.toString().includes('reverse')).toBe(true);
      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('Fibonacci', () => {
    it('fibIter - given n, returns the correct Fibonacci number', () => {
      expect(fibIter(1)).toEqual(1);
      expect(fibIter(0)).toEqual(0);
      expect(fibIter(10)).toEqual(55);
      expect(fibIter(20)).toEqual(6765);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('fibIter - is written iteratively', () => {
      expect(fibIter.toString().includes('fibIter')).toBe(false);
      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('fibRec - given n, returns the correct Fibonacci number', () => {
      expect(fibRec(1)).toEqual(1);
      expect(fibRec(0)).toEqual(0);
      expect(fibRec(10)).toEqual(55);
      expect(fibRec(20)).toEqual(6765);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('fibRec - is written recursively', () => {
      expect(fibRec.toString().includes('fibRec')).toBe(true);
      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('binarySearch', () => {
    it('returns the index of target if found or -1 if not', () => {
      const arr = [2, 4, 6, 8, 10, 12, 14, 16];
      const target1 = 8;
      const target2 = 12;
      const target3 = 7;

      expect(binarySearch(arr, target1)).toEqual(3)
      expect(binarySearch(arr, target2)).toEqual(5)
      expect(binarySearch(arr, target3)).toEqual(-1)

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
    it('is written recursively', () => {
      expect(binarySearch.toString().includes('binarySearch')).toBe(true);
      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
