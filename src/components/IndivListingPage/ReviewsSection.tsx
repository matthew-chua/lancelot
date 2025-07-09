import ReviewCard from "./ReviewCard";

export default function ReviewsSection() {
  const reviews = [
    {
      reviewerName: "Sarah Johnson",
      rating: 5,
      date: "March 15, 2024",
      content: "Amazing instructor! The lessons were well-structured and I learned so much. The teaching style was clear and engaging, making complex concepts easy to understand.",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      reviewerName: "Michael Chen",
      rating: 4,
      date: "March 10, 2024",
      content: "Very knowledgeable instructor with great communication skills. The only reason for 4 stars is that sometimes the pace was a bit fast for beginners.",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      reviewerName: "Emily Rodriguez",
      rating: 5,
      date: "March 5, 2024",
      content: "Exceptional teaching methods! The instructor was patient, thorough, and provided excellent feedback. I particularly appreciated the practical examples and exercises.",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
    },
    {
      reviewerName: "David Kim",
      rating: 4,
      date: "February 28, 2024",
      content: "Great experience overall. The instructor was professional and clearly experienced. Would definitely recommend to others looking to learn.",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            reviewerName={review.reviewerName}
            rating={review.rating}
            date={review.date}
            content={review.content}
            profileImage={review.profileImage}
          />
        ))}
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            reviewerName={review.reviewerName}
            rating={review.rating}
            date={review.date}
            content={review.content}
            profileImage={review.profileImage}
          />
        ))}
      </div>
    </div>
  );
}
