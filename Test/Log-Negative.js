import xpathSelector from '../xpath-selector';

const LogEmailNegative = async (t) => {

    await t.navigateTo("https://genflix.co.id/login/email")
    const buttonSubmit = await xpathSelector(`//*[@id="root"]/div[2]/form/button`);

    await t.click(buttonSubmit)
    
    const errorMessage = await xpathSelector(`//*[@id="root"]/div[2]/form/div`);
    
    await t.expect(errorMessage.innerText).eql(`Invalid email!`)

    await t
    .typeText("#email", "testing.genflix@gmail.com")
    .click(buttonSubmit)
    .expect(errorMessage.innerText).eql(`Invalid password!`)

    await t
    .typeText("#password", "hahaha")
    .click(buttonSubmit)
    .expect(errorMessage.innerText).eql(`Invalid Credentials`)
    
}

const LogFacebookNegative = async (t) => {
    await t
    .navigateTo(`https://genflix.co.id/login`)
    .click( xpathSelector(`//*[@id="root"]/div[2]/button[3]`))
    .closeWindow()

    const errorMessage = await xpathSelector(`//*[@id="root"]/div[2]/div[1]`);
    
    await t
    .expect(errorMessage.innerText).eql(`General Facebook Login Error`);
}

const LogGoogleNegative = async (t) => {
    await t
    .navigateTo(`https://genflix.co.id/login`)
    .click(xpathSelector(`//*[@id="root"]/div[2]/button[4]`))
    .closeWindow()

    const errorMessage = await xpathSelector(`//*[@id="root"]/div[2]/div[1]`);

    await t
    .expect(errorMessage.innerText).eql(`popup_closed_by_user`)
}

export default {LogGoogleNegative, LogEmailNegative, LogFacebookNegative};