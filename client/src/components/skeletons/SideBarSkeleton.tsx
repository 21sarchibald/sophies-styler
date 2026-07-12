export default function SidebarSkeleton() {
  return (
    <div className="w-full rounded-xl bg-white p-5 shadow-sm lg:sticky lg:top-0 lg:h-screen lg:w-80 xl:w-96 animate-pulse">

      <div className="mx-auto mb-6 h-8 w-48 rounded bg-gray-200" />

      <div className="mx-auto mb-6 h-8 w-36 rounded bg-gray-200" />

      <div className="mx-auto mb-6 aspect-square w-full max-w-[270px] rounded bg-gray-200" />

      <div className="space-y-3">
        <div className="h-4 rounded bg-gray-200" />
        <div className="h-4 rounded bg-gray-200" />
        <div className="h-4 w-3/4 rounded bg-gray-200" />
      </div>

      <div className="mx-auto mt-8 h-12 w-56 rounded-xl bg-gray-200" />

    </div>
  );
}