const output = document.getElementById('output');
const inputLine = document.getElementById('input-line');
const userInput = document.getElementById('user-input');

let inputEnabled = false;
let askAgain = false;

function typeWriter(text, delay = 40, newline = true, callback) {
  let i = 0;
  function typeChar() {
    if (i < text.length) {
      output.textContent += text.charAt(i);
      i++;
      output.scrollTop = output.scrollHeight;
      setTimeout(typeChar, delay);
    } else {
      if (newline) output.textContent += '\n';
      if (callback) callback();
    }
  }
  typeChar();
}

function startConsole() {
  typeWriter("Launching Best Friend Console for Shourja Bhattacharya...\n", 40, true, () => {
    setTimeout(() => {
      typeWriter("\n🤝 Hey Shourja! It's me, your brother from another mother.\n", 50, true, () => {
        typeWriter("I know you're upset... and trust me, I hate that.\n", 50, true, () => {
          typeWriter("So I made this little program for you. Just for YOU. 💻\n\n", 50, true, () => {
            askQuestion();
          });
        });
      });
    }, 1000);
  });
}

function askQuestion() {
  inputEnabled = true;
  userInput.value = '';
  userInput.focus();
}

userInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && inputEnabled) {
    const response = userInput.value.trim().toLowerCase();
    output.textContent += `${document.getElementById('prompt').textContent}${response}\n`;
    inputEnabled = false;
    inputLine.style.display = 'none';

    if (response === 'yes') {
      typeWriter("\nAlright bro, listen up...\n", 50, true, () => {
        setTimeout(() => {
          typeWriter("\n💬 I know Sagorika messed up somewhere. She said or did something wrong.\n", 50, true, () => {
            typeWriter("But you're not just a friend. You're my brother from another mother.\n", 50, true, () => {
              typeWriter("And real brothers fight, but real ones also make up.\n", 50, true, () => {
                typeWriter("So here's a big, loud, unapologetically honest...\n", 50, true, () => {
                  typeWriter("\n🙏 I'M SORRY, BRO! 🙏\n", 100, true, () => {
                    typeWriter("Can we put the past behind us and go back to being LEGENDS together? 😤\n\n", 50, true, () => {
                      typeWriter("💥 Team SODEPUR MANJI GANG — Unstoppable since day one! 💥\n", 50);
                    });
                  });
                });
              });
            });
          });
        }, 1000);
      });
    } else {
      typeWriter("\n😒 Oyyy bro, really? NO? That's what you're going with?\n", 50, true, () => {
        typeWriter("Bro don't be dramatic like a 90's Bengali serial villain 🤦‍♂️\n", 50, true, () => {
          typeWriter("I'm gonna ask you ONE. MORE. TIME. 😤\n\n", 50, true, () => {
            inputLine.style.display = 'flex';
            askQuestion();
          });
        });
      });
    }
  }
});

startConsole();
