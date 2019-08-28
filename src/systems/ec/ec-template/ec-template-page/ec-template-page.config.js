/* eslint-disable import/no-extraneous-dependencies */
const languages = require('@ecl/ec-component-language-list/languages.json');

module.exports = {
  title: 'Pages',
  label: 'Pages',
  status: 'ready',
  tags: ['template'],
  context: {
    global: {
      language: 'en',
    },
    languages,
  },
  default: 'simple',
  variants: [
    {
      name: 'simple',
      label: 'Simple',
      context: {
        page_header: {
          breadcrumb: [
            {
              href: 'https://ec.europa.eu/commission/index_en',
              label: 'Home',
            },
            {
              href: '../../example.html#',
              label: 'Example',
            },
            { label: 'Business, Economy, Euro' },
          ],
          title: 'Business, Economy, Euro',
          introduction:
            'EU economy, finance and the euro, and practical information for EU businesses and entrepreneurs on product safety, environmental regulations, trade with non-EU countries and competition rules.',
        },
        footer: {
          corporate_footer: {
            about_ec: {
              title: 'European Commission',
              items: [
                {
                  href: 'https://ec.europa.eu/info/index',
                  label: 'European Commission website',
                },
              ],
            },
            social_media: {
              title: 'Follow the European Commission',
              items: [
                {
                  type: 'social-network',
                  icon: 'facebook',
                  link: {
                    href: '../../example.html#',
                    label: 'Facebook',
                  },
                },
                {
                  type: 'social-network',
                  icon: 'twitter',
                  link: {
                    href: '../../example.html#',
                    label: 'Twitter',
                  },
                },
                {
                  type: 'external',
                  link: {
                    href: '../../example.html#',
                    label: 'Other social media',
                  },
                },
              ],
            },
            about_eu: {
              title: 'European Union',
              items: [
                {
                  href: '../../example.html#',
                  label: 'EU institutions',
                },
                {
                  href: '../../example.html#',
                  label: 'European Union',
                },
              ],
            },
            bottom_links: [
              {
                href:
                  'http://ec.europa.eu/info/about-commissions-new-web-presence_en',
                label: "About the Commission's new web presence",
              },
              {
                href: 'https://ec.europa.eu/info/language-policy_en',
                label: 'Language policy',
              },
              {
                href: 'http://ec.europa.eu/info/resources-partners_en',
                label: 'Resources for partners',
              },
              {
                href: 'http://ec.europa.eu/info/cookies_en',
                label: 'Cookies',
              },
              {
                href: 'https://ec.europa.eu/info/privacy-policy_en',
                label: 'Privacy policy',
              },
              {
                href: 'http://ec.europa.eu/info/legal-notice_en',
                label: 'Legal notice',
              },
              {
                href: 'http://ec.europa.eu/info/contact_en',
                label: 'Contact',
              },
            ],
          },
        },
        _demo: {
          scripts: `document.addEventListener('DOMContentLoaded', function () {
            ECL.initBreadcrumb();
            ECL.dialogs({
              dialogOverlayId: 'ecl-overlay-language-list',
              triggerElementsSelector: '#ecl-lang-select-sites__overlay'
            });
          });`,
        },
      },
    },
    {
      name: 'with-menu',
      label: 'Page with menu',
      context: {
        page_header: {
          breadcrumb: [
            {
              href: 'https://ec.europa.eu/commission/index_en',
              label: 'Home',
            },
            {
              href: '../../example.html#',
              label: 'Example',
            },
            { label: 'Business, Economy, Euro' },
          ],
          identity: 'Europa Component Library',
        },
        menu: {
          menu_label: 'Menu',
          menu_aria_label: 'Main Navigation',
          links: [
            {
              label: 'Home',
              href: '../../example.html#home',
            },
            {
              label: 'Policy',
              href: '../../example.html#item1',
              is_active: true,
              children_links: [
                {
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item1-1-1',
                    },
                    {
                      label:
                        'Sub item 2 with a very very very (very) long label',
                      href: '../../example.html#item1-1-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item1-1-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item1-1-4',
                      is_active: true,
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item1-1-5',
                    },
                  ],
                },
                {
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item1-2-1',
                    },
                    {
                      label: 'Sub item 2',
                      href: '../../example.html#item1-2-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item1-2-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item1-2-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item1-2-5',
                    },
                  ],
                },
                {
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item1-3-1',
                    },
                    {
                      label: 'Sub item 2',
                      href: '../../example.html#item1-3-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item1-3-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item1-3-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item1-3-5',
                    },
                  ],
                },
                {
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item1-4-1',
                    },
                    {
                      label: 'Sub item 2',
                      href: '../../example.html#item1-4-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item1-4-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item1-4-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item1-4-5',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Advisor Bodies',
              href: '../../example.html#item2',
              children_links: [
                {
                  title: 'Optional title 1',
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item2-1-1',
                    },
                    {
                      label:
                        'Sub item 2 with a very very very (very) long label',
                      href: '../../example.html#item2-1-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item2-1-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item2-1-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item2-1-5',
                    },
                  ],
                },
                {
                  title: 'Optional title 2',
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item2-2-1',
                    },
                    {
                      label: 'Sub item 2',
                      href: '../../example.html#item2-2-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item2-2-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item2-2-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item2-2-5',
                    },
                  ],
                },
              ],
            },
            {
              label: 'News & Events',
              href: '../../example.html#item3',
              children_links: [
                {
                  title: 'Optional title 1',
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item3-1-1',
                    },
                    {
                      label:
                        'Sub item 2 with a very very very (very) long label',
                      href: '../../example.html#item3-1-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item3-1-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item3-1-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item3-1-5',
                    },
                  ],
                },
                {
                  title: 'Optional title 2',
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item3-2-1',
                    },
                    {
                      label: 'Sub item 2',
                      href: '../../example.html#item3-2-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item3-2-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item3-2-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item3-2-5',
                    },
                  ],
                },
                {
                  title: 'Optional title 3',
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item3-3-1',
                    },
                    {
                      label: 'Sub item 2',
                      href: '../../example.html#item3-3-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item3-3-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item3-3-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item3-3-5',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Contracts and Fundings',
              href: '../../example.html#item4',
              children_links: [
                {
                  title: 'Optional title 1',
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item4-1-1',
                    },
                    {
                      label:
                        'Sub item 2 with a very very very (very) long label',
                      href: '../../example.html#item4-1-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item4-1-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item4-1-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item4-1-5',
                    },
                  ],
                },
                {
                  title: 'Optional title 2',
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item4-2-1',
                    },
                    {
                      label: 'Sub item 2',
                      href: '../../example.html#item4-2-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item4-2-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item4-2-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item4-2-5',
                    },
                  ],
                },
                {
                  title: 'Optional title 3',
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item4-3-1',
                    },
                    {
                      label: 'Sub item 2',
                      href: '../../example.html#item4-3-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item4-3-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item4-3-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item4-3-5',
                    },
                  ],
                },
                {
                  title: 'Optional title 4',
                  links: [
                    {
                      label: 'Sub item 1',
                      href: '../../example.html#item4-4-1',
                    },
                    {
                      label: 'Sub item 2',
                      href: '../../example.html#item4-4-2',
                    },
                    {
                      label: 'Sub item 3',
                      href: '../../example.html#item4-4-3',
                    },
                    {
                      label: 'Sub item 4',
                      href: '../../example.html#item4-4-4',
                    },
                    {
                      label: 'Sub item 5',
                      href: '../../example.html#item4-4-5',
                    },
                  ],
                },
              ],
            },
          ],
        },
        footer: {
          custom_footer: {
            identity: 'Europa Component Library',
            social_links: {
              label: 'Follow us:',
              links: [
                {
                  type: 'social-network',
                  icon: 'facebook',
                  link: {
                    href: '../../example.html#',
                    label: 'Facebook',
                  },
                },
                {
                  type: 'social-network',
                  icon: 'twitter',
                  link: {
                    href: '../../example.html#',
                    label: 'Twitter',
                  },
                },
                {
                  type: 'external',
                  link: {
                    href: '../../example.html#',
                    label: 'Other social media',
                  },
                },
              ],
            },
            other_links: {
              links: [
                {
                  link: {
                    href: '../../example.html#',
                    label: 'Contact',
                  },
                },
                {
                  link: {
                    href: '../../example.html#',
                    label: 'Site map',
                  },
                },
              ],
            },
          },
          corporate_footer: {
            about_ec: {
              title: 'European Commission',
              items: [
                {
                  href: 'https://ec.europa.eu/info/index',
                  label: 'European Commission website',
                },
              ],
            },
            social_media: {
              title: 'Follow the European Commission',
              items: [
                {
                  type: 'social-network',
                  icon: 'facebook',
                  link: {
                    href: '../../example.html#',
                    label: 'Facebook',
                  },
                },
                {
                  type: 'social-network',
                  icon: 'twitter',
                  link: {
                    href: '../../example.html#',
                    label: 'Twitter',
                  },
                },
                {
                  type: 'external',
                  link: {
                    href: '../../example.html#',
                    label: 'Other social media',
                  },
                },
              ],
            },
            about_eu: {
              title: 'European Union',
              items: [
                {
                  href: '../../example.html#',
                  label: 'EU institutions',
                },
                {
                  href: '../../example.html#',
                  label: 'European Union',
                },
              ],
            },
            bottom_links: [
              {
                href:
                  'http://ec.europa.eu/info/about-commissions-new-web-presence_en',
                label: "About the Commission's new web presence",
              },
              {
                href: 'https://ec.europa.eu/info/language-policy_en',
                label: 'Language policy',
              },
              {
                href: 'http://ec.europa.eu/info/resources-partners_en',
                label: 'Resources for partners',
              },
              {
                href: 'http://ec.europa.eu/info/cookies_en',
                label: 'Cookies',
              },
              {
                href: 'https://ec.europa.eu/info/privacy-policy_en',
                label: 'Privacy policy',
              },
              {
                href: 'http://ec.europa.eu/info/legal-notice_en',
                label: 'Legal notice',
              },
              {
                href: 'http://ec.europa.eu/info/contact_en',
                label: 'Contact',
              },
            ],
          },
        },
        _demo: {
          scripts: `document.addEventListener('DOMContentLoaded', function () {
            ECL.initBreadcrumb();
            ECL.megamenu();
            ECL.dialogs({
              dialogOverlayId: 'ecl-overlay-language-list',
              triggerElementsSelector: '#ecl-lang-select-sites__overlay'
            });
          });`,
        },
      },
    },
  ],
};
