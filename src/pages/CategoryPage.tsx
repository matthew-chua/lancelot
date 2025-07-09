import ListingCard from "@/components/HomePage/ListingCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { category } = useParams();
  console.log("category", category);
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Tuition</h1>
      <div className="w-full flex items-center justify-center mt-4">
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="private">Private</TabsTrigger>
            <TabsTrigger value="group">Group</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </div>
  );
}
