// cms/symbols/meta.ts
var meta = {
  label: "Meta",
  name: "meta",
  widget: "object",
  fields: [
    { label: "Titel", name: "title", widget: "string" },
    { label: "Beschreibung", name: "description", widget: "text" },
    { label: "Bild", name: "image", widget: "image", required: false },
    {
      label: "Keywords",
      name: "keywords",
      widget: "markdown",
      required: false
    }
  ]
};
var meta_default = meta;

// cms/symbols/link.ts
var internalLinkFields = [
  {
    label: "Text",
    name: "text",
    type: "string"
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt"
  }
];

// cms/symbols/header.ts
var header = {
  label: "Header",
  name: "header",
  widget: "object",
  fields: [
    { label: "Bild", name: "image", widget: "image" },
    { label: "Text", name: "text", widget: "text" },
    {
      label: "CTA",
      name: "cta",
      widget: "object",
      fields: internalLinkFields
    }
  ]
};
var header_default = header;

// cms/symbols/title.ts
var title = { label: "Titel", name: "title", widget: "string" };
var title_default = title;

// cms/symbols/image.ts
var image = { label: "Bild", name: "image", widget: "image" };
var image_default = image;

// cms/symbols/text.ts
var text = { label: "Text", name: "text", widget: "text" };
var text_default = text;

// cms/page/contact.ts
var contact = {
  file: "content/page/contact.json",
  label: "Kontakt",
  name: "contact",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [title_default, image_default, text_default]
    },
    {
      label: "Benefits",
      name: "benefits",
      widget: "object",
      fields: [
        title_default,
        { label: "Untertitel", name: "subtitle", widget: "string" },
        {
          label: "Textbild",
          name: "textimage",
          widget: "image",
          required: false
        },
        {
          label: "Text Vorher",
          name: "pretext",
          widget: "text"
        },
        {
          label: "Punkte",
          name: "points",
          widget: "list",
          field: { label: "Punkt", name: "punkt", widget: "string" }
        },
        {
          label: "Text Nachher",
          name: "aftertext",
          widget: "text"
        },
        image_default
      ]
    },
    {
      label: "Formular",
      name: "form",
      widget: "object",
      fields: [
        title_default,
        image_default,
        {
          label: "E-Mail Text",
          name: "emailtext",
          widget: "string"
        },
        {
          label: "Telefon Text",
          name: "phonetext",
          widget: "string"
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
  widget: "object",
  fields: internalLinkFields
};
var cta_default = cta;

// cms/page/customers.ts
var customers = {
  file: "content/page/customers.json",
  label: "Unsere Kunden",
  name: "customers",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        image_default,
        text_default,
        {
          label: "Text Vorher",
          name: "pretext",
          widget: "text"
        },
        {
          label: "Text Nachher",
          name: "aftertext",
          widget: "text"
        },
        {
          label: "Textbild",
          name: "textimage",
          widget: "image",
          required: false
        },
        cta_default
      ]
    },
    {
      label: "Kundenstimmen",
      name: "customers",
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
  widget: "object",
  fields: [
    title_default,
    text_default,
    { label: "Kunde", name: "customer", widget: "string" },
    {
      label: "Unternehmen",
      name: "company",
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
  widget: "markdown"
};
var markdown_default = markdown;

// cms/symbols/svg.ts
var svg = { label: "SVG", name: "svg", widget: "string" };
var svg_default = svg;

// cms/page/home.ts
var service = (n) => ({
  label: "Service",
  name: `service${n}`,
  widget: "object",
  fields: [title_default, text_default, cta_default]
});
var home = {
  file: "content/page/home.json",
  label: "Startseite",
  name: "home",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [title_default, text_default, cta_default, svg_default]
    },
    {
      label: "Wir sind",
      name: "about",
      widget: "object",
      fields: [
        { label: "Textbild", name: "textimage", widget: "image" },
        title_default,
        { label: "Untertitel", name: "subtitle", widget: "string" },
        markdown_default,
        cta_default,
        image_default
      ]
    },
    {
      label: "Marketingreise",
      name: "travel",
      widget: "object",
      fields: [
        title_default,
        {
          label: "Links",
          name: "links",
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
  name: "forYou",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [title_default, image_default, text_default]
    },
    {
      label: "\xDCber uns",
      name: "about",
      widget: "object",
      fields: [
        {
          label: "Textbild",
          name: "textimage",
          widget: "image",
          required: false
        },
        title_default,
        text_default,
        image_default,
        {
          label: "Zitat",
          name: "quote1",
          widget: "text"
        },
        {
          label: "Zitat",
          name: "quote2",
          widget: "text"
        },
        {
          label: "Nach Zitat",
          name: "afterquote",
          widget: "text"
        },
        cta_default
      ]
    },
    {
      label: "CTA",
      name: "cta",
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
  name: "services",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        {
          label: "Links",
          name: "links",
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
      widget: "object",
      fields: [
        title_default,
        {
          label: "Services",
          name: "services",
          widget: "list",
          fields: [
            title_default,
            { label: "ID", name: "id", widget: "string" },
            {
              label: "Seite",
              name: "side",
              widget: "select",
              options: ["L", "R"]
            },
            text_default,
            image_default,
            cta_default
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
  widget: "object",
  fields: [{ label: "Bild", name: "image", widget: "image" }]
};
var headerSmall_default = headerSmall;

// cms/page/strategyworkshop.ts
var strategyworkshop = {
  file: "content/page/strategyworkshop.json",
  label: "Strategieworkshop",
  name: "strategyworkshop",
  fields: [
    meta_default,
    headerSmall_default,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        text_default,
        { label: "Text Fett", name: "boldtext", widget: "text" },
        image_default,
        cta_default
      ]
    },
    {
      label: "Reise",
      name: "travel",
      widget: "object",
      fields: [title_default, svg_default, cta_default]
    }
  ]
};
var strategyworkshop_default = strategyworkshop;

// cms/page/marketingstrategy.ts
var marketingstrategy = {
  file: "content/page/marketingstrategy.json",
  label: "Marketingstrategie",
  name: "marketingstrategy",
  fields: [
    meta_default,
    headerSmall_default,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [title_default, markdown_default, image_default, cta_default]
    },
    {
      label: "Reise",
      name: "travel",
      widget: "object",
      fields: [title_default, svg_default, cta_default]
    }
  ]
};
var marketingstrategy_default = marketingstrategy;

// cms/page/salesmarketing.ts
var salesmarketing = {
  file: "content/page/salesmarketing.json",
  label: "Sales- & Marketingfunnel",
  name: "salesmarketing",
  fields: [
    meta_default,
    headerSmall_default,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [title_default, markdown_default, image_default, cta_default, svg_default]
    },
    {
      label: "Reise",
      name: "travel",
      widget: "object",
      fields: [title_default, svg_default, cta_default]
    }
  ]
};
var salesmarketing_default = salesmarketing;

// cms/page/marketingcampaign.ts
var marketingcampaign = {
  file: "content/page/marketingcampaign.json",
  label: "Marketingkampagnen",
  name: "marketingcampaign",
  fields: [
    meta_default,
    headerSmall_default,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [title_default, markdown_default, image_default, svg_default, cta_default]
    },
    {
      label: "Reise",
      name: "travel",
      widget: "object",
      fields: [title_default, svg_default, cta_default]
    }
  ]
};
var marketingcampaign_default = marketingcampaign;

// cms/page/starnews.ts
var starnews = {
  file: "content/page/starnews.json",
  label: "Star News",
  name: "starnews",
  fields: [
    meta_default,
    {
      label: "Start",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        image_default,
        {
          label: "Artikel",
          name: "article",
          widget: "relation",
          collection: "article",
          value_field: "slug",
          display_fields: ["title"],
          search_fields: ["title"]
        },
        {
          label: "Button",
          name: "button",
          widget: "string"
        }
      ]
    },
    {
      label: "Seite",
      name: "aside",
      widget: "object",
      fields: [
        { label: "Titel Kategorien", name: "categories", widget: "string" },
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
  editor: {
    preview: false
  },
  files: [
    home_default,
    services_default,
    marketingcampaign_default,
    strategyworkshop_default,
    marketingstrategy_default,
    salesmarketing_default,
    customers_default,
    contact_default,
    starnews_default,
    forYou_default
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
  folder: "content/category",
  slug: "{{slug}}",
  create: true,
  fields: [
    title_default,
    {
      label: "Slug",
      name: "slug",
      widget: "string"
    }
  ]
};
var category_default = category;

// cms/setting/footer.ts
var linkFields = [
  {
    label: "Text",
    name: "text",
    type: "string"
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/"
  }
];
var link = {
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields,
  collapsed: false
};
var text2 = {
  label: "Text",
  name: "text",
  widget: "object",
  fields: [{ label: "Text", name: "text", widget: "text" }]
};
var externalLinkFields = [
  {
    label: "Text",
    name: "text",
    type: "string"
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL sollte nicht auf die selbe Seite zeigen, kann aber alles enthalten. Beispiele: mailto:kontakt@tortuga-webdesign.de oder https://tortuga-webdesign.de/referenzen/"
  }
];
var externalLink = {
  label: "Externer Link",
  name: "externalLink",
  widget: "object",
  fields: externalLinkFields,
  collapsed: false
};
var footer = {
  file: "content/setting/footer.json",
  label: "Footer",
  name: "footer",
  fields: [
    {
      label: "Bilder",
      name: "images",
      widget: "list",
      collapsed: false,
      field: { label: "Bild", name: "image", widget: "image" }
    },
    {
      label: "Zeile 1",
      name: "row1",
      widget: "object",
      collapsed: false,
      fields: [
        { label: "Copyright", name: "copyright", widget: "string" },
        {
          label: "Inhalt",
          name: "content",
          widget: "list",
          types: [link, externalLink, text2]
        }
      ]
    },
    {
      label: "Zeile 2",
      name: "row2",
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
  fields: [
    { label: "Favicon", name: "favicon", widget: "image" },
    {
      label: "E-Mail",
      name: "email",
      widget: "string"
    },
    {
      label: "Handy",
      name: "mobile",
      widget: "string"
    },
    {
      label: "Festnetz",
      name: "phone",
      widget: "string"
    },
    {
      label: "LinkedIn",
      name: "linkedin",
      widget: "string"
    },
    {
      label: "WhatsApp",
      name: "whatsapp",
      widget: "string"
    }
  ]
};
var global_default = global;

// cms/setting/navigation.ts
var linkFields2 = [
  {
    label: "Text",
    name: "text",
    type: "string"
  },
  {
    label: "url",
    name: "url",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/"
  }
];
var link2 = {
  label: "Normales Item",
  name: "link",
  widget: "object",
  fields: linkFields2,
  collapsed: false
};
var links = {
  label: "Dropdown Item",
  name: "links",
  widget: "object",
  collapsed: false,
  fields: [
    {
      label: "Text",
      name: "text",
      widget: "string"
    },
    {
      label: "Links",
      name: "links",
      widget: "list",
      fields: linkFields2
    }
  ]
};
var navigation = {
  file: "content/setting/navigation.json",
  label: "Navigation",
  name: "navigation",
  fields: [
    {
      label: "Links",
      name: "links",
      widget: "list",
      collapsed: false,
      types: [link2, links]
    }
  ]
};
var navigation_default = navigation;

// cms/setting/index.ts
var setting = {
  name: "setting",
  label: "Einstellungen",
  label_singular: "Einstellung",
  delete: false,
  editor: {
    preview: false
  },
  files: [global_default, navigation_default, footer_default]
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
  create: true,
  fields: [
    { label: "Titel", name: "title", widget: "string" },
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Inhalt", name: "body", widget: "markdown" }
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
  folder: "content/customer",
  slug: "{{fields.customer}}",
  create: true,
  fields: [
    { label: "Text", name: "text", widget: "text" },
    { label: "Kunde", name: "customer", widget: "string" },
    {
      label: "Unternehmen",
      name: "company",
      widget: "string",
      required: false
    }
  ]
};
var customer_default = customer;

// cms/article/index.ts
var article = {
  name: "article",
  label: "Artikel",
  label_singular: "Artikel",
  editor: {
    preview: false
  },
  extension: "json",
  folder: "content/article",
  slug: "{{fields.slug}}",
  create: true,
  fields: [
    image_default,
    { label: "Preview Bild", name: "previewimage", widget: "image" },
    title_default,
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Datum", name: "date", widget: "datetime", time_format: false },
    {
      label: "Kategorie",
      name: "categories",
      widget: "relation",
      multiple: true,
      collection: "category",
      search_fields: ["title"],
      value_field: "title"
    },
    { label: "Auszug", name: "excerpt", widget: "text" },
    { label: "Inhalt", name: "body", widget: "markdown" }
  ]
};
var article_default = article;

// cms/config.ts
var config2 = {
  publish_mode: "editorial_workflow",
  backend: {
    name: "git-gateway",
    branch: "main",
    repo: "danielmoessner/bluestarmarketing.de"
  },
  local_backend: true,
  locale: "de",
  display_url: "https://bluestarmarketing.de",
  site_url: "https://bluestarmarketing.de",
  media_folder: "/public/media",
  public_folder: "/media",
  load_config_file: false,
  collections: [page_default, article_default, category_default, customer_default, setting_default, legal_default]
};
var config_default = config2;
export {
  config_default as default
};
