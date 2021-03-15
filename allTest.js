import LogPositive from './Test/Log-Positive';
import WatchPositive from './Test/Watch-Positive';
import LogNegative from './Test/Log-Negative';


fixture `Getting Started`
    .page `https://genflix.co.id`;

    test(`[Genflix] Test Login and Logout with Email`, async t => {
        await LogPositive.LogEmail(t);
    });

    test(`[Genflix] Negative Test Login with Email`, async t => {
        await LogNegative.LogEmailNegative(t)
    });

    test (`[Genflix] Negative Test Login with Google`, async t => {
        await LogNegative.LogGoogleNegative(t)
    })

    test (`[Genflix] Negative Test Login with Facebook `, async t => {
        await LogNegative.LogFacebookNegative(t)
    })

    test(`[Genflix] Test Login and Logout with Google`, async t => {
        await LogPositive.LogGoogle(t)

    });

    test(`[Genflix] Test Login and Logout with Facebook `, async t => {
        await LogPositive.LogFacebook(t)
    });


    test(`[Genflix] Test Watching Movie`, async t => {
        await WatchPositive(t);
    });



    




