// cms/symbols/meta.ts
var meta = {
  label: "Meta",
  name: "meta",
  widget: "object",
  i18n: true,
  fields: [
    { label: "Titel", name: "title", widget: "string", i18n: true },
    { label: "Beschreibung", name: "description", widget: "text", i18n: true },
    {
      label: "Bild",
      name: "image",
      widget: "image",
      required: false,
      i18n: true
    },
    {
      label: "Keywords",
      name: "keywords",
      widget: "markdown",
      required: false,
      i18n: true
    }
  ]
};
var meta_default = meta;

// cms/symbols/link.ts
var externalLinkFields = [
  {
    label: "Text",
    i18n: true,
    name: "text",
    widget: "string"
  },
  {
    label: "url",
    i18n: true,
    name: "url",
    widget: "string",
    hint: "Die URL sollte nicht auf die selbe Seite zeigen, kann aber alles enthalten. Beispiele: mailto:kontakt@tortuga-webdesign.de oder https://tortuga-webdesign.de/referenzen/"
  }
];
var internalLinkFields = [
  {
    label: "Text",
    name: "text",
    i18n: true,
    widget: "string"
  },
  {
    label: "url",
    name: "url",
    i18n: true,
    widget: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt"
  }
];

// cms/symbols/header.ts
var header = {
  label: "Header",
  name: "header",
  i18n: true,
  widget: "object",
  fields: [
    { label: "Bild", name: "image", i18n: true, widget: "image" },
    { label: "Text", name: "text", i18n: true, widget: "text" },
    {
      label: "CTA",
      name: "cta",
      i18n: true,
      widget: "object",
      fields: internalLinkFields
    }
  ]
};
var header_default = header;

// cms/symbols/title.ts
var title = {
  label: "Titel",
  name: "title",
  widget: "string",
  i18n: true
};
var title_default = title;

// cms/symbols/image.ts
var image = {
  label: "Bild",
  name: "image",
  widget: "image",
  i18n: true
};
var image_default = image;

// cms/symbols/text.ts
var text = {
  label: "Text",
  name: "text",
  widget: "text",
  i18n: true
};
var text_default = text;

// cms/page/contact.ts
var contact = {
  file: "content/page/contact.json",
  label: "Kontakt",
  name: "contact",
  i18n: true,
  fields: [
    meta_default,
    header_default,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [title_default, image_default, text_default]
    },
    {
      label: "Benefits",
      name: "benefits",
      i18n: true,
      widget: "object",
      fields: [
        title_default,
        { label: "Untertitel", name: "subtitle", i18n: true, widget: "string" },
        {
          label: "Textbild",
          name: "textimage",
          i18n: true,
          widget: "image",
          required: false
        },
        {
          label: "Text Vorher",
          name: "pretext",
          i18n: true,
          widget: "text"
        },
        {
          label: "Punkte",
          name: "points",
          i18n: true,
          widget: "list",
          field: {
            label: "Punkt",
            name: "punkt",
            i18n: true,
            widget: "string"
          }
        },
        {
          label: "Text Nachher",
          name: "aftertext",
          i18n: true,
          widget: "text"
        },
        image_default
      ]
    },
    {
      label: "Formular",
      name: "form",
      i18n: true,
      widget: "object",
      fields: [
        title_default,
        image_default,
        {
          label: "E-Mail Text",
          name: "emailtext",
          i18n: true,
          widget: "string"
        },
        {
          label: "Telefon Text",
          name: "phonetext",
          i18n: true,
          widget: "string"
        },
        {
          label: "Datenschutz Text",
          name: "markdown",
          i18n: true,
          widget: "markdown"
        }
      ]
    }
  ]
};
var contact_default = contact;

// cms/symbols/cta.ts
var cta = {
  label: "CTA",
  name: "cta",
  i18n: true,
  widget: "object",
  fields: internalLinkFields
};
var cta_default = cta;

// cms/page/customers.ts
var customers = {
  file: "content/page/customers.json",
  label: "Unsere Kunden",
  i18n: true,
  name: "customers",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        title_default,
        image_default,
        text_default,
        {
          label: "Text Vorher",
          name: "pretext",
          i18n: true,
          widget: "text"
        },
        {
          label: "Text Nachher",
          name: "aftertext",
          i18n: true,
          widget: "text"
        },
        {
          label: "Textbild",
          name: "textimage",
          i18n: true,
          widget: "image",
          required: false
        },
        cta_default
      ]
    },
    {
      label: "Kundenstimmen",
      name: "customers",
      i18n: true,
      widget: "object",
      fields: [title_default]
    }
  ]
};
var customers_default = customers;

// cms/symbols/customersSection.ts
var customersSection = {
  label: "Kunden",
  name: "customers",
  i18n: true,
  widget: "object",
  fields: [
    title_default,
    text_default,
    { label: "Kunde", name: "customer", i18n: true, widget: "string" },
    {
      label: "Unternehmen",
      name: "company",
      i18n: true,
      widget: "string",
      required: false
    },
    cta_default
  ]
};
var customersSection_default = customersSection;

// cms/symbols/markdown.ts
var markdown = {
  label: "Markdown",
  name: "markdown",
  i18n: true,
  widget: "markdown"
};
var markdown_default = markdown;

// cms/page/home.ts
var service = (n) => ({
  label: "Service",
  name: `service${n}`,
  i18n: true,
  widget: "object",
  fields: [title_default, text_default, cta_default]
});
var home = {
  file: "content/page/home.json",
  label: "Startseite",
  name: "home",
  i18n: true,
  fields: [
    meta_default,
    header_default,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [title_default, text_default, cta_default, image_default]
    },
    {
      label: "Wir sind",
      name: "about",
      i18n: true,
      widget: "object",
      fields: [
        { label: "Textbild", name: "textimage", i18n: true, widget: "image" },
        title_default,
        { label: "Untertitel", name: "subtitle", i18n: true, widget: "string" },
        markdown_default,
        cta_default,
        image_default
      ]
    },
    {
      label: "Marketingreise",
      name: "travel",
      i18n: true,
      widget: "object",
      fields: [
        title_default,
        {
          label: "Links",
          name: "links",
          i18n: true,
          widget: "list",
          fields: internalLinkFields
        },
        text_default,
        cta_default
      ]
    },
    {
      label: "Services",
      name: "services",
      i18n: true,
      widget: "object",
      fields: [title_default, service(1), service(2), service(3)]
    },
    customersSection_default
  ]
};
var home_default = home;

// cms/page/forYou.ts
var forYou = {
  file: "content/page/forYou.json",
  label: "F\xFCr dich",
  i18n: true,
  name: "forYou",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [title_default, image_default, text_default]
    },
    {
      label: "\xDCber uns",
      name: "about",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Textbild",
          name: "textimage",
          i18n: true,
          widget: "image",
          required: false
        },
        title_default,
        text_default,
        image_default,
        {
          label: "Zitat",
          name: "quote1",
          i18n: true,
          widget: "text"
        },
        {
          label: "Zitat",
          name: "quote2",
          i18n: true,
          widget: "text"
        },
        {
          label: "Nach Zitat",
          name: "afterquote",
          i18n: true,
          widget: "text"
        },
        cta_default
      ]
    },
    {
      label: "CTA",
      name: "cta",
      i18n: true,
      widget: "object",
      fields: [title_default, text_default, cta_default]
    }
  ]
};
var forYou_default = forYou;

// cms/page/services.ts
var services = {
  file: "content/page/services.json",
  label: "Services",
  i18n: true,
  name: "services",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        title_default,
        {
          label: "Links",
          name: "links",
          i18n: true,
          widget: "list",
          fields: internalLinkFields
        },
        text_default,
        cta_default
      ]
    },
    {
      label: "Services",
      name: "services",
      i18n: true,
      widget: "object",
      fields: [
        title_default,
        {
          label: "Services",
          name: "services",
          i18n: true,
          widget: "list",
          fields: [
            title_default,
            { label: "ID", name: "id", i18n: true, widget: "string" },
            {
              label: "Seite",
              name: "side",
              i18n: true,
              widget: "select",
              options: ["L", "R"]
            },
            markdown_default,
            {
              label: "Zitat",
              name: "quote",
              i18n: true,
              widget: "string",
              required: false
            },
            image_default,
            cta_default,
            {
              label: "Balkenfarbe",
              name: "color",
              i18n: true,
              widget: "string"
            }
          ]
        }
      ]
    },
    customersSection_default
  ]
};
var services_default = services;

// cms/symbols/headerSmall.ts
var headerSmall = {
  label: "Header",
  name: "header",
  i18n: true,
  widget: "object",
  fields: [
    { label: "Bild", name: "image", i18n: "translate", widget: "image" },
    {
      label: "Balkenfarbe",
      name: "color",
      widget: "string",
      i18n: "translate"
    }
  ]
};
var headerSmall_default = headerSmall;

// cms/page/strategyworkshop.ts
var strategyworkshop = {
  file: "content/page/strategyworkshop.json",
  label: "Strategieworkshop",
  i18n: true,
  name: "strategyworkshop",
  fields: [
    meta_default,
    headerSmall_default,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        title_default,
        text_default,
        { label: "Text Fett", name: "boldtext", i18n: true, widget: "text" },
        image_default,
        cta_default
      ]
    },
    {
      label: "Reise",
      name: "travel",
      i18n: true,
      widget: "object",
      fields: [title_default, image_default, cta_default]
    }
  ]
};
var strategyworkshop_default = strategyworkshop;

// cms/page/marketingstrategy.ts
var marketingstrategy = {
  file: "content/page/marketingstrategy.json",
  label: "Marketingstrategie",
  name: "marketingstrategy",
  i18n: true,
  fields: [
    meta_default,
    headerSmall_default,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [title_default, markdown_default, image_default, cta_default]
    },
    {
      label: "Reise",
      name: "travel",
      i18n: true,
      widget: "object",
      fields: [title_default, image_default, cta_default]
    }
  ]
};
var marketingstrategy_default = marketingstrategy;

// cms/symbols/svg.ts
var svg = {
  label: "SVG",
  name: "svg",
  widget: "string",
  i18n: true
};
var svg_default = svg;

// cms/page/salesmarketing.ts
var salesmarketing = {
  file: "content/page/salesmarketing.json",
  label: "Sales- & Marketingfunnel",
  i18n: true,
  name: "salesmarketing",
  fields: [
    meta_default,
    headerSmall_default,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [title_default, markdown_default, image_default, cta_default, svg_default]
    },
    {
      label: "Reise",
      name: "travel",
      i18n: true,
      widget: "object",
      fields: [title_default, image_default, cta_default]
    }
  ]
};
var salesmarketing_default = salesmarketing;

// cms/page/marketingcampaign.ts
var marketingcampaign = {
  file: "content/page/marketingcampaign.json",
  label: "Marketingkampagnen",
  name: "marketingcampaign",
  i18n: true,
  fields: [
    meta_default,
    headerSmall_default,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [title_default, markdown_default, image_default, svg_default, cta_default]
    },
    {
      label: "Reise",
      name: "travel",
      i18n: true,
      widget: "object",
      fields: [title_default, image_default, cta_default]
    }
  ]
};
var marketingcampaign_default = marketingcampaign;

// cms/page/starnews.ts
var starnews = {
  file: "content/page/starnews.json",
  label: "Star News",
  name: "starnews",
  i18n: true,
  fields: [
    meta_default,
    {
      label: "Start",
      name: "start",
      i18n: true,
      widget: "object",
      fields: [
        title_default,
        image_default,
        {
          label: "Artikel",
          name: "article",
          i18n: true,
          widget: "relation",
          collection: "article",
          value_field: "slug",
          display_fields: ["title"],
          search_fields: ["title"]
        },
        {
          label: "Button",
          name: "button",
          i18n: true,
          widget: "string"
        }
      ]
    },
    {
      label: "Seite",
      name: "aside",
      i18n: true,
      widget: "object",
      fields: [
        {
          label: "Titel Kategorien",
          name: "categories",
          i18n: true,
          widget: "string"
        },
        image_default,
        title_default,
        text_default,
        cta_default
      ]
    }
  ]
};
var starnews_default = starnews;

// cms/page/index.ts
var config = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  i18n: {
    structure: "single_file",
    locales: ["de", "en"]
  },
  editor: {
    preview: false
  },
  files: [
    home_default,
    services_default,
    strategyworkshop_default,
    marketingstrategy_default,
    salesmarketing_default,
    marketingcampaign_default,
    forYou_default,
    customers_default,
    starnews_default,
    contact_default
  ]
};
var page_default = config;

// cms/category/index.ts
var category = {
  name: "category",
  label: "Kategorien",
  label_singular: "Kategorie",
  extension: "json",
  editor: {
    preview: false
  },
  i18n: {
    structure: "single_file",
    locales: ["de", "en"]
  },
  folder: "content/category",
  slug: "{{slug}}",
  create: true,
  fields: [
    title_default,
    {
      label: "Slug",
      name: "slug",
      widget: "string",
      i18n: true
    }
  ]
};
var category_default = category;

// cms/setting/footer.ts
var link = {
  label: "Interner Link",
  name: "link",
  i18n: true,
  widget: "object",
  fields: internalLinkFields,
  collapsed: false
};
var text2 = {
  label: "Text",
  name: "text",
  i18n: true,
  widget: "object",
  fields: [{ label: "Text", name: "text", i18n: true, widget: "text" }]
};
var externalLink = {
  label: "Externer Link",
  name: "externalLink",
  i18n: true,
  widget: "object",
  fields: externalLinkFields,
  collapsed: false
};
var footer = {
  file: "content/setting/footer.json",
  label: "Footer",
  name: "footer",
  i18n: true,
  fields: [
    {
      label: "Bilder",
      name: "images",
      i18n: true,
      widget: "list",
      collapsed: false,
      field: { label: "Bild", name: "image", i18n: true, widget: "image" }
    },
    {
      label: "Zeile 1",
      name: "row1",
      i18n: true,
      widget: "object",
      collapsed: false,
      fields: [
        { label: "Copyright", name: "copyright", i18n: true, widget: "string" },
        {
          label: "Inhalt",
          name: "content",
          i18n: true,
          widget: "list",
          types: [link, externalLink, text2]
        }
      ]
    },
    {
      label: "Cookie-Button",
      name: "cookie",
      widget: "string",
      i18n: true
    },
    {
      label: "Zeile 2",
      name: "row2",
      i18n: true,
      widget: "list",
      collapsed: false,
      types: [link, externalLink, text2]
    }
  ]
};
var footer_default = footer;

// cms/setting/global.ts
var global = {
  file: "content/setting/global.json",
  label: "Global",
  name: "global",
  i18n: true,
  fields: [
    { label: "Favicon", name: "favicon", i18n: "translate", widget: "image" },
    {
      label: "E-Mail",
      name: "email",
      i18n: true,
      widget: "string"
    },
    {
      label: "Handy",
      name: "mobile",
      i18n: "translate",
      widget: "string"
    },
    {
      label: "Festnetz",
      name: "phone",
      i18n: "translate",
      widget: "string"
    },
    {
      label: "LinkedIn",
      name: "linkedin",
      i18n: "translate",
      widget: "string"
    },
    {
      label: "WhatsApp",
      name: "whatsapp",
      i18n: "translate",
      widget: "string"
    }
  ]
};
var global_default = global;

// cms/setting/navigation.ts
var link2 = {
  label: "Normales Item",
  name: "link",
  i18n: true,
  widget: "object",
  fields: internalLinkFields,
  collapsed: false
};
var links = {
  label: "Dropdown Item",
  name: "links",
  i18n: true,
  widget: "object",
  collapsed: false,
  fields: [
    {
      label: "Text",
      name: "text",
      i18n: true,
      widget: "string"
    },
    {
      label: "Links",
      name: "links",
      i18n: true,
      widget: "list",
      fields: internalLinkFields
    }
  ]
};
var navigation = {
  file: "content/setting/navigation.json",
  label: "Navigation",
  i18n: true,
  name: "navigation",
  fields: [
    {
      label: "Links",
      name: "links",
      i18n: true,
      widget: "list",
      collapsed: false,
      types: [link2, links]
    }
  ]
};
var navigation_default = navigation;

// cms/setting/rewrites.ts
var rewrites = {
  file: "content/setting/rewrites.json",
  label: "Rewrites",
  i18n: {
    structure: "single_file",
    locales: ["de"]
  },
  name: "rewrites",
  fields: [
    {
      label: "Rewrites",
      name: "rewrites",
      i18n: false,
      widget: "list",
      collapsed: false,
      fields: [
        { label: "From", name: "from", widget: "string", i18n: "duplicate" },
        { label: "To", name: "to", widget: "string", i18n: false }
      ]
    }
  ]
};
var rewrites_default = rewrites;

// cms/setting/index.ts
var setting = {
  name: "setting",
  label: "Einstellungen",
  label_singular: "Einstellung",
  delete: false,
  i18n: {
    structure: "single_file",
    locales: ["de", "en"]
  },
  editor: {
    preview: false
  },
  files: [global_default, navigation_default, footer_default, rewrites_default]
};
var setting_default = setting;

// cms/legal/index.ts
var legal = {
  name: "legal",
  label: "Rechtliches",
  label_singular: "Rechtliches",
  extension: "md",
  editor: {
    preview: false
  },
  folder: "content/legal",
  slug: "{{fields.slug}}",
  i18n: true,
  create: true,
  fields: [
    { label: "Titel", name: "title", i18n: true, widget: "string" },
    { label: "Slug", name: "slug", i18n: true, widget: "string" },
    { label: "Inhalt", name: "body", i18n: true, widget: "markdown" }
  ]
};
var legal_default = legal;

// cms/customer/index.ts
var customer = {
  name: "customer",
  label: "Kundenstimmen",
  label_singular: "Kundenstimme",
  editor: {
    preview: false
  },
  i18n: {
    structure: "single_file",
    locales: ["de", "en"]
  },
  extension: "json",
  folder: "content/customer",
  slug: "{{fields.customer}}",
  create: true,
  fields: [
    { label: "Text", name: "text", i18n: true, widget: "text" },
    { label: "Kunde", name: "customer", i18n: true, widget: "string" },
    {
      label: "Unternehmen",
      name: "company",
      i18n: true,
      widget: "string",
      required: false
    },
    { label: "Reihenfolge", name: "ordering", i18n: true, widget: "number" }
  ]
};
var customer_default = customer;

// cms/article/index.ts
var article = {
  name: "article",
  label: "Artikel",
  label_singular: "Artikel",
  i18n: {
    structure: "single_file",
    locales: ["de", "en"]
  },
  editor: {
    preview: false
  },
  extension: "json",
  folder: "content/article",
  slug: "{{fields.slug}}",
  create: true,
  fields: [
    {
      label: "Bild",
      name: "image",
      widget: "image",
      i18n: true,
      hint: "Erscheint auf der Detailseite, auf der der ganze Artikel zu sehen ist."
    },
    {
      label: "Bildnachweis",
      name: "credit",
      i18n: true,
      widget: "string",
      required: false
    },
    {
      label: "Preview Bild",
      name: "previewimage",
      i18n: true,
      widget: "image",
      hint: "Erscheint auf der Starnews Seite, auf der alle Artikel sind als Preview."
    },
    title_default,
    { label: "Slug", name: "slug", i18n: true, widget: "string" },
    {
      label: "Datum",
      name: "date",
      i18n: true,
      widget: "datetime",
      time_format: false
    },
    {
      label: "Kategorien",
      name: "categories",
      i18n: true,
      widget: "relation",
      multiple: true,
      collection: "category",
      search_fields: ["title"],
      value_field: "title"
    },
    // is archived article
    {
      label: "Archiviert",
      name: "isArchived",
      widget: "boolean",
      required: false
    },
    { label: "Auszug", name: "excerpt", i18n: true, widget: "text" },
    { label: "Inhalt", name: "markdown", i18n: true, widget: "markdown" }
  ]
};
var article_default = article;

// cms/config.ts
var config2 = {
  publish_mode: "editorial_workflow",
  // See https://www.netlifycms.org/docs/beta-features/#i18n-support
  i18n: {
    structure: "multiple_folders",
    locales: ["de", "en"],
    default_locale: "de"
  },
  // See https://www.netlifycms.org/docs/configuration-options/#backend
  backend: {
    name: "git-gateway",
    branch: "main",
    repo: "danielmoessner/bluestarmarketing.de"
  },
  // See https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository
  local_backend: true,
  // See https://www.netlifycms.org/docs/configuration-options/#locale
  locale: "de",
  // See https://www.netlifycms.org/docs/configuration-options/#display-url
  display_url: "https://bluestarmarketing.de",
  // See https://www.netlifycms.org/docs/configuration-options/#site-url
  site_url: "https://bluestarmarketing.de",
  // See https://www.netlifycms.org/docs/configuration-options/#media-folder
  media_folder: "/public/media",
  // See https://www.netlifycms.org/docs/configuration-options/#public-folder
  public_folder: "/media",
  // See https://www.netlifycms.org/docs/beta-features/#manual-initialization
  load_config_file: false,
  // See https://www.netlifycms.org/docs/collection-types/
  collections: [page_default, article_default, category_default, customer_default, setting_default, legal_default]
};
var config_default = config2;
export {
  config_default as default
};
