// src/hooks/useTeamContent.js
import { useEffect, useState } from "react";
import frontMatter from "front-matter";
import { useTranslation } from "react-i18next";

// Static import (unified markdown with both languages)
import unifiedRaw from "../content/unified_team.md?raw";

export const useTeamContent = () => {
  const { i18n } = useTranslation();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const parsed = frontMatter(unifiedRaw);
    const lang = i18n.language === "ja" ? "ja" : "en";

    const mapped =
      parsed.attributes.members?.map((member) => ({
        name: member[`name_${lang}`],
        role: member[`role_${lang}`],
        description: member[`description_${lang}`],
        image: member.image,
      })) || [];

    setMembers(mapped);
  }, [i18n.language]);

  return { members };
};
