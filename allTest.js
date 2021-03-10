import { Selector } from 'testcafe';
import xpathSelector from './xpath-selector';
import LogPositive from './Testcase/Log-Positive';


fixture `Getting Started`
    .page `https://genflix.co.id`;

    test(`[Genflix] Test Login and Logout with Email`, async t => {
        await LogPositive.LogEmail(t);
    });

    test(`[Genflix] Test Login and Logout with Google`, async t => {
        LogPositive.LogGoogle(t)

    });

    test(`[Genflix] Test Login and Logout with Facebook `, async t => {
        LogPositive.LogFacebook(t)
    });

    




