import useTranslation from "next-translate/useTranslation";

export default function Page() {
  const { t } = useTranslation();
  return <div>Hello {t("common:title")}</div>;
}

export function getStaticPaths() {
  const ids = ["1", "2"];

  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: true,
  };
}
