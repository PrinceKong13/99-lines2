let friends = ["Stephen", "Joe", "Quinton", "Chuy", "Alex"];

for (j = 0; j < 5; j++) {
  console.log(friends[j]);

  for (i = 99; i > 0; i--) {
    if (i == 2) {
      console.log(
        i +
          " lines of code in the file. " +
          i +
          " lines of code; " +
          friends[j] +
          " strikes one out, clears it all out, " +
          (i - 1) +
          " line of code in the file."
      );
    } else if (i == 1) {
      console.log(
        i +
          " line of code in the file. " +
          i +
          " line of code; " +
          friends[j] +
          " strikes one out, clears it all out, no more lines of code in the file."
      );
    } else {
      console.log(
        i +
          " lines of code in the file. " +
          i +
          " lines of code; " +
          friends[j] +
          " strikes one out, clears it all out, " +
          (i - 1) +
          " lines of code in the file."
      );
    }
  }
}
