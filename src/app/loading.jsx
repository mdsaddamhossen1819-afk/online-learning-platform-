import { eachDayOfInterval } from "date-fns";

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center">
            <div className="text-center">

                <div className="relative w-24 h-24 mx-auto">
                    <div className="absolute inset-0 rounded-full border-[6px] border-blue-200"></div>

                    <div className="absolute inset-0 rounded-full border-[6px] border-blue-600 border-t-transparent animate-spin"></div>
                </div>

                <h2 className="mt-8 text-4xl font-extrabold">
                    <span className="text-blue-600">Learn</span>
                    <span className="text-slate-900">Sphere</span>
                </h2>

                <p className="mt-3 text-gray-600 text-lg animate-pulse">
                    Loading amazing courses...
                </p>
            </div>
        </div>
    );
}
export default Loading 