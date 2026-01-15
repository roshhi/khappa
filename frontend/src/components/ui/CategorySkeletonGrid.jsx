import CategoryCardSkeleton from "./CategoryCardSkeleton";

const CategorySkeletonGrid = () => {
  return (
    <div className="categories-grid mt-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <CategoryCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default CategorySkeletonGrid;
