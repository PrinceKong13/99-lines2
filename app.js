let friends = ["Stephen", "Joe", "Quinton", "Chuy", "Alex"];
let singButton = document.createElement("button");
let singButtonText = document.createTextNode("Sing!");
document.body.appendChild(singButton);
singButton.appendChild(singButtonText);
singButton.addEventListener("click", sing);
let friendsDiv = document.querySelector(".friend");
let friendsHeader = document.querySelector("h1");
friendsHeader.remove();
friendsDiv.remove();



function sing() {
  for (j = 0; j < 5; j++) {
    console.log(friends[j]);
    let newFriendDiv = document.createElement("div");
    let newFriendDivHeader = document.createElement("h3");
    let newFriendDivText = document.createTextNode(friends[j]);
    let songLyric = document.createElement("p");
    document.body.appendChild(newFriendDiv);
    newFriendDiv.appendChild(newFriendDivHeader);
    newFriendDivHeader.appendChild(newFriendDivText);

    for (i = 99; i > 0; i--) {
      if (i == 2) {
        newFriendDivHeader.appendChild(songLyric);
        let songLyricText = document.createTextNode(
          i +
            " lines of code in the file. " +
            i +
            " lines of code; " +
            friends[j] +
            " strikes one out, clears it all out, " +
            (i - 1) +
            " line of code in the file."
        );
        songLyric.appendChild(songLyricText);
      } else if (i == 1) {
        newFriendDivHeader.appendChild(songLyric);
        let songLyricText = document.createTextNode(
          i +
            " line of code in the file. " +
            i +
            " line of code; " +
            friends[j] +
            " strikes one out, clears it all out, no more lines of code in the file."
        );
        songLyric.appendChild(songLyricText);
      } else {
        newFriendDivHeader.appendChild(songLyric);
        let songLyricText = document.createTextNode(
          i +
            " lines of code in the file. " +
            i +
            " lines of code; " +
            friends[j] +
            " strikes one out, clears it all out, " +
            (i - 1) +
            " lines of code in the file."
        );
        songLyric.appendChild(songLyricText);
      }
    }
  }
}
