import xpathSelector from '../xpath-selector';

const LogEmail = async t => {
    await t.navigateTo("https://genflix.co.id/login/email");
    const buttonSubmit = await xpathSelector(`//*[@id="root"]/div[2]/form/button`);

    await t.
    typeText("#email", "testing.genflix@gmail.com").
    typeText("#password", "Qwerty12#").
    click(buttonSubmit);

    await t.
    click(xpathSelector(`//*[@id="root"]/div[1]/ul[2]/li[2]/img`)).
    click(xpathSelector(`//*[@id="root"]/div[1]/div[2]/div[2]/div[4]/div[2]`))
}

const LogGoogle = async t => {
    await t.
    navigateTo(`https://medium.com`)
    .click( xpathSelector(`//*[@id="top-nav-sign-in-cta-desktop"]/div/p/span/a`))
    .click(xpathSelector(`//*[@id="susi-modal-google-button"]/a`))
    .typeText('#identifierId', "teguh.triprasetya@sinarmasmining.com")
    .click(`#identifierNext`)
    .typeText(`#password`, "Teguh121@!")
    .click(`#passwordNext`)

    await t.navigateTo(`https://genflix.co.id/login`)
    .click(xpathSelector(`//*[@id="root"]/div[2]/button[4]`))
    .click(xpathSelector(`//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div/div/ul/li[1]/div`))

    await t
    .expect(xpathSelector(`//*[@id="root"]/div[1]/ul[2]/li[2]/img`)).ok()
}

const LogFacebook = async t => {
    await t
    .navigateTo(`https://genflix.co.id/login`)
    .click( xpathSelector(`//*[@id="root"]/div[2]/button[3]`))
    .typeText("#email", "triprasetyat@gmail.com")
    .typeText("#pass", "Teguh121@!")
    .pressKey("enter")

    await t.
    click( xpathSelector(`//*[@id="root"]/div[1]/ul[2]/li[2]/img`)).
    click( xpathSelector(`//*[@id="root"]/div[1]/div[2]/div[2]/div[4]/div[2]`))
}
export default {LogEmail, LogFacebook, LogGoogle};