new Vue({
    el: '#app',
    data: {
        films: [
            { id: 2, title: 'Past Lives', image: '2.png' },
            { id: 3, title: 'Polite Society', image: '3.png' },
            { id: 4, title: 'Robots', image: '4.png' },
            { id: 5, title: '', image: '5.png' },
            { id: 6, title: 'Talk to Me', image: '6.png' },
            { id: 7, title: 'Air', image: '7.png' },
            { id: 8, title: 'Are You There God? It’s Me, Margaret.', image: '8.png' },
            { id: 9, title: 'Guardians of the Galaxy Vol. 3', image: '9.png' },
            { id: 10, title: 'Big George Foreman', image: '10.png' },
            { id: 11, title: 'Black Bird', image: '11.png' },
            { id: 12, title: 'Transformers: Rise of the Beasts', image: '12.png' },
            { id: 13, title: 'Beau is Afraid', image: '13.png' }
        ]
    },
    methods: {
        scrollToNextSet() {
            const wrapper = this.$refs.swimlaneContentContainer;
            const content = this.$refs.swimlaneContent;
            const scrollLength = content.scrollWidth - wrapper.clientWidth;
            let currentScroll = wrapper.scrollLeft;
            const scrollDuration = 50;

            const startTime = performance.now();

            function scroll(timestamp) {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / scrollDuration, 1);
                wrapper.scrollLeft = currentScroll + progress * (scrollLength - currentScroll);
                if (elapsed < scrollDuration) {
                    window.requestAnimationFrame(scroll);
                }
            }

            window.requestAnimationFrame(scroll);
        }
    }
});
