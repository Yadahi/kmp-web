import "vanilla-cookieconsent/src/cookieconsent.css";
import "vanilla-cookieconsent";

export default function initCookies() {
  const cc = window.initCookieConsent();
  cc.run({
    current_lang: "sk",
    autoclear_cookies: true, // default: false
    page_scripts: true, // default: false
    languages: {
      cs: {
        consent_modal: {
          title:
            "Keď kliknete na “Prijať všetky súbory cookies”, poskytnete tým súhlas na ich ukladanie na vašom zariadení, čo pomáha s navigáciou na stránke a s analýzou využitia webu.",
          description:
            "Udelený súhlas je možné kedykoľvek odvolať kliknutím na odkaz “Nastavenie cookies”.",
          primary_btn: {
            text: "Prijať všetky súbory cookies",
            role: "accept_all", // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: "Nastavenie cookies",
            role: "settings", // 'settings' or 'accept_necessary'
          },
        },
        settings_modal: {
          title: "Nastavenie cookies",
          save_settings_btn: "Uložiť nastavenie",
          accept_all_btn: "Povoliť všetko",
          reject_all_btn: "Zamietnuť všetky",
          close_btn_label: "Zatvoriť",
          cookie_table_headers: [
            { col1: "ID" },
            { col2: "Doména" },
            { col3: "Expirace" },
            { col4: "Účel" },
          ],
          blocks: [
            {
              title: "Predvoľby ochrany osobných údajov 📢",
              description:
                "Keď navštívite ktorúkoľvek internetovú stránku, táto stránka môže uložiť alebo obnoviť informácie o vašom prehliadači, najmä v podobe súborov cookie. Tieto informácie sa môžu týkať vás, vašich preferencií, vášho zariadenia alebo sa môžu použiť na to, aby stránka fungovala tak, ako očakávate. Tieto informácie vás zvyčajne neidentifikujú priamo, vďaka nim však môžete získať viac prispôsobený internetový obsah. Môžete si vybrať, že niektoré typy súborov cookie nepovolíte. Po kliknutí na nadpisy rôznych kategórií sa dozviete viac a zmeníte svoje predvolené nastavenia. Mali by ste však vedieť, že blokovanie niektorých súborov cookie môže ovplyvniť vašu skúsenosť so stránkou a služby, ktoré vám môžeme ponúknuť.",
            },
            {
              title: "Nevyhnutne potrebné súbory cookies",
              description:
                "Tieto súbory cookie sú potrebné na zabezpečenie funkčnosti internetovej stránky a nemožno ich v našich systémoch vypnúť. Zvyčajne sa nastavujú len ako reakcia na vami vykonané činnosti, ktoré predstavujú žiadosť súvisiacu so službami, ako je napríklad nastavenie preferencií ochrany osobných údajov, prihlasovanie alebo vypĺňanie formulárov. Svoj prehliadač môžete nastaviť tak, aby blokoval alebo vás upozorňoval na takéto súbory cookie, v takom prípade však nemusia niektoré časti stránky fungovať.",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
              },
            },
            {
              title: "Soubory cookie pro analýzu a zvýšení výkonu",
              description:
                "Tieto súbory cookie nám umožňujú určiť počet návštev a zdroje návštevnosti, aby sme mohli merať a vylepšovať výkon našej stránky. Pomáhajú nám zistiť, ktoré stránky sú najviac a najmenej populárne, a vidieť, koľko návštevníkov sa na stránke pohybuje. Všetky informácie, ktoré tieto súbory cookie zbierajú, sú súhrnné, a teda anonymné. Ak tieto súbory cookie nepovolíte, nebudeme vedieť, kedy ste našu stránku navštívili.",
              toggle: {
                value: "analytics", // your cookie category
                enabled: false,
                readonly: false,
              },
              cookie_table: [
                // list of all expected cookies
                {
                  col1: "^_ga", // match all cookies starting with "_ga"
                  col2: "google.com",
                  col3: "2 roky",
                  col4: "GoogleAnalytics: Používá se k rozeznávání uživatelů.",
                  is_regex: true,
                },
                {
                  col1: "_gid",
                  col2: "google.com",
                  col3: "1 rok",
                  col4: "GoogleAnalytics: Používá se k rozeznávání uživatelů.",
                },
              ],
            },
            {
              title: "Další informace",
              description:
                '<a target="_blank" href="https://cookiepedia.co.uk/giving-consent-to-cookies" class="cc-link">Informácie o súboroch cookies</a>',
            },
          ],
        },
      },
    },
  });
}
