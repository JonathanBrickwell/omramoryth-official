var letterAnimation = (function() {

    let titles = [
        `<span class="highlight">&lt;</span>
            Kristijan Fištrek
            <span class="highlight">/&gt;</span>`,
           `<span class="highlight">&lt;</span>
            Web Developer
            <span class="highlight">/&gt;</span>`,
            `<span class="highlight">&lt;</span>
            Android App Developer
            <span class="highlight">/&gt;</span>`
    ];

    var mainTitleElement = document.querySelector(".main-title");

    var _render = function() {
        for (let index = 0; index < titles.length;index++) {
            setInterval(() => {
                console.log(titles[index]);
                
            }, 2000);
            
        }
    }

    return {
        init: _render
    }

})();

letterAnimation.init();