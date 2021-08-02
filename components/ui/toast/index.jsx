import { useEffect, useState } from "react";

const Toast = ({ type, title, children }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }, []);

  if (type === "error") {
    return (
      open && (
        <div className="flex justify-center">
          <div
            className={
              "flex w-full max-w-sm overflow-hidden bg-base-100 rounded-lg shadow m-5 fixed top-0 lg:right-5 z-50 transition duration-300"
            }
          >
            <div className="flex items-center justify-center w-12 bg-error">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-error dark:text-red-400">
                  {title}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  {children}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
};

export { Toast };
