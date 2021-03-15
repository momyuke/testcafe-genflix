import xpathSelector from '../xpath-selector';

const WatchMovie = async t => {
    await t.navigateTo("https://genflix.co.id/login/email");
    const buttonSubmit = await xpathSelector(`//*[@id="root"]/div[2]/form/button`);

    await t.
    typeText("#email", "testing.genflix@gmail.com").
    typeText("#password", "Qwerty12#").
    click(buttonSubmit);

    await t
    .maximizeWindow()
    .click('body', {offsetX: 636, offsetY :241})
    .click(xpathSelector(`//*[@id="root"]/div[2]/div[1]/div[1]/div[2]/button`))
    .click('.shaka-controls-container', {offsetX : 42, offsetY : 582})
    .click('.shaka-controls-container', {offsetX: 192, offsetY :610})
    .wait(10000)
}

export default WatchMovie;