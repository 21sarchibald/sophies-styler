export default function DashboardSkeleton() {
    return (
      <div className="w-full rounded-xl bg-white p-5 shadow-sm animate-pulse">
  
        <div className="mb-8 h-8 w-40 rounded bg-gray-200" />
  
        {[...Array(5)].map((_, i) => (
          <div key={i} className="mb-5">
            <div className="mb-2 h-4 w-24 rounded bg-gray-300" />
            <div className="h-5 w-40 rounded bg-gray-200" />
          </div>
        ))}
  
        <div className="mt-6 h-12 w-36 rounded-xl bg-gray-200" />
  
      </div>
    );
  }

