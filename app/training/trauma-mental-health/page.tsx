import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

const SLUG = "trauma-mental-health";

export const metadata = categoryMetadata(SLUG);

export default function Page() {
  return <CategoryPage slug={SLUG} />;
}
