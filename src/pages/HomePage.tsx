import CategoryCard from "@/components/HomePage/CategoryCard";
import ListingCard from "@/components/HomePage/ListingCard";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full gap-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Featured Listings</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </div>
    </div>
  );
}
