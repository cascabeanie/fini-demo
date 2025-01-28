import useLocalStorage from "../hooks/use-local-storage";

import Button from "../components/ui/buttons/button";

import { Trash2 } from "lucide-react";

export default function LocalStorage() {
  const { removeItem } = useLocalStorage("tasks");
  return (
    <>
      <div className="my-14 flex flex-col items-center gap-10">
        <h2 className="text-center text-2xl font-semibold md:text-3xl">
          Information on the Use of Local Storage in Fini
        </h2>

        <div className="flex max-w-6xl flex-col gap-14 px-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium md:text-2xl">
              About Local Storage in Fini
            </h3>
            <p className="text-lg md:text-xl">
              Fini is a non-commercial web application developed for educational
              purposes. This demo of Fini does not use authentication or store
              personal data in an external database. Instead, it uses local
              storage—a feature of your browser that saves data directly on your
              device. This allows users to create, update, delete, and complete
              their tasks even after the page session ends.
            </p>

            <p className="text-lg md:text-xl">
              Without local storage, any actions users take on tasks would be
              lost when the page session ends; therefore, the use of local
              storage is essential to provide the service the user requests, and
              its use falls under the "strictly necessary" exemption of the
              Privacy and Electronic Communications Regulations (PECR).
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium md:text-2xl">
              How Local Storage is Used
            </h3>
            <ul className="flex list-inside list-disc flex-col gap-2 text-lg md:text-xl">
              <li>
                Local storage is used solely to store your tasks in the browser.
              </li>
              <li>
                No third parties store or access any information in the user’s
                device or receive this information.
              </li>
              <li>
                Data stored in local storage does not expire unless you manually
                clear it.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium md:text-2xl">
              User Control Over Local Storage
            </h3>
            <p className="text-lg md:text-xl">
              Users have full control over the data stored in local storage. If
              you wish to remove your data, you can do so by clearing local
              storage in your browser settings. Below are links to guides that
              explain how to view or clear your local storage:
            </p>

            <ul className="flex list-inside list-disc flex-col gap-2 text-lg md:text-xl">
              <li>
                <a
                  className="text-blue-800 underline-offset-4 hover:underline"
                  href="https://developer.chrome.com/docs/devtools/storage/localstorage"
                >
                  Guide for Google Chrome
                </a>
              </li>
              <li>
                <a
                  className="text-blue-800 underline-offset-4 hover:underline"
                  href="https://support.mozilla.org/en-US/kb/storage"
                >
                  Guide for Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  className="text-blue-800 underline-offset-4 hover:underline"
                  href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                >
                  Guide for Apple Safari
                </a>
              </li>
            </ul>

            <p className="text-lg md:text-xl">
              Alternatively, the button below will allow you to quickly remove
              all tasks stored in your browser's local storage.
            </p>

            <span
              onClick={() => {
                removeItem();
              }}
            >
              <Button buttonVariant={"delete"} buttonType={"button"}>
                Delete All Tasks
                <Trash2 size={20} />
              </Button>
            </span>

            <p className="text-lg md:text-xl">
              For more information about local storage, you can also refer to
              this{" "}
              <a
                className="text-blue-800 underline-offset-4 hover:underline"
                href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
              >
                MDN article
              </a>{" "}
              on local storage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
