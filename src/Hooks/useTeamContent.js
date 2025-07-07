// src/hooks/useTeamContent.js
import { useEffect, useState } from "react";
import frontMatter from "front-matter";
import { useTranslation } from "react-i18next";

// Static imports (for Vite raw load)
import enRaw from "../content/team/team.en.md?raw";
import jaRaw from "../content/team/team.ja.md?raw";

export const useTeamContent = () => {
  const { i18n } = useTranslation();
  const [content, setContent] = useState({ members: [] });

  useEffect(() => {
    const raw = i18n.language === "ja" ? jaRaw : enRaw;
    const parsed = frontMatter(raw);
    setContent(parsed.attributes);
  }, [i18n.language]);

  return content;
};
