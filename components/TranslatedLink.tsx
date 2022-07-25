import { useRouter } from "next/router";
import Link from "next/link";
import rewrites from "../content/setting/rewrites.json";

const TranslatedLink = ({ href, children }) => {
  const { locale } = useRouter();
  // Get translated route for non-default locales
  const rewritesDict = {};
  rewrites["de"]["rewrites"].forEach((rewrite) => {
    rewritesDict[rewrite.to] = rewrite.from;
  });
  const translatedPath = rewritesDict[`/${locale}${href}`];

  return (
    <Link href={href} as={translatedPath}>
      {children}
    </Link>
  );
};

export default TranslatedLink;
