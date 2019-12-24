import { ChartData } from '../interfaces';

const randNum = (min, max) => Math.floor(Math.random() * (max - min) + min);


/* Data set example
    [
      {day: '24', values: [[50, 70], [100, 120]]},
      {day: '25', values: [[50, 60], [150, 170]]},
      {day: '26', values: [[50, 60], [100, 170]]}
    ]

   Expected to be returned by backend
 */
export function mockBackendData(): Array<ChartData> {
  let data = [];
  for (let i = 24; i < 30; ++i) {
    data = [...data, {day: `${i}`, values: getRandomValues(randNum(1, 4))}];
  }
  for (let i = 1; i < 24; ++i) {
    data = [...data, {day: `${i}`, values: getRandomValues(randNum(1, 4))}];
  }

  function getRandomValues(valuesAmount: number): Array<Array<number>> {
    let values = [];
    for (let i = 0; i < valuesAmount; ++i) {
      values = [...values, [randNum(20 * randNum(3, 7), 25 * randNum(3, 7)), randNum(25 * randNum(3, 7), 30 * randNum(3, 7))]];
    }
    return values;
  }

  return data;
}


/*
  Frontend internal function
 */
export function backToFrontAdaptation(initialData: Array<{ day: string, values: Array<Array<number>> }>) {
  return initialData.map(item => {
    let series = [];
    item.values.forEach(value => series = [...series, ...getPartSeries(value[0], value[1])]);

    function getPartSeries(from: number, to: number): Array<{}> {
      let partSeries = [];
      for (let i = from; i < to; i = i + 3) {
        partSeries = [...partSeries, {name: '', x: item.day, y: i, r: 2}];
      }
      return partSeries;
    }

    return {name: '', series};
  });
}

