import ProfileCard from "@/components/IndivListingPage/ProfileCard";
import ReviewsSection from "@/components/IndivListingPage/ReviewsSection";
import { useParams } from "react-router-dom";

export default function IndividualListingPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="flex gap-8">
      <div className="sticky top-4 h-fit">
        <ProfileCard />
      </div>
      <ReviewsSection />
    </div>
  );
}
