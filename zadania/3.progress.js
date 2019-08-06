const jobs = [
  {
    jobName: "mining",
    done: true,
    progress: 0
  },
  {
    jobName: "building",
    done: true,
    progress: 0
  },
  {
    jobName: "refining",
    done: true,
    progress: 0
  }
];

const ROOT = document.getElementById("progress");

/**
 * 1. Zwróć tablicę jobów z ich aktualnym statusem.
 *    np.:
 *          Mining: done
 *          Building: 45%
 */

console.log("1. Stan początkowy wszystkich jobów:");

/**
 * 2. Napisz funkcję, która korzysta z poprzedniej:
 *    - ma dwa argumenty: jobsArray, targetElement
 *    - dla każdego stringa z tablicy tworzy element <button> z treścią statusu joba
 *    - każdy button ma atrybut "data-jobName" o wartości z "jobName"
 *    - wrzuca każdy guzik do elementu HTML, którego wskażemy w argumencie
 */

console.log(
  "2. Po wykonaniu tej funkcji, tu powinno być",
  3,
  "->",
  ROOT.getElementsByTagName("button").length
);

/**
 * 3. Funkcja do zapętlenia.
 *    Chcemy obniżyć progress każdego joba, który ma `progress` > 0.
 *    Wartość `done` ma zawsze być prawdziwa względem "progresu".
 *    Obniżaj wartość joba o losową liczbę z przedziału 10-25.
 *    HINT: nie zejdz poniżej zera!
 */

function loop() {}

// Odkomentuj do sprawdzenia
//
// jobs[0].progress = 100
// loop()
// jobs[0].progress === 100
//   ? console.error('3. progreess się nie zmienił')
//   : console.ingo('3. udało się!')

/**
 * 4. Co 500 ms, wykonuj powyższą funkcję,
 *    tylko jeżeli jakikolwiek job jeszcze się wykonuje.
 */

/**
 * 5. Po kliknięciu w guzik joba, zmień mu progress na 100.
 */

ROOT.addEventListener("click", event => {
  // console.log(event);
});
