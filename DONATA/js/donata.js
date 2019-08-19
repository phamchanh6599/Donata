new Vue({
    el: '#container',
    data: {
        isMenuOpen: true,
        imgSlider: ['./images/slider/slider-1.jpg', './images/slider/slider-2.jpg', './images/slider/slider-3.jpg'],
        firstImg: undefined,
        secondImg: undefined
    },
    created: function() {
        this.firstImg = this.imgSlider[0];
        this.secondImg = this.imgSlider[1];
    },
    watch: {

    },
    methods: {
        toggle: function() {
            this.isMenuOpen = !this.isMenuOpen;
        },

        slide: function(type) {
            let firstIdxImg = this.imgSlider.indexOf(this.firstImg);
            let secondIdxImg = this.imgSlider.indexOf(this.secondImg);
            let lengthImg = this.imgSlider.length;

            switch (type) {
                case 'next':
                    this.firstImg = this.imgSlider[secondIdxImg];

                    if (secondIdxImg != lengthImg - 1)  this.secondImg = this.imgSlider[secondIdxImg + 1];
                    else  this.secondImg = this.imgSlider[0];
                break;
                case 'back':
                    firstIdxImg != 0 && (this.firstImg = this.imgSlider[firstIdxImg - 1]);
                    firstIdxImg == 0 && (this.firstImg = this.imgSlider[lengthImg - 1]);
                    this.secondImg = this.imgSlider[firstIdxImg];
                break;
            }
        }
    }
})
