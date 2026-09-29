document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // ELEMENTOS
    // ==========================================

    const intro = document.getElementById("intro");
    const message = document.getElementById("message");
    const finalScreen = document.getElementById("final");

    const openBtn = document.getElementById("openBtn");
    const continueBtn = document.getElementById("continueBtn");

    const typedMessage = document.getElementById("typedMessage");
    const particles = document.getElementById("particles");
    const love = document.getElementById("love");

    const backgroundMusic =
        document.getElementById("backgroundMusic");


    // ==========================================
    // TEXTO DA MENSAGEM
    // ==========================================

    const text = `Tem pessoas que chegam na nossa vida e, aos poucos, vão se tornando parte dela de um jeito tão bonito que a gente nem percebe quando aconteceu. Você é uma dessas pessoas pra mim. 🤍

Eu gosto de saber que, em algum lugar desse mundo, existe você. Gosto das nossas conversas, das risadas, das pequenas coisas que talvez nem tenham importância para mais ninguém, mas que, pra mim, acabam tendo um significado enorme.

E hoje eu queria te lembrar de uma coisa que talvez você esteja esquecendo: **um resultado não é capaz de definir quem você é.** Uma prova, um concurso, uma nota ou um dia ruim não apagam sua capacidade, sua dedicação, sua inteligência, sua força e tudo aquilo que existe em você.

Eu sei que você está desanimada, mas, por favor, não deixe um momento difícil fazer você duvidar de si mesma. Você não precisa acertar tudo de primeira para ser capaz. Não precisa conseguir sempre para ser forte. E não precisa ter um resultado perfeito para ter orgulho de si.

Às vezes, a gente olha para aquilo que não conseguiu e esquece de olhar para tudo o que precisou enfrentar para chegar até ali. Então, seja gentil com você. Respira. Descansa o coração. Se permita ficar triste, mas não deixe essa tristeza te convencer de que você não é capaz.

**Você é muito mais do que esse resultado. E um resultado ruim não é o fim da sua história. É só um momento dela.** Ainda existem muitas páginas para escrever, muitas oportunidades pela frente e muitas coisas que você ainda vai conquistar.

E quando chegar aquele dia em que você estiver cansada e pensar em desistir, espero que se lembre de continuar acreditando em você, mesmo que seja só um pouquinho. Às vezes, quando a nossa própria força parece faltar, a gente precisa pegar emprestada a força de quem acredita na gente. Então, se algum dia você não conseguir enxergar o seu próprio potencial, pode lembrar que **eu enxergo.** 🤍

Quero que você nunca se esqueça do quanto é especial. Do quanto sua presença pode iluminar um dia, arrancar um sorriso e deixar uma lembrança bonita mesmo sem perceber.

E se algum dia você duvidar do seu próprio valor, espero que se lembre que existe alguém aqui que te enxerga com muito carinho, que torce por você de verdade e que é genuinamente feliz por ter te conhecido.

Você é uma daquelas pessoas que a gente guarda em um cantinho especial do coração. 🌷

Eu espero que a vida seja muito gentil com você, porque você merece coisas bonitas. E espero também que você nunca desista de si mesma, porque **ainda há muita coisa bonita esperando por você.**

Talvez hoje você não esteja enxergando, mas eu espero que um dia você olhe para trás e perceba que aquele momento que tanto te fez duvidar de si mesma era apenas uma parte do caminho, não o lugar onde a sua história terminou.

**Continue. No seu tempo, do seu jeito, mas continue. Eu acredito em você. Sempre vou torcer para ver você realizando tudo aquilo que deseja e, principalmente, nunca se esquecendo da pessoa incrível que você é. 🤍**`;


    // ==========================================
    // TROCAR DE TELA
    // ==========================================

    function switchScreen(from, to) {

        from.classList.remove("active");

        setTimeout(function () {

            to.classList.add("active");

        }, 400);
    }


    // ==========================================
    // CRIAR PARTÍCULA
    // ==========================================

    function createParticle() {

        const particle =
            document.createElement("span");

        particle.className = "particle";


        const choices = [
            "♡",
            "♥",
            "🌸",
            "🌷",
            "✿",
            "✨"
        ];


        particle.textContent =
            choices[
                Math.floor(
                    Math.random() * choices.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.fontSize =
            (12 + Math.random() * 18) + "px";


        particle.style.animationDuration =
            (6 + Math.random() * 6) + "s";


        particle.style.animationDelay =
            (Math.random() * 1.5) + "s";


        particles.appendChild(particle);


        setTimeout(function () {

            particle.remove();

        }, 13000);
    }


    // ==========================================
    // CHUVA DE PARTÍCULAS
    // ==========================================

    function startParticles(intense) {

        const amount =
            intense ? 70 : 25;


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            setTimeout(function () {

                createParticle();

            }, i * (
                intense
                    ? 55
                    : 180
            ));
        }
    }


    // ==========================================
    // CONVERTER **TEXTO** EM NEGRITO
    // ==========================================

    function formatText(text) {

        const parts =
            text.split("**");

        let html = "";


        parts.forEach(function (part, index) {

            if (index % 2 === 1) {

                html +=
                    "<strong>" +
                    part +
                    "</strong>";

            } else {

                html += part;
            }
        });


        return html;
    }


    // ==========================================
    // EFEITO DE DIGITAÇÃO
    // ==========================================

    function typeWriter() {

        let i = 0;

        const speed = 16;


        typedMessage.innerHTML = "";

        continueBtn.classList.add(
            "hidden"
        );


        function write() {

            if (i < text.length) {

                const currentText =
                    text.substring(
                        0,
                        i + 1
                    );


                typedMessage.innerHTML =
                    formatText(
                        currentText
                    );


                i++;


                setTimeout(
                    write,
                    speed
                );

            } else {

                setTimeout(function () {

                    continueBtn.classList.remove(
                        "hidden"
                    );

                }, 900);
            }
        }


        write();
    }


    // ==========================================
    // INICIAR MÚSICA
    // ==========================================

    function startMusic() {

        if (!backgroundMusic) {
            return;
        }


        backgroundMusic.volume = 0.55;


        const playPromise =
            backgroundMusic.play();


        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                function (error) {

                    console.log(
                        "A música não pôde iniciar automaticamente:",
                        error
                    );

                }
            );
        }
    }


    // ==========================================
    // BOTÃO "APERTE AQUI"
    // ==========================================

    openBtn.addEventListener(
        "click",
        function () {

            startMusic();


            startParticles(false);


            switchScreen(
                intro,
                message
            );


            setTimeout(function () {

                typeWriter();

            }, 900);
        }
    );


    // ==========================================
    // BOTÃO "CONTINUE"
    // ==========================================

    continueBtn.addEventListener(
        "click",
        function () {

            continueBtn.classList.add(
                "hidden"
            );


            switchScreen(
                message,
                finalScreen
            );


            // Aparece o "Eu te amo"

            setTimeout(function () {

                love.classList.remove(
                    "hidden"
                );

            }, 1500);


            // Chuva de flores e corações

            setTimeout(function () {

                startParticles(true);

            }, 1300);


            setTimeout(function () {

                startParticles(true);

            }, 2800);


            setTimeout(function () {

                startParticles(true);

            }, 4500);


            setTimeout(function () {

                startParticles(true);

            }, 6500);
        }
    );


    // ==========================================
    // PARTÍCULAS SUAVES
    // ==========================================

    setInterval(function () {

        const currentScreen =
            document.querySelector(
                ".screen.active"
            );


        if (
            currentScreen &&
            currentScreen !== finalScreen
        ) {

            createParticle();
        }

    }, 800);

});