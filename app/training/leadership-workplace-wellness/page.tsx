import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

const SLUG = "leadership-workplace-wellness";

export const metadata = categoryMetadata(SLUG);

export default function Page() {
  return <CategoryPage slug={SLUG} />;
}
