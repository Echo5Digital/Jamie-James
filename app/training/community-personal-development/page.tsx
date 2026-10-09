import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

const SLUG = "community-personal-development";

export const metadata = categoryMetadata(SLUG);

export default function Page() {
  return <CategoryPage slug={SLUG} />;
}
