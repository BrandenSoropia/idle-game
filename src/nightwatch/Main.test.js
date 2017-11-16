module.exports = {
    /**
     * Expect the score to increment by default amount per second.
     * Test checks score over 2 seconds.
     */
    'Test count appears' : function (browser) {
        browser
            .url('http://localhost:3000/')
            .expect.element('span.score')
            .to.be.visible
            .before(1000);

        browser.end();
    }
};