export default function GallerySkeleton() {
    return (
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className={`mb-4 w-full rounded-lg bg-gray-200 animate-pulse break-inside-avoid ${
              index % 3 === 0
                ? "h-80"
                : index % 3 === 1
                ? "h-60"
                : "h-96"
            }`}
          />
        ))}
      </div>
    );
  }