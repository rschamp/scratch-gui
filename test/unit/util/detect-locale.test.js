import {detectLocale} from '../../../src/lib/detect-locale.js';

const supportedLocales = ['en', 'es', 'pt-br', 'de', 'it'];

Object.defineProperty(window.navigator,
    'language',
    {value: 'en-US', configurable: true}
);

describe('detectLocale', () => {
    test('uses locale from the URL when present', () => {
        jsdom.reconfigure({url: 'http://localhost/?locale=pt-br'});
        expect(detectLocale(supportedLocales)).toEqual('pt-br');
    });

    test('is case insensitive', () => {
        jsdom.reconfigure({url: 'http://localhost/?locale=pt-BR'});
        expect(detectLocale(supportedLocales)).toEqual('pt-br');
    });

    test('also accepts lang from the URL when present', () => {
        jsdom.reconfigure({url: 'http://localhost/?lang=it'});
        expect(detectLocale(supportedLocales)).toEqual('it');
    });

    test('ignores unsupported locales', () => {
        jsdom.reconfigure({url: 'http://localhost/?lang=sv'});
        expect(detectLocale(supportedLocales)).toEqual('en');
    });

    test('ignores other parameters', () => {
        jsdom.reconfigure({url: 'http://localhost/?enable=language'});
        expect(detectLocale(supportedLocales)).toEqual('en');
    });

    test('uses navigator language property for default if supported', () => {
        Object.defineProperty(window.navigator,
            'language',
            {value: 'pt-BR'}
        );
        expect(detectLocale(supportedLocales)).toEqual('pt-br');
    });

    test('ignores navigator language property if unsupported', () => {
        Object.defineProperty(window.navigator,
            'language',
            {value: 'da'}
        );
        expect(detectLocale(supportedLocales)).toEqual('en');
    });

    test('works with an empty locale', () => {
        jsdom.reconfigure({url: 'http://localhost/?locale='});
        expect(detectLocale(supportedLocales)).toEqual('en');
    });

    test('if multiple, uses the first locale', () => {
        jsdom.reconfigure({url: 'http://localhost/?locale=de&locale=en'});
        expect(detectLocale(supportedLocales)).toEqual('de');
    });
});
