// src/hooks/useFaqSection.js
import { useEffect, useState } from "react";
import frontMatter from "front-matter";
import { useTranslation } from "react-i18next";

// Static imports of all markdown files
import faq1En from "../content/faq/faq1/faq1.en.md?raw";
import faq1Ja from "../content/faq/faq1/faq1.ja.md?raw";

import faq2En from "../content/faq/faq2/faq2.en.md?raw";
import faq2Ja from "../content/faq/faq2/faq2.ja.md?raw";

import faq3En from "../content/faq/faq3/faq3.en.md?raw";
import faq3Ja from "../content/faq/faq3/faq3.ja.md?raw";

import faq4En from "../content/faq/faq4/faq4.en.md?raw";
import faq4Ja from "../content/faq/faq4/faq4.ja.md?raw";

const faqMap = {
  faq1: { en: faq1En, ja: faq1Ja },
  faq2: { en: faq2En, ja: faq2Ja },
  faq3: { en: faq3En, ja: faq3Ja },
  faq4: { en: faq4En, ja: faq4Ja },
};

export const useFaqSection = (section = "faq1") => {
  const { i18n } = useTranslation();
  const [data, setData] = useState({ faqs: [] });

  useEffect(() => {
    const raw = faqMap[section]?.[i18n.language] || "";
    const parsed = frontMatter(raw);
    setData(parsed.attributes);
  }, [section, i18n.language]);

  return data;
};
