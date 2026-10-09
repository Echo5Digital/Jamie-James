import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

const SLUG = "clinical-training";

export const metadata = categoryMetadata(SLUG);

export default function Page() {
  return <CategoryPage slug={SLUG} />;
}
