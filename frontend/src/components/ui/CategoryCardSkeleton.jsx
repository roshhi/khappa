const CategoryCardSkeleton = () => {
    return (
      <div className="skeleton-card h-70">
        <div className="skeleton-image shimmer"></div>
  
        <div className="skeleton-content">
          <div className="skeleton-title shimmer"></div>
          <div className="skeleton-text shimmer"></div>
        </div>
      </div>
    );
  };
  
  export default CategoryCardSkeleton;
  