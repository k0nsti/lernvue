var watchExampleVM = new Vue({
  el: "#watch-example",
  data: {
    question: prepare(-100, 100, 3),
    answer: "Bitte das Ergebis eintragen!",
    result: ""
  },
  watch: {
    // whenever answer changes, this function will run
    answer: function(numbers, result) {
      let computeResult;
      computeResult = numbers.reduce((acc, cur) => {
        acc = acc + cur;
        return acc;
      });
      if (result === computeResult) {
        return true;
      } else {
        return false;
      }
    }
  },
});

/**
 *
 * @param {Number} min minimal value which could be generated
 * @param {Number} max maximal value which could be generated
 */
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function prepare(min, max, wieLang) {
  const numbers = [];
  for (i = 0; i < wieLang; i++) {
    numbers.push(getRandomIntInclusive(min, max));
  }
  return numbers;
}

//console.log(prepare(-100, 100, 3));
//const testNumbers = [15, -14, 35];
//console.log(checkResult(testNumbers, 36));
console.log('böa')