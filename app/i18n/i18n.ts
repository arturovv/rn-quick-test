import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js"
import en from "./locales/en.json"
import es from "./locales/es.json"

i18n.fallbacks = true
i18n.defaultLocale = "en"
i18n.translations = { en, es }

const locales = RNLocalize.getLocales();
export let country = null;

if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageTag;
  if(i18n.locale.indexOf('-') !== -1) {
    country = i18n.locale.substring(3);
    i18n.locale = i18n.locale.substring(0,2);
  } else {
    country = i18n.locale;
  }
}

i18n.missingTranslation = () => undefined

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
type DefaultLocale = typeof en
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]
